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

## Request Flow
When we are just using Node.js, the flow of a single request might look like this:

![node only][node-only-flow]

When we add Express, there a couple of additional steps added to the flow of a request:

![express flow][express-flow]

While the Express flow might look more complex, it actually makes the developer's job a lot easier. In this flow, the developer is only responsible for the 'Middleware' part of the process. This replaces the single request handler function that you would write without Express. Writing middlware for Express is a lot easier to write and more maintainable because of the 'Express' step that abstracts the complex logic for us.

[node-only-flow]: /assets/images/lessons/express/node-only-flow.png
[express-flow]: /assets/images/lessons/express/express-flow.png

## Routing & Middleware
Earlier we mentioned that with plain Node.js, you would create a single function to handle requests. This single function can get large and unwieldy as your application grows in complexity. Express middlware allows you to break this single function into many smaller functions that only handle one thing at a time.

Most of the Express code that you write will be routing middleware. Middleware is basically the "glue" between two systems that helps them work together (in our case, Node and Express). Our code will be concerned with responding to client requests to different URLs with different methods (GET, POST, etc).

Let's pick apart the structure of how we define an Express route:

```javascript
app.get('/', function (request, response) {
  response.send('Hello World!')
})
```

In the above example, our express app (denoted by `app`), is handling a `GET` request to `'/'`. The second parameter in this call is our callback that defines how we're actually going to handle what happens when a user makes a `GET` request to `'/'`. The callback takes two parameters: the request (`req`) and the response (`res`). In this example, our hander is simply sending back a response (`res.send`) with the text 'Hello World!'. 

This pattern is exactly how we can define and handle any routes in an Express application. There are four main pieces to this code:

* `app` - the instance of our Express application
* a METHOD - the method specified when the request is made from the client. (e.g. `GET`, `POST`, `PUT`, `DELETE`)
* a PATH - the endpoint that we are requesting
* a HANDLER - the function we write that contains the logic for how the request should be dealt with, and what kind of response it should return

An example of a `POST` request to retrieve data might look something like the following:

```javascript
app.post('/messages', (request, response) => {
  const { message } = request.body; // grab the data we pass in from the client-side
  message.id = message.id || Date.now(); // add a unique ID to the message
  app.locals.messages.push(message); // store the new message locally (normally this would go into a database)
  response.status(201).send({ message }); // send back the full message object as our response
});
```

This block of code would be hit any time a `POST` request is made from the client side to `/messages`. Using the `fetch` API, the code on our client-side might look like this:

```javascript
fetch('/messages', {
  method: 'POST',
  body: JSON.stringify({ user: 'Brittany', message: 'Hello' })
})
.then(response => JSON.parse(response))
.then(messageData => {
  console.log(messageData); // logs { id: 2307652394, user: 'Brittany', message: 'Hello' }
})
.catch(error => {
  console.log(error); // logs any error message we return from our response
})
```

## Error Handling
In our previous example, we simply stored a new message object that we received from the client-side and sent it back as a successful response. When we successfully create a new record in a collection of application data, we can signal this success to our end-user by setting an [HTTP Status Code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). There are many different status codes to use in various situations. Upon a successful 'creation' you'll want to set the status code to `201` before sending back the response object.

Take a minute to look through some of the other available status codes that can be used. These are a quick way to determine what happened to our request when it was sent to the server, and are easily viewed in the 'Network' panel of your browser developer tools.

Status codes are especially important when handling errors for a request. Let's add some error handling to our previous example. We are going to assume that 'user' and 'message' are both required properties when submitting a new message, and we want to respond with an error if either of them are missing:

```javascript
app.post('/messages', (request, response) => {
  const { message } = request.body;

  for (let requiredParameter of ['user', 'message']) {
    if (!message[requiredParameter]) {
      return response
        .status(422)
        .send({ 
          error: `Expected format: { user: <String>, message: <String> }. You're missing a "${requiredParameter}" property.`
        });
    }
  }

  message.id = message.id || Date.now();
  app.locals.messages.push(message);
  response.status(201).send({ message });
});
```

If either property is missing, we will see an error in the Network tab of our developer tools where the response is highlighted in red and has a status of `422` (client error). The response details will tell us exactly which property we are missing based on the error message we sent along with the 422 response.

It's important to handle errors and write descriptive error messages so that others can more easily debug their code and quickly fix whatever problem they are running into. Setting appropriate status codes and being as specific as possible with the response message is the best way to write a user-friendly API.


## Resources
- [Express.js](https://expressjs.com/)
- [HTTP Status Codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)