---
title: "JS: Intro to Functions"
length: 120
tags: javascript, introduction, foundation, variables
---

## Learning Goals

* Be able to declare functions with and without parameters
* Understand how to call functions with and without arguments
* Make function expressions evaluate to something other than `undefined` using `return`  
* Understand and use operators and conditionals  

## Pre-Work
Complete [this lesson on Statements, Expressions, and Operators](https://frontend.turing.edu/lessons/module-1/js-statements-and-expressions.html).

## Vocab

- `Function` A predefined and reusable group of behavior
- `Declare/Define` The initial writing of a function
- `Call/Invoke` Running a function
- `Parameters` The variables declared between the parenthesis of a function declaration.
- `Arguments` The values passed to a function when the function is called/invoked which become the values of the declared parameters.

## Functions

Functions are a way to group statements together to perform a specific task. Functions are **reusable** blocks of code! Neat!

To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

### Anatomy of a Function:

```javascript
function displayFunctionSkeleton(/* parameters go here if needed */) {
  // statements go here
}
```

To declare a function, we use the JavaScript keyword `function`.

Then, you write the name of the function. Because functions perform an action, it's best to name it with an action verb! For example: `generateRandomNum`, `printGreeting`, `saveGroceryItem`, etc. Notice that the names are camelCased!

After the name, notice the opening and closing parentheses (note: there is NO space between the name and the parentheses!). These parentheses can be empty, or they can contain parameters (more on those later).

The parentheses are followed by a space, and then by a pair of curly brackets! Your function code will go inside the curly brackets, in the order that you want the statements to run when the function is invoked (which we will get to in a little bit!).

Let's take a look at the example function below [in this Repl](https://replit.com/@hfaerber/Functions1#index.js). Go ahead and fork the repl.

```javascript
function makePizza() {
  var firstStatement = 'Pizza is AMAZING!';
  var pizza = "pepperoni";
  var secondStatement = "I love " + pizza + " pizza!";

  console.log(secondStatement);
  alert(firstStatement);
}
```

See if you can identify all the parts of the function. What is the function's name? Does it look like it takes in any parameters (just take a guess on this one)? How many statements does it contain? What do you think the statements do?

Let's find out by running/calling/invoking our function!

### Invoke a Function:
```javascript
makePizza();
```

When this code is read, `makePizza()` is "invoked," all 5 statements within the function's body (the space between those curly braces) get run, one line at a time, in order.  What do you think will happen if we swap the 4th and 5th statements?

<section class="call-to-action">
### Your Turn

Try creating your own functions in that same Repl!

* Write a function that logs to the console a message of "Let's add!", and then logs a sum of five different integers.
* Write a function that assigns three different math equations to three different variables, then logs the sum of the values of all three variables.
* Write a function that declares a `firstName` variable and a `lastName` variable, then logs a message that incorporates the full name.
* Write a function that logs a [random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to the console.

_Make sure you're thinking about your naming conventions!_
</section>

### Passing Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_ in the function declaration. These are place holders that you identify with appropriately named labels inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as a means to pass values.

### Parameters vs. Arguments
Its a subtle difference. Basically, when you declare a function, and you stipulate the function will accept some bits of information, those are parameters. Then, when you pass the values of the parameters, those are called arguments.  

In your repl, copy/paste the example below:

```javascript
// parameters are named in the declaration of a function
function bakeCake(flavor, frosting, decoration) {
  return `I am baking a ${flavor} cake with ${frosting}. It will be decorated with ${decoration}.`
}

// arguments are passed in when the function is called/invoked
bakeCake("carrot", "cream cheese icing", "walnuts");
```

1. What is returned?  
2. What happens when you invoke the function again passing in different arguments?  Try it a few times. Get weird!

A good way to think of parameters and arguments is this:  
* Parameters are the *placeholders* declared in the function declaration (similar to declaring a variable).  
* Arguments are the *assigned values* for each parameter/placeholder which are passed in each time the function is invoked.  

<section class="call-to-action">
### Your Turn

Write the following functions in that same Repl!

1. Write a function called `sayHi` that takes 1 argument - a name (as a string).
  - The function should log the phrase "Hi, <u>_nameBeingPassed_</u>!".   
  - Invoke your function 3 times, passing a different name argument each time.

1. Write a function called `greetFriend` that takes in 2 arguments - a name (string) and the timeOfDay (string of either "morning", "afternoon", "evening").
  - The function should log the phrase "Good _timeOfDayBeingPassedIn_, _nameBeingPassedIn_!"
  - Invoke your function 3 times, passing in different arguments each time.

1. Write a function called `countPets` that takes in 2 arguments - a type of pet (string - example "dog", "cat", etc) and a number.
  - The function should log the phrase "I have _numberBeingPassedIn_ _typeOfPetBeingPassedIn_."
  - Invoke your function 3 times, passing in different arguments each time.

  _Hint: you'll be using concatenation or interpolation_
</section>

## Functions, part II

### Getting A Value from A Function

Some functions need to return information to the code that called them. If we want to get a value back from our function when it's invoked, we need to use the `return` keyword.

```js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
```

<section class="answer">
### But why would we need to do that?

Sometimes we have functions that need to do some sort of calculation or data manipulation, then give us back the result so that we can use that value elsewhere in our code.  Often, we will take that returned value and use it to update what is being displayed to our user in an application.  
For example:
  - A user enters their birthday.  
  - We have a function that takes in that birthdate and uses it to calculate their age.  
  - Our function will then _return_ their age value.
  - We use that returned age value in our code that displays user info on the webpage.

You will often be invoking functions within other functions and using their return values elsewhere as you build your code.
Some functions return something, other functions just _do_ something.  

</section>


<section class="call-to-action">
### Try it out with [this Repl](https://replit.com/@hfaerber/Functions2-Returns#index.js). Fork the Repl.

- Take time to read through and understand the example.  Talk through the **Think About It** questions.
- Work through the **Try It** exercise.  Note any questions that come up.  Play around with it. Get weird!

</section>

### The Return Statement

```javascript
// take note of what is returned or logged when each function is invoked!

function buildAHouse(material, cost) {
  console.log("I'm building a house!");
  return "My house is made of " + material + " and cost me $" + cost;
}

function buildAHouse(material, cost) {
  return "My house is made of " + material + " and cost me $" + cost;
  console.log("I'm building a house!");
}

// how many times can we "return" in a function?
```

<section class="note">
### Make Note:
  - If there is no return statement in a function, `undefined` is returned instead.  
  - The return statement halts the execution of the function. This means any lines of code after the return statement will not run.  
  - A function can only return 1 value on any given invocation.  
</section>


<section class="call-to-action">
### Paired Practice
Work through <a href="https://replit.com/@hfaerber/Functions3-MorePractice#index.js">this practice REPL</a> with a partner
</section>

## Conditionals

Sometimes we want to perform an action based on some kind of condition. In English, we can say "If this thing is true, then do that." In JavaScript, conditionals are written very similarly and allow us to take a certain path in our program.

To use conditionals, we first need to use expressions, operators, and statements.

### Basic Conditional Structure

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
* `isTired`

Now for some real conditional examples. Copy paste these into a Repl and play around!

```javascript
function evaluateSleep(hoursOfSleep) {  
  if (hoursOfSleep < 6) {
    console.log("I am groggy.");
  } else {
    console.log("I feel fantastic!");
  }
}

evaluateSleep(8);
```
Try invoking evaluatesSleep with an argument of 4. What happens? Why?


```javascript
function findLocation(nextLocation) {  
  if (nextLocation === "home") {
    console.log("It's been a long day, let's go home!");
  } else if (nextLocation === "work") {
    console.log("Good morning, finding the fastest route to work!");
  } else {
    console.log("Finding location.  Found it!  Let's go!");
  }
}

findLocation("home");
```

Try invoking findLocation with an argument of "taco bell". What happens? Why?

<section class="call-to-action">
### Your Turn

In your Repl, declare and assign a variable named `favoriteAnimal`. Then, write a function with a conditional that logs a different message based on your favorite kind of animal.  Invoke the function and run the Repl.

Then change the value assigned to "favoriteAnimal", and run the Repl again to ensure your conditional is behaving as you expect.
</section>


### ES5 "Regular" functions vs ES6 Arrow Functions
So far we've only been working with plain ol' ES5 functions. **In Mod 1, we will focus only on ES5 functions.**  You might see ES6 arrow functions in your exploration and research but we prefer you stick to ES5 functions for now.  You'll dive into arrow functions in Mod 2 as you learn the nuances of their sometimes unexpected behavior.

<!-- So far in this lesson, we've only looked at regular functions, also known as **ES5 functions**. This refers to ECMAScript 2009, also known as ES5, which was the first major revision to JavaScript. ECMAScript 2015, also known as ES6, was the second major revision to JavaScript. With ES6 came **ES6 functions**, also called **arrow functions**.  

Arrow functions are really cool, but they can sometimes cause unexpected behavior if you're not careful. The concepts surrounding this behavior will be covered in Mod 2. That said, since you might run into some arrow functions here is a self-teachable preview!

<section class="call-to-action">
### Paired Practice

* In a breakout room, complete the exercise found on [this repl](https://repl.it/@kaylaewood/functionsPractice#index.js).
* Be prepared to discuss as a whole group after. Write down any questions that pop up along the way so we can discuss as a group!
</section> -->


### Wrap Up

We've worked through a lot of content - some of which may be new, some is review. Let's take a minute to reflect.

<section class="checks-for-understanding">
### In Your Journal

1. Write down a few examples of function names that follow best-practice naming conventions.
2. How do we pass in information to a function?
3. What is the difference between a parameter and an argument?
4. How do you get values out of functions?
5. What is the difference between a console log and a return statement? When would you use one over the other?
6. Write out the basic structure of an `if/else` conditional.
</section>

### Additional Resources & Practice

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.
