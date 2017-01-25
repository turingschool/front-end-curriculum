---
layout: page
title: Fundamental SQL
---

Databases are at the core of almost every web application. They are our means of storing, fetching, calculating, and sorting data.

## SQL

*S*tructured *Q*uery *L*anguage is how we interact with most databases. Through carefully constructed SQL instructions we can create, modify, or delete tables. We can find existing data within tables, insert new data, or change what's there. We can add modifiers to our queries to scope them down to only entries matching certain criteria, or calculate aggregates on the fly.

While it's somewhat English-like and approachable, don't be confused: SQL is a programming language. Using it effectively necessitates the same care and attention put into any program.

### Database Engines

There are many different database systems. The most popular SQL-based databases include PostgreSQL, MySQL, Oracle, MS SQL Server, and SQLite.

The core techniques of SQL are common to all of these systems. Hypothetically your queries and data should be portable between each of them. For our lessons and applications we'll use PostgreSQL.

### Installing PostgreSQL

First run `brew doctor` and try to resolve and errors it complains about.

Then:

```
$ brew update
$ brew install postgresql
$ brew services start postgresql
```

### Verifying PostgreSQL

First, create a database from your terminal with:

```
$ createdb sample_database
```

Then access it:

```
$ psql sample_database
```

If that gets you into a PostgreSQL prompt, then exit with `\q`:

```
sample_database=# \q
```

If you got back to your terminal then you're ready to go!

## Hands-On Experiments

### Access the Database

Let's reopen our `psql` session:

```
$ psql sample_database
```

### Creating a Table

The first thing to do is create a table:

```
> CREATE TABLE fruits(id SERIAL, name VARCHAR(31), quantity INT);
```

SQL commands are not case sensitive, but the convention is to write SQL instructions/keywords in ALL UPPERCASE and write data/names in lowercase.

This instruction creates a table named `fruits` that has three columns:

* an `id` column that is a "serial" type. That means whenever we insert a row into the table, the database engine will automatically assign a unique ID number to the row. The first row will get ID 1, the second one ID 2, etc. IDs will never be repeated.
* a `name` column that is type `VARCHAR` or "variable character", like a string, with a maximum length of 31 characters
* a `quantity` column that is an integer

### Inserting Data

Let's try inserting two fruits into our table:

```
> INSERT INTO fruits(name, quantity) VALUES ('apples', 6);
> INSERT INTO fruits(name, quantity) VALUES ('oranges', 12);
> INSERT INTO fruits(name, quantity) VALUES ('bananas', 18);
```

Did it work? Let's find out...

### Displaying Data

Let's see if our table actually has the data we put in.

```
> SELECT * FROM fruits;
id |  name   | quantity
----+---------+----------
 1 | apples  |        6
 2 | oranges |       12
 3 | bananas |       18
```

Hey, it's data! We use the `SELECT` command to find rows in the table. Specifically, here we said `SELECT *` which means "find all the data/columns". Then `FROM fruits` means to look in the table named `fruits`.

### Scoping Data

When you have a very small dataset, it's possible to just print out the whole table to find what you're looking for. But as the data grows that becomes impractical.

Let's look at how you can scope down your `SELECT` queries using `WHERE`:

```
> SELECT * FROM fruits WHERE name='apples';
id |  name  | quantity
----+--------+----------
 1 | apples |        6
> SELECT * FROM fruits WHERE quantity=18;
id |  name   | quantity
----+---------+----------
 3 | bananas |       18
```

The `WHERE` limits the returned rows to only those with the specified attribute matching.

### Calculating Data

Queries aren't limited to just matching the existing data. They can also run functions or calculations on that data and match against the results:

```
> SELECT * FROM fruits WHERE LENGTH(name)=7;
id |  name   | quantity
----+---------+----------
 2 | oranges |       12
 3 | bananas |       18
```

The `LENGTH` function returns the number of characters in a string. Both `oranges` and `bananas` have 7 characters, so those rows are displayed here.

### Limited Selection

Imagine that our table has many more columns of data, like a timestamp of when the fruit was last stocked, timestamp of the last sale, country of origin, etc.

