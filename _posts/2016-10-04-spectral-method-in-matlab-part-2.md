---
layout: post
date: 2016-10-19 16:45
---

$$
\newcommand{\sinc}{\textrm{sinc }}
\newcommand{\R}{\mathbb{R}}
$$

## Last article
In the last article, we first transformed Burger's equation
\\[
  u_t = - u_x \, u
\\]

into Fourier space to give
\\[
	\partial_t \hat{u} = -\hat{u}_m * (i \; m \, \hat{u}_m).
\\]
via the Discrete Fourier Transform (DFT).

We then computed the right-hand side quickly via fast convolutions with the Fourier transform.

## This article
In this post, we discuss the following:

1. For a continuous signal, how often should we sample?
2. What happens when we sample too infrequently?

This article is based on course notes from Professor Lerman [1] here at the UMN.

## How often do we need to sample?

Consider the simple case of a function in $L^2(S^1)$

 We have N = 2K + 1 unknown frequencies $\hat{f}(k)$, so we need $N = 2K + 1$ sample points.

But what about in general?

### Shannon's Sampling Theorem
But what about signals on all of $\R$ (not just $S^1$)? Shannon's Sampling Theorem (named after the famed information theorist [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon)) tells us the sampling frequency.

First, some terminology. Let $f \in L^2(\R)$ such that $\textrm{supp } \left\| \hat{f} \right\| = [-B, B]$. Then we say that $f$ is band-limited and call B the _Nyquist frequency_ and 2B the _Nyquist rate_ (conventions differ).

Shannon's theorem tells us the following

1. In frequency space, if we sample at frequency F, we can accurately recreate signals with maximum frequencies 2F.
2. In physical space, we must sample at grid points spaced by 1/2B.


Symbollically, theorem states that
\\[
f(x) = \sum_{n = -\infty}^\infty f\left( \frac{n}{2B} \right) \sinc(2B (x - n/2B))
\\]
   (equality in $L^2$). By convention we define
\\[
\sinc x = \frac{\sin x}{x}
\\]

You can see that $f$ is thus determined only at grid points $n/2B$.

Many naturally occurring signals are inherently band-limited. For example, the human voice is between 300 Hz and 3.5 KHz [1].



#### First Proof
The first proof relies on the following **key observation**: if 
\\[
\textrm{supp } \hat{f} = [-B, B]
\\]
then necessarily
\\[
\hat{f} \in L^2([-B, B]),
\\]
so we can *expand $\hat{f}$ in a Fourier series*
\\[
\hat{f}(\xi) = \sum_{n=-\infty}^\infty c_n e^{2\pi i \xi n/2B}.
\\]
The remainder of the proof is a computation to obtain the formula given in Shannon's Theorem.

1. We compute the coefficients $c_n$ and see that $\hat{f}$ is determined by $f(n/2B)$.
2. We invert the Fourier series to recover $f$. It is determined by $f(n/2B)$.



**Step 1:**

We first compute the coefficient $c_n$ to get
\\[
c_n = \frac{1}{2B} \int_{-B}^B \hat{f}(\xi) e^{-2 \pi i \xi n / 2B} d\xi = \frac{1}{2B} f\left( \frac{-n}{2B} \right).
\\]
Plugging this back into the formula for $\hat{f}(\xi)$ we get
\\[
\hat{f}(\xi) = \sum_{n = -\infty}^\infty \frac{1}{2B} f\left( \frac{n}{2B} \right) e^{-2\pi i \xi n/2B}.
\\]
It is now clear that $\hat{f}(\xi)$ is determined by $f$ at grid points. 

**Step 2:**

We can recover $f$ via the inversion formula to obtain the original result
\\[
f(x) = \int_{-\infty}^\infty \hat{f}(\xi) e^{2\pi i \xi x} d\xi = \int_{-\infty}^\infty \sum_{n = -\infty}^\infty \frac{1}{2B} f\left( \frac{n}{2B} \right) e^{-2\pi i \xi n/2B} e^{2\pi i \xi x} d\theta
\\]
Lebesgue Dominated Convergence allows us to switch the sum and the integral so we have
\\[
f(x) = \sum_{n = -\infty}^\infty \int_{-\infty}^\infty \frac{1}{2B} f\left( \frac{n}{2B} \right) e^{2 \pi i \xi (x - n / 2B)}d\xi
\\]
Computing this integral via a change of variables gives
\\[
f(x) = \sum_{n = -\infty}^\infty  f\left( \frac{n}{2B} \right) \sinc(2B(x - n / 2B))
\\]


#### Second Proof
The **key observation** is Poisson's summation formula which gives that for $f \in L^1(\R)$ we have

