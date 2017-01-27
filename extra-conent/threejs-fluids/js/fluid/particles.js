/**
@param scale_constants an object with the various scale data (width/height/cell size). See fluid.js for full definition.
@param particleData an empty texture. We will fill it with the particle positions and velocities.
*/
function Particles(scale_constants, shaders, particleData) {

	this.particleGeometry 	= new THREE.BufferGeometry();

	// the size (in world units) of the spacing between the particles
	// we add +1 to properly center the points
	
	var sizes 	  			= new Float32Array( scale_constants.particles.total_particles );
	var particleUVs 		= new Float32Array( scale_constants.particles.total_particles * 2 );
	var positions 			= new Float32Array( scale_constants.particles.total_particles * 3 );

	// arrange the particles in model space and in texel coordintaes.
	var position = new THREE.Vector3();
	var particleUV = new THREE.Vector2();

	// populate the texture locations
	fillTexture(particleData, function(x, y) {
		var index = x * scale_constants.particles.grid_size + y;

		position.x = (x + 1) * scale_constants.particles.cell_size_hort;
		position.y = (y + 1) * scale_constants.particles.cell_size_vert;

		// convert to UV coordinates (just normalize)
		var maxX = (scale_constants.particles.grid_size - 1);
		var maxY = maxX;

		particleUV.x = x / maxX;
		particleUV.y = y / maxY;

		particleUV.toArray(particleUVs, 2 * index);

		sizes[index] = scale_constants.particles.particle_size;

		//position.toArray(positions, 3 * index);

		return Float32Array.from([position.x, position.y, 0, 0]);
	});

	// bind these attributes to the shader material
	this.particleGeometry.addAttribute( 'size', 	new THREE.BufferAttribute( sizes, 1 ));

	// Note: one *MUST* add a blank position attribute to correctly initalize the mesh.
	// This behavior is undesirable since we might be setting the positions with some other method.
	this.particleGeometry.addAttribute( 'position', 	new THREE.BufferAttribute( positions, 3 ));
	this.particleGeometry.addAttribute( 'particleUV',   new THREE.BufferAttribute( particleUVs, 2 ));

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

