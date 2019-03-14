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

## Wrting our first test, GET all students

We're going to try to test drive all the interactions with this database, and
with that in mind, here's a brief outline of the functionality we want to test:

  - test that we GET all students from the DB  
  - test that we GET one student from the DB  
  - test that we POST a student to the DB  
  - test that we PUT an existing student in the DB  
  - test that we DELETE an existing student from the DB  

We will start with getting all the students. Assuming we've seeded our database,
the number of students we get back from the endpoint should be the same as the
number in our seedfile. At the top of the testfile, import those students that
we seeded in:

```js
import students from './students'
```

Now, we can write our first test! Add the following to your app.test.js file:

```js
describe('GET /students', () => {
  it('should return all the students in the DB', async () => {
    // setup
    const expectedStudents = students.length

    // execution
    const res = await request(app).get('/students')
    const result = res.body

    // expectation
    expect(result.length).toEqual(expectedStudents)
  })
})
```

When we run this test, it should fail, that's TDD for you! Go ahead and write
the code to make it pass.

## GET a single student

Take 5 minutes and see if you can write a test to get a single student back from
a new `/students/:id` endpoint. Once you have a failing test make it pass! No
looking ahead!

If you've made it that far, consider this: Are we adequately testing these
endpoints so far? What is missing?

Here's one way you could write the test:

```js
describe('GET /students/1', () => {
  it('should return a single student', async () => {
    // setup
    const expectedStudent = students[0]

    // execution
    const student = await database('students').first()
    const id = student.id
    const res = await request(app).get(`/students/${id}`)
    const result = res.body[0]

    // expectation
    expect(result.lastname).toEqual(expectedStudent.lastname)
    expect(result.program).toEqual(expectedStudent.program)
    expect(result.enrolled).toEqual(expectedStudent.enrolled)
  })
})
```
