---
title: "Array Prototype Methods: Iterators"
tags: javascript, iterator, prototype, arrays
module: 2
---

## Lesson Goals

* Define what a prototype method is and what it allows you to do
* List several prototype methods for arrays
* Understand the use-cases for different prototype methods

## Vocab
- `prototype` A model of something and how it should look or behave
- `method` A function that is defined on an object
- `callback function` A function passed into another function as an argument, which is then invoked inside the outer function

## Prototype Methods

In order to understand what a *prototype method* is, let's break down the terms individually:

*  A **prototype** is a model of something and how it should look or behave. We can build off of prototypes to create multiple copies of similar models.
* A **method** in JavaScript is simply a function that’s defined on an object

Prototype methods are functions that allow you to manipulate the value of a particular data type or class. JavaScript comes with several built-in data types that each have their own prototype methods, that allow you to interact with them in certain ways. For example, you might want to add or remove an item from an array. Or inspect the properties on an object. Prototype methods allow you to perform these actions and manipulate your values.

<section class="call-to-action">
### Examples of Prototype methods

You might already be familiar with some of the following prototype methods:
- `.pop()`
- `.push()`

What are some other prototype methods that you have used previously?
</section>


## Array Iteration Prototype Methods

These allow us to loop through an existing array and apply a `callback function` (similar to *event listeners* or *setTimeout*) to each element that might mutate each element and return a new value.

WAIT. Can't we already iterate through arrays with a for loop?!

In Javascript, there are often many different ways to solve something, and many different tools to choose from. Yes, we can often accomplish the same thing using a for loop, but the array iteration methods do provide some good benefits!

- Cleaner syntax and easier to read
- Offers built-in functionality which in turn, DRYs up code
- More modern way of writing Javascript