\\[
	\sum_{n = -\infty}^\infty f(x + n/2B) = \sum_{n = -\infty}^\infty \hat{f}(n/2B) e^{2\pi i x n / 2B}.
\\]

This is a completely natural result since translation in physical space ($x + n / 2B$) becomes modulation in frequency space (the exponential factor).



Moreover, this theorem relates the Fourier *transform* to Fourier *series*.

How is this result useful? Well, a similar result holds from the Fourier perspective. That is
\\[
\sum_{n = -\infty}^\infty \hat{f}(\xi + n/2B)  = \frac{1}{2B} \sum_{n = -\infty}^\infty f(n/2B) e^{-2\pi i n \xi / 2B}
\\]
If we want to recover $\hat{f}(\xi)$ we need to zero out the shifts by $n/2B$. That is, we write
\\[
\hat{f}(\xi) = \chi_{[-B, B]}(\xi) \sum_{n = -\infty}^\infty \hat{f}(\xi + n/2B) 
\\]
The Poisson summation formula then gives
\\[
\hat{f}(\xi) =  \sum_{n = -\infty}^\infty 	\frac{1}{2B} \chi_{[-B, B]}(\xi) e^{-2\pi i n \xi/2B} f(n/2B).
\\]
To recover $f$ by taking the inverse Fourier transform, first recall that
\\[
\frac{1}{2B} \chi_{[-B, B]}(\xi) e^{-2\pi i n \xi/2B} \to \sinc(2B(x - n / 2B))
\\]
Then we can obtain the formula in Shannon's theorem
\\[
f(x) = \sum_{n = -\infty}^\infty f(n/2B) \sinc(2B(x - n/2B)).
\\]

### In the Periodic Domain and with the DFT
A similar theorem holds in $L^2(S^1)$ where you include $L^2(S^1)$ via a characteristic function. You must sample strictly greater than $B$ however (not sure why).

As an example, consider the signal $\sin(x)$.

```matlab
x = fourier_linspace(0, 2*pi, 100);
plot(x, sin(x))
```

How many samples do we need to represent this signal accurately in Fourier space? The Nyquist frequency is clearly $B = 1$ since the Fourier coefficients of $\sin(x)$ are 
```matlab
[i/2 0 -i/2]
```

Then we sample at frequency $2B + 1 = 3$. Or, three grid points spaced $1/3 (2 \pi)$ apart.
```matlab
x = fourier_linspace(0, 2*pi, 3);
sampled = sin(x)
sin_hat = fft(sampled)/3
```
The frequencies are correct and we could accurately recreate $\sin x$ from its Fourier series.

