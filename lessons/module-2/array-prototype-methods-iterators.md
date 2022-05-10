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

<section class="note">
### Note About this Lesson

Note that this is a 2 day lesson. That means you might be leaving today's lesson with more questions than answers. That's okay! There is **a lot** to cover, so we're going to take our time 🙂
</section>

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

There are _occassional_ times when it makes more sense to use a for loop over something like a forEach. For example:

- If you need to run something a specific number of times, you would want to use a `for` loop.  `forEach` always iterates over every element in an array.
- If you want to stop (`break`) a `for` loop, you can do that.  There is no way to stop a `forEach` loop. 


### Callback Functions

Iteration prototype methods (such as forEach, filter, etc.) **take in a callback function as an argument**. The callback function is what takes in the mandatory and optional parameters!

```js
someArrayData.somePrototypeMethod(function callBack (/* parameter(s) */) {
  // some statements
  // often a return statement
})
```

Since these prototype methods were introduced as part of ES6, most of the time you will see them written using a fat arrow like below:
```js
someArrayData.somePrototypeMethod((/* parameter(s) */) => {
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

<section class="call-to-action">
### Exploration Activity

You are going to be split into groups and be assigned one iterator method. It will be your job to research that method and then share out your learning with your peers. In your groups, you will need to create a document (use any tool you'd like: google docs, Notion, etc) and record the following information:
- What does the callback function return?
- What are the mandatory parameters? Optional parameters?
- What is the basic structure/skeleton of the method?
- What are common use cases? When would I use this method?
- Is there anything else people should know?
- Solve the problem(s) included below.

</section>

First, let's do `forEach` together. The instructor will model how they would use documentation to research.

<section class="answer">
### `Array.forEach(callbackFunction)`

<section class="answer">
### Problem Set

1 - Using `forEach`, iterate over the array of prices, increase the price by $1, and add new increased prices to the `increasedPrices` array.

```js
const prices = [4.99, 5.50, 7.00, 10.25];
const increasedPrices = [];
```
2 - Using the dogs array above, log the dog's name and how many legs it has.  

```js
const dogs = [
  {name: "Fido", numLegs: 4},
  {name: "Greg", numLegs: 5}
];

// console output
=> 'Fido has 4 legs.'
   'Greg has 5 legs.'
```  

</section>

<section class="answer">
### Important Takeaways

Be sure to include these in your document, if you haven't already!
* `forEach` is useful when you want to perform an operation on every element in an array.
* Is is the prototype method that is most similar to a `for` loop.
* `forEach` does **NOT** return anything (even if you have return statements).  You can push element data into another array, but the array MUST exist outside of the `forEach`.
</section>
</section>

Now that we've done that one together, let's split up into groups and have y'all take it from here!  

<section class="answer">
### `Array.map(callbackFunction)`

<section class="answer">
### Problem Set

1 - Using `map`, iterate over the array of prices, increase the price by $1, and return a new array of increased prices.  Store them in a variable called `increasedPrices`.  

```js
const prices = [4.99, 5.50, 7.00, 10.25];
```  

2 - Using an array of temperature data in Fahrenheit, convert the date to degrees Celsius and store them in a variable called `degreesC`. [Here is the formula](http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm){:target='blank'} to convert from Fahrenheit to Celsius.  

```js
const degreesF = [67, 32, 55, 102]

