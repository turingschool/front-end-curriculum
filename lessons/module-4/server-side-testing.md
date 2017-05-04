---
title: Server-Side Testing
length: 90
tags: express, testing, server, node
---

## Overview

Server-side testing is another crucial facet of testing. As your app grows in size and complexity, there will be more points of potential failure. Server-side testing focuses on looking at a request coming from a client, processing the request, and testing if the correct response to the client is given.

## Why is This Important?

Everyone draw a diagram of how you envision your Jet Fuel app working - the entire process of the request and response cycle from the client to the server and back to the client.

Notice the complexity. With the back end added to your app, there are many more things that can go wrong. When you don't see something working on the page, it's difficult to track down the source. Let's look at the structure of a typical server-side test.

## Basic Structure of a Server-Side Test

1. DB setup (if testing route that interacts with the database)
2. Make a request to a route
3. Get a response from the server
4. Test the response
5. DB clean up (if testing route that interacts with the database)

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

Change into the new directory and run `npm install`.

To see that the server is running, run the command `node server.js` in the terminal, and head over to `localhost:3000` in your browser. You should see a page with the text "We're going to test all the routes!"

To stop the server, just enter `control + c` in the terminal.

### Setup

Take a look at the server file, `server.js`, to see what this app is doing out of the box. We're requiring Express, creating the server application that listens on port 3000, and then setting up one route for the path `localhost:3000/`.

In your project, you're going to be testing API requests. So let's set up an API!

For this API, this server is going to use a very simplified database using `app.locals`. Add this code to your server file:

```javascript
app.locals.students = require('./students')

app.get('/api/v1/students', (request, response) => {
  response.status(200).json(app.locals.students)
})
```

