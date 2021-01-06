---
title: Asynchronous JavaScript
length: 90
tags: javascript, asynchronous, promises
module: 2
---

[//]: Instructor note (this is a comment in markdown) - This lesson should follow after the fetch lesson.

### Learning goals
* Understand why we need asynchronous javascript
* Understand what happens behind the scenes when asynchronous javascript runs and the steps it goes through

## Vocab

- `Execution Call Stack` A data structure for the interpreter to keep track of its place in a script that calls multiple functions. It is single threaded and LIFO (Last In First Out)
- `Browser APIs` Built in APIs that have a separate execution context from your code (They act as separate threads) examples include `setTimeout` and `fetch`
- `Event Queue` A data structure that holds functions returned from Browser APIs that are ready to go back on the stack. It is FIFO (First In First Out)
- `Event Loop` Middleman between event queue and call stack. Checks if call stack is empty and adds functions from the event queue

Let's talk more about JavaScript and it's ability to be asynchronous. What does that mean, and how can we wrangle or take advantage of that fact?

Please note that this class talks about asynchronous JavaScript, _not_ `async await`.

<section class="call-to-action">
### Review

On the sticky notes in [this Miro board](https://miro.com/welcomeonboard/i40kgO9F0Cv9RGYpBiwCGt82MgfJhFtyVRpYpXgCcmYwzBToKyg2KIXC1vEx5vIG), answer the following with your breakout group:
- Everything you know about / questions you still have on asynchronous code
- Everything you know about / questions you still have on fetch
- Everything you know about / questions you still have on execution contexts & the call stack
</section>

## Introduction

When we say **single-threaded**, that could be read as doing one thing at a time, one-by-one until the code is done. When we say **asynchronous**, that could mean that multiple things are being done at different times. How can JavaScript do both? They seem to be in conflict with one another.

<section class="call-to-action">
### On Your Own

Take 8 minutes to read [this article](https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd){:target="\__blank"} about how JavaScript is asynchronous and also single threaded.

</section>

Notice that this article does not mention "promises", which is a way to deal with asynchronous JavaScript that we have been using with `fetch`.

<section class="call-to-action">
### With Your Partner

Given the following code snippet:
```javascript
console.log('ramen');

fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

console.log('burrito');
```

How does `fetch` fit in with the code above and below it? What order will the console logs show up in and why? (It's ok if you're guessing at this point - we'll )
</section>


## Call Stack and Event Loop

How can JavaScript keep track of what code or function is running at any given time? How can we keep track or visualize how to expect the code to behave? JavaScript handles this using a few tools: the call stack, event loop, and a queue.

Let's take a look at [this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ){:target="\__blank"} that has some great visualizations for the call stack, event loop, and queue. Pay close attention during the following points:

* 4:15-6:00 (call stack with synchronous functions)
* 6:40 (stack overflow example)
* 7:20-8:50 (imagine if `fetch` were synchronous - we would have to wait for each request to complete before moving on)
* 10:23-11:46 (asynchronous callbacks - `setTimeout`, what happens to the `setTimout` on the stack?)
* 11:47-14:50 (intro to the event loop)

Please take notes and pay special attention to the vocab words at the top of this lesson as you watch

<section class="checks-for-understanding">
### Check for Understanding

Using the terms of art (vocab) described at the top of the lesson. Explain what happens with each line of code in the previous example from class
</section>

### Additional Resources
* [event loop article](https://www.educative.io/edpresso/what-is-an-event-loop-in-javascript){:target="\__blank"}
* [Loupe](http://latentflip.com/loupe){:target="\__blank"}
* [mdn async deep dive](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous){:target="\__blank"}
