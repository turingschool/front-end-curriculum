---
title: "JS: Intro to Functions"
length: 120
tags: javascript, introduction, foundation, variables
---

## Learning Goals

* Be able to declare functions with and without parameters
* Understand how to call functions with and without parameters
* Make function expressions evaluate to something other than `undefined` using `return`

## Vocab

- `Function` A predefined and reusable group of behavior
- `Declare/Define` The initial writing of a function
- `Call/Invoke` Running a function
- `Parameters` The variables declared when a function is declared/defined
- `Arguments` The variables passed to a function when it's called/invoked

## Functions

Functions are a way to group statements together to perform a specific task. Functions are **reusable** blocks of code! Neat!

To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

### Anatomy of a Function:

```javascript
function nameOfFunction(/* parameters go here if needed */) {
  // statements go here
}
```

To declare a function, we use the JavaScript keyword `function`.

Then, you write the name of the function. Because functions perform an action, it's best to name it with an action verb! For example: `generateRandomNum`, `printGreeting`, `saveGroceryItem`, etc. Notice that the names are camel-cased!

After the name, notice the opening and closing parentheses (note: there is NO space between the name and the parentheses!). These parentheses can be empty, or they can contain parameters (more on those later).

The parentheses are followed by a space, and then by a pair of curly brackets! Your function code will go inside the curly brackets, in the order that you want the statements to run when the function is invoked (which we will get to in a little bit!).

Let's take a look at an example function.

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

Try creating your own functions in the console!

* Write a function that logs to the console a message of "YO!", and then logs a sum of five different integers.
* Write a function that assigns three different math equations to three different variables, then logs the sum of the values of all three variables.
* Write a function that declares a `firstName` variable and a `lastName` variable, then logs a message that incorporates the full name, and then logs a [random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to the console.
</section>

### Passing Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_ in the function declaration. These are place holders that you identify with appropriately named labels inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as a means to pass values.

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

## Functions, part II

### Getting A Value from A Function

Some functions return information to the code that called them. When a function performs a calculation, like 2 + 2, it will return the "answer" of 4, right?

<section class="call-to-action">
### Try it out

Open up a browser window, and head to the console.
* Write a function called `simpleMath` that adds 2 + 2
* Invoke `simpleMath` - what happened?
* What if you needed to use the result of `simpleMath` somewhere else in your code? For example, what if you needed to concatenate the result into a string: `"I need " + simpleMath() + " pizzas!"`
* Try it out and see what happens
* Journal some ideas about why this is happening!

</section>

I still need the keyword _return_ in order to return that value back from a function. Let's work with some return statements in functions with parameters in the console:

```javascript
function addTwoNumbers(num1, num2) {
  num1 + num2;
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function buildAHouse(material, cost) {
  console.log("I'm building a house!");
  return "My house is made of " + material + " and cost me $" + cost;
}

function buildAHouse(material, cost) {
  return "My house is made of " + material + " and cost me $" + cost;
  console.log("I'm building a house!");
}
```

Notice in the last example that when the `return` statement is called in a function, it ends function execution (the following lines do not run), and it specifies a value to be returned to the function caller. Here is the basic structure:

```javascript
// This is the formula:
return [expression];
// The expression to return. If the return is omitted, undefined is returned instead. The [] are meant to show that the expression is dynamic.
```
<section class="note">
### Note
If the expression is omitted/there is no return statement, `undefined` is returned instead.
</section>

The following return statements are all examples that would break function execution:

```javascript
return;
return true;
return false;
return x;
return x + y / 3;
```

<section class="call-to-action">
### Solo Practice
* Create a function called `saySomething` that requires no parameters. This function should return a message of your choice.
* Create a function called `showFavorites` that requires three parameters - a food, a movie, and an animal. Your function should return a string that uses either concatenation or interpolation to return the three favorite things in a string.</
* Create a function called `calculateAge` that takes a single parameter - a year. Your function should return the difference in years from the birth year from our current year, 2019.

If you finish early, try writing tackling [these functions](https://www.teaching-materials.org/javascript/exercises/functions)!
</section>

### Additional Resources & Practice

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.

