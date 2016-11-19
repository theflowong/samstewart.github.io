---
layout: post
date: 2016-11-17 18:11
categories: math linear algebra cool-facts
---

In linear algebra class, we learn a strange algorithm for multiplying matrices together: one takes the rows of the first matrix and dots them with the columns of the second matrix. Symbolically, for a two-by-two matrix, this is
\\[
	\begin{bmatrix}
		b_{11} & b_{12} \cr
		b_{21} & b_{22}
	\end{bmatrix}
	\begin{bmatrix}
		a_{11} & a_{12} \cr
		a_{21} & a_{22}
	\end{bmatrix}
	=
	\begin{bmatrix}
		a_{11} b_{11} + b_{12} a_{21} & a_{12} b_{11} + a_{22} b_{12} \cr
		b_{21} a_{11} + a_{21} b_{22} & a_{12} b_{21} + a_{22} b_{22}
	\end{bmatrix}
\\]

But why? In this article, I'll explain why this apparently strange definition is actually natural.

## Plato's Cave
Like the shadows of the prisoners in Plato's cave, matrices are only a representation of reality (in fact, representation has a technical sense here) and the rules for manipulating them come from a "deeper level" of truth.

This deeper level of truth, and the true story of linear algebra (despite its focus on matrices in beginning courses), is the linear operator. A linear operator $T : V \to V$ (where $V$ is a finite-dimensional vector space) must be linear. More precisely,
\\[
	T(\alpha_1 v_1 + \alpha_2 v_2) = \alpha_1 T v_1 + \alpha_2 T v_2.
\\]

This definition is a bit abstract and unhelpful for computations, so drop [down the ladder of abstraction]() and associate a "shadow" (a matrix) to $T$. How do we define this matrix?

## Composing Linear Operators
Given this setup, we can describe why matrix multiplication is natural. We start in the world of truth, and consider the linear operators $T_1, T_2$. If we wish to compose them (i.e. apply $T_1$ followed by $T_2$) we make a new linear operator $T = T_2 \circ T_1$ that acts as
\\[
	T(v) = T_2(T_1(v))
\\]

Passing back to the world of shadows, we associate a matrices $A, B$ with $T_1, T_2$ as described earlier. **Composition in the world of truth becomes multiplication in the world of shadows**. Why? We can associate a matrix $C$ with $T$ by evaluating $T$ on the basis vectors as described above
\\[
	T(e_i) = T_2(T_1(e_i)) = T_2(A_{\cdot, \, i}) = B \, A_i
\\]

Thus,
\\[
	C = \begin{bmatrix}
		B \, A_{\cdot, \, 1} & B \, A_{\cdot, \, 2} & \cdots B \, A_{\cdot, \, n}
	\end{bmatrix}
\\]
so $C$ simply takes $B$ and acts on the columns of $A$. To see how this produces the matrix multiplication formula in the beginning of the article, let's consider the case of two-by-two matrices. Then
\\[
	C = \begin{bmatrix}
		B \, A_{\cdot, \, 1} & B \, A_{\cdot, \, 2}
	\end{bmatrix}
\\]
Since by definition of a matrix acting on a vector, we have
\\[
	B \, A_{\cdot, \, 1} = \begin{bmatrix}
		B_{1, \, \cdot} \cdot A_{\cdot, \, 1} \cr
		B_{2, \, \cdot} \cdot A_{\cdot, \, 1}
	\end{bmatrix}
\\]
then the $(1,1)$ entry of $C$ will be
\\[
	B_{1, \, \cdot} \cdot A_{\cdot, \, 1} = b_{11} a_{11} + b_{12} a_{21}
\\]

