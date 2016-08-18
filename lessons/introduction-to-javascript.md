---
title: Introduction to JavaScript
length: 120
tags: javascript, browser
---

## Learning Goals

* Learn how to access and use the Chrome Developer Tools
* Develop a basic understanding for JavaScript syntax
* Work with functions as first-class objects
* Understand how to query and update a page after its been loaded

## Full-Group Instruction I: History and Basics

Legend has it JavaScript was created in 10 days in May of 1995 by Brendan Eich. It was originally descended from [Self][] and [Scheme][], but its syntax was changed to be more like Java and C. It has no relation to Java.

[Self]: http://en.wikipedia.org/wiki/Self_(programming_language)
[Scheme]: http://www.scheme.com/tspl4/

### Variables

```js
var x = 1;
console.log(x); // => 1
x = 2;
console.log(x); // => 2
```

### Comments

```js
// Double slashes comment out a single line of code

var notCommentedOut = "I Am a variable that is not commented out."

/*
 You can comment out multiple
 lines of code if you sandwich those lines
 between a slash asterisk - asterisk slash
*/

var moreUncommentedCode = "I'm not commented out!"
```

### Operators

Operators are pretty straight forward in JavaScript - for the most part.

```js

  // +
  // add/concatenation
  // Used to add two numbers together, or glue two strings together.

  3 + 3 ; "I really like " + "cookies and pizza."
```
```js
  //  -, *, /
  // subtract, multiply, divide
  // These do the basic math operations you'd expect

  6 - 3 ; 3 * 3 ; 9 / 3
```
```js
  //  =
  // assignment operator
  // this assigns a variable a value

  var name = "Reginald"
```
```js
  // ===
  // Identity operator
  // This compares the values of two things and decides if they are equal to one another. Returns a true/false (boolean)

  var name = "Reginald"

  name === "Reggie" //=> false
  name === "Reginald" //=> true
```
```js
  // !, !==
  // Negation, not equal
  // Returns the logically opposite value of what it preceeds; it turns  a true into a false, etc. When it is used alongside the Equality operator, the negation operator tests whether two values are not equal

  var isTruth = true
  var isFalse = false

  !isTruth //=> false

  isTruth !== isFalse //=> true

  !isTruth !== isFalse //=> false

```

### Conditionals

We can write conditionals in JavaScript too!

```js
var cookie = "chocolate chip"

if (cookie === "chocolate chip") {
  alert("This cookie is a chocolate chip cookie!")
} else if (cookie === "oatmeal raisin") {
  alert("This is not a cookie :(")
} else {
  alert("I bet you wish you had a chocolate chip cookie")
}
```


### Functions

In Ruby, we call methods on an object. Functions behave a lot like methods except that they are objects themselves. This means that you can store a function in a variable, pass a function as an argument to another function, or even call methods on a function.

Functions can be either named or anonymous. Anonymous functions can be stored in a variable or passed as an argument to another function.

```js
// Named function
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('Alan Turing'); // Logs 'Hello, Alan Turing!'
sayHello; // Doesn't log anything. The function was never called.
sayHello(); // Logs 'Hello, undefined!' but does not raise an argument error.

// Anonymous function
function (addend) {
  return addend + 2;
};
// But how do we call it now?

// Let's try it again, but let's store it in a variable.
var addTwo = function (addend) {
  return addend + 2;
};

addTwo(2) // 4
```

Let's take a look at passing a function as an argument to another function.

```js
// Let's start out by defining some functions.

function addTwo(addend) { return addend + 2; }
function subtractOne(minuend) { return minuend - 1; }
function multiplyByThree(factor) { return factor * 3; }

// Now let's set up a function that takes a function as an argument.

function doMath(value, mathFunction) {
  return mathFunction(value);
}

doMath(2, addTwo); // => 4
doMath(4, subtractOne); // => 3
doMath(3, multiplyByThree) // => 9
```

Notice how we didn't use the parentheses when we passed the functioned into `doMath`? That's because if we used the parentheses, we would call the function. We don't want to call it. We just want to reference it.

## Pair Experiment I: Creating a Function

Try the following:

* Create a function that divides one number by the other.
* Create a function that takes a number, two of the math functions listed above, and performs both math equations on the value (e.g. `yourMathFunction(2, addTwo, subtractOne)` should return `3`).

Copy and paste each into the Chrome Developer Tools. Did it work?

# Break

## Full-Group Instruction II: Control Flow and Array Iteration

### Conditionals

Conditional statements have a few extra decorations as compared to Ruby.

```js
var hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  console.log('I am groggy.');
} else {
  console.log('I feel fantastic!');
}
```

### Iterating Over Arrays

In recent versions of JavaScript. Arrays have a `forEach` method that acts kind of like Ruby's `each`. JavaScript does not have blocks like Ruby, but we can use an anonymous function in it's place.

```js
var words = ['home', 'word', 'hello'];

words.forEach(function (word) {
  console.log(word);
});
```

We could also use a reference to a named function.

```js
var words = ['home', 'word', 'hello'];
function yell(word) { console.log(word.toUpperCase()); }

words.forEach(yell);
```

### Iterating Over Collections of Objects

`forEach` is a prototype method on the Array object. It only works if the collection you are trying to iterate over is an array.  `var x = ["panda", "koala", "teddy"]`
```js
Array.isArray(x)  // true
```
 We can however use a for loop instead of forEach.

`for(initialization; condition; final-expression) { doSomething } `

so, we wanted to iterate over `var x = ["panda", "koala", "teddy"]` and `console.log` each bear we would write a for loop like this:
```js
for(var i = 0; i < x.length; i++){ console.log( x[i] ) } // "panda" "koala" "teddy" }
```

## Pair Experiment II: Iterating Over an Array of Functions

Try the following:

* Take an array of numbers. Log each number multiplied by two.
* Create an array of functions. Call each one as you iterate through the array.
* JavaScript arrays also have `map` and `reduce`. Can you figure out how to use them by looking [at the docs][mdn]?

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# Break

## Full Group Instruction III: Objects and the DOM

### Objects

JavaScript doesn't have hashes, but it does have objects. Objects don't need to be instances of a class. They can be declared with a syntax that looks familiar to Ruby's hashes.

```js
var cat = { language: 'Bucu', bodyType: 'chunky' };
console.log(typeof cat); // => "object"
```

You can access the properties of a JavaScript object using dot syntax.

```js
console.log(cat.bodyType); // 'chunky'
```

You can even nest objects.

```js
var cat = {
  name: 'Bucu',
  features: {
    fur: 'orange',
    eyes: 'green'
  }
}

console.log(cat.features.eyes); // 'green'
```
We can also assign functions as object properties.

```js
var cat = {
  name: 'Bucu',
  sayHello: function () { console.log("Hello, I'm " + this.name ); }
}

cat.sayHello(); // 'Hello, I'm Bucu'
```
