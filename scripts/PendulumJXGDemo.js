function PendulumJXGDemo(divName) {
	// some constants for the pendulum ODE
	// the constant for the pendulum ODE
	var gravity = -9.80665;

	var length = 4.0;
			
	var ratio = gravity / length;

	////////////////////////
	// initiate the interactive elements
	var board = JXG.JSXGraph.initBoard(divName, {boundingbox: [-10, 10, 10, -10], keepaspectratio: true, axis: true, grid: false});

	var pendulumCenter = board.create('point', [0, 0], { color: 'black',  fixed: true });

	var orbit = board.create('circle', [pendulumCenter, length], { visible: false });
	
	var pendulumEnd = board.create('glider', [ orbit ] );
	
	var pendulumLength = board.create('segment', [ pendulumCenter, pendulumEnd ], { color: 'black', strokewidth: 1 });

	var isInDragMode = false;
	
	function simulatePendulum(start_angle) {
		// solve the pendulum equation for a few time steps.
		var time_interval = [0, 200];

		var number_of_evaluations = (time_interval[1] - time_interval[0]) * 100;
		
		var duration = 20 * 1e3;

		function update(t, sol) {
			return [sol[1], -Math.sin(sol[0]) * sol[0]];							
		}
		
		var data = JXG.Math.Numerics.rungeKutta('heun', [start_angle, 0], time_interval, number_of_evaluations, update);
	
		// this wrapper simply returns our position in space at time t.
		var solutionTrajectory = function(t) {
			if (t >= duration)
				return NaN;

			var index = Math.floor(t / duration * number_of_evaluations);
			var theta = data[index][0];

			return [length * Math.cos(theta), length * Math.sin(theta)];
		}

		pendulumEnd.moveAlong(solutionTrajectory);

	}

	function curTheta() {
		return Math.atan2(pendulumEnd.Y(), pendulumEnd.X());
	}
	simulatePendulum(curTheta());

	pendulumEnd.on('down', function() { board.stopAllAnimation() });
	pendulumEnd.on('up',  function() { simulatePendulum(curTheta()) } );
}