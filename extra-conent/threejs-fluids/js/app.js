/**
The general idea:
The Fragment Shader or Pixel shader is what renders the graphics to the screen.

Tasks broken down into pieces:

Big goal:
- Write fluid solver
- Write code to solve via stepping
	- Make data types for the various fields
		- pressure texture
		- velocity texture
		- force texture
		- density texture (or particle texture)
	- Make fragment programs or pixel shaders for each operation
		- advect (velocity field)
		- advect (density or particle field)
		- dissipate
		- divergence of velocity field
		- pressure solve
		- pressure project
		- force apply
		- structure so that we can include base code
		- handle boundaries
			- add 1px boundary to crate image or use convenience function like authors of haxiomatic do.

- Write code to visualize the fluid solver
	- Visualize a scalar field
		- Just write GSL shaders with color [ Done ]
		- Write GSL shader from custom texture [ Done ]

	- Visualize a vector field
		- How do they store the vecor field?
			- Store position in first two coordinates, and vector in second two coordinates. They visualize velocity as just RG = xy of velocity field.
			They add some slow decay of .99.
		- How do they represent the fluid?
			- Fluid as a texture. I think the coordinates are [-1, 1]^2 * fluidScale for the real space?

		- How do they render multiple things on screen? Multiple textures? [ Done ]
			This appears to be the trick: multiple frame buffers which are double buffered. There is a similar feature in Three.JS called WebGLRenderTarget. Maybe I can construct something double buffered with this?

			You need the double buffered thing so that we don't overwrite the data as we're processing it?

			One then binds a shader to this renderer. We render a quad into each of the render targets which contains our textures

			How to do this:
			https://github.com/haxiomic/GPU-Fluid-Experiments/blob/master/Source/GPUFluid.hx
			https://github.com/haxiomic/gltoolbox/blob/master/gltoolbox/render/RenderTarget2Phase.hx

			http://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html on Framebuffers

			Architecture:
			Main code -> Fluid -> RenderTarget -> Geometry -> Shader

			We have multiple render targets and each one has a quad. The render targets can swap between two textures that they use as render targets, and the shader has access to both. The shader does the actual computation while the render targets just handle rendering. 

	- Visualize a scalar field [ Done ]
	- Add mouse interactivity.
	- Choose correct coordinates for fluid (and choose right scale)
	-	We want to shade particles as points.
			We need a UV map to connect particles to shader.
	-	We want to shade the velocity field 
	- How do they add the cool texture when you move the mouse?
		Use some kind of fractional projection to see if point lies in the path of the mouse?
	- Visualize particles
		- Store the particles with points and positions
		- Draw particles as points.
		- One shader for advecting the particles
		- One shader for drawing the particle (need to include mouse interaction to change the color). 
		- Need to use UV coordinates to map lower resolution texture to full screen simulation (if I don't want resolution of the screen
		to be the resolution of my grid).

Q: how do we combine multiple texture to produce the final texture?

Immediate TODO:
1. Fix the texture scaling at each level.
- Render quad for main scene
- GPUComputationRenderer
- All the places where we make textures?

## Coordinate Systems

There a several layers of coordinate systems that we must track.

1. Viewport
Coordinates in this space represent the actual graphics on your computer screen.

2. World
Coordinates in this space represent the 3D world before projecting via camera matrix to viewport coordinates.

3. Object or material
Local coordinates for a mesh before we apply the affine transformation that maps this object into world coordinates.

4. UV coordinates
Texture coordinates [0, 1]x[0, 1] that describe how to texture an object when rendered. 

These are also shader coordinates.

5. Image coordinates
Every texture is just an image. We use UV coordinates to map into this image. 

These are also indices for the texture variables.

6. Fluid coordinates
Coordinates for the fluid equation. Might be in physical units.

Conversion to image coordinates is just a scaling on two levels: cell size and fluid scale.

Fluid scale is the resolution of our grid (how many grid points) relative to the resolution 
pixel count of the actual viewport.

Cell size is the width and height of a single grid cell. If cell size is 32 inches, then we are
sampling the fluid every 32 inches.

In other words, one pixel in the image coordinates corresponds to a grid cell of size 32x32.

% TODO in next hour:
%	1. Fix coordinate scaling for Poisson solver [ Done? ]
%	2. Texture a point cloud with UV coordinates
%		Add a grid of particles to the current scene (get scaling right since we are now in world space)
*/
var renderer, mainRenderScene, fluid, particles;


