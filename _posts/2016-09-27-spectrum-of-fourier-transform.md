---
layout: post
date: 2016-09-27 14:16
categories: functional-analysis homework harmonic-analysis
---

In $L^2(\R^n), does the Fourerier transform act only by scaling in some directions? In other words, what are the eigenvalues and eigenvectors of the Fourier transform?

This is a nice application of the spectral mapping theorem for bounded operators on a Hilbert space. On $L^2$, the Fourier transform is a bounded operator (in particular it's an isometry). 

The spectral mapping theorem tells us that for any polynomial $P$ we have
\[
	\sigma(P(\mathcal{F})) = P(\sigma(\mathcal{F})).
\]

Via a change of variables, we also know that
\[
	\mathcal{F}^2(f(x)) = f(-x)
\]
so
\[
	\mathcal{F}^4(f(x)) = f(x).
\]
This implies that
\[
	\mathcal{F}^4 - I = 0.
\]
Let $P(x) = x^4 - 1$ and apply the spectral theorem. We see that the eigenvalues of $\mathcal{F}$ satisfy
\[
	\lambda^4 - 1 = 0
\]
These are exactly the fourth roots of unity $1, i, -1, -i$.

In a future article I will show how to find the directions of scaling (the eigenvectors).

