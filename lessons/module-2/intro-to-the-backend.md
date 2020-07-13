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
[this repo](https://github.com/turingschool-examples/intro-to-the-backend){:target='blank'}
for the rest of the lesson, so go ahead and clone it to your own machine, 
and follow the set up instructions. 

<section class="call-to-action">
Once you've cloned it to your machine and installed the dependencies, take 3
minutes and read through the code in index.js. Then discuss the following with a
partner

* What looks similar to code you've written before?
* Using the terms of art that you're already familiar with, describe to your
  partner what you see in the code. It's ok if you don't know what it does yet.
</section>

### What are we looking at?

Let's break this down into it's most critical components. First, at the top of
the file we see:

```javascript
const express = require('express')
const app = express()
const port = 3000
```

This is where we are loading Express into our application. Express with allow us
to more easily interact with the networking capabilities of the machine using
JavaScript syntax that will feel familiar. `const app` creates a new instance of
an Express application, which is just a fancy Object with lots of built in
methods. `const port` is exactly what it looks like, a variable containing the
integer 3000.

Now, let's drop down to the bottom of the file:

```javascript
app.listen(port, () => console.log(`Listening on port ${3000}`)
```

Remember from our previous lesson on [how the web
works](https://frontend.turing.io/lessons/module-2/how-the-web-works.html) that a
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

Go ahead and run this code with `node index.js`. What do you see?

It might not seem like we've done very much, but in fact, we've just made a
working server! In the terminal you should see the output from our callback
function `Listening on port 3000`. Our sever is up and waiting for incoming
connections, and it will remain so until we kill the process (ctrl - c), or
restart our machine.

### Making our first request

In a browser, navigate to [localhost:3000/welcome](http://localhost:3000/welcome){:target='blank'}.

What do you see? Assuming your server is still running, you should see the text;
"Here's the information you requested."

Let's jump back to our server code, and take a look at the last remaining lines
in `index.js`:

```javascript
app.get('/welcome', (request, response) => {
  response.send("Here's the information you requested")
})
```

The code that we looked at so far allowed us to listen for any kind of request,
but it didn't say anything about how we should _handle_ those requests. That's
what this code does for us. Let's break it down:

#### app.get
`app.get` is a method that determines how our application should handle specific
kinds of requests made with the `GET` verb. There are other types of requests than `GET`, but for now,
we're only going to concern ourselves with `GET`. When you type a web address into
a browser, you are making a `GET` request to that address.

#### the path
The `app.get` method takes two arguments, the first is a string, and we call
this argument the path. In our example, the path is everything that comes after
`localhost:3000`.

#### the callback function
The second argument is a callback function, and this is where the meat of our
server lives. Whenever our server hears a `GET` request to the `/welcome` path,
it will execute this callback function. The function takes two paramenters;
`request`, which will contain information about the request that was sent from the
client, and `response`, which will give our server the ability to send
information back to the client.

#### response.send
Finally, we see `response.send("Here's the information you requested")`. We're
using the response object, provided by Express, to send a string back to the
client.

<section class="call-to-action">
### Time to experiment!

Using what you've learned so far as a template, see if you can create three
response handlers:
* The first should use the path /date, and should respond to the client with the
  current date
* Next use the path /myName, and respond to the client with your own name
* Finally, use the path /random, and respond to the client a random number
  between 1 and 100
</section>

### Check for Understanding
* What would you use the library Express for?
* What is it called when a client sends a message to a server?
* What is it called when a server sends a message to a client?
