---
title: Recursion
tags: javascript, recursion
author: Nathaniel Foster
module: 2
---

# Recursion

[Lesson slides](https://docs.google.com/presentation/d/1YBIDg5euXLlPjwS3e4H_GpBMAlJfon1AlhC8vDOBZes/)

### Learning Goals

- Understand the concept of recursion
- Be able to solve problems using recursion
- Understand the limitations of recursion in JS

## Vocab

- `Recursive Function` a function that calls itself
- `Base Case` the case where inputs produce a result without recursion
- `Recursive Case` the case where inputs produce a result with recursion

## What is recursion?

Recursion is an important programming technique in which a function _calls itself_.

While it can be used in many situations, it is most effective for solving problems involving iterative branching, such as fractal math, sorting, or traversing the nodes of complex or non-linear data structures (such as binary or prefix tries).

[This](https://www.sitepoint.com/recursion-functional-javascript/) is a good, introductory overview of recursion in JavaScript.

## The anatomy of a recursive function

Every recursive function (again, just a function that calls itself) must have these two pieces:

1. A simple **base case** (or cases): a terminating scenario that _does not use recursion_ to produce an answer
2. A **recursive case**: A set of instructions, moving closer towards the base case, that end in a call to the same function

## Exercises

The best way to start understanding recursion is to just try doing it!

### Exercise 1

Let's write a function that counts down to zero from a number we'll pass in as an argument.

```
// create a function which takes a number and 
// recursively calls itself to log each number down to zero

// e.g.

countdown( 3 );

// 3
// 2
// 1
// 0
```

Try solving this using an if statement, and then try solving it using a [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)!

**Solution**:

```
const countdown = number => {
  // check our base case, if statement
  if (!number) {
    return 0;
  }
  
  console.log(number);
  
  // execute function again minus 1
  countdown(number - 1)
}

countdown(3); // 3, 2, 1, 0
```

Or, using a while loop:

```
const countdown = number => {
  // condition of while loop serves as base case
  while (number >= 0) {
  
    console.log(number);
    
    // get closer to base case
    number--;
  }
  
}

countdown(3); // 3, 2, 1, 0
```

Once you've solved it, try changing the function so that instead of logging each number to the console, it creates an array for us.

```
// [ 3, 2, 1, 0 ]
```

### Exercise 2

Create a function that takes in an argument of an array of numbers and adds them together.

```
// create a function which takes an array of numbers and 
// recursively calls itself to sum an array of numbers

// e.g.

let numbers = [ 1, 2, 3, 4 ];

let total = sum( numbers );

console.log(total); // 10
```

One of the most basic patterns of recursion is when you can reduce a problem to a smaller one and then keep reducing until you can't do it anymore. This is also known as natural recursion.

It can be helpful to break down what each step of this problem looks like. Here's one way to visualize the call stack:

![visualization of the recursive call stack](https://i.imgur.com/Ly55ggk.png)

**Solution**:

```
const sum = nums => {
  // base case
  if (!nums.length) {
    return 0;
  }
  
  // get closer to base case
  let number = nums.shift();
  
  return number + sum(nums);
}
```

### Exercise 3

Reverse a string.

```
// create a function which takes a string of characters and
// recursively calls itself to reverse the string

// e.g.

let reversedString = reverse('Ariel')

console.log(reversedString); // leirA
```

### Exercise 4

Calculate a number to a specific power.

```
// create a function which takes a number and an exponent and
// recursively calls itself to calculate the product

// e.g.
let base = 2;
let exponent = 4;
let product = power(base, exponent)  // 2 to the 4th power

console.log(product);  // 16
```

### Exercise 5

The Collatz conjecture applies to positive numbers and speculates that is alway possible to `get back to 1` if you follow these steps:

- If `n` is 1, stop.
- Otherwise, if `n` is even, repeat this process on `n/2`
- Otherwise, if `n` is odd, repeat this process on `3n + 1`

Write a recursive function that calculates how many steps it takes to get to 1

n | collatz(n) |Steps
--- | :---: | --- 
2 | 1 | 2 -> 1 
3 | 7 | 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
4 | 2 | 4 -> 2 -> 1
5 | 5 | 5 -> 16 -> 8 -> 4 -> 2 -> 1
6 | 8 | 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1


### Exercise 6

In mathematics, the factorial of a non-negative integer is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 120.

```js
5 x 4 x 3 x 2 x 1 = 120
```

Write a JavaScript program to calculate the factorial of a number.
