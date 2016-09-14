---
title: Foundations JS - II
---

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
- Calling the function is quite easy. Simply type the function name with it's parenthesis and any associated content within the parenthesis.

### Call a Function:
```javascript
myRadFunction();
```
When this code is read, ```myRadFunction()``` is "called", meaning all three statements within the function's body (those curly braces) gets run.
Let's go ahead and declare myRadFunction in the console together and then call it. What do you notice about the code as it is being run?

Create your own functions in the console:
- write a function that declares a ```firstName``` variable and a ```lastName``` variable, then alerts the user with a message that incorporates the full name, and then logs a random number to the console.
- write a function that assigns three different math equations to three different variables, then log the sum of the values of all three variables
- write a function that alerts the user with a message of "YO!", and then 

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


-----------------------
var as "optional" - not really: http://stackoverflow.com/questions/2485423/is-using-var-to-declare-variables-optional
