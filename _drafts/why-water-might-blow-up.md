
I just read Terry Tao's wonderful blog post on why he thinks the Navier-Stokes equations are hard [1], and I want to use his article to describe the problem of Navier-Stokes regularity.

He establishes three approaches for tackling the problem, and really tackling nonlinear PDE problems in general [cite Kleinerman].
1. Find explicit solutions for any smooth initial data.
2. Find some globally conserved or monotone quantity.
3. Study perturbations of solutions we understand. 
4. Some entirely new technique.

The two currently known conserved quantities are the kinetic energy given by
\\[
	\sup_t \norm{u}_2^2(t)
\\]
and the energy dissipation
\\[
	\int_0^T \norm{\nabla u}_2^2(t).
\\]
That's really all we can control. Given our previous progress, Dr. Tao thinks that new globally conserved quantities will come from one of three areas:
1. Physics
2. Geometry (as in the case of Ricci flow and Perleman's conjecture)

The key issue in Navier-Stokes is super- and sub-criticality. That is, the quantitative estimates we have obtained thus far only appear to work at either course scales or fine scales, but not both. The need to control all scales comes from the scaling symmetry. For example,

The chief difficulty comes in the behavior of the solution at different time and space scales. Energy can move between these scales (see Kolmogorov theory) and if enough energy moves to small enough scales, we can have finite-time blowup. 

On the other side, to construct a blowup solution, Dr. Tao highlights three main approaches
1. Construct an explicit blowup solution.
2. Use some kind of comparison principle to another solution with known blowup properties.
3. A contradiction where the solution forces some functional to an impossible value.

I think what surprises me continually about mathematics is just how small our toolbox is.

1. Tao, Terrance. March 18, 2007. https://terrytao.wordpress.com/2007/03/18/why-global-regularity-for-navier-stokes-is-hard/
