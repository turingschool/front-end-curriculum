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
- `Role` The function an element serves on the page.  *"What is this element?"*
- `State` The state of an element on a page (e.g., expanded, disabled). *"What is the status of this element?" (Boolean, changes and must be updated/kept current with JS as application is used)*
- `Property` Additional information about an element or other elements its related to.  *"What other info is important about this element?"*

<section class="call-to-action">
## Warm Up

Let's review from the [Intro to Accessibility Lesson](https://frontend.turing.edu/lessons/module-2/intro-to-accessibility.html){:target='blank'}

In groups, add some stickies to [this Jamboard](https://jamboard.google.com/d/1LXXq44uKw42UY8fvbXB4uybsh9D_-kKYkYkMHcg5q5c/edit?usp=sharing){:target='blank'}

- What have you already been implementing (or would like to implement) to make your applications accessible?
- What are some ways we can test how accessible an application is?
- What is semantic HTML and why is it important?
- What questions do you have about accessibility?
</section>


## WAI-ARIA

Web Accessibility Initiative - Accessible Rich Internet Applications.

[WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics){:target='blank'} is a set of **attributes**  we can add to our HTML tags to make our code more semantically meaningful for screen readers.

Think about the information provided by a set of `<div></div>` tags. What do we know about the content within those tags? Really, we know nothing. It’s a semantically void element that controls the APPEARANCE of its content - by default it is a block style element, but beyond that it could theoretically be literally any kind of data - a title, a paragraph, an image, a random red decorative sidebar…etc.

ARIA provides a series of tools and approaches to enhancing the meaning of your code. Today we will look at the three main aspects of ARIA - Roles, States, and Properties.

* __Roles__
* __States__
* __Properties__

*An element can only have one role at a time, but can have as many properties and states as necessary*

An important point about WAI-ARIA attributes is that they don't affect the appearance or functionality of a web page, except for the information exposed by the browser's accessibility APIs (where screen readers get their information from). WAI-ARIA doesn't affect webpage structure, the DOM, etc., although the attributes can be useful for selecting elements by CSS.

<section class="call-to-action">
What are some attributes you might put on an HTML element that don't show up on the page?
</section>

<!-- ![Aria Tree](/assets/images/aria.jpg) -->

#### Rules of ARIA Use
The core rules to keep in mind when using ARIA are:

If you can use native HTML elements and attributes to communicate the proper semantics (like `<header>`, `<nav>`, `<main>`, `<footer>`, `<button>` etc.) and then do so. Adding ARIA support where it’s not needed is __redundant code__ that isn’t doing anything. For the most part it won’t lead to problems, but it is a waste of time, and will annoy your screen reader users.

**Many "accessibility flags" come from developers _overusing_ ARIA. Only use ARIA as a last resort!!**

## Aria Roles, States, and Properties

### Roles

Roles define what an element is - what function it serves on the page. They give screen readers more information about how to interact with the element (`What am I?`)

These can be either **implicit** or **explicit**.

Implicit roles are those that are pre-defined by default in HTML. Ie: `<h1></h1>`, `<button></button>`, `<ul></ul>`. The semantic meanings of these elements are already clear by the element themselves and assistive technologies have this information too.

If you are writing good semantic HTML, the role will likely be implicit. Remember you can always check the role [here](https://www.w3.org/TR/html-aria/#docconformance){:target='blank'}

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

<section class="call-to-action">
### In Groups
- Use the [Table of elements and their implicit roles](https://www.w3.org/TR/html-aria/#docconformance){:target='blank'} and look up the following elements and their implicit roles
  - `<div>`
  - `<form>`
  - `<main>`
  - `<input>`
- Check out some of the other elements. Is there anything surprising?
- Take turns explaining what a role is.
- What is the difference between implicit and explicit roles?
- BONUS: Can you think of other examples for when we might want to override a default role?
</section>

## States

States describe how you are interacting with an element (What am I doing right now?) and rely on _boolean logic_.

For example, think about websites that have a sidebar menu that can be toggled open or closed. You might see something like this:

```html
<button>
  Toggle Menu
</button>
```

Here we have a button with text that says "Toggle Menu", probably indicating that when you click on said button it will toggle the menu open or closed.

What this doesn't tell you is if the menu is already open or closed, which is fine if you are a sighted user, but probably not great if you use assistive technology.

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
### Individual Exploration
<!-- Goal is just for them to experience using a screen reader and explore using the keyboard rather than mouse. Approximately 7 minutes.-->
- Open this [CodePen example](https://codepen.io/kaylaewood/pen/dyrLqWZ){:target='blank'} and explore it with your Mac's VoiceOver utility or Chrome's [Screen Reader Plugin](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en){:target='blank'} to see how screen readers interact with `aria-expanded`.  
- Play in the CodePen with your mouse.  Then just using your keyboard.  
- Go to other sites that you commonly visit - explore them as you normally would but with the VoiceOver on.
- If you have time, checkout where the site outlines details about the accessibility features implemented in that CodePen example.  

### In Groups
<!-- Approximately 5-7 mins -->
- Discuss the experience of using a screen reading technology
- Take turns explaining what states are.
- What would be another example of state that your app might need?
</section>

<section class="note">
### Reminder - VoiceOver Commands:

* **Starting/Stopping VoiceOver:** command + F5 (if you do not have an F5 key, you can navigate to  > System Preferences > Accessibility > VoiceOver > Enable VoiceOver)
* **Moving your VoiceOver cursor:** control + option + arrow key (ie. control + option + right arrow)
* **Moving your VoiceOver cursor into your web page’s content:** control + option + shift + down arrow
* **Moving your VoiceOver cursor out of your web page’s content:** control + option + shift + up arrow
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

The `aria-controls` property has a value of the ID of the element it is attached to. So in this case, we see that there is <nav> element with an id of `sidebar-menu` that is controlled by this button.



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
-  Spend the first 2-3 minutes on mute, individually comparing [this Codepen](https://codepen.io/damwhit/pen/WZqyEe){:target='blank'} with [this Codepen](https://codepen.io/damwhit/pen/XeLVbw){:target='blank'} while using your screenreader. What changes to do you notice?  
- Then discuss as a group.
  - Take turns explaining what a property is
  - Come up with a good analogy for property
  - How are properties different from state?
</section>

## Accessibility in Practice Moving forward

* Most of the above mentioned aria attributes should be used sparingly.
* The time to use them is if the answers to the following questions are yes:
  * Will sighted users see content that people with visual disabilities cannot?
  * Is there information about that content that screen readers might need that isn't already indicated in the HTML tags that make it up?  

__Below are some things that you should ALWAYS incorporate in your web applications__

<section class="call-to-action">
### Browser Focus Rings

DO NOT REMOVE THE FOCUS RING (outline) that appears on interactive elements without providing alternative styling or accounting for users who depend on the keyboard as their primary way of navigation.

This blog post on writing accessible css has a [section](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939){:target='blank'} that digs into why you shouldn't remove it (as well as some alternatives to take).[This website](http://www.outlinenone.com/){:target='blank'} offers a list of alternative styling options.

A design-friendly <a href="https://codepen.io/hannahhch/pen/QWjJbbz" target="\__blank"> example</a> of some alternative outline styles - try tabbing through it to see the options!
</section>

<section class="call-to-action">
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
  - This is one of the only times were you DONT need to supply alt text. Having both would be repetitive and redundant for screen reader users. To still be "valid", include an empty alt tag like this `<h3>A round, sleepy cat napping on a bed.</h3><img src="src/cat-pic.jpg" alt="">`
- What about background images??
  - Background images are purely for design, and should not be used to display important web content. Because of this, background images do not need alt text.

![Great example of alt tag](/assets/images/alt-example.png)
</section>

<section class="call-to-action">
### ARIA Labels for Your Links that have no text!

* Not necessary for all links, but make sure to use them for your icon anchors – you know, things like your facebook, twitter, etc icons:

```html
<a class="facebook-icon" aria-label="Link to Facebook"><a/>
```
</section>

<section class="call-to-action">
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
</section>

<section class="call-to-action">
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
</section>


## Additional Resources

* [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA){:target='blank'}
* [Aria Documentation](https://www.w3.org/TR/wai-aria){:target='blank'}
* [Aria Examples & Design Patterns](https://www.w3.org/TR/wai-aria-practices/#aria_ex){:target='blank'}
* [Web Accessibility in Mind](https://webaim.org/articles/userperspective/){:target='blank'}
* [9 Tools for Website Accessibility Testing](https://www.shopify.com/partners/blog/website-accessibility-testing){:target='blank'}

Tools
* [aXe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd){:target='blank'}
* [ChromeVox Plugin](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en){:target='blank'}
* [Colorblind](https://chrome.google.com/webstore/detail/colorblind-dalton-for-goo/afcafnelafcgjinkaeohkalmfececool/related?hl=en){:target='blank'}
* [Screen Reader Plugin](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en){:target='blank'}

Videos
* [Aria Roles, States, and Properties](https://www.youtube.com/watch?v=JptGV3XqNNk){:target='blank'}
* [ARIA, Accessibility APIs and Coding Like You Give A Damn!](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s){:target='blank'}
* [describedBy vs labeledBy video](https://www.youtube.com/watch?v=U8_VjI-Z1LA){:target='blank'}
* [History of Accessibility Tech](https://www.youtube.com/watch?v=qdB8SRhqvFc){:target='blank'}