Many times when we query a table we only care about a subset of the row's data. Say we only want to find the `name` of the fruit with `id` of `3`:

```
> SELECT name FROM fruits WHERE id=3;
name   
---------
bananas
```

We get back only the column we asked for, `name`, as opposed to all the columns when we used `*` earlier.

### Removing Rows

Removing rows works just like `SELECT` but with the command `DELETE`:

```
> DELETE FROM fruits WHERE name='oranges';
> SELECT * FROM fruits;
id |  name   | quantity
----+---------+----------
 1 | apples  |        6
 3 | bananas |       18
```

The `DELETE` instruction will delete all matching rows and there's no "undo". If your `WHERE` clause has a typo, mistake, or doesn't exist you could cause havoc in the data.

### Auto-Increment Keys

And note what happens when we now insert a new fruit:

```
> INSERT INTO fruits(name, quantity) VALUES ('grapes', 128);
> SELECT * FROM fruits;
id |  name   | quantity
----+---------+----------
 1 | apples  |        6
 3 | bananas |       18
 4 | grapes  |      128

```

The IDs go `1`, `3`, `4`. The ID `2`, formerly used by the oranges, will not be reused.

### Updating Rows

We can change data of existing rows using `UPDATE`:

```
> UPDATE fruits SET quantity=17 WHERE name='bananas';
> SELECT * FROM fruits;
id |  name   | quantity
----+---------+----------
 1 | apples  |        6
 4 | grapes  |      128
 3 | bananas |       17
```

### Adding Columns to the Table

As you develop an application you'll find that your tables need more and more columns. We can add columns to an existing table:

```
> ALTER TABLE fruits ADD COLUMN country_of_origin VARCHAR(127);
> SELECT * FROM fruits;
id |  name   | quantity | country_of_origin
----+---------+----------+-------------------
 1 | apples  |        6 |
 4 | grapes  |      128 |
 3 | bananas |       17 |
```

Then maybe we want to set them all to Mexico:

```
> UPDATE fruits SET country_of_origin='Mexico';
> SELECT * FROM fruits;
id |  name   | quantity | country_of_origin
----+---------+----------+-------------------
 1 | apples  |        6 | Mexico
 4 | grapes  |      128 | Mexico
 3 | bananas |       17 | Mexico

```

### Ordering

By default data will be output in the order it was inserted, but that's not particularly reliable. If order matters to you, you need to add an `ORDER BY` clause:

```
> SELECT * from fruits ORDER BY name;
id |  name   | quantity | country_of_origin
----+---------+----------+-------------------
 1 | apples  |        6 | Mexico
 3 | bananas |       17 | Mexico
 4 | grapes  |      128 | Mexico
```

See! The order is totally diff...derp. We inserted them in alphabetical order. Let's display them in *reverse* alphabetical order:

```
> SELECT * from fruits ORDER BY name DESC;
id |  name   | quantity | country_of_origin
----+---------+----------+-------------------
 4 | grapes  |      128 | Mexico
 3 | bananas |       17 | Mexico
 1 | apples  |        6 | Mexico
```

Adding `DESC` means "descending". Ordering defaults to `ASC` or "ascending". So using `DESC` flips the normal order -- here returning our fruits in reverse alphabetical order by name.

### Relationships

Relationships are where SQL starts to get both very powerful and tricky. Let's create a second table that records each fruit sale at our store:

```
> CREATE TABLE sales(id SERIAL, fruit_id INTEGER, created_at TIMESTAMP);
```

This table should *not* hold the name of the fruit, it's current quantity, etc. Instead, it holds a REFERENCE to the fruit in the `fruits` table. This reference is held in the column `fruit_id` and is the numeric `id` from the `fruits` table for the associated row.

That `fruit_id` is called a **foreign key**.

#### Insert Sales Data

We can then insert a bit of sales data:

