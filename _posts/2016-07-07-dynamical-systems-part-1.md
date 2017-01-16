---
layout: post
date: 2016-09-07 15:40
categories: course-notes dynamical systems
---

## Can we predict the future in nature?

Mathematics is the subject that classifies, organizes, and manipulates patterns with the goal of predicting and controlling our natural world. The humble pendulum is a good example. Click and drag the red dot.

<div class="figure" id="jxboard"> </div>

<script type="text/javascript">
	var pendulumDemo = new PendulumJXGDemo('jxboard');
</script>

The simulation shows that the behavior of the pendulum is complicated. If you are handed an initial state, can you tell me where the pendulum ends? If you start near the bottom, gravity clearly pulls the pendulum straight down. Is there a start position that doesn't end pointing straight down? 

We can predict the future with the tools of dynamical systems.

## What is a dynamical system?

A dynamical system is nothing but a mathematical world with a set of rules governing how that world changes over time. Essentially every natural system (e.g. planets orbiting, a ball bouncing, plane flying) can be described as a dynamical system. The key feature is that in a dynamical system, the world evolves according to *deterministic* rules (the same initial conditions will *always* produce the same outcome) so that systems with randomness (like the stock market) are difficult to model as a dynamical system. This is a natural constraint because one could not possibly given perfectly accurate predictions if some parts of the model evolved according to a coin flip. This is of course an *assumption* in our model and more generally in science. One must *assume* that the sun rises every morning *before* trying to model the orbit of the earth. If one instead assumes that the sun rises with the choice of a coin flip, one can no longer use dynamical systems to model the outcome.

When the greats like Newton and Galileo were discovering the fundamental laws of nature, they were really finding *approximations* Nature's laws. They started on the usual scientific assumption that our universe is deterministic. The earth orbits the sun according to a predictable gravitational law, billiard balls collide and always follow the same trajectories. These guys thought the world was predictable -- it was one huge dynamical system.

The good news is that their model worked at the scales they cared about. Planets and billiard balls are well-approximated by dynamical systems. The bad news, and what we discovered in the twenty-first century, is that nature is far more complicated than these simple laws. The problem was quantum dynamics.

At tiny scales, the level of atoms and smaller, Newton's laws break down. Particles no longer interact predictably like billiard balls. Instead, they evolve probabilistically. You can't say, "that particle will collide with that one and end up over there" but instead you say, "that particle will collide with that one with a 50% chance and will end up over there with a 20% chance." Predictions become more involved, because now the sun rises with a coin flip.

All this to say that dynamical systems rest on the key assumption of determinism and as such are *only* a model, albeit a model that works surprisingly well at large scales. 

## Constructing our World

To make all more concrete, we'll model the pendulum as a dynamical system. We start with our model *world*. What parameters do we need to describe the pendulum? At any instant, it has a two-dimensional position and a two-dimensional velocity. The rod constrains the pendulum to lie on the circle and constrains the velocity to be tangent to the circle, reducing the dimensions for position and velocity down from two to one. 

An angle $\theta \in S^1$ and a point $x \in \R$ thus completely describes the mathematical world of the pendulum, and we call this world the *phase space* of the dynamical system.

One can visualize this world as the cylinder $S^1 \times \R$. 

(cylinder in three.js)

<canvas class="figure" id="threejsCylinder1" width="500px" height="500px"> </canvas>

<script type="text/javascript">
	$(document).ready(function() {
		var visualization = new VisualizationWorld( "threejsCylinder1" );

		// we create the cylinder
		var cylinder = new THREE.CylinderGeometry(2, 2, 30)
		var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

		var cylinderMesh = new THREE.Mesh( cylinder, material );
		// visualization.scene.add(cylinderMesh);
		visualization.scene.add(new THREE.AxisHelper( 4 ));

		// setup the animation loop
		function animate() {
			requestAnimationFrame( animate );

			visualization.controls.update();

			visualization.render();
		}

		animate();
	});
	
</script>

**This idea of a phase space or configuration space is a powerful idea** because we have converted a problem of mechanics into a problem of geometry so that we can **simultaneously** study many possible scenarios. By modeling a problem as a dynamical system, we will be able to consider **all** possible futures simultaneously. This is almost black magic. Examining all possible futures will enable us to predict where a given fling speed and position will end.

## The Future as a Trajectory in Phase Space

If we are to predict the future, we must first formalize what "future" means mathematically. The idea is quite simple, but requires the cylinder perspective. The cylinder represents **all possible velocities and angles** so throwing the pendulum and watching it swing will produce a trail of velocities and angles as time evolves. At any given instant of time, the pendulum has a velocity (height on the cone) and an angle (position on the circle $S^1$). 

