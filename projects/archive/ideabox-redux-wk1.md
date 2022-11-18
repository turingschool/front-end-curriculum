---
title: IdeaBox Redux - Week 1
---

## Overview: Week 1

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application a new client that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript and to implement snappy filtering in the browser, and `localStorage` to persist our wonderful ideas between sessions.  Our goal is to also incorporate an agile workflow by incorporating two weekly sprints.

##### NOTE: Work to have the functionality outlined in this project spec completed before the Week 2 Spec/Additions is kicked off at the end of the week.

## Learning Goals

* Continue to improve on building responsive client-side applications with good user feedback
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Utilize `data-*` attributes
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Overview:

### Architecture

For this project, we'll be increasingly thinking about the "data model" and "dom model" as separate entities. We'll be using:

- JSON and `localStorage` to persist data on page reload.
- vanilla JavaScript to manage client-side interactions.

Your entire application will consist of one HTML page or template.
You will have two javascript files:

1. An `idea.js` file that contains an `Idea` class.
  * `Idea` methods must include, but are not limited to:
    1. `constructor`
    2. `saveToStorage` (should only have one job which is to save the instance to storage)
    3. `deleteFromStorage`
    4. `updateIdea` (should be able to update the idea's title, body, or starred state)
    5. `updateQuality`
2. A `main.js` file that contains all dom related javascript.

**Note** The `idea.js` file  must be the first script in your html so that your `main.js` file has access to your `Idea` class.

### Data Model

* An idea has an _id_, _title_, _body_, _star_, and a _quality_.
  * The _id_ should be a unique identifier.
  * _title_ and _body_ are free-form strings.
  * _star_ will be a boolean.
  * _quality_ should store each quality as an integer on the instance
    * How the idea is displayed should be done using an array of quality strings, where the integer value is used to pull a certain string via its index.
    * By default, the idea's _quality_ should default to the lowest setting, which is 0.

Each idea should be created as an object instance of the `Idea` class.

### Phase One: Beginning User Flow

#### Viewing ideas

When visiting the application, the user should:

* See a list of all existing ideas, including the title, body, star, and quality for each idea.
* Ideas should appear in descending chronological order (with the most recently created idea at the top left).
  * If there are no ideas yet, then there should be an indication to the user to create an idea, displayed in the empty idea section.

#### Adding a new idea

On the application's main page, a user should:

* See two text boxes for entering the "Title" and "Body" for a new idea,
  and a "Save" button for committing that idea.
* The "Save" button should be disabled if either the "Title" or "Body" inputs are empty.

When a user clicks "Save":

* A new idea with the provided title and body should appear in the idea list.
* The text fields should be cleared and ready to accept a new idea.
* The page _should not_ reload.
* The idea should be persisted. It should still be present upon reloading the page.

_Note:_ `localStorage` will not track the type of object, so on page reload you will need to re-instantiate all of your idea instances so that they have access to their methods.

#### Deleting an existing idea

When viewing the idea list:

* Each idea in the list should have a button to remove it from both the data model and the dom.
* Upon clicking the "Delete" button, the appropriate idea should be removed from the list.
* The page _should not_ reload when an idea is deleted.
* The idea should be removed from `localStorage`. It should not re-appear on next page load.
  * This update of the data model should happen in a `deleteFromStorage` method that is defined in the `Idea` class.
  * How the DOM gets updated using JavaScript should happen in the `main.js` file (where you can still leverage your idea instance)

#### Editing/Starring an existing idea

* When a user clicks the title or body of an idea in the list, that text should become an editable text field, pre-populated with the existing idea title or body.
* The user should be able to "commit" their changes by pressing "Enter/Return" and by clicking outside of the text field.
- When the user clicks on the "Star" button, the button should stay in the active state.
* If the user reloads the page, their edits will be reflected.
  * This update of the data model should occur in an `updateIdea` method that is defined in the `Idea` class.
  * How the DOM gets updated using JavaScript should happen in the `main.js` file (where you can still leverage your idea instance)

### Phase Two: Enhancing the User Experience

#### Changing the quality of an idea

As we said above, ideas should start out as "swill." In order to change the recorded quality of an idea, the user will interact with it from the idea list.

* Each idea in the list should include an "upvote" and "downvote" button.
* Clicking upvote on the idea should increase its quality one notch ("swill" → "plausible",
  "plausible" → "genius").
* Clicking downvote on the idea should decrease its quality one notch ("genius" → "plausible",
  "plausible" → "swill").
* Incrementing a "genius" idea or decrementing a "swill" idea should have no effect.
  * This update of the data model should occur in an `updateQuality` method that is defined in the `Idea` class.
  * How the DOM gets updated using JavaScript should happen in the `main.js` file (where you should can still leverage your idea instance)

#### Filtering and Searching by Text

We'd like our users to be able to easily find specific ideas they already created, so let's provide them with a filtering interface on the idea list.

* At the top of the idea list, include a text field labeled "Search".
* As a user types in the search box, the list of ideas should filter in real time to only display ideas whose title or body include the user's text. The page _should not_ reload.
* Clearing the search box should restore all the ideas to the list.
  * There is no need to make persisting changes to the data model to achieve this functionality.

#### Layout comps

Desktop layout:

![desktop specs][desktop-base]

Color, font, and icon spec:

![color font and icon specs][button-hover-specs]

#### Link to icon files

You will need the `svg` files for the star, delete, upvote, downvote, and menu icons. [Here's the link to download the `svg` icons.](https://drive.google.com/drive/folders/18xpWplI0tpXIK1omBZeq04LEx2OMzzMK?usp=sharing)

![icon specs][icon-specs]

[desktop-base]: /assets/images/projects/ideabox/ideabox-redux-01.jpg
[button-hover-specs]: /assets/images/projects/ideabox/ideabox-redux-04.jpg
[icon-specs]: /assets/images/projects/ideabox/ideabox-redux-05.jpg

------------------------------------------------------------------

## Rubric

### Functional Expectations

* [ ] Novice: Application meets all of the expectations of phase one.
* [ ] Advanced Beginner: Application meets all of the expectations of phase two.
* [ ] Proficient: Application meets all of the expectations of phase three.
* [ ] Exceptional: Application adds all of the extensions from phase four.

------------------------------------------------------------------

### Comp Recreation

* [ ]  Novice - Application implements all major comp details accurately and correctly on desktop only (colors, fonts, icons, spacing, alignment, etc.)
* [ ]  Advanced Beginner - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.). Transitions between screen sizes may not be smooth
* [ ]  Proficient - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements added generally match the visuals established in the comps, but may be slightly awkward
* [ ]  Exceptional - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements that have been added match the visuals established in the comps

------------------------------------------------------------------

### HTML - Style and Implementation

* [ ]  Novice - Crafts markup according to the [Turing HTML Style Guide](https://github.com/turingschool-examples/html)
* [ ]  Advanced Beginner - Application adds to the above by using appropriate semantic elements and using `data-*` attributes for all data related things
* [ ]  Proficient - Applications adds to the above with markup that is easy to read and follow across naming conventions
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes and:
  * [ ]  Implements html that is accessible for folks with visual disabilities. Reference [this lesson](http://frontend.turing.edu/lessons/floating/web-accessibility.html)

------------------------------------------------------------------

### CSS - Style and Implementation

* [ ]  Novice - Crafts CSS according to the [Turing CSS Style Guide](https://github.com/turingschool-examples/css)
* [ ]  Advanced Beginner - Application adds organization for the whole stylesheet and within rules
* [ ]  Proficient - Applications adds to the above by removing repetitive rules and blocks of code according to the DRY principle
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes

------------------------------------------------------------------

### JAVASCRIPT - Style and Implementation

* [ ]  Novice - Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
* [ ]  Advanced Beginner - Application adds to the above by correctly implementing a data model for the `Idea` class including all required methods
* [ ]  Proficient - Application adds readability by incorporating both DRY and SRP practices and students can speak to implementation decisions and:
  * [ ]  Uses event delegation correctly on dynamic elements for deleting, editing, & starring an idea
  * [ ]  All functions are less than 10 lines
  * [ ]  There are no global variables aside from query selectors and two arrays for your ideas and qualities
  * [ ]  There are no nested if else statements
* [ ]  Exceptional - Application adds to code quality by refactoring all for loops into the proper array prototype iteration methods and:
  * [ ]  Uses logical operators instead of if/else statements where applicable
  * [ ]  Uses arrow functions, block scoped variables, and destructuring correctly.
  * [ ]  When 'Filtering and Searching by Text' and 'Filtering by Importance', ideas that do not need to be shown on the DOM should be completely removed from the DOM, instead of only being hidden from view
