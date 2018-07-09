---
title: Express Middleware
length: 1 hour
tags: express, backend, node
module: 4
---

## Goals

To be able to create middleware functions and apply them to your Express server endpoints.

The specific purpose of the middleware functions in this lesson is not important, but it is important to know how to implement 
middleware functions and what implications they have on your server endpoints.

### Getting Started

Clone down [this repo](https://github.com/turingschool-examples/express-middleware-exercise), run `npm install`, and start the 
server to make sure it is set up correctly. You should see something like this in your terminal:

```bash
Middleware exercise server running on http://localhost:3000
```

### Warm Up: Finish the Endpoints

There are two endpoints in the server file right now, a GET to `/api/v1/pets` and a POST to `/api/v1/pets`. Finish the functionality 
for these endpoints first. Start with the GET endpoint and then move on to the POST endpoint.

## Express Middleware

### What is it?

Middleware got the name because it is a function that is run in the _middle_ of your request. So a request is received by your server 
and before it gets to the route handler (the endpoint), Express will run any middleware for that endpoint.

We can take it step-by-step:

1. The server receives a request with an HTTP verb, URL, headers, and body
1. If there is a middleware function that should run after the request is received, it does so at this time
1. The middleware function runs and either send a response or passes control to the next middleware function
1. If there are no middleware functions left, then the control is passed to the route handler

One use case for middleware that you've seen already is `body-parser`.

Here is a flow diagram of middleware functions. It shows how control is passed from the request through the response. Each middleware 
function has the ability to send a response early before the request gets to the main route handler.

![Express middleware flow](https://cdn-images-1.medium.com/max/1600/0*8HIzvtX-DA3C26uv.png)

The names for the middleware functions in the picture above are some other use cases for middleware. We're not going to use these. 
Instead we'll make our own!

As a primer, read through the introduction on [this Express documentation page](https://expressjs.com/en/guide/using-middleware.html) and the 
first example under the section "Application-level middleware".

### First Middleware

In the server file, there is a commented section something like this:

```js
// 1. First middleware function (apply this function to all endpoints)
// Log data about the request:
// HTTP verb, endpoint, data in the request body, and anything else!
```

Just below these comments, create a new function using the Express middleware syntax from the documentation page.

Start small - create a function that console logs something, apply the middleware function to all of the endpoints, and test a request. Then 
add the functionality listed in the comments.

### Second Middleware

Next, in the server file there is a commented section something like this:

```js
// 2. Second middleware function (apply to only endpoint POST /pets)
// Check that there has been information sent in the request body
// If there is a request body, continue to POST request handler
// If there is not a request body, do not continue and send 422 response
```

Again, create a function that starts small by console logging, apply the middleware _only_ to the POST request, and test a request. Then 
add the functionality listed in the comments.