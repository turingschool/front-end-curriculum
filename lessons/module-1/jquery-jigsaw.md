---
title: jQuery Jigsaw
length: 180
tags: javascript, jquery
---

## Learning Goals

* Use jQuery selectors to find content
* Understand that jQuery collections allow you to manipulate multiple elements with a single method
* Use jQuery's DOM traversal methods to move around the DOM
* Add CSS styles using jQuery
* Append new content to the DOM
* Add event listeners to elements currently in the DOM
* Understand that adding an event listener will not effect elements you add to the DOM in the future

***

## Structure

### Introduction (5 minutes)

What is a jigsaw lesson? What is the purpose? What can't you just talk at us like usual?...

### Warm Up (10 minutes)

Review the base prework as a group:

* [What is jQuery?](https://www.youtube.com/watch?v=T2mFyPxL-fU)
* [The basics of jQuery and the selector.](https://medium.com/@jaeger.rob/jquery-selectors-the-absolute-basics-d781500c722c#.q6q4j61fj)

### Research (35 minutes)

In this session your goal is to build expertise in your group's subject area. Get into your specified "Research Groups". During this time your group is collaborating to put together a collection of notes and key understandings such as:

* What is this thing?
* Why is it useful?
* How do you put it into action?
* Put together a short demo (less than 3 minutes).
* How can it affect your development process?
* Are there any downsides to using it?
* Where can a person go to learn more about it? Any resources seem better than others?

### Break (10 minutes)

### Expert Presentations (10 minutes for each subject area)

Combine into your specified “Learning Groups”. You should have one person from each of the Research Groups. A representative from each of the research groups will take turns sharing their findings from the respective content areas as follows:

* Clear, concise definition(s) of the subject matter and its importance
* Concrete example(s) of when to use, employ, consider
* Any concerns and/or things to watch out for
* Create a short demo-able code example to share
* Optional/additional resources for independent study

While they’re sharing, the rest of the group should:

* Take their own notes
* Ask clarifying questions
* Brainstorm/record any depth questions the researcher is not able to answer
* Assign a time keeper to WATCH THE CLOCK :alarm_clock: so the presenter doesn’t have to keep track, and the group ends up with a comprehensive set of notes, understandings, and questions across each of the subjects by the end of the session

Post your CodePen demos to Slack for later reference.

### Break (10 minutes)

### Gather Questions (10 minutes)

Have one person from each Learning Group write that group’s unanswered questions on the front board.

### Review Questions (30 minutes)

Let's review and attempt to answer all the questions on the board together.

## Homework (Additional Resources)

Go through [this lesson](http://frontend.turing.io/lessons/module-1/introduction-to-jquery.html) to review jQuery and get more practice actually using the library.

***

## Content

### Selectors

* Start here: [The basics of jQuery and the selector.](https://medium.com/@jaeger.rob/jquery-selectors-the-absolute-basics-d781500c722c#.q6q4j61fj)
* How do you write a basic jQuery selector? How does it differ from using vanilla JavaScript?
* What data type does the jQuery selector syntax use?
* How do you select HTML elements using element names, ID, or class?
* What are the different ways to chain selectors? For instance, how would you select an element with the class of “bordered-content” and “ad-aside”?
* How do you select based on element attributes?
* How do you select based on the state of a checkbox or radio button?
* What does the jQuery selector return? Be specific. You can use this for more in-depth research: http://learn.jquery.com/using-jquery-core/jquery-object/
* Create a demo (in CodePen) explaining the use of different kinds of selectors.

### Getting and Setting Content Values

Using jQuery methods:

* How do you _get_ the text from an element (say a paragraph element)?
* How do you _set_ the text from an element (say a paragraph element)?
* How do you _get_ the text from an input element?
* How do you _set_ the text from an input element?
* How do you add, remove, or toggle classes of HTML elements?
* How can you tell if an HTML element contains a certain CSS class?
* What happens when you select and element using vanilla JavaScript (`document.querySelector()`) and then try to use a jQuery method for getting the text of that element? Provide examples of this and what errors you see.
* If you have a jQuery selector that returns multiple elements, say `$('.link-img')`, then do you need to use a `for` loop to change the elements? Why or why not? What is returned by the selector?
* Create a demo (in CodePen) getting the text and setting the text of different elements.

### Events

* Compare the vanilla JavaScript event listener (`addEventListener`) to the jQuery event listener(s).
* What is the one jQuery event listener that can be used to listen for many types events. How do you specify the type of event?
* What are some event listener methods in jQuery that are specific to the event type?
* How do you write a basic click event listener that logs something to the console?
* What is the role of `this` within an event listener?
* There are more than just the `click` event. What other events can be used in jQuery? Find at least five others. Can you think of examples for each of these?
* What is the `event` object, and what can we use it for in event listeners?
* Create a demo (in CodePen) using two different types of event listeners (a click event and something else).

### jQuery Docs

* Where do you go to find the jQuery docs?
* What happens when you search for something on the jQuery docs page? Is it confusing? How are the results ordered?
* Searching google for questions when you're using jQuery can be tricky because it will turn up vanilla JavaScript results too. What are some strategies for using google to find answers regarding jQuery?
* On [this doc page](http://api.jquery.com/text/), there are two parts of the page, each with a black header: one `text()` and the other `text( text )`. What is the purpose of these two different sections? Can you find other examples where a page is written/organized in this way?
* For the [`.on()` doc page](http://api.jquery.com/on/), some of the method arguments are listed in square brackets. Why? Can you find other examples of this and explain why they are used?
* Create a short document that describes the overall structure of a jQuery doc page? What is the layout, and what is each section of the page from top to bottom? For instance, [this doc page](http://api.jquery.com/val/).

### DOM Traversal

* Describe what DOM traversal is and why it is useful.
* What can the `sibling()`, `parent()`, and `child()` methods do?
* What is `prepend()`, `append()`, and what are their differences?
* What is the difference between `parent()` and `parents()`? Why would I want to use either?
* Describe `closest()` and `find()`. What are their use cases?
* Create a couple demos (in CodePen) using DOM traversal methods.
