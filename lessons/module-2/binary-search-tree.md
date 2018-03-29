---
title: Binary Search Tree
length:
tags: javascript, js, data structure
module: 2
---

### Goals

By the end of this lesson, you will:

* Understand the general concept of a binary search tree
* Be familiar with why binary search trees are used and what purpose they serve
* Know how to interact with a tree the following ways:
  * Inserting Values
  * Findind A Value
  * Depth First vs Breadth First Search

## Vocab

  - `Data Structure` A way of structuring data, usually so that it can be used by an algorithm
  - `Algorithm` A set of rules and processes for solving a problem

## Data Structures

A common theme in computer programming is deciding how to store and organize data within an application. The particular approach used to organize the data is called a "data structure". These can come in many shapes and sizes - think an array, or an object. They can also come in more complex forms like a stack, linked list, or in today's case, a binary search tree.

## Definition: What Is a Binary Search Tree

A Binary Search Tree (BST from here on out) is a method of organizing data in a series of connected, sorted nodes. This type of structure is particularly good at inserting, finding, and moving around data in an effecient, cheap way.

Let's take a look at what a small BST might look like:

```js
        10
      /    \
    5        12
  /   \         \
3       7         19
       /
    6
```

## Dig Deeper: Why Use A BST?
Before we continue to look at this structure, let's talk about what we mean by "cheap". Think about what an array looks like:

```js
let x = [2, 4, 6, 7];
```

This data structure works really well if you need to set aside space for memory once, and then access it many times. But what if you need to modify this array, for example by adding the number 3 in the correct spot?

```js
  let x = [2, 3, 4, 6, 7];
```

We won't go into the details too much, but because all of the data in this array is stored in the same location in memory, it ultimately means that you have to rewrite the entire array which will then take up a bigger chunk of data. What if you wanted to add 1,000,000 randomly generated values? You'd need a large chunk of memory to store such a big collection of numbers and continuously rewrite that entire array of data.

A BST, on the other hand, is structured with a series of `nodes`. Each node is an independent piece of data, with its own location in memory. This means that however many nodes there are, each one can have its own address without affecting the entire data structure.

## BST Rules
There are a few main rules:

1. Each BST has a root node (`10` in our example above), which contains data and has no parent nodes.
2. Each node has zero to two (`two` hence the keyword `binary` in this title) child nodes.
3. Each child node linked to the left (`5`) has a data value less than or equal to the parent node.
4. Each child node linked to the right (`12`) has a data value greater than the parent node.

What's sweet about this structure is that if an algorithm is trying to insert or find a particular node in the tree, you can automatically rule out large chunks of data just by knowing the value of a few nodes.  Let's look at some examples.

## Building A Binary Search Tree (Insertion)

Let's say we want to store the following list of numbers in a BST: [10, 5, 12, 7, 3, 19, 6]. Let's also imagine that we have a function, `insert(node)` that adds these nodes into our tree.

The first value in our list is `10`. Since it is the first value loaded into our tree, `10` is now our `root node`.

`insert(10)`

```js
        10
```

The next number in our list is `5`. We call `insert(5)`, 5 is less than 10 so it checks for any additional nodes to the *left* of `10`. It finds none, and is inserted as a child node to the *left* of our root node of `10`.

```js
        10
      /
    5
```

The next number in our list is `12`. We call `insert(12)`, 12 is more than 10 so it checks for any additonal nodes to *right* of `10`, finds none, and is inserted there as a child node.

```js
        10
      /    \
    5        12
```

Next we have `7`. This is where things get crazy. When we call `insert(7)`, we start at our root node of `10`. `7` is less than `10` so it moves to the left side of the tree and can now completely ignore the entire right side of our tree. The next value it hits is `5`. `5` is less than `7`, so it moves to the right of the node with a value of `5`. There are no more nodes to check, so that's where it stops.

```js
        10
      /    \
    5        12
      \
        7
```

Let's keep going:

`insert(3)`

```js
        10
      /    \
    5        12
  /   \
3       7
```

`insert(19)`

```js
        10
      /    \
    5        12
  /   \         \
3       7         19
```

And last, but  not least, `insert(6)`. This node is less than `10`, so we move left. There is already a child node (`5`) so we compare `5` to `6`, `6` is greater than `5` so we move down to the right child node. A right child node already exists (`7`) so we compare the two. `7` is greater than `6`, so we move to the left child node of `7`. There is no left child node so this is where `6` will land. Our final tree looks like this:

```js
        10
      /    \
    5        12
  /   \         \
3       7         19
       /
      6
```
<!-- 
## Tree Traversal

Let's say we want to visit every node of this tree and print the values from lowest value to highest. What we'll need to do this is something called a "recursive algorithm". We need an algorithm that repetitively (recursively) checks and rechecks certain parts of the tree based on the conditions we are looking for.

