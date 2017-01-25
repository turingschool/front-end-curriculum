---
title: "Express with Knex"
length: 1.5 hours
tags: node, express, knex, database, SQL, http
---

### Pre-reqs

* Download Postgresql with `brew install postgres`

### Goals

By the end of this lesson, you will:

* Understand how to create database migrations and seed files using knex
* Understand how to create, retrieve, update and delete data within a database using knex

## What is Knex?
Knex

## Setting Up the Database

Make sure Postgres is installed and running. We will prep our app by creating two databases in Postgres. Don't forget the semicolons in the the CREATE DATABASE command!

```js
$ psql
CREATE DATABASE secrets;
CREATE DATABASE secrets_test;
```

Install knex and pg (postgres) from npm:

```
npm install knex --save
npm install pg --save
```

We will use a knexfile to configure our database for all of our environments. Create that file using the below command with some default values:

```
→ knex init
Created ./knexfile.js
```

### Database Configuration

This generated a really nice configuration file that we are going to tweak. First we will change our development environment to use Postgres instead of mySql. This allows us to use the same database across all environments which is good practice. We also want to set our migration and seed directory for each environment.

```js
module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/secrets',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/secrets_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
};
```

### Migrations

```
knex migrate:make initial
```

This created a `migrations` directory at the root of the project and added a time stamped file with the name of the migration at the end. The `initial` part is totally arbitrary, it could be anything, but it should be something descriptive. If you're creating a migration that adds an "owner" column to the "secrets" table, you probably want to go with something along the lines of `add-owner-to-secrets-table`.

The file should look something like this:

```js
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
```

Migrations are kind of like version control for databases. For every `up` there must be an equal and opposite `down` that will allow us to rollback those changes. `up` defines what should happen when we do the migration. `down` is the reverse. If we want to roll back to a previous version, then `down` undoes whatever `up` did.

I edited the migration as follows:

```js
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('owners', function(table) {
            table.increments('id').primary();
            table.string('name');

            table.timestamps();
        }),

        knex.schema.createTable('secrets', function(table){
            table.string('id').primary();
            table.string('message');
            table.integer('owner_id')
                 .references('id')
                 .inTable('owners');

            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('owners'),
        knex.schema.dropTable('secrets')
    ])
};
```

But, why is `Promise` passed in as a second argument? Knex is expecting that these methods return a promise of some sort. All Knex methods return a promise, so we fulfilled our end of the bargin in the example above. `Promise.all` allows you to do multiple things and return one promise. Knex passes us a reference to `Promise`, because it's not natively supported in some previous versions of Node. We're not using it at this moment, but we will in a second.

`knex migrate:latest`

### Seeds

Seeds are some default data. This will be useful when we first start developing our application.

```js
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({id: 1, colName: 'rowValue1'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
```

We're going to need to modify this a bit and do it in two seperate files, one for owners and one for secrets.

For owners, create a owners.js file under seeds/dev directory:

```js
exports.seed = function(knex, Promise) {
  return knex('owners').del()
  .then(() => {
    return Promise.all([
      knex('owners').insert({
        id: 1,
        name: 'Alex Tideman',
        created_at: new Date
      }),
      knex('owners').insert({
        id: 2,
        name: 'Bob Barker',
        created_at: new Date
      })
    ]);
  });
};
```

For secrets, create a secrets.js file under seeds/dev directory:

```js
exports.seed = function(knex, Promise) {
  return knex('secrets').del()
  .then(() => {
    return Promise.all([
      knex('secrets').insert({
        id: "HkrRLh2Ge",
        message: "I hate mash potatoes",
        owner_id: 1,
        created_at: new Date
      }),
      knex('secrets').insert({
        id: "asdfjkl",
        message: "I love rap music",
        owner_id: 1,
        created_at: new Date
      }),
      knex('secrets').insert({
        id: "qWeRtY",
        message: "I hate game shows",
        owner_id: 2,
        created_at: new Date
      })
    ]);
  });
};

```


You'll notice that I used `Promise.all` this time. It's becasue I wanted to do three things (i.e. insert each of my fake foods). `Promise.all` will resolve when all three of my inserts resolve.

### Running the Migrations and Seeding the Database

We configured everything. Now, we just need to run our migration and seed the database.

```
knex migrate:latest
knex seed:run
```

This will run all of the migrations up to and including the most recent one. (We only have one, so this is pretty straightforward for us.) Next, we will run all the seed files under the dev directory to insert our two owners and three secrets that belong to those owners so that we have something to work with in the next step.

## Fetching From the Database

Let's right some code to pull stuff out of the database.

```js
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

...

app.get('/api/secrets', (request, response) => {
  database('secrets').select()
          .then(function(secrets) {
            response.status(200).json(secrets);
          })
          .catch(function(error) {
            console.error('somethings wrong with db')
          });
})
```

There are a few things going on in the code above.

1. We want to know if we're in a development, testing, or production environment. If we don't know, we'll assume we're in development.
2. Based on that environment, we'll fetch the database configuration from `knexfile.js` for whatever environment we're in.
3. Finally, we'll ask the database for everything in the `secrets` table and serve it as JSON to our api/secrets endpoint.

If you run `npm start`, you should see our three secrets when you visit /api/secrets.

Okay cool we can get data from the database, but how do we create and edit and delete?? Pretty easy actually. Just find the resource you need using params.

```js
app.post('/api/secrets', (request, response) => {
  const { message, owner_id } = request.body
  const id = md5(message)

  const secret = { id, message, owner_id, created_at: new Date };
  database('secrets').insert(secret)
  .then(function() {
    database('secrets').select()
            .then(function(secrets) {
              response.status(200).json(secrets);
            })
            .catch(function(error) {
              console.error('somethings wrong with db')
            });
  })
})
```

### Your turn (10 minutes)
Implement a PUT and DELETE route for a specific secret

### Querying Data for a relationship
We can get back all our secrets or a specific secret, but what about all the secrets for a specific owner?

```js
app.get('/api/owners/:id', (request, response) => {
  database('secrets').where('owner_id', request.params.id).select()
          .then(function(secrets) {
            response.status(200).json(secrets);
          })
          .catch(function(error) {
            console.error('somethings wrong with redirect')
          });
})
```

### Pushing to Heroku
Now that we are all wired up with Knex in our local dev environment, it's time to look towards big and better things... the wonderful world of production. Because it doesn't matter how awesome your endpoints are if you can't show the world.

We've already done a lot of prep without even knowing it, but there are a few catch-yas left to conquire.
