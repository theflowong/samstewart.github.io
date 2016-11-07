---
layout: post
date: 2016/10/13 16:29
categories: differential-geometry prelims
---

## What is orientation and why does it matter?

Recall that in our theory of differential forms, we are calculating <em>signed</em> volume. That is
\\[
	\int_a^b f dx = -\int_b^a f dx.
\\]

On the real line, orientation of an interval is easy to define. We can say that $[0, 1]$ is positively oriented, while flipping it to $[1, 0]$ makes it negatively oriented. Graphically, this is clear. 

Moving to the plane, things become muddier. How do we define the orientation of a shape? Intuitively, if our coordinate system aligns with the coordinate axes, then the 
	
## Orientation of a vector space
This motivates  the definition of orientation. Since a choice of coordinate system is just that, a choice, we are only able to measure orientation <em>relative</em> to <em>another</em> coordinate system. This <em>relative</em> definition, much like a [universal definitions](universal-definition), is best described via a map between the two systems. This is a slight mental shift: instead of viewing the feature as a property of a single coordinate system, we think of orientation as an <em>action</em> that transforms one coordinate system into another. Of course, this is nothing but a linear transformation. Indeed, one can describe orientation intuitively as flipping an object.

![Bunny flipped]({{ site.url }}/assets/stanford-bunny-flipped.jpg)


Recall that geometrically the determinant of a linear transformation measures how much the transformation stretches a unit parallelpiped. 
	
![Interactive diagram of parallelpip]({{ site.url }}/assets/interactive-parallel-piped.jpg)

This interpretation naturally leads to the fact that if the transformation $T$ collapses any dimensions, that is, if any of the $Te_i$ are linearly <em>dependent</em>, then $\textrm{det}(T) = 0$. Quite simply, a square in three dimensions has no volume.

This fact plus the linearity of the determinant with respect to the columns (see [why](geometric-interpretation-of-determinant)), forces something surprising: the determinant is an antisymmetric tensor with respect to the columns. That is, switching two columns changes the sign of the determinant. 

<div class="proposition">
	Let $A$ be an $m \times n$ matrix and $A_i$ denote the $i$th column and $B_\sigma$ a matrix where $B_i = A_\sigma(i)$ with a permutation. Then
	\\[
		\textrm{det}(B) = \textrm{sgn}(\sigma)\textrm{det}(A).
	\\]
</div>

This seemingly geometric artifact is exactly what tracks orientation as the following example shows. Consider the plane $\R^2$ with the standard basis $e_1, e_2$ labeled $x$ and $y$.

![2D stanford bunny with coordinate axes labeled](({{ site.url }}/assets/coordinate-axes-labeled.jpg }}))

The transition matrix between these two bases is of course the identity $I$ with $\textrm{det}(I) = 1$. Now switch the <em>order</em> of $e_1$ and $e_2$ so that $e_2$ points along the horizontal axis and $e_1$ points along the vertical axis. 

![Axes flipped]({{ site.url }}/assets/axes-flipped.jpg)

Then the transition matrix is the permutation matrix
\\[
	\begin{bmatrix}
		0 & 1 \cr
		1 & 0
	\end{bmatrix}.
\\]

with determinant $-1$. If you consider the picture, one cannot achieve this orientation via a rotation: it is a flip. Now consider the standard basis rotated by ninety degrees.

![Rotation by 90 degrees]({{site.url}}/assets/rotation-by-90-degrees.jpg)

The transition matrix is
\\[
	\begin{bmatrix}
		0 & -1 \cr
		1 & 0
	\end{bmatrix}	
\\]
with determinant $1$. This does not flip the bunny, but instead only rotates it. Let's move to three dimensions. If we consider the right hand coordinate system (the index finger points along $x$-axis), then we have the transition matrix
\\[
	\begin{bmatrix}
		1 & 0 & 0 \cr
		0 & 1 & 0 \cr
		0 & 0 & 1
	\end{bmatrix}
\\]
	with determinant $1$.

	![Right-handed coordinate system with stanford bunny]({{ site.url }}/assets/right-handed-coordinate-system.jpg)

