function VisualizationWorld(canvasName) {
	
	var canvas = document.getElementById(canvasName);

	this.scene = new THREE.Scene();

	// setup the camera
	this.camera = new THREE.PerspectiveCamera( 75, canvas.width / canvas.height, 1, 1000)
	
	this.camera.lookAt(0, 0, 0);

	// setup the the light
	var light = new THREE.PointLight(0xffffff, 0.8);
	this.camera.add(light);

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