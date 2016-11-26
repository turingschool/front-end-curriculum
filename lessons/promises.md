---
title: Making and Keeping Promises
module: 3
status: draft
---

<script async class="speakerdeck-embed" data-id="e59cedfdf3294f0bb0b1e29cd3e47ede" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## An Alternative to Callbacks

The callback pattern is wildly popular because it's easy to implement. But, it has a few problems:

- You're giving away your code to be executed later.
  - You can hope that this will be when you expect and as many times as you expect. But no promises (pun unintended, but I'm going with it).
  - You can store/cache the results anywhere. You get access to the data in that callback function and that's it. If you need that data again, you're going to have to make another request. Bummer.
  - Doing things like executing callbacks in parallel and waiting for all of them to come back is tricky.
  - Doing things in series where one callback hands its data to the next callback is also tricky. (This has the delightful nickname of "callback hell.")
  - Error handing is inherently broken. There are a bunch of clever ways around this:
    - Pass two callbacks—one for a successful outcome and one for an unsuccessful outcome.
    - Use the Node.js "error-first" style of callbacks where the first argument is always an error object, which is typically set to `null` in the event that we reached a successful outcome. This is incredibly pessimistic.

## Enter Promises

Let's get a common question out of the way first: "When am I going to use promises?"

The short answer: whenever you're handed a promise by an API you didn't write where the author chose to use promises. This includes many modern browser APIs such as `fetch`.

Okay, so what are some of the advantages of promises?

- You are getting an IOU that you're holding on to rather than giving your code away as you would with promises.
- Error handling is less broken. It's not a silver bullet. Synchronous functions either `return` or throw an error. In a similar vein, your promises will either become *fulfilled* by a value or become *rejected* with an error.
- You can catch errors along the way and deal with them in a way that is *similar* to synchronous code.
- Chaining promises is easy and does not result in callback hell.

But wait, there's more.

- `Promise.all` takes an array of promises and waits until all of the promises are resolved. This solves the nastiness involved in doing this with callbacks.
- `Promise.race` takes an array of promises and resolves as soon as any one of them fulfill. This would allow you to hit 3 API endpoints and then move on when we heard back from whichever one came back first.

jQuery is nice enough to support both callbacks and promises.

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

## Making Promises

Unless you're making a library or creating an abstraction over something complicated, you're likely to consume promises more than you create them. The syntax can look squirrelly, but if we pull it apart, it's not that bad.

```js
const promise = new Promise();
```

Done. Well, not quiet. We also need to give it the mechanics for how it should handle fulfillment or rejection. So, we hand the `Promise` constructor a function that will dictate how we figure this all out.

```js
const promise = new Promise(() => {});
```

Okay, here's where it gets a bit hectic, that function is going to be handed two arguments, which are both functions as well.

```js
const promise = new Promise((resolve, reject) => {});
```

As you can probably imagine when things go well, you should call the `resolve()` function. If things blow up, then you should use the `reject()` function.

```js
const promise = new Promise((resolve, reject) => {
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
