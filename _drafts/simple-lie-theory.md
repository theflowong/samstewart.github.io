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
