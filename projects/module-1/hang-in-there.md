---
title: Hang In There - Pair
---

## Learning Goals

* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
* Begin to understand how to write effective, clean HTML & CSS

## Overview

Sometimes you need a pick me up. Remember those motivational posters that were all over the place in classrooms and online? We're going to make our own!

## Set Up

To begin, choose one partner to do the following:

1. Fork the repository found here: [https://github.com/turingschool-examples/hang-in-there-boilerplate/](https://github.com/turingschool-examples/hang-in-there-boilerplate/).
2. Clone down your new, forked repo
3. `cd` into the repository
4. Open it in your text editor
5. Add all project partners and your assigned instructor as collaborators on the repository

Then, as a team:

* Explore the repository to see what's going on in the code
* What pieces of code might you use to complete iterations, and what pieces will you have to create?
* All of your work will take place in `main.js` - you will not need to change any other files.

## Day 1 Deliverables

By the end of the day, complete the following tasks:

* As a team, read the entire project spec and rubric
* As a team, create a public document for your DTR (instructions can be found [here](https://github.com/turingschool/career-development-curriculum/blob/master/module_one/dtr_guidelines_memo.md))
* Add all teammates and your assigned instructor as collaborators to your forked repository
* Create a private Slack channel with all members of the project and your assigned instructor and share links to:
  - the forked GitHub repo
  - the GitHub Pages deployed site
    - Under your repo's settings, scroll down to GitHub Pages and set it up to deploy your master branch
  - the DTR

## Progression

### Iteration 0 - Main Page

![homepage](../../assets/images/projects/hang-in-there/homepage.png)

- When the page loads, we should see a poster with a randomly selected image, title, and quote

### Iteration 1 - Switching Views

Form view:
![form](../../assets/images/projects/hang-in-there/form.png)

Saved posters view:
![saved posters](../../assets/images/projects/hang-in-there/saved.png)

- When a user clicks the "Make Your Own Poster" button, we should see the form, and the main poster should be hidden
- When a user clicks the "View Saved Posters" button, we should see the saved posters area, and the main poster should be hidden
- When a user clicks the "Nevermind, take me back!" or "Back to Main" buttons, we should only see the main poster section
- In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

_Hint: go check out the HTML and CSS files to see how the form and saved posters sections are being hidden in the first place_

## Iteration 2 - Creating a New Poster

Result after clicking save button:
![result](../../assets/images/projects/hang-in-there/form-result.png)

- On the new poster form view, users should be able to fill out the three input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data
  - Use the values from the inputs to create a new instance of our Poster class
  - Change back to the main poster view (hiding the form view again)
  - Display the newly created poster image, title, and quote in the main view

## Iteration 3 - Saving & Viewing Posters

- When a user clicks the "Save This Poster" button, the current main poster will be added to the `savedPosters` array.
- If a user clicks the "Save This Poster" more than once on a single poster, it will still only be saved once (no duplicates)
- When a user clicks the "Show Saved Posters" button, we should see the saved posters section
- All the posters in the `savedPosters` array should be displayed in the saved posters grid section

## Iteration 4 - Deleting Saved Posters

- From the saved posters view, if a user double clicks a saved poster, it will be deleted

_Hint: How will you update the data model to achieve this?_

## Optional Extensions - Gettin' fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable button, provide error messages if data entered is not correct, etc)
- In the main poster view, allow users to click each piece of the poster (image, title, quote) to update just that piece with another random item from the appropriate array
- When a user single clicks a saved poster, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear

## Rubric

This rubric should serve as a guide for students as they progress through the project, as well as to self-evaluate. Instructors will use it to evaluate the project at its final due date/time, and provide detailed feedback so students know what areas to focus on in future projects.

Scores land in a range between 1 and 4. Below is a breakdown of what those numbers represent.

* **4 (exceptional)** - went beyond set learning goals; did self-teaching to go above and beyond in this area
* **3 (proficient)** - exactly on track! you're where you need to be in this area! great work!
* **2 (trailing)** - a little behind where we want to see you right now; in a good place to build familiarity/competency in this area; study in this area to level up and grow
* **1 (dragging)** - significantly behind where we want to see you; major growth needs to be shown in this area; set up a pairing session with an instructor as soon as possible

To earn a given score, an application must meet the requirements listed in that score explanation and all scores lower.

### Professionalism

* **4:** 
  - Team uses a PR template
  - Team habitually conducts thorough code reviews in the GitHub GUI to document the progress of the application
  - Team has sought out code reviews from one or more mentors
  - README is well formatted and descriptive with screenshots or gifs of the application in action
* **3:** 
  - Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  - Commit messages are consistent, descriptive, and concise
  - Team uses PRs to screen/verify code before adding it to the master branch
  - There is no more than a 10% disparity in code contributions between teammates
  - README is well formatted and gives good context about the project, including links to both contributors' GitHub profiles, and to the deployed GitHub Pages site
* **2:** 
  - Commits are large and do not effectively communicate the progression of the application
  - Team uses PRs but do not review code before merging into the master branch
  - All teammates can speak to the purpose and functionality of any/every line of code
  - There is a 20% disparity in code contributions between teammates
  - README is brief and does not provide context for the project
* **1:** 
  - Teammates do not understand the purpose and functionality of every line of code
  - Some commits are pushed directly to the master branch
  - PRs are used inconsistently
  - There is a 50% disparity in code contributions between teammates
  - There is no README, or README is insufficient

### Functional Expectations

* **4:** Applications completes one or more of the extensions without bugs
* **3:** Application completes all the expectations of Iteration 4 without bugs
* **2:** Application completes all the expectations of Iteration 3 without bugs
* **1:** Application completes all the expectations of Iteration 2 without bugs

### JavaScript Style & Implementation

* **4:** 
  - There are no global variables aside from query selectors, `currentPoster`, `images`, `titles`, `quotes`, and `savedPosters`.
  - All functions strictly adhere to [SRP](http://knnthvu.weebly.com/srp-and-dry.html) and - with few exceptions - are around 10 lines of code or less
  - All functions and variables are semantically and concisely named
  - Uses logical operators instead of if/else statements where applicable
  - Code contains no antipatterns
* **3:** 
  - Application uses event delegation correctly on dynamic elements
  - Functions are [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and observe [SRP](http://knnthvu.weebly.com/srp-and-dry.html)
  - Functions make use of parameters and arguments in order to be more dynamic
* **2:** 
  - Properly uses parameters and arguments when used
  - Uses named functions instead of anonymous functions as event handlers in event listeners
  - Correctly uses if/else statements to handle multiple paths of logic & error handling
* **1:** 
  - Crafts JS according to the [Turing JS style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
