---
layout: post
date: 2016-11-29 16:23
categories: math linear-algebra dynamical-systems
---
From [Jordan canonical form](https://en.wikipedia.org/wiki/Jordan_normal_form) we know that every real matrix $A$ can be block diagonalized. But those blocks can have complex values on the diagonal. Fortunately, there is a natural basis where $A$ is block diagonal *and* real. This representation of the linear operator is called the **real canonical form**.

Why should such a convenient basis exist? The answer is simple and lies in complex conjugation.

## Complex Conjugation
As a simple example, consider the matrix
\\[
	A = 
	\begin{bmatrix}
		0 & -1 \cr
		1 & 0
	\end{bmatrix}
\\]
We can compute eigenvalues and eigenvectors
\\[
	\lambda_1 = i, 
	\quad \lambda_2 = -i, 
	\quad v_1 = \begin{bmatrix} i \cr 1 \end{bmatrix},
	\quad v_2 = \begin{bmatrix} -i \cr 1 \end{bmatrix}
\\]
and diagonalize the matrix $A$ by writing it with respect to this basis as
\\[
	\begin{bmatrix}
		A v_1 & A v_2
	\end{bmatrix}
	=
	\begin{bmatrix}
		i & 0 \cr
		0 & -i
	\end{bmatrix}
\\]
(you could also multiply $A$ by the matrix whose columns are $v_1, v_2$). This is the Jordan canonical form with complex entries and we want to choose a basis so that $A$ becomes real.

We can use the eigenvectors to find such a basis. First, decompose $v_1, v_2$ into their real and imaginary parts as
\\[
	v_1 = \begin{bmatrix}
	0 \cr
	1
	\end{bmatrix} + 
	\begin{bmatrix}
	1 \cr
	0
	\end{bmatrix} i
	= a_1 + i b_1, \quad
	\begin{bmatrix}
	0 \cr
	1
	\end{bmatrix} + 
	\begin{bmatrix}
	-1 \cr
	0
	\end{bmatrix} i
	= a_2 + i b_2
\\]
Then choose a the basis $a_1, b_1$ or $a_2, b_2$. In the basis $a_1, b_1$, our operator $A$ acts as
\\[
	\begin{bmatrix}
		A a_1 & A b_1
	\end{bmatrix}
	=
	\begin{bmatrix}
		0 & 1 \cr
		-1 & 0
	\end{bmatrix}.
\\]

This is the **real canonical form**.

## Why do we have a real canonical form?
The answer is simple. Notice in the above example that $v_2 = \overline{v_1}$ and $\lambda_2 = \overline{\lambda_1}$; the eigenvectors and eigenvalues are related by conjugation. The existence of the basis for the real canonical form is a result of the fact that if we have a basis $v_1 = a_1 + b_1 i, v_2 = a_1 - b_1 i$ (not necessarily eigenvectors) such that $v_1$ and $v_2$ are conjugate, then $a_1, b_1$ or $a_1, -b_1$ are also bases.

This is because the two pairs of are related via an invertible transformation given by
\\[
	a_1 = \frac{v_1 + v_2}{2}, \quad b_1 = \frac{v_1 - v_2}{2i}.
\\]

If $v_1, v_2$ form a basis, then necessarily $a_1, b_1$ form a basis (and likewise for $a_1, -b_1$). Since $a_1, b_1$ are real, then
\\[
	\begin{bmatrix}
		A a_1 & A b_1
	\end{bmatrix}
\\]
will be a real matrix in this basis (assuming $A$ is real).

## Real Canonical Form for Jordan Form
In the case of the Jordan canonical form, we have the additional property that $v_1, v_2$ are eigenvectors with eigenvalues $\lambda_1, \lambda_2$. Hence, if $\lambda_1 = c_1 + d_1 i, \lambda_2 = c_1 - d_1 i$ then our Jordan block will be
\\[
	\begin{bmatrix}
		c_1 + d_1 i & 0 \cr
		0 & c_1 - d_1 i
	\end{bmatrix}
\\]
with respect to the basis $v_1 = a_1 + b_1 i, v_2 = a_1 - b_1 i$. To obtain the real canonical form, we wish to find $A$ with respect to this basis. That is, we wish to compute
\\[
	\begin{bmatrix}
		A a_1 & A b_1
	\end{bmatrix}
\\]

But we have that
\\[
	\begin{aligned}
		A a_1 &= \textrm{Re}(A v_1) \cr
			  &= \frac{A v_1 - \overline{A v_1}}{2} \cr
			  &= \frac{\lambda_1 v_1 - A \overline{v_1}}{2} \cr
			  &= \frac{\lambda_1 v_1 - \overline{\lambda_1} \overline{v_1}}{2} \cr
			  &= \textrm{Re}(\lambda_1 v_1)
	\end{aligned}
\\]
and likewise
\\[
	A b_1 = \textrm{Im}{\lambda_1 v_1}.
\\]

Performing the complex multiplication gives that
\\[
	A a_1 = \begin{bmatrix}
		\textrm{Re}(\lambda_1) \cr
		-\textrm{Im}(\lambda_1)
	\end{bmatrix}, \quad
	A b_1 = 
	\begin{bmatrix}
		\textrm{Im}(\lambda_1) \cr
		\textrm{Re}{\lambda_1}
	\end{bmatrix}
\\]
so that our final form is
\\[
	A = \begin{bmatrix}
			\textrm{Re}(\lambda_1) & \textrm{Im}(\lambda_1)  \cr
			-\textrm{Im}(\lambda_1) & \textrm{Re}(\lambda_1).
		\end{bmatrix}
\\]

## Our original example
In our original example, we have
\\[
	\textrm{Re}(\lambda_1) = 0, \quad \textrm{Im}(\lambda_1) = 1
\\]
so as we computed above, our real canonical form is
\\[
	A = \begin{bmatrix}
		0 & 1 \cr
		-1 & 0
		\end{bmatrix}.
\\]

## In General
We have handled the case of two-by-two blocks, which one can generalize to larger blocks by simply re-arranging the columns so that conjugate eigenvalues are adjacent, and then converting each two-by-two block using the process above.

The main result is that *a basis with conjugate vectors has a parallel **real** basis*. The special form we derived in the last section is *particular* to the Jordan canonical form.
