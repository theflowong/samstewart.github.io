---
layout: post
date: 2016-09-13 17:00
categories: course-notes harmonic-analysis
---
$\newcommand{\norm}[1]{\left\lVert#1\right\rVert}$

One can answer questions about convergence of Fourier series by asking if the partial sums of trig functions somehow converge to the identity operator in an appropriate function space.

In Fourier space, consider the characteristic function $\chi_{[-N, N]}$. As $N \to \infty$, for a function $f$ with Fourier coefficients $\hat{f}_k$, the function
\\[
	\chi_{[-N, N]} \hat{f}_k \to \hat{f}_k
\\]
as $N \to \infty$. In other words, the characteristic function (when acting by multiplication) converges to the identity operator.

In physical space, this becomes
\\[
	D_N = \sum_{k=-N}^N e^{2 \pi k x}
\\]
and multiplication becomes convolution in $L^p$ so our statement about convergence to the identity becomes
\\[
	D_N * f \to f
\\]
in $L^p$. 

### Problem 2a
Viewing $D_N$ as a trigonometric polynomial in complex variable $z$ on the unit circle in $\mathbb{C}$, we have
\\[
	\begin{align}
		D_N &= z^{-N} + \cdots + z^{(N - 1)} + z^N \cr
		    &= z^{-N}(1 + \cdots + z^{2N} \cr
		    &= z^{-N}\frac{1 - z^{2N + 1}}{1 - z} 
	\end{align}
\\]
Multiplying the top and bottom by $-z^{-1/2}$ gives
\\[
	D_N = \frac{z^{(N + 1/2)} - z^{-(N + 1/2)}}{z^{1/2} - z^{-1/2}} = \frac{2 \sin((2N + 1) \pi x)}{2 \sin(\pi x)}.
\\]

The idea is that $\{ D_N \}$ approximates the identity operator. 
### Problem 2b
As $N \to \infty$, one would expect that the Dirichlet kernel looks more like the Dirac delta function. That is, the mass should be concentrated around $0$. However, 

### Problem 2c
Since the identity operator has norm $1$, one expects that $D_N$ should have bounded norm. That is,
\\[
	\norm{D_N}_{L^1} \leq C.
\\]

Unfortunately, this is not the case. Instead, the $L^1$ norm blows up exponentially as the following computation shows.
\\[
	\begin{align}
		\norm{D_N}_{L^1} &= \int_0^1 \left| \frac{\sin((2N + 1) \pi x)}{\sin(\pi x)} \right| dx  \cr
								&\geq  \int_0^1 \left| \frac{\sin((2N + 1) \pi x)}{x} \right| dx \cr
									  &=  C \int_0^{(2N + 1) \pi} \left| \frac{\sin(x)}{x} \right| dx \cr
									  &= C \sum_{k = 0}^{2N + 1} \int_{k\pi}^{(k + 1) \pi} \frac{\sin(x)}{x} dx \cr
									  &\geq C\sum_{k = 0}^{2N + 1} \int_0^\pi \frac{\sin(x)}{k \pi + x}dx \cr
									  &\geq C \sum_{k = 0}^{2N + 1} \frac{1}{k \pi + \pi} \int_0^\pi \sin(x) dx \cr
									  &\geq C \sum_{k = 1}^{2N} \frac{1}{k}
	\end{align}
\\]
By the integral test, we know that
\\[
	\sum_{k = 1}^{2N} \frac{1}{k} \approx \int_1^{2N} \frac{1}{x} = \ln(2N) \geq \ln(N)
\\]
so
\\[
	\norm{D_N}_{L^1}  \geq C \ln(N)
\\]
A similar computation shows that $\norm{D_N}^{L^1} \leq c \ln(N)$. Hence, the norm of the Dirichlet kernel blows up like $\ln N$.

We know from before that 
\\[
	D_N * f \to f
\\]
in $L^2$ 

Generalizing from this example, we hope any approximate identity $\{ K_\epsilon \}$ satisfies the following properties:

1. Each function must have mean $1$.
\\[
	\frac{1}{2\pi} \int_0^1 K_\epsilon = 1
\\]
2. $ \norm{K_\epsilon}_{L^1} \leq C$.
3. For any $\delta > 0$, we have 
\\[
	\lim_{\epsilon \to 0} \int_{\mathbb{R} \backslash B_\delta(0)} K_\epsilon dx \to 0.
\\]

### Problem 3
We can fix the issues with convergence for the Dirichlet kernel by taking Cesaro means of the Dirichlet kernel. 

If you have the sequence $a_n = (-1)^n$ then the series
\\[
	S_n = \sum_{n = 1}^\infty a_n 
\\]
doesn't converge because the partial sums oscillate between $0$ and $1$. However, we can build a new sequence whose series does converge. Define
\\[
	t_n = \frac{1}{n} \sum_{k = 1}^{n} S_k
\\]
then computation shows that
\\[
	\sum_{n = 1}^\infty t_n = \frac{1}{2}.
\\]
By summing up the partial sums of the non-convergent series for $a_n = (-1)^n$ and averaging these sums, we obtain a convergent series.

The same trick improves the convergence properties of the Dirichlet kernel. Define the Frejer kernel to be
\\[
	F_N = \frac{1}{N + 1} \sum_{n = 0}^N D_n.
\\]
Notice that in Fourier space, this is given by
\\[
	\hat{F}_N(k) = 1 - \frac{\abs{k}}{N + 1}
\\]
which looks like a triangle

(insert image in Fourier space)
### Problem 3a
We can place write this in closed form as
\\[
	F_N = \frac{1}{N + 1} \frac{\sin^2((N + 1) \pi x)}{\sin^2(\pi x}
\\]

Using the closed form of the Dirchlet kernel, we can write
\\[
	\begin{aligned}
		F_N &= \frac{1}{(N + 1) \sin(\pi x)} \sum_{k = 0}^N \sin((2k + 1) \pi x) \cr
		    &= \frac{1}{(N + 1) \sin(\pi x)} \sum_{k = 0}^N \im{z^{1/2} z^k} \cr
		    &= \frac{1}{(N + 1) \sin(\pi x)} \im{\sum_{k = 0}^N z^{1/2} z^k} \cr
		    &= \frac{1}{(N + 1) \sin(\pi x)} \im{z^{1/2} \frac{z^{N + 1} - 1}{z - 1}} \cr
		    &= \frac{1}{(N + 1) \sin(\pi x)} \im{\frac{z^{N + 1} - 1}{z^{1/2} - z^{-1/2}}}
		    &= \frac{1}{2(N + 1) \sin^2(\pi x)} \im{z^{N + 1} - 1}
	\end{aligned}
\\]
Then we can write
\\[
	\im{z^{N + 1} - 1} = \im{i^2 (1 - z^{N + 1})} = 1 - \cos(2(N + 1) \pi x) = 2 \sin^2((N + 1) \pi x).
\\]
So we have
\\[
	F_N = \frac{2 \sin^2((N + 1) \pi x)}{2(N + 1) \sin^2(\pi x) = \frac{\sin^2((N + 1) \pi x)}{(N + 1) \sin^2(\pi x)}.
\\]

## Problem 3b
This new kernel is an approximate identity. We just saw that $F_N \geq 0$ and since $\int D_N dx = 1$ then
\\[
	\int_0^1 F_N dx = \frac{1}{N + 1} \sum_{n = 0}^N \int_0^1 D_n dx = \frac{N + 1}{N + 1} = 1.
\\]

The fact that $F_N \geq 0$ immediately implies that
\\[
	\norm{F_N}_{L^1} = \int_0^1 \left| F_N \right| dx = \int_0^1 F_N dx = 1 < \infty
\\]
so $F_N$ satisfies property two. It only remains to show that most of the mass concentrates at the origin. 

Note that for $x \in [0, \pi]$, we have that $\sin(x/2)$ is an increasing function, so its increasing on $(\delta, \pi]$. Thus
\\[
	\frac{1}{\sin^2(x/2)} \leq \frac{1}{\sin^2(\delta / 2)}
\\]
so
\\[
	\int_0^1 F_N dx  \leq \frac{1}{N + 1} \int_\delta^1 \frac{1}{\sin^2(\delta / 2)} \leq \frac{C}{N}.
\\]

Taking $N \to \infty$ shows that
\\[
	\norm{F_N}_{L^1} \to 0.
\\]

### Problem 4a
We can build other kernels from the Ferer kernel. For example, the Valee Poussin kernel given by
\\[
	V_N(x) = 2F_{2N + 1}(x) - F_N(x)
\\]

Since integrals respect sums, this is an approximate identity almost trivially.

To see that the mean is $1$, note that we just showed
\\[
	\frac{1}{2\pi} \int_0^1 F_N(x) = 1,
\\]
so we have
\\[
	\frac{1}{2\pi} \int_0^1 V_N(x) dx = \frac{1}{pi} \int_0^1 F_{2N + 1} - \frac{1}{2\pi}dx \int_0^1 F_{N} dx = 2 - 1 = 1.
\\]
The $L^1$ norm is also bounded by the triangle inequality
\\[
	\norm{V_N}_{L^1} \leq 2\norm{F_{2N + 1}}_{L^1} + \norm{F_N}_{L^1} = 3.
\\]
We also have 
\\[
	\int_\delta^1 F_N  = \mathcal{O}\left( \frac{1}{N} \right)
\\]
so again by the triangle inequality for $L^1$, we have
\\[
	\int_\delta^1 V_N dx = \\mathcal{O}\left( \frac{1}{N} \right
\\]
so
\\[
	\int_\delta^1 V_N dx \to 0
\\]
as $N \to \infty$.

In Fourier space, we know that
\\[
	\hat{F}_N(k) = 1 - \frac{\abs{K}}{N}
\\]
which looks like a triangle. In Fourier space, the coefficients of the Valee Poussin kernel are thus the difference of two triangles.

(figure of difference of two triangles)
Explicitly, the Fourier coefficients for $V_N$ are
\\[
	\hat{V}_N(k) = 
	\begin{cases}
		-\abs{k} \frac{N + 1]{2N + 1} & \textrm{ if } \abs{k} \leq N \cr
		1 - \frac{\abs{k}{2N + 1} & \textrm{ if } N < \abs{k} \leq 2N + 1 \cr
		0 & \textrm{ otherwise }
\\]

The first property is natural, the second property guarantees the same norm as the identity operator, and the third property guarantees that the mass of $K_\epsilon$ is concentrated around the origin. From a probably point of view, an approximate identity produces a probability distribution where the particle is almost surely at the origin.

References:
1. [http://www.math.unm.edu/~crisp/courses/wavelets/fall09/chap4.pdf](http://www.math.unm.edu/~crisp/courses/wavelets/fall09/chap4.pdf)
