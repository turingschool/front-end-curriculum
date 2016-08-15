---
title: HTML Basics
length: 90
tags: html
---

### Goals

By the end of this lesson, you will know/be able to:

* Become familiar with the history of HTML
* Understand how to write basic HTML elements: links, images, lists, etc.
* Be able to write clear, organized HTML
* Have an understanding of semantic HTML


#### HTML is Everywhere

Every single page that renders in your browser is built with HTML. Writing HTML well is a critical foundational skill for a front-end developer, because everything you do in the front end is built upon the HTML you write.

HTML & CSS are non-negotiable parts of the web and the foundation of every digital product, and once you understand how they works it's straightforward to use them.

As front end developers, it's crucial that you are able to write clear and well structured HTML and CSS. By the end of the class, students will have an understanding of how (and why) to write semantic markup.

#### What is HTML?

HTML stands for Hypertext Markup Language, and it was developed by Tim Berners-Lee as the publishing language of the web in 1989. Berners-Lee developed this tool during his time at CERN, the European Laboratory for Particle Physics in Geneva, Switzerland, as a way for physicists to collaborate more effectively from remote locations and laboratories around the world. His goal was to make research documents available to be downloaded to individual computers. A key element of this idea was the concept of linking text within these documents, allowing the reader to switch from one technical paper to a specific section of another, creating a "web" of information across computers all over the world.

Today, the way we use the web is very different from it's scientific beginnings, and the tools used to build digital products are significantly more complex than they were back in the 90's. But despite all the advances and changes, HTML has remained a constant part of working with the web.

In client side code, you will encounter three primary languages: HTML, CSS, and JavaScript. These all work together, but are very different beasts. HTML is the structure and content of your page, CSS controls the layout and how the page visually looks, and JavaScript handles more complex user interactions, data, and logic.

In this lesson we will be discussing HTML and how to effectively structure your markup.

#### Basic intro to HTML structure and different tags.

At it's heart, HTML is built to show text and content. To that end, all HTML really is is text and the structural tags that wrap text. These tag-wrapped content blocks are called **elements**. There are many (different types of tags)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element] that can be used to provide semantics, or meaning, to your markup. These include _paragraph_, or `<p>`, _section_, or `<section>`, and the infamous `<div>`, or _division_, tag. Regardless of the specific tag used, the structure of an HTML element will always be consistent and looks like this:

```HTML
<tagname>Content Here</tagname>
```

Let's break that down:

We always begin our element with an opening tag, and end our element with a closing tag. Tags are made up of a left-angle bracket, the tag name, and a right-angle bracket. Opening and closing tags are almost the same, but a closing tag has a back slash after the left-angle bracket and before the tag name. Between our opening and closing tags, we have our content. This can be text, or even other HTML elements.

Here's an opening paragraph tag: `<p>`

And here is a closing paragraph tag: `</p>`

Now if we add some text, the complete HTML element for a paragraph looks like this:

```HTML
<p>I'm a paragraph!</p>
```

##### Types of Elements

There are different types of HTML elements. Most are _container elements_, which means they contain other elements or content. Our example of a `<p>` tag above is a container element.

We can also have _stand alone elements_. These are less common, and include break tags, `<br/>`, and image tags, `<img/>`. These tags are self contained, and do not wrap any content. They have the back slash at the end of the tag name, rather than in front of the tag name as a closing tag of a container element would have.

###### Attributes

Along with choosing particular tags to add meaning to our content, we can also assign _attributes_ to an HTML element. Attributes are added to the opening tag after the tag name and before the right-angle bracket. There are different acceptable attribute types, including class, style, and source.

Attributes are assigned _values_. These values must be contained within quotation marks.

An element that has a class attribute with a value of `main-content` looks like this:

```html
<p class="main-content">I'm the main content!</p>
```

### Basic Page Structure

Now that we know what a tag looks like, let's take a look at how to set up an HTML page from scratch. We'll start from the top and work our way down.

#### DOCTYPE

When you look at an HTML document, you'll notice that the first line is always something about doctype. What that is doing is telling the browser which version of the markup language you want to use. In older versions of HTML you had to enter a long, hard-to-remember url here, but today all we have to do is write this:

