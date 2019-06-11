---
title: HTML I - Structure, Semantics, Forms
length: 180
tags: html, introduction, practice
---

## Learning Goals

* Understand what HTML stands for and it's purpose
* Learn about the HTML structure and how to incorporate semantic HTML elements
* Know how to utilize images, hyperlinks, and tables
* Understand what Developer Tools are and how can you use them
* Create semantic forms including labels, inputs, and buttons

## Vocabulary

- `HTML` HyperText Markup Language
- `CSS` Cascading Style Sheet
- `HTML Element` A building block that makes up the structure of a web page. Encompasses tags and content
- `HTML Tag` Used to create HTML elements. Some elements have an opening and closing tag, others only have an opening tag
- `Attribute` Additional values that configure HTML elements and adjust their behavior
- `Hyperlink` A reference to an external resource
- `Block` A block-level element occupies the entire width of its parent element (container), thereby creating a "block."
- `Inline` An inline-level element only occupies the space bounded by the tags defining the element, instead of breaking the flow of the content.

***

## Overview

The front-end of the web is based on three major technologies:

* __HTML aka "STRUCTURE"__:  HyperText Markup Language (HTML) defines the structure and semantics of web pages on the web.
* __CSS aka "PRESENTATION"__:  Cascading Style Sheets (CSS) sets the look and style of a web page. CSS provides style to the structure provided by HTML.
* __JavaScript aka "BEHAVIOR"__:  JavaScript allows us to define interaction in our pages. What happens when a user clicks on a certain area?

Today, we will build a foundation of HTML knowledge and skills.

***

## What is HTML?

HTML is used to create electronic documents (pages) that are displayed on the Web.  It was first developed by Tim Berners-Lee and released in 1990.  It was originally created to allow people to publish and exchange scientific documents.  This exchange was possible as a result of `hyperlinks` which allowed pages to have links to other documents.  However, because HTML was so accessible and had the potential to be used for other applications, it moved over to the mainstream in browsers like Netscape and Internet Explorer.  

HTML ensures the proper formatting of content (text, images, video) so that your internet browser can display them as intended.  As a result, HTML is made up of many elements.  These elements are used to hold our content and define how the browser must format and display the content. The term `markup` refers to the set of tags used to structure a page.

***

## Elements & Tags

Elements are created with either one or more tags and are used to describe and hold our content. These tags are created by using angle brackets `<>`.  Most elements consist of an opening and closing tag which wraps content like text.

Elements which are created with only one tag are called [empty elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element) (also known as self-closing elements) and cannot have any child elements. Examples of this are `<img>` and `<input>`.

Elements which can contain child elements are created with an opening and closing tag which surround the child elements and/or text content. `<h1>Text Content</h1>`

### Example

Let's say that we had some text and we wanted to denote that this text was a paragraph.

```
This is an example paragraph. We should probably place this inside of a tag. If we place it in a tag it will be easier to access and style.
```

We'd wrap the text in paragraph tags.

```html
<p>This is an example paragraph. We should probably place this inside of a tag. If we place it in a tag it will be easier to access and style.</p>
```

### Anatomy of a Tag

![Anatomy of an HTML Tag](/assets/images/html-tag.jpg)

We use `<p>` to signal to the browser that everything that's about to follow is part of a paragraph and `</p>` to let the browser know that this paragraph is done. When a user visits our application, the browser loads up the HTML and parses it into the elements that will eventually make up our user interface.

**Pro-Tip:** Type both opening and closing tags before typing content to avoid making silly mistakes that are hard to hunt down later.

Here is an example of a slightly more robust document:

<p data-height="300" data-theme-id="23788" data-slug-hash="VjvOyd" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Very Basic HTML Page" data-editable="true" class="codepen">
  See the Pen <a href="http://codepen.io/team/turing/pen/VjvOyd/">Very Basic HTML Page</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.
</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Turn and Talk:

* What makes an HTML element different than an HTML tag?
* What is the difference between a “regular” element and a self-closing, or empty element?
* What will the browser do if it doesn't see a closing tag for a given element?

***

## HTML Attributes

Any HTML element can have attributes. An attribute provides additional information about an element. It must be specified in the opening tag of an element, and usually come in name/value pairs. A `class` is a commonly used attribute:

```
<p class="paragraph"></p>
```

The name of the attribute in the example above is class, and the value is `"paragraph"`. The are separated by a single `=`, and no spaces.

