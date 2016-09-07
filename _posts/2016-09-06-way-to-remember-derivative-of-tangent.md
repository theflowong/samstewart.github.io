---
layout: post
date: 2016-09-06 15:08:00
title: "How to Remember the Derivative of Tangent"
categories: for-students math calculus fun
---

<div id="box" class="jxgbox" style="width: 500px; height: 500px"></div>
<script type="text/javascript">


	var board = JXG.JSXGraph.initBoard('box', {axis: true, boundingbox: [-10, 2, 10, -2]});



	var a_point = board.create('point', [-Math.PI, 0], {name:'a', size:2});

	var a_line = board.create('line', 
			[[
			function() {
				return a_point.X();
			}, 
			board.getBoundingBox()[1]
			], 
			[
			function() { 
				return a_point.X(); 
			}, 
			board.getBoundingBox()[3]]], 
			{
				strokeColor:'#ff9999', 
				strokeWidth:2, 
				dash:2
			});

	var b_point = board.create('point', [Math.PI, 0], {name:'b', size:2});

	var b_line = board.create('line', [[function() {return b_point.X();}, board.getBoundingBox()[1]], [function() { return b_point.X(); }, board.getBoundingBox()[3]]], {strokeColor:'#ff9999', strokeWidth:2, dash:2});


	var left_f  = board.create('functiongraph', [ Math.sin, board.getBoundingBox()[0], function() { return a_point.X(); }], {strokewidth:2})
	
	var middle_f  = board.create('functiongraph', [ Math.sin, function() { return a_point.X(); }, function() { return b_point.X(); }], {strokeColor: '#ffcccc', strokewidth:2})

	// TODO: covert fontsize to coordinates.
	var area_text = board.create('text', [0, board.getBoundingBox()[1] - .5, 
			
			function() { 

				var area = JXG.Math.Numerics.NewtonCotes([a_point.X(), b_point.X()], Math.sin);
				return 'Area: ' + area.toFixed(2); 
				}], {fontSize:24});



	var right_f  = board.create('functiongraph', [ Math.sin, function() { return b_point.X(); }, board.getBoundingBox()[10]], {strokewidth:2})


</script>

You learn in calculus class that
\\[
	\frac{d \tan(x)}{dx} = \sec^2(x),
\\]
and
\\[
	\frac{d \sec(x)}{dx} = \sec(x) \tan(x).
\\]
How do you keep these two straight? The derivatives of $$\sin(x)$$ and $$\cos(x)$$ are easy since they are related. Of course, you could always re-derive the formula by using the unit circle definition of tangent as
\\[
	\tan{\theta} = \frac{\sin \theta}{\cos \theta}.
\\]

This computation too long. There are two simpler graphical ways to remember the difference. First, if you remember the graphs of $$\tan(x)$$ and $$\sec(x)$$ around zero, you can use the interpretation of the derivative as the slope of the curve. Consider the graphs

(graph of sec and tangent)

Note that at $$x = 0$$, the $$\tan(x)$$ clearly has non-zero derivative since the curve slopes upward. On the other hand, at $$x = 0$$ the graph of $$\sec(x)$$ turns around, so the tangent line is horizontal. Thus the derivative at zero is zero. We know that $$\sec^2(0) = 1/\cos^2(0) = 1$$ while $$\sec(0) \tan(0) = 1 \cdot 0 = 0$$. Thus, it must be that
\\[
	\frac{d \tan(x)}{dx} = \sec^2(x), \text{ and } \frac{d \sec(x)}{dx} = \sec(x) \tan(x).
\\]
This is a quick check for remembering if $\sec^2(x)$ is the derivative of $\tan(x)$ or $\sec(x)$.

The second method requires some easy calculus. Recall that graphically $\sec(x), \tan(x)$ are related as follows

(graphic showing the triangle legs)

Together they form a right triangle with hypotenuse $\sec(x)$ and legs $1, \tan(x)$. By Pythagorean's theorem, this means that
\\[
	1^2 + \tan^2(x) = \sec^2(x).
\\]
If you differentiate both sides of this equation implicitly, you get
\\[
	0 + 2 \tan(x) \frac{d \tan(x)}{dx} = 2 \sec(x) \frac{d \sec(x)}{dx}
\\]
Now, if you know either derivative, you can quickly recover the other derivative. For example, if you know that $d \tan(x) = \sec^2(x)$, then the above equation gives you
\\[
	\tan(x) \sec^2(x) = \sec(x) \frac{d \sec(x)}{dx}
\\]
Canceling $\sec(x)$ from both sides gives that $(\sec(x))' = \tan(x) \sec(x)$. You can likewise recover that $(\tan(x))' = \sec^2(x)$ if you know that $(\sec(x))' = \tan(x) \sec(x)$.

Note that the same principle shows why $\sin(x)$ and $\cos(x)$ have related derivatives. We know from the unit circle that

(interactive diagram with sin and cos)

so again by Pythagorean's theorem we have $\sin^2(x) + \cos^2(x) = 1$. Differentiating both sides and canceling the twos gives (as above) gives
\\[
	\sin(x) \frac{d \sin(x)}{dx} = -\cos(x) \frac{d \cos(x)}{dx}	
\\]
If you know that $(\sin(x))' = \cos(x)$ then the above equation gives
\\[
	\sin(x) \cos(x) = -\cos(x) \frac{d \cos(x)}{dx}
\\]
which, after canceling the $-\cos(x)$ gives $(\cos(x))' = -\sin(x)$. This is an algebraic justification of the relationship between sine, cosine, and their derivatives.
