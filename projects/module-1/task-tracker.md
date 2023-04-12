---
title: Task Tracker - 1 Day Challenge
---

## Learning Goals

* Understand, navigate, and update code that you didn't write
* Debug application to find and fix bug
* Apply JS concepts to build a new feature

## Overview

![screenshot of app](./assets/task-tracker/screenshot.png)


## Progression

<section class="answer">
### Set Up 

- Follow the instructions in the README to clone down [this repo](https://github.com/turingschool-examples/task-tracker)
- Open the app in your browser and click around. Discover what functionality already exists.
- Open up the code and explore! Take time to look at the HTML, CSS, and JavaScript files.
</section>

<section class="answer">
### Part 1 - Scavenger Hunt

First, run `git checkout scavenger-hunt` to get to the correct branch

Take notes in your notebook as you find the following.
- What represents the data model? 
- Find two examples of the data model being updated.
- Find one example of a DOM update that relies on the data model.
- Find two functions that have at least one parameter. Add a console log to each function to see what the value of that parameter is when the function is invoked.
- Find an example of a pure function.
- Find an example of a function's returned value being used somewhere else.
- Find an example of event delegation. Why is event delegration neccessary in that example?
- Find an example of bracket notation being used to access an object. Why is bracket notation used? Notice how the data is structured to allow for this.
</section>

<section class="answer">
### Part 2 - Bug Fix

First, run `git checkout bug-fix` to get to the correct branch. If you made changes to the code on the `scavenger-hunt` branch, you may need to commit your work before switching branches (`git add .`, `git commit...`) - don't push!

Oh no! There are a few bugs you need to fix:
- Every new event is posting to Monday 😱 
- Duplicate events are posting whenever a new event is created 😩
- //something about a "no events" message
</section>

<section class="answer">
### Part 3 - Additional Feature

First, run `git checkout new-feature` to get to the correct branch. If you made changes to the code on the `bug-fix` branch, you may need to commit your work before switching branches (`git add .`, `git commit...`) - don't push!

// add deleting feature
</section>
