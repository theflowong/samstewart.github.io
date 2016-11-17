---
layout: post
date: 2016-11-15 17:12
categories: math life philosophy nonsense
---

Everyone must ask themselves, "how do I live my life" and I have been considering one potential perspective recently. While I don't fully subscribe to the viewpoint I will describe in this post, I think the connection to math and computer science is intriguing (disclaimer: speaking from personal experience I don't recommend making life choices based around math *or* computer science).


## Life as a Problem
If you view life as a problem to be solved, then one immediately sees connections with math and computer science. Namely, one can *live their life by decomposing the larger problem of life into smaller and smaller subproblems*. As I will discuss later, this is precisely the strategy employed in computer science and math. 

Deciding how to live one's life is the large problem. An example sub-problem is deciding where to live. In turn, sub-sub-problems include deciding what weather you prefer and deciding the size of the city. In turn, sub-sub-sub-problems include deciding what neighborhoods and what house to choose. One can break every task or problem down into sub-tasks until each task is trivial, solve those, and then recombine the solution.

Example first level sub-problems in life include:
1. What career you pursue
2. Whom  you marry
3. Where you live
4. Your spiritual beliefs
5. Your political beliefs

Of course, "solving" each of these problems is especially difficult since your environment is changing constantly: you must solve them in real-time.

## Parallels with Math
Math follows the same procedure: it decomposes hard problems into smaller problems by decomposing complicated *structures* into simpler *structures*. This is in contrast to computer science which decomposes decomposes hard problems into smaller problems by decomposing complicated *algorithms* into simpler *algorithms*.

As an example, consider the simple operation of multiplication. You wish to compute $15 \cdot 20$. It is a [general fact](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic) that every integer can be written as a product of primes. That is, every integer, no matter how complicated, can be *decomposed* into simpler multiplications of primes. In our example, we have
\\[
	15 = 5 \cdot 3, \; 20 = 2^2 \cdot 5
\\]

With this decomposition, multiplication becomes simple when we regroup conveniently
\\[
	15 \cdot 20 = 5 \cdot 3 \cdot 2^2 \cdot 5 = 3 \cdot (5 \cdot 2)^2.
\\]

We have now reduce the bigger problem of computing $15 \dot 20$ to the smaller problem of computing $(5 \cdot 2)^2$. This is straightforward for humans
\\[
	(5 \dot 2)^2 = 10^2
\\]

We can then *use* the result of this sub-problem to compute the solution to the full problem $5 \cdot 2$ and obtain
\\[
	15 \cdot 20 = 3 \cdot 10^2 = 300.
\\]

Note that this decomposition was a *structural* decomposition. We used something about the *structure* of integers (i.e. can be written as products of primes) to reduce the multiplication.

## Parallels with Computer Science
This *structural* decomposition contrasts the *procedural* decomposition in computer science. While they overlap, the perspective is different and is best seen through an example.

Consider the problem of sorting a list of numbers. The most naive method is called bubble sort and is quite simple.

1. Run through the list and swap any two adjacent elements that are out of order.
2. Repeat until every two adjacent elements are in order

We have decomposed the larger problem of sorting the list into the smaller problem of sorting only two elements. Then we iterate solutions to this smaller problem before recombining them into the large solution. 

The hidden assumption is that this algorithm actually sorts the list. Read [my article](the-symmetric-group) on the set of permutations to see why this is true.

## Conclusion
In the first mathematical example, we decomposed the *structure* of a number into prime powers to render the multiplication simpler. In contrast, in the second computer science example, we decomposed the *algorithm* for sorting into a smaller algorithm for sorting two elements. The distinction is nuanced, but mathematics tends to study the structures while computer science tends to study algorithms. Both fields seek to decompose the complicated into the simple, but they approach it differently. These different viewpoints can compliment each other. For example, a decomposition of the discrete Fourier transform matrix led to one of the most used algorithms in the world: the Fast Fourier Transform. Conversely, the bubble sort algorithm described above [proves that](the-symmetric-group) every permutation is simply a product of two-cycles. Mathematics and computer science are two fields







## Conclusion
