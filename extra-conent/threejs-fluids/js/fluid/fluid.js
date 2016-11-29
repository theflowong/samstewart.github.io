function Fluid(N, shaders) {

	// we need a context in which to render
	this.N = N;
	this.jacobiIterations = 30;

	// the background buffer for rendering the pressure texture
	this.pressureComputer = new RenderTarget(new THREE.ShaderMaterial(
		{
			uniforms: {
				"texture": null,
				"divergence": null,
				"dx": 1.0 / this.N
			},
			vertexShader: shaders.defaultVertexShader,
			fragmentShader: shaders.pressureShader,
			depthWrite: false
		}), N, N);
	
}

// steps the simulation by updating all of the shaders. We need a renderer to do this.
Fluid.prototype.step = function(dt, renderer) {
	this.renderer = renderer;
	this.dt = dt;

	// TODO: debugging only
	this.solvePressure();

};

Fluid.prototype.solvePressure = function() {

	// setup the information for the pressure texture
	for (var i = 0; i < this.jacobiIterations; i++) {
		// give the shader the new read buffer
		this.pressureComputer.updateShaderData();
		
		// run the shader
		this.renderer.render( this.pressureComputer.scene, this.pressureComputer.camera, this.pressureComputer.writeBuffer, true);

		// put the newly written data in the read buffer
		this.pressureComputer.swap();
	}

	// the final computed pressure field will be in the read buffer
}
