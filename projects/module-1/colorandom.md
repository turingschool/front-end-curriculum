---
title: ColoRandom - Group
---

## Learning Goals

* Write semantic HTML and efficient CSS to form a usable UI
* Write clean, DRY JavaScript and leverage classes, creating and using an effective data model
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Refine your collaboration skills

## Overview

We will be building a site that generates color palettes for us. Similar to other sites like [coolors](https://coolors.co/app), we will present users with various random colors which they can choose to "save" (note: saved palettes will not persist across page refreshes). Users can "lock" a color, which will keep that color when a new palette is generated.

This project will give you and your team an opportunity to write HTML and CSS, and leverage JavaScript to both create your data model and interact with the DOM.

Additionally, as your first group project, this will give you a chance to continue to hone your team skills: communication, planning, proper git and GitHub workflow.

## Set Up

To begin, choose ONE TEAM MEMBER to do the following:

1. Create a Slack DM with you, all project teammates, and your assigned project manager.
2. Locally, create a new folder containing an empty `index.html` file, a blank `scripts.js` file, and an empty `styles.css` file.
3. Run `git init` in your terminal (make sure your working directory is your project folder).
4. Create an initial commit.
5. On GitHub, create a new repository. Follow the written instructions on GitHub to add the repo's remote to your local project, and push your initial commit up to GitHub.
6. Add all project partners to the repository as contributors.
7. If your repository is set to private, add your project manager as a collaborator as well.

Then, as a team:

* Have all team members clone down the repo.

## Day 1 Deliverables

**By EOD on Kick Off Day:** complete the following tasks:

* As a team, read the entire project spec and rubric
* As a team, complete [the DTR Form](https://docs.google.com/forms/d/e/1FAIpQLSche5cvtlYQ_SaBDqqoF3H9gFiy2p60AOPoUMbhgIHlg-vRlQ/viewform?usp=sf_link)
* Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the following links:
  - your team's GitHub repo
  - the GitHub Pages deployed site
    - Instructions for deploying: Repo Settings >> Pages >> Select the `main` branch as your Source branch >> Save >> Send us the URL they give you in the pop up that says "Your site is ready to be published at [URL]"

## Progression

### Iteration 0 - Basic Layout

![iteration 0](./assets/colorandom/iteration0.png)

- When the page loads, we should see:
  -  a title
  -  5 colors labeled with their hex codes, hardcoded for now

You should be matching the comp closely. Act like you're a frontend dev on a team and this is the design you've been given to match. Details and spacing matter!

### Iteration 1 - Generating Random Palettes

![iteration 1](./assets/colorandom/iteration1.png)

- Add a button that matches the design above  
- When the page initially loads, is refreshed, or the button is clicked:  
  - 5 random and new colors should appear
  - the color's hex codes should appear below each color box
  - the current palette should be tracked somewhere in your Data Model and updated when a new palette is generated

Hint: Hex codes are 6 characters long, and each character is some value of 0-9 or A-F (ABCDEF0123456789). Don't look up how to generate a random hex code - challenge yourselves to use pseudocode to problem-solve through it. This is where the learning happens!

### Iteration 2 - Locking + Unlocking Colors

![iteration 2](./assets/colorandom/iteration2.png)

- When the page is initially loaded, all colors should have an unlocked icon in the bottom right corner
- When a user clicks on the unlocked icon, a locked icon should appear. The locked/unlocked icons should toggle back and forth as the user clicks them.
- When the `New Palette` button is clicked, only the unlocked colors should change. Locked colors should remain.
- When the palette is updated, your Data Model should be updated too

### Iteration 3 - Saving Palettes

![iteration 3](./assets/colorandom/iteration3.png)

- Add a `Save Palette` button to match the design above
- Add a `Saved Palettes` section to match the design above
- When the page loads, there should be no saved palettes
- When the user clicks `Save Palette`:
  - the palette should be saved somewhere in your Data Model
  - the palette should show up in the saved palette section to match the design above
- A new Palette should automatically be created and displayed in the main part of the app

Note: Saved palettes do NOT need to persist on page load

### Iteration 4 - Deleting Saved Palettes

![iteration 4](./assets/colorandom/iteration4.png)

- Add a delete button next to each saved palette to match the design above
- When a saved palette's delete button is clicked:
  - the palette is removed from your Data Model
  - that palette is removed from the page

### Iteration 5 - Editing Saved Palettes

![iteration 5](./assets/colorandom/iteration5.png)

- When a user clicks on a saved palette, it should appear on the main part of the page
- From there, a user can change the palette by locking/unlocking colors and clicking `New Palette`
- If a user saves the updated palette, it should appear as a NEW saved palette. The previous saved palette (the one you were initially editing) should remain untouched in the saved palettes section.

### Optional Extensions - Getting fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

Options:
- Ensure that all saved palettes are unique.
- When a user tries to delete a saved palette, have them confirm that they really do want to delete it.
- Allow users to name their palettes when saving.
- Allow users to name their palettes when saving, and allow them to search their saved palettes by name.
- Create a way for users to adjust a color (look to [Coolors](https://coolors.co/app) for inspiration).
- Research hex codes to figure out how to programmatically generate random palettes that are cohesive and pleasant.

## Rubric

This rubric should serve as a guide for students as they progress through the project, as well as to self-evaluate. Instructors will use it to evaluate the project at its final due date/time, and provide detailed feedback so students know what areas to focus on in future projects.

Scores land in a range between 1 and 4. Below is a breakdown of what those numbers represent.

* **4 (exceptional)** - went **beyond** set learning goals; did self-teaching to go above and beyond in this area. If other scores are below a 3, redirect effort spent in this area to the weaker areas.
* **3 (proficient)** - exactly on track! you're where you need to be in this area! great work!
* **2 (trailing)** - a little behind where we want to see you right now; in a good place to build familiarity/competency in this area; study in this area to level up and grow
* **1 (dragging)** - significantly behind where we want to see you; major growth needs to be shown in this area; set up a pairing session with an instructor as soon as possible

To earn a given score, an application must meet the requirements listed in that score explanation and all scores lower.

### Professionalism

* **4:**
  - Team uses a PR template for every pull request
  - Team habitually conducts thorough code reviews in the GitHub GUI to document the progress of the application
  - Team has sought out technical code reviews from one or more mentors and documented them in the GitHub GUI
* **3:**
  - Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  - Commit messages are consistent, descriptive, and concise and begin with a verb and capital letter
  - Team uses PRs to screen/verify code before adding it to the main branch
  - Branches are consistently used for individual features
  - There is no more than a 10% disparity in project contributions between teammates
  - README is well formatted and gives good context about the project, including links to both contributors’ GitHub profiles, and to the deployed GitHub Pages site
* **2:**
  - Commits are large and do not effectively communicate the progression of the application
  - Team uses PRs but do not review code before merging into the main branch
  - Branches are sometimes used for individual features
  - There is a 20% disparity in project contributions between teammates
  - README is brief and does not provide context for the project
* **1:**
  - Some commits are pushed directly to the main branch
  - PRs are used inconsistently
  - There is a 50% disparity in project contributions between teammates
  - There is no README, or the “boilerplate” README is left in the project.

### HTML && CSS - Style and Implementation

* **4:**
  - Developers use [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes. _Note: If going this route, let assigned instructor know which naming convention will be used._
  - Application fully implements HTML that is accessible for individuals with visual disabilities. Note: This will be checked using the Chrome Extenstion [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) audit tool, and 0 errors & 0 contrast errors are expected. To get this extension to work with local files, follow these steps:
    - Install
    - Right click the WAVE extension
    - Click "Manage Extensions"
    - Flip the "Allow access to file URLs" switch
    - Success!
* **3:**
  - Application utilizes consistant naming for HTML classes and IDs, and follows suggested conventions. Example: classes should be named using kabab-case, ids should be used sparingly.
  - CSS is DRY, utilizing existing classes/rules to cut down on repetitive styles. There is evidence of reused styles in the application.
  - CSS properties are organized in a consistent manner (such as alphabetizing properties within a rule).
  - In CSS, specificity is balanced with DRY conventions.
* **2:**
  - Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). Semantic elements like `<button>`, `<li>`, etc. are used instead of `<div>`. If `<div>` elements are used, they are only for styling purposes.
  - Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.
  - UI layout allows user to complete all app functionality.
* **1:**
  - Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)
  - Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)

### JavaScript - Style and Implementation

* **4:**
  * All functions strictly adhere to the Single Responsibility Principle (SRP)
  * There are no nested if/else statements
  * Functions and code are well-refactored and show developer empathy
* **3:**
  * Application uses the Data Model exclusively to track changes to the palettes,
    and display of palettes happens after the Data Model has been updated
  * There are no nested for loops
  * Functions are DRY and observe SRP - and most are around 10 lines of code or less
  * There are no global variables aside from query selectors, an array for your palettes and a `currentPalette` variable (if needed).
  * Uses event delegation correctly on dynamic elements where applicable
  * Uses parameters and arguments to craft short and reusable functions. There are no parameters or arguments in functions that are unused.
* **2:**
  * Data model is built to the specifications detailed in the spec sheet and is fully separated from the DOM.
    - example: There should not be any DOM manipulation in class files.
  * All console logs, debuggers and comments are removed from code before submitting.
* **1:**
  * Crafts JS according to the [Turing JS style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)


### Functional Expectations

Functionality is the **least important** piece of the rubric. It's included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:
* Code that completes iterations but is sloppy
* One or both team members do not understand every single line of code
* One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality
* A score cannot be earned if all developers are not intimately familiar with the concepts and understanding driving every line of code.

An app with many features, sloppily executed, is worse than a project with fewer features that is clean and well-refactored.

* **4:** Application completes an extension without bugs.
* **3:** Application meets all of the expectations of Iteration 5 without bugs.
* **2:** Application meets all of the expectations of Iteration 4 without bugs.
* **1:** Application meets all of the expectations of Iteration 3 without bugs.
