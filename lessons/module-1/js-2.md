---
title: JavaScript II - Scope, Arrays, and For Loops
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
  - Calling functions inside of other functions
  - Function expressions and anonymous functions
* Hoisting & Variable scope  
* Array literals  
* Adding/changing values to arrays via their indices  
* `for` loops and how to iterate through arrays using loops


## Vocab

- See [vocab](http://frontend.turing.edu/lessons/module-1/js-1.html) for JS I
- `DRY` Programming principle that means `Don't Repeat Yourself`
- `Refactoring` - the process of cleaning up your working code to be more concise
- `Anonymous Function` A function without a name
- `Scope` Determines the accessibility/visibility of variables and functions
- `Hoisting` The process of implicitly moving the declaration of variables and functions to the top of their scope
- `Literal`  A way of declaring a data structure and its values at the same time
- `Array` Used to store a collection of data items/multiple values under a single variable name
- `Loops` A quick and easy way to do something repeatedly
- `Control Flow` The order in which the computer executes statements in a script. The order of execution can change whenever the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. 


# More on Functions

Can't get enough.  

## Part 1: Refactoring + Calling functions inside of other functions

When you are just starting to learn how to program, your main objective should be to get things working. It doesn't need to be pretty, it doesn't need to be clever - it just needs to work. However, after you have things working, you'll want to take some time to **refactor** your code. Refactoring is the process of cleaning up your already working code to remove repetitive, unnecessary or non-functioning code from your codebase. 

In programming, you'll often hear about keeping your code 'DRY' - which stands for 'Don't Repeat Yourself'. That means keeping functions concise and single responsibility (each function only has one task/job). This idea goes hand in hand with refactoring and is a good starting place to see where you can clean up your code. Simply put, if you find areas where you are writing the same lines of code over and over again, you can likely break these repetitive lines of code out into their own smaller functions.

Another common example of refactoring is for functions that are very long/verbose. While there isn't a "perfect length" of a function, typically, the smaller (and more modular), the better. Let's take a look at the example below:

```js
function geezerAttack() {
  console.log('What in tarnation?!')
  console.log('Who is making all that racket on my porch?')
  console.log('If I miss one second of my television program I am gonna lose it!')
  console.log('***Struggles out of reclining chair...***')
  console.log('***Bangs knee on coffee table...***')
  console.log('***Drops TV remote on slippered foot...***')
  console.log('~~~Whack on the head with a newspaper~~~')
  console.log('~~~Throw slipper at victim~~~')
  console.log('~~~Smack with hickory cane~~~')
}
```

The above function is pretty long and there is a lot of things happening. This could be a great opportunity to refactor by breaking this function out into smaller functions and calling them within our main function, `geezerAttack()`. Looking at this functionality, there seems to be three main themes: warnings, struggles and fightingMoves. We could break this up into three other functions! See below:

```js
function geezerWarnings() {
  console.log('What in tarnation?!')
  console.log('Who is making all the racket on my porch?')
  console.log('If I miss one second of my television program I am gonna lose it!')
}

function geezerStruggles() {
  console.log('***Struggles out of reclining chair...***')
  console.log('***Bangs knee on coffee table...***')
  console.log('***Drops TV remote on slippered foot...***')
}

function geezerFightingMoves() {
  console.log('~~~Whack on the head with a newspaper~~~')
  console.log('~~~Throw slipper at victim~~~')
  console.log('~~~Smack with hickory cane~~~')
}

function geezerAttack() {
  geezerWarnings()
  geezerStruggles()
  geezerFightingMoves()
}
```

Let's take a crack at refactoring some functions and calling functions within other functions. Below we see two very important functions:

```js
function karateChop() {
  console.log("KARATE CHOP!");
  alert("KAPOW!");
  alert("JUDO CHOP!");
}

function ninjaAttack() {
  alert("KAPOW!");
  alert("JUDO CHOP!");
  console.log("NINJA SURPRISE!");
}
```

We can see that we have some duplication going on between these two functions. We see we have two `alert` statements that are exactly the same in both functions, which means it is a prime candidate to get pulled into its own function. This will let us reuse this code without retyping it repeatedly (which helps reduce human error and typos), and gives us the flexibility to easily use it in future functions as well. Let's see what that looks like:

```js
function surpriseAttack() {
  alert("KAPOW!");
  alert("JUDO CHOP!");
}

function karateChop() {
  console.log("KARATE CHOP!");
  surpriseAttack();
}

function ninjaAttack() {
  karateChop();
  console.log("NINJA SURPRISE!");
}
```

### Your Turn

Turn to your neighbor and explain how the functions above work. Remember, getting practice using the vocabulary is important so make sure you both have a chance to talk through it!  

How would you use parameters and arguments to make the logged string in `ninjaAttack()` be different each time we call the function?


## Part 2: Declarations vs Expressions

### Named Functions aka Function Declarations

So far, we've been working with *named functions*. *Named functions* can also be referred to as *function declarations*, or even *normal functions*.  

Through *function declaration*, or *named functions*, ie: `function myNamedFunction()`, we create a function that we intend to call later in our code via the name we gave it.  

This type of function does not require the keyword `var` to kick it off. Even without the keyword `var`, the syntax feels similar to when we were naming/assigning variables: a variable declaration must start with `var`, followed by the name of the variable, and a function declaration must start with `function`, followed by the name of the function.  We can then call this function all over our code by that name property.  

```javascript
// Declare a named function
function showMessage(message) {
  console.log(message);
  alert("All done!");
}

// Call that named function to execute
showMessage("Boom");
```

### Anonymous Functions and Function Expressions

Another type of function is the *anonymous function*, which does not have a name. These are commonly used as arguments to other functions:

```js
setTimeout(function() {
  alert('BOO!');
}, 1000);
```  

You will see anonymous functions as arguments in the future in things like *event listeners* and *array prototype methods*.  (More on those in future lessons)

They are also commonly used within *function expressions*, where the function is assigned to a variable, which makes the anonymous function part of a larger `expression`.  

```js
var alertAliens = function() {
  alert('E.T. PHONE HOME');
};
alertAliens();
```

Take a moment to recall what an `expression` does in JavaScript. How do you think that applies here?  

Things to think about:  
- Where can expressions be used?
- Can a function return a value?
- Can a function be an expression?  

Recall that anywhere the interpreter expects to find an expression, like when you declare a variable name, we can use an expression that is NOT named as the value. In the context of functions, we call this an *anonymous function*. Remember that an expression simply returns a value, so it makes sense that we should be able to accomplish that with a function.

To reiterate, `function expressions` define a function, but instead of giving the name to the function itself, the function is left anonymous and the name is instead assigned to a variable.  

Let's take a look at a few more examples.

```js
// Instead of declaring a named function, we assign a function to a variable.
var calculateArea = function(width, height) {
  return width * height;
};

// We call this function the same way - using the variable that we assigned our anonymous function to
calculateArea(2, 1);
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

// Which can be seen here:
function bar() {
  console.log('y1', y);
  var y = 2;
  console.log('y2', y);
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

Here's an example of what this looks like:

```js
function defineVariables() {
  num1 = 10;
  var num2 = 20;
}

defineVariables();

console.log(num1);  // This will display 10.
console.log(num2);  // This will give a ReferenceError: : num2 is not defined.
```

The good news is all you have to do to avoid this is to always remember to use the `var` keyword when declaring a new variable!

## Name Your Parameters Carefully

Now that we've talked a little bit about scope, we know that we have access to global variables inside of a function, right?  However, what happens if I name a parameter the same as a global variable?  In this scenario, the interpreter will try to use which one it thinks you are talking about.  In most scenarios, it will work as you'd expect.  Let's take a look below at a happy path:

```js
var number = 10;

function test(number) {
  console.log(number + 2);
}

test(number);  // This will give 12
test(15);  // This will give 17
```

Here it will work just fine because the Javascript interpreter knows to refer to the number *parameter* when we invoke the function as opposed to the *global variable* number.  However, this is not always the case.  Let's look at a scenario where this doesn't work:

```js
var number = 10;

function test(number) {
  number = number + 2;
  console.log(number); // This will give 12
}

test(number);

console.log(number); // This will give 10
```

Here we are trying to reassign our global variable to whatever value I pass through as an argument plus two in our test function.  It logs the value we expect, when the function is invoked.  However, when we log what the global variable is, it remains the same as before.  The global variable wasn't reassigned...rather the parameter was reassigned a different value.

This is all very confusing.  But there's an easy way to avoid this confusion...make sure your parameters have a different name from your global variables!  Let's try that now...

```js
var num = 10;

function test(number) {
  num = number + 2;
  console.log(num); // This will give 12
}

test(num)

console.log(num); // This will also give 12
```

Hooray!  Now we are getting what we expected both inside of the function and globally.  Because we are using a different name, the interpreter knows which variable we are referring to.


# Arrays
An array is a complex data type. Instead of storing just one value, it stores an ordered list of values. You should consider using an array whenever you are working with a collection of values, or values that are related to one another.

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
var colors = [
  'white',
  'black',
  'pink'
];
```

## Accessing Values in Arrays
Each value in an array is automatically given a number called an index. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the above `colors` example, the following is true:

- color white has an index of 0
- color black has an index of 1
- color pink has an index of 2

You can change values in an array by using their index. Let's walk through it in the console:

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
`for` loops are commonly used to iterate over the items in an array. To do this, we use the property `length` and call it on the variable associated with the array we want to iterate over. This property returns the length of, or number of elements in, an array. Let's see what that looks like in practice:

```js
var fruits = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
  console.log("I have some " + fruits[i]);
}
```

You can see that instead of using a hardcoded number, we are using `fruits.length` in our condition. This means we will continue to loop over the array as long as the counter is less than the total number of elements in the array. That's pretty handy!

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


### Additional Practice  

* [JavaScript Playground](http://frontend.turing.edu/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.
### Dig Deeper  

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [Seven JS Quirks I Wish I'd Known About](http://developer.telerik.com/featured/seven-javascript-quirks-i-wish-id-known-about/#expdec)  
* [Adequately Good JS](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)  

