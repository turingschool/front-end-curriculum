---
title: Recursion
length: 1 hour
tags: recursion, javascript
module: 2
---

Have you ever looked up a word in the dictionary and you got a circular definition? I looked up `Linguistic` in the dictionary and got this specific definition. `Relating to language or linguistics`. It doesn't make any real sense to use the same word inside of it's own definition because you're not really defining what's going on.

In essence this is exactly what recursion is. It may not make too much sense from a linguistic stand point, but it can be pretty effective from a programatic stand point.

## Iterative vs Recursive?

Though recursion can be really great there might be a couple things to consider when figuring out if you should really use this technique. When using recursion you should probably consider a couple of things.

### Readability is first

At the end of the day readability is going to be one of the more important things for you. In other words don't be clever unless you actually have to. As developers you might feel the tension to want to be as clever as humanly possible. There is this notion that less lines of code is better. That is not really true.

In some cases you'll find that a recursive loop might be a little easier to understand vs doing it iteratively and visa versa. You typically want to look at readability first before you start thinking about performance and such.

### Call Stacks and stuffs...

We can't talk about recursion without talking about the call stack. One draw back to recursion especially in Javascript is that you can get a stack overflow. Currently in chrome you have about 10,000. Which is a lot and for most of us we don't have to think to much about our functions really ever overflowing the stack.

The problem with JavaScript is that the javascript engine doesn't necessarily optimize the function call within a recursive function and when you're dealing with a lot of logic or doing some mad deep recursion you'll notice that the stack will actually overflow. Recursion is really great from a functional coding stand point, but one if it's draw backs is that it has a very large footprint. It can be an expensive process.

## So how do I actually use this?

Recursion is one of those things that kind of throw you for a loop (not trying to be funny. I actually typed this out...). You just have to remember when to tell the loop you want it to stop.

A key part to a recursive function is the exit statement.  Consider the following code.

```
const chicken = () => {
  return egg();
}
const egg = () => {
  return chicken();
}
console.log(chicken() + " came first.");
```

There is no exiting statement so this function just continues to call itself until it blows up haha. What you want to do is make sure you provide a way out for your function. When I'm writing a recursive function I will typically write out the escape statement first.




## Your Turn

Let's actually write some code out!

- Take the first 5 minutes to understand the problem
- Take the next 5 minutes to explain to the person next to you what you think needs to happen.

### Challenge 1

Write a recursive function that will take this array `[1,2,3,4,5,6]` and when called outputs `21`

### Challenge 2

Create a function called `countDown` that when it's called `countDown(10)` you will see the starting number decrement every second.  

### Challenge 3

You already did this but write a function that will reverse a string recursively.