```html
<!doctype html>
```

Super simple! And the best part is that it's case-insensitive, so you don't have to worry about remembering if you need to capitalize any words.

```html
<!DOCTYPE HTML>
```

is just as valid as

```html
<!dOcTyPe hTmL>
```

...although you should probably stick to upcase, downcase, or regular ol' capitalizing.

#### Page structure

After doctype, we have a few tags that will always be present on every HTML page we write.

First, we need opening an closing `<html>` tags to contain all our content:


```html
<!doctype html>
<html>

</html>
```

Every other tag we write must be within these `<html>` tags.

Next, we'll add our `<head>` and `<body>` tags. The `<head>` tag will be where we put our page title and any meta information about the page. The content of this section is not visible to the user, but serves many useful purposes including holding information used by search engines and linking to our stylesheets. The `<body>` tag contains the content of our page, and everything within this tag is visible to the user. Let's add this to our example:

```html
<!doctype html>
<html>
  <head>
    <title>I'm the title!</title>
  </head>

  <body>
    I'm the page content!
  </body>
</html>
```

Notice how we're indenting our `<head>` and `<body>` tags. This is because they are _nested_ within our `<html>` tags, and indenting them makes it easier to read and quickly see which tags are nested within other tags. Nesting elements within other elements can be very useful, and it's a good idea to remember to structure your HTML so it's easy to quickly skim the page and see what is nested within what. When nesting, remember that the element that _opens first_ also has to _close last_.

That's all you need to build a very simple HTML page!

Let's try it out. Make a new file called `index.html` and set it up with doctype, head, title, and body tags. Once you've done that, open the page up in your browser.

#### Text elements

For text elements, we use paragraph and heading tags.

A paragraph is pretty straightforward, and it's something we've seen before! Let's add that to our example by wrapping the line of text in our body in an opening and closing `<p>` tag:

```html
<!doctype html>
<html>
  <head>
    <title>I'm the title!</title>
  </head>

  <body>
    <p>I'm the page content!</p>
  </body>
</html>
```

Heading tags are a little different than a paragraph. There are 6 different hierarchy levels for headings, `<h1>` through `<h6>`. Remeber, these heading tags indicate _hierarchy_ rather than size. Of the heading tags, `<h1>` is given most importance by search engines and screen readers, and `<h6>` is given the least. Let's add some to our example and see what they look like:

```html
<!doctype html>
<html>
  <head>
    <title>I'm the title!</title>
  </head>

  <body>
    <h1>Main Title</h1>
    <p>I'm the page content!</p>

    <h3>Subheading</h3>
    <p>Here is more content.</p>

    <h6>Smallest Subheading</h6>
    <p>This is also content</p>
  </body>
</html>
```

#### Semantic HTML

Many tags serve the same purpose and won't change the functionality of your page, but taking advantage of _semantic tags_ will add meaning to your page structure. This has many benefits, including making your code easier to work with for other developers, future-you who is coming back to make an update to a page after time away from the code base, and it also makes your sight more effective for screen readers and search engines.

Some commonly used examples of semantic tags include:

* section
* article
* aside
* nav
* header
* footer

We would use the tags above in place of a `<div>`. The layouts would look the same in the browser, but the markup that uses semantic tags will be significantly easier to read and understand. Without even seeing any content, we understand that a `<footer>` tag will be used to contain footer content, and that a `<nav>` tag is going to hold some sort of navigational elements. Staring at a page full of nested div's and trying to figure out where one ends and the next begins is a very specific kind of sadness.

