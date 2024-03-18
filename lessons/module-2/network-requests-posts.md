---
title: "Network Requests: POSTs"
length: 180 minutes
tags: javascript, browser, network requests, fetch, ajax, xhr
---

### Learning Goals

* Get more familiar with the `Promise` object and the fetch API
* Know what `POST` requests do and how to use them

### Vocab

* The `Promise` Object - represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

<section class="call-to-action">
### Warmup

Use this [Jamboard](https://jamboard.google.com/d/1yt9FfpGP1v4gtwbVPKG2lz60JtsBaMVO5HTOugIw0bA/viewer) to respond to the following questions:

- What do you already know about network requests?
- What questions do you have about working with network requests?
</section>


## POST with fetch

What if we want to add information to a database?

If we want to use fetch to make any other kind of request, we'll have to add an optional init object into the function call.

<section class="call-to-action">
### In Your Notebook

Reflecting on the [How the Web Works](https://frontend.turing.edu/lessons/module-2/how-the-web-works.html){:target='blank'}, what makes up the request?  What additional information might we need to send in our `fetch` request?
</section>

<section class="answer">
### Implementing a POST Request  

Given that the default behavior of `fetch` is to GET data, we need to utilize the `options` object and update the method to be a POST.

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
  body: JSON.stringify(someDataToSend), // remember how HTTP can only send and receive strings, just like localStorage?
  headers: {
  	'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(json => /*do something with json*/)
  .catch(err => /*do something with the error*/);
```

Remember, **fetch still returns a promise**. We've got to resolve it, regardless of what request type we're making.

Often times, if a `POST` is successful, you'll see a `201 created` status message in the response
</section>

<section class="call-to-action">
#### Practice

Head to <a href="https://github.com/turingschool-examples/fe2-fetch-practice" target="\__blank">this repo</a> for some practice with GETting and POSTing.

Working with a partner, follow the setup instructions to get the server running.  Then follow the steps in order within the `client/index.js` file and test it out by opening the `client/index.html` file.
</section>

### Nice to Know: Query Strings / URL Structure

![url anatomy diagram](https://sitechecker.pro/wp-content/uploads/2017/12/url-structure.jpg)

What's all that weird stuff in the URL we're fetching?

Fetch and XMLHttpRequest Objects take the url as one of their arguments. The URL itself can be thought of containing sub-arguments that give these request objects and methods more information. The entire anatomy of a URL can be broken down into a series of informative pieces, but the ones we're focused on today are queries.

Anything coming after the `?` in a url is part of a query. Queries can be broken down into categories and arguments. Each category / argument pair is separated by an `&`.

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

* [The Evolution of Asynchronous JavaScript](https://blog.risingstack.com/asynchronous-javascript/)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Postman](https://www.postman.com/downloads/) -- good tool for testing out APIs
* [GETs, POSTs and DELETEs, man! Intro to Postman](https://www.youtube.com/watch?v=MRw07FQRscI) - Instructor video for getting started with Postman
