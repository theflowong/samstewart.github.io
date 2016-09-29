---
layout: post
date: 2016-09-20 14:04
categories: lie-theory summaries notes
---

Lie group is a manifold and a group. So we've added ability to do addition and subtraction.

Examples:
1. $\R^n$
2. $S^n$ when embedded in $\C^n$.
3. $GL(n, \C), GL(n, \R)$
4. $SO(n, \R)$ (special orthogonal group)
5. $SU(n, \R)$ (special unitary group. Can be identified with $S^{2n}$.
6. $SL(n, \R)$

Everything is natural for subgroups and submanifolds. A few facts about quotients. Morphism of lie groups. Plays well with covering maps.

Can restrict our attention only to connected Lie groups.

Main point is the connection between symmetries of manifolds and decompositions. We can define a Lie group $G$ acting on manifold $M$.

A representation is an association between a vector space and the endomorphisms. We can represent a Lie group as matrices, essentially.

A group action on a manifold gives representations into many different vector spaces associated with the manifold. For example
1. $C^\infty(M)$
2. $L^p(M)$
3. $T_p \, M$
4. $T^*_p \, M$
5. Vector fields on $M$ (smooth sections of the tangent bundle)

Interesting interpretation of Jordan canonical form representing orbits under conjugation of $GL(n)$ on itself. The quotient group does not have a Hausdorf structure since any matrix can be perturbed to give a diagonal matrix (can we see this from spectral theory?).

More importantly, Lie groups can act on themselves. We have associated actions
1. Left action $g \mapsto g v$
2. Right action $v \mapsto  vg$
3. Adjoint action $v \mapsto gvg^{-1}$

Then we consider the corresponding representations induced by these actions on the space of vector fields. 

We call the set of vector fields stablized by the left action "left invariant vector fields." We can identify them with $v(1)$ so that we have an identification with the tangent space at the identity.

Why is it obvious that modding out by stabilizer gives bijection with orbits? Isn't this the orbit stabilzer theorem?

We want to put a topology on the homomorphisms of a space. Somehow related to Lie theory.

For matrix groups, the exponential map and the logarithm map relate the Lie algebra to the Lie group.

The exponential map generates something called a one-parameter subgroup, the same thing we obtain when solving a differential equation.

We call $A$ an infinitisimal generator if
\[
	\dot{x} = A(t) x
\]
This is also equal to the derivative of $exp(t A) = M(t)$ which we call the one parameter subgroup.

Solutions to ODEs are called flows, and they are essentially using the exponential map to convert an infinitisimal symmetry of the space (matrix $A$) into a full symmetry of the space (or a solution to an ODE).

We can prove that each of the classical groups are Lie algebras via various tricks. For $SL(n, \R)$, we can note that
\[
	\textrm{ det exp } = \textrm{ exp tr }
\]
so the condition of $\textrm{det } X = 1$ becomes $\textrm{tr } x = 0$ in the tangent space (i.e. Lie algebra). We note that for $A$ close to the identity, by the continuity of $\textrm{exp}$ we can write $X = \textrm{exp}(x)$ for some $x \in GL(n, \R)$. 

Hence, we have a bijection between a subspace of $GL(n, \R)$ and a neighborhood of the identity in $SL(n, \R)$. 

The group structure of the manifold means that everything is determined by the identity (we can just shift to zero), so we have completely determined the global structure of the manifold. The whole manifold $SL(n, \R)$ is simply copies of $\{ x \in GL(n, \R) \mid \textrm{tr } x = 0 \} glued at each point.

Hence our desire for the left invariant vector fields. We can identity the whole manifold structure by looking at things invariant under left translation. We are really using the symmetry of the underlying object to reduce the problem.


https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf
https://www.maa.org/sites/default/files/pdf/upload_library/22/Ford/Howe600-623.pdf

How do we know that $O(n), SO(n)$ are Lie groups?

Note that $A = exp(x)$ has $A A^T = exp(x) exp(x)^T = exp(x + x^T) = 1$ so $x + x^T = 0$. That is, the Lie algebra for $O(n)$ is collection of skew symmetric matrices.

Since $SO(n) \subseteq O(n)$ is the connected neighborhood of the identity, then its Lie algebra is contained in $x + x^T = 0$ (indeed, we showed above that it is $\textrm{tr } x = 0$.

Above we extended the definition of the exponential to matrices. This worked in the case of matrix groups (why is the exponential so important here?), but we need something more general for the case of arbitrary Lie groups.

Define the one-parameter subgroup $\gamma_x(1)$ to be a smooth morphism of Lie groups $\R \to G$ such that $\gamma_x'(0) = x$. Then we define our exponential map to be
\[
	exp(x) = \gamma_x(1)
\]

In other words, to jump from the Lie algebra to the Lie group, we take a tangent vector, put a curve through it on the manifold, and follow it back to the identity. The identity is important simply because of the left translation invariance.

Examples of $S^1$. We see that $exp(\theta) = e^{2\pi \theta}$ or $exp(a) = a \textrm{ mod } \Z$ for $a \in $\R$. In this sense, it acts a bit like a covering map?

We can describe $S^1$ as either $\R / \Z$ or as a circle in the complex plane. In the second case, $z = e^{2 \pi i \theta}$

We can ask how addition in Lie group leads to product in Lie algebra. The second order term is given by the commutator $[x, y]$. The associativity of the Lie group operation leads to Jacobi identity for this operator. Hence, we have a vector space with a bilinear form.

Morphisms of Lie groups can be taken to morphisms of Lie algebras that respect the commutator. Lie theory is thus again exploring the functor between Lie groups and Lie algebras.

Our definition of a Lie algebra can thus be made more sophisticated. A Lie algebra is a vector space with a skew symmetric bilinear form $[x, y]$ that satisfies the Jacobi identity.

Our previous description of the tangent space at the identity can be re-described as follows: for every Lie group, the space $g = T_1 M$ has the structure of a Lie algebra. Whats more, we can identity $Hom(G_1, G_2)$ with $Hom(g_1, g_2)$. 


