---
title: Introduction to jQuery
layout: post
tags: jquery, javascript
---

jQuery is a library that allows us to use CSS selectors to find elements on the page and then interact with them. Under the hood, it's JavaScript. It gives our JavaScript super powers. It's used on about 78% of the top million web pages. So, it's worth while getting comfortable with it.

Let's say that we have a page with the following markup?

```html
<h1 class="important-header">Dinosaurs are awesome.</h1>
```

We could change the text programatically.

```js
$('h1').text('I AM A DINOSAUR.');
```

Play around with the following example.

- Remove the line of JavaScript.
- Change the replace text to something else.
- Change the `h1` selector to `.important message`
- Add the following line of code: `$('h1').css('backgroundColor', 'red');`

<p data-height="300" data-theme-id="23788" data-slug-hash="yJexXR" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/yJexXR/">Your First Lines of jQuery</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Responding to User Events

JavaScript along with its good friend jQuery are used to change and manipulate web pages. But, generally speaking, if you wanted the page to be different, you could have just written different HTML or CSS to begin with, right?

The real power of using jQuery to change pages emerges when we start listening for user events.

This is the crux of front-end engineering. We present a user interface and then as the user interacts with the UI, we change and update what he or she sees.

Let's take a look at the syntax and then we'll talk about what's happening.

<p data-height="300" data-theme-id="23788" data-slug-hash="zBrJpV" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/zBrJpV/">Your First Lines of jQuery</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

The following things are happening in the example above:

- We're querying for any element with the class of `change-me`.
- We're adding an "event listener" to those elements. (There is just one in this case.)
- We're listening for a user's mouse click.
- We're providing a function.
- In this example, the function will change the content of our heading.

Now, whenever a user clicks on that button. The browser will run the function we provided to the event listener.

## Try It: Adding a CSS Class

Open the example below in CodePen using the "Edit on CodePen."

<p data-height="300" data-theme-id="23788" data-slug-hash="gMPdzx" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/gMPdzx/">Event Listeners</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

We're using a jQuery method called `toggleClass()`. When the user clicks on the button, it either adds or remove the class `upside-down` depending on whether or not it was already there.

- Can you create some additional classes and toggle them?
- Can you change the text?
- Try out the following methods:
  - `toggle()`
  - `slideToggle()`
  - `fadeToggle()`

  We can also listen for things other thank clicks. Here are some other events I stole from the jQuery documentation.

- `.click()`
- `.contextmenu()`
- `.dblclick()`
- `.hover()`
- `.mousedown()`
- `.mouseenter()`
- `.mouseleave()`
- `.mousemove()`
- `.mouseout()`
- `.mouseover()`
- `.mouseup()`

Let's take a moment to play with each of them.

## Getting Values from the User

We're getting somewhere good. We can respond to actions. It would be cool if we could also get some information from the user. If you recall, HTML provides `<input>` fields for just this kind of situation. jQuery helps out by providing the `.val()` method for getting the value out of a selected `<input>` element.

Let's explore the following example.

<p data-height="300" data-theme-id="23788" data-slug-hash="YWwOmQ" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/YWwOmQ/">Event Listeners</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

In this example, we're doing the following:

- We're adding an event listener to the "Change Me" button.
- When it's clicked, we're grabbed the value of the input field and storing it into a variable.
- We're then updating the contents of the `<h1>` to the value we stored from the input field.

### A Note on Working with Numbers

JavaScript has two ways of seeing if two values are equal: `==` and `===`. `==` is notoriously weird, so we tend to avoid it. But there is a small problem with using `===` and getting numbers from input fields that we need to discuss.

Let's consider the following example:

<p data-height="300" data-theme-id="23788" data-slug-hash="GqoYJQ" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/GqoYJQ/">Is this two?</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Hmm—that's curious. It doesn't seem to work. It's actually a good reason. No matter what, input fields always hold strings of text. So, we're actually getting the string `"2"` and not the number `2`. It makes sense that those things are not equal. What we need to do is to turn that string into a number before we compare it.

This is pretty common, so JavaScript gives us a function for doing it called `parseInt()`.

```js
parseInt("2") === 2; // true!
```

Now, we can update our code as follows:

```js
$('.user-submit').on('click', function () {
  var number = $('.user-number').val();
  if (parseInt(number) === 2) {
    $('.message').text('You are right!');
  } else {
    $('.message').text('Sorry, that is not the number 2.');
  }
});
```

It works now!

<p data-height="300" data-theme-id="23788" data-slug-hash="rLxqwe" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/rLxqwe/">Is this two? (Non-Working)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Try It: Secret Passcode Time

Can you change the code above so that it's looking for a secret passcode before it prints a hidden message to the screen? It's totally your call on what the password is and what the message should be. I don't want to steal your creative thunder.

## Bringing It Together: CSS Transitions and Animations Together

We're getting there, right? We know how add and remove classes to elements on the page based on user input. We also know how to smoothly move things between two states using CSS. In the example below, the class of `clicked` is either added or removed whenever the box is clicked.

Change some of the properties of the `.box` and `.clicked` selectors and observe the changes. We'll show off some of our—umm—"most impressive" experiments in a few minutes.

<p data-height="300" data-theme-id="23788" data-slug-hash="xOVxxp" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/xOVxxp/">Flying Box</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Knowing Which Element We Clicked

Consider a situation where we have three boxes. When that particular box is clicked, we want to toggle a class. How do we know which box was clicked?

It turns out that when we add an event listener using jQuery, we get a special little variable called `this`. Lucky for us, `this` is set to the box we clicked on.

<aside>
  It's possible to select elements without jQuery. When we use jQuery our elements get a whole bunch of extra super powers. But, jQuery doesn't <em>know</em> that you want these when you're listening for an event. <code>this</code> is just the regular element. Use <code>$(this)</code> if you want to add those super powers back. At this very moment, it's probably unclear what those super powers are. So, let's just always use <code>$(this)</code> for now.
</aside>

Let's take a look at the example below:

<p data-height="300" data-theme-id="23788" data-slug-hash="EyKxpp" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/EyKxpp/">$(this)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>


#### Try It

Can you create a class that rotates the box 10 degress and then toggle that class on the specific box that was clicked? (For your own sanity, you probably want to remove the alert!)

#### Traversing the DOM

A little while ago, we wanted to figure out how to tell which element we clicked. But, what if we wanted to find an element in relation to the element we clicked? jQuery lets us navigate from one element to another. When the browser parses our HTML, it creates a big tree-like structure. jQuery lets us hop from branch to branch.

We want each box to have a button inside of it. When the user clicks the button. It should rotate the entire box. (We're rotating the box with a CSS class called `.click` because we're super original.) Let's look at some code.

<p data-height="300" data-theme-id="23788" data-slug-hash="vKGYzo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/vKGYzo/">Rotating Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

This code _does not_ work the way we'd like. What we need to do is when the user clicks on a button. Go up and find the box that it lives in and add the class to _that_ element. We can try it like this:

<p data-height="300" data-theme-id="23788" data-slug-hash="YWqzJo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/YWqzJo/">Rotating Boxes</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

You can see all of ways we can move around the DOM tree in [jQuery documentation](https://api.jquery.com/category/traversing/tree-traversal/).
