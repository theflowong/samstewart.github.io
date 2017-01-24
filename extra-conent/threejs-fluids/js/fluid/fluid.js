function Fluid(size, shaders, renderer) {

	/**
		size = {
			horizontalGridPoints: 512, // represents the number of grid points horizontally
			verticalGridPoints: 512, // represents the number of grid points vertically
			cellSize: 32 // represents the grid box size in fluid space
		}
	*/
	this.size 			  = size;
	this.jacobiIterations = 35;
	this.particleGridSize   = 2 << 4; // length of one side of the particle grid


	// a tool to manage the computations that we are doing on the shader.
	// The scale parameter controls the number of grid points in the fluid we are trying to resolve.
	var horizontalGridPoints = size.width * size.fluidScale;
	var verticalGridPoints = size.height * size.fluidScale;

	this.gpuComputer = new GPUComputationRenderer(
								horizontalGridPoints, 
								verticalGridPoints, 
								renderer);

	var pressureTexture   = this.gpuComputer.createTexture();
	var divergenceTexture = this.gpuComputer.createTexture();

	// the particle grid is actually smaller than the other textures.
	// We have fewer than one particle per point in the velocity field.
	var particleTexture	  = this.gpuComputer.createTexture(this.particleGridSize, this.particleGridSize);
	var velocityTexture	  = this.gpuComputer.createTexture();

	// fill the divergence field with 0 boundary conditions and 1 on the inside.
	fillTexture(divergenceTexture, function(x, y) {

		// we have the Dirichlet conditions of 0 at the boundary.
		if (y == verticalGridPoints - 1 || x == horizontalGridPoints - 1 || x == 0 || y == 0) {
			return Float32Array.from([0.0, 0.0, 0.0, 1.0]);
		}

		return Float32Array.from([1.0, 1.0, 1.0, 1.0]);
	});

	// fill the velocity field with a constant upward field
	fillTexture(velocityTexture, function(x, y) {
		var gridSize = 1.0 / verticalGridPoints;

		// constant upward facing velocity field. 
		return Float32Array.from([0, gridSize, 0, 0]);
	});

	// bind variables to textures
	this.pressureVariable 				= this.gpuComputer.addVariable('pressureTexture', shaders.pressureShader, pressureTexture);
	this.divergenceVariable 			= this.gpuComputer.addVariable('divergenceTexture', shaders.divergenceShader, divergenceTexture);
	this.particleVariable 				= this.gpuComputer.addVariable('particleVariable', shaders.particleStepShader, particleTexture);
	this.velocityVariable 				= this.gpuComputer.addVariable('velocityVariable', shaders.velocityShader, velocityTexture);

	// expose variables to the shader
	this.gpuComputer.setVariableDependencies(this.pressureVariable, [ this.pressureVariable, this.divergenceVariable ]);

	this.gpuComputer.setVariableDependencies(this.divergenceVariable, [ this.divergenceVariable ]);

	this.gpuComputer.setVariableDependencies(this.velocityVariable, [ this.velocityVariable, this.pressureVariable ]);

	this.gpuComputer.setVariableDependencies(this.particleVariable, [ this.particleVariable, this.velocityVariable ]);

	// add the extra parameters for PRESSURE shader
	this.pressureVariable.material.uniforms.dx = { value: 1.0 / size.cellSize };

	// add the extra parameters for the PARTICLE stepping shader
	this.particleVariable.material.uniforms.dt = { value: 1.0 / size.cellSize };
	this.particleVariable.material.uniforms.dragCoefficient = .98;

	// init the renderer
	var error = this.gpuComputer.init();

	if (error !== null) {
		console.error( error);
	}

	// setup the particle visualization
	this.particles = new Particles(this.particleGridSize, 
									size.width, 
									size.height, 
									128.0 / FLUID_CELL_SIZE * 2, 
									shaders.particles, 
									particleTexture);

	this.particles.mesh.position.z = .0001;
	this.particles.mesh.position.x -= WIDTH / 2.0;
	this.particles.mesh.position.y -= HEIGHT / 2.0;

}

// steps the simulation by updating all of the shaders. We need a renderer to do this.
Fluid.prototype.step = function(dt) {

	// update the particle positions according to the velocity field
	// TODO: debugging
	// this.gpuComputer.computeVariable(this.particleVariable);

	// then update the actual particlel field
	// this.particles.mesh.material.uniforms.particleData.value = this.gpuComputer.getCurrentRenderTarget( this.particleVariable ).texture;

	// solve the pressure equation
	// this.solvePressure();
};

Fluid.prototype.solvePressure = function() {

	// setup the information for the pressure texture
	for (var i = 0; i < this.jacobiIterations; i++) {
	
		this.gpuComputer.computeVariable(this.pressureVariable);

		// TODO: sample a pixel value for debugging
		// var sampledPixel = new Float32Array(4);

		// this.gpuComputer.renderer.readRenderTargetPixels(this.gpuComputer.getCurrentRenderTarget( this.pressureVariable ), 256, 256, 1,1, sampledPixel);
		// console.log(sampledPixel);
	}

	// Note: the final computed pressure field will be in the read buffer
}
