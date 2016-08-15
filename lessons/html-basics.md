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

Every single page that renders in your browser is built with HTML. As front end developers, it's crucial that you are able to write clear and well structured HTML, because it is a non-negotiable part of the web and the foundation of every digital product.

#### What is HTML?

HTML stands for Hypertext Markup Language, and it was developed by Tim Berners-Lee as the publishing language of the web in the late 80's/early 90's. Berners-Lee developed this tool during his time at CERN, the European Laboratory for Particle Physics in Geneva, Switzerland, as a way for physicists to collaborate more effectively from remote locations and laboratories around the world. His goal was to make research documents available to be downloaded to individual computers. A key element of this idea was the concept of linking text within these documents, allowing the reader to switch from one technical paper to a specific section of another, creating a "web" of information across computers all over the world.

Today, the way we use the web is very different from it's scientific beginnings, and the tools used to build digital products are significantly more complex than they were back in the 90's. But despite all the advances and changes, HTML has remained a constant part of working with the web.

In client side code, you will encounter three primary languages: HTML, CSS, and JavaScript. These all work together, but are very different beasts. HTML is the structure and content of your page, CSS controls the layout and how the page visually looks, and JavaScript handles more complex user interactions, data, and logic.

In this lesson we will be discussing HTML and how to effectively structure your markup.

#### Structure and Tags

At it's heart, the purpose of HTML is to show text and content. To that end, all HTML really is is text and the structural tags that wrap text. These tag-wrapped content blocks are called _elements_. There are many (different types of tags)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element] that can be used to provide semantics, or meaning, to your markup. These include _paragraph_, or `<p>`, _section_, or `<section>`, and the infamous `<div>`, or _division_, tag. Regardless of the specific tag used, the structure of an HTML element will always be consistent and looks like this:

```HTML
<tagname>Content Here</tagname>
```

Let's break this element down:

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

...although you should probably stick to upcase, downcase, or regular ol' capitalizing. Because you aren't an animal, are you?

#### Page Contents

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

Heading tags are a little different than a paragraph. There are 6 different hierarchy levels for headings, `<h1>` through `<h6>`. Remember, these heading tags indicate _hierarchy_ rather than the size of the text. Of the heading tags, `<h1>` is given most importance by search engines and screen readers, and `<h6>` is given the least. Let's add some to our example and see what they look like:

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

