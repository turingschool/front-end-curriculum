---
title: Intro to the Backend
length: 60 minutes
tags: node, express, server, backend
---

### Learning goals
* Gain a better sense of how code runs on the server
* Learn how a minimal server can be created using Express
* Experiment with server side code, to return different results

### Vocab
* `Server` A specialized, network enabled, computer
* `Express` A javascript library for creating server side code

### Taking a look behind the curtain
Up to this point, we've only been working on the frontend. All the code we've
written runs in the browser, and is user facing. While most users won't peek
under the hood to see what the code looks like that is creating their
experience, there isn't anything stopping them.

However, in the real world, applications are dependent on data from external
sources. Those external sources are the world of the backend. If you type in a
search request to Google for images of kittens, the code that is running to
determine which kittens you want to see is hidden away from you. That's the
backend.

What's important to recognize is that just like the front end, backend code is
just executing instructions. Today, you'll start to see how you can leverage
what you already know about JavaScript to start writing your very own server
code!

### Getting started
We're going to be using
[this repo](https://github.com/wvmitchell/intro-to-the-backend) for the rest of
the lesson, so go ahead and clone it to your own machine, and follow the set up
instructions. 

<section class="call-to-action">
Once you've cloned it to your machine and installed the dependencies, take 3
minutes and read through the code in index.js. Then discuss the following with a
partner

* What looks similar to code you've written before?
* Using the terms of art that you're already familiar with, describe to your
  partner what you see in the code. It's ok if you don't know what it does yet.
</section>

### What are we looking at?

## Starting Express
Let's break this down into it's most critical components. First, at the top of
the file we see:

```javascript
const express = require('express')
const app = express()
const port = 3000
```

This is where we are loading Express into our application. Express will allow us
to more easily interact with the networking capabilities of the machine using
JavaScript syntax that will feel familiar. `const app` creates a new instance of
an Express application, which is just a fancy Object with lots of built in
methods. `const port` is exactly what it looks like, a variable containing the
integer 3000.

## Listening for requests
Now, let's drop down to the bottom of the file:

```javascript
app.listen(port, () => console.log(`Listening on port ${3000}`)
```

Remember from our previous lesson on [how the web
works](http://localhost:4000/lessons/module-2/how-the-web-works.html) that a
server is waiting for requests to come in from clients. `app.listen` is a method
that tells our Express application to start listening for those requests. 

The first argument it takes is a port number. You can think of this like a
communication channel. Your computer (and all network enabled computers) have
many ports, which can be utilized for sending and recieving messages. In this
case, we've decided to use the number 3000, which is a totally arbitrary choice.
The port number must be an unsigned 16-bit number (between 0 and 65535).

Hopefully, you were able to identify the second argument as a callback function.
In this case, the callback function will execute once our `app` successfully
starts listening for incomming messages on port 3000. 
