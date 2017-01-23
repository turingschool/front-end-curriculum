---
title: Data Storage
length: 60
tags: data, data storage, databases
---

## Application Data Storage

### Choosing a Database
Choosing a database for your application is highly dependent on what kind of data you plan to store. You'll often hear of two different types of databases: relational and non-relational. Traditional databases such as MySQL are considered relational -- data points are predictable and have strict relationships between each other. Non-relational databases, such as MongoDB, allow for greater flexibility with the types of data you are storing and the way it can be structured in your database.

[Relational vs. non-relational databases and how to choose](https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)

### Data Structures & Data Modeling
You also might choose a particular database depending on what technologies you're using elsewhere in your application. For example, if you're using Firebase for authentication and storage, it might make sense to use Firebase as your back-end store as well. The database you choose will ultimately have an effect on the structure of your data. For example, read through how Firebase prefers that you [structure your data](https://firebase.google.com/docs/database/web/structure-data). Following the documentation and examples for the database you choose will help you understand the best way to structure your data to work most efficiently and effectively with that particular database.

Additionally, the way you put data **into** a database will have a big effect on how you pull data **out** of your database. When considering how to structure your data, think about what data points you're going to want to extract back out for use in your application. What information are you going to want to display on the UI? Prioritize making this extraction as simple as possible, by storing it in an easily accessible way. There are several [different data structures](https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=2) that we're already familiar with that will make querying the appropriate data either very easy, or very difficult.

Non-relational databases have been gaining popularity as the web can support more complex data types and applications are becoming more robust. You will likely find yourself working with one at some point, and remember they come with much greater flexibility. Greater flexibility also means a greater chance of doing things wrong (or not necessarily wrong, but definitely less efficient). 

[Data Modeling Techniques for Non-Relational Databases](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)

### Client-Side Storage
As we start building more progressive web applications, and attempt to facilitate a greater offline experience, we might also want to leverage some of the client-side storage options available to us. We'll learn more about these in future lessons, but familiarize yourself with them now: [Offline Storage](https://www.html5rocks.com/en/tutorials/offline/storage/).

A lot of their underlying principles mimic data storage on the back-end, but they are used more often for temporary storage and come with some unique challenges. 