---
title: Server-Side Testing
length: 90
tags: express, testing, server, node
---

## Overview

Server-side testing is another crucial facet of testing. As your app grows in size and complexity, there will be more points of potential failure. Server-side testing focuses on looking at a request coming from a client, processing the request, and testing if the correct response to the client is given.

## Why is This Important?

Everyone draw a diagram of how you envision your Jet Fuel app working - the entire process of the request and response cycle.

Notice the complexity. With the back end added to your app, there are many more things that can go wrong. When you don't see something working on the page, it's difficult to track down the source. Let's look at the structure of a typical server-side test.

## Basic Structure of a Server-Side Test

1. Setup (if testing route that interacts with the database)
2. Make a request to a route
3. Get a response from the server
4. Test the response
5. Clean up (if testing route that interacts with the database)

What do we test the response for?
* The status code
* What content type do we expect? (json, plain text)
* What is the basic structure of the response body? (object, array)
* What should be contained in the body?
  - If it's an array, how many elements should be in the array?
  - If it's an object, what properties and values should the object have?

## Let's Go Through Some Examples

We'll be using [mocha](https://mochajs.org/) for our test runner, [chai](http://chaijs.com/) for our assertion library, and [chai-http](https://github.com/chaijs/chai-http) for our request generator.

Clone down [this basic app](https://github.com/robbiejaeger/test-express) to get started.

### Setup

Take a look at the server file, `server.js` to see what this app is doing out of the box.

We're going to be dealing with a "fake" database using `app.locals`. Add this code to your server file:

```javascript
app.locals.students = require('./students')

app.get('/api/v1/students', (request, response) => {
  response.status(200).json(app.locals.students)
})
```

The `students.js` file just contains an array of student objects, and we are loading the contents of this file into a local variable in our server called `app.locals.students`. Imagine this `app.locals.students` is our database. 

Now let's add our testing tools from the terminal.

```shell
npm install -D mocha chai chai-http
```

Create a directory called `test` and create a new test file called `routes.spec.js` within the `test` directory. Open the new test file.

At the top of the `routes.spec.js` file, add:

```javascript
var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('API Routes', function(){

})
```

### Happy Path

(getting the GET request to the root)

### Sad Path

(Bad route test - should get 404, add 404 handling)

### Test an API Call

(GET request for all of the things)

## On Your Own - In True TDD Style

Add tests for:

* GET request for one resource based on the id
* POST request to add something new
* PUT to change something
* PATCH?
* DELETE to remove something

## Additional Resources
