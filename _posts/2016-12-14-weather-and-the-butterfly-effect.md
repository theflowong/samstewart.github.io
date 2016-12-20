---
layout: post
date: 2016-12-14 15:55
categories: math dynamical-system visualizations
---

## The Story of Chaos
Every fascinating story begins with fascinating characters, and science is no different. Our main character is Edward Lorenz, weatherman, mathematician, soldier, and general badass.

<img src="https://upload.wikimedia.org/wikipedia/en/d/dc/Edward_lorenz.jpg" alt="Edward Lorenz"/>

Math is nothing but clever pattern *recognition* and *prediction*, and as a mathematician, Lorenz was obsessed with the patterns of weather and why it was so difficult to predict. He knew that the equations modeling weather patterns were difficult to solve, but this was a mathematical detail which might be overcome with improved techniques. He suspected there was something deeper, something fundamentally fundamentally strange about weather patterns. What he discovered revealed fascinating behavior in systems throughout nature.

## Computer Modeling
In the 1960s, Lorenz simplified his weather prediction model to a set of three nonlinear ordinary differential equations given by
\\[
	\begin{aligned}
		\frac{dx}{dt} &= \sigma (y - x) \cr
		\frac{dy}{dt} &= x (\rho - z) - y \cr
		\frac{dz}{dt} &= xy - \beta z
	\end{aligned}
\\]
with $\rho, \sigma, \beta$ as constants. The physical interpretation of the three variables $x,y,z$ is unimportant, the key detail is that one can visualize solutions to this system in three dimensions.

