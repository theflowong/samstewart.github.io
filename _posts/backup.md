Every parent fears the question, `where do babies come from?`  and likewise many students fear the question `where does the Fourier transform come from?`. In either case, the fear comes from having to generate complicated answers to simple phenomena. The wideranging usefulness of the Fourier transform gives the impression that it must also therefore be  `deep` or complicated. In actuality, [the most useful tools tend to be the most simple](why-are-simple-things-useful), and the Fourier transform is no exception. In this article, I want to show you the birthplace of the Fourier transform and the beautiful geometry behind it.

Just one might explain to a child that storks bring babies, you might also have learned that the Fourier transform of a function $$f : S^1 \to \C$$ is given by$$$$
$$
	\hat{f}_k = \frac{1}{2\pi} \int_S^1 f(\theta) e^{-i \theta n} d\theta
	\label{eq:periodic_FT}
$$
And like the stork explanation, this deux ex machina explanation really does nothing beyond establish existence. All this tells us is that there is a mapping from $$L^2$$ to $$\ell^2$$.


<!-- article idea: math is taught incorrectly because the artificial division of facts can really mess a kid up -->
Any good answer offers first a <em>why</em>, and then a <em>how</em>. For <a href="why_math_is_taught_incorrectly.html">some reason</a>, most mathematical explanations offer only the <em>how</em>. The description in $$\ref{eq:periodic_FT}$$ is merely a tool for computation. Where it comes from and why it works is far more beautiful. 

## Symmetries and Decompositions

Often <a href="the_usefulness_and_limitations_of_abstraction.html">telling a fable</a> gives more insight than simply stating the precise events of a story. In the same way, the story of the Fourier transform starts in a more general story, namely, the connection between symmetries and decomposition.

In the example of the plane, the objects in are vector space are quite simple. They are simply pairs of real numbers. 


Thus far, we have decomposed linear operators on the plane, through symmetries of the plane. The horizontal and vertical symmetry of the plane produced two commuting operators, that in the proper coordinates, simultaneously decomposed into scaling operators. In turn, we were able to decompose each vector in this coordinate system. But this example is a bit boring. After all, we already know how to decompose vectors in the plane! For each $$v = (v_1,v_2)$$, simply write
$$
v = e_1 v_1 + e_2 v_2
$$
where $$e_1 = (1, 0), e_2 = (0, 1)$$. The important point is that this decomposition is possible <em>because the plane is symmetric in the directions $$e_1, e_2$$</em>. 



This process of using symmetries of one space to decompose another space that depends on the first is especially useful in more complicated spaces. Recall that the Fourier transform acts on spaces more complicated than the plane. To build this space that the Fourier transform acts on, we add a level of resolution (see <a href="http://worrydream.com/LadderOfAbstraction/">moving up and down the ladder of abstraction</a>) and view <em>functions</em> as vectors. These functions eat elements in $$S^1$$ and spit out elements in $$\C$$,  we'll add the obvious constraint that these vectors should have finite length, or equivalently, finite energy. Mathematically, this becomes 
$$
\int_{S^1} \abs{f}^2 dz &lt; \infty.
$$
We'll call this new vector space $$L^2(S^1)$$ (the $$L$$ stands for Lebesgue, they guy who came up with the technical details of this space). 



This layer of resolution has added some details that were not present when we were only considering vectors in the plane. The plane is two dimensional, one only needs two coordinates to describe each vector. But there are far more ways to pair elements of $$S^1$$ with $$\C$$, that is, there are far more functions $$f : S^1 \to \C$$. In fact, as we'll see, the space is so large that it is infinite dimensional. In other words, it takes infinitely many ` points ` to describe every vector $$f \in L^2(S^1)$$. 



