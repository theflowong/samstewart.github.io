Notes on my reading of Invertible Finite Elements for Robust Simulation of Large Deformation:

Problem: collisions can invert the triangles used for finite element methods in deformable materials. This ruins the simulation and results in "popping".

Point: diagonalize strain matrix and correct the strains going in the wrong direction.

Past literature: Tried to handle the problems via a spring solution, but this didn't work.

Mathematics: just linear algebra and numerical analysis. Interesting perspective on world space.

Questions: what is Green strain, what is Cauchy strain?

Notes on my reading of Real-Time Subspace Integration for Deformable Models

Problem: computing deformations of nonlinear objects in realtime is hard.

Solution: reduce problem to cubic polynomials in the right coordinate space.
