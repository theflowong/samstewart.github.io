var board = JXG.JSXGraph.initBoard('jxboard', {axis: true, boundingbox: [-10, 10, 10, -10]});

var tangent = board.create('functiongraph', [ Math.tan ], { strokeColor: '#0000ff', strokewidth: 2, name: 'tan', withLabel: true});
var secant = board.create('functiongraph', [ function (x) { return 1.0 / Math.cos(x) } ], { strokeColor: '#ff0000', strokewidth: 2, name: 'sec', withLabel: true});
