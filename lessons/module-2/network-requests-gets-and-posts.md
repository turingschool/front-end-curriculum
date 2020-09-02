---
title: "Network Requests: GETs and POSTs"
length: 180 minutes
tags: javascript, browser, network requests, fetch, ajax, xhr
---

### Learning Goals

* Understand the difference between synchronous and asynchronous operations
* Be familiar with the fetch API
* Understand how network requests work
* Know what `GET` and `POST` requests do and how to use them

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

Today we'll be focusing on how to do **GET** and **POST** requests on the frontend side.

### Responses

Every request we make, successful or not, will receive a response.  When looking at the **Network** tab in the dev tools, you might have noticed some requests had different respond codes. The HTTP protocol lays a series of [Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status){:target='blank'} to give more information on the status of a request.

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

## Making A Request

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

It's important to note that not every browser supports the fetch api; polyfills are available, but many legacy codebases use other apis that are supported by older browsers, such as `Axios` or `Superagent`.  You can see what [browsers support fetch here](https://caniuse.com/#search=fetch){:target='blank'}!
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
* There's one problem: we can't seem to get the data we want from the Response.body.  How is data sent through requests and responses?  Think back to `localStorage` in mod 1 and what you had to do in order to access data.
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

### POST with fetch

What if we want to add information to a database?

If we want to use fetch to make any other kind of request, we'll have to add an optional init object into the function call.

```js
fetch(url, {
  method:"POST",
})
```

From here, the implementation may look different based on the API you're communicating with. Some good init object properties to be aware of:

* `method` - whatever kind of request we'll be making; "GET", "POST", "DELETE", etc...
* `body` - the body of whatever we want to send to the server
* `headers` - extra information needed about the request. Takes an object. An **important** header property to know:
  * `Content-Type` - specify what format the body will be in

Here's a typical POST request structure:

```js
fetch(url, {
  method: 'POST',
  headers: {
  	'Content-Type': 'application/json'
  },
  body: JSON.stringify(someDataToSend), // remember how HTTP can only send and receive strings, just like localStorage?
})
  .then(response => response.json())
  .then(json => /*do something with json*/)
  .catch(err => /*do something with the error*/);
```

Remember, **fetch still returns a promise**. We've got to resolve it, regardless of what request type we're making.

Often times, if a `POST` is successful, you'll see a `201 created` status message in the response

<section class="call-to-action">
#### Practice

Head to <a href="https://github.com/turingschool-examples/fe2-fetch-practice" target="\__blank">this repo</a> for some practice with GETting and POSTing.

Working with a partner do the following:
- Get the server up and running (just follow all the set up instructions in the
  repo)
- Write a fetch request to GET all the users
- Write a fetch request to POST a new user
- Rerun your previous GET fetch request to verify you added the user
- Write a fetch request to GET all the animals
- Write a fetch request to POST a new animal
- Rerun your previous GET fetch request to verify you added the animal
</section>

### Nice to Know: Query Strings / URL Structure

![url anatomy diagram](https://sitechecker.pro/wp-content/uploads/2017/12/url-structure.jpg)

What's all that weird stuff in the URL we're fetching?

Fetch and XMLHttpRequest Objects take the url as one of their arguments. The URL itself can be thought of containing sub-arguments that give these request objects and methods more information. The entire anatomy of a URL can be broken down into a series of informative peices, but the ones we're focused on today are queries.

Anything coming after the `?` in a url is part of a query. Queries can be broken down into categories and arguments (check the vocab here). Each category / argument pair is separated by an `&`.

 In the example from above:
```
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
```
we're querying information about the `amount`, `category`, and `type` of the trivia we want to receive.

<section class="call-to-action">
Take a look at the [trivia docs](https://opentdb.com/api_config.php), and figure out what each of the queries in our fetch request mean.
</section>

---

## [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

"A Promise is an object representing the eventual completion or failure of an asynchronous operation"

In our case, we can think of Promises as a placeholder that will do something once it receives a response back from the trivia server.

The great thing about promises is that since they are just objects we can move them around like an object and can return them from functions.

```js
function getTrivia(number, categoryId) {
  const root = 'https://opentdb.com/api.php';
  const url = `${root}?amount=${number}&category=${categoryId}&type=multiple`;
  const promise = fetch(url)
                  .then(response => response.json());
  
  return promise;
}

getTrivia(10, 27)
  .then(data => console.log(data))
  .catch(err => /* do something else */);
```
---

### What is this asynchronous thing all about?

Let's say we're at a restaurant for a night out on the town...Here's how the experience would go in each scenario:

* **Synchronous:** I order my food, everyone in the restaurant has to wait until I get my food before the next person can order.

* **Asynchronous:** I order my food, the order is put into a queue, other food is made in the meantime, my food is ready, and the server brings it to me.


#### A Non-AJAX Example: `setTimeout()`

```js
console.log("Legen...");

setTimeout(() => {
  console.log("DARY!");
}, 2000);

console.log("Wait for it...");
```

`setTimeout()` is actually an asynchronous function, which executes its callback after waiting for the allotted time to expire.

<section class="call-to-action">
#### Questions:

* Why are async operations necessary?
* Have you run into a situation on past projects where you needed async operations to accomplish it?
</section>

---

##### Further Reading:

* [The Evolution of Asyncronous JavaScript](https://blog.risingstack.com/asynchronous-javascript/)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Postman](https://www.getpostman.com/) -- good tool for testing out APIs
* [GETs, POSTs and DELETEs, man! Intro to Postman](https://www.youtube.com/watch?v=MRw07FQRscI) - Instructor video for getting started with Postman



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
