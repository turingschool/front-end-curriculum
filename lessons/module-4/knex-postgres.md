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
* Understand how to create and retrieve data within a database using knex

## What is Knex?
Straight from the docs, Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

What Knex really is is Javascript instead of raw SQL.

## Getting Started

Make sure Postgres is installed and running. We will prep our app by creating a single database in Postgres. Don't forget the semicolons in the the CREATE DATABASE command!

```js
$ psql
CREATE DATABASE publications;
```

Create a new directory and cd into it, then run `npm init --yes`. Install knex globally and in your project, and pg (postgres) in your project from npm:

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

## Configuring the Database

This generated a really nice configuration file that we are going to tweak. Take a look at what it stubbed in for us:

### Multiple Environments
You'll notice at the top level of this file we have three keys: development, staging, and production. These each represent different environments we may be running our app in. Our database setup is going to vary slightly between environments. We'll see how in just a bit.

Let's get rid of the staging and production environment configurations for now and just focus on the development one.

### Client

First we will change our development environment to use Postgres instead of mySql. This is considered the 'client' and because Knex supports multiple clients, we want to explicitly tell it to use postgres:

```client: 'pg'```

### Connection

Next we'll update this connection value. Every database system has a slightly different way of establishing a connection. We have postgres running on our machines, and we need to connect to it by using what's called a connection string. (You'll notice the stubbed-in sqlite3 required a connection file.) The format for this string is just:

```postgres://localhost/<name of database>```

Let's name our database 'publications' and update that configuration value.

*Note: think back to when we had that staging and production environment configuration in here. Do you think this connection string would work when we deploy our apps to production? Which part would have to change?*

### useNullAsDefault

This is just an option that will take any undefined keys or values in our database and set them equal to `null` rather than having to specify a default value for each one. So if you have an array of research papers in one of your postgres tables, and each paper has an optional subtitle field, we don't want to set a default subtitle on every paper - we just want it to be blank by using `null`.

---

Your configuration file should now currently look like this:

```js
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    useNullAsDefault: true
  }
};
```

We're not quite done here, but let's switch gears for a bit and talk about **migrations**.

## Migrations

Migrations are kind of like version control for databases. They are single, timestamped files that each represent a change to your database schema. Think back to the [randomly selected open-source code](https://github.com/mahaplatform/backframe/tree/e738762b4b2b9f19351e261c99cfeebb62411c44/src/platform/db/migrations) we looked at yesterday. Notice every file in this 'migrations' directory is simply a timestamped file. We'll talk more about the structure of these files in a bit.

Migrations attempt to have as little effect on pre-existing data as possible, but sometimes it's hard to avoid. For example if you have a migration that deletes a column from a table, any data in that column might be destroyed along with it.

*Note: You might notice when working with APIs that endpoints are sometimes formatted like `api/v1/some-data`. The `v1` is a way to version an API - sometimes changes to your database are going to effect your API. Any applications relying on that imaginary column you just deleted are going to be broken if you don't provide a versioned API for your users.*

### Configuring a Migrations Directory

Let's hop back into our knex configuration file and tell knex where we're going to store our migrations: 

```js
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
```

### Making a Migration

We can create a migration by running the following command:

```
knex migrate:make initial
```

This created a `migrations` directory at the root of the project and added a time stamped file with the name of the migration at the end. 

The `initial` word here is just a descriptor of what the migration is doing. (Think of git commit messages, the first one in your repo is `Initial Commit`, the rest of them should describe exactly what's happening.) So if we wanted to drop a column from our table we might run `knex migrate:make drop-foo-column`

The file created should look something like this:

```js
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
```

`up` defines what should happen when we run the migration. (i.e. What changes do we want to make to our database?)

`down` is the reverse. If we want to roll back to a previous version, then `down` undoes whatever `up` did.

For every `up` there must be an equal and opposite `down` that will allow us to rollback those changes. 

To see all the different options on building and modifying a table, review [the Knex docs.](http://knexjs.org/)

Let's edit the migration to create a `papers` table and a `footnotes` table. We will work with a one-to-many relationship here, where one paper can have many footnotes, but a footnote can only belong to one paper:

```js
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('papers', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('footnotes', function(table) {
      table.increments('id').primary();
      table.string('note');
      table.integer('paper_id').unsigned()
      table.foreign('paper_id')
        .references('papers.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('footnotes'),
    knex.schema.dropTable('papers')
  ]);
};
```

But, why is `Promise` passed in as a second argument? Knex is expecting that these methods return a promise of some sort. All Knex methods return a promise, so we fulfilled our end of the bargin in the example above. `Promise.all` allows you to do multiple things and return one promise. Knex passes us a reference to `Promise`, because it's not natively supported in some previous versions of Node. We're not using it at this moment, but we will in a second.

### Running Your Migrations

You can run all of your migrations to the latest point with the following command:

`knex migrate:latest`


### Updating Your Schema with Migrations

Now what if we realized we made a mistake in our schema and we wanted to add a column to the papers table for a publisher? We can't go directly into our initial migration file and edit it because it's already been made and run - it's already set in stone. So what do we have to do? Create another migration:

`knex migrate:make add-publisher`

And in this particular migration we'll want to add a column on the `up`, and drop it on the `down`:

```js
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('papers', function(table) {
      table.string('publisher');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('papers', function(table) {
      table.dropColumn('publisher');
    })
  ]);
};
```

Go ahead and run this migration and then we'll add some seed data to our tables that we've just set up.


## Seeds

Seeds are some default data. Sometimes it's nice to populate your database with some fake data just so you can work on other functionality while you wait for everything else to come together.

### Configuring a Seeds Directory

Similar to migrations, we need to tell knex where to look for our seed data. Back in our knex configuration file, let's add the following:

```js
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/publications',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
```

### Making a Seed File

We can make a seed file with the following command:

```bash
knex seed:make papers
```

Again, this creates a default file for you that we'll want to configure with our own tables and data:

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

You'll notice the seed file starts off by deleting any records in the database. This is just so we can ensure we're starting with a clean slate any time we run our seed file.

Because we are working with papers **and** footnotes, we need to:

1. Clear out both tables (footnotes first, as they depend on papers existing)
2. Add a paper => return the paper's id => add footnotes with that paper id
3. Add a paper => return the paper's id => add footnotes with that paper id

The logic here gets a little hairy, but ultimately will end up looking like this:

```js
exports.seed = function(knex, Promise) {
  // We must return a Promise from within our seed function
  // Without this initial `return` statement, the seed execution
  // will end before the asynchronous tasks have completed
  return knex('footnotes').del() // delete all footnotes first
    .then(() => knex('papers').del()) // delete all papers

    // Now that we have a clean slate, we can re-insert our paper data
    .then(() => {
      return Promise.all([
        
        // Insert a single paper, return the paper ID, insert 2 footnotes
        knex('papers').insert({
          title: 'Fooo', author: 'Bob', publisher: 'Minnesota'
        }, 'id')
        .then(paper => {
          return knex('footnotes').insert([
            { note: 'Lorem', paper_id: paper[0] },
            { note: 'Dolor', paper_id: paper[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`));
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
```

*Note on return statements: In our seed files, we often have to return Promises rather than just calling them. Without the return statements, the asynchronous code in our seed file will be kicked-off, but knex will not necessarily know to wait for it to resolve before it says 'I'm done seeding your data'. The same thing applies at any nested level of .thens() in our code. If your seeding doesn't seem to be working, but you're not receiving any error messages, double-check if you're missing any return statements for the asynchronous operations you're writing.*

### Running Your Seeds

You can run your seeds (again, similar to migrations) with:

```bash
knex seed:run
```

### Seeding Large Datasets

When you have a large dataset that needs to be seeded, you'll often want to simplify your code by iterating over your dataset and inserting each record and any of its dependents, rather than having to manually write an `insert` for each one. This can get a little hairy when we're using Promises. We can't simply nest Promises within a `forEach` loop because our code will run through the loop without recognizing that it needs to wait for each insertion promise to resolve before ending the seed execution. 

To get around this, we can break our insertion logic out into a separate function. For example, given the following dataset:

```js
let papersData = [{
  author: 'Brittany',
  title: 'Lorem Ipsum',
  footnotes: ['one', 'two', 'three']
},
{
  author: 'Robbie',
  title: 'Dolor Set Amet',
  footnotes: ['four', 'five', 'six']
}]
```

We could write a function that appropriately seeds a paper into the `papers` table and all of it's footnotes into the `footnotes` table:

```js
const createPaper = (knex, paper) => {
  return knex('papers').insert({
    title: paper.title,
    author: paper.author
  }, 'id')
  .then(paperId => {
    let footnotePromises = [];

    paper.footnotes.forEach(footnote => {
      footnotePromises.push(
        createFootnote(knex, {
          note: footnote,
          paper_id: paperId[0]
        })
      )
    });

    return Promise.all(footnotePromises);
  })
};

const createFootnote = (knex, footnote) => {
  return knex('footnotes').insert(footnote);
};

exports.seed = (knex, Promise) => {
  return knex('footnotes').del() // delete footnotes first
    .then(() => knex('papers').del()) // delete all papers
    .then(() => {
      let paperPromises = [];

      papersData.forEach(paper => {
        paperPromises.push(createPaper(knex, paper));
      });

      return Promise.all(paperPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
```

## Fetching From the Database

Let's write some express code to interact with our newly seeded database. Set up a simple express server and we'll add some configuration to work with the knex database:

```js
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
```

There are a few things going on in the code above:

1. We want to know if we're in a development, testing, or production environment. If we don't know, we'll assume we're in development.
2. Based on that environment, we'll fetch the database configuration from `knexfile.js` for whatever environment we're in and now our express app will be able to connect to it.

### Retrieving Data from the Database

To make a selection for all the papers in the database, we can use `database('papers').select()`. This will return an array of all the papers we've added to the paper table:


```js
app.get('/api/v1/papers', (request, response) => {
  database('papers').select()
    .then((papers) => {
      if (papers.length) {
        response.status(200).json(papers);
      } else {
        response.status(404).json({ 
          error: 'No papers found!'
        });
      }
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});
```

If we check this in POSTMAN, we should get back an array of all our papers that looks something like this:

```js
[{
  id: 1,
  author: 'Brittany',
  title: 'Lorem Ipsum',
  publisher: 'University of Minnesota'
},
{
  id: 2,
  author: 'Robbie',
  title: 'Dolor Set Amet',
  publisher: 'University of Michigan'
}]
```

Now let's say we decided we *didn't* need that publisher column, and we wanted to get rid of it. We could rollback that change to our schema by running:

```bash
knex migrate:rollback
```

Our GET request would now return the same array without publisher columns:

```js
[{
  id: 1,
  author: 'Brittany',
  title: 'Lorem Ipsum'
},
{
  id: 2,
  author: 'Robbie',
  title: 'Dolor Set Amet'
}]
```

#### On Your Own

Write a GET request to retrieve all footnotes. Verify it works using Postman.


### Adding Data to the Database

Now let's add a new paper to the database. We can do this with a POST request and use our database `insert` method:

```js
app.post('/api/v1/papers', (request, response) => {
  const paper = request.body;

  for (let requiredParameter of ['title', 'author']) {
    if (!paper[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { title: <String>, author: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('papers').insert(paper, 'id')
    .then(paper => {
      response.status(201).json({ id: paper[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
```

#### On Your Own

Write a POST request to add a new footnote that belongs to a pre-existing paper. Verify it works with Postman.


### Querying Data for a specific Resource

What if we want to only retrieve a single, specific paper? We can do this by passing in an `id` through our request params. With our database selection, we need to limit our `select()` with a `where` clause that matches on the id field: 

```js
// GET a specific paper
app.get('/api/v1/papers/:id', (request, response) => {
  database('papers').where('id', request.params.id).select()
    .then(papers => {
      if (papers.length) {
        response.status(200).json(papers);
      } else {
        response.status(404).json({ 
          error: `Could not find paper with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
```

#### On Your Own

Write a GET request to retrieve all footnotes for a pre-existing paper. Verify it works with postman.
