---
title: Data Storage & Structure
length: 60
tags: data, data storage, databases
module: 4
---

### Goals

By the end of this lesson, you will:

* Understand the difference between relational and non-relational databases
* Be familiar with common data relationships and understand how their structure is affected by the database you choose

## Databases

A database is a collection of data stored in an organized way.

Software products that are used to build, maintain and access data from a database are called Database Management Systems. You'll often hear of two different types of database systems: **relational** and **non-relational**. 

### Relational Databases

Traditional databases such as [MySQL](https://www.mysql.com/) and [PostgreSQL](https://www.postgresql.org/) are considered **relational** -- data points are predictable and have strict relationships between each other. The database requires a strict, pre-defined schema (more on this in a bit) with tables and columns.

Important characteristics of relational databases are that they:

* **Store data in tables with rows and columns** - similar to an excel spreadsheet
* **Require a strict, pre-defined schema** - you must know the exact fields and their data types for each column of every table, and each record must conform to the defined structure
* **Limit the types of data structures that can be stored** - this forces you into a flatter overall data structure, as you cannot easily nest complex data types
* **Uses SQL (structured querying language) to access and manipulate data points** - allows you to link information from different tables through unique keys (foreign and primary)

Let's look at an example of how data might exist in a relational database. If we have a table of research papers and another table of footnotes that each correspond to a research paper, our data tables might look like the following:

```js
// One-to-many relationship - Relational Database Setup
// Requires two separate tables: one for research papers
// and another for footnotes. Each footnote must contain 
// a 'publicationId' field to link it to a specific paper

researchPapers: id, title, publicationDate
footNotes: id, page, note, publicationId
```

#### researchPapers:

id | title            | publicationDate |
---|------------------|-----------------|
1  | Lorem Ispum      | 2345635682547   |
2  | Dolor Set Amet   | 3568356245622   |
3  | Consequetar Adip | 5795673456278   |
 
#### footNotes:

id | page | publicationId | note
---|------|---------------|------------------------------|
1  | 26   | 1             | 'Dolor set amet consequetar' |
2  | 362  | 1             | 'Consequetar adipscing'      |
3  | 75   | 2             | 'Lorem set amet'             |




In a more familiar format, this data would likely be extracted from a database and come through an API endpoint as JSON data like so:

```js
// Research Papers
[{
  'id': 1,
  'title': 'Lorem Ipsum Dolor',
  'publicationDate': 2345635682547
}];

// Footnotes
[{
  'id': 1
  'pageNumber': 26,
  'note': 'Dolor set amet consequetar',
  'publicationId': 1
},
{
  'id': 2
  'pageNumber': 362,
  'note': 'Consequetar adipscing',
  'publicationId': 1
},
{
  'id': 3
  'pageNumber': 75,
  'note': 'Lorem set amet',
  'publicationId': 2
}];
```

#### Terminology

* **Schema** - A schema is the definition of your data structure. It provides a blueprint for the tables in your database and the relationships between them. Within each table, you also need to define the types of data that can be stored in each column
* **Primary Key** - A key in a relational database that is unique for each record. It is a unique identifier. You must have one and only one primary key
* **Foreign Key** - A field in one table that uniquely identifies a row of another table. A foreign key is defined in a second table, but it refers to the primary key in the first table

### Reading

Take a couple of minutes to look through the files in [this randomly-selected open source codebase](https://github.com/thinktopography/backframejs/tree/e738762b4b2b9f19351e261c99cfeebb62411c44/src/platform/db/migrations). Each file is associated with a `table` in the database for this project, using software called Knex to interface with a `relational database`. We will learn more about Knex in the next lesson. 



### Non-Relational Databases

Up until now, you have mostly seen non-relational databases. Non-relational databases, such as [MongoDB](https://www.mongodb.com/), allow for greater flexibility with the types of data you are storing and the way it can be structured in your database. There is no required schema and each data record can specify its own set of attributes.

Non-relational databases:

* **Allow for complex data types to be stored** - this allows for a more nested data structure as you can store lists and objects in any field
* **Do not have structured mechanisms for linking data between tables** - No SQL means we have to do manual linking of our data records which can get ugly pretty fast, but it also means it's safe from SQL injection attacks.

Non-relational databases have been gaining popularity as the web can support more complex data types and applications are becoming more robust. They come with much greater flexibility. But as always, greater flexibility also means a greater chance of doing things wrong (or not necessarily wrong, but definitely less efficient). (Think back to the tradeoffs we learned about in the Firebase documentation.)

The same data we saw above, coming from a non-relational database, might look like so:

```js
// One-to-many relationship - Non-Relational Database Setup
// Notice: footnotes are stored as an array directly within
// the research paper object, and they no longer need a key
// to reference the publicationId

// Research Papers
[{
  'id': 1,
  'title': 'Lorem Ipsum Dolor',
  'publicationDate': 1493673656502,
  'footnotes': [{
    'id': 1
    'pageNumber': 26,
    'note': 'Dolor set amet consequetar'
  },
  {
    'id': 2
    'pageNumber': 362,
    'note': 'Consequetar adipscing'
  },
  {
    'id': 3
    'pageNumber': 75,
    'note': 'Lorem set amet'
  }]
}];
```

### Choosing a DBMS
Choosing a Database Management System for your application is highly dependent on what kind of data you plan to store. It's important to map out what your ideal data structure might look like before choosing a DBMS. There are tools to help you visualize the schemas you create, such as [Schema Designer](http://ondras.zarovi.cz/sql/demo/)

You also might choose a particular database depending on what technologies you're using elsewhere in your application. For example, if you're using Firebase for authentication and storage, it might make sense to use Firebase as your back-end store as well.

### Reading

Although Firebase is a nosql database, they actually encourage you to [structure your data](https://firebase.google.com/docs/database/web/structure-data) in a flat manner. Take a moment to read through this documentation and understand why.


## Data Structures & Data Modeling

There are many different strategies for modeling application data. The data modeling method you choose is highly dependent on what type of database you're using. 

### Cause & Effect Between Data & Schemas
For example, if you choose to use [Postgres](https://www.postgresql.org/), a relational database, you must define a strict schema before adding any records to your database. Remember we said a **schema** is the definition of your data structure. It provides a blueprint for the tables in your database and the relationships between them.

In contrast, a non-relational database allows you to add records to your database (often called 'documents') that describe the schema of your data. The cause-and-effect here is essentially flipped: instead of our schema describing our data, our data is describing our schema. This is especially useful in scenarios where you each data record may or may not contain certain values. When your data is going to be less predictable, and more flexible, this type of database is often easier to work with. They allow you to create nested data objects and add as much or as little complexity to each record as you'd like.

### Consider Data Extraction
Remember, the way you put data **into** a database will have a big effect on how you pull data **out** of your database. When considering how to structure your data, think about what data points you're going to want to extract back out for use in your application. What information are you going to want to display on the UI? Prioritize making this extraction as simple as possible, by storing it in an easily accessible way.

### Defining Data Relationships

There are several common 'relationships' between data in most applications. Two of the most common are **one-to-many** and **many-to-many**. Let's take a look at an example of each and how they might be structured in a relational vs. non-relational database.

Say we have a collection of research papers:

```bash
Research papers can have many footnotes
Footnotes can only belong to a single research paper
```

What kind of relationship do you think this represents? How might it be modeled in a relational database? How might it be modeled in a non-relational database?

Let's think about another relationship:

```bash
Research papers can have many authors
Authors can publish many research papers
```

What relationship does this describe? How might it be modeled in a relational vs. non-relational database?


## Resources

* [Relational vs. non-relational databases and how to choose](https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)
* [Data Modeling Techniques for Non-Relational Databases](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)


<!-- ### Instructor Resources -->
<!-- * [Data Modeling Code Examples](https://github.com/turingschool/front-end-keys/blob/master/module-4/lesson-plans/data-structure-storage.md) -->