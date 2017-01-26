---
title: HTML II - Forms, Devtools, Accessibility Best Practices
length: 180
tags: html, introduction, practice
---
# Pre-Teach Resources
* [Joe Dolson: ARIA - Roles, States and Properties](https://www.youtube.com/watch?v=JptGV3XqNNk)
* [ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson / Front-Trends 2015](https://www.youtube.com/watch?v=qdB8SRhqvFc)

# Overview
Now that you have a handle on the basics of structuring content for an HTML file:

* Let's discuss building more robust HTML __forms__
* Let's start using our __devtools__
* Let's put __accessibility__ best practices into place

# Docs

* [MDN HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
* [MDN How to Structure an HTML Form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form)
* [Chrome Dev Tools Reference](https://developer.chrome.com/devtools)
* [Code School Chrome Dev Tools](http://discover-devtools.codeschool.com/)
* [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

***

# Forms
Forms are an important part of a website. They allow users to send data to the web site. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own. Forms are comprised of the following base elements:

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
Copy the form code below into your own Pen, and then refactor as follows:

* Validate for email type 
* Replace all `div` elements with correct semantic elements
* Add a radial check box for gender
* Include placeholders for name, email, and message
* Add a drop down for favorite color with at least three options
* Use an input for submit instead of a button

<p data-height="458" data-theme-id="26495" data-slug-hash="Lbjgwy" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Basic HTML Form" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/Lbjgwy/">Basic HTML Form</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

***

# Chrome Dev Tools 

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

---------------------------------------

### The Elements Panel: Debugging HTML, CSS & DOM Events

##### HELPFUL FOR:
* debugging layout and styling issues
* checking DOM events

The elements panel lets you view the entire HTML source of the current page you are viewing. From here, you can edit, add or remove content and elements directly on the page. Though your changes won't be saved (any changes made here will be lost upon refreshing the page), sometimes it's helpful to make tweaks directly in this panel so you can see what effect the changes will have on your application before you implement them.

![Elements Panel][elements-panel]

### Selecting Elements to work with
You'll notice hovering over an HTML element in the devtools panel will also highlight that element on the page. This makes it easier to find and select the content you'd like to work with.

You can also select elements directly on the page by clicking the ![Square Arrow](http://i.imgur.com/ODylyUu.png) icon in the toolbar, then hovering over the element on the page. This will automatically bring you to the corresponding code for that element in the devtools panel.

If you're having trouble finding the element you'd like to work with, you can search through the entire HTML with `Cmd + F`. You'll notice a searchbar appear at the bottom of the panel where you can enter any string to find a match. This is useful if you'd like to search for an element by a known ID or class.

![Find in HTML][find-in-html]

## Your Challenge
Directly from the elements panel, we can edit the HTML and see the changes reflected immediately. (Again, these changes won't be saved to your codebase, but sometimes it helps to see the tweaks as you make them before committing to them.)

Let's work with the following edits on [girldevelopit.com](https://www.girldevelopit.com/):

* Change the headline to read: "Just Do It. Write Code"
* Hide the element that contains the map
* Delete the press logos section
* Place the top nav of "supporters" in its hover state
* Change the "flourish" logo in the headline to one of puppies


[elements-panel]: /assets/images/lessons/debugging-with-devtools/elements-panel.png
[find-in-html]: /assets/images/lessons/debugging-with-devtools/find-in-html.gif

***

# Accessibility

* Accessibility in Web development means enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way. 
* The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.
* _A great deal of web content can be made accessible just by making sure the correct HTML elements are used for the correct purpose at all times._

## WAI-ARIA
WAI-ARIA is a shorthand for (Web Accessibility Initiative – Accessible Rich Internet Applications). WAI-ARIA is a specification written by the W3C, defining a set of additional HTML attributes that can be applied to elements to provide additional semantics and improve accessibility wherever it is lacking. ARIA breaks down into 3 categories: 

* __Roles__: define the purpose of an element
* __Properties__:  help better describe what an element can do
* __States__: like properties that are designed to change – normally with the help of Javascript
* An element can only have one ARIA role at a time, but can have as many properties and states as necessary.

An important point about WAI-ARIA attributes is that they don't affect anything about the web page, except for the information exposed by the browser's accessibility APIs (where screenreaders get their information from). WAI-ARIA doesn't affect webpage structure, the DOM, etc., although the attributes can be useful for selecting elements by CSS.

![Aria Tree](/assets/images/aria.jpg)

## Rules of ARIA Use
There are a few core rules to keep in mind when using ARIA:

* If you can use native HTML elements and attributes to communicate the proper semantics (like `<nav>`, `<header>`, `<aside>`, `<button>`, etc.) and behavior then do so. Adding ARIA support where it’s not needed is __redundant code__ that isn’t doing anything. For the most part it won’t lead to problems, but it is a waste of time.
* Don’t change native semantics, unless you really have to.
* All interactive controls such as a button, sliding control, or drag-and-drop widget must be usable by the keyboard.
* There are 2 ways to hide information from the accessibility tree, which should be used very sparingly for situations where content is unimportant or meant to be hidden. You can do this either with `role=”presentation”` or `aria-hidden=”true”`. __You should never use these on an element that is visible and can be focused with the keyboard, such as an input field or a link__. 
* Lastly, all interactive elements such as form fields should have a name associated with them. Something like a `<label>` is perfect, and with ARIA, you can even specify that a certain element is labelled by or described by another element.

### Semantic HTML

* Elements such as `<nav>`, `<button>`, `<header>`, `<aside>` when read aloud help clarify what part of the html page someone is focused on.
* These elements have default implicit ARIA roles.
* Keep an eye on these so you can avoid writing redundant code.

### More Obscure Semantic HTML5 Elements

* `<q></q>`: inline quoted text
* `<time></time>`: date or specific time
* `<cite></cite>`: reference to a cited book, play, etc
* `<input type="email"></input>`: specific type of input field
* `<figcaption></figcaption>`: detailed caption on an image
* `<code></code>`: code snippet
* `<aside></aside>`: chunk of text that isn't the primary focus of the page
* `<article></article>`: small subsection of content
* `<abbr></abbr>`: abbreviation

```
Example: <nav></nav> tags have an implicit role="navigation". 
```
* [Table of elements with implicit Aria roles](http://lab.abhinayrathore.com/aria-cheatsheet/)

### Alt Attributes for Yo Images!

* Hugely important
* Low hanging fruit, easy to use on images. 
* Be verbose.
* Just do it.

```
bad: <img src="mountain.jpg" alt="mountain" />
good: <img src="mountain.jpg" alt="The cascade mountains at sunset in January" />
```

### Title Attributes for Yo Links!

* Low hanging fruit on anchor tags. 
* Not necessary for all links, but make sure to use them for your icon anchors – you know, things like your facebook, twitter, etc icons:

```html
<a class="facebook-icon" title="Facebook"><a/>
```

## ARIA Roles & Examples

__Define your main header, content, and footer__
The banner, main, and contentinfo roles are meant to be used only one time per page, and they help screen readers figure out how a page is laid out on a high-level.

```html
<header role="banner">
</header>
 
<main role="main">
</main>
 
<footer role="contentinfo">
</footer>
```
-------------------------------------------------

__Label and Describe Elements__

* `aria-label`: property that defines a short title for an element
* `aria-labelledby`: references the ID of another element, which is a short title for the element
* `aria-describedby`: is just like aria-labelledby – but is meant for longer descriptions instead of short titles

```html
<button aria-describedby="revertTooltip">Revert</button>
<div role="tooltip" id="revertTooltip">Reverting will undo any changes that have been made since the last save.</div>
```

```html
<div class="lightbox" aria-label="Image Lightbox">
  <img src="foo.jpg" alt="Foo" />
</div>
```
Now it’s important to remember that we don’t need to label everything, especially if there’s already a predefined way of labelling an element such as a `<figcaption>`, `title` attribute, or an image’s `alt` attribute. We only need to label something if the HTML doesn’t clearly indicate the purpose of an important element.

-------------------------------------------------

__Forms__

There are a lot of various ARIA roles and attributes that can be applied to forms, but we're just going to highlight some of the more important ones to include:

* `form`: simple and an implicit role for `<form>`
* `search`: role for a form with the primary function of searching data
* `aria-required`: property indicating whether a field is required
* `aria-invalid`: property indicating that the value of an input field is
  invalid (wait until after form submission to add this)

Important to remember:

1. Each form field should have a valid `<label>`. Either wrap the form field or reference it with the `for` attribute. If this isn’t possible, then you can use the ARIA labelling methods discussed above. You cannot substitute the placeholder attribute for a label because it’s not meant to be handled as a label; a placeholder is meant to simply be an example of what you’re supposed to enter in that field.
2. Forms are often tabbed-through via the keyboard, so tab order should make sense. Normally this isn’t a concern, but if you position or hide certain input fields via CSS/Javascript, then the tab order might become unintuitive. When this happens, you can set the tabindex attribute of an element to make sure that the tab order is how you expect it to be.

```html
<p id="formLabel">Information Form</p>
<form role="form" aria-labelledby="formLabel">
 
  <label for="name">Name</label>
  <input id="name" type="text" placeholder="John Doe" value="" />
 
  <label for="email">Email*</label>
  <input id="email" type="email" placeholder="foo@bar.com" value="" aria-required="true" />
  
  <span id="genderLabel">Gender</span>
  <div role="radiogroup" aria-labelledby="genderLabel">
    <input type="radio" name="gender" value="male"> Male<br>
    <input type="radio" name="gender" value="female"> Female<br>
    <input type="radio" name="gender" value="other"> Other
  </div>
 
  <label for="comment">Comment*</label>
  <textarea id="comment" aria-multiline="true" aria-required="true"></textarea>
 
  <input type="submit" value="Submit />
</form>
```


## Your Challenge
Take the following HTML snippet and make it accessible using explicit semantic HTML, ARIA roles, and attributes. 

```html
<div>
  <p>Main Title</p>
    <form action="/" method="get">
      <input type="search">
      <input type="submit">
    </form>
</div>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/products">About</a></li>
  <li><a href="/about">Contact</a></li>
</ul>
<div>
  <div>
    <p>Content Title Subject One</p>
    <p>This is the content of this important section</p>
  </div>
  <div>
    <p>Content Title Subject Two</p>
    <p>This is the content of the section important section</p>
  </div>
  <div>
    <img src="mountain.jpg" />
  </div>
</div>
<div>
  <span>Copyright &amp;copy; Aurelio De Rosa 2014</span>
</div>
```

## Additional Resources

* [HTML Nu Validator](https://validator.w3.org/nu)
* [9 Tools for Website Accessibility
  Testing](https://www.shopify.com/partners/blog/website-accessibility-testing)

