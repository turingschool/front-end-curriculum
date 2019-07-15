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
Straight from the docs, Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

What Knex really is is Javascript instead of raw SQL.

## Setting Up the Database

Make sure Postgres is installed and running. We will prep our app by creating two databases in Postgres. Don't forget the semicolons in the the CREATE DATABASE command!

```js
$ psql
CREATE DATABASE secrets;
CREATE DATABASE secrets_test;
```

Install knex globally and in your project, and pg (postgres) in your project from npm:

```
npm install -g knex
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

Migrations are kind of like version control for databases. For every `up` there must be an equal and opposite `down` that will allow us to rollback those changes. `up` defines what should happen when we do the migration. `down` is the reverse. If we want to roll back to a previous version, then `down` undoes whatever `up` did. To see all the different options on building a table, review [the Knex docs.](http://knexjs.org/)

I edited the migration to create an owners table and a secrets table. We create the relationship between the two in the secrets table by adding an owner_id field that references id key in the owner table. That means each secret belongs to one owner:

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

We're going to need to modify this a bit and do it in two separate files, one for owners and one for secrets.

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


You'll notice that I used `Promise.all` this time. It's because I wanted to do three things (i.e. insert each of my fake secrets). `Promise.all` will resolve when all three of my inserts resolve.

### Running the Migrations and Seeding the Database

We configured everything. Now, we just need to run our migration and seed the database.

```
knex migrate:latest
knex seed:run
```

This will run all of the migrations up to and including the most recent one. (We only have one, so this is pretty straightforward for us.) Next, we will run all the seed files under the dev directory to insert our two owners and three secrets that belong to those owners so that we have something to work with in the next step.

## Fetching From the Database

Let's write some code to pull stuff out of the database.

```js
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
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

We've already done a lot of prep without even knowing it, but there are a few catchyas left to conquer. Before we can config production fully, we need to create our production app with Heroku. If you haven't already, go ahead and create an account with Heroku. Then login in your terminal:

```js
heroku login
```

To create an app with Heroku:

```js
heroku create app-name // app-name can be whatever you want as long as there isn't another app named it. If you don't give it a name Heroku will name it something super badass like misty-acorn-valleys9292
```

Then you can push your code to Heroku like so:

```js
git push heroku master // Make it a practice to only push to production from master. master is your Master. Obey it as your production overlord. Many things will be happening in your terminal but the main thing to look for is if the build succeeds or fails.
heroku open // Opens your app in a browser
```

Aaaaaaaand...... error screen. Wah wah wah. Welcome to getting things up in production. The MOST IMPORTANT thing to learn about production is reading error logs from Heroku:

```js
heroku logs
heroku logs --tail // Get the last error message
```

First step is to add a Procfile. This lets Heroku know to fire up your server.

```js
touch Procfile

// In the Procfile
web: node server.js
```

Next up is adding the Postgres add-on in Heroku. After you add this, you will also get an environment variable for the database URL.

![heroku postgres][heroku-postgres]
![heroku database url][heroku-database-url]

[heroku-postgres]: /assets/images/lessons/express-with-knex/heroku-postgres.png
[heroku-database-url]: /assets/images/lessons/express-with-knex/heroku-database-url.png


Now we want to make sure our knexfile has this environment variable for production. You also need to add ?ssl=true at the end of the URL:

```js
  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_SILVER_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
```

Now our production code knows where to look to grab production data. The last step is adding some seed data, which I'll just copy from seeds/dev to seeds/production. Commit all those changes and push it up to Heroku. To migrate and seed with Heroku:

```js
heroku run 'knex migrate:latest'
heroku run 'knex seed:run'
```

It should give you some feedback that it worked. Now do heroku open and magic! You have data.
