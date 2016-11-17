---
layout: post
date: 2016-10-24 16:24
categories: math lie-theory lie-algebra
---

In the [last post](), we discussed the concept of a Lie group using $S^1$ as an example. We can reduce every Lie group (a complicated object) to a Lie algebra. There are several ways to describe this reduction. 

One natural perspective: the Lie algebra describes a differential equation while the Lie group describes a solution. Amazingly, due to the symmetry of a Lie group, it suffices to know only the structure of the possible differential equations (Lie algebra) to reconstruct the entire Lie group group [1]. This reduction simplifies our study of Lie groups to the study of Lie algebras. 

### What is a Lie algebra?
Returning to the example from our last article, imagine that we want to solve the differential equation
\\[
	\frac{d \gamma(t)}{dt} = 3
\\]
on $S^1$ with the initial condition $\gamma(0) = 1$. In other words, we want to find a curve _on the circle_ with velocity $3$ that passes through the point (1,0).

![Finding curve with velocity](/images/lie_theory_part_2_fig_1.png)

We call the 1D velocity vector $v = 3$ an element of the Lie algebra of $S^1$. The process of solving this differential on the circle, *or equivalently, finding a curve on the circle with velocity $v = 3$*, is exactly the process of *passing between the Lie algebra and the Lie group* in a neighborhood of the identity. 