( example where you can swing the pendulum and record its velocity. The user should be able to see the velocity and angle evolve in a text book. )

We can thus view the swinging of the pendulum as **a path** in phase space (on the cylinder). You start somewhere on the cylinder corresponding to the initial swing velocity and angle, and when you release the pendulum, a path creeps along the cylinder representing the evolution of the pendulum. If you click anywhere on the cylinder, the pendulum will evolve with that initial velocity and position. 

(example with both the 2D representation and the cylinder in phase space. As the pendulum evolves, we should trace out a path on the cylinder. Three.js on one side and pendulum on the other side. You should be able to click on the cylinder and see the pendulum evolve with those initial conditions.)

As Brett Victor points out, we have [climbed one rung up the ladder of abstraction](http://worrydream.com/LadderOfAbstraction/) with the hope of gaining a deeper understanding. This "higher altitude perspective" gives a fresh view on the motion of the pendulum that will enable us to make our predictions.

## The Rules of our World

Before we can predict the future, we need to know the rules of our world. There are always two stages to science:
1. Description
2. Prediction

One must first construct a model (rules) and then see how that model predicts the future. These two steps form a feedback loop that we call science.

The rules that govern the motion of our pendulum controlled by gravity are quite simple and can be deduced from first principles. We arrive with a second order differential equation given by
\[
	\theta''(t) = - \sin(\theta(t)) \theta(t)
\]
With a simple trick, we can set $v = \theta'(t)$ and rewrite the equation as a *system* but with only first derivatives
\[
	\begin{aligned}
		\theta'(t) &= v \cr
		v'(t) &= -\sin(\theta(t)) \theta(t).
	\end{aligned}
\]

This is now an equation on the cylinder since we have the velocity in the circle direction ($\theta'$) and the velocity in the height direction ($v'$). The differential equation describes an evolution on the cylinder.

Differential equations are only one kind of many possible tools for describing the rules of our world (other options include partial differential equations, discrete time systems, stochastic systems, Lagrangian formalisms, regression models, etc.)

## How to Predict the Future

We have our universe (the cylinder) and our rules for moving in the world (differential equation). How do we combine these to predict where the pendulum will end?

The obvious first attempt is to find solutions to the differential equation. If we can find such solutions, we can predict the pendulum's movement almost *exactly*. Like a grand chess opponent, Nature writes its rules in differential equations that are hard to solve and the equation of the pendulum is no exception. The nonlinear $\sin(\theta)$ means only numerical solutions are tractable (as demonstrated in the simulation). 

This is where the tools of dynamical systems become useful. Instead of examining the *quantitative* behavior of the system (explicit solutions), we examine the *qualitative* behavior of the system (geometry of the cylinder).

As we saw earlier, the differential equation describing the pendulum's motion can be converted into an equation in phase space (the cylinder). First order differential equations are really velocity fields, so we can draw them as vector fields. 

(vector field with cool shader flowing effect from the Earth weather visualization)

We can now predict the future by examining the qualitative behavior of this vector field. By definition, the paths describe pendulum motion must follow these vector fields so if we can describe the patterns in these vector fields, then we can describe the solutions. 

First, notice the line on the top of the cylinder and how it repels the vector field. 

(highlight the line on the top of the cylinder. This corresponds to when the pendulum starts straight up)

Now rotate the cylinder and observe how the vectors are angled towards a center point. That point corresponds to the state where the pendulum is at rest pointing straight downwards.

Finish classifying the vector field behavior and connect it to the actual solutions.

(final: put the simulation in again. Maybe a feature where it will give you a verbal prediction of the end state)

## Summary

Of course, predicting where the pendulum will end might look easy since common sense tells us it will end pointing downwards for most initial flings. But the theory of dynamical systems offers two advantages:
1. These techniques generalize to more complicated scenarios in basically every field of science.
2. We can *prove* that the pendulum always ends facing downwards unless it starts pointing straight upwards with zero velocity.

Dynamical systems appear naturally in classical mechanics. For example, it is surprisingly difficult to predict the behavior of three or more bodies locked in gravitational orbit (the so called [Three Body Problem](https://en.wikipedia.org/wiki/Three-body_problem)). Even with the most advanced theory, this problem has stumped mathematicians for centuries.

In the next post, we will study a phenomena that originally threatened the foundations of dynamical system theory: chaos. While chaos sounds like the opposite of the determinism that we assume when building a dynamical system, chaos actually lies **between** randomness and order. Problems with chaotic solutions are those that lie at the frontiers of physics.
