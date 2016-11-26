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
app.locals.secrets = {};

app.get('/', (request, response) => {
  response.send('It\'s a secret to everyone.');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
```

