---
title: RomCom - Pair
---

## Learning Goals

* Write clean, DRY JavaScript
  * Build out functionality using functions that show trends toward SRP
  * Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Explore the connection between HTML, CSS, and JavaScript
  * Practice reading, understanding, and using provided code
* Write code collaboratively
  * Document changes with atomic commits & thorough code reviews
  * Communicate, troubleshoot, and plan effectively as a team
  * Ensure all team members are able to be heard and contribute throughout the project

## Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!

## Resources 

<section class="answer">
### Helpful Hints

<section class="answer">
### What's the deal with deploying?

Deploying your repos allows you to have a live site for your application. You'll be able to share this link with friends and family to show off what you're learning! You will also include deploy links on your resume so potential employers can see what you've built! 

Deploying takes time, so it's not a good idea to use your deployed site as your point of reference while building your app. While you're coding, you'll want to run `open index.html` in your terminal to see the current local version of your app. You need to refresh the browser each time you make an update to your code. Once you've pushed up your code and merged into the main branch, the deployed site should update within an hour. 

Below are instructions for deploying to GH Pages:  

    - Repo Settings » Pages » Select the main branch as your Source branch » Save. Then, wait up to an hour, hit refresh, and your deployed link should appear at the top of the screen.  

    - If you don't want to wait, your GH pages URL will follow this format: "https://username.github.io/romcom/". Replace "username" with the repo owner's GH username and "romcom" with your repo's name (if different). The URL will not work right away - that's ok! Add it to the Project Submission form anyway. 
</section>

<section class="answer">
### Why are our PRs pushing to the Turing repo?

Forks are typically used to let someone propose changes to your project, that would eventually be merged back into the original repo you forked from. So a fork will always remain connected to the original repo.

When merging a PR, you should see a dropdown to select which repo you want to merge to. You can select the original repo or your fork (you want to choose your fork). 

