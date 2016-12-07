// simple class to manage the scene we use for rendering
function MainRenderScene(width, height, shaders) {

	this.width = width;
	this.height = height;

	////////////////////////////////////////////////////
	// setup the main scene
	////////////////////////////////////////////////////
	this.scene = new THREE.Scene();

	// create the lights one lighting the front
	var light = new THREE.DirectionalLight(0xffffff);
	light.position.set(0, 0, 1);
	this.scene.add(light);

	// create the camera
	this.camera = new THREE.OrthographicCamera(- this.width / 2.0, this.width / 2.0, this.height / 2.0, -this.height / 2.0, -1000, 1000);

	// place the rendering quad in the scene

	this.renderQuad = this.createRenderQuad(shaders);
	this.scene.add(this.renderQuad);
}

/** constructs a unit quad quad with the given shader (which might include a texture) */
MainRenderScene.prototype.createRenderQuad = function(shaders) {

	var defaultTexture = GPUComputationRenderer.createTexture(this.width, this.height);

	// visualize the solution to the pressure equation
	var shaderMaterial = new THREE.ShaderMaterial( {
				uniforms: {
					"outputTexture": { value: defaultTexture }
				},
				vertexShader:   shaders.vertexShader,
				fragmentShader: shaders.fragmentShader,
				depthWrite: false
			} );

	var plane = new THREE.PlaneGeometry( this.width, this.height );

	// TODO: render surface normal and see which direction is front and back. Cheap hack for now.
	//shaderMaterial.side = THREE.DoubleSide;

	// we use a shader to render the geometry
	var quad = new THREE.Mesh( plane, shaderMaterial );
	quad.matrixAutoUpdate = false;

	return quad;

}