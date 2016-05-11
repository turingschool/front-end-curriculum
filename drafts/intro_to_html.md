### Goals

By the end of this lesson, you will know/be able to:

* Be able to write clear, organized HTML
* Understand how to write basic HTML elements: links, images, lists, etc.
* Be able to write semantic HTML

### Structure

#### Hook: <5 min

###### Why is this lesson important?

Every single page that renders in your browser is built with HTML. Writing clean HTML is a critical foundational skill for a front-end developer. Everything you do in the front end is built upon the HTML you write.

#### Opening: 1-2 min

###### What is this lesson about?
Developers love to hate on HTML and CSS, but they also recognize that front-end development is crucial for every digital product. It serves as a user's main point of interaction with an application. Once you understand how it works, HTML and CSS will be very straightforward to work with.

###### What will students know or be able to do by the end of the class? What are the goals?

By the end of the class, students will have an understanding of how to write semantic markup and why it is used.

#### Introduction to New Material (I do)

* instructor explains, shows, or demonstrates
* Examples: lecture, slides, code demonstration
  + what is HTML and what is CSS (quick review)
    - HTML is the Structure, CSS is the Pretty
    - In this lesson we're talking about HTML.

##### Basic intro to HTML structure and different tags.
  + anatomy of an HTML element
    * Tag break down
      - opening and closing tags
      - container element
        + a larger wrapping element that contains other elements and content (a ```<p>``` or a ```<div>``` are examples)
      - stand alone element
        + element that can't contain anything else (```<br/>``` and ```<img/>``` are examples)
    * what is an attribute, how to apply a value to an attribute
      - it provides info about the element.
      - examples: class, id, source, language
      - goes inside opening tag bfore right angle bracket
      - attributes have a value that is in quotes: ```class="red"'```

  + Strategies for how to set up a page in a way that is easy to read, easy to write CSS for, and not div-tastic.
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
        + div is most generic, the others give *semantic* info about intended use of content it wraps.

  + SEMANTICS
    - Using semantic tags as you're writing your HTML adds meaning to your page, which is good for you and your teammates. Semantic markup is easier to understand what groups of content represent, and it increases things like searchability and accessibility.
      + examples of semantic tags:  
        * section
        * article
        * aside
        * nav

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
    * if you don't use them you'll get funky character hodgepodge which isn't very useful.
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
