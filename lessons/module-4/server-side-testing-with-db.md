---
title: Server-Side Testing With A DB
tags: express, testing, server, node, postgres
---


### Goals

By the end of this lesson, you will:

* Know how to implement request specs in an express application using jest and supertest

## Overview

In order to test our server-side code, we have to be sure that database interactions (as well as the status codes within responses) are behaving as we expect.

### Warm Up

<section class="call-to-action">
### In Your Notebook

Before we begin, spend 5 minutes exploring our [starter
repo](https://github.com/turingschool-examples/test-express). Go ahead and follow the instructions in the readme to get everything setup. 

In your journal, answer the following questions:
  - Why do you think we have separate keys for development and test in our knexfile?
  - What code is present in the `app.js` file? What about the `server.js` file? Why do you think we have these set up in separate files?
  <!-- In order to test things we need to separate our server startup from our endpoints. If we leave the startup in the file that we're testing, then our project will try to start the server each time we run our tests. -->
  - When you think about the BE, what do you think we should be concerned about testing?
</section>

## Getting started

Now that you've had a chance to clone the repo and install all of the necessary dependencies, you'll want to make sure you have jest installed globally. If you're not sure, run

```bash
npm i jest -g
```

We'll need to set up our `app.js` and test file to have access to our database, regardless of whether we're using the development DB or the test DB. Add the following to your own `app.js`, as well as `app.test.js`:

```js
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
```

This ensures that we'll be accessing the correct database when we're running our test file. This is possible because our `knexfile.js` has a specific key/value pair for `test`, and Jest will automatically set the NODE_ENV to `test` when running our test suite.

In general, we are really only concerned with 3 things when it comes to testing our apis.

For both happy and sad paths:
1. The response status code
2. The response body
3. That our dataset has changed according to our expectations

## Writing our first tests

We're going to try to test drive all the interactions with this database, and
with that in mind, here's a brief outline of the functionality we want to test:

  - test that we GET all students from the DB  
  - test that we GET one student from the DB  
  - test that we POST a student to the DB  
  - test that we PUT an existing student in the DB  
  - test that we DELETE an existing student from the DB  

We will start with getting all the students. Assuming we've seeded our database, the students we get back from the endpoint should be the same as the students in our database.

### Happy Path

Let's write our first test! Add the following to your app.test.js file:

```js
describe('GET /students', () => {
  it('should return a 200 and all of the students', async () => {
    // setup
    const expectedStudents = await database('students').select()

    // execution
    const res = await request(app).get('/students')
    const students = res.body

    // expectation
    expect(res.status).toBe(200)
    expect(students).toEqual(expectedStudents)
  })
})
```

<section class="call-to-action">
### Your Turn

When we run this test, it should fail, that's TDD for you! Go ahead and write
the code to make it pass.
</section>

## GET a single student

<section class="call-to-action">
### Try It Out!

Take 5 minutes and see if you can write a test to get a single student back from a new `/students/:id` endpoint. Once you have a failing test make it pass! No looking ahead!
</section>

Here's one way you could write the test:

```js
describe('GET /students/:id', () => {
  it('should return a 200 and a single student if the student exists', async () => {
    // setup
    const expectedStudent = await database('students').first()
    const { id } = expectedStudent;

    // execution
    const res = await request(app).get(`/students/${id}`)
    const result = res.body[0]

    // expectation
    expect(res.status).toBe(200)
    expect(result).toEqual(expectedStudent)
  });
});
```

If you've made it that far, consider this: Are we adequately testing these
endpoints so far? What is missing?

### Sad Path

Since we want to make sure that we are getting the correct behavior/responses in the event that a `GET` request is made for a student that does not exist in the DB - we need to write a "Sad Path" as well

```js
it('should return a 404 and the message "Student not found"', async () => {
  const invalidID = -1;

  const response = await request(app).get(`/students/${invalidID}`)

  expect(response.status).toBe(404);
  expect(response.body.error).toEqual('Student not found');
});
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

exports.seed = knex => {
  return knex('students').del()
    .then(() => {
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
    const newStudent = { lastname: 'Lovett', program: 'FE', enrolled: false }

    // execution
    const res = await request(app).post('/students').send(newStudent)

    const students = await database('students').where('id', res.body.id).select()
    const student = students[0]


    // expectation
    expect(res.status).toBe(201)
    expect(student.lastname).toEqual(newStudent.lastname)
  });
});
```

<section class="call-to-action">
### Your Turn: PUT and DELETE students

Ok, you should be feeling a bit more confident now. Working on your own, or with
a partner, see if you can write out the tests for the `PUT /students/:id` and
`DELETE students/:id` endpoints, and then implement them.
</section>

<section class="checks-for-understanding">
### Checks For Understanding

* What libraries do we use to test server-side endpoints?
* Why is it important to use a test DB when testing DB interactions?
* Is it necessary to seed the database before we test? Why or why not?
</section>