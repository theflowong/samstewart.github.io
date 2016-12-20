---
layout: post
---

# Why Wavelets?

As we discussed from my [series on Fourier analysis](fourier-analysis-part-1), you know that Fourier series offer a basis for functions on the circle. But there is a problem with this conversion: if a signal is localized in frequency space (only a few non-zero frequencies), then the signal will be spread out in physical space. As an example, consider $\sin(x)$. 

[ plot of sin(x) ]

We know that the Fourier series representation of $\sin(x)$ has two non-negative frequencies at $-1$ and $1$.

[ nice plot of frequencies with dots and lines for the spectrum of sin ].

Though dispersed in physical space, the signal is compressed in Fourier space. 

1. Somehow this example is backwards.
2. Add the scaling law for Fourier transform along with interactive widget to demonstrate it.

### The Uncertainty Principle

This conflict between localization in frequency space and spreading in Fourier space is a general problem that cannot be overcome in general. Amazingly, this limitation appears to be a fundamental law of the universe. Hilbert's Uncertainty Principle in quantum mechanics tells us that we cannot know the both position and momentum of a particle *at the same time*. If we measure how fast a particle is moving, our accuracy on its position is reduced and vice versa. Symbolically, the principle is given by

\\[
	\sigma_x \sigma_p \geq \frac{h}{2} (figure out this constant)
\\]

where $\sigma_x, \sigma_m$ represent the standard deviation of position and momentum, respectively (the quantum mechanic model is that particles have *probability distributions* for position and momentum, instead of deterministic trajectories. Standard deviation thus makes sense under this interpretation). The following graphic shows the position and momentum distributions for a particle. You can see how they are linked through the uncertainty principle.

[ interactive widget that enables one to adjust \sigma_x or \sigma_m and see the other side adjust ]

### Uncertainty Principle for the Fourier Transform
In some sense, this is a deep fact about our universe. On the other hand, the mathematical justification is quite simple when rephrased in terms of the Fourier transform. To compute the variance (standard deviation squared) of $f$ around $0$, we compute the integral
\\[
	\sigma_x^2 = \int_\R x^2 \abs{f}^2(x) dx.
\\]
In frequency space, via the discrete Fourier transform, we can do the same thing and obtain
\\[
	\sigma_\xi^2 = \int_\R \xi^2 \abs{f}^2 (\xi) d\xi
\\]

It is a fact in Fourier analysis that
\\[
	\sigma_x^2 \sigma_\xi^2 \geq \frac{1}{16 \pi^2}.
\\]
This is really a restatement of the Uncertainty Principle in $L^2(\R)$ (in fact, mention wave nature of matter).


### The Problem of Localization

The issue with the uncertainty principle is that it takes many frequencies to represent signals that are localized in space. From a data compression perspective, for example image compression, this is inefficient. (Tie back in early example).

# Wavelets as a Solution

Fourier series offer a **basis** for functions on $S^1$ with a lack of localization. Wavelets offer a **basis** for functions on $S^1$ with better localization in time and space. Now, the uncertainty principle tells us that we can never be perfectly localized in space **and** frequency, but wavelets show that we can do better than the Fourier basis.

The key idea for the Fourier series is to decompose a signal into individual **frequencies**, whereas the key idea for wavelets is to decompose a signal into individual **scales**.

The Fourier basis consists of $\sin(n x), \cos(n x)$ which were higher frequencies of the "fundamental frequencies" $\sin(x), \cos(x)$. In the same way, the wavelet basis consists a "fundamental scale" and the other basis elements are shifts and rescalings of the mother wavelet.

The general basis consists of shifts and rescalings of our initial wavelet (mother wavelet). Unlike Fourier series, where we only have two basis functions $\sin(x), \cos(x)$, there are many different mother wavelets, each of which produces an orthogonal basis. Let's consider a discontinuous example, before we construct a continuous wavelet. Smooth wavelets are usually better since regularity in physical space corresponds to fast decay in Fourier space so fewer frequencies are required to represent a smooth wavelet than one with jumps. 

The Haar wavelet gives a family of functions defined on dyadic cubes (cubes with widths that are powers of two). The choice of dyadic cubes is almost arbitrary, but gives the necessary nesting arguments. The mother wavelet $\phi$ is given by the step function

( plot of Haar wavelet in physical and frequency space )

Notice that in contrast to $\sin(x)$, this wavelet is highly localized in space (its support is $[0, 1)$). The Fourier transform of a discontinuity produces frequencies that decay like $1/k$, so it is also fairly localized in frequency space (though not as localized as the two frequencies for $\sin(x)$).

This function has $L^2$ norm $1$ and we can generate the other basis functions at this *scale level* (call it scale level $0$) by simply shifting the original wavelet.

( plot of shifted Haar wavelet )

Symbolically, this corresponds to 
\\[
	\phi_{0j} = \phi(x - j)
\\]
The $L^2$ norm remains one since these are merely shifts. These shifts are orthogonal since they have disjoint support. This basis allows us to represent any function **exactly** that is constant on dyadic intervals of length $1/2$ (though it might require an infinite combination). 

If the function changes over a smaller interval, these shifts are not enough to represent the function.

( plot function changing signs over smaller intervals )

Hence, we pass to a smaller scale level (call it scale leverl $1$)
\\[
	\phi_{10} = 2^{1/2} \phi(2 x)
\\]

The factor $2^{1/2}$ ensures that $\phi_{10}$ has $L^2$ norm 1. 

( plot function of rescaled Haar wavelet )

Again, we shift basis functions at this scale to produce the family
\\[
	\phi_{1j} = 2^{1/2} \phi(2x - j).
\\]

( plot of function of rescaled Haar wavelet )

Now we can build slightly more complicated functions by combining the functions $\phi_{0j}, \phi_{1j}$. But these functions must be constant on dyadic intervals no smaller than $1/4$. 

(what can't we represent?)

Of course, we can construct functions with finer behavior. How do we represent a continuous function like $y = x$ in this basis?

( plot of y = x )

Such a function is constant *nowhere*, so we can only approximate it in the limit of finer and finer scales. Hence, we need to add the rescaled basis functions for every scale level $k$ 
\\[
	\phi_{kj} = 2^{k/2} \phi(2^k x - j)
\\]
in order to represent all of $L^2(\R)$.

Just as the Fourier series tells us that we can represent $f \in L^2(S^1)$ as
\\[
	f = \sum_k a_k \sin(k x) + b_k \cos(k x).
\\]

The general theorem is thus that if $f \in L^2(\R)$, then
\\[
	f = \sum_{j,k} a_{jk} \phi_{kj}
\\]

( insert proof here )

# What have we achieved?
We have simply constructed a new basis for $L^2(\R)$ that uses basis functions (shifts and scales of the Haar wavelet) that are more localized in space than the Fourier basis functions $\sin(n x), \cos(n x)$. In the next post, we will improve our basis by constructing a *smooth* mother wavelet which will increase the rate of decay in frequency space.
