---
title: Reintroduction ot Node.js
module: 4
---

In the past, we've used Node.js to build our client-side applications. We've even used it to spin up development servers to make it easier to develop our client-side applications. We've used Node.js as a tool, but we haven't written much for the platform itself. Luckily, given the fact that they both share some common technologies, we're already in possession of a bit of pre-requisite knowledge.

Here are some things we already know:

- JavaScript
- CommonJS module system (`require` and `module.exports`)
- npm
- `package.json`

## Your First Node.js Application

Let's make a new directory:

```js
mkdir node-example && cd node-example
```

Let's get a basic `package.json` up and running.

```js
npm init --yes
```

### Requiring Built-in Modules

Node has an intentionally small standard library. The standard library is documented in the [Node API Documentation][apidocs].

[apidocs]: http://nodejs.org/documentation/api/

The standard library can be required from any Node.js program. You do not have to give a relative path. To use the HTTP library, require it as follows:

``` js
const http = require('http');
```

### A Simple HTTP Server

Create a file `server.js`.

The built-in `http.Server` module inherits from `EventEmitter`.

```js
const http = require("http");

const server = http.createServer()

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': "text/plain" });
  response.write('Hello World');
  response.end();
});
```

When the server receives a request, a "request" event is emitted and the server responds with a simple HTTP response.

Try it in your terminal `node server.js`

In traditional web servers, a new thread is created every time a request is received. The program exits after the request is sent. In Node, your server runs on a single thread that waits for requests. This means that we can store data in variables and this state will persist between requests. Let's modify our server to take advantage of this:

```js
const http = require("http");

const server = http.createServer()

server.listen(3000, 'localhost');

let counter = 0;

server.on('request', (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World\n");
  response.write(`This is Request #${++counter}.`);
  response.end();
});
```

We can use `curl` to test the server.

```sh
curl http://localhost:3000/
```

Our server should respond with the following:

```sh
Hello World
This is Request #1.
```

The request number will increment upon further requests. If you use a web browser, you'll notice that the request number might increment by 2 each time you make a request on the server. This is because some browsers make a request for a favicon each time as well.

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

```js
app.post('/api/secrets', (request, response) => {
  const id = Date.now();
  const { message } = request.body;

  if (!message) {
    return response.status(422).send({
      error: 'No message property provided'
    });
  }

  app.locals.secrets[id] = message;

  response.json({ id, message });
});
```

It would also be nice if we used the correct status code on the successful response.

```js
response.status(201).json({ id, message });
```

### Generating Unique Keys

At this moment, we're using a key-value store that we whipped up to hold our data. That said, we're going to need some unique keys. We could use something like the current date, but there is a tiny, tiny chance that we could get two requests at the exact same millisecond. I'm personally not willing to risk it.

There are many ways we could create a random hash. We could take the body of our data along with the current time and do an MD5 hash. For now, let's do the simplest possible thing. We'll generate some random bytes with Node's built-in `crypto` module and then hash those.

This seems like something we could break out into a little helper module.

```
mkdir lib
touch lib/generate-id.js
```

In `lib/generate-id.js`, we'll add the following:

```js
const crypto = require('crypto');

module.exports = () => {
  return crypto.randomBytes(10).toString('hex');
};
```

Now, we can require our little helper in `server.js`.

```js
const generateId = require('./lib/generate-id');
```

Let's replace `Date.now()` in our `POST` action.

```js
app.post('/api/secrets', (request, response) => {
  const id = generateId();
  const { message } = request.body;

  if (!message) {
    return response.status(422).send({
      error: 'No message property provided'
    });
  }

  app.locals.secrets[id] = message;

  response.json({ id, message });
});
```

### Further Exploration

Read through [this simple chat application](https://github.com/turingschool-examples/chat-box-webpack/) from Module 2.

- How would implement `PUT` and `DESTROY` actions in this application?
- How was testing the endpoints handled?

We'll look more into all of this tomorrow.