There are _occassional_ times when it makes more sense to use a for loop over something like a forEach. You can read more about why to use one over the other [here](https://alligator.io/js/foreach-vs-for-loops/){:target='blank'}.


### Callback Functions

Iteration prototype methods (such as forEach, filter, etc.) **take in a callback function as an argument**. The callback function is what takes in the mandatory and optional parameters!

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

<section class="note">
### More on these callbacks

Many callbacks require a return statement. Remember that these statements determine what the CALLBACK returns, **not** what the METHOD returns. The method may return something different, and this value may need to be captured (in a variable, another return statement...).

**You will often need *TWO* return statements in a METHOD (or function) when working with iterator methods!**

You can find more information on different prototype methods and their callbacks [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods){:target='blank'}.
</section>

There are many array prototype methods out there, but we are going to focus on some of these iterator methods:
* `forEach()`
* `map()`
* `find()`
* `filter()`
* `reduce()`

### `Array.forEach(callbackFunction)`

Let's start by exploring these prototype methods with some examples.

<section class="call-to-action">
### In Pairs

```js
// increase prices by 1.00
const prices = [4.99, 5.50, 7.00, 10.25];
const increasedPrices = [];
```

* Using `forEach`, iterate over the array of prices and add new increased prices to the `increasedPrices` array.

```js
const dogs = [
  {name: "Fido", numLegs: 4},
  {name: "Greg", numLegs: 5}
];

// console output
=> 'Fido has 4 legs.'
   'Greg has 5 legs.'
```

* Using the dogs array above, log the dog's name and how many legs it has.
* Afterwards, write the use cases of `forEach` and any major takeaways you discovered.
</section>

<section class="answer">
### Major Takeaways  

* `forEach` is useful when you want to perform an operation on every element in an array.
* Is is the prototype method that is most similar to a `for` loop.

<section class="note">
### Important

`forEach` does **NOT** return anything (even if you have return statements).  You can push element data into another array, but the array MUST exist outside of the `forEach`.
</section>
</section>

### `Array.map(callbackFunction)`

<section class="call-to-action">
### In Pairs

```js
// increase prices by 1.00
const prices = [4.99, 5.50, 7.00, 10.25];
// const increasedPrices =  prices.map...
```

* Using `map`, iterate over the array of prices and return a new array of increased prices.  Store them in a variable called `increasedPrices`.
* What parts of `map()` are similar to `forEach()`? What parts are different?


```js
const degreesF = [67, 32, 55, 102]
// const degreesC...

// console output
=> [19.44, 0, 12.77, 38.88]
 ```

 * Using an array of temperature data in Fahrenheit, convert the date to degrees Celsius and store them in a variable called `degreesC`. [Here is the formula](http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm){:target='blank'} to convert from Fahrenheit to Celsius.
</section>

<section class="answer">
### Major Takeaways  

* Use `map` when you want a new array based on your original, with some modification to each item.
* Although similar to `forEach`, each time the callback is executed in `map`, whatever is returned from the callback is added to the new array

<section class="note">
### Note

`map` will *ALWAYS* return a **new array of the same length** as the original array.
</section>
</section>

### `Array.find(callbackFunction)`

<section class="call-to-action">
### In Pairs

```js
const numbers = [15, 6, 14, 2, 22, 9, 45];
// const foundNum = numbers.find...
```

* `find` the first number that is greater than 20.

```js
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 3 },
  { name: 'mishu', age: 3 },
];

// const foundPet...
```

* `find` the first pet that is three years old and store it in a `foundPet` variable.
* What does the callback function in `find` expect to be returned?
* In what scenarios is `find` useful?
</section>

<section class="answer">
### Major Takeaways  

* Useful for when you need to find a specific item in an array that matches a given condition.
* Always will return the first element where the callback function returns *true*.  (even if there are other matches)

<section class="note">
### Note

The callback needs to return a **boolean**. You also cannot modify the element you're finding.
</section>
</section>

### `Array.filter(callbackFunction)`

<section class="call-to-action">
### In Pairs

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
// const oddNumbers = numbers.filter...
```

* Return a new array of *odd* numbers using the `filter` prototype method.

```js
var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

// const livingBeatles...

// const guitarPlayingBeatles...
```

* Create a new array of *living* beatles using the `filter` method and store them in a `livingBeatles` variable.
* Create another array of beatles that play the guitar use the `filter` method and store them in a `guitarPlayingBeatles` variable.
* What is similar / different about `filter` compared to `find`?
</section>

<section class="answer">
### Main Takeaway  

* Instead of returning the first match like `find`, `filter` will return a new **array** with all elements that match a condition.
</section>

### `Array.reduce(callbackFunction, initialValue)`

Note that the `reduce` method is slightly different than the previous iterator methods.  `reduce` takes two arguments:

_Callback Function_ - Within the callback, we have access to the accumulator, the current element in the iteration, the current element's index, and the original array we are looping over

_Initial Value_ - The initial value to be used as the accumulator (the first argument to the first call of the callback). The accumulator is the *single value* that will eventually be returned. It's called an accumulator because each iteration over the array will modify the accumulator value until the loop is complete.

<section class="call-to-action">
### In Pairs

```js
const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce...

// console output
=> 15
```

* Using `reduce`, sum up all of the numbers.

```js
const adjectives = ['fantastic', 'amazing', 'childish'];
// const wordLengths...

// console output
=> { fantastic: 9, amazing: 7, childish: 8 }
```

* Using `reduce`, create a new object the stores the lengths of each word.
</section>

<section class="answer">
### Major Takeaways  

* Useful for turning an array into a single value, be it a number, string, object, or another array.
* Useful for returning one that is a combination / sum of values from an original array.
* Also useful for converting an array into another data type.
* REMEMBER...you must always return the *accumulator* in the callback function.
</section>

## Extra Paired Practice

The only way to get better and more comfortable with these prototype methods is to continue practicing them.  Here are a [few more examples](https://github.com/turingschool-examples/iterator-methods-stations){:target='blank'} to work through.


<section class="checks-for-understanding">
### Checks for Understanding

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
