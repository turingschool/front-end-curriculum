---
title: Intro to the Backend
length: 60 minutes
tags: node, express, server, backend
---

### Learning goals
* Gain a better sense of how code runs on the server
* Learn how a minimal server can be created using Express
* Experiment with server side code to return different results

### Vocab
* `Server` A computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network.
* `Node.js` A development platform for executing JavaScript code server-side (back-end).
* `Express` A `Node.js` web application framework.

### Warm Up

Up to this point, we've only been working on the frontend meaning that all the code we've written runs in the browser and is user facing.  However, applications are typically dependent on data from external sources.  Think about every time you type in a search request to Google, that data is coming from another server that runs code written in the **backend**.  Today we'll start to look at backend code leveraging JavaScript and create our own server!

<section class="call-to-action">
## In Breakout Groups

Let's start by looking at an example.  Clone down [this repo](https://github.com/wvmitchell/intro-to-the-backend) and install the dependencies following the README.  Then take a look at the `index.js` and answer the following questions:

* What looks similar to the code you've written before?
* Using the terminology that you're already familiar with, describe to your
  partner what you see in the code. It's ok if you don't know what it does yet.
</section>

### What are we looking at?

Let's break this down into it's most critical components, starting with the first few lines:

```javascript
const express = require('express')
const app = express()
const port = 3000
```

##### What is Express?

Express is a small framework built on top of the web server functionality provided by Node.js.  It allows us to more easily interact with the networking capabilities of the machine using JavaScript syntax that will feel familiar.

- `const app` creates a new instance of an Express application, which is just a fancy Object with lots of built in methods.
- `const port` is exactly what it looks like, a variable containing the
integer 3000.

<section class="call-to-action">
### What is app.listen()?

Now, let's drop down to the bottom of the file and break down this line of code:

```js
app.listen(port, () => console.log(`Listening on port ${port}`)
```

- Based on the previous lesson, [how the web works](https://frontend.turing.edu/lessons/module-2/how-the-web-works.html){:target='blank'}, what do you think the app is listening for?
- What arguments does this method take?  What do you think a port is?
- Try running `node index.js` and note what you see in the terminal.
</section>

<section class="note">
### Note

Running `node index.js` will start up the server to wait for incoming connections.  You will not be able to execute other commands in the terminal when this is running (unless you open up another window/tab).  In order to stop the server, hit `ctrl c` simultaneously.
</section>

<section class="answer">
### Reviewing what app.listen() does

Let's start by reviewing what a server does. A server is waiting for requests to come in from clients. `app.listen` is the method that tells our Express application to start listening for those requests.  Without this line, our server would never start!

The first argument it takes is a *port number*. You can think of this like a
communication channel. Your computer (and all network enabled computers) have
many ports, which can be utilized for sending and receiving messages. In this
case, we've decided to use the number 3000, which is totally an arbitrary choice.
The port number must be an unsigned 16-bit number (between 0 and 65535).

Finally, our second argument is a callback function.  In this case, the callback function will execute once our `app` successfully starts listening for incoming messages on port 3000. We're logging this message just to give an indication in our terminal that it is running successfully.
</section>

<section class="call-to-action">
### Making our first request

The code that we looked at so far allowed us to listen for any kind of request,
but it didn't say anything about how we should *handle* those requests. Consider the remaining code in your `index.html`:

```javascript
app.get('/welcome', (request, response) => {
  response.send("Here's the information you requested")
})
```

This is known as a **request handler**.  Let's break this down and explore what is happening here:

*  How would you describe `app.get` using JavaScript terminology?  What do you think this is doing?
* What arguments does `app.get` take?
1. Run `node index.js` in your terminal and visit [localhost:3000/welcome](http://localhost:3000/welcome){:target='blank'}.
2. Now visit [localhost:3000/yolo](http://localhost:3000/yolo){:target='blank'}.  Do you see anything different?
3. Reviewing [how the web works](https://frontend.turing.edu/lessons/module-2/how-the-web-works.html){:target='blank'}, what do you think the `request` and `response` parameters are for?
4. Diving deeper, in your own words describe what `response.send` is doing.  Change the string to be an object including your name, birthday, and favorite quote.  Visit [localhost:3000/welcome](http://localhost:3000/welcome){:target='blank'} once more and see if anything different happens.
</section>

<section class="answer">
### The Breakdown (Only click after you have completed the above exercise!)

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
it will execute this callback function. The function takes two parameters;
`request`, which will contain information about the request that was sent from the
client, and `response`, which will give our server the ability to send
information back to the client.

#### response.send
Finally, we see `response.send("Here's the information you requested")`. We're
using the response object, provided by Express, to send a string back to the
client.
</section>

<section class="call-to-action">
### Time to experiment further!

Using what you've learned so far as a template, see if you can create three
request handlers:
* The first should use the path `/date`, and should respond to the client with the
  current date
* Next use the path `/myName`, and respond to the client with your own name
* Finally, use the path `/random`, and respond to the client a random number
  between 1 and 100
</section>

<section class="checks-for-understanding">
### Reviewing Key Takeaways

* What would you use the framework, **Express**, for?
* What is it called when a client sends a message to a server?
* What is it called when a server sends a message to a client?
</section>
