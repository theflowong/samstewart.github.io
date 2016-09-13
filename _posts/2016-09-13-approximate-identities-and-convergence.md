---
layout: post
date: 2016-09-13 17:00
categories: course-notes harmonic-analysis
---

One can answer questions about convergence of Fourier series by asking if the partial sums of trig functions somehow converge to the identity operator in an appropriate function space.

In Fourier space, consider the characteristic function $\Xi_{[-N, N]}$. As $N \to \infty$, for a function $f$ with Fourier coefficients $\hat{f}_k$, the function
\\[
	\Xi_{[-N, N]} \hat{f}_k \to \hat{f}_k

\\]
as $N \to \infty$. In other words, the characteristic function (when acting by multiplication) converges to the identity operator.

In physical space, this becomes
\\[
	D_N = \sum_{-N}^N e^{2 \pi k x}
\\]
and multiplication becomes convolution in $L^p$ so our statement about convergence to the identity becomes
\\[
	D_N * f \to f
\\]
in $L^p$. 

Viewing $D_N$ as a trigonometric polynomial in complex variable $z$ on the unit circle in $\C$, we have
\\[
	\begin{align}
		D_N &= z^{-N} + \cdots + z^{(N - 1)} + z^N \cr
		    &= z^{-N}(1 + \cdots + z^{2N} \cr
		    &= z^{-N}\frac{1 + z^{2N + 1}}{1 - z} \cr
		    &= 
	\end{align}
\\]


The idea is that $\{ D_N \}$ approximates the identity operator. 

Since the identity operator has norm $1$, one expects that $D_N$ should have bounded norm. That is,
\\[
	\norm{D_N}_{L^1} \leq C.
\\]

Unfortunately, 
Generalizing from this example, we hope any approximate identity $\{ K_\epsilon \}$ satisfies the following properties:

1. $$ \int K_\epsilon $$ = 1
2. $$ 
3. 
