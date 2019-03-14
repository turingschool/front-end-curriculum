---
title: Server-Side Testing With A DB
tags: express, testing, server, node, postgres
---

## Overview

Previously, we've learned about server side testing, focusing primarily on
making sure that we get the correct response codes back from our endpoints.
That's a great way to start, but generally, we'll be interacting with a database
of some kind. In this lesson, we'll review how to test the endpoints of our
express applications, layering on how to test their database interactions.

Before we begin, spend 2 minutes exploring our [starter
repo](https://github.com/turingschool-examples/test-express). Why do you think
we have separate keys for development and test in our knexfile?

## Getting started

We'll need to set up our `app.js` and test file to have access to our database, 
regardless of whether we're using the development DB or the test DB. Add the 
following to your own `app.js`, as well as `app.test.js`:

```js
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
```

This ensures that we'll be accessing the correct database when we're running our
test file. This is possible becuase our `knexfile.js` has a specific key/value
pair for `test`, and Jest will automatically set the NODE_ENV to `test` when
running our test suite.

