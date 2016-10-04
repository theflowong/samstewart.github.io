---
layout: post
categories: tutorials numerical-analysis talks
date: 2016-10-04 17:09
---

Numerical spectral methods use Fourier series to convert a PDE into an ODE in Fourier space. Take, for example, Burger's equation, the friend of any fluid dynamicist
\\[
	u_t = -u \cdot u_x
\\]
on $S^1$. That is, the solutions are periodic. We know that we can obtain an analytic solution by reducing it to an ODE along characteristics. For initial data $u_0 \in L^2(S^1)$ we have
\\[
	solution here.
\\]

Can we solve this quasilinear PDE numerically? Expressing $u$ in the Fourier series gives 
\\[
	\hat{u}_t = -\hat{u} * (i k \hat{u}).
\\]
where we used the fact that multiplication becomes convolution in Fourier space. This is now an infinite system of ODEs for $\hat{u}$ (this is the same idea as applying the method of characteristics). How can we solve this numerically?

Of course, computers can only deal with finite dimensions, so we must "project" this problem to a finite dimensional space. This space is simply the linear span of
\[
	M_N = \text{span } ( z^n \text{ for } n = -N, \ldots, N ).
\]
where $z = e^{-2\pi \theta}$. In Fourier space, $M_N$ represents the first $N$ Fourier modes.

Since we know by the fact that $z^n$ forms a basis that
\\[
	\bigcup_N M_N = L^2(S^1), 
\\]
the hope is that solving the ODE on $M_N$ leads to a solution on $L^2(S^1)$ as $N \to \infty$.

Projection to finite dimensional subspace. Theoretical justification.

# Handling Nonlinearities
Convert convolution to multiplication in Fourier space.

# Fast Fourier Transform
Why it is $\mathcal{O}(n \ln n)$.

# Convergence
Spectral because convergence for smooth solutions is exponential. 

# Problem of Aliasing

Examples:
Wagon wheels
Patterns in film
Smooth lines on a computer screen

# Parity of Coefficient Indexing
When to set the higher coefficients to zero

# Matlab implementation

1. Representation
2. Fourier transform and strange storage order
3. Convolution
