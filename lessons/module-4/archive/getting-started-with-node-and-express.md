---
title: Getting Started with Express
---

Let's start by cloning [this repository](https://github.com/stevekinney/monstertorium).

```
git clone https://github.com/stevekinney/monstertorium
```

Most of the code from last time we visited this repository is in the `live-coding` branch. Let's make a new branch based off of that branch.

```
git checkout live-coding
git checkout -b express
```

We'll make a blank file for the server.

```
touch server.js
```

We'll also make a `package.json`.

```
npm init --yes
```

Let's install some dependencies.

```
npm install express body-parser --save
npm install supertest mocha chai --save-dev
```

We'll move our static assets to a `public` directory.

```
mkdir public
mv index.html public
mv style.css public
mv script.js public
mv dependencies public
```

Here is a first at our server side logic.

```js
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(3000, () => {
  console.log('The Monstertorium is live! (http://localhost:3000)');
});
```

We can spin up the server using `npm start`.

```
npm start
```

You should see "Hello World" in the browser.

## Serving Static Assets

```js
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('The Monstertorium is live! (http://localhost:3000)');
});
```

We should now see the same Monstertorium that we saw in Module 1.

## Storing Monsters

```js
const express = require('express');
const app = express();

app.locals.monsters = []; // NEW!

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('The Monstertorium is live! (http://localhost:3000)');
});
```

## Building the API

```
mkdir test
touch test/api-test.js
```

In `test/api-test.js`:

```js
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
```

Let's set up some scripts. In `package.json`:

```json
{
  // ... More properties ...
  "scripts": {
    "test": "mocha",
    "start": "node server.js"
  }
  // ... More properties ...
}
```

Go ahead and run `npm test`.

…and watch it fail.

```js
const express = require('express');
const app = express();

app.locals.monsters = [];

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('The Monstertorium is live! (http://localhost:3000)');
});

module.exports = app; // NEW!
```

This will work, but it will still spin up the server, which we don't want. What we _do_ want to happen is that if `server.js` is running as the main file, then—yea—spint up the server. Otherwise, don't. We're requiring it and want to be able to start it up and close it at will.

```js
const express = require('express');
const app = express();

app.locals.monsters = [];

app.use(express.static('public'));

if (!module.parent) { // NEW!
  app.listen(3000, () => {
    console.log('The Monstertorium is live! (http://localhost:3000)');
  });
}

module.exports = app;
```

Run `npm test`, the server does not start up.

### Testing the Endpoints

Let's write our first test. We should get all of the monsters when we send a `GET` request to `/monsters`. Add the following to `test/api-test.js`.

```js
describe('GET /monsters', () => {

  beforeEach(() => {
    app.locals.monsters = [{ id: 1, name: 'Steve', level: 2 }];
  });

  afterEach(() => {
    app.locals.monsters = [];
  });

});
```

We're not testing anything yet. All we're doing is putting a monster in the array before each test. It's good practice to clean up after ourselves. So, after each test, we'll reset the array to it's default state.

Let's start by making sure we can reach our endpoint.

```js
it('should return a 200 status code', (done) => {
  request(app)
    .get('/monsters')
    .expect(200, done);
});
```

- We're passing in `app` to the `request` function (which is pulled in from `supertest`).
- We're giving the `it` function an argument of `done`, which tells Mocha to wait until all of the asynchronous operations have completed before moving on to the next test.

Let's run the tests.

```
1) GET /monsters should return a 200 status code:
 Error: expected 200 "OK", got 404 "Not Found"
```

This makes sense because we didn't actually make the route yet. It's add the route to `server.js`.

```js
app.get('/monsters', (request, response) => {
  response.send({ monsters: app.locals.monsters });
});
```

Run out test suite. It passes. But, this test only checks that it returns the status of response, not the actual content. Let's add a test.

```js
it('should return a set monsters stored in app.locals.monsters', (done) => {
  request(app)
    .get('/monsters')
    .expect(200, {
      monsters: app.locals.monsters
    }, done);
});
```

