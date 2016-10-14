---
layout: post
categories: tutorials numerical-analysis talks
date: 2016-10-04 17:09
---

$$
\newcommand{\runningtime}[1]{\mathcal{O}(#1)}
$$
## Abstract
In many scenarios (like fluid dynamics), one reduces a problem by adding the constraint of periodicity. This constraint leads to so-called "spectral methods,"  numerical schemes with exponential rates of convergence. The idea is simple: reduce the PDE to an infinite dimensional ODE in Fourier space and then solve the ODE using standard techniques.  In practice, the process is more difficult when we use a finite dimensional approximation. In  these two talks, I will discuss the theory and implementation of a basic spectral method for Burgers equation in Matlab. The first lecture will cover the  general theory and approach (with Matlab examples), while the second lectuer will discuss an issue specific to spectral methods: de-aliasing. After my two presentations, you will have learned the "why and how" of spectral methods in Matlab. 

## The Big Picture
Numerical spectral methods use Fourier series to convert a PDE into an ODE in Fourier space. Take, for example, Burger's equation, the friend of any fluid dynamicist
\\[
	u_t = -u \cdot u_x
\\]
on $S^1$. That is, the solutions are periodic. We know that we can obtain an analytic solution by reducing it to an ODE along characteristics. For analytic initial data $u_0$ we have the implicit formula
\\[
	u(x,t) = u_0(t u(x,t) + x)
\\]
where the initial data propegates along the characteristics given by $t = x / u_0(x')$ for fixed $x'$. 

(picture of characteristics)

For constant initial data, this means we have simple transport. But for initial data that changes sign, the characteristics will intersect.

(example of piecewise linear that squeezes together)

(can we do a 3D picture)

We can use this solution to check our numerical results.

Can we solve this quasilinear PDE numerically? Expressing $u$ in the Fourier series gives 
\\[
	\hat{u}_t = -\hat{u} * (i k \hat{u}).
\\]
where we used the fact that multiplication becomes convolution in Fourier space. This is now an infinite system of ODEs for $\hat{u}$ (this is the same idea as applying the method of characteristics). How can we solve this numerically?

Of course, computers can only deal with finite dimensions, so we must "project" this problem to a finite dimensional space. This space is simply the linear span of
\[
	M_N = \text{span } ( z^n \text{ for } n = -N, \ldots, N ).
\]
where $z = e^{-2\pi \theta}$. In Fourier space, $M_N$ represents the first $N$ Fourier modes.

Since we know by the fact that $z^n$ forms a basis that
\\[
	\bigcup_N M_N = L^2(S^1), 
\\]
the hope is that solving the ODE on $M_N$ leads to a solution on $L^2(S^1)$ as $N \to \infty$. 

In general, this technique is called a Galerkin method and is useful both numerically and theoretically (for example when establishing existence theorems in fluid dynamics).

Theoretical justification of projection.

# Discrete Fourier Transform
There are multiple ways to view the Discrete Fourier Transform, but the most intuitive (for me) is to relate it to Fourier series on $S^1$. 

Given this basis, how many sample points in physical space do we need to recreate accurately the solution in Fourier space?

The Shannon Sampling Theorem answers this question.

Or we can view it as more generalized Fourier transform. we are doing Fourier transform of Abelian group (here $\Z_n$)

The initial difficulty with Matlab is understanding how it stores coefficients. Matlab uses the basis functions
\\[
	(figure out the basis functions by differentiating)	
\\]

The trouble with Matlab is the strange ordering of Fourier coefficients. For set of sample points $f_i$ with $i = 0, \ldots, N$, the DFT will be
\\[
	N \cdot [\hat{f}_0 \, \cdots \, \hat{f}_N \, \hat{f}_{-N} \, \cdots \, \hat{f}_{-1}]
\\]
Strange, right? 

# Convergence
Why do we call it a spectral method? If we assume that the function is analytic, then we know that the error is $\runningtime{e^{-c \, N}}$ for some $c$ [1]. Intuitively, this is because the Fourier coefficients of analytic functions decay exponentially. This is a vast improvement over finite difference methods where we usually have second order convergence. 

Unfortunately, this rapid convergence comes from the periodicity and analyticity assumptions. For Burgers equation, this renders the method rather naive since the solutions clearly display shock singularities and lose regularity. However, the nonlinear $-u u_x$ term makes it a good example for computing convolutions.

# Handling Nonlinearities
In Fourier coordinates, the differentiation operator acts via multiplication, which is simply. There is a catch of course. Multiplication in physical space becomes convolution in Fourier space. Thus, Fourier coordinates renders linear PDEs trivial, but quasilinear PDEs lead to convolutions. Using our Burgers equation example, we have the nonlinearity $u \cdot u_x$. In Fourier space this becomes $\hat{u} * (i k \hat{u})$. 

In general, convolution is an expensive operation with $\runningtime{N^2}$ running time. So it appears that we've hit a roadblock. The Fourier coordinates make differentiation trivial, but multiplication painful. 

Fortunately, in ???? two computer scientists discovered how to reduce the running time from $\runningtime{N^2}$ to $\runningtime{N \ln N}$ using the Fast Fourier Transform (FFT). Computing convolutions of two signals $\hat{f}, \hat{g}$ then becomes possible via the following trick. 

1. Take the Fourier transform of $\hat{f} * \hat{g}$ so that it becomes $f \cdot g$ in physical space (worst case $\runningtime{N \ln N}).
2. Compute the pointwise product $f \cdot g$ for every point (worst case $\runningtime{N}$
3. Convert $f \cdot g$ back into Fourier coordinates to recover $\hat{f} * \hat{g}$.  (worst case $\runningtime{N \ln N})

The whole operation is now $\runningtime{N \ln N}$ which is much better than $\runningtime{N^2}$.

The FFT has hundreds of other applications (and is possibly the most important algorithm in existence), but fast convolution (or fast polynomial multiplication), is the relevant application for our purposes.

Let's compute an example. We'll convolve the following two polynomials.

# Fast Fourier Transform
Why it is $\runningtime{n \ln n}$.

# Problem of Aliasing
Imagine we have only two sample points. Then we can't tell the difference between $\sin(x)$ and $\sin(2x)$

(diagram showing the problem)

because they are identical at the sample points. This is called aliasing. In this example, $\sin(2x)$ is an alias for $\sin(x)$.

This phenomenon occurs in many other areas. For example, the following video appears to show the wagon wheels moving *backward*

(video of wagon wheels moving backward)

The problem is that the framerate is too low to differentiate between the wheel moving forward or backwards.

Here's an image of a detailed mesh pattern that also displays aliasing. 

(image of mesh pattern)

The photo resolution is too low and generates an overly simplified version of the real object (seen here in the banding).

Finally, all computer graphics programs "anti-alias" lines to render them smoothly

(image of aliased and anti-aliased line)

The problem is that the computer monitor does not have enough resolution to accurately display the line. This same problem appears when computing convolutions. Consider a grid with three sample points. Then it can discern $\sin(x)$ from $\cos(x)$. But it can't discern
\\[
	\sin^2 u = \frac{1}{2} - \frac{1}{2} \cos(2 u)
\\]
from $1/2 - \cos(u)$ because the grid doesn't have enough resolution to represent $\cos(2u)$. 

(picture with sample points and two problems)

The problem is that convolution increases the frequency ranges. Viewing it from the polynomial perspective, on a grid with $N$ positive frequencies, then
\\[
	z^1 z^{N} = z^{N + 1} = z^{-N}
\\]
In other words, by the periodicity of the basis functions, the multiplication acts like a cyclic group. If we multiply polynomials with exponents that are too large, the product will "wrap" to lower frequencies. This is aliasing and we want to prevent this.

# Preventing Aliasing
The solution is to expand the grid resolution temporarily, perform the convolution, then truncate down to the original grid size.

Q: is this the same as truncating the higher frequencies?

# Matlab implementation

1. Representation
2. Fourier transform and strange storage order
3. Convolution
