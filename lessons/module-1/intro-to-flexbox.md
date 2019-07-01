---
title: Intro to CSS
length: 60
tags: css, flexbox, layout
---

## Learning Goals

* Explain the difference between a parent and child element, be able to identify direct children
* Apply Flexbox to containers in order to achieve a desired layout

## Prep

Students should read the first portion of the lesson (all sections marked with ✅), until you see the Stop Signs (🛑).

## Vocabulary ✅

* parent
* child
* container
* item
* Flexbox
* property
* value

## What is FlexBox? ✅

Flexbox is a part of CSS that provides a more efficient way to lay out, align and distribute space among items in a container. It helps us when we have those silly block elements, that even with display: inline-block, can be hard to do just what we want them to do.

## Parents and Children ✅

As we start working with Flexbox, a very important distinction should be pointed out. We need to be careful about the CSS rules we apply to a parent element vs. those to a child element. A **parent** element wraps other elements, a **child** is nested inside the parent.

Let's look an some HTML to make sure we are all on the same page:

```html
<section>
  <article></article>
  <article></article>
  <article></article>
</section>
```

In the code above, the `section` is the parent element, and the 3 `article`s are all children elements because they are directly nested inside of that `section`. Let's looks at one more example:

```html
<section>
  <article>
    <h2>Title of Article 1</h2>
  </article>
  <article>
    <h2>Title of Article 2</h2>
  </article>
  <article>
    <h2>Title of Article 3</h2>
  </article>
</section>
```

In the code above, we now have these `h2` elements nested inside of the `article`s. It's important to know that `h2` is **not** a direct child of the `section`. It is technically a grandchild, and a child of `article`. The idea of **direct child** is really important to understand as we work with Flexbox.

When we use Flexbox, we will make the parent elements `flex containers` and the children elements `flex items`. There isn't really a difference between the two, but you'll need to know that vocabulary to successfully navigate documentation.

<img class="small" src="./assets/images/flexbox/parent-container.svg" alt="graphic of parent/container">
<img class="small" src="./assets/images/flexbox/child-item.svg" alt="graphic of child/item">
(Graphics from <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS Tricks</a>)

<div class="turn-and-talk">
  <h3>Explore Flexbox ✅</h3>
  <p>Fork <a href="https://codepen.io/ameseee/pen/PrQObO">this</a> CodePen to your account. One-by-one, uncomment lines 3, 4, 12, 13, and 14. Take note of what impact each "uncomment" has. Identify the containers and items each time Flexbox is used. After you make predictions about what each declaration does, read up on them on <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks</a>. Do <strong>not</strong> read about every single thing on the page; use <code>cmd + f</code> to search for specific properties!</p>
</div>


🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑
