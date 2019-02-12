---
title: "Introduction to Express JS"
length: 2 hours
tags: node, express, back-end, server, http
---

### Pre-reqs

* Download the [Postman desktop app](https://app.getpostman.com/app/download/osx64) (you may already have the browser extension, which is now deprecated; please download the desktop application)

### Goals

By the end of this lesson, you will:

* Understand when and why to use Express.js (Express) in the back-end of an application
* Know how Express abstracts difficult server-side logic and makes it easier to write endpoints
* Create a simple Express app that implements all of the basic CRUD methods

### Vocabulary

* HTTP request/response cycle
* server
* client
* middleware
* route
* route handler
* CRUD

## What is Express?
Express is a small framework built on top of the web server functionality provided by Node.js. It helps to simplify and organize the server-side functionality of your application by providing abstractions over the more confusing parts of Node.js, and adding helpful utilities and features.

## Why do we use Express?
Think about how and why we use jQuery on the front-end. Vanilla JavaScript can be verbose and difficult to read. jQuery came along to give developers a nicer-looking syntax to perform the same operations. It was a library built to abstract the trickier parts of JavaScript and make them easier to write and work with. Express was built for very similar reasons.

Just like browser-based JavaScript, the syntax for using the plain [Node `http` library](https://nodejs.org/api/http.html) isn't the friendliest. Node gives you enough low-level features to build the back-end of an application, but Express is a light layer built on top of Node to make these low-level features a little easier to read and write.

## Advantages of Express
While Node's `http` library provides us with all of the functionality we need for our back-ends, writing this logic without Express is more difficult to make sense of and maintain. The two biggest advantages of Express are:

1. The collection of helpful utilities and conveniences that abstract away the Node.js complexity. (e.g. sending a single image file in a response with only raw Node `http` is quite complex, but can be done in just one line with Express)
2. The ability to refactor route handlers into smaller pieces that are more modular and maintainable. (Node `http`, by default, requires you to create one large route handler, which makes your logic more rigid and difficult to refactor)

## Request Flow
When we are just using Node.js, the flow of a single request might look like this:

![node only][node-only-flow]

When we add Express, there are a couple of additional steps added to the flow of a request:

![express flow][express-flow]

While the Express flow might look more complex, it actually makes the developer's job a lot easier. In this flow, the developer is only responsible for the "Middleware" part of the process. This replaces the single route handler function that you would write with only Node `http`. Writing middleware for Express is a lot easier to write and more maintainable because of the "Express" step that abstracts the complex logic for us.

[node-only-flow]: /assets/images/lessons/express/node-only-flow.png
[express-flow]: /assets/images/lessons/express/express-flow.png

## Routing & Middleware

Earlier we mentioned that with plain Node `http`, you would create a single function to handle requests. This single function can get large and unwieldy as your application grows in complexity. Express middleware allows you to break this single function into many smaller functions that only handle one thing at a time.

Most of the Express code that you write will be routing middleware. Middleware is basically the "glue" between two systems that helps them work together (in our case, Node and Express). Our code will be concerned with responding to client requests to different URLs with different methods (GET, POST, etc).

Let's pick apart the structure of how we define an Express route:

```javascript
app.get('/', function (request, response) {
  response.send('Hello World!');
});
```

In the above example, our express app (denoted by `app`), is handling a `GET` request to `'/'`. The second parameter in this call is our callback that defines how we're actually going to handle what happens when a user makes a `GET` request to `'/'`. The callback takes two parameters: the request (`req`) and the response (`res`). In this example, our handler is simply sending back a response (`res.send`) with the text 'Hello World!'.

This pattern is exactly how we can define and handle any routes in an Express application. There are four main pieces to this code:

* `app` - the instance of our Express application
* a METHOD - the method specified when the request is made from the client. (e.g. `GET`, `POST`, `PUT`, `DELETE`)
* a PATH - the endpoint that we are requesting
* a HANDLER - the function we write that contains the logic for how the request should be dealt with, and what kind of response it should return

## Getting Started with Express

Let's go ahead and install some dependencies that we'll need to get things rolling.

```
mkdir pet-box && cd pet-box
npm init --yes
npm i express --save
touch server.js
```

We'll get a basic server running using some code I stole from [the Express documentation](http://expressjs.com/starter/hello-world.html) and modified slightly to fit my tastes.

```js
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pet Box';

app.get('/', (request, response) => {
  response.send('Oh hey Pet Box');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
```


### Starting the Server

You can fire up your server using `node server.js` and visit `http://localhost:3000/` to enjoy in the fruits of your copy and pasting labor.

OR...

If you don't have `nodemon` installed globally, now might be a useful time to do that. Nodemon will auto-restart your server for you any time you make changes to your server file. When starting an app with `node`, you would have to manually shut your server down and spin it up again to see your most recent changes reflected.

```bash
npm i -g nodemon
nodemon server.js
```

### A Simple GET Request

We've already made one GET request, that's simply returning some text. Let's make another one using some actual data that will return JSON for us.

For now, we'll store an array of pets in a variable called `app.locals`, which is automatically given to us through express:

```js
app.locals.pets = [];
```

Let's put some fake data in for now:

```js
app.locals.pets = [
  { id: 'a1', name: 'Rover', type: 'dog' },
  { id: 'b2', name: 'Marcus Aurelius', type: 'parakeet' },
  { id: 'c3', name: 'Craisins', type: 'cat' }
];
```

The GET request:

```js
app.get('/api/v1/pets', (request, response) => {
  const pets = app.locals.pets;

  return response.json({ pets });
});
```


### Making a Dynamic Route

Let's say we wanted to get a specific pet based on its ID. We want anyone to be able to retrieve a single resource by indicating the ID associated with the object they want to retrieve. In order to do this, we must add a dynamic portion to our URL.

Consider the following:

```js
app.get('/api/v1/pets/:id', (request, response) => {
  return response.json({
    id: request.params.id
  });
});
```

Take that for a spin with a bunch of different words where `:id` should go.

Some things to notice:

- `response.json` is just a short hand for setting the response type as `application/json`.
- It automatically serializes our object as JSON.


Here is the feature we want to implement: when a user requests a pet by its `id`, we want to return that pet's pet and id.

```js
app.get('/api/v1/pets/:id', (request, response) => {
  const { id } = request.params;
  const pet = app.locals.pets.find(pet => pet.id === id);

  return response.status(200).json(pet);
});
```

Let's go ahead and take this for a spin. It kind of works. If they give us the right `id`, they'll get the pet. But they don't get an error if they give us an invalid `id`. It would be preferable to send them a 404 status code, which let's the browser know that the resource was not found.

```js
app.get('/api/v1/pet/:id', (request, response) => {
  const { id } = request.params;
  const pet = app.locals.pets.find(pet => pet.id === id);
  if (pet) {
    return response.status(200).json(pet);
  } else {
    return response.sendStatus(404);
  }
});
```

### Sending Data With A Post Request

It would be cool if we could create pets in addition to just being able to retrieve the prepopulated ones.

You'll need the following line so that your app parses json by default.

```js
app.use(express.json());
```

This will add in support for parsing JSON.

Here is what my server looks like so far:

```js
const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pet Box';
app.locals.pets = [
  { id: 'a1', name: 'Rover', type: 'dog' },
  { id: 'b2', name: 'Marcus Aurelius', type: 'parakeet' },
  { id: 'c3', name: 'Craisins', type: 'cat' }
];

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/api/v1/pets', (request, response) => {
  const pets = app.locals.pets;

  response.json({ pets });
});

app.get('/api/v1/pets/:id', (request, response) => {
  const { id } = request.params;
  const pet = app.locals.pets.find(pet => pet.id === id);
  if (pet) {
    return response.status(200).json(pet);
  } else {
    return response.sendStatus(404);
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
```

### Creating a POST Route

We'll use our super secure method of generating random IDs:

```js
app.post('/api/v1/pets', (request, response) => {
  const id = Date.now();
  const { pet } = request.body;

  app.locals.pets.push(pet);

  response.status(201).json({ id, pet });
});
```

IMPORTANT NOTE: this approach has a few of flaws.

- We're storing data in memory, which will be wiped out when the server goes down.
- Using the current time is a terrible idea for a number of reasons. Most obviously, it's super easy to guess IDs and steal secrets.


#### The Sad Path

What happens if the user doesn't give us a pet parameter?

We should tell them that we got some bad data.

In our previous example, we simply stored a new pet object that we received from the client-side and sent it back as a successful response. When we successfully create a new record in a collection of application data, we can signal this success to our end-user by setting an [HTTP Status Code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). There are many different status codes to use in various situations. Upon a successful 'creation' you'll want to set the status code to `201` before sending back the response object.

Take a minute to look through some of the other available status codes that can be used. These are a quick way to determine what happened to our request when it was sent to the server, and are easily viewed in the 'Network' panel of your browser developer tools.

Status codes are especially important when handling errors for a request. Let's add some error handling to our previous example. We are going to assume that 'pet' is a required property when submitting a new pet, and we want to respond with an error if it's missing:

```js
app.post('/api/v1/pets', (request, response) => {
  const { pet } = request.body;
  const id = Date.now();

  if (!pet) {
    return response.status(422).send({
      error: 'No pet property provided'
    });
  } else {
    app.locals.pets.push({ id, pet });
    return response.status(201).json({ id, pet });
  }
})
```

If either property is missing, we will see an error in the Network tab of our developer tools where the response is highlighted in red and has a status of `422` (client error). The response details will tell us exactly which property we are missing based on the error pet we sent along with the 422 response.

It's important to handle errors and write descriptive error messages so that others can more easily debug their code and quickly fix whatever problem they are running into. Setting appropriate status codes and being as specific as possible with the response pet is the best way to write a user-friendly API.

### Using Postman
Postman is a super cool tool for sending requests to endpoints. You can use Postman to add, edit, or delete data if there isn't a UI to do so. In our case, it's handy to add pets, edit a specific pet, or delete a pet. Get familiar with Postman because it will be your best friend for all things API from here on out.

Things to consider:

* If you are including information in the body of the request, then one of the headers needs to include `Content-Type: application/json`
* Remember to check which HTTP method you are using before sending the request

### Student Exploration (10 mins)

* Implement a PUT route for a specific pet to edit the name of the pet
* Implement a DELETE route for a specific pet to remove it

**BONUS:**

Can you implement a GET route that shows only the pets that have been edited?

### Static Files in Express
To serve static files like an `index.html` file, you need to let Express know. To do this, tell Express what directory your static files live in with:

```js
app.use(express.static('public'));
```

This chains public to the root path. A good practice is to name this directory `public` if it contains public facing files such as HTML, CSS and JS.

We then send our response using the static asset Express middleware. That's it!

```js
app.get('/', (request, response) => {
  // response is actually handled by static asset express middleware
  // defined by app.use(express.static('public'));
});
```

Express assumes a structure for our static assets. The response for the root path, `'/'` or `localhost:3000/`, first goes to the root of the `public` directory and looks for a file called `index.html`.

So now you can add a directory called `public` and in that directory add a file called `index.html` with some basic HTML. Restart the server, head over to `localhost:3000`, and you should see your HTML file being served.

## Checks For Understanding

- In as much detail as possible, explain what Express is and why we use it.
- What would the CRUD endpoints be for a data structure that was an array of `todo` objects? Each `todo` object has an `id` and a `task` property.
- What do the 2xx level status codes represent? 4xx?

## Resources
- [Express.js](https://expressjs.com/)
- [Serving Static Assets](http://expressjs.com/en/starter/static-files.html)
- [HTTP Status Codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

### Extra Repository

- [Dino Express](https://github.com/Alex-Tideman/dino_express)
