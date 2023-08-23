---
title: JS Fun at a Restaurant
---

## Welcome to your first project!

Since this is your first Turing project, let's go over some general information regarding projects at Turing:  
- You will not learn everything in class that you need for projects - this is intentional. Content will be “just in time” - you should need every lesson.This can be painful in the moment, but it is essential for long-term success. **If you’re focused on learning over getting a good “grade”, this is where the growth will really happen.**
- Projects tend to be 1-2 weeks in duration (though this varies). Some projects will be solo, some will be paired, and some will be completed as a group (of 3-6 people). This will give you essential experience with various workflows.   
- Projects are evaluated by an instructor. Feedback will look different for each project, but we expect that you reflect on your feedback and implement it in the next project. Feedback is a critical learning tool at Turing. Don’t beat yourself up over any feedback. Use it. Learn from it.  
- Most project specs will contain a rubric at the bottom so that you know exactly what is expected from you. The rubrics also ensure that your instructors are grading using a consistent and unbiased framework.  

## Overview

In front end web development, the programming language you will encounter most
often is JavaScript. Soon, we'll also use HTML and CSS to help a user interact
with our applications, however before we do that, we need to understand how to
use JavaScript to handle the logic of our applications.

In this project, you'll be gaining experience working with variables, primitive
data types, looping, arrays, objects and functions. As you work through the
iterations, be sure to take time to stop and refactor you solutions. There is
rarely one right way to solve a problem in programming, and part of your job
will be evaluating the trade offs between different approaches to solving a
problem.

## Learning goals

  - Understand JavaScript data types and how/when to use them
  - Understand how to declare variables and assign data to them
  - Practice using objects and arrays, including `for loops`
  - Write functions that require conditional logic, parameters/arguments, and `return`
  - Read and understand unit tests, and pass them

## Setup

  - Fork [this project](https://github.com/turingschool-examples/js-fun-at-a-restaurant) to your own Github account
  - clone the repository to your local machine
  - `cd` into the project
  - run `npm install` to install the necessary dependencies

## Day One Deliverables
  - **By EOD on Kick Off Day:** Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the link to your repo.

## Iterations

### 0: Practice Variables, Primitives, Functions, Arrays, and Objects
  - In the `src/` directory, you'll find a file called `warm-up.js`. Read
    through the instructions in the file carefully. The exercises in this file
    will help you to complete the rest of the iterations  

### 1: Complete the **meal** tests
  - For the rest of the iterations, you will be working to build out some
    js functionality, using a test suite as your guide.  
  - Start with the `meal.js` file.  
    - Unskip the first test in `test/meal-test.js`
    - Run `npm test test/meal-test.js`  
    - Read the error messages CAREFULLY!  
    - Make the test pass.
  - Ensure that all of the skips are removed from the test file when you push up to GitHub.
  - Before moving on to the next iteration, take time to refactor your
    solutions. Is this the best approach to solving the problem? Is there a
    different way you could make the tests pass?  

### 2: Complete the **order** tests
  - Unskip the first test in `test/order-test.js`, and get to work passing the tests
  - Run `npm test test/order-test.js`
  - Ensure that all of the skips are removed from the test file when you push up to GitHub.
  - Before moving on to the next iteration, take time to refactor your
    solutions. Is this the best approach to solving the problem? Is there a
    different way you could make the tests pass?  

### 3: Complete the **restaurant** tests
  - Unskip the first test in `test/restaurant-test.js` and get to work passing the tests
  - Run `npm test test/restaurant-test.js`  
  - Ensure that all of the skips are removed from the test file when you push up to GitHub.
  - Before moving on to the next iteration, take time to refactor your
    solutions. Is this the best approach to solving the problem? Is there a
    different way you could make the tests pass?  

### Extension: Refactoring
  - Preteach yourself the [Dot & Bracket Notation](https://frontend.turing.edu/lessons/module-1/js-dot-bracket-notation.html){:target="_blank"} lesson.
  - Revisit your `addMenuItem` and `removeMenuItem` functions.  Consider any similar lines of code and how you might refactor both functions to make use of bracket notation. 
  - Refactor `checkForFood` so that it dynamically checks to see if the food exists in the *restaurant's menu*.  Note you will need to make use of bracket notation in this solution as well.  
  - Ensure that all tests still pass after refactors have been made.

## Self-Assessment

The goal of this project is not completion. The goal is to put into practice some of the tools we've been discussing (pseudocoding, rubber ducking, problem solving), and to practice writing fundamental JavaScript.

The value of this project, and every project, lies in the learning that you do and the growth that you demonstrate over the course of it. We expect you to work hard for the benefit of your own learning.

The skills you will develop over the course of this project are:

- Understanding fundamental JS:
    - functions
    - manipulating arrays
    - manipulating objects
    - testing
- Problem solving:
    - Pseudocoding
    - Pairing (with mentors, rocks, peers, etc)
    - Articulating code (while pairing, or rubber-ducking)
- Time management
- Git workflow

At the end of the project, we will have you fill out a reflection survey where you can assess your growth over the course of the project.  While individual feedback will be minimal from instructors, we will share feedback on common themes we saw in your projects later next week.