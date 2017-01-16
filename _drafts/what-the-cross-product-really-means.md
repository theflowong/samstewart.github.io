---
layout: post
date: 2016-11-02 16:24
categories: harmonic-analysis analysis homework
---

\newcommand{FT}[1]{{\mathcal{F}\left( #1 \right) }}

If a linear operator $T : L^2 \to L^2$ commutes with translations, then we know two facts. First, since the Fourier transform diagonalizes translations, we have that $\hat{Tf}$ acts via multiplication (in the distributional sense) in Fourier space. Moreover, one can prove that since $T$ maps $L^2$ to $L^2$, in fact $\hat{Tf} = \hat{\omega} \hat{f}$ where $\hat{\omega} \in L^\infty(\R^n)$.

The adding constraint of dilation and reflection will restrict $\hat{omega}$ to $-i \, C \, \textrm{sgn } \xi$ (i.e. a constant multiple of the Hilbert transform). First, note the following two facts about the Fourier transform (we use the $\FT{ \cdot }$ notation to avoid confusion for this next section)
1. $\FT{f(-x)} = -\FT{f}(-\xi)$
2. $\FT{f( x / c)} = c \FT{f}(c \xi)$

The reflection constraint gives the following
\[
	\begin{aligned}
		\FT{T(f(-x))} &= \FT{\omega}(\xi) \FT{f(-x)} \cr
			      &= -\FT{\omega}(\xi)  \FT{f}(-\xi}
	\end{aligned}
\]
On the other hand, since $T(f(-x)) = - (Tf)(-x)$ we have
\[
	\FT{T(f(-x))} &= -\FT{(Tf)(-x)} \cr
		      &= \FT{\omega}(-\xi) \FT{f}(-\xi}.
\]
Combining these two derivatives gives
\[
	-\FT{\omega}(\xi) \FT{f}(-\xi) = \FT{\omega}(-\xi) \FT{f}(-\xi)
\]
Taking $\FT{f}$ to be a non-vanishing function (e.g. the Schwartz function $e^{-\pi \xi^2}$) allows us to cancel $\FT{f}$ from both sides giving
\[
	\FT{\omega}(\xi) + \FT{\omega}(-\xi) = 0.
\]

If we add the constraint that $\FT{\omega}(\xi)$ is constant on $\R^+$ and $\R^-$, we can conclude that $\FT{\omega}(\xi) = C \textrm{sgn }(\xi)$. This second constraint comes from the dilation relation. Then we have
\[
	\begin{aligned}
		\FT{T(f(x/c))} &= \FT{\omega}(\xi) c \FT{f}(c \xi) \cr
			       &= c \FT{\omega}(\xi) \FT{f}(c \xi)
	\end{aligned}
\]
and
\[
	\begin{aligned}
		\FT{(Tf)(x/c)} &= c \FT{Tf}(c \xi) \cr
			       &= c \FT{\omega}(c \xi) \FT{f}(c \xi).
\]
Since
\[
	\FT{T(f(x/c))} = \FT{(Tf)(x/c)},
\]
then again with the right choice of $\FT{f}(c \xi)$
\[
	\FT{\omega}(\xi) = \FT{\omega}(c \xi).
\]
Since $c > 0$, this implies that $\FT{\omega}$ is constant on $\R^+$ and $\R^-$. The two conditions we have derived,
1. $\FT{\omega}(\xi) + \FT{\omega}(-\xi) = 0$
2. $\FT{\omega}(\xi) = \FT{\omega}(c \xi)$
show that
\[
	\FT{\omega}(\xi) = C \textrm{sgn }(\xi) = C \FT{H}.
\]

