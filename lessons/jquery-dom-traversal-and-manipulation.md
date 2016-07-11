---
title: jQuery DOM Traversal, Manipulation, and Events
length: 180
tags: javascript, jquery
status: draft
---

## Learning Goals

* Use jQuery selectors to find content
* Understand that jQuery collections allow you to manipulate multiple elements with a single method
* Use jQuery's DOM traversal methods to move around the DOM
* Add CSS styles using jQuery
* Append new content to the DOM
* Add event listeners to elements currently in the DOM
* Understand that adding an event listener will not effect elements you add to the DOM in the future

## Part One: Selectors

### Basic Selectors

Out of the box, jQuery supports the selector syntax from CSS to find elements on the page just like `document.querySelector` and `document.querySelectorAll`. So, you've already come pre-equipped with a bunch of knowledge for finding elements.

That said, let's review some of the different ways we can find an element on page:

* `$('p')`, selects all of a given element.
* `$('#heading')`, selects the element with a given id.
* `$('.important')`, selects all of the elements with a given class.

You can also use multiple selectors in the same statement:

* `$('p, #heading, .important')`, selects everything listed above.

### Chaining Selectors

There are a few different ways to chain selectors to use them together. You can seperate these selectors with a comma, a space, or nothing at all.

* Comma: `$('p, #heading, .important')` just combines all of the selectors together.
* Space: `$('p #heading .important')` treats each selector as a child of the previous. This will give you items of the class `important` that are children of the id `heading` which are inside a `<p>` tag.
* Nothing: * `$('p#heading.important')` matches elements that have all three selectors. This selector would select a paragraph which was defined like this: `<p id="heading" class="important">`

### Attribute Selectors

On top of querying for types of elements, classes, and ids, we can also search for elements by the type of attributes that it has.

Here are some examples:

- `$('input[type="date"]')` will get all of the date selector inputs.
- `$('input[type="number"]')` will get all of the number inputs.
- `$('input[type="submit"]')` will get all of the form submission buttons.

