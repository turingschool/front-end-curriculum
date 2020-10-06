---
title: "JS: Intro to Functions"
length: 120
tags: javascript, introduction, foundation, variables
---

## Learning Goals

* Be able to declare functions with and without parameters
* Understand how to call functions with and without arguments
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
function displayFunctionSkeleton(/* parameters go here if needed */) {
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

* Write a function that logs to the console a message of "Let's add!", and then logs a sum of five different integers.
* Write a function that assigns three different math equations to three different variables, then logs the sum of the values of all three variables.
* Write a function that declares a `firstName` variable and a `lastName` variable, then logs a message that incorporates the full name. 
* Write a function that logs a [random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to the console.

_Make sure you're thinking about your naming conventions!_
</section>

### Passing Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_ in the function declaration. These are place holders that you identify with appropriately named labels inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as a means to pass values.

### Parameters vs. Arguments
Its a subtle difference. Basically, when you declare a function, and you stipulate the function will accept some bits of information, those are parameters. Then, when you pass the values of the parameters, those are called arguments. Like this:

```javascript
// parameters named on declaration of function
function bakeCake(flavor, frosting, decoration) {
  return `I am baking a ${flavor} cake with ${frosting}. It will be decorated with ${decoration}.`
}

// arguments passed into a called function
bakeCake("carrot", "cream cheese icing", "walnuts");
```

What is returned? Could I call this function again but with different arguments?

## Functions, part II

### Getting A Value from A Function

Some functions return information to the code that called them. When a function performs a calculation, like 2 + 2, it will return the "answer" of 4, right?

<section class="call-to-action">
### Try it out

Open up a browser window, and head to the console
* Write a function called `performSimpleMath` that adds 2 + 2
* Invoke `performSimpleMath` - what happened?
* What if you needed to use the result of `performSimpleMath` somewhere else in your code? For example, what if you needed to concatenate the result into a string: `"I need " + performSimpleMath() + " pizzas!"`
* Try it out and see what happens
* Journal some ideas about why this is happening!

</section>

<section class="answer">
### Why This is Happening

We still need the keyword _return_ in order to return that value back from a function. Let's work with some return statements in functions with parameters in the console next!
</section>

### The Return Statement


```javascript
// take note of what is returned or logged when each function is invoked!

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

// how many times can we "return" in a function?
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
return "We've stopped executing!";

// and so many more!
```

<section class="call-to-action">
### Practice
1. Create a function called `saySomething` that requires no parameters. This function should return a message of your choice. 
2. Create a function called `showFavorites` that requires three parameters - a food, a movie, and an animal. Your function should return a string that uses either concatenation or interpolation to return the three favorite things in a string.
3. Create a function called `calculateAge` that takes a single parameter - a year. Your function should return the difference in years from the birth year from our current year, 2020.
4. Go back to #1 and change your function so that it takes in a parameter that lets us pass in the message as an argument.

If you finish early, try tackling [these functions](https://www.teaching-materials.org/javascript/exercises/functions)!
</section>

### Wrap Up

We've worked through a lot of content - some of which may be new, some is review. Let's take a minute to reflect.

<section class="checks-for-understanding">
### In Your Journal

1. Write down a few examples of function names that follow best-practice naming conventions.
2. How do we pass in information to a function?
3. What is the difference between a parameter and an argument?
4. How do you get values out of functions?
5. What is the different between a console log and a return statement? When would you use one over the other?
</section>

### Additional Resources & Practice

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.

