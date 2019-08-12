---
title: "Intro to CSS: Pre-Work"
length: 30
tags: css, syntax, prework
---

## What is CSS?

CSS a “style sheet language” that lets you style the HTML elements on your page. CSS works _with_ HTML, but isn't HTML. CSS controls the positioning, sizing, colors, and specific fonts on your page.

## Three Ways to Implement CSS

In your capstone and other work, you may have read about multiple ways to implement CSS.

They are:
1. Inline CSS
2. Internal CSS
3. External CSS

Modern applications utilize **External CSS**, as we will during your time at Turing. An External StyleSheet is when we have a CSS file (ends with the file extension `.css`) that is linked to the HTML document. It's good to have a little background on the other two methods as you may occasionally come across examples in documentation or Stack Overflow (SO) posts. You can read up on them [here](https://www.freecodecamp.org/news/get-started-with-css-in-5-minutes-e0804813fc3e/).

## Syntax & Style

There can be broad variations in how an external CSS file looks, but still do the same thing. As developers, half of the challenge of our job is to **make sure code is readable and maintainable** - by others and future you. This is why clean and consistent syntax and style is essential to your practice. Building the habit of taking the time to write clean code is a huge part of your work in Module 1.

Take a few minutes to familiarize yourself with the [Turing CSS Style Guide](https://github.com/turingschool-examples/css). You will be expected to meet the requirements in it throughout your time here.

## Commonly Used Properties

Go to either [MDN Web Docs](https://developer.mozilla.org/en-US/) or [CSS Tricks](https://css-tricks.com/) and make sure you are familiar with the following CSS properties, and some of the possible values that could be provided each one.

- background-color
- border
- border-radius
- box-shadow
- color
- cursor
- font-family
- font-size
- height
- opacity
- width

## Selectors: Classes and IDs

HTML elements can be referenced in the External CSS file in multiple ways. The most straightforward method is by referencing the element itself:

```html
<h1>Hello, World!</h1>
```

```css
h1 {
  color: magenta;
}
```

However, this can create problems when a page has multiple elements from the same tag, but we want to style those elements differently.

There is a `class` and `id` attribute available to use on __every__ HTML element. These attributes allow you to create "targets" that are more specific than elements. They are hooks that you can use to manipulate the look and behavior of your HTML elements.

### Classes

An element can have zero, one, or more than one classes. A class can be used on multiple elements. Utilizing classes can help us write cleaner and more DRY (don't repeat yourself) CSS. Here's an example:

```html
<h1 class="pink">Hello, World!</h1>
<p>This is an orange paragraph</p>
<p class="green">This is a green paragraph</p>
<p class="pink">This is a pink paragraph</p>
<p class="green">This is a green paragraph</p>
<p>This is an orange paragraph</p>
<p>This is an orange paragraph</p>
```

```css
p {
  background-color: orange;
}

.pink {
  background-color: pink;
}

.green {
  background-color: green;
}
```

In the examples above, all `p` elements are instructed to have a `background-color` of orange. But, all elements with the class of `pink` and `green` are instructed to have a `background-color` of pink and green, respectively. Utilizing a class helped us accomplish two things:

- Have a general rule that applies to most paragraphs
- Have a more specific rule for those noted with a specific class
- Only write the rule for a pink or green background color _once_

**Note the syntax:** to target an element by class, we preface the class name with a dot, `.`, in the CSS selector.

### IDs

IDs help us accomplish a similar goal as classes do. The difference is that IDs should only be used once. The names `class` and `ID` can help you remember:
- A class of students has a code like `1908`. All students share a piece of information that applies to them.
- An individual student has a personal ID number, like a drivers license or SSN, etc. that is unique to them.

```html
<h1>Hello, World!</h1>
<p id="orange">This is an orange paragraph</p>
<p>This is a plain paragraph</p>
<p>This is a plain paragraph</p>
```

```css
#orange {
  color: orange;
}
```

**Note the syntax:** to target an element by class, we preface the class name with a octothorp/pound/hashtag, `#`, in the CSS selector.
