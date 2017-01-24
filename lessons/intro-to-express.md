---
title: "Fundamentals of Express and HTTP Methods"
length: 2 hours
tags: node, express, back-end, server, http
---

### Pre-reqs

* Download Postman from Chrome

### Goals

By the end of this lesson, you will:

* Understand when and why to use Express.js in the back-end of an application
* Know how Express.js abstracts difficult server-side logic and makes it easier to write endpoints
* Create a simple Express app that implements all of the basic CRUD methods

An example repository of the completed example can be found [here](https://github.com/turingschool-examples/secret-box).

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

## Getting Started with Express

Let's also go ahead and install some dependencies that we'll need to get things rolling.

```
npm i express --save
```

We'll get a basic server running using some code I stole from [the Express documentation](http://expressjs.com/starter/hello-world.html) and modified slightly to fit my tastes.

```js
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Secret Box';

app.get('/', (request, response) => {
  response.send('It\'s a secret to everyone.');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
```

Fire up the server using `node server.js` and visit `http://localhost:3000/` to enjoy in the fruits of your copy and pasting labor.

### Making a Dynamic Route

When we go to view a tweet or a user, we do something special with the URL to identify which tweet or user. We specify it in the URL itself. URLs—after all—stand for universal resource locator.

Consider the following:

```js
app.get('/api/secrets/:id', (request, response) => {
  response.json({
    id: request.params.id
  });
});
```

Take that for a spin with a bunch of different words where `:id` should go.

Some things to notice:

- `response.json` is just a short hand for setting the response type as `application/json`.
- It automatically serializes our object as JSON.

### Storing Secrets

In addition, let's add some data structure for keeping track of some kind of arbitrary data.

```js
app.locals.secrets = {};
```

Let's put some fake data in for now.

```js
app.locals.secrets = {
  wowowow: 'I am a banana'
};
```

Here is the feature we want to implement: when a user has the correct secret, we want to show them message associated with that `id`.

```js
app.get('/api/secrets/:id', (request, response) => {
  const { id } = request.params;
  const message = app.locals.secrets[id];
  response.json({ id, message });
});
```

Let's go ahead and take this for a spin. It kind of works. If they give us the right `id`, they'll get the message. But they don't get an error if they give us an invalid `id`. It would be preferable to send them a 404 status code, which let's the browser now that the resource was not found.

```js
app.get('/api/secrets/:id', (request, response) => {
  const { id } = request.params;
  const message = app.locals.secrets[id];

  if (!message) { return response.sendStatus(404); }

  response.json({ id, message });
});
```

### Sending Data With Our Post Request

It would be cool if we could store secrets in addition to just being able to retreive the prepopulated ones.

Express did this thing a while back, where they took a bunch of stuff out of the core framework. This makes it smaller and means you don't have cruft you're not using, but it also means that sometimes you have to mix those things back in. One of those components that was pulled out was the ability to parse the body of an HTTP request. That's okay, we can just mix it back in.

```
npm i body-parser --save
```

We'll also need to require and use it in our `server.js`.

```js
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

This will add in support for parsing JSON as well as HTML forms. If you only need one of those, you can go ahead and remove the other. (We're only going to use JSON, but I am leaving it here for reference.)

Here is what my server looks like so far.

```js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Secret Box';
app.locals.secrets = {
  wowowow: 'I am a banana'
};

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/api/secrets', (request, response) => {
  const secrets = app.locals.secrets

  response.json({ secrets });
});


