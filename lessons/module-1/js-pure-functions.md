---
title: "JS: Pure Functions"
length: 120
tags: javascript, functions, functional programming
---

## Learning Goals

* Speak to what makes a function pure and the benefits it can offer
* Understand what side effects are and why it's important to avoid them
* Practice transforming impure functions into more pure and predictable functions

## Vocab

- `Pure Function` A function that has no side effects.
- `Side Effect` It is a state change that can be seen outside of a function call. (*such as changing a variable outside of a function's scope*)

## What is a pure function?

Over the last few weeks, you've begun writing multiple functions that complete various tasks and utilize parameters & arguments in different ways.  These tasks can include generating a random number, returning a new object, manipulating data, or making an update to the DOM.

A **pure function** is a function that is predictable and always returns the same results or output when given the same input.  It is very likely that you have already written some *pure* functions in past projects.  Let's take a look at an example:

<section class="answer">
### Impure vs Pure Function Example

**Impure Function:**
```js
var userEmail = "jeremiah@turing.io";

function confirmEmail() {
  return `Your email address is currently ${userEmail}`;
}

confirmEmail();  // "Your email address is currently jeremiah@turing.io"

userEmail = "jeremiah@turing.edu";
confirmEmail(); // "Your email address is currently jeremiah@turing.edu"
```

**Pure Function:**
```js
function confirmEmail(userEmail) {
  return `Your email address is currently ${userEmail}`;
}

confirmEmail("jeremiah@turing.io") // "Your email address is currently jeremiah@turing.io"

confirmEmail("jeremiah@turing.edu") // "Your email address is currently jeremiah@turing.edu"
```
</section>

<section class="call-to-action">
### On Your Own

Based on the above examples and definitions, answer the following:

1. What makes the first function impure?
2. In the second example, what makes the function pure?  If you call the function with the same argument, will you always get the same result?
3. What are the pros of making pure functions?  Are there any downsides?
4. Which of these do you think would be easier to test?  Why?
5. **Spicy:** 🌶️ Is it possible to make all functions pure?  What is an example where it would be impossible to make a function pure? 🌶️
</section>

## Side Effects!  What are they?
Another way of describing a pure function is that it's a function that has no **side effects**.  In other words, *it does not make any updates to the outside world*.  What do we mean by the outside world though?  This can involve anything outside of the function's scope such as making an update to a global variable like in the previous example.  Let's look at another example of a side effect:

```js
var totalSpent = 100;

function addCost(cost) {
  totalSpent += cost
}

addCost(20)
```

Take note of the global variable that is keeping track of how much a user has spent.  Can you tell if this function is pure or not?  Experiment running this code in the console and then log the `totalSpent` variable.  Did the value change?  Note that there are actually **TWO** side effects here:

1. Our `addCost` function is dependant on `totalSpent` in order to successfully perform it's task.  `addCost` will return an error if for some reason `totalSpent` was no longer available.  It is not completely dependant on it's input.
2. The second side effect is that `addCost` is programmed to mutate the `totalSpent` variable.  It is making an "update to the outside world."

<section class="call-to-action">
### On Your Own

* What would need to be changed in order to make our `addCost` function pure (*i.e. no side effects*)?
</section>

<section class="note">
### Notes To Remember
By keeping much of the logic of an application built on **pure functions**, it can make your code more predictable and safer.  Ultimately this will also allow your application to be easier to test and debug.  Following this structure can allow us to follow a more functional paradigm with your JS which can be significantly easier to use than other paradigms such as OOP (Object Oriented Programming).

**Pure functions** will always have a `return` statement as well as arguments/parameters.  Remember a pure function returns the same output if given the same input.  If there is no `return` statement, this is likely because it is updating something else in the "outside" world.

Not all functions are going to be pure.  Functions that must mutate data outside of the function's scope, update the DOM, or rely on some outside source are impure.  This is *okay*.  The goal is to make as much of the program as pure as possible and save the functions that require side effects for last!  By doing so, we are helping our future selves as well as future developers by calling out which functions are impure since that's where errors are most likely to occur! 
</section>

## Getting More Practice

Let's look at a few more examples.  In breakout groups, you will look at the next 3 exercises and determine if the function is pure or impure.  If the function is impure, pseudocode it out so that the function is pure!

<section class="call-to-action">
### In Breakout Rooms

Answer the following questions for the next 3 exercises:
1. Is the function pure?  Why or why not?
2. If the function is impure, what would need to be changed to make it pure?
3. **Spicy:** 🌶️ Pseudocode out what the function would look like if it was pure. 🌶️

**Exercise 1:**
```js
function determineSum(num1, num2) {
  return num1 + num2;
}

determineSum(2, 5) // 7
determineSum(-1, 4) // 3
```

**Exercise 2:**
```js
var friendsList = ["Jeremiah Black", "Robbie Jaeger"];

function addFriend(newFriend) {
  friendsList.push(newFriend);
  return friendList;
}

addFriend("Kayla Gordon");
// ["Jeremiah Black", "Robbie Jaeger", "Kayla Gordon"]

addFriend("Travis Rollins");
// ["Jeremiah Black", "Robbie Jaeger", "Kayla Gordon", "Travis Rollins"]
```

**Exercise 3:**
```js
var order = { restaurant: "Dominos", status: "delayed", remainingTime: 30 };

function updateOrder(status, newWaitTime) {
    order.status = status;
    order.remainingTime = newWaitTime;
    return "Delivery has been updated!";
}

updateOrder('on time', 15); // Delivery has been updated!
console.log(order); // { restaurant: "Dominos", status: 'on time", remainingTime: 15 }
```
</section>

<section class="checks-for-understanding">
### Checks for Understanding

1. Describe a **pure function** in your own words.
2. What are the benefits of using pure functions?  
2. What are some "red flags" that might make a function impure?
4. List at least 3 strategies that you can use to make a function pure.
</section>