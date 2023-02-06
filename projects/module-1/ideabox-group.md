---
title: IdeaBox Group
---

## Overview

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing the user with a usable, intuitive client-side interface. To this end, we'll rely on JavaScript to implement snappy filtering in the browser.

## Learning Goals

* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand how a developer might separate the data model from the DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness, SRP, and purity

## Day One Deliverables

- One person should create a new directory called `ideabox`.You'll need to initialize git in your local repo. You can brush up on that process with [this article](https://guides.github.com/introduction/git-handbook/).
  It should contain:
  - `index.html` 
  - `styles.css`
  - `app.js` (this is where you will write the logic for the data model)
  - `index.js` (this is where your DOM manipulation will occur)
  - `assets` (this is a directory that will hold your icon files)
-  As a team, complete [the DTR Form](https://docs.google.com/forms/d/e/1FAIpQLSche5cvtlYQ_SaBDqqoF3H9gFiy2p60AOPoUMbhgIHlg-vRlQ/viewform?usp=sf_link)
-  Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the following links:
    - the GitHub repo link
    - the GitHub Pages deployed site
      - Instructions for deploying: Repo Settings >> Pages >> Select the `main` branch as your Source branch >> Save >> Send us the URL they give you in the pop up that says "Your site is ready to be published at [URL]"
-  Add all teammates and your assigned instructor as collaborators to your forked repository
- In your group project README, include links to all of your LinkedIn profiles. The rough draft of your LinkedIn is due during this project, so use this as an opportunity to leverage it! We'll check in on this during our group project check-in. 

## Progression

### Iteration 0 - App Layout

Plan to write the HTML and CSS so that your application matches this comp. Based on what you are building, you can anticipate that the Idea "cards" will not always be there on page load, but for now, they should.

Use the same text on your cards that is used in the spec so you can ensure your spacing/sizing is accurate.

![Desktop Layout](./assets/ideabox-group/desktop.jpg)

You will need the `svg` image files for the star and delete icons. [Here's the link to download the `svg` icons.](https://drive.google.com/drive/folders/18xpWplI0tpXIK1omBZeq04LEx2OMzzMK?usp=sharing). _Note: You won't end up using all of the icons in this folder._

![Colors](./assets/ideabox-group/ideabox-colors.png)
![Icons](./assets/ideabox-group/icons.jpg)


### Iteration 1 and beyond

We **strongly recommend** that you complete Iteration 0 **before** moving on to the next iterations!

### Architecture

For this project, we'll be increasingly thinking about the "data model" and "DOM model" as separate entities. We'll be using:

- JavaScript to manage the data model and the client-side interactions.
- HTML, CSS and the DOM to display our data

Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

1. An `app.js` file that contains the logic for the data model.
  * You'll need to be able to:
    1. create an idea (see details below in "Data Model")
    2. store ideas (hint: store idea objects in an array)
    3. update the stored ideas array (to remove ideas, add new ideas, etc)
    4. update a single idea's information (ex: you will need to be able to change an idea's "star" property's value)
2. An `index.js` file that contains all DOM related JavaScript.

**Note** The `app.js` file  must be the first script in your HTML so that your `index.js` file has access to the functions in your `app.js` file!

### Data Model

* An idea has an _id_, _title_, _body_, and _star_.
  * The _id_ should be a unique identifier. (Note: generating a random number does _not_ guarantee it will be unique)
  * _title_ and _body_ are strings.
  * _star_ is a boolean.

Each idea should be an object that is created by a function. Once an idea object is created, that data can be used to update the DOM. That idea object should also be added to a "list" of all the ideas your application currently has. This should probably be a global variable in your `app.js` file.

Remember: as users interact with the DOM, you should use that information to first update the data model, and then use that data model to dislay the information onto the DOM.

### Iteration 2 - Adding Ideas

As a user,
- When I click "Save",
- If I entered information in both the "Title" and "Body" input fields,
- I should see a new idea object with the provided title and body appear in the ideas array
- I should see a new idea card with the provided title and body appear on the DOM

As a user,
- When I click "Save",
- If I entered information in both the "Title" and "Body" input fields,
- I should see the "Title" and "Body" input fields clear out (so that they are ready for the user to add a different idea)

As a user,
- When I look at the "Save" button,
- When both or either of the "Title" or "Body" input is empty,
- I should notice that the "Save" button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

As a user,
- When I click "Save",
- And a new card is successfully created,
- I should _not_ see the page reload

### Iteration 3 - Favoriting & Deleting Ideas

As a user,
- When I click the "Delete" button on an idea card,
- That idea object should be permanently removed from the ideas array
- The idea card should be permanently removed from the DOM

As a user,
- When I click the "Star" button on an idea card,
- The star property of that idea's object should be updated (in the ideas array)
- When the button was an outline of a star (not favorited), the button should now be a filled in star (favorited)
- **and vice versa (for unfavoriting)**

As a user,
- When I delete or favorite any card,
- I should _not_ see the page reload

### Iteration 4 - Filtering

As a user,
- When I click "Show Starred Ideas"
- I see only cards that are favorited

As a user,
- When I click "Show Starred Ideas"
- I see the text on that button has changed to "Show All Ideas"

As a user,
- When I click "Show Starred Ideas"
- Then I click what is now "Show All Ideas"
- I see all ideas, favorited or not

As a user,
- When I type a letter or phrase into the search bar, the cards should start filtering (no click needed)
- I now only see the idea cards that include the letter/phrase in either the title or body

As a user,
- When I backspace and delete something from the search bar, so that it's empty
- I see all cards since no search criteria is being provided

## Extensions

### localStorage 

Typically, frontend developers work with APIs to serve up data that is stored on an external server/database. However, sometimes you might want to store some information `Client Side` - meaning we store it on the user's local browser. Interested in this extension? Check out the lesson on [localStorage](https://frontend.turing.edu/lessons/module-1/json-and-localstorage.html). We don't officially teach this lesson, but it's a good one to know.

As a user,
- When I create one idea successfully, then manually refresh the page,
- The idea object is still saved in the ideas array
- The idea card is still visible on the DOM

As a user,
- When I create two cards successfully, delete one, then refresh the page,
- One idea object is still in the ideas array (the one I did not delete)
- One idea card is still visible on the DOM (the one I did not delete)

As a user,
- When I favorite an idea card, then refresh the page,
- That idea card is still in the "favorite" state with the filled in star icon (in both the ideas array and on the DOM)

### Commenting on Ideas

This extension adds the ability for your user to add comments to an idea.

#### Data Model

* The idea objects should now include a new property: `comments`. This will begin as an empty array.  
* You will need to write functions that allow you to add new comments to an idea's `comments` array.  
* A comment will be an object with the following properties: `id` (should be unique), `content` (a string of the comment itself).


As a user,
- When I click the "Add" icon on an idea card,
- A form to add a comment appears on that idea card

As a user,
- When I open the comment form on a card, type something in, and click "Add Comment",
- The text typed in is now a comment attached to this card

As a user,
- When I open the comment form on a card, type something in, and click "Add Comment",
- The "Comment" input field clears out and is ready to accept another comment

As a user,
- When I open the comment form on am idea card,
- When the "Comment" input field is empty,
- I should notice that the "Add Comment" button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

As a user,
- If I have implemented localStorage,
- When I comment on an idea card, then refresh the page,
- That comment is still on the idea card


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
  - Team uses a PR template for every pull request
  - Team habitually conducts thorough code reviews in the GitHub GUI to document the progress of the application
  - Team has sought out code reviews from one or more mentors
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

### Comp Recreation

* **4:**
  - Additional elements and animations have been added that match the visuals established in the comps, and/or design is responsive across small, medium and large breakpoints.
* **3:**
  - Application implements all major comp details accurately and correctly on desktop (colors, fonts, icons, spacing, alignment, etc).
  - If additional elements were added, they generally match the visuals established in the comps, but may be slightly awkward.
  - Careful attention was given to the little details like spacing, alignment, and hover states.
* **2:**
  - Application implements most major comp details accurately and correctly (colors, fonts, icons, spacing, alignment, etc.).
* **1:**
  - Application has a significant mismatch when compared to the provided comp.

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
* **2:**
  - Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). Semantic elements like `<button>`, `<li>`, etc. are used instead of `<div>`. If `<div>` elements are used, they are only for styling purposes.
  - Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.
* **1:**
  - Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)
  - Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)

