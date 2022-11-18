---
title: jQuery Intro - DOM Traversal, Manipulation, and Events
length: 120
tags: jquery, javascript
---

## Learning Goals
- Understand what jQuery is, and how it abstracts vanilla JS
- How to use jQuery to Interact with the DOM

jQuery is a library that allows us to use CSS selectors to find elements on the page and then interact with them. Under the hood, **it's JavaScript**. It's used on about [80% of the top million web pages](https://trends.builtwith.com/javascript), so it's worth while getting comfortable with it.

## Vocab

- `jQuery` A library built to get around the pain points of early Javascript
- `CDN` Content Delivery Network
- `Minified` A file that the browser can still interpret correctly, but has none of the bits helpful to humans. Used to reduce the size of a file
- `CSS Selector` A description of how to find an element on the page

#### Loading the jQuery library

To use the jQuery library, you'll need to include the following lines in your HTML:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/your/jquery.min.js"><\/script>')</script>
```

Let's talk about what's going on here:

In the first line, we're linking to the [Google-hosted CDN (Content Delivery Network) for jQuery](https://developers.google.com/speed/libraries/#jquery). Both Google and Microsoft host the jQuery library, and for our purposes we'll go ahead and stick with the Google link. In this link, we can see which version of jQuery we're using, which is `3.4.1` (as of the writing of this lesson).   

<!--
Main benefit of loading from a CDN vs your own server, is that your user likely has a copy of google's cdn jquery already cached in their browser.
 -->

In the second line, we're including a link to a local set of jQuery files that we've downloaded to our machine and included in the directory for our project. This line isn't strictly required for us to use jQuery, but rather is a fallback to make sure that we can still access the library in the event that we are unable to access the CDN for some reason (better safe than sorry, right?). You can [download a copy of jQuery here.](http://jquery.com/download/) **Note: be sure to download the same version that you're referencing in the Google CDN link.**  

Note: If you look at the file extension you'll see the file says `jquery.min.js` - that `min` extensions indicates that its a `minified` version of the jQuery library. jQuery is a large library, and in order to maximize performance (especially on larger code bases), reducing how much space your code takes up is incredibly important. A minified file indicates that it has been abbreviated using one of many different encryption techniques. You can read more about it [in this Wikipedia article](https://en.wikipedia.org/wiki/Minification_(programming)) if you are interested in the what and why of minification.

## First Lines of jQuery

Let's say that we have a page with the following markup:

```html
<h1 class="important-header">Dinosaurs are awesome.</h1>
```

Just like with plain ol' JavaScript, jQuery lets us change the text programatically. The neat thing about jQuery, though, is that it significantly reduces the amount of code we have to write.

Think about how you would use `innerText` to change the content in an HTML page with JavaScript. With vanilla JavaScript, you would have to write:

```js
document.querySelector('h1').innerText = 'I AM A DINOSAUR.'
```

Now, take a look at the same line of code in jQuery:

```js
$('h1').text('I AM A DINOSAUR.');
```

See how much simpler jQuery makes the process?

### jQuery Selector / Object

Whenever we use jQuery to do something on the DOM, we'll start by using this function:

```js
$("[selector]")
```

`$()` is known as the __jQuery function__.

We can put a `CSS Selector` (or combination of selectors) in to this function to grab element(s) off of the DOM.

The jQuery function returns what's known as a __jQuery object__. You can think of this as being analogous to the `Element` that `.querySelector` returns.

The jQuery function can also be used to turn a query selected element into a jQuery object

```js
let mainHeading = document.querySelector('h1');
$(mainHeading).text('Hello World');

// Works the same as:

$('h1').text('Hello World');

// However, this won't work:
mainHeading.text('Hello World')

