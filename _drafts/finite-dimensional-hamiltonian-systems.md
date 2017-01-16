---
layout: post
---

These are my notes on Chapter 6 of Peter Olver's book on Lie Groups and Differential Equations.

Definition:
A Poisson manifold is a manifold with a Poisson bracket (an operation on functions that produces another function).

Definition:
Hamiltonian vector field. Fix one of the functions in {F, H} and let the other vary. This gives a derivation on the space of smooth functions or equivalently a vector field. We call this the Hamiltonian vector field for a function F.

This induces a set of equations that we can solve to obtain a flow. The so-called distinguished coordinates (Poisson bracket zero) stay fixed.

There is a connection between the Hamiltonian of the Poisson bracket of two functions and the Lie bracket of the two individual Hamiltonian fields.

Hamiltonian flows = differential equations with conserved quantities

A single Poisson manifold can have tons of Hamiltonian flows. 

Structure matrix: describes how the Poisson bracket acts in coordinates (completely determined by action on coordinate vector fields).

Goal: use the symmetries to reduce the number of variables in the ODE. Conserved quantities allow us to solve system along level sets of the conserved function (energy wells).

General Hamiltonian system:

\frac{dx}{dt} = J(x) \nabla H(x)

J(x) structure matrix determines the Poisson bracket

H(x) potential function that describes the Hamiltonian.

One can classify the matrices that are structure matrices for Poisson brackets by checking that they are skew symmetric and satisfy a particular Jacobi identity.

One can define Poisson structure on any Lie algebra by using the so called structure constants (representation of bilinear form given by Lie bracket)

Both Poisson bracket and Lie bracket are bilinear forms and as such can be represented in coordinates as a two tensor (matrix). 

Lie bracket : vector fields -> vector fields -> vector fields
Poisson bracket : real valued functions -> real valued functions -> real valued functions

There is a coordinate indepenent version of the Poisson bracket

{F, H}(x) = < x , [\nabla F, \nabla H] >

With the right Poisson structure, we can discuss many different Hamiltonians. The appeal is that we can solve large families of equations.

Process: 

1. start with a Hamiltonian function (not necessarily conserved)
2. Find flow from Poisson structure on the manifold and the Hamiltonian
3. These equations will describe the physical evolution.

Good example: Lie group SO(3) and Lie algebra so(3). We obtain the Euler equations for motion of a rigid body (rotations). Somehow related to coordinate invariant description of Poisson bracket. Pairing with dual? Why does that help? Is that a general pattern?

