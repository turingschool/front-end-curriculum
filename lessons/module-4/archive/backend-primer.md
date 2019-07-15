---
title: A Backend Primer
length: 60
tags: node, express, back-end, server
---

### Goals

By the end of this lesson, you will:

* Understand how you might work with back-end developers on your team
* Know what a server is and how requests and responses are handled
* Be able to build a simple HTTP server in node & express

## A Back-End Primer

Even as a front-end developer, it's important to have a basic understanding of what's going on behind the scenes in the back-end. You'll often be working with back-end developers on your team that will have a huge effect on how your application interacts with its data. The better you understand the back-end, the more prepared you'll be to build an application on top of it.

### The Server

There are many different types of servers, but when we are building web applications, we're most concerned with what's called a **Web Server** or an **HTTP Server**. You'll often hear these two terms used interchangeably, or simply shortened to "server".

An **HTTP Server** handles any network requests by providing responses that can be HTML pages, files, or data. For example, when we navigate to [https://www.turing.io/](https://www.turing.io/) in our browser, we are really making a request to an HTTP server. The server is then responding with all of the HTML needed to render the page. We can even visually see this by looking in the 'Network' tab of our developer tools:

![network requests][network-requests]

The network tab will list any requests you make to the server. If we search for `www.turing.io`, in the top left of the network panel, we can We see that the type of request we made was for a 'document'. If we click on this request, we can also see information about the request itself, as well as the response we were given. Clicking on the 'Response' tab, you'll see the entire markup of the HTML document we requested:

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

When fetching data, you'll often hear the URL referred to as an "endpoint". These endpoints (e.g. `https://www.turing.io/api/v1/curriculum/`) are created by the back-end developers on a team to help the front-end developers access and interact with the application data. Just like the front-end, there are many frameworks and libraries that back-end developers will use to to set up a proper HTTP Server with all the necessary endpoints.

### Back-End Frameworks

Unlike the front-end, where our main language is JavaScript, the back-end can be built in PHP, Python, Ruby, etc. Developers have built frameworks for building back-ends with each of these languages (CakePHP, Django, Ruby on Rails, etc.). So while deciding on a JavaScript framework is more about preference and opinion, your choices for a back-end framework are often limited to the language you choose to write. Whatever language and framework is chosen for the back-end of an application should have little effect on the front-end, as the only interface for communication between the two is requests and responses through URLs.

For the following lessons, we'll focus on using [node](https://nodejs.org/en/) and [express](http://expressjs.com/) for building a back-end. 