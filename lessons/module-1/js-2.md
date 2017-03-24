---
title: Introduction to JavaScript — Part II
title: JS II
length: 120
tags: javascript, introduction, foundation, variables
---

## Review

Before we get started with new material, let's go over over what we've learned so far.

- What are the three basic data types in Javascript?
- How do we write a variable and why would we use one?
- How do we write a conditional?
- How do you write a function?
- How do you call a function?

## Learning Goals

In this lesson we'll cover:

* More about functions and their uses
* Variable scope
* Array literals and change/add values to them via their indices
* `for` loops

# More on Functions

Let's talk about some more things we can do with them.

## Calling functions inside of other functions
When writing Javascript, you want to do your best to keep your code DRY. That means keeping functions concise and single responsibility. It's not uncommon to do a first pass at solving a problem and end up with a more verbose solution, and then revisit your code to tighten it up. This process of cleaning up your working code is called refactoring. When we refactor, one of the things we look for is unnecessary duplication. If we see a line of code being used in multiple places, we can pull it out into its own separate functions of reusable code.

Let's take a crack at refactoring some functions and calling functions within other functions. Below we see two very important functions:

```js
function karateChop() {
  console.log("KARATE CHOP!");
  alert("KAPOW!");
}

function ninjaAttack() {
  alert("KAPOW!");
  console.log("NINJA SURPRISE!");
}
```

We can see that we have some duplication going on between these two functions. We see we have an `alert` that is exactly the same in both functions, which means it is a prime candidate to get pulled into its own function. This will let us reuse this code without retyping it repeatedly (which helps reduce human error and typos), and gives us the flexibility to easily use it in future functions as well. Let's see what that looks like:

```js
function kapow() {
  alert("KAPOW!");
}

function karateChop() {
  console.log("KARATE CHOP!");
  kapow();
}

function ninjaAttack() {
  kapow();
  console.log("NINJA SURPRISE!");
}
```

### Your Turn

Turn to your neighbor and explain how the functions above work. Remember, getting practice using the vocabulary is important so make sure you both have a chance to talk through it!
<!-- How would you use parameters and arguments to make the logged string be different each time we call the function? -->

## Functions - Named or Anonymous?

So far, we've been working with *named functions*. Through *function declaration* `function myNamedFunction()` we create a function that we intend to call later in our code via the name we gave it. That is kind of cool. It feels very similar to when we were naming/assigning variables. A named function is kind of like that: we create a name, assign a series of instructions (the function) to that name, and we get to use it all over the place, simply by calling the name of the function with its parentheses.

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

Let's talk about that "function as an expression" bit. What the heck is that about? Anywhere the interpreter expects to find an expression, like variable assignment for instance, we can use an expression that is NOT named. In the context of functions, we call this an *anonymous function*. Remember that an expression simply evaluates to and returns a value, so it makes sense that we should be able get that value from a function.

With that in mind, let's take a look at an example of an anonymous function:

```javascript
// Instead of declaring a named function, we assign a function to a variable.
var area = function(width, height) {
  return width * height;
};

// We call this function using the variable that we assigned our anonymous function to
area(2, 1)

// We can even assign that function call as the value of another variable. How would we run our 'area' function now?
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

# Loops
There are times when we want to repeat the same operation multiple times. Loops allow us to do just that by checking a conditional. If the conditional returns `true`, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns `false`.

Let's take a look at the structure of the most commonly used type, the `for` loop:

```js
for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

Which looks like this when we implement it in code:

```js
for (var i = 0; i < 10; i++ ) {
  console.log(i);
}
```

If we break this down, we see that our loop is constructed from the following parts:

- the keyword `for`
- a condition of `(var i = 0; i < 10; i++ )` that is being used as our counter
- opening and closing curly braces which wrap...
- the code that we want our loop to execute: `console.log(i);`

Let's dig into the three statements separated by semicolons that make up or our condition:

- We being with _initialization_. The first statement `var i = 0;` creates a variable that is assigned the value of 0. This variable is commonly named `i`, or `index`, and will act as the counter. It is created the first time the loop is run.
- The next statement _sets the condition_ that tells the loop when to stop running: `i < 10;`. In this case, the condition indicates that the loop will stop when `i` is greater than 10. The condition may use a variable that is assigned a value.
- Finally, with the statement `i++` we _update_ the value of our counter `i`. This adds 1 to the value of `i`. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.

The statement within the curly braces executes each time the loop runs. In this case, we can see we are logging the value of `i` to the console.

### Looping Over Arrays
`for` loops are commonly used to iterate over the items in a array. To do this, we use the property `length` and call it on the variable associated with the array we want to iterate over. This property returns the length of, or number of elements in, an array. Let's see what that looks like in practice:

```js
var fruitList = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruitList.length; i++) {
  console.log("I have some " + fruitList[i]);
}
```

You can see that instead of using a hardcoded number, we are using `fruitList.length` in our condition. This means we will continue to loop over the array as long as the counter is less than the total number of elements in the array. That's pretty handy!

### Loops and Performance Issues
It's important to be aware of the potential performance problems that loops can cause. When a browser hits Javascript, it stops executing anything else on the page until it has processed that script. Since loops can be run on arrays or containers of unknown -- and potentially enormous -- size, it's possible for our loop to make a page much, much slower to load.

Additionally, if the condition of your loop never returns `false`, you will get stuck in what's known as an `infinite loop`. This means that your loop will never stop running. Eventually your browser will run out of memory and your script will break.

Here's an example of an infinite loop. Open a new tab in your browser and run this in your console. What happens?

```js
for(var i = 0; i = true; i++) {
  console.log(i);
}
```

We can see that this condition will never return `false` and we'll be stuck in this loop forever (or at least until our page crashes)! Be mindful of the possibility that you could create infinite loops when leveraging loops in your code. They can happen to the best of us, and knowing what they are is the first step to avoiding and correcting them.


### Additional Practice

* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.
