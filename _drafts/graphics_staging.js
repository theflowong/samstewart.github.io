// some constants for the pendulum ODE
var gravity = -9.80665,
    length = 4.0,
    ratio = gravity / length,
    damping = -.3;

// the various interactive elements.
var board = JXG.JSXGraph.initBoard('jxboard', {boundingbox: [-10, 10, 10, -10], keepaspectratio: true, axis: true, grid: false});

var pendulumCenter = board.create('point', [0, 0], {color: 'black',  fixed: true});

var orbit = board.create('circle', [pendulumCenter, length], {visible: false});

var pendulumEnd = board.create('glider', [orbit] );

var pendulumLength = board.create('segment', [pendulumCenter, pendulumEnd], {color: 'black', strokewidth: 1});

var isInDragMode = false;

// converts the angle from [-pi, pi] to [0 2pi]
function convertAngleToPositiveRange(atan2_angle) {
	if (atan2_angle < 0) {
		atan2_angle += 2*Math.PI;
	}
	return atan2_angle;
}
function simulatePendulum(start_angle) {
	// solve the pendulum equation for a few time steps.
	var time_interval = [0, 200];

	var number_of_evaluations = (time_interval[1] - time_interval[0]) * 100;
	
	var duration = 80 * 1e3;

	function update(t, sol) {
		return [sol[1], damping * sol[1] + ratio * Math.sin(sol[0]) * sol[0]];							
	}
	
	console.log('test')
	var data = JXG.Math.Numerics.rungeKutta('heun', [start_angle, 0], time_interval, number_of_evaluations, update);

	// this wrapper simply returns our position in space at time t.
	function update_frame(t) {
		if (t >= duration)
			return NaN;

		var index = Math.floor(t / duration * number_of_evaluations);
		// we subtract pi/2 to convert back our coordinate system.
		var theta = data[index][0] - Math.PI / 2;

		return [length * Math.cos(theta), length * Math.sin(theta)];
	}
		
	pendulumEnd.moveAlong(update_frame);

}

pendulumEnd.on('down', function() { board.stopAllAnimation() });
pendulumEnd.on('up',  
function() { 
theta = Math.atan2(pendulumEnd.Y(), pendulumEnd.X());
theta = convertAngleToPositiveRange(theta);
// convert to ODE coordinate system
theta += Math.PI / 2; 
simulatePendulum(theta);
} );

