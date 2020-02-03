---
title: DOM Manipulation II
length: 60
tags: javascript, dom, browser
---

## Learning Goals

* Learn how to utilize `document.querySelectorAll()` and utilize our knowledge of iteration

## document.querySelectorAll();

 `document.querySelectorAll()` returns a collection of all the elements that match the query.

This collection is an array-like structure of nodes (or elements) that meet the query we passed through to the `document.querySelectorAll()` method!

However, in order to do anything to the elements within this collection, we need to iterate through each element to perform the same action, one element at a time. The easiest way to accomplish this is our good pal `for loop`!

<section class="note">
### Note

We are intentionally using the `for loop` throughout this lesson. If at a later point, you want to use an array prototype method on the return value of your `document.querySelectorAll()` method, you will need to do some additional work in order to get the expected behavior.
</section>

Let's say we have a page with the following markup:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="KKKMeVx" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Simple HTML Page">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/KKKMeVx">
  Simple HTML Page</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Let's try out some queries:

* `document.querySelectorAll('p')` will return a collection containing all of the paragraphs.
* `document.querySelectorAll('.awesome')` will return a collection containing the two paragraphs with the class `awesome`.

### Updating our HTML

Now, let's say we want to update the text of all of the `awesome` paragraphs. If we try the following, it won't work:

```js
var awesomeParas = document.querySelectorAll('.awesome');
awesomeParas.innerText = 'This is so awesome!';
```

That's because `document.querySelectorAll()` returns a list of potentially many elements. Even if there only was one match it would be in a NodeList. We need to iterate over the NodeList and change elements one at a time using a `for loop`! So to get this working, we would need to do the following:

```js
var awesomeParas = document.querySelectorAll('.awesome');

for (var i = 0; i < awesomeParas.length; i++) {
  awesomeParas[i].innerText = 'This is so awesome!'
}
```

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="ExxyRPq" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Simple HTML Page (Now with JavaScript!)">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/ExxyRPq">
  Simple HTML Page (Now with JavaScript!)</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<section class="call-to-action">
### Your Turn

Grab all of the paragraphs and change their `innerText` to a message of your choice.

Finished? Refactor so this happens within a function and then invoking the function.
</section>

### Pair Practice

The following pair practice will require you to use your knowledge of creating functions, assigning event listeners, and utilizing what we learned about `document.querySelectorAll()` to achieve the functionality outlined below!

Visit <a href="https://codepen.io/eric_turing/pen/QWLNaVE" target="blank">this page</a> and fork the CodePen.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="vYYKrGy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Report Card">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/vYYKrGy">
  HTML Report Card</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<section class="call-to-action">
### Pair Practice

In the CodePen above that you forked:

* Add a button called `Change Name`. Find all of the elements with a class of `student` and change them to **your** name when the button is clicked!
* Add a button called `Change Grades`. Find all of the elements with the class of `grade`. Iterate through all of them and change their content to `A+`s when the button is clicked.
</section>