### JavaScript - Style and Implementation

* **4:**
  * All functions strictly adhere to the Single Responsibility Principle (SRP)
  * There are no nested if/else statements
  * Functions and code are well-refactored and show developer empathy
  * Most functions are pure and do not rely on or cause side effects
* **3:**
  * Application uses the Data Model exclusively to track changes to the ideas.
    Display of ideas on the DOM happens after the Data Model has been updated and *uses* the updated Data Model  
  * There are no nested for loops
  * Functions are DRY and observe SRP - and most are around 10 lines of code or less
  * A few functions are pure and do not rely on or cause side effects
  * There are no global variables aside from query selectors and an array for your ideas
  * Uses event delegation correctly on dynamic elements for deleting, and starring an idea.  `onclick` functionality should not be used in the HTML for idea cards - all functionality should be through JavaScript.  
  * Uses parameters and arguments to craft short and reusable functions. There are no unused parameters or arguments in functions.
* **2:**
  * Data model is built to the specifications detailed in the spec sheet and is fully separated from the DOM. Example: There should not be any DOM manipulation in class files.
  * All console logs, debuggers and comments are removed from code before submitting.
  * No functions are pure.
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)

### Functional Expectations
Functionality is the least important piece of the rubric. It’s included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:

* Code that completes extensions but is sloppy
* One or both team members do not understand every single line of code
* One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality
* A score cannot be earned if all developers are not intimately familiar with the concepts and understanding driving every line of code.

* **4:** Application meets all of the expectations from Iteration 4 and at least one extension without bugs.
* **3:** Application meets all of the expectations from Iteration 4 without bugs.
* **2:** Application meets all of the expectations of Iteration 3 without bugs.
* **1:** Application meets all of the expectations of Iteration 2 without bugs.
