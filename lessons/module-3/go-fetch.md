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

Take a few minutes to get your app set up to make a fetch to this API and display the data on the page! If you're really stuck, you can see a solution [here](./assets/images/go-fetch/basic-setup.png)


## Breaking Down Fetch
Our goal today is to make our own version of `fetch` that will give us back a piece of life advice as if we were actually making a request to the Advice API.

But why are we doing this? When we start discussing async testing, there are going to be situations where we will need to `mock out` certain functionality that we didn't write ourselves (such as the fetch API) in order to get our tests to work correctly. This is our first dive into breaking down one of these methods and trying to make a workable version on our own!

### Step 1 - Reassigning Fetch
`fetch` is a method that is given to us on the Window object and allows us to utilize the Fetch API to make network requests.

If we break this down, `fetch` is a method (or function) to will return us some data that we can use later in our app. So to get things rolling, we need to reassign fetch to be a function!

```js
  window.fetch = () => {}
```

### Step 2 - What does `fetch` return?