On the other hand (no pun intended), the left-handed coordinate system has the $x$ and $y$ axes switched with corresponding transition matrix
\\[
	\begin{bmatrix}
		0 & 1 & 0 \cr
		1 & 0 & 0 \cr
		0 & 0 & 1
	\end{bmatrix}
\\]
with determinant $-1$. 

![Combined right and left handed coordinate system in the same frame]({{site.url}}/assets/left-and-right-handed-coordinates.jpg)

The left-handed coordinate system is the flipped version of the right-handed coordinate system. How does the sign of the determinant relate to the orientation of a transformation? From the above examples, if we have two bases $e_1, \ldots, e_n$ and $\widetilde{e}_1, \ldots, \widetilde{e}_n$ when the transformation given by $T$ is such that $\textrm{det}(T) &gt; 0$ then we say that the bases are <em>consistently oriented</em> or <em>positively oriented</em>. In the other case, if $\textrm{det}(T) &lt; 0$, then we say the two bases are <em>negatively oriented</em>. While the magnitude of the determinant of $T$ measures how much $T$ stretches the original basis, the sign determines if we have somehow reflected the basis or not.

## Relationship between orientation and alternating tensors


There is another perspective on defining orientation. As discussed in [my article about alternating tensors](what-are-alternating-tensors), the determinant is our model for defining alternating tensors. Since we started by defining orientation in terms of a determinant, we can extend the analogy to a definition in terms of alternating tensors. Let's start with a 1D example. Consider the tensor $\Omega = \xi_1$ where $\Omega(e_1) = \xi_1(e_1) = 1$. Geometrically, we are saying that the unit vector pointing towards the positive reals, has positive length one.

<!-- picture of unit vector on real line -->

But now consider the basis $-e_1$ with dual basis $\widetilde{\xi}_1(-e_1) = 1$. Then by linearity $\widetilde{\xi}_1(e_1) = -1$. Geometrically, we are saying that the unit vector pointing towards the positive reals has been flipped in the other direction. This is, of course, an orientation change. 

<!-- picture of unit vector pointing in the opposite direction -->
Recall that [covectors](what-are-covectors) $\xi_i$ gives the component of a vector $v$ with respect to a given vector $e_i$. If $v$ and $e_i$ point in opposite directions, then the sign of $\xi_i(v)$ will be negative. Like a determinant, covectors can detect when a vector has flipped relative to another vector. 

We know that alternating forms measure area of a parellelpiped formed by a given basis $e_1, \ldots, e_n$ by measuring the length of each $e_i$ with a covector $\xi_i$ and multiplying this list together. Because each individual covector can detect if a vector has flipped, then the entire product can detect if the parallelpiped has flipped. As an example, consider the covectors $\xi_1, \xi_2$ corresponding to the standard basis $e_1, e_2$ and define $\Omega = \xi_1 \wedge \xi_2$. If we consider the unit parallelpiped spanned by $e_1, e_2$, then the oriented area is given by 
\\[
\Omega(e_1, e_2) = \textrm{det}\begin{bmatrix}
		\xi^1(e_1) & \xi^1(e_2) \cr
		\xi^2(e_1) & \xi^2(e_2)
		\end{bmatrix} =
		\textrm{det}
		\begin{bmatrix}
			1 & 0 \cr
			0 & 1
			\end{bmatrix}
		= 1
\\]

![Graphic of unit parallelpiped]({{ site.url }}/assets/unit-parallelpiped.jpg)

But now consider the same parallelpiped flipped around the $x$-axis. This is spanned by $e_1, -e_2$.

![Picture of flipped parallelpiped]({{ site.url }}/assets/flipped-unit-parallelpiped.jpg)

Then the signed area is
\\[
\Omega(e_1, -e_2) = \textrm{det}\begin{bmatrix}
		\xi^1(e_1) & \xi^1(-e_2) \cr
		\xi^2(e_1) & \xi^2(-e_2)
		\end{bmatrix} =
		\textrm{det}
		\begin{bmatrix}
			1 & 0 \cr
			0 & -1
			\end{bmatrix}
		= -1.
\\]
When we flipped the parallelpiped, the alternating form $\Omega$ changed sign. Thus, we can define an orientation via an alternating form $\Omega \in \Lambda(V)$ as follows. If $e_1, \ldots, e_n$ and $\widetilde{e}_1, \ldots, \widetilde{e}_n$ is another basis such that $\Omega(e_1, \ldots, e_n)$ and $\Omega(\widetilde{e}_1, \ldots, \widetilde{e}_n)$ have the same sign, the bases have the same orientation. Equivalently, bases partition into two equivalence classes: first where $\Omega(e_1, \ldots, e_n) &gt; 0$, and second where $\Omega(e_1, \ldots, e_n) &lt; 0$. One can prove that this notion of orientation is equivalent to the one defined earlier. 

