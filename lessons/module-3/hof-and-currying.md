---
title: Higher Order Functions & Currying
module: 3
---

## Agenda

- What's the definition of a Higher Order Function?
- What's the definition of a Curried function?
- When have we been using HOF's already?
- Live code some HOF's and Curried functions
- Write some curried functions as a class

## Learning Goals
Understanding of:
* Currying
* Higher order functions
* Potential uses

## Vocabulary
* Curry
* Higher Order Functions
* First class citizens

## First, lets see what you can find out
Before you go any further, lets practice our documentation searching skills.
Using whatever docs you can find, come up with a definition for what you think a
Higher Order Function is, and what you think a curried function is.

## Higher Order Functions
Higher Order Functions are a cool pattern in JavaScript that we haven't yet
encountered. Most simply, a Higher Order Function is a regular JavaScript
function. However, its defining characteristics are that it takes other
functions as arguments and/or it may return another function. You've already
encountered Higher Order Functions actually, you just didn't realize it. Every
time you pass a callback function, you're using a HOF. Let's look at an example:

```javascript
const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const compute = (operation, num1, num2) => {
  return operation(num1, num2)
}

compute(add, 5, 2) //=> returns 7
compute(subtract, 5, 2) //=> returns 3
```

In this case, our compute function is a Higher Order Function, because its takes
a function as one of its parameters.

## First Class Citizens
In JavaScript we say that functions are 'First Class Citizens'. What do we mean
by this? Take five minutes to read whatever blog posts or docs you can find, and
we'll come back to discuss as a class.

## Curry
Curried functions are a special flavor of Higher Order Functions. When we curry
a function, we break down it's arguments into a series of chained functions.
Consider the following multiplication function:

```javascript
const multiply = (x, y) => x * y

multiply(3, 2) //=> returns 6
```

Alternatively, we could represent this as a curried function:

```javascript
const multiply = x => y => x * y

const triple = multiply(3) //=> triple is now a function as well

triple(2) //=> returns 6
triple(3) //=> returns 9
```

This gives our multiply function more reusability than it would otherwise have.
Obviously this is a somewhat contrived example, but this is a common pattern in
functional programming.

## Lets get our hands dirty

Open up [this Repl](https://repl.it/@clynam/ninjaCurryStart) and fork it to
your own account. On your own, spend 15 minutes working on the first problem.
We'll do some show and tell once you're done. Then, in pairs, work through the
second problem for another 15 minutes, and we'll do the same thing.

## Ok, but when will I use this?

You've already been using Higher Order Functions anytime you use map, filter or reduce. Think about how these array prototype methods take in a callback function and their first argument - that makes them higher order functions!
It's unlikely you've done much, if any, currying. However, as previously mentioned, it's a
favorite pattern in functional programming. If you're interested in learning
more about functional programming,
[this](https://opensource.com/article/17/6/functional-javascript) article is a
great starting point.
