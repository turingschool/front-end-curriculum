---
title: HTML I - Structure & Semantics
length: 120
tags: html, introduction, practice
---

## Learning Goals

* Understand what HTML stands for and it's purpose
* Know how to identify and use attributes for appropriate elements
* Know and explain the difference between block and inline elements
* Begin using semantic elements to build an HTML layout

## Prep

Students should spend 15-20 minutes reading, watching, and completing the content in the [Chrome Dev Tools](./chrome-dev-tools) resource before attending class.

## Vocabulary

- `HTML` HyperText Markup Language
- `CSS` Cascading Style Sheet
- `HTML Element` A building block that makes up the structure of a web page. Encompasses tags and content
- `HTML Tag` Used to create HTML elements. Some elements have an opening and closing tag, others only have an opening tag
- `Attribute` Additional values that configure HTML elements and adjust their behavior
- `Hyperlink` A reference to an external resource
- `Block` A block-level element occupies the entire width of its parent element (container), thereby creating a "block."
- `Inline` An inline-level element only occupies the space bounded by the tags defining the element, instead of breaking the flow of the content.
- `Nesting` when an element lives inside of another element

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

<p class="codepen" data-height="450" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="RzaRBd" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Very Basic HTML Page">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/RzaRBd/">
  Very Basic HTML Page</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<div class="turn-and-talk">
    <h3>Turn & Talk</h3>
    <ul>
      <li>What makes an HTML element different than an HTML tag?</li>
      <li>What is the difference between a “regular” element and a self-closing, or empty element?</li>
      <li>What will the browser do if it doesn't see a closing tag for a given element?</li>
    </ul>
</div>

## HTML Attributes

Any HTML element can have attributes. An attribute provides additional information about an element. It must be specified in the opening tag of an element, and usually come in name/value pairs. A `class` is a commonly used attribute:

```html
<p class="paragraph"></p>
```

The name of the attribute in the example above is class, and the value is `"paragraph"`. The are separated by a single `=`, and no spaces.

Attribute names are determined for us by HTML; we must comply with the list of available names to use. The values are determined by us as developers. Different attributes are used for different purposes; we will explore some of those today, and continue learning the use-cases for others as we move into CSS and JavaScript.

### Attributes in Images

We use HTML tags to mark up text to show its semantic meaning. The browser uses these tags to structure the document. As we talked about earlier in this lesson, _most_ tags have an opening and closing tag, but a few do not. For example, images defined using the `<img>` tag do not have a closing tag.

Consider the following:

```html
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/turing.png" alt="Turing Logo">
```

Our browser is more than happy to load up an image, but we need to tell it where that image is located. Our `<img>` tag needs extra information to know which image to display. That's where the `src` attribute comes in. The `alt` attribute provides alternative text in the case the user is not able to view the image.

<img class="medium" src="/assets/images/html-tag-anatomy.png" alt="Labeled HTML tag">

### Attributes in Hyperlinks

Another important tag is the `<a>` tag. These are the tags we use for creating hyperlinks. You might have noticed that the `<a>` tag behaves a little differently than the `<h1>`, `<h2>`, and `<p>` tags. We can use the `<a>` tag to mark up a few words, while the other tags denote a big section - what we might call a "block" — of our page.

Consider the following example:

```html
<p>
  Welcome to the <a href="http://turing.io">Turing School of Software and Design</a>.
</p>
```

In this case, the `<a>` tag needs to know which url it should be linked to. We use the `href` attribute to set the links destination. `href` is an abbreviation for "hypertext reference."

<div class="turn-and-talk">
    <h3>Turn & Talk</h3>
    <ul>
      <li>What are HTML attributes?</li>
      <li>Which attributes have you seen used before, and what was the purpose of each of those?</li>
    </ul>
</div>

## Block and Inline Elements

You might notice that some tags behave a little differently in a layout than others. Some tags make content stack, while others let content sit next to each other. What's that about?

This is an important distinction:

- `Block elements` stack on top of each other. Each one starts and ends on its own line.
- `Inline elements` can be used to mark up a few words inside of a block element.

Most elements are block elements. Some common inline tags you might see in the wild:

- `<em>` is used to denote that you'd like to emphasize some text.
- `<strong>` is used to denote that this text is important.

We use `<em>` and `<strong>` to denote the semantic meaning of the content.

<p class="codepen" data-height="300" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="EBKyrE" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline v Block Elements">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/EBKyrE/">
  Inline v Block Elements</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You may notice that the `<em>` tags are italicized and the `<strong>` tags are displayed in bold. The browser does this by default. That said, you should still only use these tags to convey meaning. We can change the way elements appear by using CSS - later.

### `<span>` and `<div>`

All of the tags we discussed above have some kind of semantic meaning. Assistive technology devices will use them to help people with visual impairments understand the page. Search engines will use them to figure out the structure of your page. You should use semantic HTML tags whenever possible and appropriate.

Sometimes, however, you don't want a tag to have any meaning. Typically, this is when you just want to target a certain portion of the page with CSS or JavaScript and none of the semantic tags really apply.

**Disclaimer**: There are many, many more semantic tags than the ones we're discussing today.

Some think of `<span>` and `<div>` as the flavorless Jello of HTML tags; they don't have any meaning in and of themselves and they typically don't come with any built-in styling from the browser.

There is just one important difference between the two:

- `<div>` is a block element.
- `<span>` is an inline element.

We'll discuss these more in a later lesson when we talk about CSS.

<div class="turn-and-talk">
    <h3>Turn & Talk</h3>
    <ul>
    <li>What is the difference between block and inline elements?</li>
    <li>Are <code>img</code> elements block or inline? <code>a</code> elements? Explain and/or prove it.</li>
    </ul>
</div>

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

<p class="codepen" data-height="300" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="xoVEVQ" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Required Structure of HTML">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/xoVEVQ/">
  Required Structure of HTML</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Layout Structure

As front-end developers, you'll use HTML to build layouts given to you by a designer or client. It's an interesting challenge that can seem overly simple, but how you structure your HTML can have a very real impact in how you have to write your CSS and even how you use Javascript. Remember, HTML is like the frame of a house -- it has to be stable and well thought through for everything to be stable!

### Containing Elements, Semantics & Text

HTML5 has a variety of _semantic tags_, or HTML tags that provide additional meaning through descriptive naming, available for us to use. These tags are an easy way to not only make our code more understandable and clear to other developers (and our future selves), but they are also a great way to incorporate basic accessibility into your HTML for users who may need to access your website in non-traditional ways.

### Planning a Layout

In your groups, use the following semantic HTML tags to create the basic structure of a twitter profile on your chart paper.  Click the links below to read the docs for each HTML element.  (notice they all send you to the MDN docs).  Think about which elements are most fitting and how it could be used to create the basic structure of the page.

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

![Twitter Profile](/assets/images/twitter-profile.png)

<!-- Commenting the codepen example of this solution (below) out for now since we're having them do it on chartboard paper instead of doing it in a codepen -->
<!-- <p data-height="300" data-theme-id="23788" data-slug-hash="oYePxJ" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Blank" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/oYePxJ/">Blank</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> -->

***

# Additional Resources

* [Turing HTML Style Guide](https://github.com/turingschool-examples/html)
* [Check out the cheat sheets in independent study](http://frontend.turing.io/independent-study/)
* [W3C Markup validation](https://validator.w3.org/#validate_by_uri)
* [MDN HTML Overview](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
