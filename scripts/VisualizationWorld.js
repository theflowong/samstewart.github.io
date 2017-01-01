function VisualizationWorld(canvasName) {
	
	var canvas = document.getElementById(canvasName);

	this.scene = new THREE.Scene();

	var light = new THREE.DirectionalLight(0xffffff);
	light.position.set(0, 0, 1);
	this.scene.add(light);

	// setup the camera
	this.camera = new THREE.PerspectiveCamera( 75, canvas.width / canvas.height, .1, 50)
	this.camera.position.z = 30;

	// setup the renderer
	this.renderer = new THREE.WebGLRenderer( canvas );
	this.renderer.setSize( canvas.width, canvas.height );
	this.renderer.setPixelRatio( window.devicePixelRatio );

	// setup the camera controls
	this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
	this.controls.enableZoom = false;

	this.render = function() {

		this.renderer.render( this.scene, this.camera);
		
	}
}