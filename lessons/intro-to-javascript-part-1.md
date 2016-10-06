---
title: Introduction to Javascript, Part 1
length: 180
tags: javascript
---

### Goals

By the end of this lesson, you will know/be able to:

* Understand what a variable is and how to use it
* Understand operators and how to use them
* Understand array literals and change/add values to them via their indices

### History of Javascript

Way back in the early days of the web, Brendan Eich created Javascript. Legend says he wrote it in 10 days in 1995 while was was working as an engineer at Netscape. He might have been walking up hill, both ways, through 10 feet of snow, too.

The language was first released with Netscape 2 in 1996. The name 'Javascript' was a oh-so-clever marketing push to try to pick up on the momentum of Sun Microsystem's popular language Java, but instead it lead to years of confusion about the names of these two mostly unrelated programming languages.

<!-- ### A Bit About the language

#### -->

### Data Types

There are  different Data Types in Javascript. It's important to understand why type of data you're dealing with, because then we can start to actually use that data!

The value of a variable is data, and there are three basic _data types_: numeric, string, and boolean. Let's go over what each of these is.

#### Numeric Data Type

This data type handles numbers. In JavaScript, numbers are written without commas so three thousand four hundred and seventy five would be written like this:

`3475`

Numbers can also be negative and decimals (also called "floats"), so we can write `-3475` and `0.5`

Note that we _do not_ enclose a number data type in quotes.

#### String Data Type

The string data type handles letters and other characters. It is always enclosed in quotes, and looks like this:

`'I am a string!'`

You can use either single or double quotes to wrap a string, but the opening and closing quotes need to match. A good rule of thumb is to pick a type of quote to use and then be consistent in it's use throughout a project.

Strings can be used for any kind of text. We use them regularly to add text to a page, and they can contain HTML markup.

#### Boolean Data Type

A boolean has one of two values: `true` or `false`. Think of it like a light switch: its either on or off.

Booleans can be very useful to help determine which part of a script should be run.

### Operators

Now that we know how to differentiate between different kinds of data, we can use operators to calculate their single value. There are 5 types of operators:

