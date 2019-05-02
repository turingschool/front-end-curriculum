---
title: Array Prototypes - Iteration Methods
tags: javascript, iterator, prototype, arrays
module: 2
---

## Lesson Goals

Students should be able to:

* Articulate the difference between arrays and objects, and understand when you would use each one
* Define what a prototype method is and what it allows you to do
* List several prototype methods for both arrays and objects
* Understand how to manipulate arrays and objects, and the use-cases for different prototype methods

## Arrays & Objects

Arrays and objects are the more complex data types that are available to us in JavaScript. What are all the data types you know of?

**In Your Notebook**
Write down everything you know about arrays. Everything you know about objects. Think about when you've used them in the past, where you've seen them, and what you've done with them. What do people mean with they say that "everything is an object" in JavaScript?

An array is essentially a comma-separated list of related values. For example:

```js
let pizzaToppings = ['onions', 'garlic', 'peppers'];
```

An object is a set of data stored in key-value pairs that provide a little additional specificity and context to the information. For example:

```js
let pizza = {
  crust: 'thin',
  sauce: 'tomato',
  size: 14,
  extraCheese: true,
  toppings: ['onions', 'garlic', 'peppers']
};
```


## A Review of `for` Loops

**With Someone Next to You**
Talk about the structure of a `for` loop. What does each part of the `for` loop do?

```js
for (part 1; part 2; part 3) {
  part 4
}
```

## Prototype Methods

In order to understand what a prototype method is, let's break down the terms individually. A **prototype** is a model of something and how it should look or behave. We can build off of prototypes to create multiple copies of similar models. A **method** in JavaScript is simply a function that's defined on an object.

Prototype methods are functions that allow you to manipulate the value of a particular data type or class. JavaScript comes with several built-in data types that each have their own prototype methods, that allow you to interact with them in certain ways. For example, you might want to add or remove an item from an array. Or inspect the properties on an object. Prototype methods allow you to perform these actions and manipulate your values.


## Array Iteration Methods (Prototypes)

What are they? Whhy are they useful? They loop through an existing array and apply a callback function to each element that might mutate each element and return a new value. Iteration methods generally take in a callback function as their first argument:

`array.someArrayPrototype(callbackFunction)`

There are many array prototype methods out there, but we are going to focus on some of the iterator methods: forEach, map, find, filter, reduce, and sort.

### `Array.map(callbackFunction)`

Use Case: when you want a new array based on your original, with some modification to each item

The `map()` method is very similar to `forEach()`, except that each time the callback is executed, whatever is returned from the callback is added to a new array that map returns.

```js
let evenNumbers = [2, 4, 6, 8, 10];

let oddNumbers = evenNumbers.map((number, index, array) => {
  return number + 1;
});

console.log(oddNumbers); // [3, 5, 7, 9, 11]
```


### Return?

What is the purpose of the `return` in the `map()` example above?


### `Array.find(callbackFunction)` and `Array.filter(callbackFunction)`
`Array.find()` helps you find a particular item in an array that matches a given condition. It will return the very first array element where the callback function returns true, even if there are multiple matches.

  
```js
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 3 },
  { name: 'mishu', age: 3 },
];

let threeYearOldPup = pets.find(pet => {
  return pet.age === 3
});

console.log(threeYearOldPup); // { name: 'julius', age: 3 }
```
  

`Array.filter()` is very similar to `Array.find()`, but instead of simply returning the first match, it will return a new array with all elements that match.

  
```js
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 5 },
  { name: 'mishu', age: 5 },
];

let adultPets = pets.filter(pet => {
  return pet.age === 5;
});

console.log(adultPets);
// [{name: 'julius', age: 5}, {name: 'mishu', age: 5}]
```
  

### `Array.reduce(callbackFunction, initialValue)`
`Array.reduce()` can turn an array into a single value. This single value could be a number, string, object, or another array. To accomplish this, reduce takes in two parameters:

_Callback Function_ - Within the callback, we have access to the accumulator, the current element in the iteration, the current element's index, and the original array we are looping over

_Initial Value_ - The initial value to be used as the accumulator (the first argument to the first call of the callback). The accumulator is the 'single value' that will eventually be returned. It's called an accumulator because each iteration over the array will modify the accumulator value until the loop is complete.
  
```js
const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((sum, number) => {
  sum += number;
  
  return sum;
}, 0);
```


There is a lot going on in reduce, so let's take a look at another example. Imagine we have a really complex data structure that is an array that contains multiple arrays, and we want to flatten it into a single array. We could do something like the following:

```js
let messyArray = [[0, 1], [2, 3], [4, 5]];

let cleanArray = messyArray.reduce((accumulator, currentElement) => {
    return accumulator.concat(currentElement);
  }
,[]);

// cleanArray is [0, 1, 2, 3, 4, 5]
```


## What About Objects

How do we iterate through objects?... Hint: `Object.keys()` or `Object.values()`. Go over to the docs (MDN maybe), and read about what these do and when you might use them.

Notice the different style of how these methods are used. How are these methods used for a given object?


### Checks for Understanding

* Describe an array?
* Describe an object?
* What is a prototype method?
* Name two prototype methods for an object.
* Name three prototype methods for an array.

