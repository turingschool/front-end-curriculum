---
title: HTML II - Forms, Devtools, Accessibility Best Practices
tags: html, introduction, practice
---

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
Refactor this form as follows:

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

#### WAI: Web Accessibility Initiative

#### ARIA: Accessible Rich Internet Application

WAI-ARIA is a specification written by the W3C, defining a set of additional HTML attributes that can be applied to elements to provide additional semantics and improve accessibility wherever it is lacking. There are three main features defined in the spec:



* __Roles__ — These define what an element is or does. Many of these are so-called landmark roles, which largely duplicate the semantic value of HTML5 structural elements e.g. `role="navigation"` (`<nav>`) or `role="complementary"` (`<aside>`), but there are also others that describe different pages structures, such as `role="banner"`, `role="search"`, `role="tabgroup"`, `role="tab"`, etc., which are commonly found in UIs.
* __Properties__ — These define properties of elements, which can be used to give them extra meaning or semantics. As an example, aria-required="true" specifies that a form input needs to be be filled in to be valid, whereas aria-labelledby="label" allows you to put an ID on an element, then reference it as being the label for anything else on the page, including multiple elements, which is not possible using `<label for="input">`. As an example, you could use `aria-labelledby` to specify that a key description contained in a `<div>` is the label for multiple table cells, or you could use it as an alternative to image alt text — specify existing information on the page as an image's alt text, rather than having to repeat it inside the alt attribute. You can see an example of this at Text alternatives.
* __States__ — Special properties that define the current conditions of elements, such as `aria-disabled="true"`, which specifies to a screenreader that a form input is currently disabled. States differ from properties in that properties don't change throughout the lifecycle of an app, whereas states can change, generally programmatically via JavaScript.

An important point about WAI-ARIA attributes is that they don't affect anything about the web page, except for the information exposed by the browser's accessibility APIs (where screenreaders get their information from). WAI-ARIA doesn't affect webpage structure, the DOM, etc., although the attributes can be useful for selecting elements by CSS.

### Rules of ARIA Use

* If you can use native HTML elements and attributes to communicate the proper semantics and behavior then do so. Adding ARIA support where it’s not needed is __redundant code__ that isn’t doing anything. For the most part it won’t lead to problems, but it is a waste of time.
* Don’t change native semantics, unless you really have to.
* All interactive ARIA controls must be usable with the keyboard.
* Don’t use role=“presentation” or aria-hidden=“true” on a visible focusable element.
* All interactive elements must have an accessible name.

#### Semantic HTML

* Elements such as `<nav>`, `<button>`, `<header>`, `<aside>` when read aloud help clarify what part of the html page someone is focused on.
* These elements have default implicit ARIA roles.

```
Example: <nav></nav> tags have an implicit role="navigation". 
Keep an eye on these so you can avoid writing redundant code.
```
* [Table of elements with implicit Aria roles](http://lab.abhinayrathore.com/aria-cheatsheet/)

#### Alt Tags!

* Hugely important
* Low hanging fruit, easy to use on images. 
* Be verbose.
* Just do it.

```
bad: <img src="mountain.jpg" alt="mountain" />
good: <img src="mountain.jpg" alt="The cascade mountains at sunset in January" />
```

### ARIA Roles & Examples

`role="img"`

* container for collection of elements that form an image. ie: can contain captions and descriptive text, or other stuff. Example of role="img":

```
<figure role="img" aria-labelledby="fish-caption">
```

### ARIA Attributes

* Added to HTML like roles, but they serve a different purpose. 
```
ie: <div role="definition" aria-labelledby="term">definition of term</div>
aria-checked="true"
```

* On an element meant to look like a checkbox, with the box checked, that doesn't already have a semantic HTML checkbox around it.

```
<span role="checkbox" aria-checked="true"></span>
aria-label="close"
```

* When there isn’t a label for an element to specify what it is or does, ie: The button looks like a typical close button, but an AT would read only the "X" which is unclear. The label describes what happens with the button is clicked.

```
<button aria-label="Close" onclick="myDialog.close()">X</button>
aria-labelledby="elementID"
```

* Contains the ID of the element the group is focused on or needs to be associated with

```
<figure aria-labelledby="mountain" role="group">
<img src="mountain.jpg" alt="The cascade mountains at sunset in January"/>
<figcaption id="mountain">I climbed the Cascades on <time datetime="2016-01-01 24:00">New Years Eve</time></figcaption>
</figure>
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
