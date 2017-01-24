---
title: "Express with SQL"
length: 1.5 hours
tags: node, express, database, SQL, http
---

### Pre-reqs

* Download Postgresql with `brew install postgres`

### Goals

By the end of this lesson, you will:

* Understand how to create database migrations and seed files using knex
* Understand how to create and retrieve data within a database using knex
*

An example repository of the completed example can be found [here](https://github.com/turingschool-examples/secret-box).

## What is Express?
Express is a small framework built on top of the web server functionality provided by Node.js. It helps to simplify organize the server-side functionality of your application by providing abstractions over the more confusing parts of Node.js, and adding helpful utilities and features.

## Setting Up the Database

Make sure Postgres is installed and running.

```
npm install knex --save
```

```
→ knex init
Created ./knexfile.js
```

### Database Configuration

This generated a really nice configuration file that I blew away like some kind of monster. Let's just start with a development environment for now. We'll burn the production and testing configuration bridges when we get to them.

```js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/dev.sqlite3'
    },
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds/dev'
    },
    useNullAsDefault: true
  }
};
```

### Migrations

```
knex migrate:make initial
```

This created a `migrations` directory at the root of the project and added a time stamped file with the name of the migration at the end. The `initial` part is totally arbitrary, it could be anything, but it should be something descriptive. If you're creating a migration that adds a "Expiration Date" column to the "Foods" table, you probably want to go with something along the lines of `add-expiration-date-to-food-table`.

The file should look something like this:

```js
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
```

Migrations are kind of like version control for databases. For every `up` there must be an equal and opposite `down` that will allow us to rollback those changes. `up` defines what should happen when we do the migration. `down` is the reverse. If we want to roll back to a previous version, then `down` undoes whatever `up` did.

I editted the migration as follows:

```js
exports.up = (knex, Promise) => {
  return knex.schema.createTable('Food', (t) => {
    t.increments('id').primary();
    t.string('name', 100);
    t.integer('quantity');
    t.text('notes');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Food');
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

We're going to need to modify this a bit.

```js

exports.seed = (knex, Promise) => {
  return knex('Food').del()
    .then(() => {
      return Promise.all([
        knex('Food').insert({
          id: 1,
          name: 'Vegan ham',
          quantity: 'Two',
          notes: 'These were a great deal. I got two of them for $20.'
        }),
        knex('Food').insert({
          id: 2,
          name: 'Cocktail olives',
          quantity: 'Half a jar',
          notes: 'Martinis were fun for like one night.'
        }),
        knex('Food').insert({
          id: 3,
          name: 'Unidentifiable leftovers',
          quantity: 'Undisclosed quantity',
          notes: 'I think this might be from that last potluck.'
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

This will all of the migrations up to and including the most recent one. (We only have one, so this is pretty straightforward for us.) Next, we'll insert our three food items so that we have something to work with in the next step.

## Fetching From the Database

Let's right some code to pull stuff out of the database.

```js
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

database.select()
        .table('Food')
        .then(console.log)
        .catch(console.error);
```

There are a few things going on in the code above.

1. We want to know if we're in a development, testing, or production environment. If we don't know, we'll assume we're in development.
2. Based on that environment, we'll fetch the database configuration from `knexfile.js` for whatever environment we're in.
3. Finally, we'll ask the database for everything in the `Foods` table and log it to the console.

If you run `npm start`, you should see our three food items. The next steps will be to build an abstraction around these database queries and an Express API.
