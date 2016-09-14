---
title: Foundations Javascript 1
length:
tags: js, introduction, foundation, variables
---

### Goals

By the end of this lesson, you will know/be able to:

* Understand of what variables are
* Understand how to use variables
* Understand operators and how to use them

### Variables in Javascript

As we're writing code, there are many times when we want to be able to store a value so we have ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common that we need to have access to the same information more than once. A variable lets us do just that!


### What is a variable?

A variable is a place to store values. When we write scripts, we need to temporarily store small pieces of data. We store that data in variables.

A variable is, at it's most simple, a declaration. It's made up of two parts: the variable keyword, `var`, and the variable name, which can be whatever you choose. Let's see what that looks like:

```javascript
var myVariableName;
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

#### Your Turn

Declare 2 variables, one named "quantity" and one named "mythicalCreature"

### Variable Values

So, we have our variable. Now what? When we first create a variable it's value is undefined because it doesn't have a value yet. This is because we have to set that value! Let's add a value to our `myVariableName` variable:

```javascript
var myVariableName = "Hello, variable!";
```

We've added a couple of things to our variable. Let's go through them:

After our `var` keyword (a special word that the JavaScript interpreter knows is used to create a variable) and our variable name, we have an equals sign, `=`. That's called the _assignment opperator_, because we use it to _assign_ a value to our variable declaration.

Next, we see our _variable value_, which we've set to "Hello, variable!".

Until you've added the assignment operator and the variable value, the variable is considered _undefined_.

#### Your Turn

Assign values to your "quantity" and "mythicalCreature" variables.

### Using Variables to Store Data

Once we have a variable with a declared value, we can start to actually use that data.

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


#### Your Turn

What data type did you assign as the value in your "quantity" and "mythicalCreature" variables?

#### Using Variables Together

Now that we know about different data types and have values assigned to both of our variables, let's dive into using them together!

So far, we have:

```Javascript
var quantity = 3;
var mythicalCreature = " unicorns";
```

Let's make a new variable called "creatureCount" and assign the value as our quantity and our mythicalCreature.

```Javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = quantity + mythicalCreature
```

Open up the console in your browser, enter these in, and see what you get!

#### Your Turn

Make 4 new variables. Assign values with numeric data types to two of them, and string data types to the others. See what happens when you combine the two numeric variables together vs what happens when you combine the two string variables.

### Concatenating Variable Values

In the example above, we used a `+` to combine the values of two different variables. This is called _concatenation_, which is a series of values linked together.

We can concatenate html tags, text, numbers, and variable values. Let's revisit our example above to concatenate a more readable phrase as the value of our creatureCount variable:

```Javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
```

This is very useful when we want to append data to the DOM, because it means we can write out an entire HTML tag and concatenate in the data from our variable.

#### Your Turn

Write a complete sentence using paragraph tags and your "quantity" and "mythicalCreature" variables and assign it as the value of your "creatureCount" variable. Run it in your console.

<!-- NOTES on what to cover -->
<!-- variable values -->
<!-- naming/declaring variables -->
<!--  using a variable -->
<!--  numbers, operators -->
<!--  strings, string operators/concatenation -->

<!-- const, not let -->
<!-- introduction to arrays -->
<!-- what is a statement pg 56 -->
<!-- accessing values in an array -->

<!-- 70 - 73 and chapter 2 in duckett js book -->
