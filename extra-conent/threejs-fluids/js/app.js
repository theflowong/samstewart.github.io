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
	- Visualize a scalar field [ Done ]
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
	-	We want to shade the velocity field 
	- How do they add the cool texture when you move the mouse?
		Use some kind of fractional projection to see if point lies in the path of the mouse?
	- Visualize particles
		- Store the particles with points and positions [ Done ]
		- Draw particles as points [ Done ]
		- One shader for advecting the particles
		- One shader for drawing the particle (need to include mouse interaction to change the color). 
		- Need to use UV coordinates to map lower resolution texture to full screen simulation (if I don't want resolution of the screen
		to be the resolution of my grid).

		-> How the particle rendering works:

		1. texture for velocity and particle velocity
		2. update particle texture with shader (adds damping)
		3. use vertex shader to update particle positions (UV mapping does the coordinate conversion)

		Q: How do UV coordinates work?
		Q: why is the advection different when solving the equation?
		Q: what are the various coordinate systems that are interacting?

		Test: 
		constant velocity field straight up
	
		-> Particle rendering TODO list
		1. finish moving all particle ownership to fluids [ done ] 
		2. add renderer for particle colors [ done ]
		3. test with constant velocity field
		4. make certain coordinate systems align.

Q: how do we combine multiple texture to produce the final texture?

Immediate TODO
1. Fix the texture scaling at each level. [ Done ]
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

% Done [check!]
%	1. Fix coordinate scaling for Poisson solver [ Done? ]
%	2. Texture a point cloud with UV coordinates [ Done ]
%		Add a grid of particles to the current scene (get scaling right since we are now in world space)

% TODO: 
Bundle all shader code into one JSON file

Problem: We store the particle positions and velocities in a texture.
Indexing into the texture with UV coordinates appears to be causing some distortion due to numerical error
(we are trying to compute 1/3).

Todo: render the particle data to a texture and see how the interpolation skews the result.

The issue is apparently only at the boundary tiles? At least that is the appearance for large values of N.

Todo: fix the strange issue when doing passthrough particle step.
Next goal: make particles step vertically by one unit.
Next goal: make complex swirl field and rotate particles.
Next goal: animate rotation of particles as they are advected by a flow. 
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
	mainRenderScene.scene.add(axisHelper);
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


function setupFluidSolver() {
	// fluid with only six grid points
	var shaders 			    = new Object();

	shaders.defaultVertexShader   = $('#vertexShader').text();
	shaders.pressureShader 		  = $('#pressureShader').text();
	shaders.divergenceShader 	  = $('#divergenceShader').text();
	shaders.particleStepShader 	  = $('#particleStepShader').text();
	shaders.velocityShader 		  = $('#velocityShader').text();

	shaders.particles = {
		vertexShader: $('#particleVertexShader').text(),
		fragmentShader: $('#particleFragmentShader').text()
	}

	// we don't have a one-to-one mapping between pixels in the viewport
	// and grid cells in the simulator.
	// If WIDTH = HEIGHT = 256 and FLUID_SCALE = 1/2 then
	// horizontalGridPoints = 128.
	var size = {
		height: HEIGHT,
		width: WIDTH,
		fluidScale: FLUID_SCALE,
		cellSize: FLUID_CELL_SIZE // we choose this arbitrarily?
	}

	fluid = new Fluid(size, 
					  shaders, 
					  renderer);

	// add the point particles visualization to the scene
	mainRenderScene.scene.add(fluid.particles.mesh);

	// do one test iteration
	// the spatial and temporal integrators are connected? So we choose so \delta t \approx \delta x (Courant ratio).
	// TODO: this choice is arbitrary. Make it more general / justified.
	var dt = 1.0 / (FLUID_SCALE * WIDTH);

	fluid.step(dt);

}

function init() {

	setupRenderer();

	setupMainRenderQuad();


	setupFluidSolver();

	enableAxes();	
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
			mainRenderScene.renderQuad.material.uniforms.outputTexture.value = fluid.gpuComputer.getCurrentRenderTarget( this.fluid.particleVariable ).texture;	
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