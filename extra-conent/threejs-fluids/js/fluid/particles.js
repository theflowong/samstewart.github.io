/**
@param totalParticles: the total number of particles
@param pointSize the size of each point
@param width the width of the area over which to distribute the particles in a grid
@param height the height of the area over which to distribute the particles in a grid
*/
function Particles(totalParticles, width, height, pointSize, shaders) {
	this.pointSize 			= pointSize;
	this.totalParticles 	= totalParticles;


	this.particleGeometry 	= new THREE.BufferGeometry();

	// the size of one side of the grid
	var sizeOfGrid = Math.ceil(Math.sqrt(totalParticles));

	// the size (in world units) of the spacing between the particles
	// we add +1 to properly center the points
	var cellSizeHorizontal = width / (sizeOfGrid + 1);
	var cellSizeVertical = height / (sizeOfGrid + 1);

	var positions = new Float32Array( totalParticles * 3 );
	var sizes 	  = new Float32Array( totalParticles );

	var position = new THREE.Vector3();

	for (var i = 0; i < sizeOfGrid; i++) {
		for (var j = 0; j < sizeOfGrid; j++) {

			var index = i * sizeOfGrid + j;

			position.x = (i + 1) * cellSizeHorizontal;
			position.y = (j + 1) * cellSizeVertical;
			
			position.toArray(positions, 3 * index);

			sizes[index] = pointSize;
		}
	}

	// bind these attributes to the shader material
	this.particleGeometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ));
	this.particleGeometry.addAttribute( 'size', 	new THREE.BufferAttribute( sizes, 1 ));

	// the particles should be white
	this.mesh = new THREE.Points( this.particleGeometry, 
		new THREE.ShaderMaterial(
		{
			uniforms: { 
				color: { value: new THREE.Color( 0xffffff ) }
			},
			fragmentShader: shaders.fragmentShader,
			vertexShader: shaders.vertexShader,

			blending: THREE.AdditiveBlending,
			transparent: false,
			depthTest: false
		})
	);
}
