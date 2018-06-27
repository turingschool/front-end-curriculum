---
title: HTML Accessibility
length: 90
tags: html, ARIA, accessibility
---

## Vocab

- `Accessibility` Broadly, creating an experience that is available to literally anyone
- `ARIA` Accessible Rich Internet Applications
- `Role` The function an element serves on the page
- `State` The state of an element on a page (e.g., expanded, disabled)
- `Property` ARIA information about an element
- `VoiceOver` A screen reader that is built into apple computers

### Learning Goals

By the end of this lesson, you will know/be able to:

* Speak to why website accessibility is important
* Implement Semantic HTML to make websites more accessible
* Implement ARIA to make websites more available
* Learn basic osx screen reader commands to test accessibility

# Accessibility

Accessibility in Web development means enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way.
The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.
__Good News!__ _A great deal of web content can be made accessible just by making sure the correct HTML elements are used for the correct purpose at all times._
Most production websites are not very accessible. This is a great way to set yourself apart from other candidates in the job hunt and add value to teams early.
Let's watch the first ten minutes of [this video](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s) to see how far accessible technologies in web development have come.

## Ways to Make You Websites More Accessible

This lesson is largely focused on writing code in a way that is accessible for people with visual disabilities.
In terms of statistics, the World Health Organization estimates that "285 million people are estimated to be visually impaired worldwide: 39 million are blind and 246 have low vision."

### WAI-ARIA

WAI-ARIA is a shorthand for (Web Accessibility Initiative – Accessible Rich Internet Applications). WAI-ARIA is a specification written by the W3C, defining a set of additional HTML attributes that can be applied to elements to provide additional semantics and improve accessibility wherever it is lacking. ARIA breaks down into 3 categories:

* __Roles__: define the purpose of an element
* __Properties__: help better describe an element or what an element can do
* __States__: like properties that are designed to change – normally with the help of Javascript
* An element can only have one role at a time, but can have as many properties and states as necessary

An important point about WAI-ARIA attributes is that they don't affect the appearance or functionality of a web page, except for the information exposed by the browser's accessibility APIs (where screenreaders get their information from). WAI-ARIA doesn't affect webpage structure, the DOM, etc., although the attributes can be useful for selecting elements by CSS.

![Aria Tree](/assets/images/aria.jpg)

#### Rules of ARIA Use
The core rules to keep in mind when using ARIA are:

If you can use native HTML elements and attributes to communicate the proper semantics (like `<header>`, `<nav>`, `<main>`, `<footer>`, `<button>` etc.) and behavior then do so. Adding ARIA support where it’s not needed is __redundant code__ that isn’t doing anything. For the most part it won’t lead to problems, but it is a waste of time.

### Semantic HTML

Semantic html is very important for 3 reasons:
1. developer empathy - It makes code much easier to read and debug
2. accessibility - It allows screen readers to move through the web page seamlessly
  * semantic html provides implicit aria roles to html elements 
```html
<nav></nav> tags have an implicit role="navigation".
```
3. seo - it will make your webpage more discoverable 

__Side Note__: Documentation is your best friend when developing a website. Here are some super useful docs for better knowing what element to use and when, as well as what the implicit role of a given element is.
I will often search google to find documentation for an html element that fulfills a purpose. 
Example google search: `html element to seperate content mdn` formula for a search `[what you want to search for] [documentation source]`

