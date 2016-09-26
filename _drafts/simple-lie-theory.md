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