We define the Lie algebra as follows. First, a Lie algebra is a linear object: it is a vector space (we'll see later that is actually an algebra). A vector $v$ is in the **Lie algebra** of $S^1$ if it is the velocity of some trajectory on the **Lie group**.

More precisely, can we construct a curve $\gamma$ on the circle such that $\gamma'(0) = v$ and $\gamma(0) = (1,0)$?

![Curve with velocity vector v](/images/lie_theory_part_2_fig_3.png)

We claim the Lie algebra of $S^1$ is $\R$. To see this, we construct a curve on the circle that passes through $1$ with arbitrary velocity $v$. You can also imagine this process as stretching the the tangent vector onto $S^1$. 

![Curve with velocity vector v](/images/lie_theory_part_2_fig_2.png)

Let $v \in \R$ and write
\\[
	\gamma(t) = e^{ivt}.
\\]
To take the derivative of $\gamma$, we need a chart to map a local neighborhood of $1 \in S^1$ to $\R$. For an appropriately chosen branch cut, the chart
\\[
	\phi(e^{i \theta}) = \textrm{arg } e^{i \theta} = \theta
\\]
works in a *neighborhood* of $1$. Then we can compute
\\[
	(\phi \circ \gamma)'(t) = \textrm{arg } e^{ivt} = (vt)' = v
\\]
Since the map $\gamma(t) = e^{i \, v \, t}$ satisfies 
1. $\gamma(0) = 1$
2. $\gamma'(0) = v$

then $v$ is an element of the Lie algebra. Going the other direction is easy: if we have a curve $\gamma(t)$ on $S^1$, then $\gamma'(0) = v$ is a velocity vector by definition. This reverse process is intuitively like "un-stretching" the curve on the circle into the velocity vector.

This process of putting a curve through a point with a prescribed velocity vector is a local map between the Lie *algebra* and the Lie *group* _at the identity_. The group structure allows us to reconstruct the entire Lie group by understanding the behavior *only around the identity*. In other words, the circle is entirely determined by a neighborhood of the identity $1$. 

This localization comes directly from the group structure: if $g \in S^1$, then we have $g^{-1} \in S^1$ so that $g g^{-1} = 1$. In other words, any element $g \in S^1$ and its neighborhood can be rotated back to the identity by computing its inverse. The existence of inverse elements is precisely what reduces the Lie group to a neighborhood of the identity.

In turn, we can linearize the problem at the identity by considering the tangent space $T_1 S^1$, giving another perspective on the Lie algebra. You can view the Lie algebra as the collection of velocity vectors to curves on the circle passing through (1,0), or you can view the Lie algebra as the tangent space to the identity (the local linearization of the Lie group).

See [2] for a complete proof.

### Where does the algebra structure come from?

In our simple example, we have that for $u, v \in \R$,
\\[
	e^{i v t} e^{i u t} = e^{(u + v) i t}.
\\]
In other words, multiplication of Lie group elements near the identity just produces addition in the Lie algebra (viewed in logarithmic coordinates). From elementary group theory, we know that
\\[
	A^m B^n = (AB)^{m + n}
\\]
holds when $A, B$ commute (consider a matrix group as a counter-example). Similarly, the statement
\\[
	e^{i v t} e^{i u t} = e^{(u + v) i t}.
\\]
relies on the fact that $e^{i v t}, e^{i u t}$ commute. Composing two flows is the same as adding their infinitesimal generators *only* when the two flows commute. More precisely, it is a general fact that
\\[
	e^{i v t} e^{i u t} = e^{(u + v) i t}.
\\]
if and only if
\\[
	[u, v] = uv - vu = 0.
\\]
In the case of $S^1$ where our Lie algebra is $\R$, a field, this always holds: adding velocity vectors is the same as composing two symmetries (or flows).

When does 
\\[
	e^{i v t} e^{i u t} = e^{(u + v) i t}.
\\]
fail to hold?

Consider the more complicated case of $\textrm{SO}(3, \R)$, which represents rotations in $\R^3$. It is a sub-manifold of the Lie group $GL^3(\R)$, and is thus itself a Lie group. Its Lie *algebra* consists of skew-symmetric matrices of the form
\\[
	\begin{bmatrix}
		0 & a & b \cr
		-a & 0 & c \cr
		-b & -c & 0
	\end{bmatrix}.
\\]
One possible choice of basis for this space consists of rotations around the $x$-axis, $y$-axis, and $z$-axis, respectively
\\[
	J_x = \begin{bmatrix}
		0 & 0 & 0 \cr
		0 & 0 & -1 \cr
		0 & 1 & 0 
	\end{bmatrix}, \;
	J_y = \begin{bmatrix}
		0 & 0 & 1 \cr
		0 & 0 & 0 \cr
		-1 & 0 & 0 
	\end{bmatrix}, \;
	J_z = \begin{bmatrix}
		0 & -1 & 0 \cr
		1 & 0 & 0 \cr
		0 & 0 & 0 
	\end{bmatrix}.
\\]
These three matrices are the infinitesimal generators for any rotation in three dimensions.

![Rotation around the axes](/images/lie_theory_part_2_fig_5.png)

To recover the full symmetry, say an arbitrary rotation around the $x$-axis, we pass from the infinitesimal generators (Lie algebra) to the set of symmetries (Lie group) by solving the "differential equation"
\\[
	\frac{d \gamma(t)}{dt} = J_x
\\]
where now $\gamma(t)$ is a curve _in $SO(3)$_. The solution is analogous to our earlier scenario on the circle with $\gamma(t) = e^{i t v}$. One can define an "exponential map" for matrices and obtain the solution
\\[
	\textrm{exp}(t \; J_x) = \begin{bmatrix}
		1 & 0 & 0 \cr
		0 & \cos \, t & - \sin \, t \cr
		0 & \sin \, t & \cos \, t
	\end{bmatrix}.
\\]

Returning to our original example for $S^1$, we have the rotational symmetry
\\[
	e^{i \theta \; v} = \cos(v \theta) + \sin(v \theta) i
\\]
which acts as the rotation matrix on $\R^2$ (note it is a submatrix of $\textrm{exp}(t J_x)$)
\\[
	e^{i \theta v} = \begin{bmatrix}
		\cos(v \theta) & \sin(v \theta) \cr
		-\sin(v \theta) &  \cos(v \theta).
	\end{bmatrix}
\\]
We saw that these matrices commute since every element in $\R$ (the Lie *algebra*) commutes. 

Transitioning from two dimensions to three dimensions ruins this commutativity. That is, the infinitesimal generators $J_x, J_y, J_z$ do not commute, and thus the corresponding symmetries do no commute. Consider a rotation around the x-axis by $\pi/2$ followed by a rotation around the y-axis by $\pi/2$. This does not produce the same final configuration when we reverse the order.

![Rotation around the axes](/images/lie_theory_part_2_fig_6.png)

Algebraically, we can see this failure to commute in the Lie algebra by examining the commutators
\\[
	[J_x, J_y] = J_x J_y - J_y J_x = J_z, \quad [J_z, J_x] = J_y, \quad [J_y, J_z] = J_x.
\\]

The point of these two examples is that the Lie bracket $[X,Y] = XY - YX$ describes how $X,Y$ fail to commute. This failure to commute is reflected in the algebraic structure that the group law of the Lie *group* induces on the Lie *algebra*. That is, for elements $x,y$ in the Lie algebra, we have
\\[
	e^x e^y = e^{x + y + 1/2[x, y] + \cdots}
\\]
The product of Lie group elements $e^x, e^y$ induces an operation $[x, y]$ on the Lie *algebra*, which as we will see, gives the necessary structure to reconstruct the entire Lie group from the Lie algebra.

## Summary
In the first article, we discussed Lie groups (manifolds with a group structure). In this article, we discussed Lie algebras (linearizations of Lie groups). The Lie algebra allows one to reduce a full symmetry from the Lie group to an _infinitesimal generator_, an element of a vector space. The features of the full symmetries in the Lie group (e.g. when flows commute) are controlled by features of the infinitesimal generators (e.g. when the generators commute). The Lie bracket $[x,y]$ describes this latter connection.

The larger theme is the connection between geometric (Lie groups)  and algebraic (Lie algebra) objects. This connection between the geometric and algebraic is an idea that appears again and again (e.g. Galois theory, algebraic topology, etc) and appears to exploit our dual natural capabilities for vision (geometry) and language (algebra).

1. Krillov, Alexander. "Introduction to Lie Groups and Lie Algebras". Available at [https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf](https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf).

2. Lee, John M. "Smooth manifolds." _Introduction to Smooth Manifolds_. Springer New York, 2003. 1-29.
