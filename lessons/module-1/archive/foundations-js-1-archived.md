---
title: Foundations JS - I
length:
tags: js, introduction, foundation, variables
---

### Goals

By the end of this lesson, you will know/be able to:

* Understand what a variable is and how to use it
* Understand operators and how to use them
* Understand array literals and change/add values to them via their indices

# Variables in Javascript

As we're writing code, there are many times when we want to be able to store a value so we have ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common that we need to have access to the same information more than once. A variable lets us do just that!

## What is a variable?

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. Variable is a good name for this concept because it indicates the stored data can _change_(or vary) EACH time a script is run.

A variable is, at it's most simple, a declaration. It's made up of two parts: the variable keyword, `var`, and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
var myVariableName;
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

### Your Turn (in the console)

Declare 2 variables, one named "quantity" and one named "mythicalCreature"

## Variable Values

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

### Your Turn (in the console)

Assign values to your "quantity" and "mythicalCreature" variables.

### Using Variables to Store Data

Once we have a variable with a declared value, we can start to actually use that data.

The value of a variable is data, and there are three basic _data types_: numeric, string, and boolean. Let's go over what each of these is.

# Numeric Data Type

This data type handles numbers. In JavaScript, numbers are written without commas so three thousand four hundred and seventy five would be written like this:

`3475`

Numbers can also be negative and decimals (also called "floats"), so we can write `-3475` and `0.5`

Note that we _do not_ enclose a number data type in quotes.

# String Data Type

The string data type handles letters and other characters. It is always enclosed in quotes, and looks like this:

`'I am a string!'`

You can use either single or double quotes to wrap a string, but the opening and closing quotes need to match. A good rule of thumb is to pick a type of quote to use and then be consistent in it's use throughout a project.

Strings can be used for any kind of text. We use them regularly to add text to a page, and they can contain HTML markup.

# Boolean Data Type

A boolean has one of two values: `true` or `false`. Think of it like a light switch: its either on or off.

Booleans can be very useful to help determine which part of a script should be run.


### Your Turn (in the console)

What data type did you assign as the value in your "quantity" and "mythicalCreature" variables?

#### Using Variables Together

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

### Your Turn (in the console)

Make 4 new variables. Assign values with numeric data types to two of them, and string data types to the others. See what happens when you combine the two numeric variables together vs what happens when you combine the two string variables.

## Concatenating Variable Values

In the example above, we used a `+` to combine the values of two different variables. This is called _concatenation_, which is a series of values linked together.

We can concatenate html tags, text, numbers, and variable values. Let's revisit our example above to concatenate a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
```
This is very useful when we want to append data to the DOM, because it means we can write out an entire HTML tag and concatenate in the data from our variable.

## Rules for Naming Variables
- Name must begin with a letter, dollar sign ($), or an underscore (_). It must NOT begin with a number.
- Name can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name.
- You cannot use keywords or reserved words.
- All variables are case sensitive.
- Use names that describe the kind of information you plan to assign the variable.
- If your variable is made up of more than one word, then use camel case for every word AFTER the first word, which should be lower case.

# Arrays
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

## Accessing Values in Arrays
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

### Your Turn (in the console)

- create an array of cars
- change the values within the array
- add a new car to the array

# Expressions
An _expression_ evaluates (results in) a single value. Expressions rely on operators to create this single value. There are 2 types of expressions:

1. Expressions that assign a single value to a variable.
2. Expressions that use two or more values to return a single value.

# Operators
Expressions rely on operators to calculate their single value. There are 5 types of operators:

1. Assigment operators. Assign a value to a variable. (hint: you've got these down already) ``` var color = 'magenta';```
2. Arithmetic operators. Perform basic math. ```var addTwo = 2 + 2;```
3. String operators. Combine strings. ```var greeting = 'Hello! ' + 'Nice to meet you.';```
4. Comparison operators. Compare two values and return a __true__ or __false__. ```var buy = 3 > 5;``` (value of buy is false)
5. Logical operators. Combines __expressions__ and return true or false. ``` var buy = (5 > 3) && (2 < 4);```
