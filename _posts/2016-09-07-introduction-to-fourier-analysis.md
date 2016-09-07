---
layout: posts
date: 2016-09-07 17:54
categories: harmonic-analysis course-notes
---

Fourier analysis decomposes complicated signals into simple signals.

Joseph Fourier stumbled upon this idea while trying to solve the heat equation via separation of variables. Bernoulli did the same while trying to solve the wave equation. Both equations are linear, so they reduce to eigenvalue problems.

The countable index of the Fourier basis comes from the periodicity (boundary conditions). Since the signal is periodic, it requires far fewer basis signals. Contrast this with the Fourier transform on the real line. How can we see this from the spectral theorem?

Wavelets are like Fourier frequencies but are more localized in space.

The inner-product determines the amount of a given frequency in a signal, but does not tell you where that frequency is spatially located. Periodic functions are global, but we would like something more local. Unfortunately, the uncertainty principle tells us that we can never construct a basis perfectly localized in frequency and physical space.

Notice that regardless of how we write the decomposition into Fourier modes, we always need two pieces of information.

The Fourier modes tell you how much and when, but not where. 
