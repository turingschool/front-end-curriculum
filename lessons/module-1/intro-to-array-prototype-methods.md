---
title: Intro to Array Prototype Methods
tags: JavaScript, array, prototype, introduction
length: 90
---

## Learning Goals

* Understand what array prototype methods are and why they can be useful
* Continue to develop skills googling and reading documentation
* Get comfortable with manipulating and organizing arrays

## Vocabulary

- `array` A data structure consisting of a collection of elements (values or variables), each element is identified by an index
- `index` The position of each element within an array
- `method` A function on an object

<section class="call-to-action">
### Warm Up

In your notebook, jot down your responses to the following:
- How are you, or how might you end up, using arrays in your IdeaBox project?
- Given the requirements of the project spec, in what ways may you need to change an array? Access given elements from it?
- On a scale of 1-5, how comfortable do you feel working with arrays?
</section>

## Context

As discussed previously, arrays often contain a collection of related values.  We've also talked about how you can loop through an array using a `for` loop.  However, you'll soon find out that having a static array isn't always useful.  There might be times where we need to add something to an array or take something out of it.  Other times you might want to find out where a value is in an array (it's index).

This is where array prototype methods can become very useful. In order to understand what a prototype method is, let’s break down the terms individually. A **prototype** is a model of something and how it should look or behave. We can build off of prototypes to create multiple copies of similar models. A **method** in JavaScript is a function that can be called on an object.

Prototype methods are functions that allow you to manipulate the value of a particular data type or class. JavaScript comes with several built-in data types that each have their own prototype methods, that allow you to interact with them in certain ways. For example, you might want to add or remove an item from an array. Or inspect the properties on an object. Prototype methods allow you to perform these actions and manipulate your values.

## Class Example

Let's consider the following scenario:

> "I have this array, a list of La Croix flavors, and I want to cut it down."

Current array:
```javascript
var laCroix = ["lime", "coconut", "mango", "pure", "berry", "peach-pear"];
```

Desired outcome:
```javascript
laCroix;
==> ["coconut", "mango", "pure"];
```

**I need to start by asking myself a couple questions:**
- What exactly changed about the array?
- Do I have a method to do this? If not, time to google

**After googling for a method, I will...**
- Play around with it in the console - is it actually doing what I want/expect?
- Once it does work, instead of just "making this test pass" or "finishing this little challenge", I really want to make sure I understand this prototype so I can use it in the future. I'm going to go back to the console and play around with it within some other situations.
- Once I better understand the method, I'm going to take some notes on it.

## Practice

<section class="call-to-action">
### Phase 1: Exploration

With your partner, work through either [Worksheet A or B](https://docs.google.com/document/d/1ZBW7rvZCCAXv7zriAcaT713YA7fbgvBiTnEJGaatS5Q/edit), depending on the table assignment.
</section>

<section class="call-to-action">
### Phase 2: Teach a Friend

With your new partner, decide who will teach first. That person should walk through the array prototypes they learned about (the "learner" should be taking notes!). Switch and repeat!
</section>

<section class="call-to-action">
### Phase 3: Implementation

Now that you've seen a little bit about what is possible for arrays, let's get some practice. For each challenge listed on the back of your paper, take the following steps:
- determine which array prototype method is best, and be able to explain why
- pseudocode anything necessary, make sure you are familiar with syntax necessary
- implement the code to get the desired output!

Finish early? You're probably curious about other things you can do with arrays. Or have noticed other array prototype methods. Look into them! Do **not** do this unless you **and** your partner are 💯 on the practice challenges on the worksheet.
</section>

## Anchor Charts

To make sure we have a clear way to explain how these array prototype methods work and have a reference, each group of 3-4 will be assigned one. It's your job to create an anchor chart that students can use as a reference!

Consider including:
- use case
- example for syntax
- info about arguments expected
- any analogy or fun/interesting way to remember what it does!

## Summary

Array prototype methods allow us to deal with arrays in a variety of ways.  Being able to quickly go to the docs and find which array prototype method you need for some kind of functionality is really important.

<section class="checks-for-understanding">
### Exit Ticket

- What array prototype methods that we learned today do you think will be most helpful in your IdeaBox project?
- What techniques did you use when going through the documentation?
- Which array prototype method/s are still confusing to you?
- What are your next steps in getting more comfortable with array prototype methods?
- On a scale of 1-5, how comfortable do you feel working with arrays?
</section>
