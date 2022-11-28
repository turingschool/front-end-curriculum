---
title: "Introduction to Node.js"
length: 2 hours
module: 4
---

### Goals

By the end of this tutorial, you will:

* Know what a server is and how requests and responses are handled using the Node HTTP library
* Understand how the client and server relationship works
* Know which appropriate RESTful method to send in a request
* Understand a little more about the language and terminology of back-end developers

## HTTP, REST and Building a Simple Node Server

Even as a front-end developer, it's important to have a basic understanding of what's going on behind the scenes in the back-end. You'll often be working with back-end developers on your team that will have a huge effect on how your application interacts with its data. The better you understand the back-end, the more prepared you'll be to build an application on top of it.

### The Server
A server is simply a computer or program that handles sending, retrieving, and manipulating resources for a client. There are many different types of servers, but when we build web applications, we're most concerned with what's called a **Web Server** or an **HTTP Server**. You'll often hear these two terms used interchangeably or simply shortened to "server".

An **HTTP Server** handles any network requests by providing responses that can be HTML pages, files, data, etc. For example, when we navigate to [https://www.turing.edu/](https://www.turing.edu/) in our browser (**Web Client**), we are really making a request to an HTTP server. The server is then responding with all of the HTML needed to render the page. We can even visually see this by looking in the **Network** tab of our developer tools:

Open the Network tab, navigate to `https://www.turing.edu/`, and you can see the requests and responses.

![network requests][network-requests]

The Network tab will list any requests you make to a server. If we search for `www.turing.edu`, in the top left of the network panel, we can see that the type of request we made was for a `document`. Select that request, and you can also see detailed information about the request itself, as well as the response that was given.

Click on the **Response** tab, and you'll see the entire markup of the HTML document we requested:

![network response][network-response]

[network-requests]: /assets/images/lessons/backend-primer/network-requests.png
[network-response]: /assets/images/lessons/backend-primer/network-response.png

#### Making Requests to the Server
Our applications will request HTML documents, CSS files, images, and data. The way each of these requests are made is quite different:

* Typing a URL like `https://www.turing.edu` into the browser makes a request for an HTML document
* Including a link tag to request an external stylesheet: `<link href="https://www.turing.edu/css/styles.css" />`
* Adding an image element to display a logo: `<img src="https://www.turing.edu/images/logo.png" />`.
* Making a fetch request to retrieve data: `fetch('https://www.turing.edu/api/v1/curriculum/')`

While the syntax for each of these requests looks significantly different, they all share one thing in common: *Every request we make to an HTTP Server requires a URL.*

![url-pic](https://www.normshield.com/wp-content/uploads/2017/05/example.png)

When fetching data, you'll often hear the URL referred to as an "endpoint". These endpoints (e.g. `https://www.turing.edu/api/v1/curriculum/`) are created by the back-end developers on a team to help the front-end developers access and interact with application data. Just like the front-end, there are many frameworks and libraries that back-end developers will use to to set up a proper HTTP Server with all the necessary endpoints.

*Note on HTTP: It is simply the protocol for transmitting documents across the internet. There are a bunch more (SSH, POP,FTP...) but we will focus on HTTP since it's primarily used for communication between web browsers and web servers. Hypertext is just structured text that uses links (hyperlinks) between other nodes of structured text. The key to HTTP is that it is stateless, the server doesn’t save data between requests.*


### Some Introspection
Take 10 minutes to think about API endpoints that you've used before. How were they structured? Did you have to use different HTTP methods? Write down some URLs that you had to use to make API requests.

### Back-End Frameworks
Unlike the front-end, where the main language used is JavaScript, the back-end can be built in PHP, Python, Ruby, etc. Developers have built frameworks for building back-ends with each of these languages (CakePHP, Django, Ruby on Rails, etc.). So while deciding on a front-end JavaScript framework is more about preference and opinion, your choices for a back-end framework are often limited to the language you choose to write. Whatever language and framework is chosen for the back-end of an application should have little effect on the front-end, as the only interface for communication between the two is requests and responses through URLs.

For the following lessons, we'll focus on using [node](https://nodejs.org/en/){:target="_blank"} and [express](http://expressjs.com/){:target="_blank"} for building a back-end. We will use Node today to create a simple HTTP server with several endpoints.

#### NodeJS
What are the benefits/disadvantages of using Node versus other server technologies?

Awesomeness of Node includes:

* Everything in JS - you don't have to learn a new language! (even though that's not a bad thing)
* Fast, non-blocking code
* Supports real-time communications with sockets (run on TCP instead of HTTP)
* Not multi-threaded (good for memory)

Disadvantages of Node:

* Lack of libraries (very new ORM package, image processing)
* Frequent changes to Node API
* Gotta deal with async
* Not multi-threaded (bad for computations)

In the past, we've used Node.js to build our client-side applications (think Webpack). We've even used it to spin up development servers to make it easier to develop our client-side applications. We've used Node.js as a tool for development, but we haven't written much for the platform itself. Luckily, given the fact that they both share some common technologies, we're already in possession of a bit of pre-requisite knowledge.

Here are some things we already know:

- JavaScript
- CommonJS module system (`require` and `module.exports`)
- npm
- `package.json`

### Review: The Request-Response Cycle

On your own, draw a diagram of the request-response cycle as you know it. Include the a client, a server, and how they communicate between each other. After a few minutes, we'll go over it.

### Request-Response Cycle: Some Basics

Here is what a sample GET request looks like to a server:

```
GET / HTTP/1.1
Host: www.google.com
```

When you request to visit `www.google.com`, your browser forms a request to Google's server that asks for the HTML associated with the root-level page (`/`).

And this is a sample response that Google's server generates to send back to the browser (client):

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1354

<html>
<body>
  .
  .
  .
</body>
</html>
```

If we break down the response, we can see that the server is sending back:

* This information is sent using the HTTP version 1.1 protocol
* The `200 OK` refers to the status of the response - in this case it was successful
* Following the status is header information. This sample is a very limited number of the headers typically seen in a response, but headers are just more information about the response. Then the body of the response contains the HTML content of the page, which the browser parses and shows in the browser window.

## Practice: Handling Requests in Node.js

We're going to set up a simple Node server for handling a dataset of messages. Each message object contains a `user` and a `message` property. You might have worked with the Express framework on the server-side, which has a lot of very helpful functions for getting a server up and running. Today, we will just be using the Node HTTP library to remind ourselves that life is sometimes harder without frameworks - it will also give us an idea of the low-level programming that a server needs to handle requests.

If you don't already have [Postman](https://www.getpostman.com/){:target="_blank"}, install it now. Postman is a tool we can use to generate requests (GET, POST, PATCH, etc.) that we would otherwise not be able to do through the browser alone.

Nodemon will also be helpful. Nodemon is an npm package that will auto-reload your server any time you make changes so you can see them take effect immediately. Without nodemon, you would have to restart your server every time you made a change to your code. Install nodemon globally with:

```bash
npm i -g nodemon
```

Next, create and cd into a new directory:

```bash
mkdir messages && cd messages
```

Auto-generate a `package.json` file (with default "yes" to each of the standard questions) using:

```bash
npm init --yes
```

### Require Built-In Modules

Node has an intentionally small standard library. The standard library is documented in the [Node API Documentation][apidocs]{:target="_blank"}.

[apidocs]: http://nodejs.org/documentation/api/

The standard library modules can be required from any Node program. You do not have to give a relative path of where the module lives on your local machine - all you need to do is require the module using the CommonJS `require` syntax.

Include the HTTP and URL libraries:

``` js
const http = require('http');
const url = require('url');
```

### A Simple HTTP Server

Create a new file called `server.js`, and in that file, require in the libraries we need:

```js
const http = require("http");
const url = require('url');
const server = http.createServer();
```

The built-in `http.createServer` module inherits from `EventEmitter`. This means when we create our server, it can listen and respond to particular events, such as requests from a client:

```js
server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World\n');
  response.end();
});
```

Before we run the server and see it in action, take a few minutes to read through the documentation to know more about each of the response functions.

Read through these sections of the Node documentation:

- [response.writeHead](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers){:target="_blank"}
- [response.write](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback){:target="_blank"}
- [response.end](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback){:target="_blank"}

Can you describe in one or two sentences what each of these methods do?

### Run Your Server

When the server receives a request from a client, a "request" event is emitted, and the server responds with a simple HTTP response.

Now run your server in your terminal with: `nodemon server.js`. Using Postman, make a GET request to `localhost:3000` and see what happens. You should see a 'Hello World' response returned.

[Here is a video](https://www.youtube.com/watch?v=ptvV_Fc3hd8&list=PLM-7VG-sgbtCJYpjQfmLCcJZ6Yd74oytQ){:target="_blank"} about the basics of using Postman to make requests.

### The Inner Workings of the Request and Response

#### Headers

The headers of a request or response allow the client and the server to pass additional information about the request/response to each other. Think of headers as metadata that allow a client or server to handle the request/response properly.

Headers are information as simple as a hash of key-value pairs: `{ "Content-Type": "text-html" }`

There is a lot of header metadata that you can pass in a request. A common header is `Accept`, which allows you to set what media types are acceptable. Example Accept header in a request would be:

```
 Accept: application/json

 This should be interpreted as "When you send me a response, I prefer the response to be formatted using JSON."
