Notes on Hamiltonian structure continued:

Sympletic manifold is a special case of a Poisson manifold. Extra condition is that the Poisson bracket has maximal rank.

We can view the Poisson bracket as a map from dH (one forms) to a vector field (the Hamiltonian vector field). This linear map extends from all one forms to the tangent space. We can then talk about the rank of this map. But what does it mean?

A sympletic manifold has a simple set of conditions for a structure matrix. 

A Hamiltonian foilates any space into submanifolds that are sympletic. 

Example:

Let SO(3) act on R^3

H(u) = (u_1)^2 / 2 I_1 + (u_2)^2 / 2I_2 + (u_3)^2 / 2I_3

Then we can deduce Hamiltonian's equations and obtain the Euler equations for the motion of a rigid body:

Sympletic submanifold:
Poisson bracket has maximal rank. Many physical systems evolve on symplectic manifolds.

Poisson Submanifolds:
A canonical map between Poisson manifolds is one that preserves the Poisson bracket

A poisson submanifold is a submanifold whose immersion is a canonical map. 

TFAE:

1. immersion is a canonical map
2. every Hamiltonian vector field in the ambient space is tangent to the submanifold.
3. The Poisson bracket restricts nicely to the submanifold

Hamiltonian flows preserve the Poisson bracket and the rank. This shows that a Poisson manifold naturally decomposes into a foliation of sympletic manifolds. Initial data that lies in one of these submanifolds stays in these submanifolds.

So we can reduce our study to only symplectic manifolds.

For the rigid body rotations described above, the dynamics occur on sphers S^2_\rho in so*(3)

Q: why do we take the dual of so(3) when we are computing the Poisson bracket? It is already a vector space so I don't see the point.

01/16/2017

I was reading Roger Penrose's Road to Reality and he talked about Hamiltonian manifolds. In the end, everything becomes a symplectic manifold.

There are two tremendously useful formalisms:
- Lagrangian (some kind of energy function)
- Hamiltonian (conserved quantity)

On can have a Lagrangian on a finite dimensional configuration space (rigid body systems) or infinite dimensional systems (field theories).


# Adjoint Representation

A Lie group can act on itself via the adjoint action g h g^{-1}. The pushforward of this action induces an action on the tangent space (Lie algebra) and this produces a representation of the Lie group in the Lie algebra.

Ex: SO(3)

We know that the conjugate subgroups of the Lie group are exactly the subalgebras related by the adjoint action.

If we want to classify the distinct solutions to a differential equation, we need only classify the Lie subalgebras distinguished by the adjoint action.

# Co-adjoint representation

The infinitismal generator of the adjoint action is in fact the Lie bracket of the two vector fields. Q: Why?

We can dualize the whole picture and obtain a new perspective on the Poisson bracket

Adjoint action on Lie group -> Adjoint action on Lie algebra

We can dualize the whole picture and obtain a connection between the adjoint representation and the Lie-Poisson structure on g*.

Q: why would we ever bother to take the dual of a vector space? Seems like a type system in mathematics.

Leaves of the foliation of g* via Poisson bracket are precisely the orbits of the co-adjoint action Ad* g.



