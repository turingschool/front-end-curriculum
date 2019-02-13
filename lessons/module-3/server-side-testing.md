---
title: "Server Side Testing using Jest and supertest"
length: 2 hours
tags: node, express, back-end, server, http
---

### Goals

By the end of this lesson, you will:

* Know how to implement request specs in an express application using jest and supertest

### Vocabulary

* request specs
* supertest


### Warm up

In your notebooks: 

1. When we're testing api calls on the front end, what are you concerned about testing? Try to get into as much detail as possible.
2. In the backend, what do you think we'll be concerned about testing? Is overlap needed?

## Code Along

We'll be working off of [this repo](https://github.com/turingschool-examples/pet-box)

Checkout to the `start-testing` branch.

Make sure that you have jest installed globally. If you're not sure, run `npm install jest -g`.

First, we'll need to install some more dev dependencies for testing.

`npm install @babel/polyfill babel-jest supertest -D`

Next, add a test script to the package.json file. It should simply be `"test": "jest --watch"`.

Now we can get started writing some tests!

### Separate the Server from the App

Right now we have all of our application code living in one file (server.js).
In order to test things we need to separate our server startup from our endpoints.
If we leave the startup in the file that we're testing, then our project will try to start the server each time we run our tests.

Let's create both an `app.js` and an `app.spec.js` file in the root of our directory.

Now move all but the server startup into the app.js file.

Afterwards, your files should look something like:

app.js
```javascript
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// All endpoints are here

export default app;
```

server.js
```javascript
import app from './app';

app.set('port', 3001);
app.listen(app.get('port'), () => {
  console.log(`App is running on http://localhost:${app.get('port')}`)
});
```

### Writing tests

Alright, now we're set up to start writing some tests.

We'll be using `supertest` to make requests to our api within our tests. 
It's a testing library that makes it easy to make a request in your test files.
It also will automatically parse your entire response to json.

First, let's import all of the necessary things in our test file.

Note, we're requiring `@babel/polyfill` in this case so that we can use `async/await` syntax if we want.

app.spec.js
```javascript
import request from 'supertest';
import '@babel/polyfill';
import app from './app';
```

In general, we are really only concerned with 3 things when it comes to testing our apis.

For both happy and sad paths:
1. The response status code
2. The response body
3. That our dataset has changed the way we expected it to
 

#### Our first tests

Our first endpoint that needs tested is `get /api/v1/pets`

I like to have a describe block that denotes the endpoint, and a test for each of the 3 things mentioned above (sometimes #3 is not necessary).

Here is what our test would look like if we're using promises:
```javascript
describe('api', () => {
  describe('get /api/v1/pets', () => {
    it('should return a 200', () => {
      request(app).get('/api/v1/pets').then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});
```

Refactor it to use `async/await`!

Alright, now let's test that it returns the information we want in the body.

We'll want to use a beforeEach to set our app.locals.pets array.

When we're finished it'll look something like this.

```javascript
describe('api', () => {
  let pets;
  beforeEach(() => {
    pets = [
      { id: 1, name: 'Bad Elmer', type: 'Dog' },
      { id: 2, name: 'Hank', type: 'Dog' },
      { id: 3, name: 'Dusty', type: 'Cat' },
    ];
    app.locals.pets = pets;
  });

  describe('get /api/v1/pets', () => {
    it('should return a 200', async () => {
      const response = await request(app).get('/api/v1/pets');
      expect(response.status).toBe(200);
    });

    it('should respond with an array of pets', async () => {
      const response = await request(app).get('/api/v1/pets');
      expect(response.body).toEqual(pets);
    });
  });
});
```
#### Your turn

Try testing the `get /api/v1/pets/:id` endpoint.

Note: this will need a sad path too.

Don't look down until you try....

Possible solution:
```javascript
describe('get /api/v1/pets/:id', () => {
  it('should return a 200 if the pet exists', async () => {
    const response = await request(app).get('/api/v1/pets/1');
    expect(response.status).toBe(200);
  });

  it('should respond with the correct pet if it exists', async () => {
    const response = await request(app).get('/api/v1/pets/1');
    expect(response.body).toEqual(pets[0]);
  });

  it('should return a 404 if the pet doesn\'t exist', async () => {
    const response = await request(app).get('/api/v1/pets/7');
    expect(response.status).toBe(404);
  });

  it('should return a no pet message if the pet doesn\'t exist', async () => {
    const response = await request(app).get('/api/v1/pets/7');
    expect(response.body).toBe('Pet not found');
  });
});
```

#### Testing a Post Request

Supertest also provides a way to send information to the server.
For the `post /api/v1/pets` tests let's right our it blocks with multiple expectations.
Totally up to you if you want to be granular like we were before and break your status and body expectations into separate it blocks.

Here is what an implementation might look like for the post request tests:
```javascript
describe('post /api/v1/pets', () => {
  it('should return a 201 and a new pet (with an id) if things go well', async () => {
    const goodPetInfo = { name: 'Fido', type: 'dog' };
    Date.now = jest.fn().mockImplementation(() => 10);
    const response = await request(app).post('/api/v1/pets')
      .send(goodPetInfo);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 10, ...goodPetInfo });
  });

  it('should return a 422 and error message if the info sent is not ok', async () => {
    const badPetInfo = { natype: 'dog' };
    const response = await request(app).post('/api/v1/pets')
      .send(badPetInfo);
    expect(response.status).toBe(422);
    expect(response.body).toBe('Please provide a name and a type');
  });
});
```

#### Your turn

1. Write tests for the put endpoint (this will require the most tests). 
  hint: You'll also need to add a test that checks your data model in addition to the response.
2. Write tests for hte delete endpoint.
3. What duplication do we have? Can you write some helper functions to wrap duplicate statements in the api implementation? Do your tests still pass?

## Checks For Understanding

- In as much detail as possible, explain what we're concerned about testing in our apis.
- In as much detail as possible, explain what supertest is and why we use it.

## Resources
- [Jest](https://expressjs.com/)
- [supertest](http://expressjs.com/en/starter/static-files.html)
- [Testing express with jest and supertest](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