If you want to change the default, follow the steps [here](https://stackoverflow.com/questions/44466618/default-branch-for-pull-request).
</section>

<section class="answer">
### Where are our console logs?

If you console log something in your project, you’ll see it in the dev tools console when you open the page in your browser (`open index.html`). Nothing will appear in your terminal. Remember, you need to refresh the browser each time you make an update to your code.
</section>
</section>

<section class="answer">
### Refactoring as You Go

Between each iteration, take some time to look at the code you've written and make any changes that might improve the readability of your code. Refactoring as you go can help ensure that everyone understands the code you've written so far AND make it easier to build on top of that code.

Here are some ideas of what to look for:
- Is our indentation and spacing consistent?
- Are our variable names descriptive of the values they hold? Do they follow common convention (i.e. arrays are plural, etc)?
- Are our function names descriptive of what the function does? Are they named with present tense verbs?
- Are any of our functions too big or doing too many things? Should we break any of them up?
- Is any of our JS code too repetitive? Could we make any reusable functions with parameters and arguments?

Remember - shorter code isn't always better! 
</section>

## Progression

<section class="answer">
### Set Up + Day 1 Deliverables

To begin, choose **ONE** partner to do the following:

1. Fork the repository found here: [https://github.com/turingschool-examples/romcom/](https://github.com/turingschool-examples/romcom/).
2. Clone down your new, forked repo.  While cloning, name it what you want your project to be named. `git clone <url> <newNameYouWantItToHave>`
3. `cd` into the repository
4. Open it in your text editor
5. View the project in the browser by running `open index.html` in your terminal
6. Add all project partners and your assigned instructor as collaborators on the repository

Then, as a team:

* Explore the repository to see what's going on in the code. Look at each file.
  * What pieces of code might you use to complete iterations, and what pieces will you have to create?
* All of your JavaScript will be written in `main.js` - you will not need to change any other files.

**By EOD on Kick Off Day:** 

* As a team, read the entire project spec and rubric
* As a team, complete [the Norming Form](https://docs.google.com/forms/d/e/1FAIpQLSche5cvtlYQ_SaBDqqoF3H9gFiy2p60AOPoUMbhgIHlg-vRlQ/viewform?usp=sf_link)
* Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the necessary links. (Note: See `Helpful Hints` for help with deploying!)
* Add all teammates and your assigned instructor as collaborators to your forked repository
</section>

<section class="answer">
### Iteration 0 - Main Page

<img src="./assets/romcom/romcom-random.png" alt="Randomize">

- When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
- Every time the user clicks the Show New Random Cover button, the random cover is displayed
    - hint: you may need to update the value of the provided `currentCover` variable
    - hint: you may need to create a function that displays information on the DOM
</section>

<section class="answer">
### Iteration 1 - Switching Views

**NOTE:** in this iteration, you are not worrying about making the form WORK, and you are not worrying about saving or displaying covers. You simply want to make sure the views can be switched when you click the appropriate buttons.

Form view:
<img src="./assets/romcom/romcom-form.png" alt="Form">

- When a user clicks the "Make Your Own Cover" button, we should see the form, and the homepage view should be hidden
- When the Form view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
- When the Form view is visible, the "Home" button should be visible

Saved covers view:
<img src="./assets/romcom/romcom-saved.png" alt="Homepage">

- When a user clicks the "View Saved Covers" button, we should see the saved covers section, and the homepage view should be hidden
- When the Saved Covers view is visible, the "Show New Random Cover" and "Save Cover" buttons should be hidden
- When the Saved Covers view is visible, the "Home" button should be visible

For both the Make New Cover form section and the Saved Covers section:

- In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
- When a user clicks the "Home" button, we should only see the Home section
- When a user clicks the "Home" button, the home button should be hidden
- When a user clicks the "Home" button, the "Show New Random Cover" and "Save Cover" buttons should be visible again

_Hint: go check out the HTML and CSS files to see how the form and saved covers sections are being hidden in the first place_
</section>

<section class="answer">
### Iteration 2 - Creating a New Cover

- In the new cover form view, users should be able to fill out the four input fields and then hit the Make My Book button
- When the Make My Book button is clicked, several things will happen:
  - Use the values from the inputs to create a new, unique cover object (part of your data model)
  - Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
  - Change back to the main home view (hiding the form view again)
  - Use the newly created cover object to display the newly created cover image, title, and descriptors in the main view on the DOM

<section class="note">
### Hint!

Is something weird happening when you click the button? Try googling `event.preventDefault()`! 
</section>
</section>

<section class="answer">
### Iteration 3 - Saving & Viewing Covers

- When a user clicks the "Save Cover" button, the current cover will be added to the `savedCovers` array
- If a user clicks the "Save Cover" more than once on a single cover, it will still only be saved once (no duplicates)
- When a user clicks the "View Saved Covers" button, we should see the saved covers section
- All the covers in the `savedCovers` array should be displayed in the saved covers section

_Notes:_
- None of this needs to persist after reloading the page.
- There's already one saved cover in that array from the boiler plate, but from a user experience perspective, we'll want to remove this so that only the covers the user _chooses_ to save will be in there

</section>

<section class="answer">
### Iteration 4 - Deleting Saved Covers

- From the saved covers view, if a user double clicks a saved poster, it will be deleted
  -  HTML `onclick` attributes should not be used in any HTML code - all functionality should be through JavaScript.  
</section>

<section class="answer">
### Optional Extensions

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable the button until all fields are filled, provide error messages if data entered is not correct, etc)
- In the main cover view, allow users to click each piece of the cover (image, title, descriptors) to update just that piece with another random item from the appropriate array
- When a user single clicks a saved cover, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear
</section>
---

## Project Feedback

When projects are graded, we want you to view the evaluation + feedback as a means to inform your learning, rather than as static "grades". Feedback from instructors will focus on areas where you have an opportunity to deepen your understanding. 

The evaluation will provide feedback by answering this important question: **Does the project demonstrate student understanding of the learning goals & concepts?**

Projects will answer that question, with each section of the rubric (see below) receiving a `yes`, `not yet`, or `wow` marking.

The overall project outcome is determined by "averaging" each rubric's outcome. You can think of a "yes" being worth a 1, a "not yet" being worth a 0, and a "wow" being worth a 2. For this project, an average of 0.5 is considered a passing project that demonstrates good student understanding!

## Rubric

This project has 4 evaluated concepts:

- JavaScript
- Workflow & Professional Habits
- Reading Code
- Functionality

<section class="note">
### Note about the below criteria

Competency & understanding of these concepts can be demonstrated in many ways. **The following examples are not checklists to complete!** They are illustrations to guide your team as you develop this project and continue your learning.
</section>

<section class="answer">
### JavaScript

💫ON TRACK💫 can look like:
- JS is formatted according to the [Turing JS style guide](https://github.com/turingschool-examples/javascript/tree/main/es5)
- The main JS file is organized thoughtfully (DOM variables together, event listeners together, functions together)
- Variable and function naming is meaningful, readable, and follow convention. (Arrays are plural, functions begin with present-tense verb, etc.) 
- Functions are DRY (Don't Repeat Yourself) and demonstrate SRP (Single Responsibility Principle)
- Global variables are limited to only those that are necessary.
- Only semantic/organizational comments remain in file (if any). No console logs remain in any files.

✨WOW✨ can look like:

- Team keeps the data model logic separate from the DOM logic
- Functions make use of arguments and parameters to be dynamic and reusable where possible without overengineering
</section>

<section class="answer">
### Workflow & Professional Habits

💫ON TRACK💫 can look like:
- The team's norming document is taken seriously, with thoughtful reflections from all team members regarding their skills, learning goals, work styles, etc. 
- The work is distributed equitably; Commit/code contributions (viewable under `Insights` tab) are roughly even for each team member.
- Commits are made regularly to describe small chunks of working code. Commit messages are descriptive, concise, and consistent across all team members.
- The team keeps the main branch clean by using branches for new, unreviewed code. No one pushes code directly to the main branch.
- PRs have clear, thorough descriptions, such that a new person joining the codebase can clearly understand the proposed changes and evolution of the codebase.
- The README template is filled out thoughtfully and completely.

✨WOW✨ can look like:   
- Team uses a [PR template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).
- Meaningful decisions are documented through code reviews. Suggested/requested edits are made before merging.
</section>

<section class="answer">
### Reading Code

💫ON TRACK💫 can look like:
- The team takes time to thoroughly understand the provided code
- Provided code is used effectively (the provided createPoster function, the provided assets, the provided HTML & CSS)
  - The team does not directly edit the HTML or CSS file
  - The team does not ignore provided styling
  - No code is added that makes the provided code redundant

✨WOW✨ can look like:
- Creating and sharing a document (with your PM) for the team's observations of and questions about the existing code
</section>

<section class="answer">
### Functionality

Functionality is the least important piece of the rubric. It’s included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:

* Code that completes iterations but is sloppy
* One or both team members do not understand every single line of code
* One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality

**Well-refactored, thoughtful code is better than sloppy extra features.**

💫ON TRACK💫 can look like:
- All of the expectations of iterations 0-4 are complete without bugs

✨WOW✨ can look like:
- All of the expectations of iterations 0-4 and an extension are complete without bugs
</section>