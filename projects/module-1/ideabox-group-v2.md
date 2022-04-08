---
title: IdeaBox Group
---

## Overview

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript to implement snappy filtering in the browser.

## Learning Goals

* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Day One Deliverables

- One person should create a new directory called `ideabox`.You'll need to initialize git in your local repo. You can brush up on that process with [this article](https://guides.github.com/introduction/git-handbook/).
  It should contain:
  - `index.html`
  - `styles.css`
  - `Idea.js`
  - `main.js`
  - `assets` (this is a directory that will hold your icon files)
-  As a team, complete [the DTR Form](https://docs.google.com/forms/d/e/1FAIpQLSche5cvtlYQ_SaBDqqoF3H9gFiy2p60AOPoUMbhgIHlg-vRlQ/viewform?usp=sf_link)
-  Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the following links:
    - the GitHub repo link
    - the GitHub Pages deployed site
      - Instructions for deploying: Repo Settings >> Pages >> Select the `main` branch as your Source branch >> Save >> Send us the URL they give you in the pop up that says "Your site is ready to be published at [URL]"
-  Add all teammates and your assigned instructor as collaborators to your forked repository
- In your group project README, include links to all of your LinkedIn profiles. The rough draft of your LinkedIn is due during this project, so use this as an opportunity to leverage it! We'll check in on this during our group project check-in. 

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

- JavaScript to manage client-side interactions.
- HTML, CSS and the DOM to display our data

Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

1. An `Idea.js` file that contains an `Idea` class.
  * `Idea` methods must include, but are not limited to:
    1. `constructor`
    2. `saveToStorage`* - only used for extensions (should only have one job which is to save the instance to storage)
    3. `deleteFromStorage`* - only used for extensions
    4. `updateIdea` (should update the idea's starred state)
2. A `main.js` file that contains all DOM related JavaScript.

**Note** The `Idea.js` file  must be the first script in your HTML so that your `main.js` file has access to your `Idea` class.

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
- I should see a new Idea instance with the provided title and body appear in the ideas array
- I should see a new idea card with the provided title and body appear on the DOM

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
- The card instance should be permanently removed from the ideas array
- The card should be permanently removed from my view

As a user,
- When I click the "Star" button on an idea card,
- The card instance's star property should be updated in the ideas array
- When the button was an outline of a star (not favorited), the button should now be a filled in star (favorited)
  - and vice versa (for unfavoriting)

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
- I now only see the cards that include the letter/phrase in the title or body

As a user,
- When I backspace and delete something from the search bar, so that it's empty
- I see all cards since no search criteria is being provided

## Extensions

### localStorage 

Typically, frontend developers work with API's to serve up data that lives elsewhere. However, sometimes you might want to store some information `Client Side` - meaning we store it on the users local browser. Interested in this extension? Check out the lesson on [localStorage](https://frontend.turing.edu/lessons/module-1/json-and-localstorage.html). We don't officially teach this lesson, but it's a good one to know.

As a user,
- When I create one idea successfully, then refresh the page,
- The idea card instance is still in the ideas array
- The idea card is still visible on the DOM

As a user,
- When I create two cards successfully, delete one, then refresh the page,
- One idea instance is still in the ideas array (the one I did not delete)
- One idea card is still visible on the DOM (the one I did not delete)

As a user,
- When I favorite an idea card, then refresh the page,
- That idea card is still in the "favorite" state with the filled in star icon (in both the ideas array and on the DOM)

### Commenting on Ideas

### Architecture

In addition to your `Idea.js` and `main.js`, you now need to have a `Comment.js` file.

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

---

# Notes on Project Feedback

The rubric below serves as a guide for both **students** and **instructors**. 

**Students:**
- It should be used as a reference throughout the project to keep on track and guide learning.
- It should also be used by students to self-assess their work.

**Instructors:**
- It should be used to evaluate the project at its final due date/time.
- It should be a guide to provide relevant feedback to students so they can grow and improve in the areas that need deeper understanding.


### Projects as Learning Tools

When projects are graded, we want you to view the evaluation + feedback as a means to inform your learning, rather than as static "grades". Feedback from instructors will focus on areas where you have an opportunity to deepen your understanding. 

The evaluation will provide feedback by answering the only important question:

**Does the project demonstrate student understanding of the learning goals & concepts?**

Projects will answer that question, being marked as **yes**, **not yet**, and **wow**. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

The overall project outcome (yes, not yet, wow) is determined by "averaging" each section's outcome. You can think of a "yes" being worth a  1, a "not yet" being worth a 0, and a "wow" being worth a 2. 

For this project, an average that is above 0.5 is considered a yes - a passing project that demonstrates good student understanding! An average of 1.5+ is considered a wow. An average of 0.5 or below is considered a not yet - a project that indicates that the concepts have not been fully understood (see note in the section below).

<section class="answer">
### A important note about the possible outcomes

**Yes** indicates that the student/team is ON TRACK in this area! YES you showed us you understand the concept! 
- The student/team demonstrates a good understanding of the concept

**Not Yet** indicates that the student/team is BEHIND in this area - you showed us that you don't yet understand the concept
- The student/team demonstrates misconceptions or confusion around the topic
- Student/team should prioritize this concept in their studying and practice
- ✨ An overall "not yet" on one project does **not** mean the module is doomed! We want to see GROWTH. A student/team can struggle with a project and still (taking into account the rest of their work and assessments) demonstrate readiness for the next module! ✨

**Wow** indicates that the student/team did extra work to teach themselves a new concept, or to achieve a deep & nuanced understanding of a concept
- This is not an outcome to prioritize achieving
- "Wow" should not come at the expense of another concept
- "Wow" often does not look like extra features, but instead looks like thoughtful refactoring and polish 💅
</section>

## Rubric

This project has 4 evaluated concepts:

- Professionalism
- Comp Recreation
- HTML & CSS
- JavaScript

And evaluation of these concepts is assisted through the final graded section:
- Functionality (we can't properly assess the 4 main concepts if there is not enough work to grade)

<section class="note">
### Note about the below criteria

Competency & understanding of these concepts can be demonstrated in many ways. **The following examples are not checklists to complete!** They are illustrations to guide your team as you develop this project and continue your learning.
</section>

---

<section class="answer">
### Professionalism

- The team's norming document is taken seriously, with thoughtful reflections from all team members regarding their skills, learning goals, work styles, etc. 
- The work is distributed equitably; commit/code contributions are roughly even for each team member
- Branches are consistently used for individual features and commit messages are descriptive and concise
- Commits are atomic, documenting a single changeset (such as a new function being created, or a function being updated) and clearly demonstrates how the project evolved over time.
- PRs have clear, thorough descriptions and are consistently reviewed by other team members before work has been merged.
- README is formatted and gives new contributors and employers sufficient context about the project including setup instructions, deploy link (gh-pages), images or video of the functioning app, technologies used, reflections, future features, and other pertinent information.

✨WOW✨ can look like:
- The team holds regular standups and retros while also revisiting the norming document as better perspective is gained
- A [PR template](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository) is effectively used
</section>

<section class="answer">
### Comp Recreation

- Application implements all major comp details accurately and correctly on desktop (colors, fonts, icons, spacing, alignment, etc)
- Careful attention was given to the little details like spacing, alignment, and hover states.

✨WOW✨ can look like:
- Additional elements and animations have been added that match the visuals established in the comps.
- The design is responsive across multiple screen sizes including tablets and mobile devices.
</section>

<section class="answer">
### HTML & CSS

- Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)
- Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)
- Application utilizes consistant naming for HTML classes and IDs, and follows suggested conventions.
- Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). If `<div>` elements are used, they are only for styling purposes.
- Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.

