---
title: Foundations JS - II
tags: js, introduction, foundation, variables
---
### Goals

By the end of this lesson, you will know/be able to:

* Declare and call functions with or without parameters
* Understand different types of functions and their uses
* Understand variable scope

# Statements
A script is a series of instructions that a computer can follow one by one. Each individual instruction is known as a statement. Each statement in javascript is followed by a semicolon. Example statement:

```javascript
console.log('BOOM');
```

# Functions
Functions are a way to group statements together to perform a specific task. Functions are reusable blocks of code. To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

## Anatomy of a Function:
```javascript
function myRadFunction() { 
  var myFirstStatement = "Assigning a string to a variable called 'myFirstStatement'"
  alert('This is my second statement!');
  console.log(myFirstStatement);
}
```
- You declare a function using the keyword ```function```. 
- You can name the function anything you want, but it must include a set of parentheses after the name, which can be empty, or accept parameters.
- You must follow the name of the function with a set of curly braces, which act as bookends to hold the set of statements you want the function to run when it is called.
- Calling the function is quite easy. Simply type the function name with it's parenthesis and any associated parameters.

### Call a Function:
```javascript
// Calling a function w/out parameters
myRadFunction();

// Calling a function with parameters
myRadFunction(param1, param2);
```
When this code is read, ```myRadFunction()``` is "called", meaning all three statements within the function's body (those curly braces) gets run.

#### Your Turn
Let's go ahead and declare myRadFunction in the console together and then call it. What do you notice about the code as it is being run? What do you notice about the code being run if you swap the 2nd and 3rd statements?

Create your own functions in the console:

- write a function that declares a ```firstName``` variable and a ```lastName``` variable, then alerts the user with a message that incorporates the full name, and then logs a random number to the console.
- write a function that assigns three different math equations to three different variables, then log the sum of the values of all three variables
- write a function that alerts the user with a message of "YO!", and then logs to the console a sum of eight different integers.

### Pass Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_. These are bits of information that you identify with appropriately named labels (you get to decide the notation) inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as means to pass values. 

#### Parameters vs. Arguments
Its a subtle difference. Basically, when you declare a function, and you stipulate the function will accept some bits of information, those are parameters. Then, when you pass the values of the parameters, those are called arguments. Like this:

```javascript
// parameters named on declaration of function
function myDreamCar(make, model) {
  return "Buy me " + make " " + model;
}

// arguments "Audi" and "R8" passed into a called function
myDreamCar("Audi", "R8"); 
```

### Getting A Single Value from Functions:
Some functions return information to the code that called them. Wait - what? When a function performs a calculation, like 2 + 2, it will return the "answer" of 4, right? Yes, AND, you still have to tell it to do so. Let's work with some return statements in functions with parameters in the console: 

```javascript
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function addTwoNumbers(num1, num2) {
  num1 + num2;
}

function addTwoNumbers(num1, num2) {
  console.log('Boom');
  return num1 + num2;
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log('Boom');
}

```

The return statement ends function execution and specifies a value to be returned to the function caller. It looks like this: 

```javascript
return [[expression]]
// The expression to return. If omitted, undefined is returned instead.
```

When a ```return``` statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, undefined is returned instead. The following return statements all break the function execution:

```javascript
return;
return true;
return false;
return x;
return x + y / 3;
```

### Getting Multiple Values from Functions:
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
var areaThree = getSize(5, 1, 2)[0]
var volumeOne = getSize(2, 2, 2)[1];
var volumeTwo = getSize(1, 8, 7)[0];
```

### Functions - Famous or Anonymous?
Remember expressions? What do they do? :smiling_imp: 
Where can expressions be used? 
Can a function return a value?
Can a function be an expression?

So far, we've mostly been working with *named functions*. Through *function declaration* ```function myNamedFunction()``` we create a function that we intend to call later in our code via the name we gave it. Hmmmm... that is kind of cool...in that it reminds me of when we were naming/assigning variables. So a named function, is kind of like that. We create a name, then assign a series of instructions (the function) to that name, and we get to use it all over the place, simply by calling the name of the function with its parentheses. 

```javascript
// Declare a named function
function myRadFunction(parameter) {
  console.log(parameter);
  alert("All done!");
}

// Call that named function to execute
myRadFunction("Boom");
```

So what about that function as an expression bit? What the heck is that about? Anywhere the interpreter expects to find an expression, a la in a variable assignment for instance, we can use an expression that is NOT named, in which case we call it an *anonymous function*. 

```javascript
// Instead of declaring a named function, let's assign a function to a variable.
var area = function(width, height) {
  return width * height;
};

// Now let's assign another variable, that uses the thing we just did.
var size = area(3, 4)
```

Why does this matter? When should I care?

- A function declaration (that whole named function bit above) has a higher priority to the interpreter than an anonymous function. The interpreter always looks for variables and function declarations _before_ going through each section of a script, line-by-line. This means that a function created by function declaration can be called _before_ it has even been declared.
- When a function is treated as an expression, the interpreter won't process it until it gets to that statement. This means you cannot call the anonymous function _before_ the interpreter discovers it. It also means any preceding code up to that point could potentially alter waht goes inside that function.
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

- Variables sans the keyword  ```var```
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - bad practice
