---
layout: post
date: 2016-09-13 17:00
categories: course-notes harmonic-analysis homework
---
<script type="text/javascript">
$(document).ready(function() {
	$('div.proof').map(function() {
		$(this).append('[<a href="#" id="proof_open_close">Expand</a>]').click(function() {
			console.log('you clicked!');
		});
	});
//	$('div.proof').hide();
});
</script>
{{ page.url }}

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
<span class="homework_title">Problem 2a</span>
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
</div>
one can show that
\\[
	\norm{D_N} \approx \ln(N)
\\]
<div class="proof">
<span class="homework_title">Problem 2c</span>
Since the identity operator has norm $1$, one expects that $D_N$ should have bounded norm. That is,
\\[
	\norm{D_N}_{L^1} \leq C.
\\]

Unfortunately, this is not the case. Instead, the $L^1$ norm blows up exponentially as the following computation shows.

\\[
	\begin{align}
		\norm{D_N} & = \int_0^1 \left| \frac{\sin((2N + 1) \pi x)}{\sin(\pi x)} \right| dx \cr
			&\geq  \int_0^1 \left| \frac{\sin((2N + 1) \pi x)}{x} \right| dx \cr
	  		&=  C \int_0^{(2N + 1) \pi} \left| \frac{\sin(x)}{x} \right| dx \cr
		  	&= C \sum_{k = 0}^{2N + 1} \int_{k\pi}^{(k + 1) \pi} \frac{\sin(x)}{x} dx \cr
		        &\geq C\sum_{k = 0}^{2N + 1} \int_0^\pi \frac{\sin(x)}{k \pi + x}dx \cr
		  	&\geq C \sum_{k = 0}^{2N + 1} \frac{1}{k \pi + \pi} \int_0^\pi \sin(x) dx \cr
		        &\geq C \sum_{k = 1}^{2N} \frac{1}{k}
	\end{align}
\\]

By the definition of the Riemann integral, we know that
\\[
	\sum_{k = 1}^{2N} \frac{1}{k} \geq  \int_1^{2N} \frac{1}{x} = \ln(2N) \geq \ln(N)
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
	\sum_{k = 1}^\infty \frac{k} S_k = \frac{1}{2}.
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
<span class="homework_title">Problem 3</span>
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
		    &= \frac{1}{(N + 1) \sin(\pi x)} \im{\frac{z^{N + 1} - 1}{z^{1/2} - z^{-1/2}}} \cr
		    &= \frac{1}{2(N + 1) \sin^2(\pi x)} \im{z^{N + 1} - 1}
	\end{aligned}
\\]
Then we can write
\\[
	\im{z^{N + 1} - 1} = \im{i^2 (1 - z^{N + 1})} = 1 - \cos(2(N + 1) \pi x) = 2 \sin^2((N + 1) \pi x).
\\]
So we have
\\[
	F_N = \frac{2 \sin^2((N + 1) \pi x)}{2(N + 1) \sin^2(\pi x)} = \frac{1}{N + 1} \left( \frac{\sin((N + 1) \pi x)}{\sin(\pi x)} \right)^2.
\\]
</div>

we can see that $F_N$ does not have the same unbounded $L^1$ norm as $D_N$. 

<span class="homework_title">Problem 3b</span>
The closed form of $F_N$ shows that $F_N \geq 0$, so
\\[
	\int_0^1 F_N dx = \frac{1}{N + 1} \sum_{n = 0}^N \int_0^1 D_n dx = \frac{N + 1}{N + 1} = 1 < \infty
\\]

We can also see that most of the mass concentrates at the origin. For $x \in [0, \pi]$, we have that $\sin(x/2)$ is an increasing function, so it is increasing on $(\delta, \pi]$. Thus
\\[
	\frac{1}{\sin^2(x/2)} \leq \frac{1}{\sin^2(\delta / 2)}
\\]
so
\\[
	\int_0^1 F_N dx \leq \frac{1}{N + 1} \int_\delta^1 \frac{1}{\sin^2(\delta / 2)} \leq \frac{C}{N}.
\\]

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

*These three reasonable properties enable us to reconstruct continuous functions pointwise and functions in the spaces $L^p$ for $1 \geq p &lt; \infty$ (see [1] for a proof).The failure of the Dirichlet kernel to satisfy the second two properties is exactly why we can only guarantee pointwise convergence for a continuous functions via Ferér means, but not the actual Fourier series.

One can build other nice kernels (in fact called "good kernels") that satisfy the above three properties.

<div class="extra_example">
<span class="homework_title">Problem 4a</span>
A simple example is the Valeé Poussin kernel given by
\\[
	V_N(x) = 2F_{2N + 1}(x) - F_N(x).
\\]
In physical and Fourier space, it looks like the following

(JSX graph of the kernel in physical and Fourier space)

Let's check that it satisfies our three desired properties. 

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
	\norm{V_N} \leq 2\norm{F_{2N + 1}} + \norm{F_N} = 3.
\\]
We also have 
\\[
	\int_\delta^1 F_N  = \mathcal{O}\left( \frac{1}{N} \right)
\\]
so again by the triangle inequality for $L^1$, we have
\\[
	\int_\delta^1 V_N dx = \mathcal{O}\left( \frac{1}{N} \right)
\\]
so
\\[
	\int_\delta^1 V_N dx \to 0
\\]
as $N \to \infty$.
</div>

## References:
1. [http://www.math.unm.edu/~crisp/courses/wavelets/fall09/chap4.pdf](http://www.math.unm.edu/~crisp/courses/wavelets/fall09/chap4.pdf)