* [List of html semantic elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [Table of elements with implicit Aria roles](https://www.w3.org/TR/html-aria/#docconformance)

### Roles, States, and Properties 

#### Roles 

Roles define what an element is - what function it serves on the page. They give screen readers more information about how to interact with the element.
They answer the question: `What am I?`

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

#### Roles: Avoiding Redundancy 

As previously mentioned, many semantic HTML5 elements have implicit roles that are hooked up for free in the markup itself. It's important to avoid bloating your code with redundant markup both for DRYness, and to avoid confusion for any users running your markup through assistive technology.

Things to Avoid:

* Redundancy
* Replacement

```html
<h1 role="heading"></h1>
<!-- Redundancy. H1 implicitly has a role of heading and a level of 1.  -->


<p role="heading"></p>
<!-- Replacement. You're using a paragraph but telling it to be a header. Just use an h1-h6 element.  -->
```

As much as possible, if there's an element that accomplishes the "role" you are trying to achieve, use it. HTML 5 has provided a boatload of really great, semantically rich elements that not only convey the appropriate role, but also handle all of the behavioral keyboard interactions without requiring additional javascript.

[Table of elements and their implicit roles](https://www.w3.org/TR/html-aria/#docconformance)

##### Your Turn
- Use the table of elements and look up the following elements and their implicit roles
  - div
  - footer
  - input
- Turn to your neighbor take turns explaining what a role is.
- What is the difference between implicit and explicit roles?

#### States 

checkbox is checked
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
  aria-expanded="true"
>
  Toggle Menu
</button>
```

This also allows you to target these elements using the `aria-expanded` attribute when interacting with them in your JavaScript.

Here is a good [menu example][Menu-Example] that you can use with voiceover to see how screen readers interact with aria-expanded.

[Menu-Example]: https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html

#### Your Turn

- Turn to your neighbor take turns explaining what states are.
- What would be another example of state that your app might need?
    * properties

### Properties ###

Properties - Give an element special characteristics and relate them to other elements
What do you need to know about me?
Required, label, described by
accessible-name

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

Open [this CodePen](https://codepen.io/damwhit/pen/WZqyEe) to play around with it.

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

Open [this CodePen](https://codepen.io/damwhit/pen/XeLVbw) to play around with it.

**NOTE**: Use `aria-label` with caution. The screen reader will now REPLACE whatever exists as the default button text and instead read the `aria-label` content.

#### Other Properties ####

* `aria-label` - Described above. Provides additional information about an element.
* `aria-required` - Tells a user if they need to provide input on an element
  before a form is submitted.
* `aria-controls` - Seen above. References an element that is controlled by the current element.
* `aria-labelledby` - Sister to `aria-label`, references the ID of another element, which is a short title for the element.
* `aria-describedby` - is just like aria-labelledby – but is meant for longer descriptions instead of short titles. This is read after the field-type is stated

#### Your Turn
- Turn to your neighbor and explain what a property is?
- Come up with a good analogy for property?
- How are properties different from state?

## Testing for Accessibility
 
### Using your screen reader (basic commands)

When people with visual disabilities are using your website they will be using some sort of screen reader. 
Luckily for us, we have one that comes with our computer! It's called VoiceOver and here are some basic commands we can use to test the accessibility of our webpages.

* Starting/Stopping voiceover - `command + F5`
* Moving your VoiceOver cursor - `control + option + arrow key` ie. `control + option + right arrow`
* Moving your VoiceOver cursor into your web page's content - `control + option + shift + down arrow`

#### Other Low Hanging Fruit to Make Your Sites More Accessible

### Alt Attributes for Yo Images!

* Hugely important
* Low hanging fruit, easy to use on images.
* Be verbose.
* Just do it.

```html
bad 
<img src="mountain.jpg" alt="mountain" />

good 
<img src="mountain.jpg" alt="The cascade mountains at sunset in January" />
```

### Title Attributes for Yo Links that have no text!

* Low hanging fruit on anchor tags.
* Not necessary for all links, but make sure to use them for your icon anchors – you know, things like your facebook, twitter, etc icons:

```html
<a class="facebook-icon" title="Facebook"><a/>
```

### Lang attribute on Yo HTML!

* Low hanging fruit for HTML 
* As far as non-english speaking screen readers are concerned, when they land on an english-speaking web page without lang attribute, it will be spoken with the screen reader language - making it impossible to understand - unless the screen reader user disables language switching in the screen reader.
* Just do it

```html
<html lang="en">
</html>
```

## ARIA Landmark Roles

One of the easiest ARIA features to implement, and one that provides significant immediate benefits to screen reader users, is landmark roles. To add them, simply add a relevant role attribute to an appropriate container within your HTML. This allows the screen reader to quickly jump to that section of the page. Below, you will find an example of how you might utilize the different landmark roles for your layout:

![Landmark Layout](/assets/images/landmarks.png)

__Take note:__

* The banner, main, and contentinfo roles are meant to be used only one time per page
* Take care in using `role="application"` - When assistive technologies encounter content that’s marked up with `role=”application”` they stop listening for users’ keystrokes and hand off all functionality to the application. This is due to an expectation that the application has its own model for navigating and operating all controls by keyboard. It generally should not be used.

Below you will find a code example of defining three landmark roles:

```html
<!-- explicitly using the role attribute -->
<!-- bad -->
<div role="banner"></div>
<div role="main"></div>
<div role="contentinfo"></div>

<!-- implicitly using the correct semantic tag -->
<!-- good -->
<header></header>
<main></main>
<footer></footer>
```
-------------------------------------------------

__Label and Describe Elements__

* `aria-label`: property that defines a short title for an element
* `aria-labelledby`: references the ID of another element, which is a short title for the element
* `aria-describedby`: is just like aria-labelledby – but is meant for longer descriptions instead of short titles. This is read after the field-type is stated

```html
<input type="text" aria-label="First name" placeholder="Grace">
```

```html
<button aria-describedby="revertTooltip">Revert</button>
<div role="tooltip" id="revertTooltip">Reverting will undo any changes that have been made since the last save.</div>
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

1. Each form field should have a valid `<label>` that is referenced with the `for` attribute. If this isn’t possible, then you can use the ARIA labelling methods discussed above. You cannot substitute the placeholder attribute for a label because it’s not meant to be handled as a label; a placeholder is meant to simply be an example of what you’re supposed to enter in that field.
2. Forms are often tabbed-through via the keyboard, so tab order should make sense. Normally this isn’t a concern, but if you position or hide certain input fields via CSS/Javascript, then the tab order might become unintuitive. When this happens, you can set the tabindex attribute of an element to make sure that the tab order is how you expect it to be.

```html
<p id="formLabel">Information Form</p>
<form role="form" aria-labelledby="formLabel">

  <label for="name">Name</label>
  <input id="name" type="text" placeholder="John Doe" value="">

  <label for="email">Email*</label>
  <input id="email" type="email" placeholder="foo@bar.com" value="" aria-required="true">

  <span id="genderLabel">Gender</span>
  <div role="radiogroup" aria-labelledby="genderLabel">
    <input type="radio" role="radio" name="gender" id="male" value="Male">
    <label for='male'>Male</label>
    <br>
    <input type="radio" role="radio" name="gender" id="female" value="Female">
    <label for='female'>Female</label>
    <br>
    <input type="radio" role="radio" name="gender" id="other" value="Other">
    <label for='other'>Other</label>
  </div>

  <label for="comment">Comment*</label>
  <textarea id="comment" aria-multiline="true" aria-required="true"></textarea>

  <input type="submit" value="Submit">
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
    <img src="mountain.jpg">
  </div>
</div>
<div>
  <span>Copyright &amp;copy; Aurelio De Rosa 2014</span>
</div>
```
<!-- solution: http://codepen.io/team/turing/pen/PWKMga?editors=1000 -->

## Perfect is the enemy of good

For many people, the fear of not getting EVERYTHING right when it comes to accessibility causes them to not do accessibility at all. Don't be that person.

```markdown
Helping one group of people is a good place to start. There's a temptation with accessibility to think it has to be perfect. This is technology. This is people. We don't do perfect. It never happens. So, really, please don't go out there and think that if you're going to do accessibility that you have to get everything right. Perfect is, very much, the enemy of good. 
- Leonie Watson, Accessibility Engineer
```

## Additional Resources

* [MDN Documnentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [Aria Documentation](https://www.w3.org/TR/wai-aria)
* [Aria Examples & Design Patterns](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
* [Web Accessibility in Mind](https://webaim.org/articles/userperspective/)
* [9 Tools for Website Accessibility Testing](https://www.shopify.com/partners/blog/website-accessibility-testing)

Tools
* [aXe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)

Videos
* [Aria Roles, States, and Properties](https://www.youtube.com/watch?v=JptGV3XqNNk)
* [ARIA, Accessibility APIs and Coding Like You Give A Damn!](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)
* [describedBy vs labeledBy video](https://www.youtube.com/watch?v=U8_VjI-Z1LA)

