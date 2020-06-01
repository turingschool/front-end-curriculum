---
title: Asynchronous JavaScript
length: 90
tags: javascript, asynchronous, promises
module: 2
---

[//]: Instructor note (this is a comment in markdown) - This lesson should follow after the fetch lesson.


Let's talk more about JavaScript and it's ability to be asynchronous. What does that mean, and how can we wrangle or take advantage of that fact?

Please note that this class talks about asynchronous JavaScript, _not_ `async await`.

<section class="call-to-action">
### Review

On the sticky notes at your tables, respond to one or more of the following at the boards:
- Everything you know about / questions you still have on asynchronous code
- Everything you know about / questions you still have on fetch
- Everything you know about / questions you still have on execution contexts & the call stack
</section>


## Introduction

When we say **single-threaded**, that could be read as doing one thing at a time, one-by-one until the code is done. When we say **asynchronous**, that could mean that multiple things are being done at different times. How can JavaScript do both? They seem to be in conflict with one another.

<section class="call-to-action">
### On Your Own

Take 15 minutes to read [this article](https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd){:target="\__blank"} about how JavaScript is asynchronous and also single threaded.

### Discuss

With someone next to you, take turns discussing what you just read.
</section>

Notice that this article does not mention "promises", which is a way to deal with asynchronous JavaScript that we have been using with `fetch`.

<section class="call-to-action">
### With Your Partner

Create a diagram similar to the article to demonstrate what happens when we use `fetch`. How does `fetch` fit in with the code above and below it?
</section>


## Call Stack and Event Loop

How can JavaScript keep track of what code or function is running at any given time? How can we keep track or visualize how to expect the code to behave? JavaScript handles this using a few tools: the call stack, event loop, and a queue.

Let's take a look at snippets of [this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ){:target="\__blank"} that has some great visualizations for the call stack, event loop, and queue.

* 4:15-6:00 (call stack with synchronous functions)
* 6:40 (stack overflow example)
* 7:20-8:50 (imagine if `fetch` were synchronous - we would have to wait for each request to complete before moving on)
* 10:23-11:46 (asynchronous callbacks - `setTimeout`, what happens to the `setTimout` on the stack?)
* 11:47-14:50 (intro to the event loop)

After this point, the talk is good but gets into a lot of detail.

<section class="checks-for-understanding">
### Check for Understanding

Let's take this event loop example with `setTimeout` and translate it to what we have seen with `fetch` and promises. Note that the event loop will wait until the call stack is empty to run the `.then` from a fetch call.
</section>
