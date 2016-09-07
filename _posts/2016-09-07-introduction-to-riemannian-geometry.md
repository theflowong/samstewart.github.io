---
layout: post
date: 2016-09-07 17:38
categories: course-notes riemannian-geometry
---

In differential geometry, we study smooth manifolds. The canonical example is $S^2$.

(picture of $S^2$)

We can measure distance locally on $S^2$ since we can measure distance in $\R^n$ via the Euclidean inner-product. But what if we wish to measure distance between tangent spaces?

Amazingly, it turns out there is a metric $g$ on any smooth manifold that varies smoothly between tangent spaces. The reason is quite simple: Whitney's embedding theorem tells us that every smooth manifold can be drawn in high-enough dimensions. That is, we can embed any manifold into $$\R^{2n + 1}$$. Since the tangent space of an ambient manifold contains the tangent space of the embedded manifold, the smoothly varying Euclidean inner product in $\R^n$ is also a smoothly varying inner-product on the embedded manifold $M$.

We can actually construct the inner-product for an arbitrary manifold $M$. [Urysohn's lemma](why-urysohns-lemma-matters) tells us that every manifold has a bunch of bump functions that are supported on the domain of the charts.

There are three layers in Riemannian geometry:
1. Calculus layer (manifolds)
2. Analysis layer (PDEs)
3. 

A connection should satisfy three properties:


The impressively named, but unsurprising result called, "The Fundamental Theorem of Riemannian Geometry" tells us there exists a unique connection $D$ on any smooth manifold $M$ such that,
1. $$X \langle Y, Z \rangle = \langle D_X Y, Z \rangle + \langle Y, D_X Z \rangle $$
2. $$D_X Y - D_Y X = [X, Y]$$

What do these properties tell us geometrically?


