---
title: ES5 vs ES6
tags: javascript, ES6, destructuring, spread operator, block scope
module: 2
---

<!-- [Slides](https://drive.google.com/open?id=1ISEwW7suiVzmDb7sJg1Y_kFaKu6OaRFzLGPbk3XVAHg)
 -->
### Learning Goals
* Compare ES5 vs. ES6

## The differences between ES5 and ES6

Up until now, you've mostly been writing ECMAScript 5. (You can read more about ECMAScript [here](https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5).)

ES5 is comfortable and familiar, but ES6 gives us a lot of great [new features](http://es6-features.org/#Constants), which we'll start learning about here.

## Template Literals

Constructing strings while interpolating variables:

```js
// es5
var name = 'Brittany';
var greeting = 'Hello' + name + '!';

// es6
var name = 'Brittany';
var greeting = `Hello ${name}!`;
```


## Scope

### Block Scope

We're familiar with global and function scope. Scope is literally the area of code in which a variable or value can be accessed.

We already know that variables declared (using the keyword `var`) inside of a function will remain scoped to that function. In other words, it won't be accessible outside of the function.

ES6 gives us two new variable keywords: `let` and `const`. These two variable keywords introduce **block scope**.

What is a block? The most common ones that you will be familiar with are `if` statements and `for` loops. You can read more about block statements [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block).


### Hoisting

Another difference between `var` vs. `let` and `const` is that variables declared with let/const will not respond to hoisting in the same way `var` does. Instead, if you try to access a variable declared with `let` or `const` before it's declared, you will get a `ReferenceError: Cannot access <variableName> before initialization`.



**The differences between let and const:**

Variables declared with `let` can be reassigned, whereas variables declared with `const` cannot.

If an array or object is declared using the keyword `const`, the contents of that array or object can be changed, but that variable name will always point to that same piece of memory.

#### Turn and Talk

What are var, let, and const similar? How are they different?



## Arrow Functions

ES6 gives us another way to write functions. They're called arrow functions because they have an arrow in them. Neat!

Let's look at the syntactic differences first:

Say we have an array of even numbers: `var evens = [0, 2, 4, 6, 8];`

We can map over that array to create new arrays of `odds`, `pairs`, and `nums`:

```
// es5 syntax examples
var odds = evens.map(function (num) {
  return num + 1;
});

var pairs = evens.map(function (num) {   
  return { even: num, odd: num + 1 };
});

var nums = evens.map(function (num, i) {
  return num + i;
});

var fives = [];
nums.forEach(function (num) {
  if (num % 5 === 0) {
    fives.push(num);
  }
});
```

Compare that to arrow function syntax:

```
var odds = evens.map(num =>
  num + 1
);

var pairs = evens.map(num =>
  ({ even: num, odd: num + 1 })
);

var nums = evens.map((num, i) =>
  num + i
);

var fives = [];
nums.forEach(num => {  
  if (num % 5 === 0) {
    fives.push(num)
  }
});
```

Here are some features arrow functions give you:
* implicit return
  * the curly braces and keyword `return` can be eliminated and the remaining expression will be evaluated and returned
  * only make use of this when a single expression is written
  * multiple lines or expressions in an arrow function require the curly braces and the keyword `return`
* drop the parentheses around a single parameter
  * if using multiple parameters or no parameters, the parentheses must be used

To name an arrow function, you must save it as a variable.

```
// es5 syntax
function sayHi() {
  console.log('Hi!');
}

// es6 syntax
const sayHi = () => console.log('Hi!');
```

#### Turn and Talk

What are the benefits of using arrow functions over function declarations?

## Handling Parameters

ES6 gives us more ways to handle parameters.

**Default parameters:**

If you want to give some parameters default values, ES6 allows you to do that with much less syntax than ES5.

Consider the following code:

```
// es5
function f (x, y, z) {
    y = y || 7
    z = z || 42
    return x + y + z;
};

f(1) // 50

// es6
function f (x, y = 7, z = 42) {
    return x + y + z
}

f(1) // 50
```


**Spread operator:**

The [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) has many more applications.

```
var arr = [4, 5, 6];

// es5
var completeArr = [1, 2, 3].concat(arr); // [1, 2, 3, 4, 5, 6]

// es6
var completeArr = [1, 2, 3, ...arr]; // [1, 2, 3, 4, 5, 6]
```

The spread operator took the individual values from the array and added them into the new array.

```
var string = 'hello';

// es5
var characters = string.split(''); // ['h', 'e', 'l', 'l', 'o']

// es6
var characters = [...string]; // ['h', 'e', 'l', 'l', 'o']
```

In this case, the `split` method is not terribly complex, but using the spread operator makes the code more readable at a glance; you can see that the result is an array.


### Destructuring

Destructuring assignment allows us to unpack values from objects and arrays into their own distinct variables.

```js
const dog = {
  name: 'Spot',
  breed: 'pug',
  tricksLearned: {
    sit: true,
    stay: true,
    rollOver: false,
    beg: true,
    speak: false
  }
}

let { name, breed } = dog;
let { sit, stay, speak } = dog.tricksLearned;

console.log(name); // 'Spot'
console.log(stay); // true
```

<!--   Answers
  1. const { rollOver } = dog.tricksLearned;
  2. const { breed: robbiesFavoriteDog } = dog;
  3. const { beg, playDead = false} = dog.tricksLearned; -->


**Importing:**

```
// es5
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

// es6
import { assert, expect } from 'chai';
```

ES6 shortens up the importing syntax. Destructuring helps us define variables pulled out of datasets, as in the following code:

**Creating variables based on key value pairs:**

#### Turn and Code
Taking turns for each prompt in driver/navigator fashion, complete the following:
Using the code example for our `dog` object above, use destructuring assignment to do the following:
  1. Create a variable called `rollOver` that holds the value of `false`
  2. Create a variable called `robbiesFavoriteDog` that holds the value from our property of `breed`
  3. Create variables for the following tricks: `beg`, and `playDead` (`playDead` should default to `false`)


You can read more about destructuring and the things it can do [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).


### Journal

* What new changes did ES6 bring in so far as the following:
  * scope
  * functions
  * parameters

### Additional Resources:

* Babel (ES6 -> ES5)		  [https://babeljs.io/repl/](https://babeljs.io/repl/)
* ES6 Features 		    	  [http://es6-features.org](http://es6-features.org)
* Browser Compatibility		[https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)
* [Slides](https://docs.google.com/presentation/d/1HulXmc44bvbBEUgkd9A_78YEQudlXUKajMc1TlhSbLk/edit#slide=id.g11271f5cac0_0_137) showing the same function with varying ES5/ES6 syntax