```

The jQuery object contains a series of methods (such as `.text()`) that we can use to do a variety of things on the DOM, including:

- Respond to user events
- Modify page content (text, styling, etc)
- Traverse the DOM

among others. Rather than spell out the syntax for everything jQuery can do, we're going to let __you__ do some research and teach the class your findings.

## jQuery Jigsaw

The next part of this lesson will be set up as a jigsaw. This will be good practice for how you can approach learning new topics on the job, especially when there won't be someone to formally teach you.

Everyone will be split into four groups, each responsible for researching one of the following:

- jQuery selectors and the jQuery Object
- Responding to events
- DOM traversal
- Getting and setting content on the page

Each group will have time to research a series of questions, and create a guide with examples in repl or codepen, which they will then present to the class. Starters for your <a href="https://repl.it/@Khalid_Williams/jQuery-setup" target="\__blank">repl</a> or <a href="https://codepen.io/khalidwilliams/pen/eYYJbaq" target="\__blank"> codepen</a> can be found here.

For the presentations, feel free to put together whatever format works best for the group (gist / markdown file with links to examples, everything in a codepen with examples, everything in a repl.it with examples, etc). Just make sure you have examples to demo.

We'll research / prep for 30 - 40 minutes, then each group will take 10 minutes to present and answer questions.

### Research Questions

In your respective group, answer / build examples for the following questions (feel free to go more in depth if you find interesting things!):

#### Selectors

For the following questions, be sure to compare how you would perform the action in vanilla JS as well as with jQuery.

- How do you select a single element in jQuery? How does this differ from vanilla JS?
- What does the jQuery function return? How is it similar or different from a DOM Element object?
- How can you select multiple elements with jQuery?
- How can you select multiple elements with different IDs and classes in _one_ selector expression?
- What are the different ways of chaining selectors?
- How do you select elements based on different attributes?
- How do you select a checkbox based on its state?
- What are some important "gotchas" to be wary of with jQuery objects?


#### Events

- What method(s) allows us to listen for / respond to an event with jQuery?
- Which method allows us to listen to any kind of event? How do you specify the event?
- How do you take advantage of event delegation with jQuery? How is it different from vanilla JS event delegation?
- How do you determine which element fired the event in a jQuery event listener? How is this different from finding the element that fired an event in vanilla JS?
- What's the difference between `this` and `$(this)`?
- Can you still access the `event` object within a jQuery event listener?

#### Getting and Setting Content

For all applicable questions, compare and contrast using jQuery and vanilla JS.

- How do you get the text from an element (like a paragraph) with jQuery??
- How do you set the text of an element (like a paragraph)?
- How do you get the text / content from an input?
- How do you set the text / content of an input?
- How do you add / remove / toggle classes on an element?
- What's the difference between `.text()` and `.text([text])`?
- If you select multiple elements with jQuery, do you have to use a `for` loop / iterate through each to modify their content? Give an example.


#### Traversing the DOM

For all applicable questions, compare and contrast using jQuery and vanilla JS.
Get some practice reading the <a href="https://api.jquery.com/category/traversing/tree-traversal/" target="\__blank">jQuery docs</a>.

- Describe what DOM traversal is and why it is useful.
- What can the `siblings()`, `parent()`, and `children()` methods do?
- What is `prepend()`, `append()`, and what are their differences?
- What is the difference between `parent()` and `parents()`? Why would I want to use either?
- Describe `closest()` and `find()`. What are their use cases?


## Extra Practice

Check out this <a href="https://frontend.turing.edu/lessons/module-2/introduction-to-jquery.html" target="\__blank">lesson plan</a> to get more practice traversing and manipulating the DOM with jQuery.

<!-- Play around with the following example using jQuery.

- Change the replacement text to something else.
- Change the `h1` selector to `.important-header`
- Add the following line of code: `$('h1').css('backgroundColor', 'red');`

<p data-height="300" data-theme-id="23788" data-slug-hash="zBrJpV" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/gMPdzx/">Event Listeners</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

<section class="call-to-action">
### Your Turn

In your journal, write out the syntax for selecting these elements in vanilla Javascript and jQuery.

* Change the text of an `h1` element to "I'm learning jQuery!".
* Select an element with a class of `important-msg` and change it's text to "Understanding the difference between Javascript and jQuery."

</section>

## Responding to User Events

jQuery and, of course, JavaScript are used to change and manipulate web pages. Just like JavaScript, jQuery has the ability to add event listeners based on user interaction.

This is the crux of front-end engineering. We present a user interface and then as the user interacts with the UI, we change and update what the user sees.

Let's take a look at the jQuery syntax and then we'll talk about what's happening.

<p data-height="300" data-theme-id="23788" data-slug-hash="QEQwjy" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/QEQwjy">Event Listeners</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

The following things are happening in the example above:

- We're querying for any elements with the class of `change-me`.
- We're adding an "event listener" to those elements. (There is just one in this case.)
- We're listening for a user's mouse click.
- We're providing an anonymous function.
- In this example, the function will change the content of our heading.

Now, when a user clicks on that button. The browser will run the function we provided to the event listener!

For a list of other events other than click, look at the [jQuery documentation](http://api.jquery.com/Types/#Event).

<section class="call-to-action">
### Your Turn

* Write out event listener for a `button` element that listens to a click.  First, in vanilla Javascript, and then in jQuery.  Take note of the differences.
</section>

## Try It: Adding a CSS Class

Open the example below in CodePen using the "Edit on CodePen."

<p data-height="300" data-theme-id="23788" data-slug-hash="gMPdzx" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/gMPdzx/">Event Listeners</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

We're using a jQuery method called `toggleClass()`. When the user clicks on the button, it either adds or remove the class `upside-down` depending on whether or not it was already there.

- Can you create some additional CSS classes and toggle them?
- Can you also change the text?

<section class="call-to-action">
### Your Turn

* Discuss with the person across from you on the differences between adding/removing a class using Javascript and jQuery.  
* Is there anything like `toggleClass()` in Javascript?
</section>

## Getting Values from the User

We're getting somewhere! We can respond to actions and change elements. It would be cool if we could also get some information from the user. If you recall, HTML provides `<input>` elements for just this kind of situation. jQuery helps out by providing the `.val()` method for getting the value out of a selected `<input>` element.

Let's explore the following example.

<p data-height="300" data-theme-id="23788" data-slug-hash="YWwOmQ" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/YWwOmQ/">Event Listeners</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

In this example, we're doing the following:

- We're adding an event listener to the "Change Me" button.
- When it's clicked, we're grabbed the value of the input field and storing it into a variable.
- We're then updating the contents of the `<h1>` to the value we stored from the input field.

<section class="call-to-action">
### Your Turn

* Write out how you would grab the value of an input in Javascript.  Now in jQuery.
* Now, how would you change the value of the input using both Javascript & jQuery?
</section>

### Try It: Secret Passcode Time

Can you change the code above so that it's looking for a secret passcode before it prints a hidden message to the screen? It's totally your call on what the password is and what the message should be. I don't want to steal your creative thunder. -->

<!-- ## Bringing It Together: CSS Transitions and Animations Together

We're getting there, right? We know how add and remove classes to elements on the page based on user input. We also know how to smoothly move things between two states using CSS. In the example below, the class of `clicked` is either added or removed whenever the box is clicked.

Change some of the properties of the `.box` and `.clicked` selectors and observe the changes. We'll show off some of our—umm—"most impressive" experiments in a few minutes.

<p data-height="300" data-theme-id="23788" data-slug-hash="xOVxxp" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/xOVxxp/">Flying Box</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p> -->

<!-- ## Knowing Which Element We Clicked - THIS!

Consider a situation where we have three boxes. When that particular box is clicked, we want to toggle a class on that box only. How do we know which box was clicked?

It turns out that when we add an event listener using jQuery, we get a special variable called `this`. Although the concept of the JavaScript `this` can get quite complicated, for our purposes the variable `this` is assigned to the context within which it is called.

Let's take a look at the example below:

<p data-height="300" data-theme-id="23788" data-slug-hash="EyKxpp" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/EyKxpp/">$(this)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

#### Try It
Can you create a class that adds a border and then toggle that class on the specific box that is hovered over? (For your own sanity, you probably want to remove the alert!)  

## Traversing the DOM

A little while ago, we wanted to figure out how to tell which element we clicked. But, what if we wanted to find an element in relation to the element we clicked? jQuery lets us navigate from one element to another. When the browser parses our HTML, it creates a big tree-like structure. jQuery lets us hop from branch to branch.

Let's work through a box example again.  

We want each box to have a button inside of it. When the user clicks the button, it should rotate the entire box. (We're rotating the box with a CSS class called `clicked`.)  

<p data-height="300" data-theme-id="23788" data-slug-hash="vKGYzo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/vKGYzo/">Rotating Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

This code _does not_ work the way we'd like - right now when we click on the button, the button itself is rotating instead of the entire box. What we need to do is when the user clicks on a button, go up and find the box that it lives in (the parent element) and add the class to _that_ element. We can use traversal like this:

<p data-height="300" data-theme-id="23788" data-slug-hash="YWqzJo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/YWqzJo/">Rotating Boxes</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p> -->

<!-- You can see all of ways we can move around the DOM tree in [jQuery documentation](https://api.jquery.com/category/traversing/tree-traversal/). -->

<!-- # A Deeper Dive

Let's take a closer look at how we can use the jQuery library!

## Part One: Selectors

### Basic Selectors

Out of the box, jQuery supports the selector syntax from CSS to find elements on the page just like `document.querySelector` and `document.querySelectorAll` from vanilla JS. So, you've already come pre-equipped with a bunch of knowledge for finding elements.

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
* Nothing: `$('p#heading.important')` matches elements that have all three selectors. This selector would select a paragraph which was defined like this: `<p id="heading" class="important">`

### Attribute Selectors

On top of querying for types of elements, classes, and ids, we can also search for elements by the type of attributes that it has.

Here are some examples:

- `$('input[type="date"]')` will get all of the date selector inputs.
- `$('input[type="number"]')` will get all of the number inputs.
- `$('input[type="submit"]')` will get all of the form submission buttons.

See the API documentation [here](http://api.jquery.com/category/selectors/attribute-selectors/).

### The Special `:checked` Selector

It's not uncommon that you might want to go look for all of the "checked" elements. This includes drop downs, checkboxes, and radio buttons.

- `$('input:checked')` will return all of the checked checkboxes.
- `$('input[type="radio"]:checked')` will return all of the checked radio buttons.

### Quick Practice

Let's take a look at [this simple form](https://turingschool-examples.github.io/jquery-playgrounds/form.html) and try out some selectors.

- Can you find all of the check boxes?
- Can you find all of the radio buttons?
- Can you find all of the checked elements?
- What about all of the checked checkboxes?

Use Chrome Developer Tools to select the form fields above. When properly selected you should see an array of selected elements. You should see sections of the page highlighted when you hover over the elements in the array.

### Laboratory

[Here is an little experiment][exp] where you can play around and try out some different selectors.  This has some nice visual cues and allows you to toggle multiple selectors.

[exp]: http://codylindley.com/jqueryselectors/

## Exercise, Part One: The Presidents

For this exercise, we're going to play with [a table of the Presidents of the United States of America][presidents].

[presidents]: https://turingschool-examples.github.io/jquery-playgrounds/presidents.html

Let's try out a few things, just to get our hands dirty. We'll use the console in the Chrome developer tools to validate our work.

* Select each `tr` element.
* Select the first `tr` element only.
* Select the third `tr` element only.
* Select all of the elements with the class of `name`.
* Select all of the elements with either the class of `name` or `term`.
* Select all of the checked—umm—checkboxes. (You'll probably want to check some checkboxes first.)
* Select all of the `td` elements with the class of `number` that appear in a row of a `tr` with the class of `whig`.

## Part Two: Manipulating CSS

Once we have an element in our sites, we probably want to do something with it, right?

In this case, let's add some CSS styling. We can add and remove classes pretty easily in jQuery.

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

<p data-height="265" data-theme-id="light" data-slug-hash="aGjRwm" data-default-tab="html,result" data-user="nfosterky" data-embed-version="2" data-pen-title="jQuery Parent" class="codepen">See the Pen <a href="https://codepen.io/nfosterky/pen/aGjRwm/">jQuery Parent</a> by Nathaniel Foster (<a href="https://codepen.io/nfosterky">@nfosterky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### `parents()`

This one will include all of the parents—all the way up to the `<body>` of the page. Additionally, you can pass it a selector. `$('.some-selector').parents('.active')` will traverse up the DOM, but only return the elements with the class of `.active`.

<p data-height="265" data-theme-id="light" data-slug-hash="vjaVWd" data-default-tab="html,result" data-user="nfosterky" data-embed-version="2" data-pen-title="jQuery Parents" class="codepen">See the Pen <a href="https://codepen.io/nfosterky/pen/vjaVWd/">jQuery Parents</a> by Nathaniel Foster (<a href="https://codepen.io/nfosterky">@nfosterky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### `children()`

This method returns all of the direct childen of the given selection. It will _not_ search their children. Like `parents()`, `children()` will also take a selector. `$('.some-selector').children('.active')` will go through the children of the current query and only return the elements with the class of `.active`.

<p data-height="265" data-theme-id="light" data-slug-hash="vjaVep" data-default-tab="js,result" data-user="nfosterky" data-embed-version="2" data-pen-title="jQuery Children" class="codepen">See the Pen <a href="https://codepen.io/nfosterky/pen/vjaVep/">jQuery Children</a> by Nathaniel Foster (<a href="https://codepen.io/nfosterky">@nfosterky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### `siblings()`

`siblings()` will select all of the sibling elements based on the current query. Like its friends, it will also take a selector if you're polite.

<p data-height="265" data-theme-id="light" data-slug-hash="XqBxVd" data-default-tab="js,result" data-user="nfosterky" data-embed-version="2" data-pen-title="Siblings" class="codepen">See the Pen <a href="https://codepen.io/nfosterky/pen/XqBxVd/">Siblings</a> by Nathaniel Foster (<a href="https://codepen.io/nfosterky">@nfosterky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### `find()`

One you have queried for some elements using jQuery, you can use `find()` to drill down a little deeper.

It's useful to think of `find()` as a more powerful alternative for `children()`. The `children()` method will look only one level down the tree. `find()` will search the children, the grandchildren, the great-grandchildren, and so on. The method will look at anything you currently have selected and then search within those results.

<p data-height="265" data-theme-id="light" data-slug-hash="MGBPQY" data-default-tab="js,result" data-user="nfosterky" data-embed-version="2" data-pen-title="jQuery Find" class="codepen">See the Pen <a href="https://codepen.io/nfosterky/pen/MGBPQY/">jQuery Find</a> by Nathaniel Foster (<a href="https://codepen.io/nfosterky">@nfosterky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Which one do you use? It depends, do you want to traverse all the way down the tree or just down one level.


## Exercise, Part Three: One-Term Presidents

* Add the `green` class to anyone who served right after a president who died.
* Find all of the presidents who only served one term and add the class `red`.
* Add the class of `blue` to the parent of a checked checkbox.
* Add the class of `yellow` to the siblings of the parent (`td`, in this case) of an unchecked checkbox.

## Part Four: Adding to the DOM

Let's take a look at some approaches of changing content in the DOM.

### `text()`

`text()` is like using `innerText` or `textContent`. There is an important difference. The vanilla DOM manipulation tools allow you to assign the new value to `innerText`. The jQuery methods on the other hand must be passed the new value as an argument.

Let's compare and contrast.

```js
var header = document.querySelector('h1');
var $header = $('h1');

