---
layout: post
date: 2016-10-04 9:47
categories: harmonic-analysis analysis homework interesting-facts
---

Interestingly, the family of functions $e^{-\pi (x - h)^2}$ for $h \in \R$ forms a kind of basis for $L^2(\R)$. More precisely, the closure of the linear span of this family is $L^2(\R)$. In other words, functions in $L^2$ are just combinations of Gaussians with standard deviation $1/\sqrt{\pi}$.

Why? Amazingly, simply because the Fourier transform of $e^{-\pi x^2}$ is non-zero a.e.

In general, let $M$ be the closure of the linear span of the family $g(x - h)$. Then $M = L^2(\R)$ if and only if $\hat{g}(\xi)$ is non-zero a.e.

For the forward direction, suppose towards a contradiction that $\hat{g}(\xi) \neq 0$ a.e. but $M \neq L^2(\R)$. Thus there exists $z \notin M$. Then by Hahn-Banach there exists a continuous linear functional $\psi$ such that $\psi = 0$ on $M$ and $\psi(z) = 1$. By definition the translates of $g$ are in $M$ so
\\[
	\psi(g(x - h)) = 0.
\\]
The Riesz Representation theorem tells us that this function acts as
\\[
	\psi(g(x - h)) = \int_\R g(x - h) \overline{f}(x) dx = g * f = 0
\\]
for $f \in L^2(\R)$. By properties of the Fourier transform we have
\\[
	\widehat{g * f} = \hat{g}(\xi) \hat{f}(\xi) = 0.	
\\]

Since $\hat{g}(\xi) \neq 0$ a.e. then necessarily $\hat{f}(\xi) = 0$ a.e. Hence by Fourier inversion $f = 0$ a.e., implying that $\psi = 0$ over all of $L^2$. But this is a contradiction since $\psi(z) = 1$. 

For the reverse direction, assume towards a contradiction that $g = 0$ on some set $U$ with positive measure, and that $M = L^2(\R)$. Then construct $f \in L^2(\R)$ by specifying
\\[
	\hat{f} = \mathbb{1}_{\R \backslash U} \frac{1}{1 + \xi^2}.
\\]
The extra factor of $1/(1 + \xi^2)$ ensures that $\hat{f} \in L^2(\R)$. By construction
\\[
	\hat{f} \hat{g} = 0 \textrm{ a. e. }.
\\]
The Fourier transform turns multiplication into convolution so we have
\\[
	f * g = \int_\R g(x - h) f(x) dx = 0
\\]
This implies that $f$ is orthogonal to every $g(x - h)$, so $f \notin M = L^2(\R)$. But this contradicts the construction of $f$.

# Perspective from the Spectral Theorem

The condition that $\hat{g}(\xi) \neq 0$ a.e. can also be viewed from another perspective. Since the translation operator $T_h$ acts via multiplication in Fourier space, the condition guarantees that $e^{-2\pi \xi h}$ is in the spectrum of $T_h$ for almost every $\xi$. 

The generalized spectral theorem tells us that this produces a family of projection operators $E(e^{-2\pi \xi h})$ that project to an increasing family of subspaces $M(e^{-2\pi \xi h})$ whose union is all of $L^2$. These subspaces are essentially linear combinations of $g(x - h)$ in physical space. 
