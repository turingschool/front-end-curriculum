---
title: Server-Side Testing
length: 120
tags: express, testing, server, node
---

## Overview

Server-side testing is another crucial facet of testing. As your app grows in size and complexity, there will be more points of potential failure. Server-side testing focuses on looking at a request coming from a client, processing the request, and testing if the correct response to the client is given.

## Why is This Important?

Everyone draw a diagram of how you envision your week-1 app working - the entire process of the request and response cycle from the client to the server and back to the client.

Notice the complexity. With the back end added to your app, there are many more things that can go wrong. When you don't see something working on the page, it's difficult to track down the source. Let's look at the structure of a typical server-side test.

## Basic Structure of a Server-Side Test

1. DB setup (if testing route that interacts with the database)
2. Make a request to a server route
3. Get a response from the server
4. Test the response
5. DB clean up (if testing route that interacts with the database)

What about the response should we test?

* The status code
* What content type do we expect? (json, plain text)
* What is the data structure of the response body? (object, array)
* What should be contained in the body?
  - If it's an array, how many elements should be in the array?
  - If it's an object, what properties and values should the object have?

## Let's Go Through Some Examples

We'll be using [mocha](https://mochajs.org/) for our test runner, [chai](http://chaijs.com/) for our assertion library, and [chai-http](https://github.com/chaijs/chai-http) for our request generator.

Clone down [this basic app](https://github.com/turingschool-examples/test-express) to get started.

Change into the new directory and run `npm install`.

To see that the server is running, run the command `node server.js` in the terminal, and head over to `localhost:3000` in your browser. You should see a page with the text "We're going to test all the routes!"

To stop the server, just enter `control + c` in the terminal.

### Setup

Take a look at the server file, `server.js`, to see what this app is doing out of the box. We're requiring Express, creating the server application that listens on port 3000, and then setting up one route for the path `localhost:3000/`.

In your projects, you're going to be testing API requests. So let's set up an API!

For this API, this server is going to have a very simplified database using `app.locals`. Add this code to the server file:

```javascript
app.locals.students = require('./students');

app.get('/api/v1/students', (request, response) => {
  response.status(200).json(app.locals.students);
});
```

The `students.js` file contains an array of student objects, and we are loading the contents of this file into a local server variable called `app.locals.students`. Imagine this `app.locals.students` is our database's students table. Here is more on [app.locals](https://expressjs.com/en/api.html#app.locals).

Now let's install our testing tools from the terminal.

```shell
npm install -D mocha chai chai-http
```