header.innerText = 'New Header Text';
$header.text('New Header Text');
```

### `html()`

`html()` is to `text()` as `innerHTML` is to `innerText`. Basically, change the HTML contents of a bigger element, not just the text of it. As a fun experiment, select an element and try to replace the contents to `<script>alert('YOU ARE HACKED!');</script>` using both `text()` and `html()`. Let me know how it goes for you.

### `append()`

`html()` replaces the entire contents of an element. `append()` adds new content onto the end of it.

### `prepend()`

`html()` replaces the entire contents of an element. `prepend()` adds new content onto the beginning of it.

In order to take both `append()` and `prepend()` for a spin, let's try the following code in the exercise below.

<p data-height="265" data-theme-id="light" data-slug-hash="LmBgMO" data-default-tab="js,result" data-user="nfosterky" data-embed-version="2" data-pen-title="Append/Prepend" class="codepen">See the Pen <a href="https://codepen.io/nfosterky/pen/LmBgMO/">Append/Prepend</a> by Nathaniel Foster (<a href="https://codepen.io/nfosterky">@nfosterky</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Exercise, Part Four: Dead Presidents

* Find all of the presidents who died in office (hint: they have a `died` class on their `tr`).
* Append `<span class="died">(Died)<span>` to the the `term` column.
* **Bonus**: Add a radio button before the number in each row. -->
