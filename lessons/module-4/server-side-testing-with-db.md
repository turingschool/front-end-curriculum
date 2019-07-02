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

Before we begin, spend 5 minutes exploring our [starter
repo](https://github.com/turingschool-examples/test-express). Go ahead and
follow the instructions in the readme to get everything setup. Why do you think
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
the students we get back from the endpoint should be the same as the
students in our database.

Let's write our first test! Add the following to your app.test.js file:

```js
describe('GET /students', () => {
  it('should return all the students in the DB', async () => {
    // setup
    const expectedStudents = database('students').select()

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
describe('GET /students/:id', () => {
  it('should return a single student', async () => {
    // setup
    const expectedStudent = await database('students').first()
    const id = student.id

    // execution
    const res = await request(app).get(`/students/${id}`)
    const result = res.body[0]

    // expectation
    expect(result).toEqual(expectedStudent)
  })
})
```

## POST a new student

Before we dive into testing that we can POST a new student to the DB, we need to
think about how that will affect our other tests. If, for some reason, jest
decides to run our POST test first, all our other tests are at risk of failing
because they're not starting from the same point. 

This suggests that we need some way to clean-up any behavior from previous
tests. There are many ways to accomplish this, so for starters, let's just take
a look at our seed file again:

```js
const students = require('../../../students')

exports.seed = function(knex, Promise) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert(students);
    });
};
```

Notice how we're deleting all the entries before seeding the db? We can take
advantage of this in a `beforeEach`, ensuring we always start from the same
place. Add the following to your test file, just inside the first describe
block:

```js
beforeEach(async () => {
  await database.seed.run()
})
```

Now we're ready to write our test POSTing a new student to the database:

```js
describe('POST /students', () => {
  it('should post a new student to the db', async () => {
    // setup
    const newStudent = { lastname: 'Mitchell', program: 'BE', enrolled: false }

    // execution
    const res = await request(app)
                        .post('/students')
                        .send(newStudent)

    const students = await database('students').where('id', res.body.id).select()
    const student = students[0]


    // expectation
    expect(res.status).toBe(200)
    expect(student.lastname).toEqual(newStudent.lastname)
  })
})
```

## PUT and DELETE students

Ok, you should be feeling a bit more confident now. Working on your own, or with
a partner, see if you can write out the tests for the `PUT /students/:id` and
`DELETE students/:id` endpoints, and then implement them.

## Checks for Understanding

* What libraries do we use to test server-side endpoints?
* Why is it important to use a test DB when testing DB interactions?
* Is it necessary to seed the database before we test? Why or why not?