Attribute names are determined for us by HTML; we must comply with the list of available names to use. The values are determined by us as developers. Different attributes are used for different purposes; we will explore some of those today, and continue learning the use-cases for others as we move into CSS and JavaScript.

## Images

We use HTML tags to mark up text to show its semantic meaning. The browser uses these tags to structure the document. As we talked about earlier in this lesson, _most_ tags have an opening and closing tag, but a few do not. For example, images defined using the `<img>` tag do not have a closing tag.

_Note: Elements which do not have closing tags and cannot have child elements are called [empty elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)_.

Consider the following:

```html
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/turing.png" alt="Turing Logo">
```

Our browser is more than happy to load up an image, but we need to tell it where that image is located. Our `<img>` tag needs extra information to know which image to display. That's where the `src` attribute comes in. The `alt` attribute provides alternative text in the case the user is not able to view the image.

![Anatomy of an HTML Tag](/assets/images/html-tag-anatomy.png)

Let's update our page with the image above.

<p data-height="471" data-theme-id="23788" data-slug-hash="XKmwqR" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A Page with an Image" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/XKmwqR/">A Page with an Image</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Hyperlinks

Another important tag is the `<a>` tag. These are the tags we use for creating hyperlinks. You might have noticed that the `<a>` tag behaves a little differently than the `<h1>`, `<h2>`, and `<p>` tags. We can use the `<a>` tag to mark up a few words, while the other tags denote a big section - let's call it a "block" — of our page.

Consider the following example:

```html
<p>
  Welcome to the <a href="http://turing.io">Turing School of Software and Design</a>.
</p>
```

In this case, the `<a>` tag needs to know which url it should be linked to. We use the `href` attribute to set the links destination. `href` is an abbreviation for "hypertext reference."

<p data-height="300" data-theme-id="23788" data-slug-hash="yJYdyb" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A Page with a Link" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/yJYdyb/">A Page with a Link</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Something to note, you will often see hyperlinks in a [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) element.  Many sites often have navigation links on their page, so it's important to keep the syntax of this in mind.  Take a look at an example below:

```html
<nav>
  <ul>
    <li><a href="home">Home</a></li>
    <li><a href="about">About</a></li>
    <li><a href="store">Store</a></li>
  </ul>
</nav>
```

## Turn & Talk

* What are HTML attributes?
* Which attributes have you seen be used before, and what was the purpose of each of those?

***

## Block and Inline Elements

You might notice that some tags behave a little differently in a layout than others. Some tags make content stack, while others let content sit next to each other. What's that about?

This is an important distinction:

- `Block elements` stack on top of each other. Each one starts and ends on its own line.
- `Inline elements` can be used to mark up a few words inside of a block element.

Most elements are block elements. Some common inline tags you might see in the wild:

- `<em>` is used to denote that you'd like to emphasize some text.
- `<strong>` is used to denote that this text is important.

We use `<em>` and `<strong>` to denote the semantic meaning of the content.

<p data-height="583" data-theme-id="23788" data-slug-hash="ezpwZe" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A Page with a Link" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/ezpwZe/">A Page with a Link</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

You may notice that the `<em>` tags are italicized and the `<strong>` tags are displayed in bold. The browser does this by default. That said, you should still only use these tags to convey meaning. We can change the way stuff looks later with CSS.

### `<span>` and `<div>`

All of the tags we discussed above have some kind of semantic meaning. Assistive technology devices will use them to help people with visual impairments understand the page. Search engines will use them to figure out the structure of your page. You should use semantic HTML tags whenever possible and appropriate.

Sometimes, however, you don't want a tag to have any meaning. Typically, this is when you just want to target a certain portion of the page with CSS or JavaScript and none of the semantic tags really apply.

<aside>
  <strong>Disclaimer</strong>: There are many, many more semantic tags than the ones we're discussing today.
</aside>

I like to think of `<span>` and `<div>` as the flavorless Jello of HTML tags, they don't have any meaning in and of themselves and they typically don't come with any built-in styling from the browser.

There is just one important difference between the two.

- `<div>` is a block element.
- `<span>` is an inline element.

We'll discuss these more in a later lesson when we talk about CSS.

### Turn & Talk

* What is the difference between block and inline elements?
* Are `<img>` elements block or inline? `<a>`? Explain and/or prove it.

## Nesting HTML Elements

Before we really start putting what we've learned into practice, it's important to be familiar with vocabulary and certain patterns. Specifically, around nested HTML elements.