1. Assignment operators. Assign a value to a variable. (hint: you've got these down already) ``` var color = 'magenta';```

2. Arithmetic operators. Perform basic math. ```var addTwo = 2 + 2;```

3. String operators. Combine strings. ```var greeting = 'Hello! ' + 'Nice to meet you.';```

4. Comparison operators. Compare two values and return a __true__ or __false__. ```var buy = 3 > 5;``` (value of buy is false)

5. Logical operators. Combines __expressions__ and return true or false. ``` var buy = (5 > 3) && (2 < 4);```

<!-- ### Your Turn (in the console) -->

<!-- Add something to play with using operators to deal with data types -->

### Variables in Javascript

As we're writing code, there are many times when we want to be able to store a value so we have ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common that we need to have access to the same information more than once. A variable lets us do just that!

#### What is a variable?

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. Variable is a good name for this concept because it indicates the stored data can _change_(or vary) EACH time a script is run.

A variable is, at it's most simple, a declaration. It's made up of two parts: the variable keyword, `var`, and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
var myVariableName;
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

#### Your Turn (in the console)

Declare 2 variables, one named "quantity" and one named "mythicalCreature"

### Variable Values

So, we have our variable. Now what? When we first create a variable it's value is undefined because it doesn't have a value yet. This is because we have to set that value! Let's add a value to our `myVariableName` variable:

```javascript
var myVariableName = "Hello, variable!";
```

We've added a couple of things to our variable. Let's go through them:

After our `var` keyword (a special word that the JavaScript interpreter knows is used to create a variable) and our variable name, we have an equals sign, `=`. That's called the _assignment opperator_, because we use it to _assign_ a value to our variable declaration.

Let's test these additions in the console.

WAIT! Eeek! Why does my console still show 'undefined'?? Well JavaScript is designed as a dynamic language which means that the type (string, void, boolean …) of a function ```return``` value is not pre-defined. If a function does not use a ```return``` statement or uses an empty return statement with no value, JavaScript automatically returns _undefined_. That means in JavaScript every function returns something, at the very least an "undefined". Chrome will display the function return value (existent or not) in the console. An assignment also does not include a return value, so Chrome will display "undefined".

Okay, let's ask the console to give us the value of our variable. How do we do that?
Step 1: declare the variable and it's value
Step 2: call the variable
Step 3: dance for joy at seeing our assigned value of "Hello, variable!"

Until you've added the assignment operator and the variable value, the variable is considered _undefined_.

#### Your Turn (in the console)

Assign values to your "quantity" and "mythicalCreature" variables.


### Using Variables Together

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
var creatureCount = quantity + mythicalCreature
```

Open up the console in your browser, enter these in, and see what you get!
Now change the value of your quantity variable and ask the console for the creatureCount value again.

#### Your Turn (in the console)

Make 4 new variables. Assign values with numeric data types to two of them, and string data types to the others. See what happens when you combine the two numeric variables together vs what happens when you combine the two string variables.

### Concatenating Variable Values

In the example above, we used a `+` to combine the values of two different variables. This is called _concatenation_, which is a series of values linked together.

We can concatenate html tags, text, numbers, and variable values. Let's revisit our example above to concatenate a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
```
This is very useful when we want to append data to the DOM, because it means we can write out an entire HTML tag and concatenate in the data from our variable.

### Rules for Naming Variables

- Name must begin with a letter, dollar sign `$`, or an underscore `_`. It must NOT begin with a number.
- Name can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name.
- You cannot use keywords or reserved words.
- All variables are case sensitive.
- Use names that describe the kind of information you plan to assign the variable.
- If your variable is made up of more than one word, then use camel case for every word AFTER the first word, which should be lower case.

### Arrays

An array is a special type of variable. Instead of storing just one value, it stores an ordered list of values. You should consider using an array whenever you are working with a list of values, or values that are related to one another.

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

### Accessing Values in Arrays

Each value in an array is automatically given a number called an index. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the above colors example, the following is true:

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
colors[2] = 'blue'

// Check the value of colors
colors

```

#### Your Turn (in the console)

- create an array of cars
- change the values within the array
- add a new car to the array

### Statements
A script is a series of instructions that a computer can follow one by one. Each individual instruction is known as a statement. Each statement in javascript is followed by a semicolon. Example statement:

```javascript
console.log('BOOM');
```

### Functions
Functions are a way to group statements together to perform a specific task. Functions are reusable blocks of code. To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

#### Anatomy of a Function:
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

#### Call a Function:
```javascript
// Calling a function w/out arguments
myRadFunction();

// Calling a function with arguments
myRadFunction(arg1, arg2);
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

### Functions - Named or Anonymous?

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
- When a function is treated as an expression, the interpreter won't process it until it gets to that statement. This means you cannot call the anonymous function _before_ the interpreter discovers it. It also means any preceding code up to that point could potentially alter what goes inside that function.
- Anonymous functions are good for:
  - code that you really only need to run once in a task, rather than something you need to repeatedly call in other parts of the script
  - as an argument, that will calculate a value on the fly as it is being passed into another function
  - assigning values to a property of an object
  - event handlers & listeners to perform a task when an event occurs

# Variable Scope

Now that we know about functions, let's talk about variables again. _Where_ you declare a variable affects where it can be used within your code. If you declare a variable within a function, it can only be used in that function. This is known as the variable's scope. When we talk about variables in regard to their scope, there are two types:

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

Don't worry if this doesn't completely make sense right now. We'll go over it again!

### The Variable Danger Zone

Keep this in mind as you're making new variables:

Variables sans the keyword  ```var```
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - are bad practice

The good news is all you have to do to avoid this is to always remember to use the `var` keyword!
