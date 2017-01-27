---
layout: post
date: 2017-01-27 17:08
categories: math computer-science 
---

## The Size of the Infinite

Which is bigger, the integers $\Z$ or the lattice of integers points in the plane (call them) $\Z \times \Z = \Z^2$. Well, it depends (as always) on definitions. If you define "bigger". Intuitively, it feels as though $\Z^2$ should be far larger. Interestingly, $\Z$ and $\Z^2$ have the *same number of elements*.

One of the founders of modern set theory, George Cantor, realized this was a disconcerting conclusion:

> I realize that in this undertaking I place myself in a certain opposition to views widely held concerning the mathematical infinite and to opinions frequently defended on the nature of numbers.

The problem is that both sets have an *infinite* number of elements. If you take the first five numbers $1,2,3,4,5$ from $\Z$ and the set of points in the square of side-length $5$ from $\Z^2$, then clearly there will be more points in the square of side-length five. In fact, for any *finite* number, this will be true. Naturally this implies that $\Z^2$ is larger than $\Z$, right?

Wrong. There is a better definition of "has the same size." The issue with the last argument is that we chose a *particular* way to list the points in $\Z^2$. Our argument should not depend on such an arbitrary choice. 

Instead, we will say that two sets $X$ and $Y$ have the same size when you can find a map $\phi$ between them such that $\phi$ hits each element in $Y$ exactly once. In other words, there is a one-to-one correspondence between elements of $X$ and elements of $Y$.

If our original claim that $\Z$ and $\Z^2$ is true, then we should be able to find such a map between $X = \Z$ and $Y = \Z^2$. 

## Array Indexing
To find such a map, we turn to computer science. Recently, I was working on a project in JavaScript where I need to store and access a 2D array of numbers. Typically, one can use the notation

	myArray[1][0] = 2

to set the entry in row 1 and column 0 to 2. We can imagine the array indices as elements of $\Z^2$, pairs of points that determine the value of myArray.

But computer memory is actually just one long list of memory slots. So how does the computer store myArray? This is equivalent to asking how we can convert a pair of indices (e.g. the above examples was $[1, 0]$) to a single index. This conversion should have some nice properties. Namely, it should
1. Never send two different pairs to the same index. For example, we shouldn't send both $[1, 0]$ and $[3,4]$ to 1.
2. For any single index $i$, there should be a pair $[x, y]$ that gets sent to it.

Wait a minute, those are exactly the conditions on the map $\phi$ between $X = \Z^2$ and $Y = \Z$. In other words, if we can find a conversion between two- and one-dimensional array indices, we will have solved two problems: how to convert a 2D array into a 1D array in memory, and how to map $\Z^2$ to $\Z$ to show they are the same size. 

How do we describe this map $\phi$?

The formula is quite simple. Given a coordinate pair $[i, j]$ we can convert them to a single index $k$ via

	k = i * matrixSize + j

How do we know this doesn't assign two different coordinates to the same index? We can find an explicit formula to convert *back* from a single index $k$ to a coordinate pair $[i, j]$. If we mod $k$ by matrixSize, then

	k mod matrixSize = (i * matrixSize + j) mod matrixSize = (i * matrixWidth) mod matrixWidth + j mod matrixWidth = 0 + j mod matrixWidth = j

To recover i, we can divide by matrixSize and then round down since j / matrixSize < 1.

	floor(k / matrixSize) = floor(i + j / matrixSize) = i.

We have found a map between $[i, j]$ and $k$ that is one-to-one. This proves that $\Z$ is the same size as $\Z^2$ and also demonstrates how to store a 2D array in memory as a 1D array.