As sites become more complex, more elements are used, and more are used in relation to each other. Let's take a look at this example below:

```html
<nav>
  <ul>
    <li><a href="home">Latte</a></li>
    <li><a href="about">Cappucino</a></li>
  </ul>
</nav>
<main>
  <section>
    <h2>Coffee Ipsum</h2>
    <p>Variety, half and half, trifecta medium arabica froth percolator. Mug brewed aromatic that sit to go latte. Cup, skinny cup, as blue mountain turkish, pumpkin spice.<p>
    </p>Pumpkin spice americano java coffee doppio and sweet mug java saucer variety aromatic. Flavour, cappuccino macchiato et at, latte french press cream rich con panna barista single origin.</p>
  </section>
</main>
```
The `<nav>` and `<main>` elements are on the same level - or sibling elements. We know this because they sit on the same indentation line, and they are not wrapped around one or another.

Nested inside the `<main>` element is a `<section>`. Nested inside the `<section>` is an `<h2>`, `<p>` and another `<p>`. We can communicate the same relationship by saying "the `<section>` is wrapped around the `<h2>` and both `<p>`s."

Because so much nesting occurs in HTML, it is absolutely essential that you write clean, easy-to-read code with consistent use of white-space and indentation.

***

## Thinking Bigger Picture

We've learned how to use some pieces of HTML, but it's important we can put them together to build a site. Two important considerations along these lines are:
- required HTML Elements
- planning the layout of a page

### Required Structure of any HTML Page

Every page that is built with HTML needs to have the following four elements to start:

