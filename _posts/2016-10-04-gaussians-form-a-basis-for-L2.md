---
layout: post
date: 2016-10-04 9:47
categories: harmonic-analysis analysis homework interesting-facts
---

Interestingly, the family of functions $e^{-\pi (x - h)^2}$ for $h \in \R$ forms a kind of basis for $L^2(\R)$. More precisely, the closure of the linear span of this family is $L^2(\R)$. In other words, functions in $L^2$ are just combinations of Gaussians with standard deviation $1/\sqrt{\pi}$.

Why? Amazingly, simply because the Fourier transform of $e^{-\pi x^2}$ is non-zero a.e.

In general, let $M$ be the closure of the linear span of the family $g(x - h)$. Then $M = L^2(\R)$ if and only if $\hat{g}(\xi)$ is non-zero a.e.

For the forward direction, suppose towards a contradiction that $\hat{g}(\xi) \neq 0$ a.e. but $M \neq L^2(\R)$. Then by Hahn-Banach there exists a continuous linear functional $\psi$ such that $\psi = 0$ on $M$ and $\psi = 1$ on $L^2 \backslash M$. Thus
\\[
	\psi(g(x - h)) = 0.
\\]
By the Riesz Representation theorem we have
\\[
	\psi(g(x - h)) = \int_\R g(x - h) \overline{f}(x) dx = g * f = 0
\\]
for $f \in L^2$. By properties of the Fourier transform we have
\\[
	\widehat{g * f} = \hat{g}(\xi) \hat{f}(\xi) = 0.	
\\]

Since $\hat{g}(\xi) \neq 0$ a.e. then necessarily $\hat{f}(\xi) = 0$ a.e. Hence by Fourier inversion $f = 0$ a.e., implying that $\psi = 0$ over all of $L^2$. This is a contradiction since $\psi = 1$ on $L^2 \backslash M$. Thus we conclude $M = L^2$.

For the reverse direction, assume that $M = L^2(\R)$. Then by a similar argument above
\\[
	\hat{g}(\xi) \hat{f}(\xi) = 0 \textrm{ a.e.}
\\]
for all $f \in L^2$. Suppose that $\hat{g}(\xi) \neq 0$ on some positive measure set $U$. Then choose $\hat{f} = \mathbb{1}_U$ and obtain a contradiction. 

# Perspective from the Spectral Theorem

The condition that $\hat{g}(\xi) \neq 0$ a.e. can also be viewed from another perspective. Since the translation operator $T_h$ acts via multiplication in Fourier space, the condition guarantees that $e^{-2\pi \xi h}$ is in the spectrum of $T_h$ for almost every $\xi$. 

The generalized spectral theorem tells us that this produces a family of projection operators $E(e^{-2\pi \xi h})$ that project to an increasing family of subspaces $M(e^{-2\pi \xi h})$ whose union is all of $L^2$. These subspaces are essentially linear combinations of $g(x - h)$ in physical space. 
