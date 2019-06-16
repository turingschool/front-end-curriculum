---
title: HTML I - Forms & Tables
length: 60
tags: html, introduction, practice
---

## Learning Goals

* Create semantic forms including labels, inputs, and buttons
* Use documentation to learn how to implement new (to you!) HTML elements

# Forms

So far, we've done an excellent job of displaying information to the user, but we haven't really asked them for their input. HTML also includes a set of elements for building forms. Forms are an important part of a website. They allow users to send data to the web site. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own.

### Form Basics: Inputs and Buttons

There is a lot to forms that we'll go more into depth with in a moment, but to start we'll focus on two elements:

- `<input>` creates an input field. `<input>` is like `<img>` in that it does not require or support a closing tag. It can take an optional `type` attribute that helps validate user input in some browsers ([click here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) to find out more).
- `<button>` creates a button. `<button>` on the other hand does support a closing tag.

<p data-height="300" data-theme-id="23788" data-slug-hash="MeaMEr" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Inputs and Buttons" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/MeaMEr/">Inputs and Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Forms: Next Level

Basic input and button elements are a great starting point, but to build a truly usable form we need to use the following base elements:

* `form`
* `label`
* `input`
* `submit`

<p data-height="300" data-theme-id="26495" data-slug-hash="JbyeZM" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Super Basic HTML Form" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/JbyeZM/">Super Basic HTML Form</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Your Challenge

### Part One:

Partner up and answer the following questions:

* What is the attribute `for` indicate on the `label` element? Do you always have to use it? Why or why not?
* What are 5 values for the `type` attribute of an `input` element and how do they work?
* What is the significance of the `name` attribute in a form?
* What is a `fieldset` element?
* Why would a `legend` element be important?

### Part Two:

Fork the code below into your own CodePen, and then refactor as follows:

* Validate for email type
* Add a set of radio buttons with at least three options - only allowing one to be selected at a time
* Include placeholders for name, email, and message
* Add a drop down for favorite color with at least three options
* Use an input for submit instead of a button

<p data-height="458" data-theme-id="26495" data-slug-hash="Lbjgwy" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Basic HTML Form" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/Lbjgwy/">Basic HTML Form</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Additional Resources on Forms

* [MDN HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
* [MDN How to Structure an HTML Form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form)


## HTML Table Challenge

We've covered a lot of ground so far, but there's one element we haven't talked about yet: `<table>`

And -- surprise! -- we're not going to cover it together: you're going to test out your Googling skills!

Build the structure of these following layout. Only use HTML for this challenge. The goal is to focus on building the structure of your application.

### Create this table

You can use CodePen or create your own html file.

**Hint**: Research the [table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) in HTML

# ![Flags Table](/assets/images/flags-table.jpg)
