---
layout: post
date: 2016-09-06 15:08:00
title: "How to Remember the Derivative of Tangent"
categories: for-students math calculus fun
---

You probably learned in calculus class that
\\[
	\frac{d \tan(x)}{dx} = \sec^2(x),
\\]
and
\\[
	\frac{d \sec(x)}{dx} = \sec(x) \tan(x).
\\]

How does an honest person keep these two straight? The derivatives of $\sin(x)$ and $\cos(x)$ are easy since they flip. Of course, you could always re-derive the formula by using the definition of tangent, but this computation is a pain. Fortunately, there are two simple ways to remember the difference. 

# First Way to Remember
<div class="figure" id="tansec_graph"> </div>

<script type="text/javascript">
var board = JXG.JSXGraph.initBoard('tansec_graph', {axis: true, boundingbox: [-10, 10, 10, -10]});

var tangent = board.create('functiongraph', [ Math.tan ], { strokeColor: '#0000ff', strokewidth: 2, name: 'tan', withLabel: true});
var secant = board.create('functiongraph', [ function (x) { return 1.0 / Math.cos(x) } ], { strokeColor: '#ff0000', strokewidth: 2, name: 'sec', withLabel: true});	
</script>

Now you can see that $\tan'(0) \neq 0$ since it slopes upward at zero. On the other hand, $$\sec'(0) = 0$$ since it has a horizontal tangent line. How does this help?

Well, if you forget whether $\sec^2(x)$ is the derivative of $\tan(x)$ or $\sec(x)$, you can easily remember. Since $\sec^2(0) = 1$, it can't possibly be $\sec'(x)$ because $\sec'(0) = 0$. Hence $\tan'(x) = \sec^2(x)$ and $\sec'(x) = \tan(x) \sec(x)$.

# Second Way to Remember 
The second method requires some easy calculus. [We discussed the following identity](2016-09-13-tan-sec-identity) 
\\[
	1^2 + \tan^2(x) = \sec^2(x).
\\]

If you differentiate both sides of this equation, you get
\\[
	0 + 2 \tan(x) \frac{d \tan(x)}{dx} = 2 \sec(x) \frac{d \sec(x)}{dx}
\\]
Now, if you know either derivative, you can quickly recover the other derivative. 

For example, if you know that $d \tan(x) = \sec^2(x)$, then the above equation gives you
\\[
	\tan(x) \sec^2(x) = \sec(x) \frac{d \sec(x)}{dx}
\\]
Canceling $\sec(x)$ from both sides gives that $(\sec(x))' = \tan(x) \sec(x)$. You can likewise recover that $(\tan(x))' = \sec^2(x)$ if you know that $(\sec(x))' = \tan(x) \sec(x)$.

Note that the same principle shows why $\sin(x)$ and $\cos(x)$ have related derivatives. We know from the unit circle that

<div class="figure" id="sincos_unit_circle"> </div>

<script type="text/javascript">
var board = JXG.JSXGraph.initBoard('sincos_unit_circle', {axis: true, boundingbox: [-2, 2, 2, -2]});

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


</script>
so again by Pythagorean's theorem we have $\sin^2(x) + \cos^2(x) = 1$. Differentiating both sides and canceling the twos gives (as above) gives
\\[
	\sin(x) \frac{d \sin(x)}{dx} = -\cos(x) \frac{d \cos(x)}{dx}	
\\]
If you know that $(\sin(x))' = \cos(x)$ then the above equation gives
\\[
	\sin(x) \cos(x) = -\cos(x) \frac{d \cos(x)}{dx}
\\]
which, after canceling the $-\cos(x)$ gives $(\cos(x))' = -\sin(x)$. This is an algebraic justification of the relationship between sine, cosine, and their derivatives.
