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

*/
var renderer, mainRenderScene, fluid;


var WIDTH   = 512.0;
var HEIGHT  = 512.0;
var DT 		= .1;

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
		vertexShader: $("#vertexShader").text(), 
		fragmentShader: $("#pressureFieldVisualization").text() 
	});
}

function setupFluidSolver() {
	// fluid with only six grid points
	var shaders 			    = new Object();

	shaders.defaultVertexShader   = $('#vertexShader').text();
	shaders.pressureShader 		  = $('#pressureShader').text();
	shaders.divergenceShader 	  = $('#divergenceShader').text();

	fluid = new Fluid(WIDTH, shaders, renderer);

	// do one test iteration
	fluid.step(.1);
}

function init() {

	setupRenderer();

	setupMainRenderQuad();

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
		renderer.render( mainRenderScene.scene, mainRenderScene.camera,  fluid.gpuComputer.getCurrentRenderTarget( this.fluid.divergenceVariable ), true);

		// DEBUGGING: check pixel value
		// var pixelValue = new Float32Array(4);

		// this.renderer.readRenderTargetPixels(fluid.gpuComputer.getCurrentRenderTarget( this.fluid.divergenceVariable ), 256, 256, 1, 1, pixelValue);	
		// console.log(pixelValue);
	}
	
}