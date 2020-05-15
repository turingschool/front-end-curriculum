---
title: Async Await
length: 3 hours
module: 3
tags: javascript, asynchronous
---

## Objective

To understand why asynchronous code is difficult to work with and experience some remedies that exist in the JavaScript world.

<section class="call-to-action">
### Why Is Asynchronous Code Hard?

What about asynchronous code is different from how we interact with synchronous code? Why is asynchronous code difficult to work with?

<!-- synchronous code is much easier to read and predict -->
<!-- timing of asynchronous code is difficult to understand -->
<!-- Error handling is tricky because you don't know when to check for certain conditions to be met before moving on to the next piece of code -->
</section>

<section class="call-to-action">
### Thinking About It With Code

Why can’t we do something like this? Given that we might expect to `console.log()` the data from the body of the response.

```js
const response = fetch(someURL);
const data = response.json();
console.log(data);
```

What order will things log in here:
```js
function doSomeAsyncStuff () {
  console.log(1)
fetch('https://api.adviceslip.com/advice')
  .then(() => {
    console.log(2)
  })
console.log(3)
}

doSomeAsyncStuff();
```
</section>

Sometimes we want our code to be more synchronous like this, but asynchronous JavaScript doesn’t really work like this. We cannot expect to know when the data from the `fetch` call will come back.

Wouldn't it be nice if we could write our asynchronous code synchronously like above??

### Async Await

Bring in `async await`. These are two keywords given to us in the JavaScript language. They are not special to React or special to `fetch`. They're found in the base JavaScript language.

<section class="call-to-action">
### Do Some Research

Head to [this doc page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) to learn more about `async` and `await`. Some key questions to think about for each keyword:

* Where is it used?
* Why is it used?
* Specifically for `async`, what does an `async` function return?
<!-- An async function always returns a promise! with the resolved value being whatever is returned from the function -->

After some time looking through the docs, talk with a partner about what you found for both `async` and `await`.
</section>

Now that we have some structure to what the `async` and `await` keywords are used for, let's put it into practice.

<section class="call-to-action">
### Async Await in Practice

Your goal is to make a function, let's call it `getSomeAdvice`, and it should behave like this:

```js
getSomeAdvice().then(advice => console.log(advice));
```

Within `getSomeAdvice`, utilize `async` and `await` to retrieve advice from [this API](https://api.adviceslip.com/), and do not use any `then()` chaining.
</section>

<section class="answer">
### Working With Async Await

```js
const getSomeAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data.advice.slip;
};

getSomeAdvice().then(data => console.log(data)).catch(err => console.error(err));
```
</section>

## Error Handling (Exception Handling)

What have we lost in this process? What happens if `const response = await fetch('https://api.adviceslip.com/advice');` fails?Our code will just carry on thinking everything is ok.

Exception handling is all about what we do when things go wrong. With `async` and `await`, one option we have for exception handling is `try` and `catch`.

The `try` and `catch` blocks are built into JavaScript, and are not _only_ used for asynchronous code like we've seen in this lesson. They can be used in conjunction for scenarios when our code doesn't do what we expect.

What about error handling? Where did the catch go?? `try catch`

<section class="call-to-action">
### Integrate Try Catch

Using [this doc page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) as guidance, how can you integrate `try` and `catch` into the code from the exercise above to catch an error like: fetching to the URL where we are missing a character (`let response = await fetch('https://api.adviceslip.com/avice');`)?
</section>

<section class="answer">
### Error Handling a 404

```js
const getSomeAdvice = async () => {
  try {
    // Path is missing 'd' in 'advice'
    let response = await fetch('https://api.adviceslip.com/avice');
    if(!response.ok) {
      console.log(response.status);
      throw new Error('Weird error');
    }
    let data = await response.json();
    return data.advice.slip;
  }
  catch (e) {
    console.log(e.message);
  }
};

getSomeAdvice().then(data => console.log(data)).catch(err => console.error(err));
```
</section>

To review some key parts of the solution above, what is the `response` object? What does `response.status` and `response.ok` tell us about a network request response?

What does "throwing" and `Error` mean for `try` and `catch`?

<section class="checks-for-understanding">
### Before We Go

What are the potential downsides of using `async` and `await`? How could it impact our code in a negative way?

<!-- If there are multiple requests called in a row with async await, then each request needs to wait to complete before -->
<!-- it can move on to the next request, even if they do not depend on each other -->
<!-- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#The_downsides_of_asyncawait -->
</section>
