---
layout: post
date: 2016-11-17 18:11
categories: math linear algebra cool-facts
---

In linear algebra class, we learn a strange algorithm for multiplying matrices together: one takes the rows of the first matrix and dots them with the columns of the second matrix. Symbolically, for a two-by-two matrix, this is
\\[
B A = 
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

This deeper level of truth, and the true story of linear algebra (despite its focus on matrices in beginning courses), is the linear operator. An operator $T : V \to V$ (where $V$ is a finite-dimensional vector space) is linear if it satisfies
\\[
	T(\alpha_1 v_1 + \alpha_2 v_2) = \alpha_1 T v_1 + \alpha_2 T v_2
\\]
for all $v_1, v_2 \in V$ and $\alpha_1, \alpha_2 \in \R$. 

This definition is a bit abstract and unhelpful for computations, so we drop [down the ladder of abstraction](http://worrydream.com/LadderOfAbstraction/) and associate a "shadow" (a matrix) to $T$. How do we define this matrix?

## Linear Operators to Matrices
The linearity property given above implies that $T$ *is completely determined by its behavior on basis vectors*. Why? If $v \in V$ then we can write
\\[
	v = \sum_{i = 0}^N \alpha_i e_i
\\]
where $\{ e_i \}$ are a basis for $V$. Then applying $T$ to $v$ and using linearity gives
\\[
	Tv = T \left( \sum_{i = 0}^N \alpha_i e_i \right) = \sum_{i = 0}^N T(\alpha_i e_i) = \sum_{i = 0}^N \alpha_i T(e_i)
\\]
In other words, to compute $Tv$, we need only know $\{ T e_i \}$. This immediately implies that our matrix  representation of $T$ should also only depend on the basis vectors.

Indeed, we can define a correspondence between *linear operators and grids of numbers (matrices)* by making $\{ T e_i \}$ the columns of $M$ so that
\\[
	M = \begin{bmatrix}
		Te_1 & T e_2 & \cdots & T e_N.
	\end{bmatrix}
\\]

This is the passage from reality to the world of shadows. An example will clarify this. Consider the linear operator that stretches $v \in \R^2$ by a factor of two
\\[
	Tv = 2 v.
\\]
Using the correspondence discussed above, we can associate a matrix $M$ to this linear operator as
\\[
	M = \begin{bmatrix}
		Te_1 & T e_2
	\end{bmatrix} =
	\begin{bmatrix}
		2 e_1 & 2 e_2
	\end{bmatrix}
	\begin{bmatrix}
		2 \cdot 1 & 2 \cdot 0 \cr
		2 \cdot 0 & 2 \cdot 1
	\end{bmatrix}
	= 2 I
\\]
The matrix corresponding to $T$ is simply a scaling matrix.

## Composing Linear Operators
This bridge between linear operators and matrices reflects the behavior of linear operators.
1. To compute $Tv$ we compute $M v$ (matrix multiplied by a vector).
2. To compute $T(v_1 + v_2)$ we compute $M(v_1 + v_2) = Mv_1 + M_v2$.
3. To compute $T(\alpha v)$ we compute $M(\alpha v) = \alpha M v$.

But if we have two linear operators $T_1, T_2$, how do we compute the composition $T_2 \circ T_1$? In other words, what is the matrix representation of the composition of two linear operators? The answer is the reason for the strange definition of matrix multiplication.

Composition really produces a new linear operator $T = T_2 \circ T_1$ that acts as
\\[
	T(v) = T_2(T_1(v))
\\]

Passing to the world of shadows (matrices), we associate a matrices $A, B$ with $T_1, T_2$. **Composition in the world of truth becomes multiplication in the world of shadows**. Why? We can convert $T$ itself to a matrix $C$ using the above procedure
\\[
	T(e_i) = T_2(T_1(e_i)) = T_2(A e_i) = B(A e_i).
\\]
By definition $T_1(e_i) = A e_i$ gives the $i$th column of $A$, which we'll denote $A_{\bullet, i}$.

Thus,
\\[
	C = \begin{bmatrix}
		B \, A_{\bullet, \, 1} & B \, A_{\bullet, \, 2} & \cdots B \, A_{\bullet, \, n}.
	\end{bmatrix}
\\]
Composition of linear operators thus acts via $B$ on the columns of $A$. **This is equivalent to matrix multiplication**. To see this, consider the case of two-by-two matrices. Then
\\[
	C = \begin{bmatrix}
		B \, A_{\bullet, \, 1} & B \, A_{\bullet, \, 2}
	\end{bmatrix}
\\]
Since by definition of a matrix acting on a vector, we have
\\[
	B \, A_{\bullet, \, 1} = \begin{bmatrix}
		b_{11} a_{11} + b_{12} a_{21} \cr
		b_{21} a_{11} + b_{22} a_{21}.
	\end{bmatrix}
\\]
We can see that this is indeed the first column of the matrix $BA$ given at the beginning of the article.