```
> INSERT INTO sales(fruit_id, created_at) VALUES(1, CURRENT_TIMESTAMP);
> INSERT INTO sales(fruit_id, created_at) VALUES(3, CURRENT_TIMESTAMP);
> INSERT INTO sales(fruit_id, created_at) VALUES(1, CURRENT_TIMESTAMP);
> SELECT * FROM sales;
id | fruit_id |         created_at         
----+----------+----------------------------
 1 |        1 | 2017-01-24 20:48:08.914193
 2 |        3 | 2017-01-24 20:48:17.010499
 3 |        1 | 2017-01-24 20:48:22.698663
```

#### Joining Tables

Let's say we want a summary of the fruit sales we can send to our boss. Explaining to him that "`fruit_id` of `1` means `apples`" won't go over well. We want to combine the data from the `fruits` table with that from the `sales` table:

```
> SELECT fruits.name, sales.created_at FROM fruits INNER JOIN sales ON fruits.id=sales.fruit_id;
name   |         created_at         
---------+----------------------------
apples  | 2017-01-24 20:48:08.914193
bananas | 2017-01-24 20:48:17.010499
apples  | 2017-01-24 20:48:22.698663
```

We want to find (`SELECT`) the field `name` from the `fruits` table along with the `created_at` from the `sales` table, connecting them where the `id` in `fruits` is equal to the `fruit_id` in sales.

In effect, a `JOIN` is like creating a new table composed of two of more other tables. The data is aligned/connected based on the `ON` criteria.

Note that our output has three rows because there were three sales. The name `apples` matched to two different sales, so it appears twice.

### Three-Way Relationships

Let's create customers and add them to the sales:

```
> CREATE TABLE customers(id SERIAL, name VARCHAR(63));
> INSERT INTO customers(name) VALUES ('Jeff');
> INSERT INTO customers(name) VALUES ('Violet');
> INSERT INTO customers(name) VALUES ('Vincent');
> SELECT * FROM customers;
id |  name   
----+---------
 1 | Jeff
 2 | Violet
 3 | Vincent
> ALTER TABLE sales ADD COLUMN customer_id INTEGER;
> UPDATE sales SET customer_id=2 WHERE id=1;
> UPDATE sales SET customer_id=2 WHERE id=3;
> UPDATE sales SET customer_id=1 WHERE id=2;
> SELECT * FROM sales;
id | fruit_id |         created_at         | customer_id
----+----------+----------------------------+-------------
 1 |        1 | 2017-01-24 20:48:08.914193 |           2
 3 |        1 | 2017-01-24 20:48:22.698663 |           2
 2 |        3 | 2017-01-24 20:48:17.010499 |           1
```

Then run a join between `sales`, `fruits`, and `customers`:

```
> SELECT customers.name as customer_name, fruits.name as fruit_name, sales.created_at FROM fruits INNER JOIN sales ON fruits.id=sales.fruit_id INNER JOIN customers ON sales.customer_id=customers.id;
customer_name | fruit_name |         created_at         
---------------+------------+----------------------------
Violet        | apples     | 2017-01-24 20:48:08.914193
Violet        | apples     | 2017-01-24 20:48:22.698663
Jeff          | bananas    | 2017-01-24 20:48:17.010499
```

And we can conclude that Violet is a fan of apples. Note how we used the `as` to define our own names for the displayed columns to avoid having two columns named `name`.

## Test Your Understanding

* Can you find all the rows from sales with the `customer_id` of `2`?
* Can you insert another fruit into the fruits table?
* Can you change the values of `country_of_origin` in the fruits table for bananas to `Honduras`?
* Can you add a `quantity_sold` column to the sales table?
* Can you insert a value into the `quantity_sold` of each row?
* Can you write one select that outputs the following?

```
fruit_name | quantity_sold | customer_name
------------+----------+---------------
 apples     |        2 | Violet
 apples     |        6 | Violet
 bananas    |        4 | Jeff

```

## That's a Wrap

We've explored the basic tools of a SQL database. Exit your prompt with `\q`.

## References

* [Database Design for Mere Mortals](https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0321884493/ref=sr_1_1?ie=UTF8&qid=1485317431&sr=8-1&keywords=database+design+for+mere+mortals) is the best book ever written about SQL databases
* [SQL Interactive Tutorial](http://sqlzoo.net/wiki/Main_Page) from SQL Zoo offers some more practice
