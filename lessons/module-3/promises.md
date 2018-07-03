---
title: Async JavaScript with Promises
module: 3
---

## Agenda

- Learn about the difference between synchronous and asynchronous code.
- Talk about the event loop, and how it works in JavaScript
- Introduce Promises, discuss the problem they solve
- Write some Promises
- Discuss `fetch` and how it relates to Promises

## Learning Goals

By the end of this lesson, you will:

- Understand the difference between synchronous and asynchronous JavaScript
- Understand the 'Event Loop', and how it relates to asynchronous JavaScript
- Be able to implement a network request using the `fetch` API
- Know when and how to use Promises and why they're useful
- Understand the relationship between Promises and callbacks

## Vocab

- `Asynchronous` functions. Execution of an asynchronous function means the function that follows the async function does not wait for the async function to complete.
- `Synchronous` functions, Exectution of synchronous functions means the second function waits for the first function to complete.
- Event Loop
- `Parallelism` Executing more than one operation at a time
- `Promise` An object representing the _eventual_ completion or error of an operation, along with a value
- `Callback` A function given to another function to be called at a later time
- `Higher Order Function` A function that either takes a another function as a parameter or returns a function, or both

## Docs

- [MDN Promises](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)
- [MDN Promise.Race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- [MDN Promise.All()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [MDN EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Synchronous vs. Asynchronous JavaScript

In preparation for understanding Promises we must understand the difference between synchronous and asynchronous JavaScript. In client-side JavaScript, a.k.a the front end, most of the code we write is **synchronous**. Synchronous means that our code is read and executed line-by-line, in the order that it's written:

**Synchronous**

```js
thisFunctionWillExecuteFirst();
thisFunctionWillExecuteSecond();
thisFunctionWillExecuteThird();
imGoingToTakeForever();
iCantExecuteUntilSlowPokeAboveMeIsDone();
```

**Asynchronous** 
Some JavaScript is processed in the background.  Asynchronous processing does not block the execution of the code that follows it. Asynchronous code is useful when we want to pull a slow or expensive operation out of the default synchronous flow of execution. A popular ES6 way to write asyncronous code is by using Promise. Link in Docs, above.

#### The Event Loop

Watch [this talk](https://www.youtube.com/watch?v=8aGhZQkoFbQ).
In the Doc above, you may also read the MDN link on the Event Loop.

An example of a JavaScript runtime is the Chrome virtual machine (Google's V8 engine) which interprets and executes JavaScript mostly on the browser.  (Node.js is a library/platform based on the V8 Engine.)

A JavaScript runtime is made up of:

- A `Call Stack`, a.k.a The Stack, which holds a list of the currently executing functions and their arguments and local variables (_execution context frames_). The `Stack` is Last In First Out (_LIFO_).  The stack is where synchronous execution happens by adding and removing _stack frames_.

- A `Memory Heap`, a.k.a. The Heap,  which holds variables and the like.

- A `Queue`, which holds a list of functions (_messages, actually, that point to functions_). The `Queue` is First In First Out (_FIFO_). An event may be added to the `Queue` so that the function may be executed later, asynchronously from the code on the Stack.

- An `Event Loop` . The Event Loop has one job, to monitor if anything is on the Stack, and if nothing is, to take the first function from the Queue and put in on the Stack. Said differently, the Event Loop watches the `Queue` and the `Stack` and takes the first function from the `Queue` and puts it on the `Stack` when the `Stack` is _empty_. 

### Browser APIs
A browser API is an asynchronous JS method available on the browser.
Examples of Browser APIs: setTimeout(), fetch/XHR, setInterval(), DOM events, setState(), Promises


### When to Use Asynchronous JS
When is asynchronous JS code helpful?:
- waiting for user input
- requesting data from a database or file system
- sending data across a network and waiting for a response
- event handlers
- image loading

Callback functions are the fundamental unit of ansynchronous JS.  The UX is improved, but callback hell can result from overuse of callback functions. (More detail below in **The Callback Pattern**)  Troubleshooting in callback hell is also problematic.  Developers can have a hard time maintaining a heavy use of callbacks.

Callback usage can result in **Inversion of Control**, which means the developer is not really in control of when a callback is executed.

### Enter Promises
ES6 provides promises. A Promise is an object. A Promise represents the eventual completion or failure of an asych operation and its resulting value. 

#### Three States of Promises:

1. Pending.
2. Resolved/Fulfilled with a return value. This resolved value does not change and is immutable.  As a programmer, you may transform the data by cleaning it, but the fulfilled promise object itself is immutable
3. Rejected with an error message.

A new Promise(executor) will resemble {`state`: 'pending', `result`: undefined}
A resolved promise will have resemble {`state`: 'fulfilled', `result`: value}
A rejected(error) will resemble {`state`: 'rejected', `result`: reason for rejection}

An asynchronous function allows us to kick off an asynchronous process to run in parallel to the call stack.  The async function also responds to the result that is returned, when it is returned.  The result can be a Promise or an Error. A simple approach to creating a Promise looks like this:

```js
getProjectsForStudents(students)  // returns a Promise because it is a fetch call(which you can't see)
  .then(projectsData => {         // .then() consumes a Promise and takes a callback function
    renderDetailsForProjects(projectsData);
  })
  .catch(error => {               // .catch() handles an error if one is returned
    console.log(error);
  });

doOtherThings();             // synchronous code executed on the call stack in parallel to the async function
noneOfTheseFunctions();
willBeBlocked();
fromExecuting();
whileWeWait();
forProjectsToBeRetrieved();
```

In this example, we call a function: `getProjectsForStudents` which is a fetch() call and returns a Promise object. By returning a Promise object, this function does two very important things:

1. The fetch above is automatically asynchronous, allowing it to run in the background, giving the rest of our code a chance to continue execution. The Fetch API, which is discussed in much more detail below, takes one mandatory argument, the path to the resource you want to fetch.  Fetch also takes an optional `options` object argument. 
2. Fetch gives us access to two methods: `.then()` and `.catch()`.  `.then()` is the way of interacting with an unresolved Promise.  `.catch()` is the way to interact with a Promise rejected with an error.

The .then() method. takes a callback function and one other optional argument.  The callback's argument is the resolved value of the previous promise.  .then() also returns another Promise. The second optional argument can be in the event of a rejection, but we will not use that approach in this class.

If a promise is rejected, .catch() is passed an error and catches any broken promise in the whole chain. You can do what you want with the error.

If the fetch completes successfully, the Promise object is considered **resolved** and the `.then()` block will execute. The `.then()` block takes a callback function as an argument and that callback takes and argument which is the resulting data of the fetch.  (The data is commonly the data from an Web API endpoint.) In the example above, the resolved Promise is the projectsData. projectsData becomes the argument for the function in the `.then` block which is said to consume the promise.  In this case, we send the projectsData as an argument to a function that renders some data to the DOM.

If the fetch in `getProjectsForStudents` retuns a **rejected** Promise, `.catch()` block will execute instead of the .then().  The .catch() block is automatically passed an error that we can use to notify the user that something went wrong.  

![Image of Promise Flow](https://wtcindia.files.wordpress.com/2016/06/promises.png?w=605)
(Photo credit from [WalkingTree](https://blogs.walkingtree.tech/2016/07/03/using-promises-in-ext-js-6/))

### Fetch - The Promise-Based Browser API

There is a client-server computing model.  The browser is the client.  A server is an application running on a computer that is the host of data or a website.  The client submits an HTTP request message to the server.  The most common example of an async process we'll run into on the client-side is a network request to a server. The server returns a response message to the client, but the response arrival is slow and adversely impacts the UX if done synchronously. To make promise-based network requests which are asynchronous we take advantage of a relatively new Browser API. You can see the link in Docs, above.

A typical `fetch` request might look like this:

```js
fetch('/api/v1/projects', {   //mandatory url
  method: 'POST',             // options object is an optional argument. 
  body: JSON.stringify({      // body has the value of the strigified Promise object
    projectName: 'Foo',       // keys here have to identically mathch keys in the data being fetched
    totalPoints: 100
  }),
  headers: {
    'content-type': 'application/json' //header is always this code
  }
});
```

TIP: The method 'GET' is required for SWAPIbox!

TIP: When you are posting your body, if you use the optional configuration object argument, the keys of the Promise object (examples: projectName and totalPoints) have to **identically** match the keys in the data you are fetching. (examples: projectName and totalPoints must be identical to the keys in the response.)

In the above example, we say we are making a `POST` request.  The Promise object, when successfully returned, is strigified by JSON. The Promise object has useable data for the new project named 'Foo' worth 100 points. 

The `fetch()` is a method that takes two arguments:
      
1. The URL or API endpoint we're trying to hit
2. An optional object of configuration settings for our request. This object may contain what kind of request we're making (e.g. `GET`, `POST`, `PUT`, `PATCH`, `DELETE`) and any data we might need to pass along with it.

Every fetch request we make  **returns a Promise object** that contains our response data. This allows us to easily react to the type of response we get once it's available. Handling the response of a fetch request might look something like this:

```javascript
fetch('/api/v1/projects', {  // fetch() returns a Promise
  method: 'POST',
  body: JSON.stringify({
    projectName: 'Foo',
    totalPoints: 100
  }),
  headers: {
    'content-type': 'application/json'
  }
}) 
.then(response => response.json())  // then() consumes the Promise response. 
.then(projectsData => renderDetailsForProjects(projectsData))   
.catch(error => console.log(error));
```

TIP: For developer empathy, always use the word **response** as the argument for the first .then() callback function after a fetch call.

While we wait for the server to return our response, the rest of our application can continue executing other code. Once the Promise object is available, our first `.then()` block will fire to consume the Promise. The response object contains extra information that we don't necessarily need. All we want in this example is a JSON object (projectsData) which we can get by calling `response.json()`.

Converting the body to a JSON data structure with `response.json()` actually returns *another* promise. Converting the data to a particular type can take *significant time*, which is why we have this additional promise step before we can begin working with our data. Because we get another promise object back, we can simply chain an additional `.then()` block where we actually receive our project data. We can then render it to the DOM with our `renderDetailsForProjects()` function. If for any reason the request failed, the `.catch()` block will be fired and we will log the error to the console.

### Why Use Promises?

Promises provide a cleaner and more standardized method of dealing with tasks that need to happen in sequence. (For example, we couldn't have possibly called `renderDetailsForProjects()` until we actually received the projects data from `getProjectsForStudents()`). With Promises, we have more control over what happens with the outcomes of our async processes than we would have using callback functions.

#### Methods on Promises

Promise.all() - Takes an argument of an array of promises, then returns a single promise that can be resolved with .then(). The resolved value of the returned promise is an array of resolved values in the same order as the argument.  If one of the single promises in the array argument is rejected, the entire return value is rejected.  Use case: A nested fetch when you do not want the user to do anything until all of the values are returned from Promise.all()

Other methods on Promises:

Promise.prototype.catch() - 

Promise.prototype.then() - 

Promise.prototype.finally() - Use case: stop a spinner...

Promise.race() -  Use case: fetch call to 3 sources for the same data and just use the data that is returned first

Promise.reject() - Returns a promise object with a reject reason.  Use case: You can reject to a certain value.

Promise.resolve() - Return a promise that is resolved. Use case: You can resolve to a certain value.

### Advantages of Promises

So besides the obvious syntactical benefits, what are some of the advantages of promises?

- You receive a Promise that you hold on to rather than giving your code away as you would with callbacks.
- Error handling is less broken, though not a silver bullet. Synchronous functions either `return` or throw an error. In a similar vein, Promises will either become *resolved* to a value or become *rejected* with an error.
- You can catch errors along the way and deal with them in a way that is *similar* to synchronous code.
- Chaining promises is easy and does not result in callback hell.

The methods on Promises are also advantages:

- `Promise.all` takes an array of promises and waits until all of the promises are resolved. This solves the nastiness involved in doing this with callbacks.
- `Promise.race` takes an array of promises and resolves as soon as any one of them fulfill. This would allow you to hit 3 API endpoints and then move on when we heard back from whichever one came back first.

### When to use Promises
Use cases for Promises - when you must receive a promise from a web API that you didn't write; one in which the author chose to use promises. Here's the same example from above, except using the `fetch` API:

```js
fetch('/api/students.json')
 .then(response => response.json())
 .then(students => getProjectsForStudents(students))
 .then(projects => getGradesForProjects(projects))
 .then(grades => doSomethingImportantWithAllThisData(grades))
 .catch(error => console.log('error'));
```

When you read the documentation for a library that uses promises, one of the first sentences will likely say 'this is a promise-based library'. There are some APIs that still use callbacks rather than promises (the `geolocation` API, for example). You'll want to read the documentation closely to see if the library expects you to use a promise or callback. So for once, we don't really have to be in charge of making a decision here -- we can let the tools and technologies we're using dictate whether or not we should be using promises.

### ES7 async/await

Inside a function marked as async, you are expected to place the await...

`async` before a function means the function will return a Promise.  `await` makes JS wait until that promise settles and returns that result.  async/await syntax is considered more elegant than .then().  async/await also works with class methods, promise.all(), and try/catch().

ES7 introduced the async/await pattern for resolving Promises. Under the hood, the same thing is
still happening, but the new syntax keeps us from having to chain .then() methods together. Here's the same example from above, inside a React lifecycle method, using the new async/await syntax.

```js
async componentDidMount() {
  const response = await fetch('/api/students.json')
  const students = await response.json()
  const projects = await getProjectsForStudents(students)
  const grades = await getGradesForProjects(projects)
  await doSomethingImportantWithAllThisData(grades)
}
```

```js
const fetchGitHubUser = async (handle) =>{
  const url = `https: //api.github.com/user/${handle}`
  try {                                     //not specific to async/await but if anything inside the try throws an error, what is in the try stops executing and the catch will excecute
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.name)
    console.log(data.location)
  } catch (error) {
    cosole.log(error)
  }
}
```

### Things to remember about *async/await*:

*The word *async* before a function means that function *ALWAYS RETURNS A PROMISE*
*The keyword *await* makes JavaScript wait until that promise settles and returns that result.  You can not use the await keyword in a function that has not been declared *async*.
*Error handling with async/await is best accomplished with try...catch statements

### Exercise 

Setup for the promise workshop in which we build a front end website.

### The Callback Pattern

*Note: Going forward, it is best to use the `fetch` API for making network requests. Using `getJSON` in the examples below is to demonstrate the difference between a callback implementation and promise implementation. `fetch` can only be used with Promises and is steadily becoming the industry standard.*

What is the convention in client-side JavaScript that is called the **callback pattern**??

The callback pattern, in short, is when you pass a function as an argument to another function to be executed later.  This pattern has historically been wildly popular because it's easy to implement. But it has a few problems:

* You're giving away your code to be executed later.
* You can hope the callback execution will be when you expect and as many times as you expect, but there is uncertainty due to the asynchronous behavior.
* Doing things like executing callbacks in parallel and waiting for all of them to come back is an opportunity for unintended results.
* Callback Hell can occur from callbacks in series such that one callback hands its data to the next callback which hands its data to the next callback, etc. 
* Error handling is inherently broken, though there are work-arounds:
  - Pass two callbacks — one for a successful outcome and one for an unsuccessful outcome.
  - Use the Node.js "error-first" style of callbacks where the first argument is always an error object, which is typically set to `null` in the event that we reached a successful outcome. This is incredibly pessimistic.

Let's look at more intricate examples of the callback pattern. Using jQuery's `getJSON` method, (which can be written with callbacks *or* promises), we could make a network request that takes three arguments. The first is the endpoint we want to hit, the second is our success callback and the third is our error callback:

```js
$.getJSON('/api/v1/students.json', (students) => {
  console.log(students);
}, (error) => {
  console.error(error);
});

// No access to students in this context.
```

In the function above, we need to do everything with `students` right then and there. We can't give ourselves access to `students` outside of that success handler. 

When re-written as a promise, we could access students from anywhere and perform multiple actions on the data when it returns by leveraging `.then()`:

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

This is what we refer to as callback hell. The code becomes deeply nested and difficult to follow. Without comments, it's not clear which error callbacks are associated with which operation, and there is a lot of repeat code. When re-written using promises, we can consolidate and flatten a lot of this syntax:

```js
$.getJSON('/api/students.json')
 .then(students => getProjectsForStudents(students))
 .then(projects => getGradesForProjects(projects))
 .then(grades => doSomethingImportantWithAllThisData(grades))
 .catch(error => console.log('error'));
```

This reads a lot better than that callback example, right? If you came back to this code in a few weeks or months, you'd probably still be able to understand the general idea of what it does.


### Further Learning: the Promise Object

Unless you're making a library or creating an abstraction over something complicated, you're likely to consume promises more than you create them. The syntax can look squirrelly, but if we pull it apart, it's not that bad. If you open up the console in your browser dev tools, you can actually create your own Promise object and inspect its inner workings:

```js
let foo = new Promise();
```

Done. Well, not quite. We also need to give it the mechanics for how it should handle fulfillment or rejection. So, we hand the `Promise` constructor a function that will dictate how we figure this all out.

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

## Extra References

- [Promise It Wont Hurt Workshop](https://github.com/stevekane/promise-it-wont-hurt)  
- ["You're Missing the Point of Promises" by Domenic Denicola](https://gist.github.com/domenic/3889970)

