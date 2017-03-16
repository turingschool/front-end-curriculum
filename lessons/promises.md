---
title: Async JavaScript with Promises
module: 3
---


### Goals

By the end of this lesson, you will:

* Understand the difference between synchronous and asynchronous JavaScript
* Be able to implement a network request using the `fetch` API
* Know when and how to use Promises and why they're useful
* Understand the relationship between Promises and callbacks

## Synchronous vs. Asynchronous JavaScript

Before we get into disecting Promises, we need to make sure we understand the different between synchronous and asynchronous JavaScript. In client-side JavaScript, most of the code we write will be **synchronous**. This means that our code is read and executed line-by-line, in the order that it's written. **Asynchronous** JavaScript, on the other hand, will be processed in the background -- it will not block the execution of the code that follows it. The result of an asynchronous operation will be handled once it's available.

The most common example of async JavaScript on the client-side is a network request. Any time you make a trip to the server with an Ajax request, this is an async process. It takes some time to retrieve a response from the server, and our apps would be painfully slow if all of these requests blocked the other code we were trying to execute.


## Enter Promises

This is where Promises come in handy. When we want to pull a slow or expensive operation out of the default synchronous flow of execution, we can use a Promise to kick the process off in the background. While we wait for the result of that operation, we can continue to execute other code in the meantime. Using a Promise typically looks like this:

```javascript
// kick off async process in the background that will return a Promise object
getTonsOfFlights(foo, bar, baz)

  // Promise resolved successfully and we are given a result to work with
  .then(flights => { 
    renderDetailsForFlights(flights);
  })

  // Promise failed and we are given an error
  .catch(error => {
    somethingWentWrong(error);
  });
```

In this example, we call a function: `getTonsOfFlights`. This function returns a Promise object which does two things:

1. It makes the function asynchronous, allowing it to run in the background and giving the rest of our code (not shown) a chance to continue execution.
2. It gives us access to two methods: `.then()` and `.catch()`.

If the function completes successfully, the Promise object is considered **resolved**, and our `.then()` block will execute. Within this block, we are automatically given a result that we can work with (e.g. data from an API endpoint). In this example, we are given flight data for tons of flights and we'll render them to the DOM.

If the function fails for any reason, our Promise object is considered **rejected**, and our `.catch()` block will execute instead. Within this block, we are automatically given an error that we can use to notify the user that something went wrong.

## Another Example: The Fetch API

As we've already mentioned, the most common example of an async process on the client-side is a network request. Combining this knowledge with what we've just learned about Promises, it's reasonable to assume that there would be an API that facilitates making promise-based network requests. Though still relatively new, the `fetch` API allows us to do just that. A typical `fetch` request might look like this:

```javascript
fetch('/api/v1/flights', {
  method: 'POST',
  body: JSON.stringify({
    carrier: 'Foo Airlines',
    passengers: 55,
    status: 'On Time'
  })
});
```

In this example, we're making a `POST` request that would add a new flight for Foo Airlines that carries 55 passengers and is on time. `fetch` is a function that takes two arguments: the first is the URL or API endpoint we're trying to hit, and the second is an optional object of configuration settings for our request. This object may contain what kind of request we're making (e.g. `GET` vs `POST`) and any data we might need to pass along with it.

Every fetch request we make will return a Promise object that contains our response data. This allows us to easily react to the type of response object we get once it's available. Handling the response of a fetch request might look something like this:

```javascript
fetch('/api/v1/flights', {
  method: 'POST',
  body: JSON.stringify({
    carrier: 'Foo Airlines',
    passengers: 55,
    status: 'On Time'
  })
})
.then(response => response.json())
.then(updatedFlightsData => {
  renderDetailsForFlights(updatedFlightsData);
})
.catch(error => {
  renderErrorMessage(error.message);
});
```

While we wait for the server to return our response, the rest of our application can continue executing other code in the meantime. Once the response object is available, we first convert the body to a JSON data structure with `response.json()`, which returns *another* promise. (Converting the data to a particular type can take significant time, which is why we have this additional promise step before we can begin working with our data.) Once the data is prepped and ready, we can then render it to the DOM with our imaginary `renderDetailsForFlights()` function. If for any reason, the request failed, the `.catch()` block will be fired and we will render an error message to the DOM to notify users that something has gone wrong.

## Why Use Promises?