Based on our rules above, we know that child nodes to the left of a parent node are less than their parent. So our first goal is to find the farthest left node in our tree. Take a look at just the left most branch of our tree from above. Knowing how our binary tree is structured means that the farthest and deepest node down and to the left will be our lowest value.

```js
        10
      /
    5
  /
3
```

We end up with a value of 3, which if we look back at our list of numbers (`[10, 5, 12, 7, 3, 19, 6]`) we can confirm that our tree is correct and this is our lowest value.

Sorted Values: `[3]`

To find the next lowest value, we move up to the next parent node, which here is `5`, which is automatically our next lowest value.

Sorted Values: `[3, 5]`

We then need to look for any children to the right of `5`. Remember our complete tree looks like this:

```js
        10
      /    \
    5        12
  /   \         \
3       7         19
       /
      6
```

`5` has a child to the right with a value of `7`. We move down to `7`, but before we can print `7` we need to check for any values to the left of `7`. There is one child node left of `7` with a value of `6`, so we move to that node. Once at `6` we need to do another check for any child nodes to the left. There are none, so we print `6`.

Sorted Values: `[3, 5, 6]`

Moving back up to `7` we print that value.

Sorted Values: `[3, 5, 6, 7`]

There are no right child nodes, so we move back up to `5`. We have no exhausted all child nodes from `5`, so we can move up to `10` and print that value.

Sorted Values: `[3, 5, 6, 7, 10]`.

We know we've already covered the left side of the tree, so we can check for a right child node of `10`. A child node exists, so we move down and see `12`. Before printing, check for any left child nodes - there are none, so we can print `12`.

Sorted Values: `[3, 5, 6, 7, 10, 12]`

Moving on to the right we see `19`. Before printing, check for any left child nodes. There are none, so we print `19`.

Sorted Values `[3, 5, 6, 7, 10, 12, 19]`

Finally we check for any right child nodes. There are none, so our sorting is complete. -->

## Finding Values in a BST

Since our information is stored in a sorted order, this structure is incredibly useful for finding specific values. Assuming our tree is relatively balanced, we can automatically rule out almost half of the tree just from our root node. Let's talk about what this looks like.

Let's imagine we have a function called `find(node)` that takes a value. We want to find the value `7` in our tree. Keep in mind that the values of these nodes act like a `key`. Imagine the node with a key of `7` has an important value of some kind that we want access to.

Starting off we know our root node has a value of `10`. We know that `7` is less than (and not equal to) `10`. This means we can now completely ignore the entire right side of `10` and all child nodes attached to it.

Our original tree:

```js
        10
      /    \
    5        12
  /   \         \
3       7         19
       /
      6
```

Our tree after we rule out all right branches of `10`:

```js
       10
      /
    5
  /   \
3       7
       /
      6
```

Everytime we search for a number we start at the root. We've already determined it's less than `10` so we move left. The next node we encounter has a value of `5`. We are not looking for `5` and `7` is greater than 5 so we can rule out any child nodes to the left of `5`.

```js
        10
      /
   [5]
     \
      7
```

We just need to move to the right of `5`. BAM. Found our node.

```js
        10
      /    \
    5        12
  /   \         \
3      [7]        19
```

Let's pretend for a second that we were looking for `8`. We would see that `7` is not `8` and we would want to check the right node. At this point we would see that there is no right child node so we would know that `8` is not in our BST.

## Search Methods

There are two main methods for traversing around a tree like structure:
  1. **Depth First Search**
  2. **Breadth First Search**

### Depth First Search

This approach starts at the root of our tree and moves along a single branch all the way until it reaches the bottom most node.  In our tree above, this pattern would look something like this:

First Round: `[10, 5, 3]`
Second Round: `[7, 6]`
Third Round: `[12, 19]`

### Breadth First Search

This approach moves laterally along tree branches checking each layer before moving deeper down a branch. Searching the same tree using this method might look something like this:

First Found: `[10]`
Second Round: `[5, 12]`
Third Round: `[3, 7, 19]`
Fourth Round: `[6]`

## Checks For Understanding

* What is a Binary Search Tree?
* What rules must a BST follow?

### BST in Code

We will be implementing a BST using this [repo](https://github.com/turingschool-examples/binary-search-tree). Use the tests to build out a few methods to navigate around a Binary Search Tree.

## Resources

* [Hacker Noon Binary Search Tree Explanation](https://hackernoon.com/data-structures-in-javascript-pt-1-binary-search-trees-2c231cf2c8e1)
* [Cheesy but well explained BST video](https://www.youtube.com/watch?v=ZNH0MuQ51m4)
* [Binary Search Tree Video](https://www.youtube.com/watch?time_continue=10&v=5cU1ILGy6dM)
