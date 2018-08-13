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

To stop the server, enter `control + c` in the terminal.

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

### Head On Over to the Docs!

Partner up, and let's look at the documentation for the libraries we'll use for server-side testing:

- [mocha](https://mochajs.org/) is used to actually run the tests
- [chai](http://chaijs.com/) gives us the ability to make assertions
- [chai-http](https://github.com/chaijs/chai-http) lets us make requests to our own server to check what the endpoints return

Use your partner as a teammate: let them know when you've found something, ask them questions, and communicate your process when you figure something out.

### Mocha

Take a look at the mocha documentation first. What do we need to run a test file using mocha? We want to be able to run the command `mocha --exit` in the terminal and have a test file run. What do we need to do?

You should have one unit test running (although it will not contain any assertions yet - we'll get there next).

### Chai

Now that we have a test file running, let's work on assertions. For this lesson we'll use the "should" style of assertions. Within a unit test, add an assertion to test that the number 2 is equal to the number 2. Get that unit test passing.

### Chai-HTTP

Lastly, we need to make a request to our server to check that are endpoints are returning what we expect, which is where the chai-http library comes in. Change your existing unit test to test the endpoint that should return all of the students. Remember to go through all of the parts of a response that we should test.

### Continue On!

1. Add a test for a POST request to add a new student (the test should fail because we do not have that endpoint yet, but this is TDD!).
1. Add the POST endpoint to get the test passing (there might be an additional library we need to add to get this endpoint to work...).
1. Add a check in the POST request endpoint to make sure that `lastname`, `program`, and `enrolled` are passed in the body of the POST request. Then write a test to validate this check.

### What Could Go Wrong? More Sad Paths

There are many more possibilities for route sad paths. Some could be:

* The resource requested at the endpoint does not exist (`/api/v1/students/5`, but student #5 does not exist in the database)
* For a POST request, the request does not contain all of the necessary data in the body (missing properties or null data)
* For a PUT request, the request body has missing properties or null data
* For a PUT request, a user tries to change a property of a record that does not exist in the database
* A user tries to change the primary key of a record
* A user submits duplicate data for table columns that must have unique record values
* And others!

### before and beforeEach

Server-side tests should run in isolation and each test should not leave artifacts in the database. For instance, the first test in the test file should not influence what happens with the fifth test. Therefore, we need to run migrations before we run the test suite and reset the database before each test.

If you're using a "real" database like postgreSQL with knex, you will typically need to:

 1. Before all tests, run the migrations for your test environment and seed the test database
 2. Before each test:
  * Clean out the database (delete records in all tables)
  * Seed your database with records

For this lesson, we're not using a real database, so we can just reset `app.locals` to the original data from the `students.js` file.

With our testing structure, we have built-in methods called `before` and `beforeEach`, and they run before all tests and before each test in the describe block they are scoped in, respectively. There is also `after` and `afterEach`, but there is a caveat with `afterEach`. If a test fails, the `afterEach` will _not_ run after that test, which can leave your database in a bad state. So be sure to put your database in a good state for every test even if one fails.

Let's write these methods within the `describe('API Routes', ...` block.

```javascript
before(done => {
  // Run migrations and seeds for test database
  done();
});

beforeEach((done) => {
  // Would normally run run your seed(s), which includes clearing all records
  // from each of the tables
  server.locals.students = students;
  done();
});
```

And at the top of the `routes.spec.js` file:

```javascript
const students = require('../students');
```

## Checks for Understanding

* What libraries do we use to test server-side endpoints?
* What is the difference between happy and sad path tests?
* What about a response should we test?

## On Your Own - In True TDD Style

Add tests for these requests, and then implement the routes:

* GET request for one student based on their name (happy path)
  - Normally, this will be an ID, but here we'll use the name of the student. The route would look something like `/api/v1/students/knuth`
* GET request for one student based on their name that does not exist in the database (sad path)
* PUT request to change a student's information (happy path)
* DELETE request to _destroy_ a student (happy path)