Promises allow you to multi-task a bit in JavaScript. They provide a cleaner and more standardized method of dealing with tasks that need to happen in sequence. (For example, we couldn't have possibly called `renderDetailsForFlights()` until we actually received the flight data from `getTonsOfFlights()`). With Promises, we have more control over what happens with the outcomes of our async processes.

### An Alternative to Callbacks

A Promise is essentially an IOU that says "Ok, I'm going to get you the information you requested, just give me a second. In the meantime, go do whatever else you need to do, and I'll let you know when I'm ready." This is almost similar to event listeners that you may have written in the past. Take a click handler for example:

```javascript
$('#clickity-click').click(function(event) {
  doSomething();
});
```

When this code first executes, it doesn't actually fire `doSomething()`. It simply binds the handler to our `clickity-click` element. It says: "Take note of clickity-click and wait for a user to click on it. Once that event happens, run the doSomething function." Recognize how it takes the execution of `doSomething()` out of the natural synchronous flow and holds onto it for later -- to execute only after a click event has occurred. This is a common convention in client-side JavaScript and is called the **callback pattern**.

The callback pattern is wildly popular because it's easy to implement. But, it has a few problems:

* You're giving away your code to be executed later.
  * You can hope that this will be when you expect and as many times as you expect. But no promises (pun unintended, but I'm going with it).
  * Doing things like executing callbacks in parallel and waiting for all of them to come back is tricky.
  * Doing things in series where one callback hands its data to the next callback is also tricky. (This has the delightful nickname of "callback hell.")
  * Error handing is inherently broken. There are a bunch of clever ways around this:
    * Pass two callbacks—one for a successful outcome and one for an unsuccessful outcome.
    * Use the Node.js "error-first" style of callbacks where the first argument is always an error object, which is typically set to `null` in the event that we reached a successful outcome. This is incredibly pessimistic.

Let's take a look at some more intricate examples of the callback pattern:

```js
$.getJSON('/api/students.json', (students) => {
  console.log(students);
}, (error) => {
  console.error(error);
});

// No more access to students out here.
```

In the function above, we need to do everything with `students` right then and there. We're also trusting jQuery to call our function only once. Luckily, a popular library like jQuery is pretty trustworthy in this regard. But, just imagine for a moment that you're using a library your coworker made and your callback charges a customer's credit card. Still feeling trustworthy?

```js
const students = $.getJSON('/api/students.json');

students.then((students) => console.log(students))
        .catch((error) => console.log(error));

students.then((students) => console.log('Something else with:', students));
```

It gets worse when we have to more than one thing.

```js
$.getJSON('/api/students.json', (students) => {
  getProjectsForStudents(students, (projects) => {
    getGradesForProjects(projects, (grades) => {
      doSomethingImportantWithAllThisData(students, projects, grades);
    }, (error) => {
      console.error(error);
    })
  }, (error) => {
    console.error(error);
  })
}, (error) => {
  console.error(error);
});

```

Ugh. This is what we refer to as callback hell.

```js
const students = $.getJSON('/api/students.json');
const projects = students.then(getProjectsForStudents);
const grades = projects.then(getGradesForProjects);

grades.then(doSomethingImportantWithAllThisData)
      .catch(error => console.error(error));
```

This is a little bit of an oversimplification. You'd have to pass the results back though each function, but you get the point. This would happen inside of `getProjectsForStudents`, `getGradesForProjects`, and `doSomethingImportantWithAllThisData`, which are fictional at this point in time.

We could do something like this as well:

```js
$.getJSON('/api/students.json')
 .then(getProjectsForStudents)
 .then(getGradesForProjects)
 .then(doSomethingImportantWithAllThisData)
 .catch(handleError);
```

This reads a lot better than that callback example, right? If you came back to this code in a few weeks or months, you'd probably be able to grok the general idea of what it does."


### Advantages of Promises
Okay, so what are some of the advantages of promises?

- You are getting an IOU that you're holding on to rather than giving your code away as you would with callbacks.
- Error handling is less broken. It's not a silver bullet. Synchronous functions either `return` or throw an error. In a similar vein, your promises will either become *resolved* by a value or become *rejected* with an error.
- You can catch errors along the way and deal with them in a way that is *similar* to synchronous code.
- Chaining promises is easy and does not result in callback hell.

But wait, there's more.

- `Promise.all` takes an array of promises and waits until all of the promises are resolved. This solves the nastiness involved in doing this with callbacks.
- `Promise.race` takes an array of promises and resolves as soon as any one of them fulfill. This would allow you to hit 3 API endpoints and then move on when we heard back from whichever one came back first.


## When to use Promises
Now that we have a better understanding of how and why to use Promises, what about the when? When do you actually want to use a Promise?

The short answer: whenever you're handed a promise by an API you didn't write, where the author chose to use promises. This includes many modern browser APIs such as `fetch`. 

When you read the documentation for a library that uses promises, one of the first sentences will likely say 'this is a promise-based library'. There are some APIs that still use callbacks rather than promises (the `geolocation` API, for example). You'll want to read the documentation closely to see if the library expects you to use a promise or callback. So for once, we don't really have to be in charge of making a decision here -- we can let the tools and technologies we're using dictate whether or not we should be using promises.


## Further Learning: the Promise Object

Unless you're making a library or creating an abstraction over something complicated, you're likely to consume promises more than you create them. The syntax can look squirrelly, but if we pull it apart, it's not that bad. If you open up the console in your browser dev tools, you can actually create your own Promise object and inspect its inner workings:

```js
let foo = new Promise();
```

Done. Well, not quiet. We also need to give it the mechanics for how it should handle fulfillment or rejection. So, we hand the `Promise` constructor a function that will dictate how we figure this all out.

```js
let foo = new Promise(() => {});
```

Okay, here's where it gets a bit hectic, that function is going to be handed two arguments, which are both functions as well.

```js
let foo = new Promise((resolve, reject) => {});
```

As you can probably imagine when things go well, you should call the `resolve()` function. If things blow up, then you should use the `reject()` function.

```js
let foo = new Promise((resolve, reject) => {
  if (thingsGoWell) {
    resolve(theDataYouReceived);
  } else {
    reject(someHelpfulError);
  }
});
```

The promise object itself encapsulates all of the asynchronous logic and allows whoever receives this promise to just deal with `then` and `catch` as we did in prior examples.

## References

- ["You're Missing the Point of Promises" by Domenic Denicola](https://gist.github.com/domenic/3889970)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)
- [MDN Promise.Race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- [MDN Promise.All()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)