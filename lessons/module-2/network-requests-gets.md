---
title: "Network Requests: GETs"
length: 180 minutes
tags: javascript, browser, network requests, fetch, ajax, xhr
---

### Learning Goals

* Understand the difference between synchronous and asynchronous operations
* Be familiar with the fetch API
* Understand how network requests work
* Understand the various levels of HTTP status codes
* Know what a `GET` request does and how to use it

### Vocab

* `Async` / `Asynchronous` Executing code without blocking the execution of code after it
* `AJAX` Updating a webpage based on data from the network without reloading the whole thing

## What is a network request?
Let's start by reviewing what a network request is and see it in action!

<section class="call-to-action">
### Warmup

Open up your dev tools and navigate to the Network tab. Refresh the page and watch what happens.  You should see something like this:

![network dev tool example](https://i.imgur.com/C5brbyU.png)

* In your notebook, write down what a network request is in your own words.
* Based on the data that shows up in the Network tab, what are each of the columns referring to?  (totally okay to take an educated guess)
</section>

<section class="note">
### What is happening here?

Each item listed is a request for a file from some server somewhere. The one on the top is the initial HTML file, and then the link tags in your HTML prompt network requests for the stylesheets and JavaScript files necessary.  Cool!
</section>

### Types of Requests

Network requests can be made to **GET** information from a server, but it's not the only use.

The HTTP protocol defines a variety of types of requests we can make. These include:

* `GET` - retrieve information from a server
* `POST` - send information to a server, creating resources
* `PUT` - send information to a server, updating entire resources
* `PATCH` - send informatin to a server, updating partial resources
* `DELETE` - remove information from a server
* And [many others](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods){:target='blank'}

Today we'll be focusing on how to do a **GET** request on the frontend side.

### Responses

Every request we make, successful or not, will receive a response.  When looking at the **Network** tab in the dev tools, you might have noticed some requests had different response codes. The HTTP protocol lays a series of [Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status){:target='blank'} to give more information on the status of a request.

<section class="call-to-action">
### Reviewing status code levels

What do each of the status codes mean on a high level?
- 1XX
- 2XX
- 3XX
- 4XX
- 5XX
</section>

<section class="answer">
### Here's a few common status codes

* `200 OK` -- successful request
* `201 Created`-- successful POST request
* `400 Bad Request` -- The request failed due to some error in its structure
* `404 Not Found` -- The request was correctly structured, but specified a non-existent resource
* `500 Internal Server Error` -- Something wrong happened on the server's side of things

![google 500 error](https://i0.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2016/11/29074529/500-internal-server-error.png?fit=604%2C237&ssl=1)
</section>

## Making a Request

Each network request takes time - they're *expensive*. Imagine if you had to wait for a webpage to load one thing at a time! It would not make for a great user experience.

Network requests are expensive no matter what we do. However, we can run them *asynchronously*, saving some time.

`Asynchronous` operations refer to things that can happen outside the normal order of execution. Network requests can be `synchronous` or `asynchronous`, but most modern applications do them `asynchronously` to improve performance / the user experience.

<section class="note">
### Multiple ways of making requests

Note that there are a few ways to make a request.  One way you might see is through a process called AJAX, or [**A**synchronous **J**avaScript **A**nd **X**ML](https://developer.mozilla.org/en-US/docs/AJAX){:target='blank'}. AJAX was a huge advancement for the web, as it allowed developers to update part of a webpage without reloading the entire thing.

Traditionally, AJAX requests have been made via the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest){:target='blank'} object. However, the process is a little clunky, with developers transitioning over to a more streamlined way using the **fetch API**.  This is much more commonly used by developers nowadays and will be the primary way we make network requests at Turing.

The great thing about using the fetch API is that we can use it "for free" with ES6 (as opposed to `$.get` which requires us to bring in jQuery or *axios* which is a separate npm package)!
</section>

## ES6: fetch()

Speaking of using the fetch API, let's take a look at the docs on what it is!

<section class="call-to-action">
### In Breakout Groups

Using the [fetch API docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API){:target='blank'}, answer the following questions.

* What arguments does the `fetch` method take?  Clarify which ones are mandatory and optional.
* What does `fetch` always return?  If the term is new to you, read further on what it is.
</section>

<section class="note">
### Not all browsers support fetch

It's important to note that not every browser supports the fetch api; [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) (code used to provide modern functionality to older browsers that do not natively support it) are available, but many legacy codebases use other apis that are supported by older browsers, such as `Axios` or `Superagent`.  You can see what [browsers support fetch here](https://caniuse.com/#search=fetch){:target='blank'}!
</section>

<section class="answer">
### Key Takeaways  

- The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch.
- It can take an optional options object to get more specific about the `method`, `body`, and `headers`.

```js
fetch(resourceUrl, {/*init object with `method`, `body`, and other optional properties*/});
// Returns a promise
```

- `fetch` will *always* return a promise that either *resolves* or *rejects*.
</section>

### GET with fetch

By default, fetch performs a `GET` request. This means that if we only add a resource url to the fetch call, we'll try and `GET` information from that resource.

<section class="call-to-action">
### Try it out!

Try typing this in your console and see what you get back:

```js
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple");
```

* This is a basic `GET` request to the [Trivia API](https://opentdb.com/api_config.php){:target='blank'} to send us back a random trivia question.  Does it return what you expect?
</section>

<section class="note">
#### Promises - the quick version

A `Promise` is an object that represents the eventual completion of an action.

We don't need to worry too much about them now. Just know that a Promise will either be resolved upon completion, or rejected upon failure. We can use special methods for promises to determine what needs to happen in either of those scenarios:

* `.then()` runs upon the resolution of a promise. Returns another promise
* `.catch()` runs upon the rejection of a failed promise. Used for error handling
</section>

<section class="call-to-action">
### What do I do with this "Promise {<pending>}"?

Diving into the returned promise reveals some information, such as its status and value, but nothing that's too immediately useful. Instead we have to resolve it:

```js
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  .then(response => console.log(response))
```

* What do you get when you log the response object?  Take note of the properties there.
* There's one problem: we can't seem to get the data we want from the Response.body.  How is data sent through requests and responses?
</section>

<section class="answer">
### Parsing our response  

Similar to what you did with localStorage, we'll need to parse our response!  We'll need to use the **`Body.json()`** method that comes with fetch to parse it and call another `.then()`.

From the docs, the `.json()` method returns "A promise that resolves with the result of parsing the body text as JSON. This could be anything that can be represented by JSON — an object, an array, a string, a number.

Let's try it out!

```js
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data));
```

Lastly, we can add in a `.catch()` to account for any errors we may run into.

```js
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => /* do something else */);
```
</section>

<section class="call-to-action">
### Getting practice

Using the [Trivia API](https://opentdb.com/api_config.php){:target='blank'}, do the following in your console:

- Fetch 10 science questions using fetch and console.log the entire response
- Fetch 20 geography questions and for each trivia object console.log the answer only
- Fetch 20 geography questions and console.log the response status code.
</section>

## Common Misconcepion

Let's look at this code:  
```js
fetch('some_url')
.then(res => res.json())
.then(data => console.log(data))
.then(data => /* do something with data */) /* <--- this line won't work! */
```

Let's think about these questions:  
<section class="answer">
### Why doesn't data in line 4 refer to the same data in line 3?

Explanation: Parameters are scoped to their function, so you cannot reference a parameter from one function in another. Each callback function defines their own scope (i.e. creates their own execution context).
</section>
<section class="answer">
### Why is data in line 4 undefined?

Explanation: .then always returns a Promise, and when that promise resolves, it evaluates to whatever the callback returns and hands it off to the next .then. The callback function on line 3 does not return anything, so undefined is the value handed off to the .then in line 4, stored in the data parameter.
</section>

**Big takeaway:** Console logs are great as you're coding as a way to see what the data looks like that is coming through. BUT! Once you're ready to actually do things with that data, you'll want to remove your console logs OR have the console log in the same callback function as your logic, like this:  

```js
fetch('some_url')
.then(res => res.json())
.then(data => {
  console.log(data);
  /* do something with data */
})
```



<!-- Review Session for the following morning:

  Interview-style questions:

  * In as much detail as possible, describe the request-response cycle when attempting to retrieve a network resource from a server.
  * Describe the difference between synchronous and asynchronous code.
  * What are 4 different levels of HTTP status codes and what does each level mean?

  Write out another fetch call in Chrome DevTools (Trivia Database API is fine):
    * Assign the whole fetch call to a variable
    * Console log the response object in the first .then()
    * Console log the parsed data in the second .then()
    * Inspect the response object & the parsed data
    * Log the variable you created for the entire fetch call to the console, see that it
      returns a Promise object and inspect it to solidify that Promise syntax

-->
