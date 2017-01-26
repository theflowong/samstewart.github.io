---
layout: post
date: 2016-11-02 16:24
categories: math pure-math applied-math problem-solving
---

Thesis: canonical choices in pure math because somehow invariant of the problem at hand. Dependence on real world concerns like efficiency, etc., forces many different choices.

Einstein is quoted as telling a pure mathematician that "I admire the elegance of your method of computation; it must be nice to ride through these fields upon the horse of true mathematics while the like of us have to make our way laboriously on foot." Indeed, this elegance appears to be a priviledge of pure math. But why are applied problems (e.g. in physics, computer science, etc.) "less elegant" or "dirtier"?

Having spent time in both the pure and applied settings, I have concluded that a *fundamental difference between pure and applied problems is the number of **choices** one must make when solving the problem.* By choices, I mean arbitrary decisions that the problem solver must make when attacking the problem. These choices might include a particular coordinate system, a data structure, a set of units, or model parameters. The more choices, the more complicated the problem becomes. Consider the simple example of modeling a population growth. Mathematically, we have the beautifully simple differential equation
\[
	\frac{dP}{dt} = \frac{ r P (K - P) }{ K }
\]
that describes the population growth ($r$ is the survival rate and $K$ the carrying capacity).

However, to predict the growth in the real world, one must make a series of complicated choices. What units do we use? What discretization do we use for the numerical ODE solver? How long do we run the simulation? None of these choices are important at the level of the mathematical model, but to produce actual results, they become crucial.

This is a general feature of pure math. There are relatively few choices once one has found the "right" definition. There is a kind of "naturalness" or "inevitability" (one might almost say "morality" [1]) about theorems because the choice of definition *almost* uniquely determines the proofs. Of course, there are niggling decisions to be made, such as sign conventions on metrics, etc., but the general theme is that mathematicians search for "coordinate invariant" theories: ideas that hold independently of specific coordinates. The elegance and simplicity in math is precisely due to the few number of canonical choices that one must make.

Of course, this works in pure mathematics because the coin of the real is *ideas* not *implementation*. The tactic is to find the "coordinate invariant idea" with the goal of generalizing from one phenomenon to many. Take as an example the idea of a group. Yes, the real numbers form a group, but so do invertible matrices, the complex numbers, the integers, etc. Since the definition of a group includes so many specific applications, one can expect that the theorems and proofs similarly encompass many results. New students often assume that higher levels of abstraction in math means *more complexity*, while in fact the opposite is true. Climbing up the ladder of abstraction enables us to see the forest for the trees and realize the *important* choices to be made in the theory. In abstract algebra, it is unimportant for many results whether we work over the integers or rotations of a square because both objects are special cases of cyclic groups. After some thought, one realizes that the key *choice* or *distinction* between these two objects is that the integers are infinite, while the rotations are finite. This *distinction* is not the surface level difference: after all, rotating a square appears to be quite different from adding numbers together. And yet, this is the power of pure math: it enables us to see many objects and results as a single unified choice. There is thus a serious "reduction of choices" when constructing abstractions.

Contrast this with applied (though still heavily mathematical) fields like physics and computer science. Suddenly, we cannot work at the same level of abstraction. In computer science, for example, using integers instead of rational numbers has a tremendous performance impact. Likewise, a matrix of size 3x3 is dramatically different than a matrix of size $10^5 \times 10^5$ even though they are mathematically indistinguishable.

In physics, certain coordinates make the problem tractable while the wrong choice of coordinates can make the problem disastrously complicated. One can write down the mathematical equations of motion for every Hamiltonian system in the language of differential geometry
\[
	i_{X_H} \omega = -dH
\]
without appealing to coordinates, so the theory is quite simple. However, performing computations requires a particular *choice* of coordinates and correspondingly messier computations.

Similar problems occur in [discrete differential geometry](https://www.cs.cmu.edu/~kmcrane/Projects/DGPDEC/): ideas like curvature that have a canonical definition in *pure* become ambiguous when one transfers them to the discrete setting. Factors such as performance, simplicity of implementation, and maintainability surface when working on a computer.

Applied problems require many arbitrary choices, while pure math problems don't. This directly affects how "complicated" the problem becomes. Conceptually, pure math is more abstract, but computationally it is simpler, while applied solutions are conceptually simpler, but computationally more difficult. The issue is essentially the number of choices one must make.