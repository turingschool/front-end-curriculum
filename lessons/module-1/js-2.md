---
title: Introduction to JavaScript — Part II
title: JS II
length: 120
tags: javascript, introduction, foundation, variables
---

## Review

Before we get started with new material, let's go over over what we've learned so far.  

- The primitive data types
- Variables
- Conditionals
- Functions

## Learning Goals

In this lesson we'll cover:

* More about functions and their uses  
* Variable scope  
* Array literals  
* Adding/changing values to arrays via their indices  
* `for` loops  

# More on Functions

Can't get enough.  

## Part 1: Calling functions inside of other functions
When writing Javascript, you want to do your best to keep your code DRY. That means keeping functions concise and single responsibility. It's not uncommon to do a first pass at solving a problem and end up with a more verbose solution, and then revisit your code to tighten it up. This process of cleaning up your working code is called `refactoring`. When we refactor, one of the things we look for is unnecessary duplication. If we see a line of code being used in multiple places, we can pull it out into its own separate functions of reusable code.

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

How would you use parameters and arguments to make the logged string be different each time we call the function?

## Part 2: Declarations vs Expressions

### Named Functions aka Function Declarations

So far, we've been working with *named functions*. *Named functions* can also be referred to as *function declarations*, or even *normal functions*.  

Through *function declaration*, or *named functions*, ie: `function myNamedFunction()`, we create a function that we intend to call later in our code via the name we gave it.  

This type of function does not require the keyword `var` to kick it off. Even without the keyword `var`, the syntax feels similar to when we were naming/assigning variables: a variable declaration must start with `var`, followed by the name of the variable, and a function declaration must start with `function`, followed by the name of the function.  We can then call this function all over our code by that name property.  

```javascript
// Declare a named function
function myRadFunction(parameter) {
  console.log(parameter);
  alert("All done!");
}

// Call that named function to execute
myRadFunction("Boom");

// You can even call the function INSIDE ITSELF, which is called "recursion".
function myRadFunction(parameter) {
  console.log(parameter)
  if (someCondition) {
    myRadFunction(parameter)
  }
}
```

### Anonymous Functions and Function Expressions

Another type of function is the *anonymous function*, which does not have a name. These are commonly used as arguments to other functions:

```js
setTimeout(function() {
  alert('BOO!')
}, 1000)
```  

They are also commonly referred to as a *function expression* because the function is assigned to a variable, which makes the anonymous function part of a larger `expression`.  

```js
var alienAlert = function() {
  alert('E.T. PHONE HOME')
};
alienAlert();
```

Take a moment to recall what an `expression` does in JavaScript. How do you think that applies here?  

Things to think about:  
- Where can expressions be used?
- Can a function return a value?
- Can a function be an expression?  

Recall that anywhere the interpreter expects to find an expression, like when you declare a variable name, we can use an expression that is NOT named as the value. In the context of functions, we call this an *anonymous function*. Remember that an expression simply returns a value, so it makes sense that we should be able to accomplish that with an function.

To reiterate, `function expressions` define a function, but instead of giving the name to the function itself, the function is left anonymous and the name is instead assigned to a variable.  

Let's take a look at a few more examples.

```js
// Instead of declaring a named function, we assign a function to a variable.
var calculateArea = function(width, height) {
  return width * height;
};

// We call this function using the variable that we assigned our anonymous function to
calculateArea(2, 1)

// We can even assign that function call as the value of another variable. How would we run our 'area' function now?
var size = calculateArea(3, 4);
```

Why does this matter? Seems like everyone just wants to make life hard with all these different ways of doing what seems like the same thing. Enter...

### Hoisting

Hoisting is a fancy way of saying that "some things are considered more important" to the interpreter that processes your JavaScript. In other words, certain lines of code are `hoisted` to the top of the containing scope of your code.  

But WTF does that even mean??

Example:

```js
// This named function...
function foo() {
  bar();
  var x = 1;
}

// Will actually be interpreted like this:
function foo() {
  var x;
  bar();
  x = 1;
}
```

A function declaration (ie: `function foo()`) has a higher priority to the interpreter than an anonymous function (ie: `function()`). The interpreter will always look for variables and function declarations _before_ going line-by-line through the rest of the script. This means that a function created by a function declaration gets special treatment, and can be called _before_ it has even been declared.  

