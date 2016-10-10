---
title: Introduction to Javascript, Part 2: DOM Manipulation with JavaScript
length: 180
tags: javascript, dom, browser
---

## Learning Goals

* Continue to learn how to access and use the Chrome Developer Tools
* Continue to develop a basic understanding for JavaScript syntax
* Understand how to query and update a page after its been loaded

## Review

Before we get into DOM Manipulation, let's go over over what we've learned so far.

- What are the three basic data types in Javascript?
- How do we write a variable and why would we use one?
- How do you add a value to an array?
- How do you write a function?
- How do you call a function?

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

The real power of using JavaScript to change pages emerges when we start listening for user events.

This is the crux of front-end engineering. We present a user interface and then as the user interacts with the UI, we change and update what he or she sees.

Let's take a look at the syntax and then we'll talk about what's happening.

<p data-height="300" data-theme-id="23788" data-slug-hash="qNjyAg" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/qNjyAg/">A First Event Listener</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

1. We're querying for all of the elements we need and we're storing them in variables.
2. We're adding an event listener to the `<button>` with the class of `.change-text`.
3. We're passing `addEventListener()` two arguments:
  - The type of event we're interested in a listening for.
  - A function that should be called whenever that event happens.

### Pair Practice

1. Take the JavaScript that you wrote during the previous pair practice session.
2. Add a `<button>` to the HTML markup of the page.
3. Add an event listener to that button.
4. When the button is clicked, all of your JavaScript from the previous session should execute.

#### Extensions

Here is [MDN's master list of DOM events][events-mdn]. Most of them are rare birds. Can you add additional events to the page?

If that list overwhelms you, here is a artisinal, hand-crafted list:

- `mouseenter`
- `mouseleave`
- `dblclick`
- `keydown`
- `keyup`

[events-mdn]: https://developer.mozilla.org/en-US/docs/Web/Events

## Changing Styles Programmatically

We can also modify the CSS styling of any element on the page using JavaScript.

There are three approaches:

1. We can directly manipulate the style of the element.
2. We can add or remove classes from the element.
3. You can modify the stylesheet itself with JavaScript.

We're only going to talk about the first two, unless you ask real nicely (and we have time).

Consider the following:

<p data-height="300" data-theme-id="23788" data-slug-hash="grRjXA" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/grRjXA/">CSS Manipulation with JavaScript</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Pair Practice

1. Add a button that changes the width of the box to 400px.
2. Add a button that removes the border class from the box. (Hint: the method is called `remove` instead of `add`.)

### Getting User Input from Forms

<p data-height="300" data-theme-id="23788" data-slug-hash="akwjjr" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/akwjjr/">Color Box</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Pair Practice

1. Add an input field with the `id` of "very-important-message" along with a button. When the user clicks on the button, it should set the `innerText` of the box to contents of the input field.
2. Add two inputs one for a CSS property and one for a value. When the user clicks the button, it should adjust that property on the box.

Here is an example of the second task:

![Custom CSS Color Box](https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/custom-css-modifier.gif)
