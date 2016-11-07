---
layout: post
date: 2016-10-24 16:24
categories: math lie-theory lie-algebra
---

In the [last post](), we discussed the concept of a Lie group using $S^1$ as an example. We can reduce every Lie group (a complicated object) to a Lie algebra. There are several ways to describe this reduction. 

One natural perspective: the Lie algebra describes a differential equation while the Lie group describes a solution. Amazingly, due to the symmetry of a Lie group, it suffices to know only the structure of the possible differential equations (Lie algebra) to reconstruct the entire Lie group group [1]. This reduction simplifies our study of Lie groups to the study of Lie algebras. 


(article idea: one should always be motivated by the problem)

### What is a Lie algebra?
Returning to the example from our last article, imagine trying to solve the differential equation
\[
	\frac{d \gamma(t)}{dt} = 3
\]
with $\gamma(0) = 0$. In other words, we want to find a curve with velocity $3$ that passes through the origin.

(picture of curve with velocity 3).

We call the 1D velocity vector $v = 3$ an element of the Lie algebra of $S^1$. The process of solving this ODE, or equivalently, finding a curve $\gamma(t)$ on $S^1$ with velocity $v = 3$, is exactly the process of *passing between the Lie algebra and the Lie group* in a neighborhood.

We say that $v$ is in the Lie algebra of $S^1$ if we can construct a curve $\gamma : [0, 1] \to S^1$ such that $\gamma$ passes through $1$ at $0$ and the derivative of $\gamma$ at $0$ is $v$. In other words, if you imagine a particle having trajectory $\gamma$, then $v$ is the velocity vector as it passes through $1$.

(picture of curve with velocity vector v)

We claim the Lie algebra of $S^1$ is $\R$. To see this, we construct a curve passing through $1$ with arbitrary velocity $v$. You can think of this as stretching a tangent vector onto $S^1$. 

(picture of stretching tangent vector onto $S^1$)

Let $v \in \R$ and write
\[
	\gamma(t) = e^{ivt}
\]
To take the derivative of $\gamma$, we need a chart to map a local neighborhood of $1 \in S^1$ to $\R$. For an appropriately chosen branch cut, the chart
\[
	\phi(e^{i \theta}) = \textrm{arg } e^{i \theta} = \theta
\]
works in a *neighborhood* of $1$. Then we can compute
\[
	(\phi \circ \gamma)'(t) = \textrm{arg } e^{ivt} = (vt)' = v
\]
Since the map $\gamma(t) = e^{i \, v \, t}$ satisfies 
1. $\gamma(0) = 1$
2. $\gamma'(0) = v$
then $v$ is an element of the Lie algebra. Going the other direction is easy: if we have a curve $\gamma(t)$ on $ST1$, then $\gamma'(0) = v$ is a velocity vector by definition. This is equivalent to "un-stretching" the velocity vector.

We have a bijection between the Lie algebra and a neighborhood of $1$ (the identity in $S^1$), but how does this allow us to reconstruct the entire Lie group? 

Idea:
1. Take a velocity vector and put it tangent to $1$
2. Use the symmetry of the Lie group to put this tangent vector at every point (introduce idea of left-invariant vector field)
3. Put a foliation through this field and choose the one that passes through the identity.
4. Compute the push-forward of $L_g z$ in a coordinate chart and see that it acts as identity.

Q: should you first imagine putting the vector field on $S^1$ and then finding the integral, or find the integral curve and then somehow extending it?



(picture of unstretching velocity vector back into Lie algebra)

Our computation has shown that the possible constant velocity fields

The general definition of a Lie algebra consists of two features (the second we'll discuss in the [next]() post):
1. A vector space
2. Has a binary operation $[u, v]$ that satisfies a special identity.

Outline for future writing:
1. Describe how we reconstruct a Lie group from its Lie algebra (first get neighborhood of identity via exponential map then extrapolate to entire object).
2. Describe expontential map and why it appears. What it represents (putting integral curve through a point).


There is a larger theme here: the connection between geometric (Lie groups)  and algebraic (Lie algebra) objects. This connection between the geometric and algebraic is an idea that appears again and again (e.g. Galois theory, algebraic topology, etc) and appears to exploit our dual natural capabilities for vision (geometry) and language (algebra).

1. Krillov, Alexander. "Introduction to Lie Groups and Lie Algebras". Available at [https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf](https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf).
