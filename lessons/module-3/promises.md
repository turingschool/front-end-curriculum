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

Before we get into dissecting Promises, we need to make sure we understand the difference between synchronous and asynchronous JavaScript. In client-side JavaScript, most of the code we write will be **synchronous**. This means that our code is read and executed line-by-line, in the order that it's written:

```javascript
thisFunctionWillExecuteFirst();
thisFunctionWillExecuteSecond();
thisFunctionWillExecuteThird();
imGoingToTakeForever();
iCantExecuteUntilSlowPokeAboveMeIsDone();
```

**Asynchronous** JavaScript, on the other hand, will be processed in the background -- it will not block the execution of the code that follows it. This comes in handy when we want to pull a slow or expensive operation out of the default synchronous flow of execution. The newest, hippest way to do this is by using [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Enter Promises

Promises allow us to kick off an asynchronous process in the background and respond to its result when it becomes available. Using a Promise typically looks like this:

```javascript
getProjectsForStudents(students)
  .then(projects => {
    renderDetailsForProjects(projects);
  })
  .catch(error => {
    console.log(error);
  });

doOtherThings();
noneOfTheseFunctions();
willBeBlocked();
fromExecuting();
whileWeWait();
forProjectsToBeRetrieved();
```

In this example, we call a function: `getProjectsForStudents`. Though this might look like a typical function, the developer who wrote it decided that it would return a Promise object. By returning a Promise object, this function does two very important things:

1. It automatically becomes asynchronous, allowing it to run in the background and giving the rest of our code a chance to continue execution.
2. It gives us access to two methods: `.then()` and `.catch()`.

If the function completes successfully, the Promise object is considered **resolved**, and our `.then()` block will execute. Within this block, we are automatically given a result that we can work with (e.g. data from an API endpoint). In this example, we are given project data for our students and we'll render them to the DOM.

If the function fails for any reason, our Promise object is considered **rejected**, and our `.catch()` block will execute instead. Within this block, we are automatically given an error that we can use to notify the user that something went wrong.  

![Image of Promise Flow](https://wtcindia.files.wordpress.com/2016/06/promises.png?w=605)
(Photo credit from [WalkingTree](https://blogs.walkingtree.tech/2016/07/03/using-promises-in-ext-js-6/))

## The Promise-Based Fetch API

The most common example of an async process we'll run into on the client-side is a network request. Making a trip to the server can take a significant amount of time, and our applications would be painfully slow if they stopped the rest of our code from executing. Combining this knowledge with what we've just learned about Promises, it's reasonable to assume that there would be a web API that facilitates making promise-based network requests. Though still relatively new, the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) allows us to do just that. A typical `fetch` request might look like this:

```javascript
fetch('/api/v1/projects', {
  method: 'POST',
  body: JSON.stringify({
    projectName: 'Foo',
    totalPoints: 100
  })
});
```

In this example, we're making a `POST` request that would add a new project named 'Foo' worth 100 points. `fetch` is a function that takes two arguments:
      
1. the URL or API endpoint we're trying to hit
2. an optional object of configuration settings for our request. This object may contain what kind of request we're making (e.g. `GET` vs `POST`) and any data we might need to pass along with it

Every fetch request we make will **return a Promise object** that contains our response data. This allows us to easily react to the type of response we get once it's available. Handling the response of a fetch request might look something like this:

```javascript
fetch('/api/v1/projects', {
  method: 'POST',
  body: JSON.stringify({
    projectName: 'Foo',
    totalPoints: 100
  })
})
.then(response => response.json())
.then(projects => renderDetailsForProjects(projects))
.catch(error => console.log(error));
```

While we wait for the server to return our response, the rest of our application can continue executing other code in the meantime. Once the response object is available, our first `.then()` block will fire. The response object returns a lot of extra information that we don't necessarily need. All we want in this scenario is a JSON object of our project data which we can get by calling `response.json()`.

Converting the body to a JSON data structure with `response.json()` actually returns *another* promise. (Converting the data to a particular type can take significant time, which is why we have this additional promise step before we can begin working with our data.) Because we're getting another promise object back, we can simply chain an additional `.then()` block where we actually receive our project data. We can then render it to the DOM with our imaginary `renderDetailsForProjects()` function. If for any reason the request failed, the `.catch()` block will be fired and we will log the error to the console.

## Why Use Promises?

Promises allow you to multi-task a bit in JavaScript. They provide a cleaner and more standardized method of dealing with tasks that need to happen in sequence. (For example, we couldn't have possibly called `renderDetailsForProjects()` until we actually received the projects data from `getProjectsForStudents()`). With Promises, we have more control over what happens with the outcomes of our async processes.

### An Alternative to Callbacks

A Promise is essentially an IOU that says "Ok, I'm going to get you the information you requested, just give me a second. In the meantime, go do whatever else you need to do, and I'll let you know when I'm ready." This is almost similar to event listeners that you may have written in the past. Take a click handler for example:

```javascript
$('#clickity-click').click(() => {
  doSomething();
});
```

When this code first executes, it doesn't actually fire `doSomething()`. It simply binds the handler to our `clickity-click` element. It says: "Take note of `clickity-click` and wait for a user to click on it. Once that event happens, run the `doSomething` function." Recognize how it takes the execution of `doSomething()` out of the natural synchronous flow and holds onto it for later -- to execute only after a click event has occurred. This is a common convention in client-side JavaScript and is called the **callback pattern**.

The callback pattern, in short, is when you pass a function as an argument to another function to be executed later.  This pattern has historically been wildly popular because it's easy to implement. But it has a few problems:

* You're giving away your code to be executed later.
  * You can hope that this will be when you expect and as many times as you expect. But no promises (pun unintended, but I'm going with it).
* Doing things like executing callbacks in parallel and waiting for all of them to come back is tricky.
* Doing things in series where one callback hands its data to the next callback is also tricky. (This has the delightful nickname of "callback hell.")
* Error handling is inherently broken. There are a bunch of clever ways around this:
  * Pass two callbacks—one for a successful outcome and one for an unsuccessful outcome.
  * Use the Node.js "error-first" style of callbacks where the first argument is always an error object, which is typically set to `null` in the event that we reached a successful outcome. This is incredibly pessimistic.

Let's take a look at some more intricate examples of the callback pattern. Using jQuery's `getJSON` method, (which can be written with callbacks *or* promises), we could make a network request that takes three arguments. The first is the endpoint we want to hit, the second is our success callback and the third is our error callback:

```js
$.getJSON('/api/v1/students.json', (students) => {
  console.log(students);
}, (error) => {
  console.error(error);
});

// No more access to students out here.
```

In the function above, we need to do everything with `students` right then and there. We can't give ourselves access to `students` outside of that success handler. When re-written as a promise, we could access students from anywhere and perform multiple actions on the data when it returns by leveraging `.then()`:

```js
const students = $.getJSON('/api/v1/students.json');

students
  .then((students) => {
    doSomethingWithStudents(students);
  })
  .catch((error) => {
    console.log(error);
  });

// somewhere else, possibly further down in our code:
students
  .then((students) => {
    doAnotherThingWithStudents(students);
  });
```

The callback pattern also falls apart when we need to do multiple operations in sequence:

```js
// get the student data
$.getJSON('/api/v1/students.json', (students) => {

  // get the projects for all students
  getProjectsForStudents(students, (projects) => {

    // get the grades for each project
    getGradesForProjects(projects, (grades) => {

      // finally, do something with all our student/project/grade data
      doSomethingImportantWithAllThisData(students, projects, grades);

    // handle errors getting student data
    }, (error) => {
      console.error(error);
    })

  // handle errors getting project data
  }, (error) => {
    console.error(error);
  })

// handle errors getting grade data
}, (error) => {
  console.error(error);
});

```

Or in other words...


![callback hell street fighters](https://pbs.twimg.com/media/COYihdoWgAE9q3Y.jpg)

Ugh. This is what we refer to as callback hell. The code becomes super nesty and difficult to follow. Without comments, it's not clear which error callbacks are associated with which operation, and there is a lot of repeat code. When re-written using promises, we can consolidate and flatten a lot of this syntax:

```js
$.getJSON('/api/students.json')
 .then(students => getProjectsForStudents(students))
 .then(projects => getGradesForProjects(projects))
 .then(grades => doSomethingImportantWithAllThisData(grades))
 .catch(error => console.log('error'));
```

This reads a lot better than that callback example, right? If you came back to this code in a few weeks or months, you'd probably still be able to grok the general idea of what it does.

*Note: Going forward, it is best to use the `fetch` API for making network requests. Using `getJSON` in this lesson is purely to demonstrate the difference between a callback implementation and promise implementation. `fetch` can only be used with Promises and is steadily becoming the industry standard.*


### Advantages of Promises
So besides the obvious syntactical benefits, what are some of the others advantages of promises?

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

- [Promise It Wont Hurt Workshop](https://github.com/stevekane/promise-it-wont-hurt)  
- ["You're Missing the Point of Promises" by Domenic Denicola](https://gist.github.com/domenic/3889970)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)
- [MDN Promise.Race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- [MDN Promise.All()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
