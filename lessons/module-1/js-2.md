---
<<<<<<< HEAD:lessons/module-1/intro-to-javascript-2.md
title: Introduction to JavaScript — Part II
=======
title: JS II
>>>>>>> origin/gh-pages:lessons/module-1/js-2.md
length: 120
tags: javascript, introduction, foundation, variables
---

## JS I Review

Before we get started with new material, let's go over over what we've learned so far.

- What are the three basic data types in Javascript?
- How do we write a variable and why would we use one?
- How do you add a value to an array?
- How do you write a function?
- How do you call a function?

## Learning Goals

By the end of this lesson, you will know/be able to:

* Understand array literals and change/add values to them via their indices
* Understand more about functions and their uses
* Understand variable scope

# Arrays
An array is a special type of variable. Instead of storing just one value, it stores an ordered list of values. You should consider using an array whenever you are working with a collection of values, or values that are related to one another.

You can put different types of data into an array:

```javascript
var arrayName = [element0, element1, ...];
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
'Blue', 'Indigo', 'Violet'];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];
var myFavoriteThings = ['Broccoli', 1024, 'Sherlock'];
```
You can create an array just like you would any other variable, using the var keyword followed by the name of your array. The values are assigned to the array inside a pair of square brackets ([]), and each individual value is comma-separated. The above technique for creating an array is known as an **array literal**. It is usually the preferred method for creating an array. You can also write an array with values on separate lines, like so:

```javascript
colors = ['white',
          'black',
          'pink']
```

## Accessing Values in Arrays
Each value in an array is automatically given a number called an index. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the above `colors` example, the following is true:

- color white has an index of 0
- color black has an index of 1
- color pink has an index of 2

You can change values in an array by their index. Let's walk through it in the console:

```javascript
// Create the array
var colors = ['white', 'black', 'pink'];

// Check the value of colors
colors

// Update the third value in the array
colors[2] = 'blue';

// Check the value of colors
colors
```

### Your Turn (in the console)

- create an array of cars
- change the values within the array
- add a new car to the array

# More on Functions

## Getting Multiple Values from Functions:
Functions can return more than one value using an array. Let's see what this looks like:

```javascript
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
```

Okay, let's pick this apart in the console, step by step, and make sure we understand what's what. In the console, do these things:

```javascript
// Declare the getSize function
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

// Ask the console what "getSize" is
getSize

// Call the "getSize" function
getSize()

// Why this?
[NaN, NaN]

// Okay, pass getSize some arguments
getSize(5, 3, 2)

// I feel pretty good about this result, but feel free to check the math. ;)
[15, 30]

// Interactive Pop Quiz Time!
var areaOne = getSize(3, 2, 3)[0];
var areaTwo = getSize(3, 2, 3)[1];
var areaThree = getSize(5, 1, 2)[0];
var volumeOne = getSize(2, 2, 2)[1];
var volumeTwo = getSize(1, 8, 7)[0];
```

## Functions - Famous or Anonymous?

So far, we've mostly been working with *named functions*. Through *function declaration* `function myNamedFunction()` we create a function that we intend to call later in our code via the name we gave it. That is kind of cool. It feels very similar to when we were naming/assigning variables. A named function is kind of like that: we create a name, assign a series of instructions (the function) to that name, and we get to use it all over the place, simply by calling the name of the function with its parentheses.

```javascript
// Declare a named function
function myRadFunction(parameter) {
  console.log(parameter);
  alert("All done!");
}

// Call that named function to execute
myRadFunction("Boom");
```

So what's all this business about *anonymous functions*?

Here's a hint: Remember expressions? What do they do? :smiling_imp:

- Where can expressions be used?
- Can a function return a value?
- Can a function be an expression?

Hmm, that's interesting. Let's talk about that "function as an expression" bit. What the heck is that about? Anywhere the interpreter expects to find an expression, a la in a variable assignment for instance, we can use an expression that is NOT named, in which case we call it an *anonymous function*. Remember that an expression simply evaluates to and returns a value, it doesn't really care how it gets that value.

With that in mind, let's take a look at an example of an anonymous function:

```javascript
// Instead of declaring a named function, we assign a function to a variable.
var area = function(width, height) {
  return width * height;
};

// Now let's assign another variable, that uses the thing we just did.
var size = area(3, 4);
```

Why does this matter? When should I care?

- A function declaration (that whole named function bit above) has a higher priority to the interpreter than an anonymous function. The interpreter always looks for variables and function declarations _before_ going through each section of a script, line-by-line. This means that a function created by function declaration can be called _before_ it has even been declared.
- When a function is treated as an expression, the interpreter won't process it until it gets to that statement. This means you cannot call the anonymous function _before_ the interpreter discovers it. It also means any preceding code up to that point could potentially alter what goes inside that function.
- Anonymous functions are good for:
  - code that you really only need to run once in a task, rather than something you need to repeatedly call in other parts of the script
  - as an argument, that will calculate a value on the fly as it is being passed into another function
  - assigning values to a property of an object
  - event handlers & listeners to perform a task when an event occurs

# Variable Scope
Where you declare a variable affects where it can be used within your code. If you declare a variable within a function, it can only be used in that function. This is known as the variable's scope. When we talk about variables in regard to their scope, there are two types:

- Local Variables:
  - created _inside_ a function using the var keyword
  - said to have "local scope"
  - cannot be accessed outside the function in which it was declared
  - they are created when the function is run, and removed when it is done
  - if the function runs twice, the variable could have a different value each time
  - if the variable is locally scoped, then two different functions can use the same variable name without a naming conflict

- Global Variables
  - created _outside_ a function
  - can be used anywhere in the script
  - said to have "global scope"
  - stored in memory for as long as the web page is loaded
  - takes up more memory than local variables, as well as introduces more risk of naming conflicts

- Variables sans the keyword `var`
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - bad practice

## The Variable Danger Zone

Keep this in mind as you're making new variables:

Variables sans the keyword `var`
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - are bad practice

The good news is all you have to do to avoid this is to always remember to use the `var` keyword!

### Additional Practice

* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.
