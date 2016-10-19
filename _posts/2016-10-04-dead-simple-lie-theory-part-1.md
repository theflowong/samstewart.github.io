---
layout: post
date: 2016-10-04 10:29
categories: lie-theory tutorials exposition
---

$$
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
$$

## Reducing a Problem
At the heart of Lie theory, like most topics in mathematics, is a simple idea: we can use the symmetries of a complex object to reduce the complex object to a much simpler one. In Lie theory, the complicated objects are Lie groups, and the simpler objects are the corresponding Lie algebras. Lie groups are manifolds and thus "curvy," while Lie algebras are vector spaces and thus linear or "flat." Studying linear objects is always easier than nonlinear.

In this series of posts, I will first describe Lie groups, and then describe their corresponding Lie algebras.

Let's start with the more complicated object of the two: a Lie group. The circle is a Lie group when viewed as a sub-manifold of $\C$. 

<img src="https://docs.google.com/drawings/d/18Rl-_10GWkLoZVv0j8jJyo2jwXyDDgH9hOW88_drtak/pub?w=960&amp;h=720" width="500">

What is a Lie group?
2. A group with a continuous operation
3. A manifold

Is $S^1$ a manifold? Absolutely,  there are many ways to prove this.

Is $S^1$ a group with continuous addition? Sure. Complex multiplication is continuous and closed on the unit circle. That is, if $z_1 = e^{2\pi \theta_1 i}, z_2 = e^{2\pi \theta_2 i} \in S^1$, then $z_1 \cdot z_2 = e^{2\pi (\theta_1 + \theta_2)i} \in S^1$. So the group structure is complex multiplication.

A general manifold is complicated. But the additional _group structure_ provides a lot of symmetries. In the case of $S^1$, the group structure corresponds to a rotational symmetry. _Closure_ under addition is what produces the symmetry. More precisely, multiplying every element of $S^1$ by $e^{2\pi i \theta}$ sends $S^1$ to $S^1$ by rotation of angle $\theta$.

<img src="https://docs.google.com/drawings/d/1X-a8qtTsAGHIfXiTlYZT4cnrHyU8B-TlyA_2DUlL-8A/pub?w=960&amp;h=720" width="500">

## The Importance of Identity
This rotational symmetry allows us to understand the entire _global_ topological structure of $S^1$ by only considering a _local_ neighborhood of $1$ (the identity). That is, we can reconstruct the entire manifold's topology from a neighborhood of $1$.

Why is this? Simple. Imagine you want to understand a neighborhood of $i$ in $S^1$.

First, use the group structure in $S^1$ to rotate $i$ back to $1$ (i.e. we have the multiplicative inverse $-i$ so $-i \cdot i = 1$).

<img src="https://docs.google.com/drawings/d/1-tUCoeTB_HtP4jhdyt-PWN6AXlqMu18Ap_jhx0Qg2Vc/pub?w=960&amp;h=720" width="500">

Now take our open interval around $1$, and rotate back to $i$ (i.e. multiply by $i$). Then after this transformation we have an interval around $i$. 

<img src="https://docs.google.com/drawings/d/1xXizg5ExWAeI-83cmseknldNioF6zcOYkMwlRvrL7bs/pub?w=960&amp;h=720" width="500">

Hence, the group structure allows us to create a manifold structure near $1$ and then "stamp out" that same structure at every other point.

The key idea is that at any point $z$, we can rotate continuously back to the identity $1$ by multiplying by $1/z$. This is the group structure at work.

<img src="https://docs.google.com/drawings/d/1_Frfxpl2eTBskveQ9yHda_rIaJVSi3N0m4qdO6Z0N6s/pub?w=960&amp;h=720" width="500">

The manifold structure is simpler due to the group structure.

In technical jargon, you can prove that a chart $\phi : U \to \R$ (where $U$ is a neighborhood of $1$) can be extended to a countable atlas of charts by simply covering $S^1$ with copies of $U$ and using the charts
\\[
	\phi_y(x) = \phi(x - y). 
\\]

This is a chart since the group operation is continuous.


### Up Next
In the next post, we will discuss how the group structure allows us to recreate the entire Lie group by understanding the linearization (tangent space) near the identity.

