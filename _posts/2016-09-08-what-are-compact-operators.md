---
layout: post
date: 2016-09-08 16:03
categories: spectral-theory linear-algebra definitions
---

Compact operators are intuitively infinite dimensional matrices. More precisely, <span class="proof_expand">every compact operator is a limit of matrices</span>, or final dimensional operators.

Equivalently, from a geometric perspective, all compact operators take the unit ball to a pre-compact set. Why not to a compact set? 

The trivial examples of compact operators are matrices, and a <span class="proof_expand">non-trivial example</span> is $$\ell^2$ with the operator
\\[
	T a_n = \frac{1}{n} a_n.
\\]

Ex: projection operator

You can picture this operator as an infinity identity matrix with $$1/n$$ on the diagonal. 

The operator $$Tf = xf$$ on $$L^2([0, 1])$$ is self-adjoint but not compact

We know that dimension and compactness are the [same thing](unit-ball-compact-iff-finite-dimensions), and this proves that the identity map is compact if and only if the space is finite dimensional since the image of the unit ball is the unit ball, which is only compact in finite dimensional spaces.

# Classifying Compact Operators
Like self-adjoint matrices, we completely understand self-adjoint compact operators. That is, their eigenvectors decompose the space into one dimensional subspaces. Equivalently, in the right coordinates, compact self-adjoint operators act via multiplication.

As our eample, our operator on $$\ell^2$$ is <span class="proof_expand">self-adjoint</span>. Every basis element $$e_i$$ is an eigenvector with eigenvalue $$1/i$$ since
\\[
	T e_n = 0 \text{ if } n \neq i , \quad \text{ and } T e_n = 1/i e_i \text{ if } i = n.
\\]


Each eigenspace is one dimensional they decompose the whole space into countably many subspace. This is exactly [the case](what-does-the-spectral-theorem-for-matrices-say.md) for matrices. We can generalize this observation into a fact: <span class="proof_expand">every self-adjoint compact operator $T$ on a Hilbert space produces a basis of eigenvectors</span>.

Self-adjointness guarantees that the eigenvalue of $T$ lie in $\R$. Moreover, the decomposition tells us that we have only countably many eigenvalues. We know that an operator is not invertible if $0$ is in its spectrum. 

If $T$ is a compact operator and has inverse $T^{-1}$, then $T^{-1}$ is compact if and only if the space is finite dimensional.

Compactness and dimension [are related](unit-ball-compact-iff-finite-dimensions), so it's unsurprising that one can characterize compact operators in this way. Notice in the above example that
\\[
	\lim_{n \to \infty} \norm{T e_n} = \lim_{n \to \infty} \frac{1}{n} = 0
\\]

This characterization shows the eigenvalues must converge to zero.


