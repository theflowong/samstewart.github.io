---
layout: post
date: 2016-09-14 14:00
categories: functional-analysis pde-theory course-notes harmonic-analysis homework fall-2016
---

In finite dimensions, the Heine-Borel theorem tells us that [compact](compactness) sets are precisely those sets that are closed and bounded. In infinite dimensions, the situation is not so simple. In fact, [the unit ball is compact](detecing-dimension-with-spheres) precisely when a Hilbert space is finite dimensional. Despite being closed and bounded, the unit ball is never compact in infinite dimensional Hilbert spaces.

However, 

Indeed, this is exactly the Rellich-Kondrachev theorem. It states that the unit ball in $H^1[0,1]$ is compact when included into $L^2[0,1]$.

Based on [1] we'll consider a simple special case with $H^1[0,1]$ and $L^2[0,1]$. 

# Proof of Rellich-Kondrachev theorem
For finite dimensional spaces, we know that closedness and boundedness characterize compact sets. More generally, compact sets are thos that are complete and totally bounded. Totally bounded tells us that for any $\epsilon > 0$ we can find a finite collection of balls with radius $\epsilon$ that cover the original set.

In $\R^n$, boundness corresponds to totally bounded and closed corresponds to complete. Thus, we wish to show that the unit ball, when included into $L^2$ is complete and totally bounded. We know immediately it is complete since it is a closed subspace of $L^2$, which is complete. We only need to show that it is totally bounded.

Let $\epsilon > 0$. Then we want to find a finite covering of the unit ball $\norm{f}_{H^1} \leq 1$ with balls in $L^2$ of radius $\epsilon$. The point is that balls in $L^2$ are much larger than balls in $H^1$, so we need fewer of them. If two functions are close in $H^1$, then they are much closer in $L^2$. We will place the centers of our collection of balls at piecewise constant functions. Amazing, in the $L^2$ norm, every function in the $H^1$ unit ball is $\epsilon$-close to one of these finitely many centers.

{% comment %}
(schematic of H^1 unit ball in L^2 being covered by epsilon balls).
{% endcomment %}

The reason for this is simple: functions in $H^1$ both have bounded supremum (due to the [Sobolev embedding theorem](sobolev-embedding-theorems) and lie below their tangent line. This means they are well approximated by piecewise constant functions. In fact, we need only finitely many piecewise constant functions to get $\epsilon$-close to every $f$ in the unit ball.

Since $\abs{f} \leq 2$, then any approximate function has constants $c_k$ such that $\abs{c_k} \leq 2$. We have a finite cover of $D_2(0)$ in $\C$ by $\epsilon$-disks since $D_2(0)$ is compact.  Construct a piecwise constant function $F_for each such disk by defining $c 


# An application to Hilbert spaces

I learned in my harmonic analysis course that this general theorem implies something surprising about orthogonal bases for $L^2[0,1]$. Namely, no orthogonal basis can have uniformly bounded $L^2$ derivatives. As an example to keep in mind, consider the trig basis for $L^2$ consisting of $\sin(2\pi n x), \cos(2\pi nx)$.

{% include harmonic-hw-1-problem-1.html %}


1. Garrett, Paul. "Simplest Sobolev Imbedding and Rellich-Kondrachev Compactness." 2012. Web. Available at [http://www.math.umn.edu/~garrett/m/fun/simplest_cptness.pdf](http://www.math.umn.edu/~garrett/m/fun/simplest_cptness.pdf).


