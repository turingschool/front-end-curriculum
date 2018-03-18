---
title: Introduction to JavaScript — Part I
title: JS I
length: 180
tags: javascript, introduction, foundation, variables
---

## Learning Goals

In this lesson we'll cover:

* JavaScript data types
* What a variable is and how to use it
* Operators and how to use them
* Conditionals and when to use them
* How to declare and call functions with or without parameters

## History of JavaScript

Way back in the early days of the web, Brendan Eich created JavaScript. Legend has it that he wrote it in 10 days in 1995 while was was working as an engineer at Netscape. The language was first released with Netscape 2 in 1996. The name 'JavaScript' was a oh-so-clever marketing push to try to pick up on the momentum of Sun Microsystem's popular language Java, but instead it lead to years of confusion about the names of these two mostly unrelated programming languages. If you'd like to learn more about where JS came from, take a look [here](http://speakingjs.com/es5/ch04.html).

## What is JavaScript and Why?

JavaScript was created to make the web more dynamic. It is an object-oriented scripting language made to run inside a host environment like a web browser and provide programatic control over the objects of that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

JavaScript can be _client-side_ and _server-side_, meaning that it can be used to control user-facing interfaces as well as handle the server-side extensions that connect with a database.

It's a highly versatile and flexible language, and has become the most commonly used language of the web.

Now that we know a little bit about JavaScript, let's talk about how to actually use it!

# Data Types

There are different data types in JavaScript. It's important to understand what type of data you're dealing with as you're writing code, and knowing the types of data are available to you is the first step.

Javascript has six primitive data types: 
- Null
- Undefined
- Boolean
- Number
- String
- Symbol (new in ECMAScript 6 we do not need to worry about this one)

 Let's go over what each of these is.

## Null Data Type

The datatype null only has one value which is `null`. It is used to show an intentional absence of a value. This is often used when creating a variable that could have a value later.

## Undefined Data Type

The datatype undefined only has one value which is `undefined`. A variable which has not been assigned a value has a datatype of `undefined`. A function returns `undefined` unless another value is returned.

## Boolean Data Type

A boolean has one of two values: `true` or `false`. Think of it like a light switch: it's either on or off.

Booleans can be very useful to help determine which part of a script should be run (as in conditionals, which we will talk about later).

## Numeric Data Type

This data type handles numbers. In JavaScript, numbers are written without commas so three thousand four hundred and seventy five would be written like this:

`3475`

Numbers can also be negative and decimals (also called "floats"), so we can write `-3475` and `0.5`

Note that we _do not_ enclose a number data type in quotes.

## String Data Type

The string data type handles letters and other characters. It is always enclosed in quotes, and looks like this:

`"I am a string!"`

You can use either single or double quotes to wrap a string, but the opening and closing quotes need to match. A good rule of thumb is to pick a type of quote to use and then be consistent in it's use throughout a project.

Strings can be used for any kind of text. We use them regularly to add text to a page.

### Your Turn

Let's take a couple of minutes to pair up and explain these three data types to your neighbor. Take turns, and make sure both of you have a chance to explain. This is to practice using the vocabulary and talking about code. Practice using your console to show the different data types.

# Variables in JavaScript

As we're writing code, there are many times when we want to be able to store a value so we have ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common that we need to have access to the same information more than once. A variable lets us do just that!

## What is a variable?

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. "Variable" is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run.

A variable is, at its most simple, a declaration. It's made up of two parts: the variable keyword, `var`, and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
var myVariableName;
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

## Rules for Naming Variables
- Names must begin with a letter, dollar sign, or an underscore. They cannot begin with a number.
- Names can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name.
- You cannot use keywords or reserved words (such as `var` or `for`).
- All variables are case sensitive.
- Use names that describe the kind of information you plan to assign the variable.
- If your variable is made up of more than one word, then use camel case for every word AFTER the first word, which should be lower case (thisIsMyVariableName).

### Your Turn (in the console)

Declare 2 variables, one named "quantity" and one named "mythicalCreature"

## Variable Values: Assignment

So, we have our variable. Now what? When we first create a variable, its value is undefined because it doesn't have a value yet. This is because we have to set that value! Let's add a value to our `myVariableName` variable:

```javascript
var myVariableName = "Hello, variable!";
```

We've added a couple of things to our variable. Let's go through them:

After our `var` keyword (a special word that the JavaScript interpreter knows is used to create a variable) and our variable name, we have an equals sign, `=`. That's called the _assignment operator_, because we use it to _assign_ a value to our variable declaration.

Let's test these additions in the console.

Okay, let's ask the console to give us the value of our variable. How do we do that?

- Step 1: declare the variable and it's value
- Step 2: call the variable
- Step 3: dance for joy at seeing our assigned value of "Hello, variable!"

Until you've added the assignment operator and the variable value, the variable is considered _undefined_.

### Your Turn (in the console)

* Assign values to your "quantity" and "mythicalCreature" variables.
  * What data type did you assign as the value in your "quantity" and "mythicalCreature" variables?
* Create three more variables, and give them each different data types (numbers, strings, booleans)

## Using Variables Together

Now that we know about different data types and have values assigned to both of our variables, let's dive into using them together!

So far, we have:

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
```

Let's make a new variable called "creatureCount" and assign the value as our quantity and our mythicalCreature.

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = quantity + mythicalCreature;
```

Open up the console in your browser, enter these in, and see what you get!
Now change the value of your quantity variable and ask the console for the creatureCount value again.

### Your Turn (in the console)

Make 4 new variables. Assign values with numeric data types to two of them, and string data types to the others. See what happens when you combine the two numeric variables together vs what happens when you combine the two string variables.

## Concatenating Variable Values

In the example above, we used a `+` as a string operator to combine the values of two different variables. This is called _concatenation_, which is a series of values linked together.

We can concatenate html tags, text, numbers, and variable values. Let's revisit our example above to concatenate a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
```
This is very useful when we want to append data to our webpage, because it means we can write out an entire HTML tag and concatenate the data from our variable.

# Expressions

An _expression_ results in a single value. Expressions can use operators to create this single value. Here are some example expressions:

This expression results in "apple"

`"apple"`

This expression results in 5

`2 + 3`

# Operators

Expressions rely on operators to calculate their single value. There are 5 basic types of operators to get you started:

1. [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators) assign a value to a variable. (hint: you've got these down already) `var color = 'magenta';`
2. [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) perform basic math. `var addTwo = 2 + 2;`
3. [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators) combine strings. `var greeting = 'Hello! ' + 'Nice to meet you.';`
4. [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators) compare two values and return a __true__ or __false__. `var buy = 3 > 5; // Value of buy is false`
5. [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators) combines __expressions__ and return a Boolean value of true or false. `var buy = (5 > 3) && (2 < 4);`

# Statements

A script is a series of instructions that a computer can follow one by one. Each individual instruction is known as a statement. Each statement in JavaScript is followed by a semicolon.

Example statements:

```javascript
console.log('BOOM');
alert('POW');
```

## Your Turn

Turn to your neighbor and explain what expressions, operators, and statements are. Take turns, and be sure you both have a chance to explain all three.


# Conditionals

Sometimes we want to perform an action based on some kind of condition. In English, we can say "If this thing is true, then do that." To do this in JavaScript, we can write conditionals to take a certain path in our program.

To use conditionals, we first need to use expressions, operators, and statements.


## Basic Conditional Structure

Let's now look at the basic structure of a conditional:

```javascript
if (expression) {
  statement;
} else {
  statement;
}
```

If the expression evaluates to `true`, then the statement(s) for that condition will run. Otherwise, if the expression is `false`, then the statement(s) will not run at all. The expression will usually contain an operator to make a comparison (that evaluates to true or false).

Some examples of expressions we could use for a conditional are:

* `myNum < 5`
* `userCity === "Denver"`
* `isTired === true`

Now for some real conditional examples.

```javascript
var cookie = "chocolate chip";

if (cookie === "chocolate chip") {
  alert("This cookie is a chocolate chip cookie!");
} else if (cookie === "oatmeal raisin") {
  alert("This is not a cookie :(");
} else {
  alert("I bet you wish you had a chocolate chip cookie");
}
```

```javascript
var hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  console.log('I am groggy.');
} else {
  console.log('I feel fantastic!');
}
```

### Your Turn

Write a conditional that gives a different alert message based on your favorite kind of animal.

# Functions
Functions are a way to group statements together to perform a specific task. Functions are reusable blocks of code. To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

## Anatomy of a Function:
```javascript
function makeStatement() {
  var myFirstStatement = "Assigning a string to a variable called 'myFirstStatement'";
  alert('This is my second statement!');
  console.log(myFirstStatement);
}]
```

- You declare a function using the keyword `function`.
- You can name the function anything you want, but it must include a set of parentheses after the name, which can be empty or accept parameters.
- Since functions perform some action, it is generally a good idea to use and action verb in the function name. i.e. `getSize`, `saveNote`, `generateRandomNumber`.
- You must follow the name of the function with a set of curly braces, which act as bookends to hold the set of statements you want the function to run when it is called.
- Calling the function is quite easy. Simply type the function name with it's parenthesis and any associated parameters.

## Call a Function:
```javascript
// Calling a function w/out arguments
makeStatement();

// Calling a function with arguments
makeStatement(arg1, arg2);
```

When this code is read, `makeStatement()` is "called", all three statements within the function's body (those curly braces) get run.

### Your Turn
Let's go ahead and declare makeStatement in the console together and then call it. What do you notice about the code as it is being run? What do you notice about the code being run if you swap the 2nd and 3rd statements?

Create your own functions in the console:

- Write a function that declares a `firstName` variable and a `lastName` variable, then alerts the user with a message that incorporates the full name, and then logs a random number to the console.

- Write a function that assigns three different math equations to three different variables, then log the sum of the values of all three variables

- Write a function that alerts the user with a message of "YO!", and then logs to the console a sum of eight different integers.

## Pass Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_. These are bits of information that you identify with appropriately named labels (you get to decide the notation) inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as means to pass values.

### Parameters vs. Arguments
Its a subtle difference. Basically, when you declare a function, and you stipulate the function will accept some bits of information, those are parameters. Then, when you pass the values of the parameters, those are called arguments. Like this:

```javascript
// parameters named on declaration of function
function createDreamCar(make, model) {
  return "My dream car is a " + make + " " + model;
}

// arguments "Audi" and "R8" passed into a called function
createDreamCar("Audi", "R8");
```

## Getting A Value from Functions:
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

When a `return` statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, undefined is returned instead. The following return statements all break the function execution:

```javascript
return;
return true;
return false;
return x;
return x + y / 3;
```

### Additional Practice

* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.
