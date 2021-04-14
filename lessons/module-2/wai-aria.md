---
title: WAI ARIA
length: 90
tags: html, ARIA, accessibility
---

## Learning Goals

* Review ways we already make websites accessible
* Be able to use the three different types of ARIA attributes
* Determine when ARIA is and is not needed to make websites more accessible

## Vocab

- `Accessibility` Broadly, creating an experience that is available to anyone and everyone
- `ARIA` Accessible Rich Internet Applications
- `Role` The function an element serves on the page
- `State` The state of an element on a page (e.g., expanded, disabled)
- `Property` Additional information about an element or other elements its related to

<section class="call-to-action">
## Warm Up

Let's review from last week's [Intro to Accessibility Lesson](https://frontend.turing.io/lessons/module-2/intro-to-accessibility.html)

In groups, add some stickies to [this Jamboard](https://jamboard.google.com/d/1Cx_0TzXvo2HYrfW4LSDTdRevqPxI7ZfUaoW38e9j-io/viewer?f=0)

- What have you already been implementing (or would like to implement) to make your applications accessible?
- What are some ways we can test how accessible an application is?
</section>

## Accessible Defaults

### Semantic HTML

There are two different elements that are semantically neutral: Those are `span` and `div` elements. Avoid using them except in instances that are purely for styling.

Semantic html is very important for 3 reasons:
1. developer empathy - It makes code much easier to read and debug
2. accessibility - It allows screen readers to move through the web page seamlessly
3. SEO (search engine optimization) - it will make your webpage more discoverable via Google

__Side Note__: Documentation is your friend when developing a website. Here are some super useful docs for better knowing what element to use for a given scenario.

* [List of html semantic elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)


### CSS/Styling
#### Browser Focus Rings

DO NOT REMOVE THE FOCUS RING that appears on interactive elements without providing alternative styling or accounting for users who depend on the keyboard as their primary way of navigation.

This blog post on writing accessible css has a [section](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) that digs into why you shouldn't remove it (as well as some alternatives to take).[This website](http://www.outlinenone.com/) offers a list of alternative styling options. And [this article](https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2) also has some alternatives to use to get rid of the focus ring while still keeping things accessible.

A design-friendly <a href="https://codepen.io/hannahhch/pen/QWjJbbz" target="\__blank"> example</a> of some alternative outline styles.

## WAI-ARIA

[WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics) is a shorthand for (Web Accessibility Initiative – Accessible Rich Internet Applications). WAI-ARIA is a specification written by the W3C, defining a set of additional HTML attributes that can be applied to elements to provide additional semantics and improve accessibility wherever it is lacking. ARIA breaks down into 3 categories:

* __Roles__
* __States__
* __Properties__
* An element can only have one role at a time, but can have as many properties and states as necessary

An important point about WAI-ARIA attributes is that they don't affect the appearance or functionality of a web page, except for the information exposed by the browser's accessibility APIs (where screenreaders get their information from). WAI-ARIA doesn't affect webpage structure, the DOM, etc., although the attributes can be useful for selecting elements by CSS.

*These are attributes that are "hidden" in your HTML for screen readers to see.* Think of other attributes you might put on an HTML element that don't show up on the page:
- `disabled`
- `alt`
- `lang`


<!-- ![Aria Tree](/assets/images/aria.jpg) -->

#### Rules of ARIA Use
The core rules to keep in mind when using ARIA are:

If you can use native HTML elements and attributes to communicate the proper semantics (like `<header>`, `<nav>`, `<main>`, `<footer>`, `<button>` etc.) and behavior then do so. Adding ARIA support where it’s not needed is __redundant code__ that isn’t doing anything. For the most part it won’t lead to problems, but it is a waste of time, and will annoy your screen reader users. 

**Many "accessibility flags" come from developers _overusing_ ARIA.**

## Aria Roles, States, and Properties

### Roles

Roles define what an element is - what function it serves on the page. They give screen readers more information about how to interact with the element (`What am I?`)

These can be either **implicit** or **explicit**.

Implicit roles are those that are pre-defined by default in HTML. Ie: `<h1></h1>`, `<button></button>`, `<ul></ul>`. The semantic meanings of these elements are already clear by the element themselves and assistive technologies have this information too.

If you are writing good semantic HTML, the role will likely be implicit. Remember you can always check the role [here](https://www.w3.org/TR/html-aria/#docconformance)

Implicit Role Example:

```html
<h1>Hello World</h1>
<!-- The above markup has an implicit role of "heading level 1" -->

<nav></nav>
<!-- The above markup has an implicit role of "navigation" -->
```

Explicit Role Example:

```html
<form role='search'></form>
A form element has a role of 'form' by default. We can override that role using the `role` attribute and providing it another value. Like in the case above where we are using the role of search.
```

[Table of elements and their implicit roles](https://www.w3.org/TR/html-aria/#docconformance)

<section class="call-to-action">
## In Groups
- Use the table of elements and look up the following elements and their implicit roles
  - div
  - footer
  - input
- Check out some of the other elements. Is there anything suprising?
- Take turns explaining what a role is.
- What is the difference between implicit and explicit roles?
</section>

## States

States describe how you are interacting with an element (What am I doing right now?)

For example, think about websites that have a sidebar menu that can be toggled open or closed. You might see something like this:

```html
<button>
  Toggle Menu
</button>
```

Here we have a button with text that says "Toggle Menu", probably indicating that when you click on said button it will toggle the menu open or closed.

What this doesn't tell you is if the menu is already open or closed, which is fine if you have fully functional eyesight, but probably not great if you use assistive technology.

Luckily ARIA provides state information that we can add to our markup.

```html
<button
  id="menu-button"
  aria-expanded="true"
>
  Toggle Menu
</button>
```

```javascript
let button = document.getElementById("menu-button");

button.addEventListener("click", function() {
  let attr = button.getAttribute("aria-expanded");

  if (attr === 'true') {
     button.setAttribute("aria-expanded", false);
  } else {
     button.setAttribute("aria-expanded", true);
  }
});
```

This also allows you to target these elements using the `aria-expanded` attribute when interacting with them in your JavaScript or CSS.

States can also be implicit, imagine a checkbox element in html. If you toggle the checked property that state will change as well.


<section class="call-to-action">
## In Groups
- Checkout this [Menu-Example](https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html) with VoiceOver to see how screen readers interact with `aria-expanded`
- Take turns explaining what states are.
- What would be another example of state that your app might need?
</section>

## Properties

Properties give an element special characteristics that you can relate to other documents or elements.

For example, take the button we mentioned when discussing states. That button specifically controlled the sidebar-menu, but what if there are multiple menus that have similar buttons? ARIA lets us add additional properties that link elements together.

```html
<button
  aria-expanded="true"
  aria-controls="sidebar-menu"
>
    Toggle Menu
</button>

<nav id="sidebar-menu">
  <!-- ...nav code here... -->
</nav>
```

The `aria-controls` property has a value of the ID of the element it is attached to. So in this case, we would assume that there is another element with an id of `sidebar-menu` that is contolled by this button.



You can also use something called an `aria-label` property. Think of this like an `alt` tag for accessibility - this property allows you to enter additional text that provides more information to the user. This information won't show up on the page but will be read by the screen reader.

```html
<button
  aria-expanded="true"
  aria-controls="sidebar-menu"
  aria-label="Close sidebar navigation menu"
>
    Toggle Menu
</button>
```

You can then use JavaScript to keep this information up to date - for example, once `aria-expanded="false"`, you'd set your `aria-label` to `"Open sidebar navigation menu"`.

**NOTE**: Use `aria-label` with caution. The screen reader will now REPLACE whatever exists as the default button text and instead read the `aria-label` content.

#### Other Properties

* `aria-label` - Described above. Provides additional information about an element.
* `aria-required` - Tells a user if they need to provide input on an element
  before a form is submitted.
* `aria-controls` - Seen above. References an element that is controlled by the current element.
* `aria-labelledby` - Sister to `aria-label`, references the ID of another element, which is a short title for the element.
* `aria-describedby` - is just like aria-labelledby – but is meant for longer descriptions instead of short titles. This is read after the field-type is stated

<section class="call-to-action">
## In Groups
- While using VoiceOver, compare [this Codepen](https://codepen.io/damwhit/pen/WZqyEe) and compare it with [this Codepen](https://codepen.io/damwhit/pen/XeLVbw). What changes to do you notice?
- Take turns explaining what a property is
- Come up with a good analogy for property
- How are properties different from state?
</section>

## Accessibility in Practice Moving forward

* Most of the above mentioned aria attributes should be used sparingly.
* The time to use them is if the answer to the following question is yes:
  * Will sighted users see content that people with visual disabilities cannot?

__Below are some things that you should ALWAYS incorporate in your web applications__


### Alt Attributes for Your Images!

* Hugely important (for both accessibility and SEO!)
* Low hanging fruit, easy to use on images.
* Be verbose.
* Just do it.

```html
meh...
<img src="mountain.jpg" alt="mountain">

yes!
<img src="mountain.jpg" alt="The cascade mountains at sunset in January">
```

- Wait, what if there is _already_ descriptive text below my image?? 
  - This is one of the only times were you DONT need to supply alt text. Having both would be repetive and redundant for screen reader users. To still be "valid", include an empty alt tag like this `<h3>A round, sleepy cat napping on a bed.</h3><img src="src/cat-pic.jpg" alt="">`
- What about background images??
  - Background images are purely for design, and should not be used to display important web content. Because of this, background images do not need alt text. 

![Great example of alt tag](/assets/images/alt-example.png)

### ARIA Labels for Your Links that have no text!

* Not necessary for all links, but make sure to use them for your icon anchors – you know, things like your facebook, twitter, etc icons:

```html
<a class="facebook-icon" aria-label="Link to Facebook"><a/>
```

### Lang attribute on Your HTML!

* Is often populated by default if using Emment or other HTML boilerplates!
* As far as non-english speaking screen readers are concerned, when they land on an english-speaking web page without the `lang` attribute, it will be spoken with the screen reader language - making it impossible to understand - unless the screen reader user disables language switching in the screen reader.

```html
<html lang="en">
</html>
```

* Fun Fact - You can change this if you have a snippet of text in another language!

```html
<h1 lang="es">¿Donde está la biblioteca?</h1>
```

### Label Input Elements

Note: you should _really_ be providing labels with all of your input fields, like this!

```html
<label for="firstName">First name</label>
<input id="firstName" type="text" placeholder="Clementine">
```

You can use the `aria-label` below to define a label, but remember to use semantic, native elements whenever possible.

```html
<input type="text" aria-label="First name" placeholder="Clementine">
```


## Additional Resources

* [MDN Documnentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [Aria Documentation](https://www.w3.org/TR/wai-aria)
* [Aria Examples & Design Patterns](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
* [Web Accessibility in Mind](https://webaim.org/articles/userperspective/)
* [9 Tools for Website Accessibility Testing](https://www.shopify.com/partners/blog/website-accessibility-testing)

Tools
* [aXe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
* [ChromeVox Plugin](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)
* [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa/related?hl=en)
* [Colorblind](https://chrome.google.com/webstore/detail/colorblind-dalton-for-goo/afcafnelafcgjinkaeohkalmfececool/related?hl=en)

Videos
* [Aria Roles, States, and Properties](https://www.youtube.com/watch?v=JptGV3XqNNk)
* [ARIA, Accessibility APIs and Coding Like You Give A Damn!](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)
* [describedBy vs labeledBy video](https://www.youtube.com/watch?v=U8_VjI-Z1LA)
* [History of Accessibility Tech](https://www.youtube.com/watch?v=qdB8SRhqvFc)
