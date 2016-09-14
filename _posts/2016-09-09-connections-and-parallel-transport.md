---
layout: post
date: 2016-09-09 13:24
categories: course-notes riemannian geometry
---
There are many connections, and many metrics. How can we make a canonical choice?

Add some compatibility conditions.
Existence of unique connection that satisfies
1. $$ X\langle Y, Z \rangle = \langle D_X Y, Z \rangle + \langle Y, D_X Z \rangle$$
2. $$ D_X Y - D_Y X = [X, Y] $$

The connection is a rank $2$ tensor that maps to vectors. In coordinates it is given by the Christoffel symbols which are related to the metric coordinates by
\\[
	\Gamma_{ij}^k = \frac{1}{2} \left( g_{ij,k} + g_{ik,j} - g_{jk,i} \right)
\\]
There is also a coordinate independent version.

When differentiating a function, we have
\\[
	f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}.
\\]
This definition relies on the fact $$f(x_0+h)$$ and $$f(x_0)$$ live in the same vector space. In $\R^n$, all the tangent spaces are the same. On an arbitrary manifold, the tangent spaces are different. To differentiate then, we need a way of relating the two vector spaces. This is what a connection allows us to do: parallel translate a vector.