See the API documentation [here](http://api.jquery.com/category/selectors/attribute-selectors/).

Let's take a look at [this simple form](https://turingschool-examples.github.io/jquery-playgrounds/form.html) and try out some selectors.

### The Special `:checked` Selector

It's not uncommon that you might want to go look for all of the "checked" elements. This includes drop downs, checkboxes, and radio buttons.

- `$('input:checked')` will return all of the checked checkboxes.
- `$('input[type="radio"]:checked')` will return all of the checked radio buttons.

### Quick Practice

- Can you find all of the check boxes?
- Can you find all of the radio buttons?
- Can you find all of the checked elements?
- What about all of the checked checkboxes?

Use Chrome Developer Tools to select the form fields. When properly selected you should see an array of selected elements. You should see sections of the page highlighted when you hover over the elements in the array.

### Laboratory

[Here is an little experiment][exp] where you can play around and try out some different selectors.

[exp]: http://codylindley.com/jqueryselectors/

## Exercise, Part One: The Presidents

For this exercise, we're going to play with [a table of the Presidents of the United States of America][presidents].

[presidents]: https://turingschool-examples.github.io/jquery-playgrounds/presidents.html

Let's try out a few things, just to get our hands dirty. We'll use the console in the Chrome developer tools to validate our work.

* Select each `tr` element.
* Select all of the elements with the class of `name`.
* Select all of the elements with either the class of `name` or `term`.
* Select all of the checked—umm—checkboxes. (You'll probably want to check some checkboxes first.)
* Select all of the `td` elements with the class of `number` that appear in a row of a `tr` with the class of `whig`.

## Part Two: Manipulating CSS

Once we have an element in our sites, we probably want to do something with it, right?

In this case, let's add some CSS styling. Let's say we wanted to grab all of the Federalist presidents and turn their font color pink. We could do something like this:

```js
$('.federalist').css('color', 'pink');
```

One thing you might have noticed about CSS is that it really likes hyphens. So, to change a background color, you would use `background-color`. The thing about hyphens is that they are a no-no in JavaScript. So, we *should* camel-case our property names in our CSS methods.

```js
$('.federalist').css('backgroundColor', 'pink');
```

You'll notice I said "should" instead of must. At the end of the day that's just a string. You can do it the other way, but it's against convention.

```js
$('.federalist').css('background-color', 'pink');
```

Right now, we're setting individual properties. We can also pass in a conditional object in order to change multiple CSS attributes all at once.

```js
$('.federalist').css({
  backgroundColor: 'pink',
  fontWeight: 'bold'
});
```

If you ignored me earlier and insisted on using hyphens, you're going to have to wrap those property names in quotes now. Yuck.

Writing CSS by hand is probably a bad idea. We're better off using classes to style our content.

We can add and remove classes pretty easily in jQuery.

```js
$('.federalist').addClass('red');
$('.federalist').removeClass('red');
```

Keeping track of state is hard. jQuery is here to help. What if we were in a position where we want to add a class if an element had it, but remove it if it didn't? jQuery's `hasClass` method is certainly helpful in this case.

```js
$('.federalist').hasClass('federalist'); // Returns true, obviously.
```

But, it seems like this is a common pattern and there should be a better way to do this, right?

The other option is to use `toggleClass`, which will either add or remove the class depending on whether or not the class currently exists.

```js
$('.federalist').toggleClass('red');
```

(Do this like 17 times for good measure.)

## Exercise, Part Two: Style the Presidents

* Add the class of `red` to all of the Republicans.
* Add the class of `blue` to all of the Democrats.
* Add the class of `yellow` to the term column of the table.
* Take all the whig presidents and give them a purple background and white text.

## Part Three: Filtering and Traversal

Let's talk about a few [DOM traversal methods](http://api.jquery.com/category/traversing/tree-traversal/).

Here are some of the all-stars of the DOM traversing world:

### `parent()`

The `parent()` method will take the currently selected element and go one level up the DOM tree.

<p data-height="300" data-theme-id="23788" data-slug-hash="AXQkEZ" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/AXQkEZ/">jQuery Parent</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### `parents()`

This one will include all of the parents—all the way up to the `<body>` of the page. Additionally, you can pass it a selector. `$('.some-selector').parents('.active')` will traverse up the DOM, but only return the elements with the class of `.active`.

<p data-height="300" data-theme-id="23788" data-slug-hash="AXQkXA" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/AXQkXA/">jQuery Parents</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### `children()`

This method returns all of the direct childen of the given selection. It will _not_ search their children. Like `parents()`, `children()` will also take a selector. `$('.some-selector').children('.active')` will go through the children of the current query and only return the elements with the class of `.active`.

<p data-height="300" data-theme-id="23788" data-slug-hash="VjrOjp" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/VjrOjp/">jQuery Children</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### `siblings()`

`siblings()` will select all of the sibling elements based on the current query. Like its friends, it will also take a selector if you're polite.

<p data-height="300" data-theme-id="23788" data-slug-hash="Gqrapr" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/Gqrapr/">Siblings</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### `find()`

One you have queried for some elements using jQuery, you can use `find()` to drill down a little deeper.

It's useful to think of `find()` as a more powerful alternative for `children()`. The `children()` method will look only one level down the tree. `find()` will search the children, the grandchildren, the great-grandchildren, and so on. The method will look at anything you currently have selected and then search within those results.

<p data-height="300" data-theme-id="23788" data-slug-hash="dXVEpN" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/dXVEpN/">jQuery Find</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Which one do you use? It depends, do you want to traverse all the way down the tree or just down one level.


## Exercise, Part Three: One-Term Presidents

* Add the `green` class to anyone who served right after a president who died.
* Find all of the presidents who only served one term and add the class `red`.
* Add the class of `blue` to the parent of a checked checkbox.
* Add the class of `yellow` to the siblings of the parent (`td`, in this case) of an unchecked checkbox.

## Part Four: Adding to the DOM

Let's take a look at some approaches of changing content in the DOM.

### `text()`

`text()` is like using `innerText` or `textContent`. There is an important difference. The vanilla DOM manipulation tools allow you to assign the new value to `innerText`. The jQuery methods on the other hand work on everything as if it were a method.

Let's compare and contrast.

```js
var vanilla = document.querySelector('.some-element');
var jq = $('.some-element');

vanilla.textContent = 'New text.';
jq.text('New text.');
```

### `html()`

`html()` is to `text()` as `innerHTML` is to `innerText`. Basically, change the HTML contents of a bigger element, not just the text of it. As a fun experiment, select an element and try to replace the contents to `<script>alert('HACKED!');</script>` using both `text()` and `html()`. Let me know how it goes for you.

### `append()`

`html()` replaces the entire contents of an element. `append()` adds new content onto the end of it.

### `prepend()`

`html()` replaces the entire contents of an element. `append()` adds new content onto the beginning of it.

In order to take both `append()` and `prepend()` for a spin, let's try the following code in the exercise below.

<p data-height="300" data-theme-id="23788" data-slug-hash="pbWXgg" data-default-tab="js,result" data-user="turing" data-embed-version="2" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/pbWXgg/">Append/Prepend</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Exercise, Part Four: Dead Presidents

* Find all of the presidents who died in office (hint: they have a `died` class on their `tr`).
* Append `<span class="died">(Died)<span>` to the the `term` column.
* **Bonus**: Add a radio button before the number in each row.

## Part Five: Simple Event Binding

### Event Driven Programming

Event driven programming relies on some external action to determine how the program behaves. Some external actor (a user or another computer) takes an action, and your program responds.

You've done event driven programming before. Can you think of projects that use this pattern?

### Event binding using jQuery

Start by looking at the [jQuery Events API](http://api.jquery.com/category/events/).

The Events API tends to mimic the native DOM events from your last project, but with some abstraction to standardize across all of the browsers in use today.

Our main focus today is going to be on the `.on()` method. As of jQuery 1.7 and later, this is the preferred method for binding events. You may see `.bind()` as well, but this support older code.

#### Knowing Which Element We Clicked

jQuery makes it do stuff to many elements ate the same time, but if we add event listeners to a bunch of boxes at the same time, then how we know which one the user clicked? Consider a situation where we have three boxes. When that particular box is clicked, we want to toggle a class. How do we know which box was clicked?

It turns out that when we add an event listener using jQuery, we get a special little variable called `this`. Lucky for us, `this` is set to the box we clicked on.

<aside>
  As you hopefully know, it's possible to select elements without jQuery. When we use jQuery our elements get a whole bunch of extra super powers. But, jQuery doesn't <em>know</em> that you want these when you're listening for an event. <code>this</code> is just the regular element. Use <code>$(this)</code> if you want to add those super powers back. At this very moment, it's probably unclear what those super powers are. So, let's just always use <code>$(this)</code> for now.
</aside>

Let's take a look at the example below:

<p data-height="300" data-theme-id="23788" data-slug-hash="EyKxpp" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/EyKxpp/">$(this)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Exercise, Part Five:

Let's refer back the the Presidents this here United States of America:

* Add an event handler to all of the checkboxes that when the box is checked, adds the `yellow` class to the `tr`.
* Add an event handler that adds the `red` class to a `td` element when it's clicked on.
* Modify the event handler above to remove the `red` class when it is clicked a second time.
* **Bonus**: Add a new `div` to the page, every time a checkbox is checked, add that presidents name to the `div`.
* **Bonus 2**: Remove that presidents name when the box is unchecked.
