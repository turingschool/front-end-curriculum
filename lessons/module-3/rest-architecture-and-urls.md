---
title: "REST architecture and URLs"
length: 2 hours
module: 3
---

## Learning Goals

By the end of this lesson, you will:

* Know how to talk about the various parts of a url
* Know what CRUD is
* Know what an API is
* Know what REST is and what some alternatives are


## Vocab

* Static Asset
* Endpoint
* API
* CRUD
* REST

## The anatomy of a URL
Our applications will request HTML documents, CSS files, images, and data. The way each of these requests are made is quite different:

* Typing a URL like `https://www.turing.io` into the browser makes a request for an HTML document
* Including a link tag to request an external stylesheet: `<link href="https://www.turing.io/css/styles.css" />`
* Adding an image element to display a logo: `<img src="https://www.turing.io/images/logo.png" />`.
* Making a fetch request to retrieve data: `fetch('https://www.turing.io/api/v1/users')`

While the syntax for each of these requests looks significantly different, they all share one thing in common: *Every request we make to an HTTP Server requires a URL.*

In the first 3 requests we're fetching a static asset, whereas the last one is requesting data from an api endpoint.

![url-pic](https://www.normshield.com/wp-content/uploads/2017/05/example.png)

When fetching data, you'll often hear the URL referred to as an "endpoint". These endpoints (e.g. `https://www.turing.io/api/v1/users`) are created by the back-end developers on a team to help the front-end developers access and interact with application data. Just like the front-end, there are many frameworks and libraries that back-end developers will use to to set up a proper HTTP Server with all the necessary endpoints.

Endpoints have two main components:
  1. HTTP method
  2. The url (sometimes shortened to only the path)

Therefore if you were to write documentation for the example endpoint above, you could do so in a few ways:
  1. GET `https://www.turing.io/api/v1/users` - the whole shabang
  2. GET `/api/v1/users` - just the path (assuming we know the domain)
  3. GET `users` - specific part of the path that changes (assuming we know the base url including the api structure info)

<section class="note">
### Note on HTTP

It is simply the protocol for transmitting documents across the internet. There are a bunch more (SSH, POP,FTP...) but we will focus on HTTP since it's primarily used for communication between web browsers and web servers. Hypertext is just structured text that uses links (hyperlinks) between other nodes of structured text. The key to HTTP is that it is stateless, the server doesn’t save data between requests.
</section>

### Some Introspection
Take 5 minutes to think about API endpoints that you've used before. How were they structured? Did you have to use different HTTP methods? Write down some URLs that you had to use to make API requests.

## RESTful API design

During your time as a frontend developer, you've already been hitting RESTful endpoints. What is REST exactly?

REST stands for representational state transfer. This means that web resources communicate using a set of stateless, uniform operations.

RESTful architecture includes sending HTTP methods to a URL to get back information from a request. The primary methods, which are often called CRUD methods (Create, Read, Update, and Destroy) are as follows:

1. GET - Retrieve resource information identified by the request
2. POST - Create a new resource
3. PUT - Fully update a specific resource in its entirety
4. PATCH - Update only a portion of a specific resource
5. DELETE - Destroy an entire specific resource by the request

Typically there are only 2 paths for a given resource when it comes to RESTFUL endpoints. For example, if we have an ideabox app. Those two paths would be:
  1. `/ideas` - used to generically identify the type of resource. Because we may not have an id yet or we want a collection.
  2. `/ideas/:id` - used to identify a specific resource of that type.

That's a lot of words, at a high level, REST is really just a pattern that matches CRUD operations to endpoints.

What RESTful api endpoint have you used in the past? How do you know they're RESTful?

### Some alternatives

* [SOAP](https://en.wikipedia.org/wiki/SOAP) or Simple Object Access Protocol was the standard for a long time before rest.
* [GraphQL](https://graphql.org/) is becoming more and more popular because you only get what you ask for in a request.

### Activity time!
With a partner, design an api that implements CRUD for sharks or puppies (based on the app we worked on yesterday). For each type of request - GET, POST, and DELETE - answer these questions:
  * What endpoints will you need? Write down the URLs.
  * What information do you need in the request?
  * What will you send back in the response? (i.e. What data? What response status?)  
HINT: Consider organizing your work in a table, like [this one](https://github.com/turingschool-examples/overlook-api). If you'd like, you can use [this template](https://docs.google.com/spreadsheets/d/1-aqqA510nihdYDIsOTbJX5tBq0e_mm0vE8yIVGCXrBk/edit?usp=sharing) to get started.
