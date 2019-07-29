---
title: Turing Yearbook
module: 3
tags: react, javascript
---

## Introduction

For this project, we are going to work on developing some muscle memory in building out simple React components and passing data down as props.

![Turing Yearbook screenshot](https://raw.githubusercontent.com/turingschool-examples/yearbook/master/screenshot.png)

You will see the difference between class components and function components and start getting a sense of when to use one over the other.

## Prep Work

Get set up by cloning down [this repo](https://github.com/turingschool-examples/yearbook).

**Follow the set up instructions outlined in the repo's README!**

## Project Goals & Requirements:

1. Write **squeaky clean**, well refactored code using ES6 syntax.  
2. Learn to pass information between components using props.
3. Learn to write readable JSX (your render methods/return statements should be clean and simple).
4. Use `propTypes` for every component receiving props.  
5. Learn how to unit test React components including snapshot testing, methods, and changes in state.

## Specifications

### Iteration 0

Get set up (per the instructions above)!

We've provided a boilerplate for you to work with. Look through the file structure to get a sense of the app.

Notice that we have multiple stylesheets - one for each component. You are welcome to style this application however you'd like. We got you started with a little styling, but feel free to get creative. (Remember, though - most of your energy should be spent on learning React, not styling.)

### Iteration 1

Create a Cohort component, which will act as a container that renders each of our Person cards. For now, the Cohort being displayed will be "Staff". Figure out how to pass information from `App.js` to `Cohort.js`!

Then create a Person component. Each Person card will display: the image, the name, the quote, and the superlative (see the screenshot above for an idea).

In your Cohort component, create Person cards that have the information each needs to display properly.

### Iteration 2

In the `yearbook-data.js` file, un-comment-out the "students" information. Get that information displaying, too. How can you reuse components?

Then create a controlled component that allows a user to add a new student.

### Iteration 3 (extension - do not attempt until iterations 0 - 2 are completed)

Add in the functionality so that a user can click and edit a student's information.  A user should be able to update the name, quote, and superlative.  

Lastly, add a delete button on each card that allowers a user to remove students that are no longer attending.

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Test all of your components.  This not only includes snapshot tests, but also all of your methods and changes in state.

## Evaluation

Projects will be due on Monday of Week 2 by 8am. The instructors will go through projects that morning and then go over common mistakes we saw as a class.