So many directions mean more symmetries than in the plane. Let's try to find some of these symmetries by following the process of the plane. Instead of looking at symmetries of $$\R^2$$, we'll look at symmetries of $$S^1$$ since the elements of the vector space $$L^2(S^1)$$ depend on $$S^1$$. We'll then use these symmetries to produce an infinite family of commuting operators that act on $$L^2(S^1)$$ (instead of simply two operators), and we'll discover that there is a coordinate system where these operators act as multiplication. More importantly, every $$f \in L^2(S^1)$$ can be decomposed into directions (now an infinite number) in this new coordinate system. Thus, the symmetries of $$S^1$$, become symmetries of $$L^2(S^1)$$ and in fact decompose the space. How does all this nonsense relate to the Fourier transform? Read on and see.



Hence, viewing $$S^1$$ as a Lie group that acts on itself as a manifold, we obtain the rotational symmetries. As a group, $$S^1$$ embedded in the complex plane acts on itself via multiplication. That is, if $$z_0 \in S^1$$, $$z \mapsto z_0 \cdot z$$ is a group action on $$S^1$$. The following diagram shows this action

<!-- diagram allowing user to mouse over points on $$S^1$$ and see the complex rotation (put a single arrow pointing to (1, 0)) so that the user can see the ortation -->

This action on $$S^1$$ becomes an action on $$L^2(S^1)$$ when we associate an operator $$T_{z_0}$$ with every element $$z_0 \in S^1$$ via
$$
T_{z_0} f = f(z_0 \cdot z).
$$
<div class="figure">
<!-- perspective of symmetry as permuting basis elements? i.e. Fourier modes -->
</div>

An action on the domain of the function $$f$$ thus becomes an action on $$L^2(S^1)$$. It is a general fact from manifold theory that the integral is symmetry invariant. Thus
$$
\int_{S^1} \abs{f(z)}^2 dz = \int_{S^1} \abs{f(z_0 \cdot z)} dz = \int_{S^1} \abs{T_{z_0} f}^2 dz
$$
so $$T_{z_0}$$ is a <em>unitary</em> operator. That is, $$T_{z_0}$$ does not stretch distances so $$\norm{T_{z_0}} = 1$$. In general, we know that unitary operators are normal, so we can apply the spectral theorem to decompose $$T_{z_0}$$ into a combination of scaling operators.

<!-- why can't we decompose the space with just one operator? -->
Moreover, for two $$z_0, z_1 \in S^1$$, the two corresponding operators $$T_{z_0}, T_{z_1}$$ commute since
$$
T_{z_0} \circ T_{z_1} f = T_{z_0} f(z_1 z) = f(z_0 z_1 z) = f(z_1 z_0 z) = T_{z_1} f(z_0 z) = T_{z_1} T_{z_0} f
$$
In other words, the fact that the action on $$S^1$$ commutes forces the induced action on $$L^2(S^1)$$ to commute. We know from general theory, that commuting operators are simultaneously diagonalizable, so like the case in the plane, we will decompose all $$T_{z_0}$$ and obtain a new coordinate system on $$L^2(S^1)$$.

The spectral theorem tells us that for a normal operator $$T$$, there exists a unitary operator $$U$$ such that
$$
UTU^{-1} = D 
$$
where $$D$$ is a multiplication operator that acts like $$D \, f = \phi(x) f(x)$$. Intuitively, rotating the coordinate system (even if it's infinite dimensional) converts $$T$$ into an operator that acts by multiplication. In our example, we know such a $$U$$ exists because we have a commuting family of normal operators that we generated from the symmetries of $$S^1$$. 

How does this relate to the Fourier transform? Amazingly, the Fourier transform is nothing by the unitary operator $$U$$ in the spectral theorem. The Fourier transform simply writes a function $$f \in L^2(S^1)$$ in a new coordinate system where the $$T_{z_0}$$ operators act by multiplication. The new  coordinate are the functions $$f(z) = z^n = \cos(n \theta) + i \sin(n \theta)$$, the usual Fourier basis. The main point is that such a basis exists precisely because symmetries on $$S^1$$ lead to normal operators $$T_{z_0}$$ which commute with each other.

In example of the plane, the objects in our vector
So can we find some symmetries of the space $$L^2(S^1)$$.

</body>
</html>
