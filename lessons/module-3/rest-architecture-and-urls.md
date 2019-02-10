---
title: "Rest architecture and Urls"
length: 2 hours
module: 3
---

### Goals

By the end of this lesson, you will:

* Know how to talk about the various parts of a url
* Know what CRUD is
* Know what REST is and what some alternatives are
* Understand a little more about the language and terminology of back-end developers

### Vocab

* Static Asset
* Endpoint
* CRUD
* REST

## The anatomy of a URL
Our applications will request HTML documents, CSS files, images, and data. The way each of these requests are made is quite different:

* Typing a URL like `https://www.turing.io` into the browser makes a request for an HTML document
* Including a link tag to request an external stylesheet: `<link href="https://www.turing.io/css/styles.css" />`
* Adding an image element to display a logo: `<img src="https://www.turing.io/images/logo.png" />`.
* Making a fetch request to retrieve data: `fetch('https://www.turing.io/api/v1/users')`

While the syntax for each of these requests looks significantly different, they all share one thing in common: *Every request we make to an HTTP Server requires a URL.*

The first 3 requests were fetching a static asset, whereas the last one is requesting data from an api endpoint.

![url-pic](https://www.normshield.com/wp-content/uploads/2017/05/example.png)

When fetching data, you'll often hear the URL referred to as an "endpoint". These endpoints (e.g. `https://www.turing.io/api/v1/users`) are created by the back-end developers on a team to help the front-end developers access and interact with application data. Just like the front-end, there are many frameworks and libraries that back-end developers will use to to set up a proper HTTP Server with all the necessary endpoints.

Endpoints have two main components:
  1. HTTP method
  2. The url (sometimes shortened to only the path)

Therefore if you were to write documentation for the example endpoint above, you could do so in a few ways:
  1. GET `https://www.turing.io/api/v1/users` - the whole shabang
  2. GET `/api/v1/users` - just the path (assuming we know the base url)
  3. GET `users` - specific part of the path that changes (assuming we know the base url including the api structure info)

*Note on HTTP: It is simply the protocol for transmitting documents across the internet. There are a bunch more (SSH, POP,FTP...) but we will focus on HTTP since it's primarily used for communication between web browsers and web servers. Hypertext is just structured text that uses links (hyperlinks) between other nodes of structured text. The key to HTTP is that it is stateless, the server doesn’t save data between requests.*


### Some Introspection
Take 5 minutes to think about API endpoints that you've used before. How were they structured? Did you have to use different HTTP methods? Write down some URLs that you had to use to make API requests.

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

Typically there are only 2 paths for RESTFUL endpoints. For example, if we have an ideabox app. Those two paths would be:
  1. `/ideas` - used to generically identify the type of resource. Because we may not have an id yet or we want a collection. 
  2. `/ideas/:id` - used to identify a specific resource of that type.

### Some alternatives

* [SOAP](https://en.wikipedia.org/wiki/SOAP) or Simple Object Access Protocol was the standard for a long time before rest.
* [GraphQL](https://graphql.org/) is becoming more and more popular because you only get what you ask for in a request.

### Activity time!
With a partner, design an api that implements CRUD for sharks, puppies, OR unicorns.
  * What enpoints will you need?
  * For each endpoint:
    * What information do you need in the request?
    * What will you send back in the response?
  
