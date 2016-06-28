---
title: HyperText Markup Language
tags: html, semtantics
---

## Learning Goals

- Talk about the role of HTML in relation to CSS and JavaScript
- Take a look at the anatomy of a single HTML tag
- Discuss the difference between "block" and "inline" elements
- Take a look at a real web page and pull apart the anatomy of that page

## Major Points

Here is the [tl;dr][] of the lesson:

- HTML is comprised of two major elements: text and tags
- New input element types and attributes allow for Mobile Safari to display the correct keyboards.
  - Attributes
    - placeholder
    - autofocus
    - required
    - `<datalist>` and the "list" attribute
  - Types
    - email
    - url
    - tel
    - range
    - number
    - date
    - datetime
    - datetime-local
    - time
    - month
    - color
- New semantic elements
  - `<mark>`, `<time>`, `<meter>`, `<progress>`
  - Organizational: `<section>`,`<article>`, `<header>`, `<footer>`, `<nav>`, `<aside>`, `<hgroup>`
  - Semtantic elements make your sites more accessible.

[tl;dr]: https://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read

## Narrative

Of all of the major technologies used on the web—on either the front- or the back-end—HTML is the oldest. In the beginning, the web was just a bunch of HTML documents that you wrote by hand. They had these cool things called hyperlinks that would allow to click on a word on one page and be taken to another page.

At the end of the day, HTML is made up two things: text and tags that mark up that text.

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

```html
<h1>Very Important Heading</h1>

<p>This is an introduction paragraph. Designers typically use "Lorem Ipsum" to fill out space in their designs while they wait for the real content. Lorem Ipsum looks kind of like Latin, but it's actually completely bogus. The nice part is that it has roughly the same distribution of word sizes as English.</p>

<h2>Lorem Ipsum Example</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

<p data-height="300" data-theme-id="23788" data-slug-hash="VjvOyd" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/VjvOyd/">Very Basic HTML Page</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Images and Attributes

We HTML tags to mark up text to show it's semantic meaning. The browser uses these tags to build up document. _Most_ tags have an opening and closing tag, but a few do not. Images—defined using the `<img>` tag do not have a closing tag for instance.

Consider the following:

```html
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/turing.png">
```

There are two things happening here. First, we have an `<img>` tag that is somewhat unique in that it doesn't have a closing tag like all of the other ones we've see so far.

Our `<img>` tag needs an extra little piece of information. Our browser is more than happy to load up an image, but it'd be helpful if we told it where that image located. That's where the `src` attribute comes in.

![Anatomy of an HTML Tag](/assets/images/html-tag-anatomy.png)

Let's update our page from earlier with an the image above.

<p data-height="300" data-theme-id="23788" data-slug-hash="XKmwqR" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/XKmwqR/">A Page with an Image</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

<aside>
  <h2>A Word on Tags and Elements</h2>

  <p>
    You may here me use the term "tag" and "element" interchangably. The reason for this is that they're closely related, with just a subtle difference. A tag is the thing we write when we're creating an HTML document. The browser then reads and parses our document. Elements are the end result of what's rendered in the browser based on the tags we write.
  </p>
</aside>

### Hyperlinks

Another important tag is the `<a>` tag. These are the tags we use for creating hyperlinks. Consider the following example:

```html
<p>
  Welcome to the <a href="http://turing.io">Turing School of Software and Design</a>.
</p>
```

In this case, `<a>` tags need to know where they should link to. We use the `href` attribute to set where the link should point to. `href` is an abbreviation for "hyper reference." It was the 90s and that's how things were done back then. We were all getting ready to surf the [Information Superhighway][]. Let's all just be happy they didn't end up getting called "cyberlinks."

[Information Superhighway]: https://en.wikipedia.org/wiki/Information_superhighway "Information Superhighway on Wikipedia"

<p data-height="300" data-theme-id="23788" data-slug-hash="yJYdyb" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/yJYdyb/">A Page with a Link</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Block and Inline Elements

You might have noticed that the `<a>` tag is a behaves a little bit different that the `<h1>`, `<h2>`, and `<p>` tags. We can use the `<a>` tag to mark up a few words, while the other tags denote a big section—let's call it a "block"—of our page.

This is an important distinction:

- Block elements stack on top of each other. Each one starts and ends on its own line.
- Inline elements can be used to mark up a few words inside of a block element.

Some other inline tags you might see in the wild:

- `<em>` is used to denote that you'd like to emphasize some text.
- `<strong>` is used to denote that this text is important.

We use `<em>` and `<strong>` to denote the semantic meaning of the content.

<p data-height="300" data-theme-id="23788" data-slug-hash="ezpwZe" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/ezpwZe/">A Page with a Link</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

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

### Inputs and Buttons

So far, we've done an excellent job of displaying information to the user, but we haven't really asked them for their input. HTML also includes a set of elements for building forms.

There are a lot to forms that we go into depth on in the full program, but we're going to blissfully ignore today.

Instead we'll focus on two elements:

- `<input>` creates an input field. `<input>` is like `<img>` in that it does not require or support a closing tag. It can take an optional `type` attribute that helps validate user input in some browsers.
- `<button>` creates a button. `<button>` on the other hand does support a closing tag.

<p data-height="300" data-theme-id="23788" data-slug-hash="MeaMEr" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/MeaMEr/">Inputs and Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

We'll use these elements when we discuss JavaScript.

## Pair Practice

Last night, you created wireframes for your portfolio. Today, it's time to think about the structure and semantics of your page.

What are the `<header>`, `<nav>`, `<section>`, `<article>`, and other semantic elements of your page?

An approach that we like is to take the wireframes that you developed and begin to trace over them and identify the component parts.
