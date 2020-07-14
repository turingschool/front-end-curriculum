---
title: DOM Manipulation II
length: 60
tags: javascript, dom, browser
---

## Learning Goals

* Learn how to utilize `document.querySelectorAll()` and utilize our knowledge of iteration
* Understand the Data Model as your single source of truth for managing the data of your website

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

### The Data Model and the DOM

A **Data Model** is a tool to both hold and organize your data. As you are developing, it is a good practice to keep your website data contained in one model. There are many benefits to encapsulating your data but the most important one is this: **There is only one Source of Truth in your program**. 

When a user starts interacting with your website, they are going to create and change data. Say a user makes an account - your website is going to store information about their account, like their username, their first and last names, the date and time they created their account. You will reference that data throughout your website. Like the report card, we had two places that referenced student name. If the student name is changed, only **one** piece of data should be changed.

When you start storing data in multiple places on your website, that data can very easily become outdated. If I forget to change BOTH instances of my student name, then one of those instances will be wrong. This is why you should store all of your data in a **data model**, or a structure that encapsulates your data. 

<section class="note">
### Note

The **DOM** is **NOT** the place to store your data. The information the **DOM** displays should be based off of your **data model**.
</section>

Take a look at this code pen to see how the Report Card is generated using a data model. In this instance, the object `studentReportCard` is the data model. See how the HTML holds placeholder text that is being replaced with my student's data in the javascript.

Visit <a href="https://codepen.io/turing-school/pen/QWbVRKr" target="blank">this page</a> and fork the CodePen.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="QWbVRKr" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Report Card with a Data Model">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/QWbVRKr">
  HTML Report Card with a Data Model</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
