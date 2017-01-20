---
title: "Reintroduction to Node.js"
length: 2 hours
module: 4
---

### Goals

By the end of this lesson, you will:

* Understand how you might work with back-end developers on your team
* Understand how the client and server relationship works
* Know what a server is and how requests and responses are handled
* Know which appropriate RESTful method to send in a request

## HTTP, REST and Building a Simple Node Server

### Back-end Primer
Even as a front-end developer, it's important to have a basic understanding of what's going on behind the scenes in the back-end. You'll often be working with back-end developers on your team that will have a huge effect on how your application interacts with its data. The better you understand the back-end, the more prepared you'll be to build an application on top of it.

### The Server
There are many different types of servers, but when we are building web applications, we're most concerned with what's called a **Web Server** or an **HTTP Server**. You'll often hear these two terms used interchangeably, or simply shortened to "server".

An **HTTP Server** handles any network requests by providing responses that can be HTML pages, files, or data. For example, when we navigate to [https://www.turing.io/](https://www.turing.io/) in our browser (**Web Client**), we are really making a request to an HTTP server. The server is then responding with all of the HTML needed to render the page. We can even visually see this by looking in the 'Nework' tab of our developer tools:

![network requests][network-requests]

The network tab will list any requests you make to the server. If we search for 'www.turing.io', in the top left of the network panel, we can We see that the type of request we made was for a 'document'. If we click on this request, we can also see information about the request itself, as well as the response we were given. Clicking on the 'Response' tab, you'll see the entire markup of the HTML document we requested:

![network response][network-response]

[network-requests]: /assets/images/lessons/backend-primer/network-requests.png
[network-response]: /assets/images/lessons/backend-primer/network-response.png

#### Making Requests to the Server
Our applications will request HTML documents, CSS files, images, and data. The way each of these requests are made is quite different:

* Typing a URL like `https://www.turing.io` into the browser makes a request for an HTML document
* Including a link tag to request an external stylesheet: `<link href="https://www.turing.io/css/styles.css" />`
* Adding an image element to display a logo: `<img src="https://www.turing.io/images/logo.png" />`.
* Making an AJAX request to fetch data: `$.ajax({ url: "https://www.turing.io/api/v1/curriculum/", method: "GET" })`

While the syntax for each of these requests looks significantly different, they all share one thing in common: *Every request we make to an HTTP Server requires a URL.*

![url pic][url-pic]

[url-pic]: /assets/images/lessons/http-rest-node-server/url-pic.gif

When fetching data, you'll often hear the URL referred to as an "endpoint". These endpoints (e.g. `https://www.turing.io/api/v1/curriculum/`) are created by the back-end developers on a team to help the front-end developers access and interact with the application data. Just like the front-end, there are many frameworks and libraries that back-end developers will use to to set up a proper HTTP Server with all the necessary endpoints. We will look at a few backend choices later, but first let's talk about what they all share in common.

### Student Discussion (5 minutes)
In small groups, discuss what types of requests and responses you sent and received in your intermission homework. What did your client side code request? How did your server-side code respond to those requests? What kinds of data did you respond with and how was that data consumed?

#### Hypertext transfer protocol
The protocol for transmitting documents across the internet. There are a bunch more (SSH, POP,FTP...) but we will focus on HTTP since it's primarily used for communication between web browsers and web servers. Hypertext is just structured text that uses links (hyperlinks) between other nodes of structured text. The key to HTTP is that it is stateless, the server doesn’t save data between requests.

#### RESTful API design
* REST stands for representational state transfer. What this means is that web resources communicate using a set of uniform operations that are stateless (don't persist data between requests)

The six architectural constraints are:

1. Client-server - Separation of GUI and data
2. Stateless - No client context is stored by server, each client request  provides all the information to fulfill the request.
3. Cacheable - Server responses defined as cacheable or not. Speeds up future interacts.
4. Layered system
5. Code on demand (i.e. execute JS script in HTML)
6. Uniform interface

RESTful architecture includes sending HTTP methods to a URL to get back information from a request. Here are the primary methods, which are often called CRUD methods (Create, Read,Update,Destroy)

---
1. GET - Retrieve information identified by the request
2. POST - Create a new resource by the request
3. PUT - Update a specific resource by the request sending the full resource
4. PATCH - Update a specific resource by the request sending only the updated information of the resource
5. DELETE - Destroy a specific resource by the request

#### The Inner Workings of a Request and a Response
The header of a request or response allow the client and the server to pass
additional information to each other. Think of it as metadata that allows
a client or server to handle the request properly.

A header is simply a hash of key-value pairs:
`{"Content-Type": "text-html"}`

There is a lot of metadata that you can pass in a request. Some of the more common values are
 "Accept" which allows you to set what media types are acceptable and in what quality.
 Example:
 ```
 Accept: audio/*; q=0.2, audio/basic
 SHOULD be interpreted as "I prefer audio/basic, but send me any audio type if it is the best available after an 80% mark-down in quality."
```

Another common value is "Content-Length". This indicates the length in of the body if the request would have been sent in a GET method. It's measured in bytes. Good way to know quickly how big a request is.

If we look at a response in our browser, we can check out the headers:
![network header][network-header]

[network-header]: /assets/images/lessons/http-rest-node-server/network-header.png

There is a lot of information in the header, but most important part is the status code returned to us. This tells us what happened to our request. Check out [https://www.w3.org](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) to see all of the status codes for HTTP 1.1, but the general rule is:

* 200 range means everything is OK
* 300 range means you need to do more to complete the request
* 400 range means you sent a bad request. Do it again, but better
* 500 range means that something is screwed up with the server (thanks
backend...) but my request is OK

#### Misc. other useful concepts

#### IP address
An IP address is the identification of a host or network interface and allows us to find the address of a location of another host or network interface.  The current protocol for IPs is IPv4, which is still in use today using a 32-bit system. But lots of people use the internet and we are running out of IP addresses. Enter IPv6, which is slowly being phased in:

![32 ip][32-ip]
![128 ip][128-ip]

[32-ip]: /assets/images/lessons/http-rest-node-server/32-ip.png
[128-ip]: /assets/images/lessons/http-rest-node-server/128-ip.png


#### Domain Name System
Since humans aren't computers, we need human-readable forms (domains) to remember URLs. We use a Domain Name System to map IP addresses to domain names. DNS servers contain massive databases of these mappings, and different organizations own the DNS based on the domain. You OS caches domains that you visit, so next time you go to the same URL, it doesn't have to go looking for it in a DNS. DNS servers are often selected by configuration settings sent by your Internet service provider (ISP), WiFi network, modem or router that assigns your computer's network address.

### Back-End Frameworks
Unlike the front-end, where our main language is JavaScript, the back-end can be built in PHP, Python, Ruby, etc. Developers have built frameworks for building back-ends with each of these languages (CakePHP, Django, Ruby on Rails, etc.). So while deciding on a JavaScript framework is more about preference and opinion, your choices for a back-end framework are often limited to the language you choose to write. Whatever language and framework is chosen for the back-end of an application should have little effect on the front-end, as the only interface for communication between the two is requests and responses through URLs.

For the following lessons, we'll focus on using [node](https://nodejs.org/en/) and [express](http://expressjs.com/) for building a back-end. We will use Node today to create a simple HTTP server with several endpoints.

### Student Discussion (5 minutes)
Grab a partner and discuss what it was like to write server-side code. What was unfamiliar to you? Where there any limitations in debugging tools that you are used to using and how did that effect your ability to solve problems?

#### NodeJS
What are the benefits/disadvantages of using Node versus other server technologies?

![node server][node-server]

![node event loop][node-event-loop]

[node-server]: /assets/images/lessons/http-rest-node-server/node-server.png
[node-event-loop]: /assets/images/lessons/http-rest-node-server/node-event-loop.png

Awesomeness of Node includes:

* Everything in JS
* Fast, non-blocking code. Wait for your slow operations (file system, database I/O operations)
* Real-time communications with sockets (run on TCP instead of HTTP)
* Not multi-threaded (good for memory)

Disadvantages of Node:

* Lack of libraries (No ORM, image processing)
* Frequent changes to Node API
* Gotta deal with async
* Not multi-threaded (bad for computations)

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
  response.writeHead(200, { 'Content-Type': 'text/plain' });
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
  response.writeHead(200, { "Content-Type": 'text/plain' });
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

### Check For Understanding

* What type of information is included in the header of a request?
* What are the major RESTful methods and what do each of them do?
* What is Node?
