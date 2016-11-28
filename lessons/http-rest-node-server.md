---
title: HTTP, REST and Building a Simple Node Server
length: 3 hours
tags: HTTP, CRUD, REST, node, express, back-end, server, internet
---
### Pre-reqs

* Download Postman from Chrome

### Goals

By the end of this lesson, you will:

* Understand how you might work with back-end developers on your team
* Understand how the client and server relationship works
* Know what a server is and how requests and responses are handled
* Know which appropriate RESTful method to send in a request
* Use Express to create a simple web server that can make and receive HTTP request and responds with JSON and store them in a database


## HTTP, REST and Building a Simple Node Server

### Back-end Primer
Even as a front-end developer, it's important to have a basic understanding of what's going on behind the scenes in the back-end. You'll often be working with back-end developers on your team that will have a huge effect on how your application interacts with its data. The better you understand the back-end, the more prepared you'll be to build an application on top of it.

### How the Interwebs Work
Lots of cats and dogs running around doing adorable things and making everyone happy.
![corgi chillin][corgi-chillin]

[corgi-chillin]: /assets/images/lessons/http-rest-node-server/corgi-chillin.jpg

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
3. PUT - Update a specific resource by the request
4. DELETE - Destroy a specific resource by the request

#### The Inner Workings of a Request and a Response
The header of a request or response allow the client and the server to pass
additional information to each other. Think of it as metadata that allows
a client or server to handle the request properly.

A header is simply a hash of key-value pairs:
`{"Content-Type": "text-html"}`

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

DNS
Ports


### Back-End Frameworks
Unlike the front-end, where our main language is JavaScript, the back-end can be built in PHP, Python, Ruby, etc. Developers have built frameworks for building back-ends with each of these languages (CakePHP, Django, Ruby on Rails, etc.). So while deciding on a JavaScript framework is more about preference and opinion, your choices for a back-end framework are often limited to the language you choose to write. Whatever language and framework is chosen for the back-end of an application should have little effect on the front-end, as the only interface for communication between the two is requests and responses through URLs.

For the following lessons, we'll focus on using [node](https://nodejs.org/en/) and [express](http://expressjs.com/) for building a back-end. We will use Node today to create a simple HTTP server with several endpoints.

#### NodeJS
What are the benefits/disadvantages of using Node versus other server technologies?

![node server][node-server]

![node event loop][node-event-loop]

[node-server]: /assets/images/lessons/http-rest-node-server/node-server.png
[node-event-loop]: /assets/images/lessons/http-rest-node-server/node-event-loop.png


#### Pair Practice
[Clone this repo](https://github.com/Alex-Tideman/dino_express)

 The first part of this paired practice will be to create a json dinosaur file and get the contents of all the dinosaurs or of a specific dinosaur.

 The second part will be including all CRUD methods, adding a MongoDB to store data and using Postman to execute HTTP requests to the API.

1. Create an index.html page and a GET route to it
Show implementation

2. Add three other routes that are nested under dinosaur
Show implementation

3. Add MongoDB and use Postman to send CRUD requests
Show implementation

	`$ brew update
	//Get mongo DB
	$ brew install mongodb
	$ sudo mongod`


![postman download][postman-download]

![postman request][postman-request]

[postman-download]: /assets/images/lessons/http-rest-node-server/postman-download.png
[postman-request]: /assets/images/lessons/http-rest-node-server/postman-request.png


### Slides

* [Link to optional slides]()

### Repository

* [Dino Express](git@github.com:Alex-Tideman/dino_express.git)
