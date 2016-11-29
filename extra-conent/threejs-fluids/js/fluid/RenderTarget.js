/** Binds a shader to a texture and quad. Allows us to render a shader offscreen. Crucial for combining our computations.
Inspired by this Stackoverflow post: http://stackoverflow.com/questions/21533757/three-js-use-framebuffer-as-texture
*/
function RenderTarget(shaderMaterial, width, height) {
	
	// the shader we are using
	this.shaderMaterial = shaderMaterial;



	// the size of the frame buffer
	this.width = width;
	this.height = height;

	// we maintain two texture buffers so that we can swap between reading and writing.
	this.readBuffer  = new THREE.WebGLRenderTarget(width, height, {depthBuffer: false, stencilBuffer: false, format: THREE.RGBAFormat});
	this.writeBuffer = new THREE.WebGLRenderTarget(width, height, {depthBuffer: false, stencilBuffer: false, format: THREE.RGBAFormat});

	// initialize texture buffer
	this.readBuffer.texture = createTextureWithColorMap(this.width, this.height, function(x, y) {
		var rgba = new Uint8Array(4);
		rgba[0] = 1.0;
		rgba[1] = 0.0;
		rgba[2] = 0.0;
		rgba[3] = 1.0;
		return rgba;
	});
		

	this.writeBuffer.texture = createTextureWithColorMap(this.width, this.height, function(x, y) {
		var rgba = new Uint8Array(4);
		rgba[0] = 1.0;;
		rgba[1] = 0.0;
		rgba[2] = 0.0;
		rgba[3] = 1.0;

		return rgba;
	});

	// then initiate the rendering scene
	this.setupRenderingToTextureScene();
}

/** constructs a unit quad quad with the given shader (which might include a texture) */
RenderTarget.prototype.createRenderQuad = function(shaderMaterial) {
	var plane = new THREE.PlaneGeometry( this.width, this.height );

	// TODO: render surface normal and see which direction is front and back. Cheap hack for now.
	//shaderMaterial.side = THREE.DoubleSide;

	// we use a shader to render the geometry
	var quad = new THREE.Mesh( plane, shaderMaterial );
	quad.matrixAutoUpdate = false;

	return quad;

}
// ------ stuff for rendering into the scene ----
// the quad for rendering the content
RenderTarget.prototype.setupRenderingToTextureScene = function() {
	
	this.scene = new THREE.Scene();

	// create the lights one lighting the front
	var light = new THREE.DirectionalLight(0xffffff);
	light.position.set(0, 0, 1);
	this.scene.add(light);

	// create the camera
	this.camera = new THREE.OrthographicCamera(- this.width / 2.0, this.width / 2.0, this.height / 2.0, -this.height / 2.0, -1000, 1000);

	// place the rendering quad in the scene
	this.renderQuad = this.createRenderQuad(this.shaderMaterial);
	this.scene.add(this.renderQuad);
}

// swap the read and write buffers
RenderTarget.prototype.swap = function() {
	var tmp = this.writeBuffer;
	this.writeBuffer = this.readBuffer;
	this.readBuffer = tmp;
}

// updates the shader data, usually called right before a rendering.
RenderTarget.prototype.updateShaderData = function() {

	// give the shader access to the current texture data
	this.shaderMaterial.uniforms.texture = this.readBuffer.texture;

	// render into our RenderTarget
	// 

	// swap buffers so that we save the current data
	// this.swap();
}