Though working with [vacuum tube computers](https://en.wikipedia.org/wiki/Vacuum_tube), Lorenz applied early numerical analysis techniques to this system and managed to obtain solutions. What he found was surprising.

## The Strange Attractor

As Lorenz played with the parameters of his model, he realized something surprising. When he chose $\rho > 1$, two stable points emerged. Setting $\sigma = 10$ and $\beta = 8/3$ a shocking shape emerged around these two stable points.

<p>
	<canvas id="threejsStrangeAttractorVisualization" width="500px" height="500px"> </canvas>
</p>
This beautiful shape is called the Lorenz attractor, named in honor of its finder. The Lorenz attractor has three incredible features:

1. Regardless of where you start, the solution is drawn inexorably towards the Lorenz attractor like a ship in the orbit of a black hole.

2. The Lorenz attractor is a fractal. Like the [Koch snowflake](https://en.wikipedia.org/wiki/Koch_snowflake) and the [Mandelbrot set](https://en.wikipedia.org/wiki/Mandelbrot_set), the Lorenz attractor exhibits ever finer details at smaller scales. To see this, zoom in and watch as the algorithm recalculates the curve.

3. The Lorenz attractor is aperiodic so that the curves of the Lorenz attractor never cross. 

## The Butterfly Effect

Lorenz dubbed this strange behavior the "butterfly effect": a butterfly flapping its wings in Brazil can cause a tornado in Texas. Mathematically, points that start close together in the above picture end arbitrarily far apart after some finite time. The butterfly flapping its wings or not flapping its wings represents two states of our physical world that are somehow similar, or close together in phase space (space of all possibilities). But the end result, a tornado ripping through South America or a simple rainstorm are quite different, or far apart in the space of all possible states of the world. 

This butterfly effect is another name for chaos. Chaotic does not indicate complete randomness, but instead this feature of close initial points ending far away from each other. Instead of true randomness, we have a *deterministic* system that *appears* random. 

This chaotic behavior is the theoretical difficulty in predicting storm fronts. While we believe that the physics of weather obey a *deterministic* set of equations, small measurement or numerical errors can push our simulations far away from reality. 

In systems without chaotic behavior, like a bouncing ball, close initial states correspond to close end states. That is, if you drop a ball from floor ninety-nine, you expect it to bounce roughly as high as if you had dropped it from floor one-hundred. 

Chaotic systems like weather, [a swinging double pendulum](introduction-to-dynamical-systems), and even [fluid flows](why-navier-stokes-is-hard) don't follow this pattern of "close goes to close." This chaotic behavior is one of the reasons that theory, numerics, and experiments are so difficult in these problems.

## Conclusion
Lorenz started by studying weather pattern and ended by stumbling upon a general feature of our universe: chaos, or systems where close starting points end far from each other. His equations, and chaotic behavior in general, have since been described biology, physics, electrical engineering, and chemistry.

## References
1. Sparrow, Colin. *The Lorenz equations: bifurcations, chaos, and strange attractors.* Vol. 41. Springer Science &amp; Business Media, 2012.

2. Edward, Lorenz. Image credit Wikipedia.org.

<script type="text/javascript">
	var camera, controls, scene, renderer;
	
	init();
	animate();

	function init() {
		// setup the environment
		scene = new THREE.Scene();
		var renderArea = document.getElementById('threejsStrangeAttractorVisualization');
		camera = new THREE.PerspectiveCamera( 75, renderArea.width / renderArea.height, 0.1, 1000 );
		
		// setup the rendering context
		renderer = new THREE.WebGLRenderer( {canvas: renderArea });
		renderer.setSize( renderArea.width, renderArea.height );

		// add the controls for moving in this space.
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.enableDamping = true;
		controls.dampingFactor = 0.15;
		controls.enableZoom = true;

		// playing with lights
		var light = new THREE.AmbientLight( 0x404040 );
		scene.add( light );
		
		// add light pointing in any direction
		var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
		directionalLight.position.x = Math.random() - .5;
		directionalLight.position.y = Math.random() - .5;
		directionalLight.position.z = Math.random() - .5;
		directionalLight.position.normalize();

		scene.add( directionalLight );

		// construct a wireframe circle in space
		function createLorenzStrangeAttractor() {
			// constants for constructing the attractor
			var sigma = 10.0;
			var rho = 28.0;
			var beta = 8.0 / 3.0;

			// construct two points to represent the attractor points
			var attractor1 = new THREE.Vector3(Math.sqrt(beta * (rho - 1)), Math.sqrt(beta * (rho - 1)), rho - 1);
			var attractor2 = new THREE.Vector3( -attractor1.x, -attractor1.y, attractor1.z);

			// find our initial point between the two attractors
			var initialPoint = attractor1.clone().add(attractor2).multiplyScalar(.5); // look at (attractor1 + attractor2) / 2
			
			// the derivative function for the Lorentz system
			function dpos_dt(t, pos) {
				return new THREE.Vector3(
					sigma * (pos.y - pos.x),
					pos.x * ( rho - pos.z) - pos.y,
					pos.x * pos.y - beta * pos.z
					);
				// harmonic oscillator embedded into 3D problem
				// var A = new THREE.Matrix3();
				// A.set(0, 1, 0, -1, 0, 0, 0, 0, 0);
				// var dv_dt = new THREE.Vector3();
				// dv_dt.copy(pos);


				// return dv_dt.applyMatrix3(A);
			}

			// Runge-Kutta 2 method
			// Stolen from: http://www.letsthinkabout.us/post/runge-kutta-in-javascript
			function rk4(t, pos, f) {
				var halfdt = 0.5 * dt;
				var k1 = f(t, pos).clone().multiplyScalar(dt);

			    var k2 = f(t + halfdt, k1.clone().multiplyScalar(.5).add(pos)).multiplyScalar(dt);
			    var k3 = f(t + halfdt, k2.clone().multiplyScalar(.5).add(pos)).multiplyScalar(dt);
			    var k4 = f(t + dt, k3.clone().add(pos)).multiplyScalar(dt);

			    // now assemble the pieces for the final position
			    var updated_pos = pos.clone();

			    updated_pos.add(k1.multiplyScalar(1.0 / 6.0));
			    updated_pos.add(k2.multiplyScalar(1.0 / 3.0));
			    updated_pos.add(k3.multiplyScalar(1.0 / 3.0));
			    updated_pos.add(k4.multiplyScalar(1.0 / 6.0));

			    return updated_pos;
			}


			// create lorentz system by solving ODE starting near zero
			var time_end = 2 * Math.PI;

			var sampledPoints = new THREE.Geometry();

			var cur_pos = new THREE.Vector3(2, 0, 0);

			sampledPoints.vertices.push(	
					cur_pos	
				);

			var dt = .001;

			// TODO: could be made simpler by doing a functional reduce operation on this.
			// Or can we do recursion?
			for (var t = 0; t <= 30 * Math.PI; t += dt) {
				// evolve the ODE
				cur_pos = rk4(t, cur_pos, dpos_dt);

				sampledPoints.vertices.push(	
					cur_pos	
				);
			}

			// connect the points of the helix with lines
			var lorentzMesh = new THREE.Line( sampledPoints, new THREE.LineBasicMaterial( { color:  0x804000, linewidth: .09 }));

			// center the mesh at the origin
			lorentzMesh.position.sub(new THREE.Vector3(0, 0, 27));

			scene.add(lorentzMesh);

			

			// var attractorPoints = new THREE.Geometry();
			// attractorPoints.vertices = [attractor1, attractor2];

			// scene.add(new THREE.Points( attractorPoints, new THREE.PointsMaterial( { color: 0xFF0000, size: 2.0 })));


		}
		

		// plots the axes:
		// red: X, green: Y, blue: Z
		var axisHelper = new THREE.AxisHelper( 10 );
		scene.add(axisHelper);
	
		// construct the helix
		createLorenzStrangeAttractor();
	
		// adjust the camera so that we're looking down
		camera.position.y = 4;
		camera.position.z = 4;
		camera.position.x = 4;

		camera.lookAt(new THREE.Vector3(0, 0, 0));
	}
	
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		
		renderer.setSize( window.innerWidth, window.innerHeight);
	}

	function animate() {
		requestAnimationFrame( animate );

		controls.update();

		render();		
	};
	
	// render stuff
	function render() {
		
		// make the camera rotate around the scene
		renderer.render( scene, camera );
	}
	

</script>
