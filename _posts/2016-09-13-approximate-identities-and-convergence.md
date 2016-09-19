---
layout: post
date: 2016-09-13 17:00
categories: course-notes harmonic-analysis homework
---
A natural question is to ask if we reconstruct our original function $f$ from its Fourier series given by
\\[
	\sum_{-N}^N \widehat{f_k} e^{2 \pi i x k}. 
\\]
More precisely, in what function spaces do these sums of functions converge to our original function. 

We can rewrite the Fourier series of $f$ as
\\[
	\sum_{-N}^N \widehat{f_k} e^{2 \pi i x k} = \frac{1}{2\pi} \int_0^1 f(y) \sum_{-N}^N e^{2 \pi i (x - y)} dy = D_N * f
\\]
where
\\[
	D_N = \sum_{-N}^N e^{2 \pi i x},
\\]
which we call the Dirichlet kernel and the star denotes [convolution](https://en.wikipedia.org/wiki/Convolution). 

We have rephrased our question about convergence of Fourier series: in what function spaces does
\\[
	D_N * f
\\]
converge to $f$?

Why is this perspective useful? Because you can think of convolution as a kind of multiplication. From this perspective, we want to know if
\\[
	D_N * f \to I * f = f
\\]
where $I$ is an "identity" element. 

In other words, we wish to know if $D_N$ converges in some sense to some kind of identity. 

Since $I * f$ is a weighted average of $f$ by $I$, then we would expect $I$ to assign the origin weight $1$ and everything else weight zero. Unfortunately, in spaces like $C[0, 1])$ and $L^p$, such a function either doesn't exist or is indistinguishable from zero. Such a function can only be achieved in the limit. However, the intuition is correct: a sequence $D_N$ going to the identity should have most of its mass concetrated around $0$. For large enough $N$, it should look like

(JSX graph plot)

The following interactive diagram shows $D_N$ in physical space and Fourier space. The [Plancherel theorem](https://en.wikipedia.org/wiki/Plancherel_theorem) tells us that a concentrated function in physical space produces a diffused function in frequency space. The diagram agrees with this.

(JSX interactive plot showing D_N in physical and frequency space)

From the plot, it appears that $D_N$ begins to look like an identity. Is this true?

We know that the mass should concentrate near the origin. But we don't want infinite mass near the origin: we hope that
\\[
	\norm{D_N}_{L^1} = \int_0^1 \abs{D_N(x)} dx < \infty
\\]

Unfortunately, using the representation
\\[
	D_N(x) = \frac{\sin((2N + 1) \pi x)}{\sin(\pi x)}
\\]
<div class="proof">
{% include harmonic-hw-1-p-2a.html %}
</div>

one can show that
\\[
	\norm{D_N} \approx \ln(N)
\\]
<div class="proof">
{% include harmonic-hw-1-p-2c.html %}
</div>

and thus diverges.

In fact, this $\ln(N)$ divergence allows one to [construct a continuous function](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series#Pointwise_convergence) $f$ such that
\\[
	(D_N * f)(0) \to \infty.
\\]
This means that we cannot, in general, reconstruct $f$ pointwise from its Fourier series. 

However, there is a solution. Let's examine a simpler problem. We know the series
\\[
	S_N = 	\sum_{n = 1}^N (-1)^n
\\]
oscillates between $0$ and $1$g and thus does not converge. However, one can show that
\\[
	\sum_{k = 1}^\infty \frac{1}{k} S_k = \frac{1}{2}.
\\]

By averaging the partial sums of the divergent series, we manage to gain convergence. This averaging partial sums are called Cesaro means.

The same trick improves the convergence properties of the Dirichlet kernel. Define the Frejér kernel to be
\\[
	F_N = \frac{1}{N + 1} \sum_{n = 0}^N D_n.
\\]
Again, both in physical and Fourier space this looks like

(JSX plot of both in physical and fourier space)

Using the form
\\[
	F_N = \frac{1}{N + 1} \frac{\sin^2((N + 1) \pi x)}{\sin^2(\pi x}
\\]
<div class="proof">
{% include harmonic-hw-1-p-3a.html %}
</div>

we can see that $F_N$ does not have the same unbounded $L^1$ norm as $D_N$. 

{% include harmonic-hw-1-p-3b.html %}

The Fejér kernel satisfies the following three properties
1. $F_N$ has mean of $1$. That is
\\[
	\int_0^1 F_N dx = 1
\\]
2. $F_N$ has bounded mass
\\[
	\norm{F_N}_{L^1} &lt; \infty
\\]
3. $F_N$ has mass mostly concentrated near the origin.
\\[
	\int_\delta^1 \abs{F}_N \to 0
\\]

These three reasonable properties enable us to reconstruct continuous functions pointwise and functions in the spaces $L^p$ for $1 \geq p &lt; \infty$ (see [1] for a proof).The failure of the Dirichlet kernel to satisfy the second two properties is exactly why we can only guarantee pointwise convergence for a continuous functions via Ferér means, but not the actual Fourier series.
## References:
1. [http://www.math.unm.edu/~crisp/courses/wavelets/fall09/chap4.pdf](http://www.math.unm.edu/~crisp/courses/wavelets/fall09/chap4.pdf)
