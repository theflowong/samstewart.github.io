1. $$
   	\newcommand{\runningtime}[1]{\mathcal{O}\left( {#1} \right)}
   	\newcommand{\ft}[1]{\mathcal{F}\left( {#1} \right)}
   	\newcommand{\ift}[1]{\mathcal{F}^{-1}\left( {#1} \right)}
   $$
   ​

   Suppose we wish to solve Burger's equation
   $$
   u_t + u u_x = 0
   $$
   on the circle with analytic initial data. What numerical method should we use? The periodicity of the domain and analyticity of the initial data suggest a *spectral method* would be a good fit.

   ​

   In this series of two posts, I will discuss the theory and implementation of a spectral method in Matlab. In this first article, we will

   1. Define a spectral method and give an example.
   2. Describe how the Discrete Fourier Transform allows us to transform our problem into Fourier space.
   3. Use the Fast Fourier Transform to quickly compute the necessary convolutions.

   ### What is a spectral method?

   Quite simply, we call a method spectral when the **approximation error decays exponentially**. Of course, error is a vague term, but for our purposes we measure error under the $L^2(S^1)$ norm.

   The most common spectral method uses trigonometric polynomials. That is, if $f$ is an analytic function on $S^1$, then we try to approximate $f$ via a polynomial $P(z)$ in $z = e^{2\pi \theta}$ given by
   $$
   P(z) = a_{-k} z^{-k} + \cdots + a_k z^k.
   $$
   More precisely, if we identitify $S^1$ with $[-1, 1]$ then we wish to find an interpolating trigonometric polynomial $P(z)$ such that
   $$
   P\left( \frac{k}{N} \right) = f\left( \frac{k}{N} \right)
   $$
   for $N = 2K + 1$ and $k \in \{ -K, \ldots, K \}$. In other words, we want a trigonometric polynomial that agrees with $f$ on equallity spaced sample points on the circle. 

   This approximation is spectral because one can show [1] that 
   $$
   \left| P - f \right|_{L^2} \leq e^{-\omega N}.
   $$
   This result is intuitiviely reasonable since if $f$ is analytic, then its higher Fourier frequencies decay exponentially: most of the data lies in the low modes which $P$ captures.

   ### How does this help us solve Burger's equation?
   **Converting Burger's Equation to Frequency Space**

   If we expand an analytic function $u$ in a Fourier series, then Burger's equation
   $$
   u_t = -u \, u_x
   $$
   becomes 

2. $$
   \frac{d\hat{u}_k}{dt} = - (\hat{u} * (i m \; \hat{u}))_k
   $$

   because multiplication becomes convolution, and differentiation becomes multiplication.

   **Solving Burgers with the spectral method**

   Approximating an analytic function $u$ by trigonometric polynomials is the same as expanding $u$ in a Fourier series and **truncating** the modes to those in the range $[-K, K]$. Hence, the theory from Fourier *series* holds for the theory of trigonometric polynomials. This enables us to solve Burger's equation in frequency space by restricting $k$ to $[-K, K]$, giving us a coupled system of ordinary differential equations (one mode for each frequency $\hat{u}_k$).

   ​

   ### The Discrete Fourier Transform

   For a function $f \in C^\infty(S^1)$ which we have sampled at $N = 2K + 1$ points, how do we represent it in the finite dimensional Fourier space? We can't simply "truncate the Fourier series" since we don't have enough information to compute the entire series.

   The Discrete Fourier Transform. 

   Mathematically, two perspectives:

   1. Polynomial interpolation
      Draw picture of sampling on a circle.

   ​
   with $j = -K, \ldots, K$ and $z = e^{2\pi i \theta}$.

   This constraint gives a linear system in $\mathbb{C}$ given by
   $$
   \begin{bmatrix}
   1 & 1 & \cdots & 1 \cr
   \xi^{-K} & \xi^{-(K - 1)} & \cdots & \xi^{K} \cr
   \vdots & \vdots & \vdots &\vdots \cr
   \xi^{-K N} & \xi^{-N(K - 1)} & \cdots &\xi^{K N}
   \end{bmatrix}
   \begin{bmatrix}
   \hat{f}(-K) \cr
   \vdots \cr
   \vdots \cr
   \hat{f}(K)
   \end{bmatrix}
      =
    \begin{bmatrix}
      f(-1) \cr
      f(-(K - 1)/K) \cr
      \vdots \cr
      f(1)
    \end{bmatrix}
   $$
   where $\xi = e^{2\pi/N}$ is a primitive $n$th root of unity. To solve this system, we must invert this matrix.

   Properties of the roots of unity tell us that the above matrix (call it $F$) is almost unitary
   $$
   F^{-1} = \frac{1}{N} F^*.
   $$
   This means that
   $$
   a_k = \hat{f}(k) = \frac{1}{N} \sum_{k=-K}^K f \left( \frac{k}{N} \right) \xi^k.
   $$
   To represent a function at $N$ sample points, we need $N$ basis functions. This method of interpolation is often called collocation. 


   2. Generalized Fourier transform on a group.
      One can generalize the Fourier transform to any locally compact Abelian group. For our purposes, our group is $G = Z / N Z$. You can trace through the whole theory and find the same perspective as polynomial interpolation. 

   ## DFT in Matlab
   So how is the DFT implemented in Matlab? Not terribly well documented so I had to discover this myself.
   1. fft( ) is the function. But the output is in a strange order given by
      $$
      [ \hat{f}(0) \cdots \hat{f}(k) \; \hat{f}(-k) \cdots \hat{f}(-1) ]
      $$

   2. The coefficients are stored without normalization. So every coefficient has a factor of $N$ in front of it. The normalization occurs when you computer ifft( ). Need to be careful when dealing with grid changes.

   3. Matlab uses $e^{-2 \pi k / N \theta}$ as the basis functions. 

   An example computation:

   Computing Fourier representation of $\sin$
   ```matlab
   K = 1;
   N = 2*K + 1;
   x = fourier_linspace(0, 2*pi, N); % we have to handle the strange scaling of linspace
   fft(sin(x)) / N
   ```
   This gives
   ```matlab
   0.0000 + 0.0000i  -0.0000 - 0.5000i  -0.0000 + 0.5000i
   ```
   which is correct since
   $$
   \sin 2 \pi \theta = \frac{e^{-2\pi i \theta}}{2i} - \frac{e^{2\pi i \theta}}{2i}
   $$
   so the coefficients should be
   ```matlab
   [1/2i 0 -1/2i]
   ```
   We can also recover $\sin$ from its frequencies
   ```matlab
   plot_fourier_modes(341, [0 -i/2]);
   ```

   Some nice tricks:
   1. The functions are real valued so we immediately have $\hat{f}_{-k} = \overline{\hat{f}}_{k}$ so we need only store half of the coefficients (though unfortunately the convolution requires that we totally reconstruct the signal).

   ## Problem of Convolution
   We’ve converted to Fourier space. Now we have
   $$
   \hat{u}_k = -(\hat{u} * (i m \; \hat{u}))_k
   $$
   Differentiation is better. But convolution is nastier. How can we improve this?

   Convolution takes $\runningtime{N^2}$ operations. That's too slow. Are we stuck?

   #### Fast Fourier Transform to the Rescue
   The FFT allows us to compute the DFT in $\mathcal{O}(N \ln N)$ instead of $\mathcal{O}(N^2)$ for regular matrix multiplication. This allows us to compute convolutions faster than $\mathcal{O}(N^2)$ via the following trick.

   The clever trick to compute the convolution $\ft{f} * \ft{g}$:
   1. Inverse DFT to physical space. So $\ift{\ft{f} * \ft{g}} = f \cdot g$. Costs $\runningtime{N \ln N}$.
   2. Compute the product pointwise on the sample points. Costs $\runningtime{N}$.
   3. DFT back to Fourier space. So $\ft{f \cdot g} = \ft{f} * \ft{g}$. Costs $\runningtime{N \ln N}$.

   Total cost is: $\runningtime{N \ln N}$.

   Matlab example. Let's convolve the representation for $\sin$:
   ```matlab
   K = 341;
   N = 2*K + 1;
   sin_hat = full_fourier_spectrum(K, [0 -i/2]);
   sin_phy = ifft(sin_hat);
   convolved = sin_phy .^ 2;
   plot(fourier_linspace(0, 2*pi, N), convolved);
   convolved_hat = fft(convolved); 
   ```

   Recall that
   $$
   \sin^2(\theta) = \frac{1 - \cos(2 \theta)}{2}
   $$
   so the coefficients should be
   ```matlab
   [-.25 .5 -.25]
   ```
   Powers of two work really well.

   ### ## Conclusion

   ## References

   1. Iserles, Arieh. *A first course in the numerical analysis of differential equations.* No. 44. Cambridge University Press, 2009.