```

Another common header is "Content-Length". This indicates the length of the body, and it's measured in bytes - a good way to know quickly how big a request is.

If we look at a response in our browser, we can check out the headers:
![network header][network-header]

[network-header]: /assets/images/lessons/http-rest-node-server/network-header.png

There is a lot of information in the headers, but the one of the most important parts is the status code returned to the client. This tells us what happened to our request. Check out [https://www.w3.org](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) to see all of the status codes for HTTP 1.1, but the general rules are:

* 200 range means everything is OK, the request was successful
* 300 range means you are probably being redirected
* 400 range means you sent a bad request. Do it again, but better
* 500 range means that something is screwed up with the server (thanks back-end...) but my request is OK

#### Body

Requests and responses also might have a body. For example, when you make a `PATCH` request to update a resource, your `fetch` call might look like this:

```js
fetch('/api/v1/books', {
  method: 'PATCH',
  body: JSON.stringify({
    'title': 'The Gene: An Intimate History',
    'author': 'Siddhartha Mukherjee'
  })
});
```

This is an example of sending a body with your request so that the server can parse the data in it and update a resource based on the resulting body object. When the resource is successfully updated, the server will send a response with a status code of `200`, and usually a body object that contains the entire resource, reflecting the new changes that were just made:

```js
// response body
{
  'title': 'The Gene: An Intimate History',
  'author': 'Siddhartha Mukherjee',
  'isbn': '978-1476733524',
  'published': '2015'
}
```

## RESTful API design

REST stands for representational state transfer. This means that web resources communicate using a set of stateless, uniform operations.

The six architectural constraints of REST are:

1. Client-server - Separation of GUI and data
2. Stateless - No client context is stored by server, each client request provides all the information to fulfill the request.
3. Cacheable - Server responses are defined as cacheable or not. (Speeds up future interactions)
4. Layered system - Modularity, each 'layer' serves only a single high-level purpose - multiple servers can handle steps of a request (data/authentication), but the user cannot tell that their request/response went through multiple servers
5. Code on demand - (i.e. instead of just JSON or XML, return JS script tag within HTML document) - optional feature; can still be considered RESTful without this
6. Uniform interface - Ability to identify resources and manipulate them based on standard information provided 

RESTful architecture includes sending HTTP methods to a URL to get back information from a request. This is the implementation of that 'uniform interface' constraint. The primary methods, which are often called CRUD methods (Create, Read, Update, and Destroy) are as follows:

1. GET - Retrieve resource information identified by the request
2. POST - Create a new resource
3. PUT - Fully update a specific resource in its entirety
4. PATCH - Update only a portion of a specific resource
5. DELETE - Destroy an entire specific resource by the request

### Practice: Handling Multiple Requests in Node.js

Right now, our server responds with `Hello World` no matter what request we make. Let's make our server a bit more useful. First, we'll want to set up some initial messages in our server file to interact with:

```js
let messages = [
  { 'id': 1, 'user': 'brittany storoz', 'message': 'hi there!' },
  { 'id': 2, 'user': 'bob loblaw', 'message': 'check out my law blog' },
  { 'id': 3, 'user': 'lorem ipsum', 'message': 'dolor set amet' }
];
```

And we'll edit our request handler to handle the RESTful HTTP methods: GET and POST.

```js
server.on('request', (request, response) => {
  if (request.method === 'GET') {
    getAllMessages(response);
  }

  else if (request.method === 'POST') {
    let newMessage = { 'id': new Date() };

    request.on('data', (data) => {
      newMessage = Object.assign(newMessage, JSON.parse(data));
    });

    request.on('end', () => {
      addMessage(newMessage, response);
    });
  }
});
```

We can see now that the `request` object contains information about the request made by the client. We can access the request method using `request.method`.

### On Your Own

Given the new functions we're calling (`getAllMessages` and `addMessage`), create these functions and have them send an appropriate response back to the client.

The response for a GET request to `localhost:3000/` should be: 

```js
[
  { 'id': 1, 'user': 'brittany storoz', 'message': 'hi there!' },
  { 'id': 2, 'user': 'bob loblaw', 'message': 'check out my law blog' },
  { 'id': 3, 'user': 'lorem ipsum', 'message': 'dolor set amet' }
]
```

For the POST request, an example request would be: 

```bash
POST to localhost:3000/
```

And the response for this POST request should be something like:

```js
{ 'id': 4, 'user': 'alex trebek', 'message': 'answer in the form of a question' } // with a response status code of 201
```

### Check For Understanding - Research on Your Own

* What type of information is included in the header of a request?
* What are the major RESTful methods and what do each of them do?
* What is Node?

## Resources

* [Anatomy of a URL](http://www.domainsherpa.com/anatomy-of-a-domain-name-and-url/)
* [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [HTTP Status Codes](http://www.restapitutorial.com/httpstatuscodes.html)
* [Node.js Event Loop](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)

### Instructor Resources

* [Completed Server Example](https://github.com/turingschool/front-end-keys/blob/master/module-4/lesson-plans/node.md)