✨WOW✨ can look like:
- Developers use [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes. _Note: If going this route, document it in your README and let your project manager know which naming convention will be used._
- Application fully implements HTML that is accessible for individuals with visual disabilities. _Note: This will be checked using the Chrome Extenstion [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) audit tool, and 0 errors & 0 contrast errors are expected._
</section>

<section class="note">
### Note about using the WAVE tool

To get this extension to work with local files, follow these steps:
- Install
- Right click the WAVE extension
- Click "Manage Extensions"
- Flip the "Allow access to file URLs" switch
- Success!
</section>

<section class="answer">
### Javascript

- Application uses the Data Model exclusively to track changes to the ideas.
- No nested if/else statements or for loops.
- Functions are DRY and adhere to the Single Responsibility Prinicple (SRP)
- Event delegation is used correctly on dynamic elements for deleting and starring an idea.
- Data model is fully separated from the DOM.  There is no DOM manipulation in the class files.
- Global variables are thoughtfully created, with a clear understanding demonstrated as to what needs to be global and what can be local
- Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)

✨WOW✨ can look like:
- Changes to the DOM only happen after the Data Model has been updated.  The Data Model is then used to update the DOM.
- Functions make use of arguments and parameters to be dynamic and reusable where possible without overengineering
- Bracket notation is utilized effectively to make accessing properties of class instances more dynamic.
</section>

### Functional Expectations
Functionality is the least important piece of the rubric. It’s included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:

* Code that completes iterations but is sloppy
* One or both team members do not understand every single line of code
* One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality

Well-refactored, thoughtful code is better than sloppy extra features.

<section class="answer">
### Functionality competency examples

- The application completes all of the expectations of Iteration 3 without bugs.

✨WOW✨ can look like:

- Iteration 4 and at least one extension are successfully implemented without bugs.  Additional UI elements are well thoughtout.
</section>

---

## Feedback

A few days after the due date, your team will receive feedback about the project's average outcome (yes/not yet/wow), as well as each section's outcome. You will also receive a few pieces of team-specific feedback for each section (things done well, things to improve on for the current/next project).