var WIDTH   	= 1 << 9;
var HEIGHT  	= 1 << 9;
var DT 			= .1;
var FLUID_SCALE = 1 / 2;
var FLUID_CELL_SIZE = 1 << 6; 

var MAIN_RENDERING_SHADER = "#pressureFieldVisualization";

$(document).ready(function() {
	init();
	animate();	
});


function enableAxes() {
	// plots the axes:
	// red: X, green: Y, blue: Z
	var axisHelper = new THREE.AxisHelper( 4 );
	mainRenderTarget.scene.add(axisHelper);
}

function setupRenderer() {
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( WIDTH, HEIGHT );
	renderer.autoClear = false;

	document.body.appendChild( renderer.domElement );
}

function setupMainRenderQuad() {
	
	mainRenderScene = new MainRenderScene(WIDTH, HEIGHT, 
	{
		vertexShader: 	$("#vertexShader").text(), 
		fragmentShader: $(MAIN_RENDERING_SHADER).text()
	});
}


function setupParticles() {	
	var shaders = {
		fragmentShader: $('#particleFragmentShader').text(),
		vertexShader: $('#particleVertexShader').text()
	};

	particles = new Particles(10000, WIDTH, HEIGHT, 128.0 / FLUID_CELL_SIZE, shaders);

	// properly center in world space
	particles.mesh.position.z = .0001;
	particles.mesh.position.x -= 256.0;
	particles.mesh.position.y -= 256.0;

	mainRenderScene.scene.add(particles.mesh);

	// move the mesh to center at the origin
	//particles.mesh.position.sub(new THREE.Vector3(WIDTH / 2.0, HEIGHT / 2.0, .5));
	
}

function setupFluidSolver() {
	// fluid with only six grid points
	var shaders 			    = new Object();

	shaders.defaultVertexShader   = $('#vertexShader').text();
	shaders.pressureShader 		  = $('#pressureShader').text();
	shaders.divergenceShader 	  = $('#divergenceShader').text();

	// we don't have a one-to-one mapping between pixels in the viewport
	// and grid cells in the simulator.
	// If WIDTH = HEIGHT = 256 and FLUID_SCALE = 1/2 then
	// horizontalGridPoints = 128.
	var size = {
		horizontalGridPoints: WIDTH * FLUID_SCALE, 
		verticalGridPoints: HEIGHT * FLUID_SCALE,
		cellSize: FLUID_CELL_SIZE // we choose this arbitrarily?
	}

	fluid = new Fluid(size, 
					  shaders, 
					  renderer);

	// do one test iteration
	fluid.step(.1);
}

function init() {

	setupRenderer();

	setupMainRenderQuad();

	setupParticles();

	setupFluidSolver();

	// enableAxes();	
}

function animate() {
	requestAnimationFrame( animate );

	//  controls.update();

	render();		
};

// render stuff
function render() {

	if (mainRenderScene) {
		// update the texture data to display the pressure from the fluid solver
		if (fluid) {
			mainRenderScene.renderQuad.material.uniforms.outputTexture.value = fluid.gpuComputer.getCurrentRenderTarget( this.fluid.pressureVariable ).texture;	
		}
		
		// render the main quad with texture
		renderer.render( mainRenderScene.scene, mainRenderScene.camera );


		// render the main quad with texture
		// renderer.render( mainRenderScene.scene, mainRenderScene.camera,  fluid.gpuComputer.getCurrentRenderTarget( this.fluid.divergenceVariable ), true);

		// DEBUGGING: check pixel value
		// var pixelValue = new Float32Array(4);

		// this.renderer.readRenderTargetPixels(fluid.gpuComputer.getCurrentRenderTarget( this.fluid.divergenceVariable ), 256, 256, 1, 1, pixelValue);	
		// console.log(pixelValue);
	}
	
}