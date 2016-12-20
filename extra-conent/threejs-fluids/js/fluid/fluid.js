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

	// a tool to manage the computations that we are doing on the shader
	// every pixel corresponds to a grid point.
	this.gpuComputer = new GPUComputationRenderer(size.horizontalGridPoints, size.verticalGridPoints, renderer);

	var pressureTexture   = this.gpuComputer.createTexture();
	var divergenceTexture = this.gpuComputer.createTexture();

	// fill the divergence field with 0 boundary conditions and 1 on the inside.
	fillTexture(divergenceTexture, function(x, y) {

		// we have the Dirichlet conditions of 0 at the boundary.
		if (y == size.verticalGridPoints - 1 || x == size.horizontalGridPoints - 1 || x == 0 || y == 0) {
			return Float32Array.from([0.0, 0.0, 0.0, 1.0]);
		}

		return Float32Array.from([1.0, 1.0, 1.0, 1.0]);
	});

	// bind variables for PRESSURE
	this.pressureVariable 	= this.gpuComputer.addVariable('pressureTexture', shaders.pressureShader, pressureTexture);
	this.divergenceVariable = this.gpuComputer.addVariable('divergenceTexture', shaders.divergenceShader, divergenceTexture);

	// expose variables to the shader
	this.gpuComputer.setVariableDependencies(this.pressureVariable, [ this.pressureVariable, this.divergenceVariable ]);
	this.gpuComputer.setVariableDependencies(this.divergenceVariable, [ this.divergenceVariable ]);

	// add the extra parameters for PRESSURE shader
	this.pressureVariable.material.uniforms.dx = { value: 1.0 / size.cellSize };

	// init the renderer
	var error = this.gpuComputer.init();

	if (error !== null) {
		console.error( error);
	}
}

// steps the simulation by updating all of the shaders. We need a renderer to do this.
Fluid.prototype.step = function(dt) {
	// solve the pressure equation
	this.solvePressure();
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
