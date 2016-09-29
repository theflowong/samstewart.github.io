var board = JXG.JSXGraph.initBoard('jxboard', {axis: true, boundingbox: [-2, 2, 2, -2]});

// two fixed reference points
var fixedPoint = board.create('point', [1, 0], {fixed: true, withLabel: false, visible: false});
var origin = board.create('point', [0, 0], {fixed: true, withLabel: false, visible: false});

// setup the circle and the control
var circle = board.create('circle', [origin, fixedPoint]);
var handle = board.create('glider', [1/Math.sqrt(2), 1/Math.sqrt(2), circle]);
var angle = board.create('angle', [fixedPoint, origin, handle], {radius: 1/4});

// construct the triangle for sin/cos identity
var otherPoint = board.create('point', [function() { return Math.cos(angle.Value()) }, 0], {withLabel: false});

var cosLeg = board.create('segment', [origin, otherPoint], {strokeWidth: 1, dash: 1, withLabel: true, name:'cos'});
var sinLeg = board.create('segment', [handle, otherPoint], {strokeWidth: 1, dash: 1, withLabel: true, name: 'sin '});
var hyp = board.create('segment', [origin, handle], {strokeWidth: 1, dash: 1});

// construct the triangle for tan/sec identity
var otherPoint2 = board.create('point', [function() { return 1/ Math.cos(angle.Value()) }, 0], {withLabel: false});
var tanLeg = board.create('segment', [handle, otherPoint2], {strokeWidth: 1, dash: 1, withLabel: true, name:'tan'});
var secLeg  = board.create('segment', [origin, otherPoint2], {strokeWidth: 1, dash: 1, withLabel: true, name: 'sec '});

