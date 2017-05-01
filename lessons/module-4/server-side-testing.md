---
title: Server-Side Testing
length: 90
tags: express, testing, server, node
---

## Overview

Server-side testing is another crucial facet of testing. As your app grows in size and complexity, there will be more points of potential failure. Server-side testing focuses on looking at a request coming from a client, processing the request, and testing if the correct response to the client is given.

## Why is This Important?

Everyone draw a diagram of what you think your Jet Fuel app is doing - the entire process of the request and response cycle.

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

Clone down this basic app to get started.

### Setup

Let's add our testing tools from the terminal.

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

### Sad Path


## On Your Own - In True TDD Style

## Additional Resources
