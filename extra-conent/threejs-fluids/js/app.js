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


// the various constants used for scaling
var FLUID_SCALE = 1 / 2;

// the list of scale constants
var SCALE_CONSTANTS 	  = {};
var MAIN_RENDERING_SHADER = "#pressureFieldVisualization";

$(document).ready(function() {
	init();
	animate();	
});

/**
Generate constants for the various coordinate systems.

## Coordinate Systems (outwards in)

1. Window coordinates 
	
2. Camera coordinates

3. World Coordinates

4. Body Coordinates

5. UV / texture coordinates

6. Fluid coordinates
	- One texture pixel for every grid cell.
	- Downsample from full window size since too computationally expensive.

7. Particle coordinates
	- One pixel in texture for every particle.

Conversion to image coordinates is just a scaling on two levels: cell size and fluid scale.

Cell size is the width and height of a single grid cell. If cell size is 32 inches, then we are
sampling the fluid every 32 inches.

In other words, one pixel in the image coordinates corresponds to a grid cell of size 32x32.
*/
function generateScaleConstants(fluid_downscaling_factor) {
	var coordinateConstants = new Object();

	coordinateConstants.window  = renderer.getSize();

	coordinateConstants.fluid = {
		// number of horizontal grid points
		hori_grid_points: fluid_downscaling_factor * coordinateConstants.window.width,
		// number of vertical grid points
		vert_grid_points: fluid_downscaling_factor * coordinateConstants.window.height,
		// the cell size in fluid coords (not the same as dx)
		// TODO: pick something sensible for this
		grid_cell_size: 100
	}
	// Q: should we assume the grid points are spaced equally apart?
	coordinateConstants.fluid.dx = 1 / hori_grid_points;
	coordinateConstants.dt 		 = coordinateConstants.fluid.dx;
	

	// number of particles in each direction 
	coordinateConstants.particles.particle_grid_size = (2 << 5) + 1;
	coordinateConstants.particles.total_particles = Math.pow(scale_constants.particles.particle_grid_size, 2);;

	coordinateConstants.particles.cell_size_hort = scale_constants.window.width / (coordinateConstants.particles.particle_grid_size + 1);
	coordinateConstants.particles.cell_size_vert = scale_constants.window.height / (coordinateConstants.particles.particle_grid_size + 1);

	coordinateConstants.particles.particle_size = 5;
	coordinateConstants.particles.drag_coeff = .98; // the factor for simulating drag when the particles move


	return generateScaleConstants;

}

function enableAxes() {
	// plots the axes:
	// red: X, green: Y, blue: Z
	var axisHelper = new THREE.AxisHelper( 4 );
	mainRenderScene.scene.add(axisHelper);
}

function setupRenderer() {
	renderer = new THREE.WebGLRenderer(document.getElement);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.autoClear = false;
}

function setupMainRenderQuad() {
	
	mainRenderScene = new MainRenderScene(
		SCALE_CONSTANTS.window.width, 
		SCALE_CONSTANTS.window.height, 
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


	fluid = new Fluid(SCALE_CONSTANTS, 
					  shaders, 
					  renderer);

	// add the point particles visualization to the scene
	mainRenderScene.scene.add(fluid.particles.mesh);

}

function init() {

	setupRenderer();

	// the fluid world is 1/2 of the real viewport resolution.
	SCALE_CONSTANTS = generateScaleConstants( FLUID_SCALE );

	setupMainRenderQuad();


	setupFluidSolver();

	enableAxes();	
}

function animate() {
	requestAnimationFrame( animate );

	// step the fluid
	fluid.step(DT);
	//  controls.update();

	render();		
};

// render stuff
function render() {

	if (mainRenderScene) {
		// update the texture data to display the pressure from the fluid solver
		if (fluid) {
			mainRenderScene.renderQuad.material.uniforms.outputTexture.value = fluid.gpuComputer.getCurrentRenderTarget( this.fluid.particleVariable ).texture;	

			// var pixelValue = new Float32Array(4 * 5 * 5);

			// this.renderer.readRenderTargetPixels(fluid.gpuComputer.getCurrentRenderTarget( this.fluid.particleVariable ), 0, 0, 5, 5, pixelValue);	
		}

		// render the main quad with texture
		renderer.render( mainRenderScene.scene, mainRenderScene.camera );


		// render the main quad with texture
		// renderer.render( mainRenderScene.scene, mainRenderScene.camera,  fluid.gpuComputer.getCurrentRenderTarget( this.fluid.divergenceVariable ), true);

		// DEBUGGING: check pixel value
		// var pixelValue = new Float32Array(4);

		//this.renderer.readRenderTargetPixels(fluid.gpuComputer.getCurrentRenderTarget( this.fluid.divergenceVariable ), 256, 256, 1, 1, pixelValue);	
		// console.log(pixelValue);
	}
	
}