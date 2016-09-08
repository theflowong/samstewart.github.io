---
layout: post
date: 2016-09-08 16:03
categories: spectral-theory linear-algebra definitions
---

Compact operators are intuitively infinite dimensional matrices. More precisely, <span class="proof_expand">every compact operator is a limit of matrices</span>, or final dimensional operators.

The trivial examples of compact operators are matrices, and a <span class="proof_expand">non-trivial example</span> is $$\ell^2$ with the operator
\\[
	T a_n = \frac{1}{n} a_n.
\\]

Ex: projection operator

You can picture this operator as an infinity identy matrix with $$1/n$$ on the diagonal. 

The operator $$Tf = xf$$ on $$L^2([0, 1])$$ is not compact. 

Are important because like self-adjoint matrices, their eigenvectors decompose the space into one dimensional subspaces. Equivalently, in the right coordinates, compact self-adjoint operators act via multiplication.

As our eample, our operator on $$\ell^2$$ is <span class="proof_expand">self-adjoint</span>. Every basis element $$e_i$$ is an eigenvector with eigenvalue $$1/i$$ since
\\[
	T e_n = 0 \text{ if } n \neq i , \quad \text{ and } T e_n = 1/i e_i \text{ if } i = n.
\\]


Each eigenspace is one dimensional they decompose the whole space. This is exactly [the case](what-does-the-spectral-theorem-for-matrices-say.md) for matrices. We can generalize this observation into a fact: <span class="proof_expand">every self-adjoint compact operator $T$ on a Hilbert space produces a basis of eigenvectors</span>.

As with matrices, one can also say that any compact operator, in suitable coordinates, acts by multiplication (as a diagonal infinite dimensional matrix). 