// console output
=> [19.44, 0, 12.77, 38.88]
 ```  
</section>

<section class="answer">
### Important Takeaways  

Be sure to include these in your document, if you haven't already!
* Use `map` when you want a new array based on your original, with some modification to each item.
* Although similar to `forEach`, each time the callback is executed in `map`, whatever is returned from the callback is added to the new array
* `map` will *ALWAYS* return a **new array of the same length** as the original array.
</section>
</section>

<section class="answer">
### `Array.find(callbackFunction)`

<section class="answer">
### Problem Set

1 - Find the first number that is greater than 20.  

```js
const numbers = [15, 6, 14, 2, 22, 9, 45];
```  


2 - Find the first pet that is three years old and store it in a `foundPet` variable.  
```js
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 3 },
  { name: 'mishu', age: 3 },
];
```  
</section>

<section class="answer">
### Important Takeaways  

Be sure to include these in your document, if you haven't already!
* Useful for when you need to find a specific item in an array that matches a given condition.
* Always will return the first element where the callback function returns *true*.  (even if there are other matches)
* The callback needs to return a **boolean**. You also cannot modify the element you're finding.
</section>
</section>

<section class="answer">
### `Array.filter(callbackFunction)`

<section class="answer">
### Problem Set

1 - Return a new array of *odd* numbers using the `filter` prototype method.   

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
```  


2 - Create a new array of *living* beatles using the `filter` method and store them in a `livingBeatles` variable.
3 - Create another array of beatles that play the guitar use the `filter` method and store them in a `guitarPlayingBeatles` variable.  

```js
var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];
```  
</section>

<section class="answer">
### Important Takeaways  

Be sure to include these in your document, if you haven't already!
* Instead of returning the first match like `find`, `filter` will return a new **array** with all elements that match a condition.
* Useful for when you need to find a subset of elements in an array that matches a given condition.
* The callback needs to return a **boolean**. You also cannot modify the element you're finding.
</section>
</section>


<section class="answer">
### `Array.reduce(callbackFunction, initialValue)`

<section class="answer">
### Helpful Tips

Note that the `reduce` method is slightly different than the previous iterator methods.  `reduce` takes two arguments:

_Callback Function_ - Within the callback, we have access to the accumulator, the current element in the iteration, the current element's index, and the original array we are looping over

_Initial Value_ - The initial value to be used as the accumulator (the first argument to the first call of the callback). The accumulator is the *single value* that will eventually be returned. It's called an accumulator because each iteration over the array will modify the accumulator value until the loop is complete.
</section>

<section class="answer">
### Problem Set

1 - Using `reduce`, sum up all of the numbers.  

```js
const numbers = [1, 2, 3, 4, 5];

// console output
=> 15
```  

2 - Using `reduce`, create a new object the stores the lengths of each word.  

```js
const adjectives = ['fantastic', 'amazing', 'childish'];

// console output
=> { fantastic: 9, amazing: 7, childish: 8 }
```  
</section>

<section class="answer">
### Important Takeaways  

Be sure to include these in your document, if you haven't already!
* Useful for turning an array into a single value, be it a number, string, object, or another array.
* Useful for returning one that is a combination / sum of values from an original array.
* Also useful for converting an array into another data type.
* REMEMBER...you must always return the *accumulator* in the callback function.
</section>
</section>

<section class="note">
### Before we close out today...

Be sure that every member of your group has access to the document that you just made. You will be split up tomorrow and responsible for teaching your peers what you've learned. Save that document somewhere easy to find so you can easily share it tomorrow.
</section>

## Share Out (Start of Day 2 lesson)

You will get into groups of 4, made up of one expert for each iterator method. In these groups, share the document you made yesterday. Then, walk each other through your example problems. 

## Practice

The only way to get better and more comfortable with these prototype methods is to continue practicing them. Here are a [few more examples](https://github.com/turingschool-examples/iterator-methods-stations){:target='blank'} to work through.

<section class="checks-for-understanding">
### Checks for Understanding

* What is a prototype method?
* Compare and contrast `filter` and `find`.
* Compare and contrast `forEach` and `map`.
* When might `reduce` be a useful method?
* Which prototype methods are the most confusing for you right now?
</section>

### Additional Resources
* [Why and when to use forEach, map, filter, reduce, and find in JavaScript](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)
* [ForEach vs For Loops](https://alligator.io/js/foreach-vs-for-loops/)
* [Finally Understand the JavaScript Reduce Method](https://alligator.io/js/finally-understand-reduce/)
* [JavaScript Callback Functions - What are Callbacks in JS and How to Use Them](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/)
* [Callback Functions MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
