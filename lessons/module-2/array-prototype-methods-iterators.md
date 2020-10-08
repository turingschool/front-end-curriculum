---
title: "Array Prototype Methods: Iterators"
tags: javascript, iterator, prototype, arrays
module: 2
---

## Lesson Goals

* Articulate the difference between arrays and objects, and understand when you would use each one
* Define what a prototype method is and what it allows you to do
* List several prototype methods for both arrays and objects
* Understand how to manipulate arrays and objects, and the use-cases for different prototype methods

## Vocab
- `prototype` A model of something and how it should look or behave
- `method` A function that is defined on an object
- `callback function` A function passed into another function as an argument, which is then invoked inside the outer function

## Arrays & Objects

Arrays and objects are the more complex data types that are available to us in JavaScript. How is an array different from an object?

An array is essentially a comma-separated list of related values. For example:

```js
let pizzaToppings = ['tomato', 'cheese', 'pepperoni'];
```

```js
let lunch = [
  {
    name: 'apple pie',
    type: 'dessert',
    ingredients: ['dough', 'apples', 'butter', 'sugar']
  },
  {
    name: 'sandwich',
    type: 'main',
    ingredients: ['bread', 'peanut butter', 'jelly']
  }
];
```

## A Review of `for` Loops

When would you use a `for` loop?

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

You might already be familiar with some of the following prototype methods:
- `.pop()`
- `.push()`

Which other ones can you name?


## Array Iteration Prototype Methods

What are they? Why are they useful? They loop through an existing array and apply a callback function to each element that might mutate each element and return a new value.

WAIT. Can't we already iterate through arrays with a for loop?!

In Javascript, there are often many different ways to solve something, and maybe different tools to choose from. Yes, we can often accomplish the same thing using a for loop, but the array iteration methods do provide some good benefits!
- Cleaner syntax and easier to read
- DRYs up code
- More modern way of writing Javascript

There are _occassional_ times when it makes more sense to use a for loop over something like a forEach. You can read more about why to use one over the other [here](https://alligator.io/js/foreach-vs-for-loops/).


### Callback Functions

All the methods we'll talk about today will take a `callback function`. You've likely seen these before (think about event listeners).

From MDN - "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."

In this example, we can see that the somePrototypeMethod (this could be a forEach, filter, etc.) is **taking in a function as an argument**. This function is called a "callback function." The callback function is what takes in the mandatory and optional parameters!

```js
someArrayData.somePrototypeMethod(function callBack (mandatoryParameter [,optionalParameters... ]) {
  // some statements
  // often a return statement
})
```

Since these prototype methods were introduced as part of ES6, most of the time you will see them written using a fat arrow like below:
```js
someArrayData.somePrototypeMethod((mandatoryParameter [,optionalParameters... ]) => {
  // some statements
  // often a return statement
})
```

#### More on Callbacks

Many callbacks require a return statement. Remember that these statements determine what the CALLBACK returns, **not** what the METHOD returns. The method may return something different, and this value may need to be captured (in a variable, another return statement...).

**You will often need *TWO* return statements when working with iterator methods!**

You can find more information on different prototype methods and their callbacks <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods" target="\__blank">here</a>.

There are many array prototype methods out there, but we are going to focus on some of these iterator methods:
* `forEach()`
* `map()`
* `find()`
* `filter()`
* `reduce()`

### `Array.forEach(callbackFunction)`

Use Case: when you want to perform an operation on every element in an array. `forEach` is the prototype method that is most similar to a for loop.
Note: `forEach` does NOT return anything (even if you have return statements!!) It's just a for loop in a method.

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

function displayLoudWords() {
  let loudWords = [];

  words.forEach(word => {
    loudWords.push(word.toUpperCase());
  });

  return loudWords;
}

displayLoudWords() // ['HELLO', 'WORLD']
```
We can push our element data into an array and return that, but the array MUST exist outside of the forEach.
While this is valid code, there is a better method we can use to achieve this.



### `Array.map(callbackFunction)`

Use Case: when you want a new array based on your original, with some modification to each item.
Note: `map` will return a **new array of the same length** as the original array.

The `map()` method is very similar to `forEach()`, except that each time the callback is executed, whatever is returned from the callback is added to the new array that map returns.

Cleaner, right?
```js
let words = ['hello', 'world'];

function displayLoudWords() {
  return words.map(word => {
    return word.toUpperCase();
  });
}

displayLoudWords() // ['HELLO', 'WORLD']
```

<section class="checks-for-understanding">
#### Return?
What is the purpose of each `return` statements in the `map()` example above?
</section>

*Another Example*
```js
let evenNumbers = [2, 4, 6, 8, 10];

let oddNumbers = evenNumbers.map((number, index) => {
  return number + 1;
});

console.log(oddNumbers); // [3, 5, 7, 9, 11]
```
What is the purpose of the `index` param?

### `Array.find(callbackFunction)`
Use case: when you need to find a particular item in an array that matches a given condition. It will return the very first array element where the callback function returns true, even if there are multiple matches.
Note: the callback needs to return a **boolean**. You also cannot modify the element you're finding.

```js
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 3 },
  { name: 'mishu', age: 3 },
];

