---
title: Data Storage
length: 60
tags: data, data storage, databases
---

## Application Data Storage

### Choosing a Database
Choosing a database for your application is highly dependent on what kind of data you plan to store. You'll often hear of two different types of databases: relational and non-relational. 

Traditional databases such as MySQL are considered relational -- data points are predictable and have strict relationships between each other. The database requires a strict, pre-defined schema with tables and columns.

Non-relational databases, such as MongoDB, allow for greater flexibility with the types of data you are storing and the way it can be structured in your database. There is no required schema and each data record can specify its own set of attributes.

[Relational vs. non-relational databases and how to choose](https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)

You also might choose a particular database depending on what technologies you're using elsewhere in your application. For example, if you're using Firebase for authentication and storage, it might make sense to use Firebase as your back-end store as well. The database you choose will ultimately have an effect on the structure of your data. For example, read through how Firebase prefers that you [structure your data](https://firebase.google.com/docs/database/web/structure-data). Following the documentation and examples for the database you choose will help you understand the best way to structure your data to work most efficiently and effectively with that particular database.

### Data Structures & Data Modeling
There are many different strategies for modeling application data. The data modeling method you choose is highly dependent on what type of database you're using. For example, if you choose to use Postgres, a relational database, you must define a schema before adding any records to your database. A schema is the definition of your data structure, and provides a blueprint for the tables in your database and the relationships between them. Within each table, you also need to define the types of data that can be stored in each column. 

In contrast, a non-relational database allows you to add records to your database (often called 'documents' in a non-relational database) that describe the schema of your data. The cause-and-effect here is essentially flipped: instead of our schema describing our data, our data is describing our schema. This is especially useful in scenarios where you each data record may or may not contain certain values. When your data is going to be less predictable, and more flexible, this type of database is often easier to work with. They allow you to create nested data objects and add as much or as little complexity to each record as you'd like.

Non-relational databases have been gaining popularity as the web can support more complex data types and applications are becoming more robust. You will likely find yourself working with one at some point, and remember they come with much greater flexibility. Greater flexibility also means a greater chance of doing things wrong (or not necessarily wrong, but definitely less efficient). 

[Data Modeling Techniques for Non-Relational Databases](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)

Remember, the way you put data **into** a database will have a big effect on how you pull data **out** of your database. When considering how to structure your data, think about what data points you're going to want to extract back out for use in your application. What information are you going to want to display on the UI? Prioritize making this extraction as simple as possible, by storing it in an easily accessible way. There are several [different data structures](https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=2) that we're already familiar with that will influence how easy or difficult it is to query the appropriate data.


### Client-Side Storage
As we start building more progressive web applications, and attempt to facilitate a greater offline experience, browsers have provided us with many more [storage options](https://www.html5rocks.com/en/tutorials/offline/storage/) on the client-side. We'll learn more about these in future lessons, but it's good to familiarize yourself with them now. They have replaced and enhanced more traditional solutions for client-side storage, such as [cookies](https://blog.newrelic.com/2012/09/18/html5-web-storage-cookies-are-so-1994/) and the original [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching) that was shipped in browsers. These new storage options are more robust, more secure, and easier to work with.

A lot of their underlying principles mimic data storage on the back-end, but they are used more often for temporary or session-based storage and come with some unique challenges. For example, many client-side storage options may be hampered by the common use of ad blockers and other privacy extensions users have installed on their browsers. You do not want to rely solely on client-side storage for persisting application data. Good use-cases for working with client-side storage might be facilitating a more personalized app experience or holding onto data that will eventually be synced with a back-end server when wifi connectivity isn't reliable.