---
title: Binary Search Tree
length:
tags: javascript, js, data structure
---


### Description

A Binary Search Tree (BST) is a great way to store information in a sorted order. They are great for fast, efficient information storage and retrieval.

A binary search tree works by connecting a series of nodes together. 

Each node has three properties
- An element of data
- a link to a left node. Each node to the left has a data value less than or equal to this node's data value.
- a link to a right node. Each node to the right has a data value greater than this node's data value.

The first node is the root of the tree.

### Insert Example

Lets say we want to store the following list of numbers in a BST. [10, 5, 12, 7, 3, 19]

We would create our BST as follows.

`insert(10)`

Since 10 is the first thing inserted into our tree it becomes the root of the tree.

```
        10
```

`insert(5)` 5 is less than 10 so we add it to the left.

```
        10
      /
    5
```

`insert(12)` 12 is more than 10 so we add it to the right.

```
        10
      /    \
    5        12
```

`insert(7)`

```
        10
      /    \
    5        12
      \
        7
```

`insert(3)`

```
        10
      /    \
    5        12
  /   \
3       7
```

`insert(19)`

```
        10
      /    \
    5        12
  /   \         \
3       7         19
```


### Find Example

Since our information is stored in a sorted order, it becomes very quick to find an individual number.

Everytime we search for a number we start at the root. If the value is not equal to our current node we need to determine which direction we need to move through our tree. If our value is less than our current node value we need to check the left node. 
If our value is greater than our current node value we need to check the right node.

`find(7)` Since our root does not have a value of 7 we need to check one of the children nodes. 7 is less than 10 so we need to check the left node.

```
       [10]
      /    \
    5        12
  /   \         \
3       7         19
```

We are not looking for 5 and 7 is greater than 5 so we need to check the right node.

```
        10
      /    \
   [5]       12
  /   \         \
3       7         19
```

Yay we found 7! 

```
        10
      /    \
    5        12
  /   \         \
3      [7]        19
```

Let's pretend for a second that we were lloking for 8. We would see that 7 is not 8 and we would want to check the right node. At this point we would see that there is no right node so we would know that 8 is not in our BST.

### In Class Code Along

We will be implementing a BST using this [repo](https://github.com/turingschool-examples/tdd/tree/binaryTree). We will go through and make each test pass.
