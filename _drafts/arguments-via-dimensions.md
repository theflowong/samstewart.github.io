---
layout: post
date: 2016-12-27 14:42
categories: math life fundamental-ideas
---

# Why Linear Algebra and Jazz Piano are the Same Thing

Linear algebra sounds disturbingly like ``theoretical math'' that mere mortals cannot fathom. Often saved for upper-level courses and presented with a strange obsession with matrices, the subject can appear abstract and obtuse.

In fact, linear algebra is quite simple and it is this simplicity that renders it so useful. From chemistry, to physics, to computer science, linear algebra is perhaps the deepest of all the branches of math. [And this is no accident!](everything-in-math-is-localization).

Linear algebra studies two kinds of objects:
1. Vector spaces
2. Maps between vector spaces

Already this sounds uncomfortably abstract, but we're about to make it concrete.

Jazz piano will turn out to be a fantastic example of the first object: a vector space. 

### Our Friend the Vector Space

Though the [definition](https://en.wikipedia.org/wiki/Vector_space) of a vector space is abstract, a vector space captures a really simple (and really ubiquitous) idea: objects that can be decomposed into finitely many "directions" or "coordinates".

An immediate example: the plane $\R^2$.

(diagram of $\R^2$)

One can describe every point in the plane with two coordinates $x, y$. This is equivalent to saying that every point can be decomposed into its components along two lines, namely the $y$-axis and the $x$-axis.

(diagram of a point being projected onto both axes)

We call these lines collectively, i.e. the $y$-axis and the $x$-axis, the basis of the vector space. The basis simply describes the set of possible directions one can move. For the plane, there are only finitely many such fundamental directions (vertical and horizontal). Of course in three dimensions, we have three possible directions to move (horizontal, vertical, and in / out). Are there really spaces with infinitely many dimensions? Yes, [but that's another story](what-breaks-down-from-finite-to-infinite?).

Why can we describe jazz with the concept of a vector space? In Western music, we can decompose every song into a series of twelve notes: C C# D D# E E# F F# G G# A# B. We all know that a song contains far more than twelve notes, so where are all these extra notes?

The answer lies in viewing the space of possible notes as a vector space. Then the fundamental "directions" or "lines" are the twelve different directions. If you play C an octave higher (skip twelve notes) then you are moving "two steps" in the C direction. If you play an F# three octaves higher 


## Changing Coordinates

In the jazz piano situation, changing *coordinates* corresponds to changing *keys*. If we change from the key of C to the key of F, then the entire major scale shifts from C major to F major. We have changed 


Measurements in science follow a similar pattern. We have fundamental dimensions, or "directions"

Bases:
1. Music (key as a basis)
2. Science: units as a basis
3. Frequency as a basis
4. Connection to representation theory?
5. Taylor polynomials as a basis
6. Bases for numbers
7. Units in science as a basis
8. Variable names
9. Culture
10. Language

Right coordinates = right perspective on the problem

Key quantities = coordinate invariant

No canonical coordinates

Series of choices => outcome

Want system to easily change when we change choice of coordinates.

Design structures that are flexible to change of coordinates.

Choosing right coordinates to decouple complicated dependence.