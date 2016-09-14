---
layout: post
date: 2016-09-13 13:54
categories: dynamical-systems course-notes odes
---

When considering a dynamical system of the form
\\[
	\dot{x} = F(x, t)
\\]
we want to know when it's solvable. That is, when is there a [flow](introduction-to-dynamical-systems) for this rule of evolution.

## Some Problems Emerge
Previously, in the linear case, we saw that a flow always exists. But in the non-linear case, problems emerge. Consider the equation
\\[
	\dot{x} = x^2
\\]
In this case, the vector field is one dimensional

(plot of the vector field)

The point $x = 0$ is an equilibrium point since the derivative is zero. Hence, starting at the origin and staying at the origin is a solution. If we start *away* from the origin, then the vector field pushes the point towards positive infinity (as you can see from the picture).

The issue is that the vector field pushes the solution *too quickly* to infinity. So quickly, in fact, that the solution hits infinity after a finite amount of time. The following diagram shows the solution for different initial positions (assuming $t_0 = 0$). 

(diagram of solutions)

We can find the solution analytically using simple separation of variables. Assuming $x_0 \neq 0$ then

\\[
	\int_{t_0}^t \frac{x'(\tau)}}{x^2}d\tau = \int_{x_0}^{x(t)} \frac{1}{x^2} dx = t + C
\\]
Since
\\[
	\frac{-2}{x} = t + C 
\\]
then our solution is
\\[
	x(t) = \frac{x_0}{1 - x_0 t}
\\]
This blows up when $t = 1/x_0$. In words, the closer we start to the origin, the longer it takes to reach infinity. In the end though, the solution always blows up at finite time $1 / x_0$. 

Here the flow is given by
\\[
	\phi_t(x_0) = \frac{x_0}{1 - t x_0}.
\\]
The domain of this flow is the region bounded between the hyperbola $t x = 1$

(plot of domain with dotted line)

This flow is problematic because it doesn't exist for all $t$.

At least the above slow exists for finite time. There are more pathological cases!

Consider the dynamical system described by
\\[
	\dot{x} = x^{2/3}
\\]

the same separation of variables technique gives
\\[
	x(t) = \frac{x_0}{27} (t - t_0)^3
\\]
As before, we have the equilibrium solution $x_0 = 0$. But now every solution trajectory, regardless of our start point, intersects this equilibrium solution at $t = t_0$. 

(diagram of solution curves)

This directly violates our assumption of determinism: due to time invariance, this intersection shows that we can construct a solution that stays at the origin (equilibrium solution) for some time, and then moves according to
\\[
	x(t) = \frac{x_0}{27} t^3.
\\]
In other words, a particle that starts at the origin has two "choices": stay put or fly to infinity. This is clearly non-deterministic.

## Making Some Rules

Mathematically, nothing is wrong with nondeterminism and blowup. In fact, many [interesting problems come from these models](why-are-fluids-important-but-hard). In our case, we will consider these models nonphysical.

As with [common law](math-is-organized-common-law.md) and [vocabulary](math-is-nothing-but-linguistics), we need to create some definitions before we can create some rules. Our definitions, while useful elsewhere, are designed to rule out the pathological cases above while still allowing interesting systems.

If your definitions are too loose, you will be unable to make strong statements (this is a problem for highly complicated systems, such as those that arise in biology). If your definitions are too strong, you won't be able to say anything at all (this is aproblem in logic).

The weakest constraint on our vector field is continuity. Otherwise, we could prescribe vector fields that look like this

(Heaviside vector field)

Stronger than continuity and more global is uniform continuity. Instead of considering the neighborhood of a point, we demand that 

Unfortunately, our example $x^{2/3}$ is uniformly continuous because it is uniformly continuous on $[-1, 1]$ since every continuous function on a compact set is uniformly continuous, and it is uniformly continuou away from the origin since
\\[
	\lim_{x \to \infty} \frac{x^{2/3}}{x} = x^{1/3} = \infty.
\\]

Thus, we need a slightly more restrictive definition. Holder continuity provides this. The idea is that we allow a scaling, but only by a bounded amount.

But this is too strong because $x^2$ is not Lipschitz. We then weaken our definition to locally Lipschitz.

The containment is thus

(diagram of containments: C^1 \subset differentiable \subset locally lipschitz
lipschitz \subset uniformly continuous \subset continuous)

These definitions are best phrased in terms of metric geometry and maps between metric spaces.