* `<!DOCTYPE html>` declaration: The doctype declaration is not an HTML tag, but rather tells the browser which version of HTML the page is written in.  
  - [W3C DTD Docs](https://www.w3.org/QA/2002/04/valid-dtd-list.html)  
* `<html></html>` tag wraps the entire document
* `<head></head>` tag wraps elements that shouldn't be rendered - information about the page and how to process it
* `<body></body>` tag wraps elements that should be displayed - the actual content that will appear in the browser

<p data-height="300" data-theme-id="23788" data-slug-hash="gLxjjy" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A complete but small document" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/gLxjjy/">A complete but small document</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Layout Structure

As front-end developers, you'll use HTML to build layouts given to you by a designer or client. It's an interesting challenge that can seem overly simple, but how you structure your HTML can have a very real impact in how you have to write your CSS and even how you use Javascript. Remember, HTML is like the frame of a house -- it has to be stable and well thought through for everything to be stable!

### Containing Elements, Semantics & Text

HTML5 has a variety of _semantic tags_, or HTML tags that provide additional meaning through descriptive naming, available for us to use. These tags are an easy way to not only make our code more understandable and clear to other developers (and our future selves), but they are also a great way to incorporate basic accessibility into your HTML for users who may need to access your website in non-traditional ways.

### Planning a Layout

In your groups, use the following semantic HTML tags to create the basic structure of this newspaper on your chart paper.  Click the links below to read the docs for each HTML element.  (notice they all send you to the MDN docs).  Think about which elements are most fitting and how it could be used to create the basic structure of the page.

Recommended starting point: Mark up the hard copy of the image with the elements you would use for each part, then consider the ordering/nesting necessary to achieve that as you write your HTML on the chart paper.

* [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
* [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
* [h1 - h6](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
* [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
* [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
* [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
* [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
* [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
* [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)

![Alien Paper](/assets/images/alien-paper.png)

<!-- Commenting the codepen example of this solution (below) out for now since we're having them do it on chartboard paper instead of doing it in a codepen -->
<!-- <p data-height="300" data-theme-id="23788" data-slug-hash="oYePxJ" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Blank" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/oYePxJ/">Blank</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> -->

***

## Chrome Dev Tools

Debugging your front-end code can be an intimidating part of the development process, but it's also one of the most powerful skills you can acquire Developers of all levels spend a significant amount of time troubleshooting code, but the more comfortable you are with debugging tools, the easier it will be to isolate, identify and fix broken code.

The front-end languages (HTML, CSS and JavaScript) are run entirely in the browser, so the technique for troubleshooting broken code can happen in many places. Luckily, modern browsers are aware of this and give us a collection of advanced tools to help us debug.

### Developer Tools

One of the first tools you should familiarize yourself with when doing front-end development are the built-in browser [DevTools](https://developer.chrome.com/devtools). To open developer tools in Chrome:
- Mac: `Cmd` + `Opt` + `i`
- (or) Right click on the browser window and select `inspect`
- (or) Select `View` in the navbar, then `Developer`, then `Developer Tools`

Personally I find that pinning the dev tools to the upper right is the most convenient. (You can also expand them into their own window.)

![devtools window][devtools-window]

### The Panels

Once you have your DevTools window open, you'll notice a toolbar across the top with several different tabs. Clicking on these tabs will bring you to different debugging panels, each built to help troubleshoot specific areas of your front-end code.

As mentioned earlier, there are a lot of places on the front-end where code can go wrong. This means the first and most important step in solving a bug is **isolating the problem**. DevTools has already done some of this step for us by categorizing the most commmon areas where developers run into problems, and providing us with specific debugging panels for each.

![devtools toolbar][devtools-toolbar]

For now, we're only going to focus on the first panel: Elements.

[devtools-window]: /assets/images/lessons/debugging-with-devtools/devtools-window.gif
[devtools-toolbar]: /assets/images/lessons/debugging-with-devtools/devtools-toolbar.png

### The Elements Panel: Debugging HTML, CSS & DOM Events

Most helpful for:
* debugging layout and styling issues
* checking DOM Events

The elements panel lets you view the entire HTML source of the current page you are viewing. From here, you can edit, add or remove content and elements directly on the page. Though your changes won't be saved (any changes made here will be lost upon refreshing the page), sometimes it's helpful to make tweaks directly in this panel so you can see what effect the changes will have on your application before you implement them.

![Elements Panel][elements-panel]

### Selecting Elements to work with

You'll notice hovering over an HTML element in the devtools panel will also highlight that element on the page. This makes it easier to find and select the content you'd like to work with.

You can also select elements directly on the page by clicking the ![Square Arrow](http://i.imgur.com/ODylyUu.png) icon in the toolbar, then hovering over the element on the page. This will automatically bring you to the corresponding code for that element in the devtools panel.

If you're having trouble finding the element you'd like to work with, you can search through the entire HTML with `Cmd + F`. You'll notice a searchbar appear at the bottom of the panel where you can enter any string to find a match. This is useful if you'd like to search for an element by a known ID or class.

![Find in HTML][find-in-html]

[elements-panel]: /assets/images/lessons/debugging-with-devtools/elements-panel.png
[find-in-html]: /assets/images/lessons/debugging-with-devtools/find-in-html.gif

***

## Your Challenge

We've covered a lot of ground so far, but there's one element we haven't talked about yet: `<table>`

And -- surprise! -- we're not going to cover it together: you're going to test out your Googling skills!

Build the structure of these following layout. Only use HTML for this challenge. The goal is to focus on building the structure of your application.

### Create this table

You can use codepen or create your own html file.

**Hint**: Research the [table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) in HTML

# ![Flags Table](/assets/images/flags-table.jpg)

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

## Your Challenges (2)

### Part One:

Partner up and answer the following questions:

* What is the attribute `for` indicate on the `label` element? Do you always have to use it? Why or why not?
* What are 5 values for the `type` attribute of an `input` element and how do they work?
* What is the significance of the `name` attribute in a form?
* What is a `fieldset` element?
* Why would a `legend` element be important?

### Part Two:

Fork the code below into your own Pen, and then refactor as follows:

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

### For Placement Only (FPO)

"For Placement Only" (FPO) options are placeholder content for use in design layouts. Often, you will find yourself forced to build interfaces before you have content. In such cases, you can use FPO content. There are many options for FPO copy, images, and video on the interwebs. Here are some to get you started:

* [Meet the Ipsums](http://meettheipsums.com/)
* [FPOImg](http://fpoimg.com/)
* [FillMurray](http://www.fillmurray.com/)
* [Lorem Pixel](http://lorempixel.com/)
* [Unsplash](https://unsplash.com/)
* [SampleVideos](http://www.sample-videos.com/)
* [Article with useful sites for free icons, image assets, etc.](https://www.elegantthemes.com/blog/resources/10-of-the-best-places-to-find-free-icons-and-image-assets-online)

***

# Additional Resources

* [Turing HTML Style Guide](https://github.com/turingschool-examples/html)
* [Check out the cheat sheets in independent study](http://frontend.turing.io/independent-study/)
* [W3C Markup validation](https://validator.w3.org/#validate_by_uri)
* [MDN HTML Overview](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
