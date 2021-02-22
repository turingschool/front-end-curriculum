---
title: IdeaBox Group
---

## Overview

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript to implement snappy filtering in the browser, and `localStorage` to persist our wonderful ideas between sessions.

## Learning Goals

* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand how to implement client-side data persistence using `localStorage` and JSON
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Day One Deliverables

- Complete a [DTR](https://github.com/turingschool/career-development-curriculum/blob/master/module_one/dtr_guidelines_memo.md).
- One person should fork [the boilerplate
  repository](https://github.com/turingschool-examples/ideabox-boilerplate). Add all team members and your Project Manager as collaborators.
- Deploy your application to GitHub Pages.
- In a Slack DM to your assigned instructor, drop the repo link, DTR and GitHub pages link.

## Progression

### Iteration 0 - Desktop Layout

Plan to write the HTML and CSS so that your application matches this comp. Based on what you are building, you can anticipate that the Idea "cards" will not always be there on page load, but for now, they should.

Use the same text on your cards that is used in the spec so you can ensure your spacing/sizing is accurate.

![Desktop Layout](./assets/ideabox-group/desktop.jpg)

You will need the `svg` image files for the star and delete icons. [Here's the link to download the `svg` icons.](https://drive.google.com/drive/folders/18xpWplI0tpXIK1omBZeq04LEx2OMzzMK?usp=sharing). _Note: You won't end up using all of the icons in this folder._

![Colors](./assets/ideabox-group/ideabox-colors.png)
![Icons](./assets/ideabox-group/icons.jpg)


### Iteration 1 and beyond

We strongly recommend that you complete Iteration 0 before moving on to the next iterations!

### Architecture

For this project, we'll be increasingly thinking about the "data model" and "DOM model" as separate entities. We'll be using:

- JSON and `localStorage` to persist data on page reload.
- JavaScript to manage client-side interactions.

Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

1. An `idea.js` file that contains an `Idea` class.
  * `Idea` methods must include, but are not limited to:
    1. `constructor`
    2. `saveToStorage` (should only have one job which is to save the instance to storage)
    3. `deleteFromStorage`
    4. `updateIdea` (should be able to update the idea's title, body, or starred state)
2. A `main.js` file that contains all DOM related JavaScript.

**Note** The `idea.js` file  must be the first script in your HTML so that your `main.js` file has access to your `Idea` class.

### Data Model

* An idea has an _id_, _title_, _body_, and _star_.
  * The _id_ should be a unique identifier. (Note: generating a random number does _not_ guarantee it will be unique)
  * _title_ and _body_ are strings.
  * _star_ is a boolean.

Each idea should be created as an object instance of the `Idea` class. Once an idea object is created, all that data can be used to update the DOM. That object should also be added to a `list` of all the ideas your application currently has. This should probably be a global variable in your `main.js`.

### Iteration 2 - Adding Ideas

As a user,
- When I click "Save",
- If I entered information in both the "Title" and "Body" input fields,
- I should see a new idea card with the provided title and body appear in the idea list

As a user,
- When I click "Save",
- If I entered information in both the "Title" and "Body" input fields,
- I should see the "Title" and "Body" input fields clear out

As a user,
- When I look at the "Save" button,
- When either the "Title" or "Body" inputs are empty,
- I should notice that the "Save" button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

As a user,
- When I click "Save",
- And a new card is successfully created,
- I should _not_ see the page reload

### Iteration 3 - Favoriting & Deleting Ideas

As a user,
- When I click the "Delete" button on an idea card,
- The card should be permanently removed from my view

As a user,
- When I click the "Star" button on an idea card,
- When the button was an outline of a star (not favorited),
- The button should now be a filled in star (favorited)

As a user,
- When I click the "Star" button on an idea card,
- When the button was a filled in star (favorited),
- The button should now be an outline of a star (not favorited)

As a user,
- When I delete or favorite any card,
- I should _not_ see the page reload

### Iteration 4 - Local Storage & Filtering

As a user,
- When I create one idea successfully, then refresh the page,
- The idea card is still in the idea list

As a user,
- When I create two cards successfully, delete one, then refresh the page,
- One idea card is still in the idea list (the one I did not delete)

As a user,
- When I favorite an idea card, then refresh the page,
- That idea card is still in the "favorite" state with the filled in star icon

As a user,
- When I click "Show Starred Ideas"
- I see only card that are favorited

As a user,
- When I click "Show Starred Ideas"
- I see the text on that button has changed to "Show All Ideas"

As a user,
- When I click "Show Starred Ideas"
- Then I click what is now "Show All Ideas"
- I see all ideas, favorited or not

As a user,
- When I type a letter or phrase into the search bar, the cards should start filtering (no click needed)
- I now only see the cards that include the letter/phrase in the title or body

As a user,
- When I backspace and delete something from the search bar, so that it's empty
- I see all cards since no search criteria is being provided

### Iteration 5 - Commenting on Ideas

### Architecture

In addition to your `idea.js` and `main.js`, you now need to have a `comment.js` file.

This file should hold a class, `Comment`. `Comment` methods must include, but are not limited to:
1. `constructor`
2. `saveToStorage` (should only have one job which is to save the instance to storage)
3. `deleteFromStorage`

### Data Model

* An idea now also has a _comments_ property
  * The _id_ should be a unique identifier. (Note: generating a random number does _not_ guarantee it will be unique)
  * _title_ and _body_ are strings.
  * _star_ is a boolean.
  * _comments_ is an array.

* A comment should have _content_ - a string that holds the content of a comment.


As a user,
- When I click the "Add" icon on an idea card,
- A form to add a comment appears

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
* **3:**
  * Application uses the Data Model exclusively to track changes to the ideas,
    and display of ideas happens after the Data Model has been updated
  * There are no nested for loops
  * Functions are DRY and observe SRP - and most are around 10 lines of code or less
  * There are no global variables aside from query selectors and an array for your ideas
  * Uses event delegation correctly on dynamic elements for deleting, and starring an idea
  * Uses parameters and arguments to craft short and reusable functions. There are no parameters or arguments in functions that are unused.
* **2:**
  * Data model is built to the specifications detailed in the spec sheet and is fully separated from the DOM. Example: There should not be any DOM manipulation in class files.
  * All console logs, debuggers and comments are removed from code before submitting.
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)

### Functional Expectations
Functionality is the least important piece of the rubric. It’s included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:

* Code that completes iterations but is sloppy
* One or both team members do not understand every single line of code
* One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality
* A score cannot be earned if all developers are not intimately familiar with the concepts and understanding driving every line of code.

* **4:** Application meets all of the expectations from Iteration 5 without bugs.
* **3:** Application meets all of the expectations from Iteration 4 without bugs.
* **2:** Application meets all of the expectations of Iteration 3 without bugs.
* **1:** Application meets all of the expectations of Iteration 2 without bugs.