### Orientation of a Manifold 

## Orientation of a diffeomorphism
As discussed in an [earlier post](what-is-a-diffeomorphism), a diffeomorphism is a stretchy transformation and such transformations include reflections. Hence, we want to know if a given diffeomorphism $F : M \to N$ changes the orientation of a manifold $M$. Since we defined the orientation of $M$ by the orientation of the individual tangent spaces, the orientation of $F$ is defined by how $F$ acts on the tangent spaces. From the [article on pushforwards](what-is-a-pushforward), we know that $F$ acts on $T_p M$ by pushing vectors forward to $T_p N$. Thus, we say that $F$ is orientation preserving if for the basis $e_1, \ldots, e_n$ of $T_p M$ the linear map $F_\*$ has positive or negative determinant. In other words, $F$ is orientation preserving if $F_\* e_1, \ldots, F_\* e_n$ is consistently oriented with $e_1, \ldots, e_n$. As an example, consider the diffeomorphism between Cartesian and polar coordinates given by $(x, y) = F(r, \theta) = (r \cos \theta, r \sin \theta)$. (TODO: fill in the example).

If we are lucky enough to have an embedding of our manifold $M$ into $\R^n$, we can also define an orientation relative to a surface normal. Consider as an example $S^1$. We can take the normal vector $x \partial_x + y \partial_y$ which is simply the position vector. Placed at a point $p \in S^1$ (embedded in $\R^2$), the normal is not only outside of $S^1$, but is in fact normal to the tangent space.

![Interactive graphic of normal on unit circle]( {{ site.url }}/assets/normal-on-unit-circle.jpg )

How does this normal induce an orientation? If we combine the normal with the tangent vector $\partial_\theta$, then we have a local two dimensional coordinate system whose orientation we can then compare to the standard basis in $\R^2$. 

![Add dtheta term to normal on unit circle]( {{site.url}}/assets/rotation-by-90-degrees.jpg )

Since the standard basis forms the identity matrix, the transition matrix is simply
\\[
	\begin{bmatrix}
		x \partial_x + y \partial_y & F_* \partial_\theta
	\end{bmatrix}
\\]
where $F(\theta) = (\cos \theta, \sin \theta)$ is a embedding of $S^1$ into $\R^2$.

We can extend this example to $\R^3$ with $S^2$ and finish the example on [integrating differential forms](integrating-differential-forms). If we select the outward facing normal vector $N = x \partial_x + y \partial_y + z \partial_z$ to the unit sphere (read [the N-sphere](the-n-sphere) to see  why this is a normal), then we can see that the embedding map
\\[
	F = (\cos \theta \sin \phi, \sin \theta \sin \phi, \cos \phi)
\\]

is orientation preserving. The coordinate system in $\R^3$ that we wish to compare to the standard basis is $(N, F_\* \partial_\phi, F_* \partial_\theta)$. To determine the orientation, we thus compute 
\\[
	\textrm{det} \; \begin{bmatrix}
		N & F_* \partial_\phi & F_* \partial_\theta.
		\end{bmatrix} =
	\textrm{det} \; \begin{bmatrix}
		\sin \phi \cos \theta & \cos \phi \cos \theta & -\sin \phi \sin \theta \cr
		\sin \phi \sin \theta & \cos \phi \sin \theta & \cos \theta \sin \phi \cr
		\cos \phi & \sin \phi & 0
	\end{bmatrix} = \sin \phi.
\\]
When $\phi \neq 0 \neq \pi$ (avoiding the north and south pole, respectively), then the determinant is positive so that the map is $F$ positively oriented.	

## Why do mirrors flip only horizontally?