It's also good practice to name your attribute values semantically, when possible. So, class and id values should add meaning to about what their purpose is. Semantics are a topic that be talked about until you're blue in the face, but sometimes seeing a few examples can help clarify better than discussion. Take a look at this older, but useful, (article)[https://css-tricks.com/semantic-class-names/] by Chris Coyier for a few examples and clarifying descriptions.

Now that we know how to group our content within semantic tags, we can discuss strategies for setting up pages in a way that is easy to read, easy to apply CSS to, and not a wall of div's:

* nesting is your friend
* white space gets ignored by the browser, so use it to help you read your HTML more easily
* headings & hierarchy
  - one h1 per page is a good practice, should be used as the primary header/topic of the page
  - use h2-h6 for all other headers and subheads.
* adding inline formatting to text
  - ```em``` emphasis/italic
  - ```strong``` strong/bold
  - ```<span>``` tag can be used to apply a specific style inline

Let's add some semantic tags to wrap out text blocks:

```html
<!doctype html>
<html>
  <head>
    <title>I'm the title!</title>
  </head>

  <body>
    <header>
      <h1>Main Title</h1>
      <p>I'm the page content!</p>
    </header>

    <section>
      <h3>Subheading</h3>
      <p>Here is more content.</p>
    </section>

    <footer>
      <h6>Smallest Subheading</h6>
      <p>This is also content</p>
    </footer>
  </body>
</html>
```

Now we can clearly see what the content is intended to be!

#### Normal Page Flow

_Normal page flow_ is from the top left to the lower right, the same way we read english. When you lay out your page, HTML elements fill the browser window in the order they are in your HTML doc, according to the rules block and inline-block elements follow. Understanding what normal page flow is allows you to anticipate exactly where the html elements go on your page.

##### Inline vs Block Elements

There are different displays types for HTML elements which cause them to behave differently in the normal flow of the page, `block` and `inline`.

A _block_ level element takes up the entirety of the line it appears on regardless of the width of the element, and the next element on the page falls under/below it in the layout. ```<p>``` and ```<div>``` are examples, but most elements are block level elements.

_Inline_ elements do not take up the whole line they fall on, which allows other content to flow around them, rather than falling bellow them. ```<img>``` ```<strong>```is an example of an inline element. These elements flow left to right and drop to the next line as needed

#### Links

Links are what the web is all about! They are made up of three components, let's take a look at one and then we'll walk through what it's made up of:

```HTML
<a href="https://www.turing.io/" title="Turing School">Turing School of Software and Design</a>
```

Like any HTML element, we start with a tag. For a link, it's a `<a>`, or anchor, tag. Next, we have an `href` attribute. This stands for "hypertext reference". Then, we see  a title. Titles in links are important for accessibility reasons, and they also provide additional information in the event that your link is broken for some reason.

Now, if we were to click on the link about, it would take us to the new page in the same browser window we are currently in. That may be exactly what you want, but sometimes you may prefer that the page the user is on stay open and that the link opens in a new window. That's an easy addition:


```HTML
<a href="https://www.turing.io/" title="Turing School" target="_blank">Turing School of Software and Design</a>
```

We add `target=_"blank"` in our opening `<a>` tag, and ta-da! Now our link will open in a new window.

#### Images

What's a website without some nice images? As mentioned above, an image tag is an example of a _stand alone elements_. This means we don't need a closing tag, and the tag itself don't contain anything. Let's see what that looks like:

```HTML
<img src="http://placekitten.com/200/300" alt="kittens!"/>
```

Let's walk through this. An image needs three components:
* an `<img>` tag
* the `src`, or source, attribute
* an `alt` attribute with a brief description of the image, for accessibility and to make sure users aren't left hanging if your image won't load for some reason.

#### Other Useful Tags

###### Line Breaks

Line breaks, `<br/>`, add visual separation between elements. For example:

```HTML
<section>First element</section>
<section>second element</section>
```

Will be much closer than:

```HTML
<section>First element</section>
<br/>
<section>second element</section>
```

You can also add a `<br/>` within the text of a `<p>`, to add line breaks. For example, all the text will be on one line:

```HTML
<p>Hello. It's me.</p>
```

And when we add a `<br/>`:

```HTML
<p>Hello.<br/>It's me.</p>
```

###### Lists

There are three (kinds of lists)[https://www.w3.org/TR/html4/struct/lists.html] in HTML: Unordered Lists, Ordered Lists, and Definition Lists. You'll probably see `<ol>`, ordered list, and `<ol>`, ordered list, most often, but it's important to know what a definition looks, `<dl>` like in the event you need one or encounter one in the wild.

Lists are made up of 2 sets of tags, the wrapping tag that specifies the list type, and the nested tag(s) of list items, `<li>`. Let's take a look at how to write the three list types:

Unordered list have numbered list items.

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

Ordered list have bulleted list items.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

And definition lists the black sheep of the list family, and are typically made up of a series of term/definition pairs:

```html
<dl>
  <dt>Item 1</dt>
  <dd>This is the first item</dd>
  <dt>Item 2</dt>
  <dd>This is the second item</dd>
</dl>
```

`<dl>` stands for "definition list", `<dt>` stands for definition term, and `<dd>` stands for "definition description".

Lists are great for organizing groups of like content, like navigation links in a head bar.

###### Tables

Tables are used to store information in a set of rows, columns and cells. They should never be used for layout. If you ever finding yourself wondering if you need to use a table, ask yourself "Would I put this in a spreadsheet?". If the answer is yes, great! Use a table! If the answer is no, find a different solution.

```html
<table>
  <tr>
    <th>One Column</th>
    <th>Two Column</th>
    <th>Three Column</th>
  </tr>

  <tr>
    <td>Column 1 data</td>
    <td>Column 2 data</td>
    <td>Column 3 data</td>
  </tr>
</table>
```

Tables are made up of one wrapping `<table>` tag, a table row tag `<tr>` for each row of your table, a table header tag `<th>` for the headers of head column, and table data `<td>` for the main content of the table cells.

###### Character Codes

Sometimes you may want to use a special character in your text, like an &amp; or &copy;.
To avoid seeing a funky group of character hodgepodge instead of the character you wanted, use a character code.

The examples above use the character codes `&amp;` and `&copy;`. For a full list, look (here)[http://www.ascii.cl/htmlcodes.htm].


###### Your Turn!

Set up a basic html file that we can use during the lesson. Use basic page structure for html, have some content in the body that uses semantic tags that we covered and images, links, lists, etc.
