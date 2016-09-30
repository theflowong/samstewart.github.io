---
layout: post
date: 2016-09-30 10:50
categories: physics homework harmonic analysis
---

Imagine that $v(t)$ is the velocity of some particle on $\R$ with mass $1$ such that the particle is at rest at the beginning of time. That is,
\\[
	\lim_{t \to -\infy} v(t) = 0
\\]

Can we bound the kinetic energy of the particle in terms of the size of the velocity and acceleration fields? The answer is yes, and we will obtain the following bound
\\[
	\nom{v}_{L^\infty}^2 \leq 2 \norm{v}_{L^p} \norm{a}_{L^q}
\\]
where $a = v'$ is the acceleration.

Newton's second law tells us that
\\[
	F \cdot v = v \cdot a.
\\]

The left-hand side is the definition of instanenous power, so the line integral from the beginning of time to $t$ is the work done on the particle. This is given by
\\[
	\int_{-\infty}^t F \cdot v dt = \int_{-\infty}^t F dv = \int_{-\infty}^t v \cdot a.
\\]

The instantaneous change in kinetic energy is given by 
\\[
	K' = \frac{1}{2} \frac{d}{dt} v^2 = v \cdot a
\\]

so
\\[
	W(t) = \int_{-\infty}^t v \cdot a = \int_{-\infty}^t K' dt = K(t) - \lim_{t \to -\infty} K(t).
\\]

That is, the work done on the particle is equal to the net change of kinetic energy since the beginning of time. But we know the particle started with zero kinetic energy, so
\\[
	W(t) = K(t)
\\]

But we can obtain a bound on the work integral using the [Holder inequality](what-does-the-holder-inequality-say). We have
\\[
	\abs{K(t)} = \abs{W(t)} \leq \int_{-infty}^t \abs{v}\abs{a} dt \leq \norm{v}_{L^p} \norm{a}_{L^p}
\\]
Hence the kinetic energy is bounded by the size of the velocity and acceleration for all time
\\[
	\norm{K(t)}_{L^\infty} \leq \norm{v}_{L^p} \norm{a}_{L^p}.
\\]

## Homework for Harmonic Analysis Class
Note: for my harmonic analysis class I was asked to prove that if $f \in \mathcal{S}(\R)$ then
\\[
	\norm{f}_{L^\infty} \leq 2 \norm{f}_{L^p} \norm{f'}_{L^p}	
\\]
To see this, let $v = f$ in our above discussion. Then since
\\[
	K = \frac{1}{2} v^2
\\]
the result follows.