From the DFT perspective, we can see that we obtain the same values that we started with (i.e. check _sampled_ and _sin\_phys_. 
```matlab
sin_phys = ifft(sin_hat * 3)
y = linspace(0, 2*pi, 200);
plot(x, sin_phys, y, sin(y))
```

## The Problem of Aliasing 
What happens when we sample at a lower frequency than the Nyquist frequency?

In the case of $\sin(x)$ with need grid points spaced $1/3$ apart. If we choose to sample with the smaller spacing of $1/2$, we cannot distinguish sin(x) from zero since $\sin(0) = \sin(\pi) = 0$.

This is aliasing: our sample rate is so low that we can't discern between signals with higher frequencies.

Aliasing occurs in many systems and here are some examples.

#### Wagon wheel
[Under-sampling of wagon wheel](https://i.kinja-img.com/gawker-media/image/upload/s--8cZsVAfH--/c_fit,fl_progressive,q_80,w_636/776695203174843714.gif)

#### Moire Pattern
![Under-sampling a complicated tile pattern](http://static.photo.net/attachments/bboard/00W/00W8gC-233703684.jpg)

[Original page](http://photo.net/digital-darkroom-forum/00W8gC)
#### Lines on computer screen
![Undersampled dotted line](http://i.stack.imgur.com/pA7uy.png)

[Original source](http://blender.stackexchange.com/questions/18531/can-the-3d-viewport-be-set-to-draw-smooth-anti-aliased-wireframe).

### Why is aliasing a problem for our solver?
In the case of DFT, we can pick the proper sampling rate based on our initial data to our PDE. For example, if our initial data is sin(x) then our Nyquist frequency would be N = 1. But this sampling rate won't always work as the solution evolves. Why?

The convolution, as in the previous article, is the problem
$$
\hat{u}_t = -\hat{u}m * (i m \; \hat{u}_m)
$$
can produce signals with frequencies above the initial Nyquist frequency.


As a toy example, imagine that we take only three samples.

What happens when we try to represent
$$
\sin^2 \theta = \frac{1}{2} - \frac{1}{2} \cos(2 \theta)
$$
In Fourier space this is equivalent to convolving
```matlab
[i/2 0 -i/2]
```
or multiplying the polynomials
$$
\begin{aligned}
P(z)^2 &= (\frac{i}{2} z^{-1} + \frac{-i}{2} z^1)^2 \cr 
&= z^{-2}(\frac{i}{2} - \frac{i}{2} z^2)^2  \cr
&= -\frac{z^{-2}}{4}(1 - 2z^2 + z^4) \cr
&= \frac{-z^{-2}}{2} + \frac{1}{2}  +\frac{-z^{2}}{2} 
\end{aligned}
$$

But when replace $z$ by its discretization (a primitive third root of unity) then we have a problem since
$$
-\frac{\xi^{-2}}{2} + \frac{1}{2} + \frac{-\xi^2}{2} = \frac{-\xi}{2} + \frac{1}{2} + -\frac{\xi^{-1}}{2} = -\frac{\xi^{-1}}{2} + \frac{1}{2}  + \frac{-\xi}{2}
$$
So the Fourier coefficients are

```matlab
[-1/2 1/2 -1/2]
```
which gives
$$
\frac{1 - \cos(u)}{2}.
$$
(insert plot)

This **wrong** since the real coefficients are
```matlab
[-1/2 0 1/2 0 -1/2]
```
which leads to
$$
\sin \theta = \frac{1}{2}- \frac{1}{2} \cos(2 \theta)
$$


Graphically, you can see the problem by running the following code

```matlab
x = fourier_linspace(0, 2*pi, 200);
plot(x, sin(x) .^ 2, x, 1/2 - cos(x)/2);
```
Notice that the two functions are identical at $0, 2/3 \pi, 4/3\pi$. So if we take only three sample points spaced $1/3 \pi$ apart then we can't distinguish between these two signals. We call $\cos(\theta)/2$ an aliasing and we want to remove it.

## How to de-alias
In general, aliasing comes from subsampling a signal.

It is a fact that for a signal $f \in L^1$ the closest signal (in the $L^2$ sense) band-limited to $[-B, B]$ and passing through the grid points is given by $\chi_{[-B, B]} \hat{f}$. This is called "low pass" filtering (we let all the low frequencies through, but zero the high frequencies)

Concretely, we can achieve this as follows

1. Expand the grid and pad with zeros (apply low pass filter)
2. Do the convolution
3. Truncate the grid to the original size

This technique is often called the $3/2$ rule since we need to expand the grid by a factor of $3/2$.

From above, we know that we have aliasing when we convolve $\sin(x)$ with itself in Fourier space. Let's eliminate this problem. Note that the aliasing $\cos(x)/2$ disappears, as desired.
```matlab
low_pass_filter = zeros(1, 3*3 + 1);

% I'm putting the frequencies in Matlab's strange order
low_pass_filter(1:2) = [0 -i/2];
low_pass_filter(end) = i/2;
convolved = fft(ifft(low_pass_filter) .* ifft(low_pass_filter))
truncated = [convolved(1:2) convolved(end)]

% now we can plot them 
plot_fourier_modes(100, truncated);
hold on;
plot(x, 1/2 - cos(x)/2);
```



##An iteresting side note

Around 18, all humans experience a condition called presbycusis where we lose our ability to detect sounds above 15 KHz [3]. In this sense, we can't distinguish high frequency sounds from complete silence. Equivalently, we can't distinguish sin(nx) and 0.

Somehow, we learn to become more efficient and under sample (apparently the delicate hairs that detect high frequencies just die earlier). Of course, we experience aliasing, but the lost information doesn't impact our daily lives.

## Putting it all together
We have discussed the following over the past two posts:
1. Discrete Fourier Transform to transform Burger's equation into Fourier space
2. Fast Fourier Transform to compute convolutions quickly.
3. Anti-aliasing to remove high frequencies that pollute lower frequencies.

The following snippet uses my package of Matlab scripts available on [GitHub](https://github.com/samstewart/matlab-spectral-method) to solve Burger's equation with initial data sin(x) (note the frequencies [0 -i/2]).

```matlab
% choose nice values of K to make N = 3*K + 1 a good 2-power
K = 341;
N = 2*K + 1;

% make an initial data from a sin wave
initial_data = fill_fourier_spectrum(K, [0 -i/2]);

% save the initial data to a file
save('initial_data.mat', 'initial_data');

% run the solver (an interactive window will appear)
run_main_experiment('initial_data.mat')
```

## References
1. Lerman, Gilad. The Shannon Sampling Theorem and Its Implications. _Course Notes_. Available at http://www.math.umn.edu/~lerman/math5467/shannon_aliasing.pdf.
2. SIAM Book on Fourier Analysis. Available at https://www.siam.org/books/ot102/OT102Chpt8.pdf.
3. US Department of Health and Human Services. https://www.nidcd.nih.gov/health/age-related-hearing-loss
