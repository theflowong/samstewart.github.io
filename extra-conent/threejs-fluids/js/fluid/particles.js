/**
@param particleGridSize: number of particles on side of the grid
@param pointSize the size of each point
@param width the width of the area over which to distribute the particles in a grid
@param height the height of the area over which to distribute the particles in a grid
@param particleData an empty texture. We will fill it with the particle positions and velocities.
*/
function Particles(particleGridSize, width, height, pointSize, shaders, particleData) {
	this.pointSize 			= pointSize;
	this.particleGridSize 	= particleGridSize;


	this.particleGeometry 	= new THREE.BufferGeometry();

	// the size (in world units) of the spacing between the particles
	// we add +1 to properly center the points
	var cellSizeHorizontal = width / (particleGridSize + 1);
	var cellSizeVertical = height / (particleGridSize + 1);

	var totalParticles = Math.pow(particleGridSize, 2);
	var sizes 	  = new Float32Array( totalParticles );
	var particleUVs = new Float32Array( totalParticles * 2 );
	var positions = new Float32Array( totalParticles * 3 );

	// arrange the particles in model space and in texel coordintaes.
	var position = new THREE.Vector3();
	var particleUV = new THREE.Vector2();

	// populate the texture locations
	fillTexture(particleData, function(x, y) {
		var index = x * particleGridSize + y;

		position.x = (x + 1) * cellSizeHorizontal;
		position.y = (y + 1) * cellSizeVertical;

		// convert to UV coordinates
		particleUV.x = x / (particleGridSize - 1);
		particleUV.y = y / (particleGridSize - 1);

		particleUV.toArray(particleUVs, 2 * index);

		sizes[index] = pointSize;

		//position.toArray(positions, 3 * index);

		return Float32Array.from([position.x, position.y, 0, 1]);
	});

	// bind these attributes to the shader material
	this.particleGeometry.addAttribute( 'size', 	new THREE.BufferAttribute( sizes, 1 ));

	// Note: one *MUST* add a blank position attribute to correctly initalize the mesh.
	// This behavior is undesirable since we might be setting the positions with some other method.
	this.particleGeometry.addAttribute( 'position', 	new THREE.BufferAttribute( positions, 3 ));
	this.particleGeometry.addAttribute( 'particleUV', new THREE.BufferAttribute( particleUVs, 2 ));

	// the particles should be white
	this.mesh = new THREE.Points( this.particleGeometry, 
		new THREE.ShaderMaterial(
		{
			uniforms: { 
				color: { value: new THREE.Color( 0xffffff ) },
				particleVariable: { value: particleData }

			},
			fragmentShader: shaders.fragmentShader,
			vertexShader: shaders.vertexShader,
			blending: THREE.AdditiveBlending,
			transparent: false,
			depthTest: false
		})
	);
}

