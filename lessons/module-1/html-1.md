---
title: HTML I
tags: html, introduction, practice
---

# Overview & Docs

## What is HTML?

 * HTML = HyperText Markup Language  
 * HTML is used to create electronic documents (pages) that are displayed on the Web
 * Each page contains a series of connections to other pages called hyperlinks 
 * Every page you see on the internet is written using HTML
 * HTML ensures the proper formatting of content (text, images, video) so that your internet browser can display them as intended
 * Tags = used to wrap content of a web page and define how the browser must format and display the content
 * Elements = the end result of our tags once the browser has parsed the HTML and rendered based on our tag instruction
 * Markup = the set of tags to structure a page

## Example 

Let's say that we had some text and we wanted to denote that this text was a paragraph.

```
This text is a paragraph.
```

We'd wrap the text in paragraph tags.

```html
<p>This text is a paragraph.</p>
```

We use `<p>` to signal to the browser that everything that's about to follow is part of a paragraph and `</p>` to let the browser know that this paragraph is done. When a user visits our application, the browser loads up the HTML and parses it into the elements that will eventally make up our user interface.

Here is an example of a slightly more robust document:

<p data-height="300" data-theme-id="26495" data-slug-hash="VjvOyd" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Very Basic HTML Page" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/VjvOyd/">Very Basic HTML Page</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Anatomy of a Tag
![Anatomy of an HTML Tag](/assets/images/html-tag.jpg)

## Required Structure of any HTML Page

* `<!doctype html>` declaration: The doctype declaration is not an HTML tag, but rather tells the browser which version of HTML the page is written in.
* `<html></html>` tag wraps the entire document
* `<head></head>` tag wraps elements that shouldn't be rendered: information about the page and how to process it
* `<body></body>` tag wraps elements that should be displayed: the actual content

<p data-height="300" data-theme-id="26495" data-slug-hash="gLxjjy" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A complete but small document" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/gLxjjy/">A complete but small document</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

# The Docs

* [MDN HTML Overview](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

***

# Practice

### Containing Elements, Semantics & Text
Let's practice with the following tags:

* `header`
* `footer`
* `h1 - h6`
* `section`
* `article`
* `p`
* `ul` and `ol`
* `div`

![Alien Paper](/assets/images/alien-paper.png)

<p data-height="300" data-theme-id="26495" data-slug-hash="oYePxJ" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Blank" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/oYePxJ/">Blank</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Images and Attributes

We use HTML tags to mark up text to show its semantic meaning. The browser uses these tags to structure the document. _Most_ tags have an opening and closing tag, but a few do not. Images—defined using the `<img>` tag do not have a closing tag for instance.

Consider the following:

```html
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/turing.png">
```

There are two things happening here. First, we have an `<img>` tag that is somewhat unique in that it doesn't have a closing tag like all of the other ones we've seen so far.

Our `<img>` tag needs an extra little piece of information. Our browser is more than happy to load up an image, but it'd be helpful if we told it where that image was located. That's where the `src` attribute comes in.

![Anatomy of an HTML Tag](/assets/images/html-tag-anatomy.png)

Let's update our page from earlier with the image above.

<p data-height="471" data-theme-id="26495" data-slug-hash="XKmwqR" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A Page with an Image" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/XKmwqR/">A Page with an Image</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### FPO
Let's take a moment to digress and discuss important things. Like "For Placement Only" (FPO) options in design. Often, you will find yourself forced to build interfaces before you have the requisite content. In such cases, you must avail yourself of FPO content. There are many options for FPO copy, images, and video on the interwebs. Here are some to get you started:

* [Cupcake Ipsum](http://www.cupcakeipsum.com/)
* [Slipsum](http://slipsum.com/)
* [Bacon Ipsum](https://baconipsum.com/)
* [Hipster Ipsum](https://hipsum.co/)
* [FillMurray](https://www.fillmurray.com/)
* [PlaceCage](https://www.placecage.com/)
* [FPOImg](http://fpoimg.com/)
* [PlaceKitten](http://placekitten.com/)
* [BaconMockup](http://baconmockup.com/)
* [SampleVideos](http://www.sample-videos.com/)
* [Article](https://www.elegantthemes.com/blog/resources/10-of-the-best-places-to-find-free-icons-and-image-assets-online) w/ lots of useful sites for free icons, image assets, etc. 

### Hyperlinks

Another important tag is the `<a>` tag. These are the tags we use for creating hyperlinks. Consider the following example:

```html
<p>
  Welcome to the <a href="http://turing.io">Turing School of Software and Design</a>.
</p>
```

In this case, `<a>` tags need to know where they should link to. We use the `href` attribute to set where the link should point to. `href` is an abbreviation for "hyper reference." 

<p data-height="300" data-theme-id="26495" data-slug-hash="yJYdyb" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A Page with a Link" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/yJYdyb/">A Page with a Link</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Block and Inline Elements

You might have noticed that the `<a>` tag behaves a little differently than the `<h1>`, `<h2>`, and `<p>` tags. We can use the `<a>` tag to mark up a few words, while the other tags denote a big section—let's call it a "block"—of our page.

This is an important distinction:

- Block elements stack on top of each other. Each one starts and ends on its own line.
- Inline elements can be used to mark up a few words inside of a block element.

Some other inline tags you might see in the wild:

- `<em>` is used to denote that you'd like to emphasize some text.
- `<strong>` is used to denote that this text is important.

We use `<em>` and `<strong>` to denote the semantic meaning of the content.

<p data-height="583" data-theme-id="26495" data-slug-hash="ezpwZe" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="A Page with a Link" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/ezpwZe/">A Page with a Link</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
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

We'll discuss these more in a bit when we talk about CSS. But, for now, let's move on to forms.

### Forms: Inputs and Buttons

So far, we've done an excellent job of displaying information to the user, but we haven't really asked them for their input. HTML also includes a set of elements for building forms.

There is a lot to forms that we'll go into depth later, but for now just blissfully ignore.

Instead we'll focus on two elements:

- `<input>` creates an input field. `<input>` is like `<img>` in that it does not require or support a closing tag. It can take an optional `type` attribute that helps validate user input in some browsers.
- `<button>` creates a button. `<button>` on the other hand does support a closing tag.

<p data-height="300" data-theme-id="26495" data-slug-hash="MeaMEr" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Inputs and Buttons" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/MeaMEr/">Inputs and Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

# Your Turn

### Create this table
** Hint: Research the `table` element in HTML

# ![Flags Table](/assets/images/flags-table.jpg)

<p data-height="300" data-theme-id="26495" data-slug-hash="oYePxJ" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Blank" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/oYePxJ/">Blank</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

