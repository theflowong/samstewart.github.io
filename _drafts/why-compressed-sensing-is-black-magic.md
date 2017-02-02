---
layout: post
---

Notes on compressed sensing during 01/28/2017:

Big idea: most problems live on low dimensional subspaces (sparsity) in high dimensional spaces. 

Compression algorithms simply find the most important coefficients and then throw away the extra information. Compressed sensing comes from the other direction and attempts to avoid measuring the unnecessary information in the first place.

How many samples do we need to recover the image up to a certain L^2?

General idea is to take a random series of measurements and perform some kind of correlation to determine what we think are the most important coefficients. 

Then we fit a sparse signal to the data using one of several methods (basis pursuit, l^1 minimization, etc.)

If the signal really is sparse, we will find a perfect reconstruction. If not, we have error bounds on how good it will be.

Sparsity is defined by a choice of l^p norm and how many points live in the unit ball in that space.

This problem is connected to reconstructing low-rank matrices.

Nonadaptive sampling is just as good as adaptive sampling.

Two key steps:
1. Find the right sampling strategy (this can be obtained by random sampling)
2. Use a good reconstruction strategy (this can be chosen in advance.)

This random sampling is as good as if we know the most important modes in the first place.

Like choosing the right coordinates to render a nonlinear problem linear, one must choose the right basis to make the signal sparse.

Q: what is this information operator and why do we randomly sample it? Is this the correlation stuff Tao was talking about?

Q: why does minimax algorithm appear so frequently?

