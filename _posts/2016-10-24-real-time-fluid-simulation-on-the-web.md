---
layout: post
date: 2016-10-24 8:53
categories: code fluid-dynamics solver
---

Play around with a viscous fluid below. This solver is written in JavaScript and WebGL and is based on the wonderful article [Fast Fluid Dynamics Simulation on the GPU](http://http.developer.nvidia.com/GPUGems/gpugems_ch38.html). In this post, I describe a perspective on Navier-Stokes that is useful for numerics.

(Coming soon).

### Solving Navier-Stokes Numerically
The Navier-Stokes equations are given by

\[
	u_t + u \nabla u - \nu \nabla^2  u + \rho \nabla p = F
\]

with the incompressibility condition

\[
	\nabla u = 0
\]

and the no-slip boundary conditions $u = 0$ at the boundary.
### One Step of Navier-Stokes

1. Advection
2. Forces
3. Pressure
4. Diffusion

### Pressure as a Projection Operator

### Advection
(coming soon)

### Diffusion

### Forces

### Displaying the Fluid 
