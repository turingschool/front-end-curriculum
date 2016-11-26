---
title: A Re-introduction to Express
length: 1 hour
tags: node, express, back-end, server
---

### Goals

By the end of this lesson, you will:

* Understand when and why to use Express.js in the back-end of an application
* Know how Express.js abstracts difficult server-side logic and makes it easier to write endpoints

## What is Express?
Express is a small framework built on top of the web server functionality provided by Node.js. It helps to simplify organize the server-side functionality of your application by providing abstractions over the more confusing parts of Node.js, and adding helpful utilities and features. 

## Why do we use Express?
Think about how and why we use jQuery on the front-end. Vanilla JavaScript can be verbose and difficult to read. jQuery came along to give developers a nicer-looking syntax to perform the same operations. It was a library built to abstract the trickier parts of JavaScript and make them easier to write and work with. Express was built for very similar reasons.

Just like browser-based JavaScript, the syntax for using plain Node.js isn't the friendliest. Node gives you enough low-level features to build the back-end of an application, but Express is a light layer built on top of Node to make these low-level features a little easier to read and write.

## Advantages of Express
While Node.js provides us with all of the functionality we need for our back-ends, writing this logic without Express is more difficult to make sense of and maintain. The two biggest advantages of Express are:

1. the collection of helpful utilities and conveniences that abstract away the Node.js complexity. (e.g. sending a single image file in raw Node.js is quite complex, but can be done in just one line with express)
2. the ability to refactor request handlers into smaller pieces that are more modular and maintainable. (Node.js, by default, requires you to create one large request handler, which makes your logic more rigid and difficult to refactor)

## The Anatomy of a Request
When we are just using Node.js, the flow of a single request might look like this:

![node only][node-only-flow]

When we add Express, there a couple of additional steps added to the flow of a request:

![express flow][express-flow]

While the Express flow might look more complex, it actually makes the developer's job a lot easier. In this flow, the developer is only responsible for the 'Middleware' part of the process. The code we write in this step is also much easier to write and understand because of the features added by the Express step.

## Middleware