

Title: Quaternions and Rotations in 3D

## Rotations in the plane
What is a rotation in the plane? Intuitively it takes every point and rotates it relative to the origin by an angle $\theta$. Any point in $\R^2$ can be described as a vector. Hence, one can define a rotation as a linear operator that takes $(x,y)$ to its rotated point $(x', y')$. 

But rotations don't change the distance to the origin (they are scale invariant) so we can simplify the definition still further by rescaling every vector $(x,y)$ to lie on the unit circle $S^1$. The rotation acts by first rescaling a point to the unit circle, rotating the point on the unit circle, and then rescaling back to the new rotated point. Since scaling commutes with rotation, there is no loss of generality if we define a rotation of the *whole plane* as a rotation, or symmetry, of *just* $S^1$. How do we represent these rotations?

## Complex Numbers as Linear Operators
When representing the complex numbers, we often draw them as a plane

(picture of real and imaginary axis)

The complex numbers are isomorphic *as a vector space* to $\R^2$, but algebraically they are quite different because the complex numbers have a field structure with multiplication. The space $\R^2$ has no such product structure. One intuitive idea is to represent $a + b \, i$ as a vector
\\[
	\begin{bmatrix}
		a \cr
		b
	\end{bmatrix}
\\]
but we are stuck when defining multiplication of vectors. Instead, it is better to note that complex numbers *can be associated to linear operators that **act** on $\R^2$*. This association is called a *group representation* of the complex numbers. The only constraint is that composition of linear operators (equivalently multiplication of matrices) must coincide with the multiplication of complex numbers. Symbolically, if $\rho : \C \to GL^2(\R)$ is our *representation* then
\\[
	\rho( z \cdot w) = \rho(z) \rho(w)
\\]
Basic group theory immediately implies that
\\[
	\rho(1) = \begin{bmatrix}
				1 & 0 \cr
				0 & 1
			  \end{bmatrix}
\\]
By the product constraint, we also have
\\[
	\rho(i^2) = \rho(i)^2 = \rho(-1) = -\rho(1) = \begin{bmatrix}
													-1 & 0 \cr
													0 & -1
												   \end{bmatrix}.
\\]
This matrix can be (uniquely?) decomposed into
\\[
	\rho(i) = \begin{bmatrix}
				0 & -1 \cr
				1 & 0
			   \end{bmatrix}.
\\]
Since we have mapped the basis elements of the complex numbers, then we have completely determined the representation into two-by-two matrices. An arbitrary complex number $a + b \, i$ is thus
\\[
	\rho(a + b \, i) = \begin{bmatrix}
				a & -b \cr
				b & a
				\end{bmatrix}.
\\]
Multiplication of complex numbers because multiplication of matrices (compositions of linear operators)
\\[
	\rho(a_1 + b_1 \, i) \rho(a_2 + b_2 \, i) = \begin{bmatrix}
				a_1 & -b_1 \cr
				b_1 & a_1
				\end{bmatrix}
				\begin{bmatrix}
				a_2 & -b_2 \cr
				b_2 & a_2
				\end{bmatrix}.
\\]
Every complex number can thus be viewed as a linear operator on $\R^2$. This connection turn produces a *group action* on $\R^2$: complex numbers act on vectors in $\R^2$ as linear operators via
\\[
	\rho(a + b \, i) . v = \begin{bmatrix}
				a & -b \cr
				b & a
				\end{bmatrix}
				\begin{bmatrix}
				v_1 \cr
				v_2
				\end{bmatrix}.
\\]

This correspondence establishes that complex numbers can act on $\R^2$, but geometrically, how does this action work?
(irreducible means no invariant subspaces)

