---
layout: post
date: 2016-09-07 15:40
categories: course-notes dynamical systems
----

Consider the following pendulum (drag with the mouse to fling it around).

(interactive graphic of pendulum)

The simulation gives you a rough idea of how the system behaves, but how can we use math to understand the system more completely? The theory of dynamical systems gives us the tools to understand systems that evolve according to a deterministic set of rules. In this article, we will rephrase the pendulum above in the language of dynamical systems and discover some interesting features.

Intuitively, a dynamical system, whose formal definition we will give at the end, is a universe with a set of rules that describe how objects move in that universe. 


Let's rephrase this pendulum system in the language of dynamical systems. We need to define both a universe and the rules that define the universe. How much information do we need to describe to describe 

Formally then, we have the following definition of a dynamical system.

<div class="definition">
	Let $$S$$ be a topological space. Let $$\phi : \R \times \R \times S \to S$$ be a continuous map. Then we call $$(S, \phi)$$ a dynamical system.
</div>


The phase space of the pendulum needs one coordinate to track the angle of rotation, and one coordinate to track the velocity at a given time. The phase space is thus $S^1 \times \R$ which can be visualized on the cylinder. Now, as you manipulate the pendulum, you can see the path traced out in phase space.

(see path traced out in phase space)

Examples of force fields that depend on velocity:
magnetic fields
hurricanes


Now assume the dynamic system does not depend on the initial time, but only on how much time has elapsed. The pendulum (and indeed most physical laws) is an example. Whether you push the pendulum today, or you push it one hundred years from now, it will follow the same trajectory.

This time independence produces a simple, yet tremendously useful property. If you evolve the system from some initial state at $$t = 0$$, stop at $$t = 1$$, and then evolve the system to $$t = 2$$, this is the same as evolving the system without stopping from $$0$$ to $$2$$.

We call such a dynamical system a _flow_ and formalize the definition below. The second property is precisely the initial time independence (notice that we have also eliminated one variable). 

<div class="definition">
	A flow $$\phi : \R \times S \to S$$, denoted $$\phi_t : S \to S$$, is a continuous map with the following two properties.
	1. $$\phi_0 = \textrm{id}$$
	2. $$\phi_t \circ \phi_s = \phi_{t + s}$$
</div>

From an alternative perspective, notice that the definition of a flow satisfies the definition of a group action. Here the group is $\R$ and the set is $S$. Hence, a dynamical system that is a flow is a group acting on a manifold. The orbits of the group action are thus trajectories of the system. This perspective leads naturally to beautiful topics such as Lie theory and the (Fourier transform)[decompositions-and-the-fourier-transform.md].

Like all theories, there are simplifying assumptions. 

Principle of determinism. Means lines don't intersect. Global existence.

Newton's law gives a second order system.

There is another perspective of a dynamical system. Namely, consider the dynamical system in $\R^2$ with the ODE
\\[
	\begin{bmatrix}
		x' \cr
		y' 
	\end{bmatrix}
	= \begin{bmatrix}
		-y \cr
		x
	\end{bmatrix}
\\]
This defines a velocity field in $\R^2$ that looks like

(plot of the velocity field)

Trajectories of the dynamical system correspond to *integral curves* of this vector field. Namely, a trajectory $$[x(t) y(t)]$$ satisfies
1. $$[x y](0) = [x_0 y_0]$$
2. $$[x'(t) y'(t)] = [-y(t) x(t)]

Pictorially, we are trying to find curves whose velocity vectors align with the vector field $$[-y x]$$. There are many integral curves, so choosing the initial data $$[x_0 y_0]$$ determines where you start.

Trading derivatives for dimensions.


Phase space of pendulum.

Phase space of particle in the plane.

From the viewpoint of smooth manifolds, a common dynamical system is the tangent bundle to a manifold $$M$$.