The `students.js` file contains an array of student objects, and we are loading the contents of this file into a local server variable called `app.locals.students`. Imagine this `app.locals.students` is our database. Here is more on [app.locals](https://expressjs.com/en/api.html#app.locals).

Now let's add our testing tools from the terminal.

```shell
npm install -D mocha chai chai-http
```

Create a directory called `test` and create a new test file called `routes.spec.js` within the `test` directory. Open the new test file.

At the top of the `routes.spec.js` file, add:

```javascript
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

describe('Client Routes', () => {

})

describe('API Routes', () => {

})
```

Run the test suite with the command `mocha` (you'll have to have mocha installed globally to run this command in the terminal). The test output should be something like:

```shell

0 passing (3ms)

```

This makes sense because we don't have any tests yet, but now we're all setup!

### Happy Path

The happy path is a test case we write for when we expect everything to go well. This includes a well-formed request and the appropriate response.

As a basic test, let's test the root endpoint to our app, `localhost:3000/`, or just `/`. In the `routes.spec.js` file. Use chai-http to make the request inside of the test.

The test for the route `/` becomes:

```javascript
describe('Client Routes', () => {
  it('should return the homepage with text', (done) => {
    chai.request(server)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.html
      response.res.text.should.equal('We\'re going to test all the routes!')
      done()
    })
  })
})
```

Here is the breakdown of the test:

1. Start a request to the server
2. For a specific route, use the request verb
3. When you get the response from the server, test what the response contains

The tests are written using `should`, but you can choose to use `expect` or `assert` - just be consistent. See the [chai docs](http://chaijs.com/api/) for more info.

### Sad Path

Let's test a route that doesn't exist in our app. All we have to do is make a request to a garbage endpoint and we then expect a standard 404 response. Here is what our tests look like:

```javascript
describe('Client Routes', () => {
  it('should return the homepage with text', (done) => {
    chai.request(server)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.html
      response.res.text.should.equal('We\'re going to test all the routes!')
      done()
    })
  })

  it('should return a 404 for a non existent route', (done) => {
    chai.request(server)
    .get('/sad')
    .end((err, response) => {
      response.should.have.status(404)
      done()
    })
  })
})
```

The status code is the very least we can test for. If you have a custom 404 error page, then you can also test for the contents of the page.

When you run the tests with `mocha`, you should see something like:

```shell

Test Express is running on 3000.
  Client Routes
    ✓ should return the homepage with text
    ✓ should return a 404 for a non existent route


  2 passing (46ms)

```

Right now, this is what the entire test file looks like:

```javascript
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

describe('Client Routes', () => {
  it('should return the homepage with text', (done) => {
    chai.request(server)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.html
      response.res.text.should.equal('We\'re going to test all the routes!')
      done()
    })
  })

  it('should return a 404 for a non existent route', (done) => {
    chai.request(server)
    .get('/sad')
    .end((err, response) => {
      response.should.have.status(404)
      done()
    })
  })
})

describe('API Routes', () => {

})
```

### Test an API Call (GET Request)

From our basic server-side tests above, you can see how we might test our API. The first test is for the `/api/v1/students` route. A GET request to this endpoint should return a collection all of the students.

Let's write the test. In the `API Routes` describe block:

```javascript
describe('API Routes', () => {
  describe('GET /api/v1/students', () => {
    it('should return all of the students', (done) => {
      chai.request(server)
      .get('/api/v1/students')
      .end((err, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body.length.should.equal(3)
        response.body[0].should.have.property('lastname')
        response.body[0].lastname.should.equal('Turing')
        response.body[0].should.have.property('program')
        response.body[0].program.should.equal('FE')
        response.body[0].should.have.property('enrolled')
        response.body[0].enrolled.should.equal(true)
        done()
      })
    })
  })
})
```

Run the tests with `mocha`. Because we already have the route set up in our `server.js` file, you should see something like:

```shell

Test Express is running on 3000.
  Client Routes
    ✓ should return the homepage with text
    ✓ should return a 404 for a non existent route

  API Routes
    GET /api/v1/students
      ✓ should return all of the students


  3 passing (61ms)

```

### Test a POST Request

For a post request, we need to not only send the request to the correct endpoint, but we also need to give some information in the body of the request.

In another `describe` block, let's write the test first:

```javascript
describe('POST /api/v1/students', () => {
  it('should create a new student', (done) => {
    chai.request(server)
    .post('/api/v1/students') // Notice the change in the verb
    .send({                   // Here is the information sent in the body or the request
      lastname: 'Knuth',
      program: 'FE',
      enrolled: true
    })
    .end((err, response) => {
      response.should.have.status(201) // Different status here
      response.body.should.be.a('object')
      response.body.should.have.property('lastname')
      response.body.lastname.should.equal('Knuth')
      response.body.should.have.property('program')
      response.body.program.should.equal('FE')
      response.body.should.have.property('enrolled')
      response.body.enrolled.should.equal(true)
      chai.request(server) // Can also test that it is actually in the database
      .get('/api/v1/students')
      .end((err, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body.length.should.equal(4)
        response.body[3].should.have.property('lastname')
        response.body[3].lastname.should.equal('Knuth')
        response.body[3].should.have.property('program')
        response.body[3].program.should.equal('FE')
        response.body[3].should.have.property('enrolled')
        response.body[3].enrolled.should.equal(true)
        done()
      })
    })
  })
})
```

Let's run the tests - we get:

```shell
1 failing

1) API Routes POST /api/v1/students should create a new student:
   Uncaught AssertionError: expected Object (domain, _events, ...) to have status code 201 but got 404
    at chai.request.post.send.end (test/routes.spec.js:61:30)
    at Test.Request.callback (node_modules/superagent/lib/node/index.js:631:3)
    at IncomingMessage.<anonymous> (node_modules/superagent/lib/node/index.js:795:18)
    at endReadableNT (_stream_readable.js:974:12)
    at _combinedTickCallback (internal/process/next_tick.js:74:11)
    at process._tickCallback (internal/process/next_tick.js:98:9)
```

Well of course. We expect a 201 response, but we get a 404 because we haven't created the route in our `server.js` file. Let's do that. In the `server.js` file, add:

```javascript
app.post('/api/v1/students', (request, response) => {
  app.locals.students.push(request.body) // No validation here...
  response.status(201).json(app.locals.students[app.locals.students.length - 1])
})
```

Now we get this abysmal error:

```shell
1 failing

  1) API Routes POST /api/v1/students should create a new student:
     Uncaught AssertionError: expected '' to be an object
      at chai.request.post.send.end (test/routes.spec.js:62:33)
      at Test.Request.callback (node_modules/superagent/lib/node/index.js:619:12)
      at node_modules/superagent/lib/node/index.js:795:18
      at IncomingMessage.<anonymous> (node_modules/superagent/lib/node/parsers/json.js:16:7)
      at endReadableNT (_stream_readable.js:974:12)
      at _combinedTickCallback (internal/process/next_tick.js:74:11)
      at process._tickCallback (internal/process/next_tick.js:98:9)
```

Seems like everything should work... However, if we `console.log()` the `request.body` in the route, we get `undefined`. Turns out the Express needs help parsing the body of a request. There is a package called, you guessed it, `body-parser` that can help us with this. It's already in the `package.json` file.

Add this line to the `server.js` file:

```javascript
const bodyParser = require('body-parser')
app.use(bodyParser.json())
```

We're using `.json()` because we expect the content in the body to be JSON. Run the tests again, and everything should pass.

### POST Sad Path

What if we make a POST request and don't specify all of the properties of a student? For instance, in the request body if we specify `{lastname: 'Knuth', program: 'FE'}`, but we leave out the `enrolled` property and value, the new record should not be created.

We need to design our server so that it does not accept this kind of situation with missing data. Let's write the test!

```javascript
it('should not create a record with missing data', (done) => {
  chai.request(server)
  .post('/api/v1/students')
  .send({
    lastname: 'Knuth',
    program: 'FE' // Missing the enrolled property and value
  })
  .end((err, response) => {
    response.should.have.status(422)
    response.body.error.should.equal('You are missing data!')
    done()
  })
})
```

We need to add some validation in our POST route to see if the request body object contains all the information we need. Let's modify the route:

```javascript
app.post('/api/v1/students', (request, response) => {
  let result = ['lastname', 'program', 'enrolled'].every((prop) => {
    return request.body.hasOwnProperty(prop)
  })

  if (result) {
    app.locals.students.push(request.body)
    response.status(201).json(app.locals.students[app.locals.students.length - 1])
  } else {
    response.status(422).send({
      error: 'You are missing data!'
    })
  }
})
```

When you're working with a database, your database ORM or database engine will most likely have some built-in validation for you, but you will still have to handle the response.

Run the test suite again, and all of the tests should be passing.

#### before and afterEach

Server-side tests should run in isolation and each test should not leave artifacts in the database. Therefore, we need to clean out the database after each test and prepare the database before each test.

If you're using a "real" database, you will typically need to:

Before the first test:
  1. Run the migrations
  2. Clean out the database (delete records in all tables (not drop))
  3. Seed your database with records

After every test, delete records in all tables and seed the database.

For this lesson, we are not using a real database, so we can just reset `app.locals` to the original data from the `students.js` file, or in this case, the server file is required at set to the variable `server`.

With our testing structure, we have built-in methods called `before` and `afterEach`, and they run before all tests and after each test, respectively.

Let's write these methods within the `describe('API Routes', ...` block.

```javascript
before((done) => {
  // Would normally run migrations, delete records in tables, and seed database
  // to make sure first test starts with clean DB
  done()
})

afterEach((done) => {
  // Would normally delete records in tables and seed database
  server.locals.students = students
  done()
})
```

And at the top of the `routes.spec.js` file:

```javascript
const students = require('../students')
```

### File summary

By the end of it all, this is what the `routes.spec.js` file looks like:

```javascript
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')
const students = require('../students')

chai.use(chaiHttp)

describe('Client Routes', () => {
  it('should return the homepage with text', (done) => {
    chai.request(server)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.html
      response.res.text.should.equal('We\'re going to test all the routes!')
      done()
    })
  })

  it('should return a 404 for a non existent route', (done) => {
    chai.request(server)
    .get('/sad')
    .end((err, response) => {
      response.should.have.status(404)
      done()
    })
  })
})

describe('API Routes', () => {

  before((done) => {
    // Would normally run migrations, delete records in tables, and seed database
    // to make sure first test starts with clean DB
    done()
  })

  afterEach((done) => {
    // Would normally delete records in tables and seed database
    server.locals.students = students
    done()
  })

  describe('GET /api/v1/students', () => {
    it('should return all of the students', (done) => {
      chai.request(server)
      .get('/api/v1/students')
      .end((err, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body.length.should.equal(3)
        response.body[0].should.have.property('lastname')
        response.body[0].lastname.should.equal('Turing')
        response.body[0].should.have.property('program')
        response.body[0].program.should.equal('FE')
        response.body[0].should.have.property('enrolled')
        response.body[0].enrolled.should.equal(true)
        done()
      })
    })
  })

  describe('POST /api/v1/students', () => {
    it('should create a new student', (done) => {
      chai.request(server)
      .post('/api/v1/students') // Notice the change in the verb
      .send({                   // Here is the information sent in the body or the request
        lastname: 'Knuth',
        program: 'FE',
        enrolled: true
      })
      .end((err, response) => {
        response.should.have.status(201) // Different status here
        response.body.should.be.a('object')
        response.body.should.have.property('lastname')
        response.body.lastname.should.equal('Knuth')
        response.body.should.have.property('program')
        response.body.program.should.equal('FE')
        response.body.should.have.property('enrolled')
        response.body.enrolled.should.equal(true)
        chai.request(server) // Can also test that it is actually in the database
        .get('/api/v1/students')
        .end((err, response) => {
          response.should.have.status(200)
          response.should.be.json
          response.body.should.be.a('array')
          response.body.length.should.equal(4)
          response.body[3].should.have.property('lastname')
          response.body[3].lastname.should.equal('Knuth')
          response.body[3].should.have.property('program')
          response.body[3].program.should.equal('FE')
          response.body[3].should.have.property('enrolled')
          response.body[3].enrolled.should.equal(true)
          done()
        })
      })
    })

    it('should not create a record with missing data', (done) => {
      chai.request(server)
      .post('/api/v1/students')
      .send({
        lastname: 'Knuth',
        program: 'FE' // Missing the enrolled property and value
      })
      .end((err, response) => {
        response.should.have.status(422)
        response.body.error.should.equal('You are missing data!')
        done()
      })
    })
  })
})
```

Your `server.js` file should look something like this:

```javascript
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.set('port', process.env.PORT || 3000)
app.locals.title = 'Test Express'
app.locals.students = require('./students')

app.get('/', (request, response) => {
  response.send('We\'re going to test all the routes!')
})

app.get('/api/v1/students', (request, response) => {
  response.status(200).json(app.locals.students)
})

app.post('/api/v1/students', (request, response) => {
  let result = ['lastname', 'program', 'enrolled'].every((prop) => {
    return request.body.hasOwnProperty(prop)
  })

  if (result) {
    app.locals.students.push(request.body)
    response.status(201).json(app.locals.students[app.locals.students.length - 1])
  } else {
    response.status(422).send({
      error: 'You are missing data!'
    })
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})

module.exports = app
```

## On Your Own - In True TDD Style

Add tests for:

* GET request for one student based on their name
  - Normally, this will be an ID, but here we'll use the name of the student. The route would look something like `/api/v1/students/`
* PUT request to change a student's information
* DELETE request to _destroy_ a student

## Additional Resources

If you really want more to do, then convert your existing test suite to another chai assertion library (expect).

[Test Driven Development With Node, Postgres, and Knex](http://mherman.org/blog/2016/04/28/test-driven-development-with-node/#.WPi_sVMrKsx) - This article has good tips on setting your environment. Beware that this article uses only one database table, so your migrations and seeds will vary.