It's also good practice to name your attribute values semantically, when possible. So, class and id values should add meaning to about what their purpose is. Semantics are a topic that be talked about until you're blue in the face, but sometimes seeing a few examples can help clarify better than discussion. Take a look at this old, but useful, (article)[https://css-tricks.com/semantic-class-names/] by Chris Coyier for examples and clarifying descriptions!

Now that we know how to group our content within semantic tags, we can discuss strategies for setting up pages in a way that is easy to read, easy to apply CSS to, and not a wall of div's:
* organize, organize, organize!
* nesting (within reason) is your friend, white space is your friend
* headings & hierarchy
  - one h1 per page is a good practice -- really should be the primary header/topic of the page.
  - use h2-h6 for all other header/subheads.
* adding inline formatting to text
  - ```em``` emphasised/italic
  - ```strong``` strong/bold
  - ```<span>``` tag
    + used to apply a specific style inline

    <!-- * organize, organize, organize!
    * nesting (within reason) is your friend, white space is your friend
    * headings & hierarchy
      - one h1 per page is a good practice -- really should be the primary header/topic of the page.
      - use h2-h6 for all other header/subheads.
    * adding inline formatting to text
      - ```em``` emphasised/italic
      - ```strong``` strong/bold
      - ```<span>``` tag
        + used to apply a specific style inline -->

#### Default Positioning and Page Flow

  + Positioning (Basic page flow, no CSS)
    * What is "normal page flow?"
      - when you lay out your page, HTML elements fill the browser window in the order they are in your HTML doc, according to the rules block and inline-block elements follow.
      - Understanding what normal page flow is allows you to anticipate exactly where the html elements go on your page.

      - inline vs block
        + ```<p>``` ```<div>``` are examples, but most elements are block level elements. they appear on a line, and the next element on the page falls under/below them in the layout
          * appears on the next line, like a paragraph
        + ```<img>``` ```<strong>```is an example of an inline element. Content flows around it, rather than falling below it.
          * appears on the same like that they are written on

    * Static Positioning
      - normal page flow
        + block elements flow one per line
        + inline-block elements flow left to right and drop to the next line as needed

    * Grouping Elements
      - used anywhere you want to group elements together into sections
      - div, section, article, aside
        + these tags are just for grouping/organizing content, and you can apply IDs and Classes to them to control their styles with CSS
        + div is most generic, the others give semantic info about intended use of content it wraps.

#### Links

Links are what the web is all about! They are made up of three components, let's take a look at one and then we'll walk through what it's made up of:

```HTML
<a href="https://www.turing.io/" title="Turing School">Turing School of Software and Design</a>
```

Like any HTML element, we start with a tag. For a link, it's a `<a>`, or anchor, tag. Next, we have an `href` attribute. This stands for "hypertext reference". Then, we see  a title. Titles in links are important for accessibility reasons, and they also provide additional information in the event that your link is broken for some reason.

Now, if we were to click on the link about, it would take us to the new page in the same browser window we are currently in. Maybe that's what you want, but sometimes you may want your current site to stay open and for the link to open in a new window. That's an easy addition:


```HTML
<a href="https://www.turing.io/" title="Turing School" target="_blank">Turing School of Software and Design</a>
```

We add `target=_"blank"` in our opening `<a>` tag, and ta-da! Now our link will open in a new window.

  + link attributes
    * ```<a>``` anchor tag
    * ```href``` hypertext reference
    * ```target="_blank"``` opens link in new/blank window
    * together, this looks like ```<a href="www.turing.io" target="_blank>Turing School</a>```
    * relative path: depends on knowing the location of file, like an image or page link within your directory structure
    * absolute path: a specific location of something, like a link to a website

  + image tags are made up of 3 things:
    * ```img```
    * ```src="http://link.com"```
    * ```alt="what a great link!"```
    * which looks like ```<img src="http://link.com" alt="what a great link" />```

  + line breaks
  + UL & OL's
      - lists! one has numbers, one have bullets
    * unordered list.
    * ordered list.
    * change what the bullets look like and/or control position
      - ```list-style``` property.
    * ways to use lists
      - actual lists of things!
      - navigation
      - to organize groups of content

  + tables.
    * Use them for content that should be in a table, don't use them to control your layout.
    * ways to use tables:
      - things you'd use a spreadsheet for

  + Character Codes
    * example: copyright is ``` &copy; ```
    * if you don't use them you'll get funky charcter hodgepodge which isn't very useful.
    *

###### Guided Practice time: set up a very basic html file that we can use during the lesson
  + make 1 directory
    * inside have a layout.html, styles.css, and an images folder

  + basic page structure for html:
    <!DOCTYPE html>
      <html>
        <head> has title of page and meta info about page
        <body> has all the content of your page

  + have some content in the body
    - things that we talked about: images, links, lists, etc.
