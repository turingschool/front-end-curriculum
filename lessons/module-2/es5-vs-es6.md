---
title: ES5 vs ES6
tags: javascript, ES6, destructuring, spread operator, block scope
module: 2
---

[Slides](https://drive.google.com/open?id=1ISEwW7suiVzmDb7sJg1Y_kFaKu6OaRFzLGPbk3XVAHg)

### Lesson objectives:

By the end of the lesson, you will
* Be familiar with some of ES6 syntax and know how it relates to ES5
* Know how inheritance works and be able to explain it

## The differences between ES5 and ES6

Up until now, you've mostly been writing ECMAScript 5. (You can read more about ECMAScript [here](https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5).)

ES5 is comfortable and familiar, but we ES6 gives us a lot of great [new features](http://es6-features.org/#Constants), which we'll start learning about here.

### Block Scope

We're familiar with global and function scope. Scope, in a nutshell, refers to where variables and functions are accessible, and in what context it is being executed.

We already know that variables declared (using the keyword `var`) inside of a function will remain scoped to that function. In other words, it won't be accessible outside of the function.

ES6 gives us two new variable keywords: `let` and `const`. These two variable keywords introduce **block scope**.

What is a block? The most common ones that you will be familiar with are `if` statements and `for` loops. You can read more about block statements [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block).

Previously, when we wanted a variable to remain scoped to a block, we had to wrap the contents of the block in a function.

Consider the following example: let's set up a `for` loop to create a bunch of functions that return the value of `i` multiplied by 2, and then push those functions into an array.

Here's how we would achieve that in ES5:

```
// es5 block scope
var callbacks = [];

for (var i = 0; i <= 2; i++) {
  (function (i) {
    callbacks[i] = function () { 
      return i * 2; 
    };
  })(i);
}

callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
```

(If we did not wrap the contents of the `for` loop in a function, when we executed `callbacks[0]`, `callbacks[1]`, and `callbacks[2]` they would all return 4, because `i` would be hoisted out of the `for` loop block and defined in the global scope. The `for` loop would increment it up, so each of the functions would reference that global variable. Hence wrapping the contents of the `for` loop in a function.)

And here's how we would do it with ES6:

```// es6 block scope
var callbacks = []

for (let i = 0; i <= 2; i++) {
  
  callbacks[i] = function () {
    return i * 2 
  }

}

callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
```

The major differences are:
* using the keyword `let` instead of `var` in the `for` loop, which will remain scoped to that block
* not needing to wrap the contents of the loop in a function, _because_ the `i` is no longer referencing a hoisted global variable

**The differences between let and const:**

Variables declared with `let` can be reassigned, whereas variables declared with `const` cannot.

If an array or object is declared using the keyword `const`, the contents of that array or object can be changed, but that variable name will always point to that same piece of memory.

### Arrow Functions

ES6 gives us another way to write functions. They're called arrow functions because they have an arrow in them. Neat!

Let's look at the synctactic differences first:

Say we have an array of even numbers: `var evens = [0, 2, 4, 6, 8];`

We can map over that array to create new arrays of `odds`, `pairs`, and `nums`:

```
// es5 syntax examples
var odds = evens.map(function (v) { 
  return v + 1; 
});

var pairs = evens.map(function (v) {   
  return { even: v, odd: v + 1 }; 
});

var nums = evens.map(function (v, i) { 
  return v + i; 
});

var fives = [];
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
```

Compare that to arrow function syntax:

```
var odds = evens.map(v => 
  v + 1
);

var pairs = evens.map(v => 
  ({ even: v, odd: v + 1 })
);

var nums = evens.map((v, i) => 
  v + i
);

var fives = [];
nums.forEach(v => {  
  if (v % 5 === 0) {
    fives.push(v)
  }
});
```

Here are some features arrow functions give you:
* implicit return
  * the curly braces and keyword `return` can be eliminated and the remaining expression will be evaluated and returned
  * only make use of this when a single expression is written
  * multiple lines or expressions in an arrow function require the curly braces and the keyword `return`
* return an object
  * surround the object with parentheses
  * you can still also use syntax from ES5 instead of parentheses if more semantic/readable
* drop the parentheses around a single parameter
  * if using multiple parameters or no paremeters, the parentheses must be used
  
To name an arrow function, you must save it as a variable.

```
// es5 syntax
function sayHi() {
  console.log('Hi!');
}

// es6 syntax
const sayHi = () => console.log('Hi!');
```

### Handling Parameters

ES6 gives us more ways to handle parameters.

**Default parameters:**

If you want to give some parameters default values, ES6 allows you to do that with much less syntax than ES5.

Consider the following code:

```
// es5
function f (x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;
};

f(1) // 50

// es6
function f (x, y = 7, z = 42) {
    return x + y + z
}

f(1) // 50
```

**Rest parameters:**

Consider the following code:

```
// es5
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};

f(1, 2, "hello", true, 7) // 9

// es6
function f (x, y, ...arguments) {
    return (x + y) * arguments.length
}

f(1, 2, "hello", true, 7) // 9
```

Instead of slicing the arguments, ES6 gives us the ability to grab all the rest of the parameters. The spread operator (`...`) takes the additional parameters and puts them all in an array that can be referenced later.

**Spread operator:**

The [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) has many more applications.

```
var arr = [4, 5, 6];

// es5
var completeArr = [1, 2, 3].concat(arr2); // [1, 2, 3, 4, 5, 6]

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

```
const dog = {
  name: 'Spot',
  breed: 'corgi',
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



const strings = ['one', 'two', 'three'];
let [one, two, three] = strings;

console.log(two); // 'two'
```

**Reassigning values:**

Destructuring also lets you swap values in an array without using a temporary variable.

```
var list = [1, 2, 3];

// es5
temp = list[0];
list[0] = list[2];
list[2] = temp;

// es6
[ list[0], list[2] ] = [ list[2], list[0] ];

console.log(list); // [3, 2, 1]

```

The square brackets are just part of the destructuring syntax here.

You can read more about destructuring and the things it can do [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Classes and Prototypal Inheritance

You've already seen the syntax for ES6 classes in your mythical creatures.

```
// es6
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }

    move (x, y) {
        this.x = x
        this.y = y
    }
}
```

Here's how you would have to write the same thing in ES5:

```
function Shape (id, x, y) {
    this.id = id;
    this.move(x, y);
};

Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
```

It's a lot more code and is less readable.

ES6 class inheritance syntax is also much easier:

```
class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y)
    this.width = width
    this.height = height
  }
}
```

And here is how that would be accomplished in ES5:

```
var Rectangle = function (id, x, y, width, height) {
  Shape.call(this, id, x, y);
  this.width = width;
  this.height = height;
};

Rectangle.prototype = Object.create(   
  Shape.prototype
);

Rectangle.prototype.constructor = Rectangle;
```

We can create classes that inherit from another class by using the ES6 keyword `extends` and the method `super()`. We'll learn more about this in our Intro to Object Oriented Programming lesson.


### Additional Resources:

Babel (ES6 -> ES5)		  https://babeljs.io/repl/
Lebab	(ES5 -> ES6)		  https://lebab.io/try-it
ES6 Features 		    	  http://es6-features.org
Browser Compatability		https://kangax.github.io/compat-table/es6/
