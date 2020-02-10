---
title: Go Fetch - Recreating Fetch
length: 3 hours
module: 3
---

## Learning Goals
* Break down the Fetch API to understand what we get back
* Create our own `fetch` that mimics how the Fetch API behaves

## Basic Setup
We are going to be working to recreate `fetch` from scratch! Let's use the following CodePen to have a basic starting point for our app. It's pretty simple - a button that gives us advice once we click it. Dope.

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="html,result" data-user="eric_turing" data-slug-hash="RwNPJXV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Go Fetch - Starter">
  <span>See the Pen <a href="https://codepen.io/eric_turing/pen/RwNPJXV">
  Go Fetch - Starter</a> by eric weissman (<a href="https://codepen.io/eric_turing">@eric_turing</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let's start by getting an event listener set up to listen for a click on the button. When we click the button, we want to make a fetch to the [Advice API](https://api.adviceslip.com/). Take a look at the documentation to see how we can get some random life advice!

Take a few minutes to get your app set up to make a fetch to this API and display the data on the page! If you're really stuck, you can see a solution below!

<section class="answer">
### Setup Solution
```html
<button type="button" name="button">Go Fetch</button>
<section id="advice-area">

</section>
```
```js
const button = document.querySelector('button');
button.addEventListener('click', getAdvice);

const getAdvice = () => {
  const advice = fetch('https://api.adviceslip.com/advice')
  .then(res => res.json())
  .then(advice => appendAdvice(advice))
}

const appendAdvice = advice => {
  document.querySelector('section').insertAdjacentHTML('afterend', `
  <h3>${advice.slip.advice}</h3>
  `)
}
```
</section>


## Breaking Down Fetch
Our goal today is to make our own version of `fetch` that will give us back a piece of life advice as if we were actually making a request to the Advice API.

But why are we doing this? When we start discussing async testing, there are going to be situations where we will need to `mock out` certain functionality that we didn't write ourselves (such as the fetch API) in order to get our tests to work correctly. This is our first dive into breaking down one of these methods and trying to make a workable version on our own!

### Step 1 - Reassigning Fetch
`fetch` is a method that is given to us on the Window object and allows us to utilize the Fetch API to make network requests.

If we break this down, `fetch` is a method (or function) to will return us some data that we can use later in our app. So to get things rolling, we need to reassign fetch to be a function!

<section class="answer">
### Reassigning Fetch
```js
  window.fetch = () => {}
```
</section>


### Step 2 - What does `fetch` return?
When we use the fetch API, we are making a network request to get data that we can use in our app. But as we know, it doesn't just come back all neatly packaged for us. So what DO we get back from a fetch request?

That's right... A PROMISE!

So how can we adjust our handmade `fetch` to handle this? Well for today, let's just worry about getting a Promise back that has been resolved (Happy Path).

<section class="answer">
### Mocking Fetch's Return
```js
  window.fetch = () => {
    return Promise.resolve({})
  }
```
</section>


Let's break down what's happening here...
* We are returning a Promise object from the `fetch`
* We are calling artificially creating a resolved Promise by using `.resolve()` on our Promise
* This will give us back a Promise of the resolved value, which in the case of `fetch`, returns us the Response object!

### Step 3 - Diving Into the Response Object
Think back to other network requests you have made. After we make our initial fetch, we are returned a Promise! This Promise returns us the `response object` which is why we typically name this `res` or `res` within our `.then()` block.

Have you actually taken a look at what the response object looks like? If not, let's open our console and check it out!

```js
  fetch('https://api.adviceslip.com/advice')
    .then(res => console.log(res))
```
Your response object should look something like this...

<img class="medium-large" src="./assets/images/go-fetch/response-object.png" />

There is a lot of data in the response object and we don't necessarily need to use all of it in our mocked out version of `fetch`.

We definitely want to include the `ok` property to convey that this Promise has resolved as expected. We can refactor our fetch to reflect this.

<section class="answer">
### Response Object Pt. 1
```js
window.fetch = () => {
	return Promise.resolve({
		ok: true,
	})
}
```
</section>


### Step 4 - Getting Data From the Response Object
Thinking back to our original fetch, what did we need to do to actually extract data from the Response object? We had to call `.json()` on the Response! Take a few minutes to review the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) on this method.

As outlined in the docs, `.json()` can ONLY be called on a Response object! We can't just be using this method all willy nilly in our codebase. It only works on a Response object!

As per the docs, the `.json()` method returns a Promise that resolves to a JS object that can be represented in JSON (including objects, arrays, etc.) But remember, we didn't write this method! But we can mock out the same functionality that would return us the data we want back!

But wait...

### Step 5 - What Data DO We Want Back?
In this case, we are trying to make a mocked out version of the fetch to the Advice API. So, let's open Postman to see what a response looks like when we hit the Advice API. It should look something like this...

```js
  {
    "slip": {
      "advice": "State the problem in words as clearly as possible.",
      "slip_id":"154"
    }
  }
```

Great! We don't necessarily care about all of this information, but we definitely want the advice so we can render it on the page!

Let's create a variable to hold this information and then we can use that when we want to keep building our `fetch`!

<section class="answer">
### Creating a Mock Response
</section>
```js
const mockResponse = {
  slip: {
    advice: 'State the problem in words as clearly as possible.'
  }
}
```

### Step 6 - Finishing Out Our Fetch!
So we know we need to mock out the `.json()` method of our Response object. When we call that in the real world, is parses the data and returns it to us in a format we can work in. We just created the data that we want back in our `mockResponse` - so, put it all together!

<section class="call-to-action">
Try to finish out our re-write of fetch! If it works correctly, your App should be able to render the same joke as you have in your `mockResponse`!

<section class="answer">
### Recreating Fetch Solution
```js
window.fetch = () => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResponse)
  })
}
```
</section>
</section>


### Wrapping Up
To review, we were able to make our own version of `fetch` that allowed us to simulate a major component of FE engineering that we didn't create ourselves!

This pattern of mocking out functionality we didn't write, especially that of `fetch`, will be a major benefit for us when we learn about asynchronous testing.

<section class="checks-for-understanding">
### Exit Ticket

Take a few minutes in your journal to answer the following questions:
* What “aha” moments did you have?
* Which concepts are the fuzziest for you right now?
* Which concepts are the clearest for you right now?
</section>
