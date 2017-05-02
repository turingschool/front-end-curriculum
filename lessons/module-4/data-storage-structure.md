---
title: Data Storage & Structure
length: 60
tags: data, data storage, databases
module: 4
---

### Goals

By the end of this lesson, you will:

* Understand the difference between relational and non-relational databases
* Be familiar with common data relationships and understand how their structure is affected by the database

### Databases

A database is a collection of data stored in an organized way.

Software products that are used to build, maintain and access data from a database are called Database Management Systems. You'll often hear of two different types of database systems: **relational** and **non-relational**. 

#### Relational Databases

Traditional databases such as [MySQL](https://www.mysql.com/) and [PostgreSQL](https://www.postgresql.org/) are considered **relational** -- data points are predictable and have strict relationships between each other. The database requires a strict, pre-defined schema (more on this in a bit) with tables and columns.

The important things to note about relational databases are that they:

* **Store data in tables with rows and columns** - similar to an excel spreadsheet
* **Require a strict, pre-defined schema** - you must know the exact fields and their data types for each column of every table, and each record must conform to the defined structure
* **Limit the types of data structures that can be stored** - this forces you into a flatter overall data structure, as you cannot easily nest complex data types
* **Uses SQL (structured querying language) to access and manipulate data points** - allows you to link information from different tables through unique keys (foreign and primary)


##### Terminology

* **Schema** - A schema is the definition of your data structure. It provides a blueprint for the tables in your database and the relationships between them. Within each table, you also need to define the types of data that can be stored in each column
* **Primary Key** - A key in a relational database that is unique for each record. It is a unique identifier. You must have one and only one primary key
* **Foreign Key** - A field in one table that uniquely identifies a row of another table. A foreign key is defined in a second table, but it refers to the primary key in the first table


#### Non-Relational Databases

Up until now, you have mostly seen non-relational databases. Non-relational databases, such as [MongoDB](https://www.mongodb.com/), allow for greater flexibility with the types of data you are storing and the way it can be structured in your database. There is no required schema and each data record can specify its own set of attributes.

Non-relational databases:

* **Allow for complex data types to be stored** - this allows for a more nested data structure as you can store lists and objects in any field
* **Do not have structured mechanisms for linking data between tables** - No SQL means we have to do manual linking of our data records which can get ugly pretty fast, but it also means it's safe from SQL injection attacks.


### Choosing a DBMS
Choosing a Database Management System for your application is highly dependent on what kind of data you plan to store. It's important to map out what your ideal data structure might look like before choosing a DBMS.

You also might choose a particular database depending on what technologies you're using elsewhere in your application. For example, if you're using Firebase for authentication and storage, it might make sense to use Firebase as your back-end store as well.

### Understanding the Data Modeling Process

Let's pretend you get hired by a company to build an internal tool. Company A recently bought a really nice building in the heart of downtown Denver. The company is planning to expand, so they bought a building that is bigger than they need currently.

While they wait to be aquired, they would like to rent out space in a big open area to other companies as a co-working space.

They want you to build a system where they can rent out tables or single spots at tables for set periods of time.

How would you model this? 

#### Readings

- Read [Relational vs. non-relational databases and how to choose](https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)
- Skim [Firebase's thoughts on how to structure your data](https://firebase.google.com/docs/database/web/structure-data)
  - Review how you have structured data with Firebase in past projects. Did you find this documentation on your own? If you didn't, would reading this have changed how you structured your data?
- Look at Real Code. Check out the files in [this directory](https://github.com/thinktopography/backframejs/tree/e738762b4b2b9f19351e261c99cfeebb62411c44/src/platform/db/migrations) in a randomly selected open source project. 
  - Each file relates to a `table` in the database for this project using software called Knex to interface with a `relational database`. We will learn more about Knex in the next lesson.


### Data Structures & Data Modeling

There are many different strategies for modeling application data. The data modeling method you choose is highly dependent on what type of database you're using. 

For example, if you choose to use [Postgres](https://www.postgresql.org/), a relational database, you must define a schema before adding any records to your database. 

A **schema** is the definition of your data structure, and provides a blueprint for the tables in your database and the relationships between them. Within each table, you also need to define the types of data that can be stored in each column. 

In contrast, a non-relational database allows you to add records to your database (often called 'documents' in a non-relational database) that describe the schema of your data. The cause-and-effect here is essentially flipped: instead of our schema describing our data, our data is describing our schema. This is especially useful in scenarios where you each data record may or may not contain certain values. When your data is going to be less predictable, and more flexible, this type of database is often easier to work with. They allow you to create nested data objects and add as much or as little complexity to each record as you'd like.

You have done this already when you used Firebase to store data.

Non-relational databases have been gaining popularity as the web can support more complex data types and applications are becoming more robust. They come with much greater flexibility. Greater flexibility also means a greater chance of doing things wrong (or not necessarily wrong, but definitely less efficient). 

[Data Modeling Techniques for Non-Relational Databases](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)

Remember, the way you put data **into** a database will have a big effect on how you pull data **out** of your database. When considering how to structure your data, think about what data points you're going to want to extract back out for use in your application. What information are you going to want to display on the UI? Prioritize making this extraction as simple as possible, by storing it in an easily accessible way. 

There are several [different data structures](https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=2) that we're already familiar with that will influence how easy or difficult it is to query the appropriate data.

#### Readings

- Read [Data Modeling Techniques for Non-Relational Databases](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)
- Watch [a summary of different data structures](https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=2)

### Client-Side Storage

As we start building more progressive web applications, and attempt to facilitate a greater offline experience, browsers have provided us with many more [storage options](https://www.html5rocks.com/en/tutorials/offline/storage/) on the client side. 

We'll learn more about these in future lessons, but it's good to familiarize yourself with them now. They have replaced or enhanced more traditional solutions for client-side storage, such as [cookies](https://blog.newrelic.com/2012/09/18/html5-web-storage-cookies-are-so-1994/) and the original [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching) that was shipped in browsers.

These new storage options are more robust, more secure, and easier to work with.

A lot of their underlying principles mimic data storage on the back-end, but they are used more often for temporary or session-based storage and come with some unique challenges. 

For example, many client-side storage options may be hampered by the common use of ad blockers and other privacy extensions users have installed on their browsers. You do not want to rely solely on client-side storage for persisting application data. 

Good use-cases for working with client-side storage might be facilitating a more personalized app experience or holding onto data that will eventually be synced with a back-end server when wifi connectivity isn't reliable.

#### Readings

- Skim: [storage options](https://www.html5rocks.com/en/tutorials/offline/storage/)
- Read: [cookies](https://blog.newrelic.com/2012/09/18/html5-web-storage-cookies-are-so-1994/)
- Skim: [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
- Review: You've used loalStorage in past applications. Why did you use it? Where was it effective? Where any of the use cases ones that you might actually use in production?

### Review

** Make sure that you can answer the following questions. Additional Googling may be required. **

- What is the difference between a relational and non-relational database?
- What is an example of a relational database?
- What kind of database did you use when you saved data to Firebase?
- How do you look at what is being stored in client side storage in the Chrome Developer tools?
- What is the difference between localStorage & cookies?
- How much time do you think developers spend thinking about, discussing and planning the structure of how they will store data in a large application? (hint: might be a good question to send to a mentor)