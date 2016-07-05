---
title: DOM Manipulation with JavaScript
length: 120
tags: javascript, dom, browser
---

## Learning Goals

* Continue to learn how to access and use the Chrome Developer Tools
* Continue to develop a basic understanding for JavaScript syntax
* Understand how to query and update a page after its been loaded

## The Document Object Model (DOM)

The browser gives us some useful global objects for free. The `window` object is the global object and it holds a lot of information about the browser window including it's current location (URL), size, etc. `document` contains a representation of the current web page.

`document` contains a bunch of methods that allow us to query the DOM. Let's talk about two commonly used methods.

```js
document.querySelector();
document.querySelectorAll();
```

Both methods take a query selector—like you would use in CSS. `document.querySelector()` returns the first element that matches the query. `document.querySelectorAll()` returns a collection all of the elements that match the query.

Let's say we have a page with the following markup:

<p data-height="300" data-theme-id="23788" data-slug-hash="WxOKwo" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/WxOKwo/">Simple HTML Page</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Let's try out some queries:

* `document.querySelectorAll('p')` will return a collection of all of the paragraphs.
* `document.querySelector('p')` will return just the first paragraph.
* `document.querySelectorAll('.awesome')` will return the two paragraphs with the class `awesome`.
* `document.querySelectorAll('#third')` will return the paragraph with the id `third`.

Let's say we wanted to change the contents of our `<h1>` element. We could modify it's contents with the following JavaScript.

```js
document.querySelector('h1').innerText = 'JavaScript is amazing!';
```

<p data-height="300" data-theme-id="23788" data-slug-hash="kXwjbv" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/kXwjbv/">Simple HTML Page (Now with JavaScript!)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The DOM has been updated to the following:

```html
<h1>JavaScript is amazing!</h1>

<p>The is the first paragraph.</p>
<p class="awesome">The is the second paragraph.</p>
<p id="third" class="awesome">The is the third paragraph.</p>
```

### Pair Practice

Visit the [this page][codepen] and fork the CodePen.

<p data-height="300" data-theme-id="23788" data-slug-hash="GqEBqg" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/GqEBqg/">HTML Report Card</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

[codepen]: http://codepen.io/team/turing/pen/GqEBqg

#### Beginning

* Find the element with the `id` of `status` and change the message to something warm and uplifting.
* Find the `h1` tag and change the header to "A Stellar Record of My Performance".
* Change all of the elements with a class of `student` to your name.

#### Intermediate

* Find all of the elements with the class of `grade`. Iterate through all of them and change their content to "A+"s.
* Can you create a function that takes an HTML element as an argument and capitalizes its contents?

#### Challenging

* Select an element and set `contentEditable` to true. Now, click on the element. What happened?
* Take a look at the [MDN documentation for DOM events][mdndom]. Can you bind a function to the click event of the element?

[mdndom]: https://developer.mozilla.org/en-US/docs/Web/API/Event

## Adding Event Listeners

Changing stuff on the page with JavaScript is all well and good, but if you might as well have just written it in the markup to begin with. The real power of JavaScript comes into play when we write code that responds to user input.

The real power of using jQuery to change pages emerges when we start listening for user events.

This is the crux of front-end engineering. We present a user interface and then as the user interacts with the UI, we change and update what he or she sees.

Let's take a look at the syntax and then we'll talk about what's happening.

<p data-height="300" data-theme-id="23788" data-slug-hash="qNjyAg" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/qNjyAg/">A First Event Listener</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

1. We're querying for tall of the elements we need and we're storing them in variables.
2. We're adding an event listener to the `<button>` with the class of `.change-me`.
3. We're passing `addEventListener()` two arguments:
  - The type of event we're interested in a listening for.
  - A function that should be called whenever that event happens.



## Changing Styles Programmatically