It happens to pass because we were ambitious when we built that route earlier.

#### Making New Monsters

We can get the monsters, but we can't make them yet. Bummer. Let's start with a test. We'll empty out the array in between every test so that we know that we're always starting with a clean slate.

```js
describe('POST /monsters', () => {

  beforeEach(() => {
    app.locals.monsters = [];
  });

});
```

Cool. So now we have a setup, but we don't have any tests. Ideally, when we sent a payload of monster data to the server, that monster should end up in the array, right?

```js
it('should create a new monster', (done) => {
  const monster = { id: 1, name: 'Steve', level: 2 };

  request(app)
    .post('/monsters')
    .send({ monster: monster })
    .expect(201)
    .end(() => {
      assert.deepEqual(app.locals.monsters, [monster]);
      done();
    });
});
```

It'll fail because we didn't implement it yet. When a monster comes in, we'll just push it onto the array and then send the new version back to the user.

```js
app.post('/monsters', (request, response) => {
  const monster = request.body.monster;

  monster.id = monster.id || Date.now();
  app.locals.monsters.push(monster);

  response.status(201).send({ monster: monster });
});
```

This isn't perfect. It doesn't sanitize the data or validate that both exist. But, let's go with it for now. Run the tests and verify that they pass.

It doesn't.

For reasons unbeknownst to your author, Express can't parse the body of an HTTP request by default. We have to require and configure the `body-parser` module to get this working.

Add the following towards the top of `server.js` after you've defined `app`:

```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

Run the test suite again. The tests pass.

#### Updating Monsters

```js
describe('UPDATE /monsters/:id', () => {

  beforeEach(() => {
    app.locals.monsters = [{ id: 1, name: 'Steve', level: 2 }];
  });

  afterEach(() => {
    app.locals.monsters = [];
  });

  it('should update a record with the correct "id"', (done) => {
    const monster = app.locals.monsters[0];

    request(app)
      .put(`/monsters/${monster.id}`)
      .send({ monster: { name: 'Louisa' } })
      .expect(204)
      .end(() => {
        assert.equal(app.locals.monsters[0].name, 'Louisa');
        done();
      });
  });

});
```

What would the might an implementation work?

```js
app.put('/monsters/:id', (request, response) => {
  const monster = request.body.monster;
  const id = parseInt(request.params.id, 10);
  const index = app.locals.monsters.findIndex((m) => m.id === id);

  if (index === -1) { return response.sendStatus(404); }

  const oldMonster = app.locals.monsters[index];
  app.locals.monsters[index] = Object.assign(oldMonster, monster);

  return response.sendStatus(204);
});
```

This is squirrelly and mostly related to the fact that we're not using a real database right and we're writing this logic by hand. Let it wash over you and relax.

What if the client requests to update a monster that doesn't exist?

```js
it('should return a 404 status if there is no monster', (done) => {
  request(app)
    .delete('/monsters/invalid')
    .expect(404, done);
});
```

#### Destroying Monsters

This is pretty much more of the same. So, let's move quickly through it so that we can get to refactoring the front-end.

```js
describe('DELETE /monsters/:id', () => {

  beforeEach(() => {
    app.locals.monsters = [{ id: 1, name: 'Steve', level: 3 }];
  });

  afterEach(() => {
    app.locals.monsters = [];
  });

  it('should delete a record', (done) => {
    request(app)
      .delete(`/monsters/${this.monster.id}`)
      .expect(204)
      .end(() => {
        assert.equal(app.locals.monsters.length, 0);
        done();
      });
  });

  it('should return a 404 status if there is no idea', (done) => {
    request(app)
      .delete('/monsters/invalid')
      .expect(404, done);
  });

});
```

Alright, now what about an implementation?

```js
app.delete('/monsters/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  if (!app.locals.monsters.find((m) => m.id === id)) {
    return response.status(404).send({
      error: `There is no monster with the "id" of ${id}.`
    });
  }
  app.locals.monsters = app.locals.monsters.filter((m) => m.id !== id);
  response.sendStatus(204);
});
```
