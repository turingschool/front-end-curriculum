---
title: DOM Manipulation II
length: 180
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
If you want to use an array prototype method on the return value of your `document.querySelectorAll()` method, you will need to convert the return value into an array using `Array.from()`. **If this makes no sense to you, that's OK!**  
</section>



Let's say we have a page with the following markup:

<p data-height="300" data-theme-id="23788" data-slug-hash="WxOKwo" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/WxOKwo/">Simple HTML Page</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Let's try out some queries:

* `document.querySelectorAll('p')` will return a collection containing all of the paragraphs.
* `document.querySelectorAll('.awesome')` will return a collection containing the two paragraphs with the class `awesome`.

### Updating our HTML

Now, let's say we want to update the text of all of the `awesome` paragraphs. If we try the following, it won't work:

```js
var awesomeParas = document.querySelectorAll('.awesome');
awesomeParas.innerText = 'This is friggin awesome!';
```

That's because `document.querySelectorAll()` returns an array! We need to iterate over the array and change elements one at a time using a `for loop`! So to get this working, we would need to do the following:

```js
var awesomeParas = document.querySelectorAll('.awesome');

for (var i = 0; i < awesomeParas.length; i++) {
  awesomeParas[i].innerText = 'This is friggin awesome!'
}
```

<p data-height="300" data-theme-id="23788" data-slug-hash="kXwjbv" data-default-tab="js,result" data-user="turing" data-embed-version="2" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/kXwjbv/">Simple HTML Page (Now with JavaScript!)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<section class="call-to-action">
### Your Turn
* Grab all of the paragraphs and change their innerText to a message of your choice. Bonus points for doing this within a function and then invoking the function.
</section>

### Pair Practice
The following pair practice will require you to use your knowledge of creating functions, assigning event listeners, and utilizing what we learned about `document.querySelectorAll()` to acheive the functionality outlined below!

Visit <a href="https://codepen.io/eric_turing/pen/QWLNaVE" target="_blank">this page</a> and fork the CodePen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="eric_turing" data-slug-hash="QWLNaVE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Report Card">
  <span>See the Pen <a href="https://codepen.io/eric_turing/pen/QWLNaVE/">
  HTML Report Card</a> by eric weissman (<a href="https://codepen.io/eric_turing">@eric_turing</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<section class="call-to-action">

* Add a button called `Change Name`. Find all of the elements with a class of `student` and change them to your name when the button is clicked!
* Add a button called `Change Grades`. Find all of the elements with the class of `grade`. Iterate through all of them and change their content to `A+`s when the button is clicked.