app.get('/api/secrets/:id', (request, response) => {
  const { id } = request.params;
  const message = app.locals.secrets[id]

  if (!message) { return response.sendStatus(404); }

  response.json({ id, message });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
```

### Creating a POST Route

We'll use our super secure method of generating random IDs.

```js
app.post('/api/secrets', (request, response) => {
  const id = Date.now();
  const { message } = request.body;

  app.locals.secrets[id] = message;

  response.json({ id, message });
});
```

This approach has a bunch of flaws:

- We're storing data in memory, which will be wiped out when the server goes down.
- Using the current time is a terrible idea for a number of reasons. Most obviously, it's super easy to guess IDs and steal secrets.

#### The Unhappy Path

What happens if the user doesn't give us a message parameter?

We should tell them that we got some bad data.

In our previous example, we simply stored a new message object that we received from the client-side and sent it back as a successful response. When we successfully create a new record in a collection of application data, we can signal this success to our end-user by setting an [HTTP Status Code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). There are many different status codes to use in various situations. Upon a successful 'creation' you'll want to set the status code to `201` before sending back the response object.

Take a minute to look through some of the other available status codes that can be used. These are a quick way to determine what happened to our request when it was sent to the server, and are easily viewed in the 'Network' panel of your browser developer tools.

Status codes are especially important when handling errors for a request. Let's add some error handling to our previous example. We are going to assume that 'message' is a required property when submitting a new message, and we want to respond with an error if it's missing:

```js
app.post('/api/secrets', (request, response) => {
  const { message } = request.body;
  const id = Date.now();

  if (!message) {
    return response.status(422).send({
      error: 'No message property provided'
    });
  }

  app.locals.secrets[id] = message;

  response.json({ id, message });
});
```

If either property is missing, we will see an error in the Network tab of our developer tools where the response is highlighted in red and has a status of `422` (client error). The response details will tell us exactly which property we are missing based on the error message we sent along with the 422 response.

It's important to handle errors and write descriptive error messages so that others can more easily debug their code and quickly fix whatever problem they are running into. Setting appropriate status codes and being as specific as possible with the response message is the best way to write a user-friendly API.


It would also be nice if we used the correct status code on the successful response.

```js
response.status(201).json({ id, message });
```

### Generating Unique Keys

At this moment, we're using a key-value store that we whipped up to hold our data. That said, we're going to need some unique keys. We could use something like the current date, but there is a tiny, tiny chance that we could get two requests at the exact same millisecond. I'm personally not willing to risk it.

For the time being, we'll use an MD5 hash, which is a unique value based on the content of the message. You've seen them in Github gists among other places.

```
npm i md5 --save
```

Now, in our `server.js`, we can require the module.

```js
const md5 = require('md5');
```

Finally, let's replace `Date.now()` in our `POST` action.

```js
app.post('/api/secrets', (request, response) => {
  const { message } = request.body;
  const id = md5(message);

  if (!message) {
    return response.status(422).send({
      error: 'No message property provided'
    });
  }

  app.locals.secrets[id] = message;

  response.status(201).json({ id, message });
});
```

### Using Postman
Postman is a super cool tool for sending requests to endpoints. You can use Postman to add, edit or delete data if there isn't a UI to do so. In our case, it's handy to add secrets, edit a specific secret, or delete a secret. Get familiar with Postman because it will be your best friend for all things API from here on out.

Things to consider:

Header needs to include Content-Type: application/x-www-form-urlencoded
Remember to check which HTTP method you are using before sending the request.

### Student Exploration (20 mins)

* Implement a PUT route for a specific secret to edit the message of the secret.
* Implement a DELETE route for a specific secret to remove it.

BONUS:

Can you implement a GET route that shows only the secrets that have been edited?

### Testing in Express

Mocha and Chai are two of the more popular testing frameworks to use with Express, so let's go ahead and install those.

`npm i --save-dev mocha chai chai-http`

Next let's setup our testing directory:

```js
mkdir test
touch test/routes.spec.js
```

In the testing file we need some setup as well:

```js
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);

describe('API Routes', function() {

});
```

Now for our first test to the secrets endpoint:

```js
describe('GET /api/secrets', function() {
  it('should return all secrets', function(done) {
    chai.request(server)
    .get('/api/secrets')
    .end(function(err, res) {
    res.should.have.status(200);
    res.should.be.json; // jshint ignore:line
    res.body.should.be.a('object');
    res.body[0].should.have.property('wowow');
    done();
    });
  });
});
```


Then go ahead and run mocha in your terminal to run the test suit and see what errors you get.

## Resources
- [Express.js](https://expressjs.com/)
- [HTTP Status Codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [Testing with Mocha and Chai](http://mherman.org/blog/2016/04/28/test-driven-development-with-node/#.WIdxcbYrLVo)

### Extra Repository

* [Dino Express](git@github.com:Alex-Tideman/dino_express.git)
