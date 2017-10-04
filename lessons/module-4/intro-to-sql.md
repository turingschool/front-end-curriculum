---
title: Intro to SQL
length: 60
tags: sql, databases
---

## Goals

* Understand what SQL is and what it's used for
* Learn basic postgres commands for navigating databases in the terminal


## SQL

SQL (pronounced sequel) stands for Structured Query Language. Its the most popular language for interacting with databases. SQL allows us to create databases and tables, change the data that exists within them, retrieve very specific data from a large set that we're interested in, etc.

Most frequently, when you're writing SQL, you'd likely be doing it from the terminal or writing a script that can be run to generate your queries for you. There are some exceptions though -- [here](https://github.com/symfony/symfony/blob/5129c4cf7e294b1a5ea30d6fec6e89b75396dcd2/src/Symfony/Bridge/Doctrine/Security/RememberMe/DoctrineTokenProvider.php#L63-L67) are some [instances](https://github.com/symfony/symfony/blob/5129c4cf7e294b1a5ea30d6fec6e89b75396dcd2/src/Symfony/Bridge/Doctrine/Security/RememberMe/DoctrineTokenProvider.php#L82-L85) of SQL in PHP codebases. Pretty gnarly when you see it in this context, right? Lucky for us, people have built many abstractions over SQL so that we don't have to write code that looks like this. 

## Writing SQL in the Terminal

* `SELECT * from <tablename>;`
* `SELECT * from <tablename> WHERE column='value';`
* `INSERT INTO <tablename> (title) VALUES ('Baz');`
* `DELETE FROM <tablename> WHERE column='value';`

### Gotchas

* Don't forget your semi-colons after each SQL query!
* Postgres requires single quotes in scenarios like `WHERE column='value'`


## Handy Postgres Commands

* `\list` - list all databases
* `\connect <databasename>` - connect to a particular database
* `\dt` - after you're connected to a database, show the tables it contains
* `\d <tablename>` - list all columns in a table
* `\q` - quit


## Practice (20 minutes)

Practice writing SQL commands by going through the lessons [here](http://sql-by-repetition.herokuapp.com/), that will teach you how to make selections and filter data.