function findThreeYearOldPet() {
  return pets.find(pet => {
    return pet.age === 3
  })
}

findThreeYearOldPet() // { name: 'julius', age: 3 }
```

Let's make our above example a little more dynamic and see some bracket notation in action!

```js
function findPetByAge(age) {
  return pets.find(pet => {
    return pet[age] === 3
  })
}

findPetByAge(3)
```

### `Array.filter(callbackFunction)`

`Array.filter()` is very similar to `Array.find()`, but instead of simply returning the first match, it will return a new **array** with all elements that match.

Note: See the notes for `.find` above.

Gotchas with `find` and `filter`:
- They are SO similar, its easy to forget that `find` always returns one element and `filter` always returns an array
- We're used to writing `if` statements for conditionals, but `find` and `filter` are doing this for us!


```js
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 5 },
  { name: 'mishu', age: 5 },
];

function findThreeYearOldPets() {
  return pets.filter(pet => {
    return pet.age === 3;
  })
}

findThreeYearOldPets() // => [{name: 'julius', age: 3}, {name: 'mishu', age: 3}]
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


There is a lot going on in reduce, so let's take a look at another example. Imagine we have an array that we want to turn into an object. We could do something like the following:

```js
let adjectives = ['fantastic', 'amazing', 'childish'];

function getWordLengths() {
  return adjectives.reduce((acc, adjective) => {
    acc[adjective] = adjective.length;

    return acc;
  }, {})
}

getWordLengths() // { fantastic: 9, amazing: 7, childish: 8 }
```

**When to use reduce??** - Often, students will see that we want to return one thing (array, object, number) and lean towards reduce. Sometimes another method might make more sense (remember that map returns a single array!). Think about using reduce when you want to return one thing that is a _combination_ or _sum_ of all things in your orginial array!


## Paired Practice

<a href="https://github.com/turingschool-examples/iterator-methods-stations" target="\__blank">https://github.com/turingschool-examples/iterator-methods-stations</a>

## Homework

Make a copy of this [google sheet](https://docs.google.com/spreadsheets/d/1dgVmzc-t8vb9w2P7gaFJtmkcVoQBzFqFOCQDKysxpaw/edit#gid=0). Fill out the table for each prototype method so you can use it to reference. It might be helpful to link examples too!

<section class="checks-for-understanding">
### Checks for Understanding

* Describe an array.
* What is a prototype method?
* Name three prototype methods for an array.
* Which prototype methods are the most confusing right now?
</section>


### Additional Resources
* [Why and when to use forEach, map, filter, reduce, and find in JavaScript](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)
* [ForEach vs For Loops](https://alligator.io/js/foreach-vs-for-loops/)
* [Finally Understand the JavaScript Reduce Method](https://alligator.io/js/finally-understand-reduce/)
* [JavaScript Callback Functions - What are Callbacks in JS and How to Use Them](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/)
* [Callback Functions MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
