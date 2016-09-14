---
layout: post
date: 2016-09-09 13:37
categories: course-notes numerical-analysis
----

We talked about discretizing the transport equation
\\[
	\sigma u + (a \cdot \nabla) \cdot u = f
\\]

The problem is that this equation breaks down as constant along characteristics with discontinuities between them. This PDE is nothing but a collection of ODEs. 

We pass to weak solutions to allow for these discontinuities. The weak formula is given by
\\[
	\innerp{\sigma u}{v} - \innerp{u}{a \cdot \nabla v} - \innerp{u, f} = 0
\\]
with a term for the boundary condition of $$\innerp{u}{h}_{\partial K} = 0$$. Note that this is why the trace operators for Sobolev spaces are important. We must talk about a boundary "almost everywhere" if we wish to do numerics.

Solving this problem with finite elements, we can discretize the domain into two kinds of meshes: conforming and nonconforming. The nonconforming mesh has "hanging points" that lead to problems with numerics. He focuses mostly on conforming.

The idea for finite elements is to place polynomials on each mesh point, and then solve the PDE exactly for those elements.

We discussed upwinding which uses the fact that information flows downstream from the characteristics to choose the points on the boundaries of the finite elements.

