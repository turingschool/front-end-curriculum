# Build A Bear Group

## Overview

Look. Sometimes, it's nice to just build something that's fun and silly and doesn't serve a big purpose. Sometimes you just wanna dress up a cute teddy bear.

In this project, we're going to build an application where users can create and save outfits for a digital teddy bear.

## Learning Goals

* Use a JavaScript class to store DRY, encapsulated data
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate and iterate over arrays in order to display data on the page
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Setup

* Complete a DTR.
* Create a slack channel for all team members and your Project Manager.
* Create a directory called `buildabear`, with `index.html` and `styles.css` files inside of it, and an `assets` folder inside of it. Initialize and create a GitHub project. Add all team members and your Project Manager as collaborators.
* Deploy your application to GitHub Pages.
* In the team channel, drop the repo link and GitHub pages link.

## Architecture

The final file structure will resemble this:

```
buildabear
        |_index.html
        |_styles.css
        |_main.js
        |_outfit.js
        |_assets
                |_your images will be stored in this folder
```

## Progression

### Iteration 0 - Layout part 1

We are not providing a strict comp for this project. Instead, you will create a design that meets this general wireframe.

![build a bear project wireframe](https://raw.githubusercontent.com/turingschool/front-end-curriculum/gh-pages/assets/images/projects/build-a-bear/bab.png)

Fonts, colors, and general appearance are up to you. However, please stick to the wireframe's general layout.

Note: the "Saved Outfits" section will contain buttons, not links.

We will provide assets to use (found [here](https://github.com/turingschool/front-end-curriculum/tree/gh-pages/projects/module-1/assets/bab-assets)), or you may spend 1 hour finding your own assets. **DO NOT SPEND MORE THAN ONE HOUR ON THIS.** And if you choose to use your own assets, please keep things professional - remember, future employers may one day look at this very project! 😱

By the end of Iteration 0:
* display and style the header
* display and style the left-hand buttons
* display and style the central bear
* display and style the central outfit naming form
* display and style the right-hand list of saved outfit cards

**NOTE!** Do not worry about placing garments, or making them show up on button clicks yet.

### Iteration 1 - Data model

Before we begin manipulating the DOM, we'll take a look at the data model which will drive the changes to be displayed.

For this project, we'll be increasingly thinking about the "data model" and "DOM model" as separate entities. There are a number of reasons for this:

* It more closely mimics how complex applications are built
* It will allow us, in the future, to store data in `localStorage`
* It creates a "source of truth" from which we can then manipulate the DOM

Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

1. An `outfit.js` file that contains an `Outfit` class.
  * `Outfit` methods must include, but are not limited to:
    1. `constructor`
    2. `addGarment` (should be able to update the outfit's `garment` array)
    3. `removeGarment` (should be able to update the outfit's `garment` array)
2. A `main.js` file that contains all DOM related JavaScript.

**Note** The `outfit.js` file  must be the first script in your HTML so that your `main.js` file has access to your `Outfit` class.

* An outfit has an _id_, _title_, _garments_, and _background_ instance variables.
  * The _id_ should be a unique identifier. (Note: generating a random number does _not_ guarantee it will be unique)
  * _title_ is a string.
  * _garments_ is an array.
  * _background_ is a string.

Each outfit should be created as an object instance of the `Outfit` class. Once an outfit object is created, all that data can be used to update the DOM. That object should also be added to a `list` of all the outfits your application currently has. This should probably be a global variable in your `main.js`.

### Iteration 2 and beyond

After you have completed Iterations 0-1, alert your Project Manager that you are ready for the next iteration. Then, your Project Manager will provide you with the spec for the next iteration.

There are 6 total iterations (Iteration 0 - Iteration 5), and optional additional extensions.

Each time you complete an iteration, ask for the next one!

**A passing project completes functionality through iteration 5 cleanly, with refactored, thoughtful code.**

<!--
### Iteration 2 - Layout part 2

**Updating the data model:**

As a user,
- When the page loads,
- A new instance of an Outfit is created

As a user,
- When I click a garment button,
- The current instance of Outfit is updated to add that information to the Outfit

Note: an outfit can only contain one item from each category (aka Hats, Shirts, Accessories, Backgrounds, etc)

**Updating the DOM model:**

As a user,
- When I click a garment button,
- The button should visually indicate that it has been selected
- And the correlating garment should appear on the bear

As a user,
- When I click a garment button,
- If that button has already been selected,
- The button will visually indicate that it is no longer selected
- And the correlating garment should disappear from the bear

As a user,
- When I click a garment button,
- Any other selected buttons from that category (e.g. Hats, Shirts, Accessories, Backgrounds etc) should be un-selected
- And the correlating items should be removed from the bear
- And the selected button's garment should be added to the bear
- So only one item from any category can be applied to the bear at a time

### Iteration 3 - Saving outfits

Below the bear is a short form with a single input and a button. That form will be used to save an outfit.

As a user,
- When I click "Save",
- If I entered information in the "Title" input field,
- I should see a new saved outfit card appear in the Saved Outfits list

As a user,
- When I click "Save",
- If I entered information in the "Title" input field,
- "I should see the "Title" field clear out

As a user,
- When I look at the "Save" button,
- When the "Title" input is empty,
- I should notice that the "Save" button is disabled because it is a lighter/desaturated color and the cursor is not a pointer when I hover over it, and any button hover states are disabled

As a user,
- When I click "Save",
- And a new saved outfit card is successfully created,
- I should _not_ see the page reload

As a user,
- When I click "Save",
- And a new saved outfit card is successfully created,
- I should see that the bear returns to its default, naked (😮!) state, ready to be dressed in a new outfit

Things to consider:
- When you save an outfit, how will you hold onto the data?
- Remember: if I save an outfit, I probably want to be able to see it again in the future!

### Iteration 4 - Data persistence with Local Storage

As a user,
- When I refresh the page,
- All my saved outfit cards still show up on the page

As a user,
- When I click the X on a saved outfit card,
- the outfit card is no longer visible

As a user,
- When I click the X on a saved outfit card, and then refresh the page,
- the outfit that I deleted does not reappear

As a user,
- When I click the X on a saved outfit card,
- And the card is successfully deleted,
- I should _not_ see the page reload

### Iteration 5 - Advanced functionality

* When a saved outfit card is clicked:
    - it dresses the bear in that outfit
    - it updates the selected garment buttons to match
    - it fills the form with the name of the outfit
* When a previously saved outfit is on the bear:
    - a user can edit the outfit,
    - click the "Save" button,
    - and see that the outfit is permanently updated,
    - including in `localStorage`

### Extensions

* Add data validation to ensure that no two outfits can be named the same thing
* Add UI so users can filter saved outfits by the garments or background they include
* Refactor so one outfit can contain more than one item from each category (i.e. the bear can wear more than one accessory, hat, etc, at a time).
* Modify the outfit card so a small image of the dressed bear appears next to the name of the outfit.
*

-->

## Rubric

This rubric should serve as a guide for students as they progress through the project, as well as to self-evaluate. Instructors will use it to evaluate the project at its final due date/time, and provide detailed feedback so students know what areas to focus on in future projects.

Scores land in a range between 1 and 4. Below is a breakdown of what those numbers represent.

* **4** - Exceptional (you are where you need to be and either had time or learned extra to go above and beyond in this area)
* **3** - Expected (you showed you are right where you need to be at this point in time)
* **2** - Below expectations (in a good place to grow and be strong in this area soon, but not where you need to be right now)
* **1** - Far below (significant growth needs to be shown in this area; maybe it’s an area you forgot to look at, maybe it’s something you have big gaps on and need to set up a pairing session on ASAP)

To earn a given score, an application must meet the requirements listed in that score explanation and all scores lower.

### Functional Expectations

* **4:** Application meets all of the expectations from Iteration 5 and most functionality from Iteration 6.
* **3:** Application meets all of the expectations from Iteration 5.
* **2:** Application meets all of the expectations of Iteration 4.
* **1:** Application meets all of the expectations of Iteration 3.

### UX/UI

* **4:** Application design incorporates **additional design elements not included in the wireframe** which meaningfully increase the usability of the app. Additional elements that have been added match the visuals established in the comps. Every little detail was built out thoughtfully - from hover states to placeholders, etc. Nothing obstructs usability or is misleading.
* **3:** Application skillfully translates the wireframe into a usable interface, with thoughtful design that helps the user understand how things work, from hover states to placeholders, etc. It renders correctly on desktop and larger screens (colors, fonts, icons, spacing, alignment, etc). The app design demonstrates a clear understanding of layout, with intentional, consistent spacing and alignment of elements. Nothing obstructs usability or is misleading.
* **2:** Application translates wireframe into a usable interface. It is laid out for desktop only. Nothing obstructs usability or is misleading.
* **1:** Application translates wireframe into a usable interface. There are some confusing or misleading choices in the UI. There may be some sloppiness leading to reduced usability.
* **0:** Application does not successfully translate the wireframe into a usable interface. Layout is confusing and obstructs usability.

### Git Workflow & Documentation

* **4:** A PR template was used. A code review was requested and completed by a mentor, and all team members can speak to how the feedback in code review was implemented (and point to the commit(s) that implemented the feedback).
* **3:** Every team member (on a team of 3) authors between 25%-40% of the commits. Most commits are formatted correctly. Every team member contributes to at least 2 meaningful PR conversations. The README is formatted well and contains:
  - Overview of project and goals
  - Overview of technologies used, challenges, and wins, any other reflections
  - Screenshots of comp and your app
  - Credit all teammates with links to their individual GitHub pages
* **2:** Every team member (on a team of 3) authors between 20%-45% of the commits. More than a few commits are formatted incorrectly. The README is formatted well but may be lacking in detail.
* **1:** Commit and PR history does not tell a story of the application OR a README has not been created/has minimal information.

### JavaScript - Style and Implementation

* **4:**
  * Uses logical operators instead of if/else statements where applicable
  * Data management is optimized to reduce redundancy
* **3:**
  * DRY and SRP practices are demonstrated in codebase and all team members can speak to implementation decisions
  * All functions are less than 10 lines
  * There are no nested if/else statements
  * There are no global variables aside from query selectors and an array for your to-dos
  * Uses event delegation correctly on dynamic elements for functionality (deleting, viewing)
  * Uses classes to encapsulate data (state) and behavior (methods)
* **2:**
  * JavaScript demonstrates clear organization, with variable declarations grouped together, function declarations grouped together, event listeners grouped together.
  * Variables and functions are named thoughtfully and semantically. There are no un-used variables in the codebase
  * DRY and SRP practices are attempted in codebase and all team members can speak to implementation decisions
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
