---
layout: post
date: 2017-01-23 22:10
categories: math advice problem-solving
---

Math and programming enable us to handle millions of scenarios in a few lines via the power of abstraction. Unfortunately, this power comes at a cost: we often rely too heavily on the symbolism and disregard common-sense checks.

As an example, it is easy to forget if $\tan'(x) = \sec^2(x)$ or if $\tan(x) = \sec(x)\tan(x)$. To recover the derivative of tangent, one might apply the fully symbolic tools of calculus and compute the derivatives explicitly. This is both mindless and a waste of valuable effort. One could have instead simply checked the values at $x = 0$ of the two potential derivatives $\sec^2(x)$ and $\sec(x)\tan(x)$ and then examined the graph of $\tan(x). 

Mathematicians often opt for the former symbolic approach because we are used to proving **everything**. In fact, we rely on the formal framework like a crutch and avoid checking *edge cases*, *scalings*, and *units*. My friends in physics and engineering are comfortable with quick checks, back of the envelope calculations, and intuition, but we mathematicians avoid computation like the plague. 

As Dr. Mahajan notes in [1], "rigor leads to rigor mortis." Mathematicians are lazy, Although important for abstracting complicated computations and subsuming special cases, the laziness of mathematicians often prevents us from making guesses, estimates, and checking simple cases.

It's more than laziness, I think. As adults who take ourselves far too seriously, we are afraid of "breaking the rules," making a mathematical "faux pas," or generally "making a mistake." We are afraid to play. Relying on the symbolic formalism re-assures us that we are not doing anything stupid. After all, covering a white board in Greek letters could not possibly lead to a false conclusion.

Math is only a *tool* for finding the truth, it is not *the* truth. It is useful only to formalize and communicate our intuitive thoughts; we need to provide the examples and special cases ourselves. 

Math is best learned *by example*. Before learning the theorem, learn a few good examples and play with them. Try edge cases, set values to zero, and make small changes. This is crucial process of *gaining* intuition. Think *concretely* before thinking *abstractly*.

The same perspective applies to programming. Programmers hate working out a few explicit examples, but stepping through your algorithm with $n = 2$, or printing out your entire data structure when $n = 3$ can eliminate many bugs immediately. After all, if your algorithm works when $n$ is a million, it must work when $n$ is two. Save yourself time and choose explicit values instead of re-reading your source code. When writing delicate scientific code, I have come to appreciate this approach. Instead of feeding my system test data immediately, I hand-code a few simple base cases and check the logic at this simple level. I catch a disturbing number of bugs, every time.

Personally, I feel abstract algebra is the worst offender in terms of abstraction obscuring common sense. However, analysis has its share of over-reliance on formalism with the (probably apocryphal) story of the graduate student who constructed a beautiful theory around Holder continuous functions with $\alpha > 1$ only to discover that only the constant functions satisfied his definition!

The exhortation is thus: "don't be lazy!" Plug in stupid values, setup silly test cases, and check the units. Remember, math is nothing but a well-organized collection of examples.

1. Mahajan, S. (2010). *Street-fighting mathematics : The art of educated guessing and opportunistic problem solving.* Cambridge, Mass.: MIT Press.
