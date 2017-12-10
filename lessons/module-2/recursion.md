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

## What is recursion?

Recursion is an important programming technique in which a function _calls itself_.

While it can be used in many situations, it is most effective for solving problems involving iterative branching, such as fractal math, sorting, or traversing the nodes of complex or non-linear data structures (such as binary or prefix tries).

[This](https://www.sitepoint.com/recursion-functional-javascript/) is a good, introductory overview of recursion in JavaScript.

## The anatomy of a recursive function

Every recursive function (again, just a function that calls itself) must have these two pieces:

1. A simple **base case** (or cases): a terminating scenario that _does not use recursion_ to produce an answer
2. A set of rules that get all other cases closer toward the base case

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
function countdown(number) {
  // check our base case, if statement
  if (number < 0) {
    return;
  }
  
  console.log(number);
  
  // get closer to base case
  number--;
  
  // execute function again
  countdown(number)
}

countdown(3); // 3, 2, 1, 0
```

Or, using a while loop:

```
function countdown(number) {
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
function sum(array) {
  // base case
  if (!array.length) {
    return 0;
  }
  
  // get closer to base case
  let number = array.shift();
  
  return number + sum(array);
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
let power = 4;
let product = power(base, power)  // 2 to the 4th power

console.log(product);  // 16
```

### Exercise 5

Write a recursive function to determine if two different objects have the same properties and values.

```
const obj1 = { name: 'Avery', age: 7, faveColor: 'green' };
const obj2 = { name: 'Avery', age: 7, faveColor: 'green' };
const obj3 = { name: 'Jesse', age: 7, faveColor: 'orange' };

deepEqual( obj1, obj2 ); // true
deepEqual( obj1, obj3 ); // false
```

### Exercise 6

Flatten a nested object so that all the values stored in any array is returned in one array.

```
const groceryList = {
  produce: {
    fruit: ['apples', 'bananas', 'avocados'],
    vegetables: ['bell peppers', 'carrots'],
    herbs: ['basil', 'cilantro', 'parsley']
  },
  dairy: {
    milk: ['2 percent milk', 'soy milk'],
    cheese: ['cheddar', 'brie']
  },
  dryGoods: {
    canned: ['vegetable broth', 'diced tomatoes'],
    boxedOrBagged: ['angel hair pasta']
  },
  frozen: {
    vegetables: ['corn', 'peas', 'edamame'],
    desserts: ['ice cream sandwiches']
  }
}

flatten(groceryList);
// [
    'apples',
    'bananas',
    'avocados',
    'bell peppers',
    'carrots',
    'basil',
    'cilantro',
    'parsley',
    '2 percent milk',
    'soy milk',
    'cheddar',
    'brie',
    'vegetable broth',
    'diced tomatoes',
    'angel hair pasta',
    'corn',
    'peas',
    'edamame',
    'ice cream sandwiches'
   ]
```