But Wait! Don't the examples above show that variables get hoisted? Doesn't that mean that function expressions (ie: `var foo = function()`) would get hoisted too?.

Tricky Question! You'll notice that in the above snippets of code, only the **NAME** of the variable is hoisted, but the value is left behind. The value of that variable is not evaluated until the interpreter reaches the line where that variable is declared. **Function declarations, on the other hand, are treated differently. The entire body of that declaration will be hoisted as well.**    

In other words, this means that when a function is written as an expression, the interpreter won't process it until it gets to that full statement. **This means function expressions do *not* get special treatment, you cannot call the function _before_ the interpreter discovers it.** (As a side note, it also means any preceding code up to that point could potentially alter what goes inside that function.)  

### Your Turn
Take a few minutes with the person in front/behind you to talk through and explain hoisting to each other.

<!-- Take a few minutes with the person in front/behind you to look through the following examples functions. Try to answer the questions WITHOUT using your console yet. Then we will go over them together.  

[Check Your Understanding](https://gist.github.com/)   -->

# Variable Scope
Where you declare a variable affects where it can be used within your code. If you declare a variable within a function, it can only be used within that function. This is known as the variable's `scope`. When we talk about variables in regard to their scope, there are two (kind of three) types:

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
  - ok when used to redefine a variable that has already been declared
  - risky business otherwise

## The Variable Danger Zone

Keep this in mind as you're making new variables:

Variables sans the keyword `var`
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - are bad practice

The good news is all you have to do to avoid this is to always remember to use the `var` keyword when declaring a new variable!

# Arrays
An array is a special type of variable. Instead of storing just one value, it stores an ordered list of values. You should consider using an array whenever you are working with a collection of values, or values that are related to one another.

You can put different types of data into an array:

```js
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
colors;

// Update the third value in the array
colors[2] = 'blue';

// Check the value of colors
colors;

// Get the value of the 1st element
colors[0];
```

### Your Turn (5 min)

In the console:  
- create an array of cars
- change the values within the array
- add a new car to the array
- identify the value of the 3rd element of the array

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

### Your Turn (10 min)

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
getSize;

// Call the "getSize" function
getSize();

// Why this?
[NaN, NaN];

// Okay, pass getSize some arguments
getSize(5, 3, 2);

// I feel pretty good about this result, but feel free to check the math. ;)
[15, 30];

// Interactive Pop Quiz Time!
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
var areaTwo = getSize(5, 1, 2)[0];
var volumeTwo = getSize(2, 2, 2)[1];
var areaThree = getSize(1, 8, 7)[0];
```

# Loops
There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, for each item in a list (maybe an `array`...) if a conditional returns `true`, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns `false`.

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
- a set of rules, or conditions `(var i = 0; i < 10; i++ )`   
- opening and closing curly braces which contain our code  
- the code that we want our loop to execute: `console.log(i);`  

Let's dig into the three statements separated by semicolons that make up or our conditions:

- We begin with **initialization**. Where do we want our loop to start? The first statement `var i = 0;` creates a variable that is assigned the value of 0. This variable is commonly named `i`, or `index`, and will act as the counter. It is created the first time the loop is run.  
- The next statement **sets the condition** that tells the loop when to stop running: `i < 10;`. In this case, the condition indicates that the loop will stop when `i` equals 10. The condition may use a variable that is assigned a value.
- Finally, with the statement `i++` we **update the value** of our counter `i`. This adds 1 to the value of `i`. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.

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
for (var i = 0; i > -1; i++) {
  console.log(i);
}
```

We can see that this condition will never return `false` and we'll be stuck in this loop forever (or at least until our page crashes)! Be mindful of the possibility that you could create infinite loops when leveraging loops in your code. They can happen to the best of us, and knowing what they are is the first step to avoiding and correcting them.  

### Benchmarking Loops ( in case you're curious )
We haven't talked about other kinds of loops yet, but there are many different ways to loop over a data set, and each of them have pros and cons.  

If you're curious, check out this [jsPerf analysis](https://jsperf.com/for-vs-foreach/66) of how long various `for`/`forEach`/`while` loops take to run when executing the same code.  


### Additional Practice  

* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.

### Dig Deeper  

* [Seven JS Quirks I Wish I'd Known About](http://developer.telerik.com/featured/seven-javascript-quirks-i-wish-id-known-about/#expdec)  
* [Adequately Good JS](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)  
