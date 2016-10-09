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
on $S^1$. That is, the solutions are periodic. We know that we can obtain an analytic solution by reducing it to an ODE along characteristics. For initial data $u_0 \in L^2(S^1)$ we have
\\[
	u(x,t) = u_0(t u_0(x))
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
There are multiple ways to view the Discrete Fourier Transfrom, but the most intuitive (for me) is to relate it to Fourier series on $S^1$. 

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
Why do we call it the spectral method? As we refine the grid size (or increase $N$), the approximate solution converges to the real solution exponentially fast. That is,
\\[
	\norm{f_N - f}_{L^2} \leq C e^{-N}
\\]

This is essentially due to the fact that analytic functions have exponential decay of Fourier coefficients.

This is a vast improvement over finite difference methods where we usually have second order convergence. That is
\\[
	\norm{f_N - f}_{L^2} \leq \frac{1}{N^2}.
\\]

Why is the convergence exponential?

# Stability

# Consistency

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
Aliasing is a 

Examples:
Wagon wheels
Patterns in film
Smooth lines on a computer screen

# Parity of Coefficient Indexing
When to set the higher coefficients to zero

# Matlab implementation

1. Representation
2. Fourier transform and strange storage order
3. Convolution