## Complex Numbers and Rotations in the Plane
The geometric action of complex numbers on the plane is clearest for complex numbers on the unit circle. Euler's formula tells us that unit complex numbers can be written in polar coordinates as
\\[
	e^{i \theta} = \cos \theta + i \sin \theta.
\\]
Using our representation from earlier, we have
\\[
	\rho(e^{i \theta}) = \begin{bmatrix}
							\cos \theta & - \sin \theta \cr
							\sin \theta & \cos \theta
						 \end{bmatrix}
\\]
This is exactly a rotation matrix with angle of rotation $\theta$. The unit complex numbers thus act on $\R^2$ via rotations.

(picture of complex number with angle theta and corresponding matrix)

Multiplying two complex numbers $e^{i \theta_1}, e^{i \theta_2}$ with associated rotation matrices $R_{\theta_1}, R_{\theta_2}$ is equivalent to multiplying their rotation matrices (composing the rotations). Rotations in 2D commute (order is irrelevant), so by the representation, the complex numbers should also commute (they do). Commutivity of the complex number is precisely because rotations in 2D commute. This distinction will be important when we transition to 3D where the rotations no longer commute.

To see how an arbitrary complex number $a + b \, i$ acts on the plane, we can rewrite it as $a + b \, i = r e^{i \theta}$ and associate the matrix
\\[
	\rho(r e^{i \theta}) = r \begin{bmatrix}
							\cos \theta & - \sin \theta \cr
							\sin \theta & \cos \theta
						 \end{bmatrix}
						 = 
						 \begin{bmatrix}
						 r & 0 \cr
						 0 & r
						 \end{bmatrix}
						 \begin{bmatrix}
							\cos \theta & - \sin \theta \cr
							\sin \theta & \cos \theta
						 \end{bmatrix}
\\]
An arbitrary complex number thus acts **as a rotation and a scaling* on $\R^2$.

## Vectors to Complex Numbers
Every complex number has a representation as a linear operator on $\R^2$. But this representation goes the other way: *we can use 
Q: what is the difference between associating $1$ with $e_1$ and $i$ with $e_2$ and using a matrix representation of complex numbers

## What are the quaternions?
If the complex numbers can represent rotations in the plane, then the quaternions represent rotations in three dimensions. Algebraically, they are described by adding two new dimension $j, k$ to the existing dimension $1, i$ for complex numbers and adding the rules
\\[
	j^2 = -1, \, k^2 = -1
\\]
along with the multiplication

(wheel picture for remembering the complex multiplication)

Thus, the quaternions (often notated $\mathbb{Q}$$)

## Rotations in 3D
One can describe rotations in three dimension as all the symmetries of the unit sphere $S^2$. Since every vector in $\R^3$ can be normalized to the sphere, then we can extend these symmetries to the entire vector space $\R^3$. Rotations are clearly linear, so choosing a basis for $\R^3$ enables us to represent rotations as 3-by-3 matrices. These matrices have the special property that they are orthongoal, that is $M^T M = M M^T = I$ and we call them $SO(3)$ (special orthogonal group). 

With the standard basis $e_1, e_2, e_3$ in $\R^3$, a rotation about the x-axis is given by
\\[
	\begin{bmatrix}
		1 & 0 & 0 \cr
		0 & \cos \theta & -\sin \theta \cr
		0 & \sin \theta & \cos \theta
	\end{bmatrix}
\\]
This matrix leaves $e_1$ fixed (x-axis) and performs a rotation in the z-y-plane. The orthogonal matrices are precisely the rotations in $\R^3$.

## Unit Quaternions as Rotations
Amazingly, every rotation can be described by an axis of rotation and an angle of rotation. In the above example, the axis of rotation was the x-axis and the angle of rotation was $\theta$. This fact means we need two conceptually distinct pieces of information to represent a rotation:
1. A unit vector along the axis of rotation.
2. An angle of rotation.

The unit vector requires three coordinates since we are in three dimensions, so a rotation requires **four total** dimensions of information.

1. Conjugation by a quaternion as a rotation
2. Representation in matrix form

## Quaternions as a Covering space of $SO(3)$

1. The double arm trick (visualization with three.js?)