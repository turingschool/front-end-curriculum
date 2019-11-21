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

<section class="call-to-action">
**In Your Notebook**
Write down everything you know about arrays. Think about when you've used them in the past, where you've seen them, and what you've done with them.
</section>

An array is essentially a comma-separated list of related values. For example:

```js
let pizzaToppings = ['onions', 'garlic', 'peppers'];
```

<!-- An object is a set of data stored in key-value pairs that provide a little additional specificity and context to the information. For example:

```js
let pizza = {
  crust: 'thin',
  sauce: 'tomato',
  size: 14,
  extraCheese: true,
  toppings: ['onions', 'garlic', 'peppers']
};
``` -->


## A Review of `for` Loops

<section class="call-to-action">
**With Someone Next to You**
Talk about the structure of a `for` loop. What does each part of the `for` loop do?

```js
for (part 1; part 2; part 3) {
  part 4
}
```
</section>

## Prototype Methods

In order to understand what a prototype method is, let's break down the terms individually. A **prototype** is a model of something and how it should look or behave. We can build off of prototypes to create multiple copies of similar models. A **method** in JavaScript is simply a function that's defined on an object.

Prototype methods are functions that allow you to manipulate the value of a particular data type or class. JavaScript comes with several built-in data types that each have their own prototype methods, that allow you to interact with them in certain ways. For example, you might want to add or remove an item from an array. Or inspect the properties on an object. Prototype methods allow you to perform these actions and manipulate your values.


## Array Iteration Methods (Prototypes)

What are they? Why are they useful? They loop through an existing array and apply a callback function to each element that might mutate each element and return a new value. Iteration methods generally take in a callback function as their first argument:

`array.someArrayPrototype(callbackFunction)`

### Callback Functions
All the methods we'll talk about today will take a `callback function`. You've likely seen these before, but we'll got over the basic syntax:

```js
someData.somePrototype(function callBack (mandatoryParameter [,optionalParameters... ]) {
  // some statements
  // often a return statement
})
```
Easy, right?

#### Side Note:

Many callbacks require a return statement. Remember that these statements determine what the CALLBACK returns, **not** what the METHOD returns. The method may return something different, and this value may need to be captured (in a variable, another return statement...).

You can find more information on different prototype methods and their callbacks <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods" target="\__blank">here</a>.

There are many array prototype methods out there, but we are going to focus on some of the iterator methods: forEach, map, find, filter, and reduce.

### `Array.forEach(callbackFunction)`

Use Case: when you want to perform an operation on every element in an array.
Note: `forEach` does NOT return anything. It's just a for loop in a method.

```js
let words = ['hello', 'world'];

words.forEach(word => {
  console.log(word)
});

/*
Console will print:
  hello
  world
*/
```

### `Array.map(callbackFunction)`

Use Case: when you want a new array based on your original, with some modification to each item.
Note: `map` will return a **new array of the same length** as the original array.

The `map()` method is very similar to `forEach()`, except that each time the callback is executed, whatever is returned from the callback is added to the new array that map returns.

```js
let evenNumbers = [2, 4, 6, 8, 10];

let oddNumbers = evenNumbers.map((number, index, array) => {
  return number + 1;
});

console.log(oddNumbers); // [3, 5, 7, 9, 11]
```
<section class="checks-for-understanding">
#### Return?
What is the purpose of the `return` in the `map()` example above?
</section>

### `Array.find(callbackFunction)`
Use case: when you need to find a particular item in an array that matches a given condition. It will return the very first array element where the callback function returns true, even if there are multiple matches.
Note: the callback needs to return a **boolean**. You also cannot modify the element you're finding

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

let threeYearOldPups = pets.filter(pet => {
  return pet.age === 3;
})

console.log(threeYearOldPups) // => [{name: 'julius', age: 3}, {name: 'mishu', age: 3}]
```

### `Array.filter(callbackFunction)`

`Array.filter()` is very similar to `Array.find()`, but instead of simply returning the first match, it will return a new array with all elements that match.

Note: See the notes for `.find` above.


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
Use Case: If you need to turn an array into a single value. This single value could be a number, string, object, or another array. To accomplish this, reduce takes in two parameters:

_Callback Function_ - Within the callback, we have access to the accumulator, the current element in the iteration, the current element's index, and the original array we are looping over

_Initial Value_ - The initial value to be used as the accumulator (the first argument to the first call of the callback). The accumulator is the 'single value' that will eventually be returned. It's called an accumulator because each iteration over the array will modify the accumulator value until the loop is complete.

<!-- Note: `.reduce` is great for **cleaning data** (hint hint...) -->

```js
const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((sum, number) => {
  sum += number;

  return sum;
}, 0);
```


There is a lot going on in reduce, so let's take a look at another example. Imagine we have an array that we want to turn into and object. We could do something like the following:

```js
let adjectives = ['fantastic', 'amazing', 'childish'];

let wordLength = adjectives.reduce((acc, adjective) => {
  acc[adjective] = adjective.length;
  return acc;
}, {})

// wordLength is { fantastic: 9, amazing: 7, childish: 8 }
```

## Practice

The best way to get comfortable with these methods is to practice them, so we will!

We'll break into groups and work on some <a href="https://github.com/turingschool-examples/iterator-methods-stations" target="\__blank">stations</a>. Answer the questions in each markdown file, and work through the problems in a repl.

The stations will be:
1. `forEach`
2. `map`
3. `find`
4. `filter`
5. `reduce`

It's highly recommended to keep a list of the methods, along with answers to the questions from the markdown files, in a place that's easy to turn back to!

<!--
## What About Objects?

How do we iterate through objects?... Hint: `Object.keys()` or `Object.values()`. Go over to the docs (MDN maybe), and read about what these do and when you might use them.

Notice the different style of how these methods are used. How are these methods used for a given object?

Try using these methods to refactor the country exercises to work with the whole <a href="https://github.com/turingschool-examples/iterator-methods-stations/blob/master/data.json" target="\__blank">dataset</a> -->

<section class="checks-for-understanding">
### Checks for Understanding

* Describe an array?
* What is a prototype method?
* Name three prototype methods for an array.
* Which prototype methods are the most confusing right now?
</section>
