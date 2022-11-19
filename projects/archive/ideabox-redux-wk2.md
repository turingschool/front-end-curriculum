---
title: IdeaBox Redux - Week 2
---

## Overview: Week 2

We've got a pretty good MVP for your application now, but our client thinks it would be great to have a little more control of the content that is viewed.  Our application won't be as effective if we have over a 100 ideas, and no way to view our ideas by their quality or favorites.  It would also be awesome if we had some extra features like managing the names and number of qualities we have.  Time for sprint 2, let's finish our product for our client!

##### NOTE: All functionality from [IdeaBox Redux - Week 1](http://frontend.turing.edu/projects/ideabox-redux-wk1.html) must be completed before you begin working on the Week 2 Spec/Additions.

### Phase Three: Specifying what Content is Viewed

#### Filtering by Importance

The application should allow users to filter the idea list based on level of quality.

* Your application should have 3 buttons corresponding to each level of importance (swill, plausible, and genius).
* When one of the filter buttons is clicked, the idea list should only display the ideas with the selected quality.
* When viewing ideas by the selected quality, the search field should only search through ideas with that selected quality.
  * There is no need to make persisting changes to the data model to achieve this functionality.

#### Viewing Starred Ideas

Let's also let our user be able to view only their starred ideas.

* The user should only see the ideas that are starred when they click on the `Show Starred Ideas` button. (consequently, the text on the button should then say `View All Ideas`)
* Clicking on the `View All Ideas` button, the user should be able to see all of their idea cards.
* When viewing starred ideas, the search field should only search through the starred ideas.
    * If there are no starred ideas yet, then there should be an indication to the user to star some ideas, displayed in the empty idea section.
  * Do not need to persist changes in between sessions.

#### Recent Ideas

The application should only show the ten most recent Ideas on page load.

* The application should contain a button labeled `Show more`.
* When a user clicks on the `Show more` button, the list should load all of the remaining ideas.
* Once the remaining ideas are loaded, the `Show more` button should switch to a `Show less` button.
* When a user clicks on the  `Show less` button, the list should switch back to being the first 10 ideas only.
  * This functionality should toggle back and forth based on that button click.
  * There is no need to make persisting changes to the data model to achieve this functionality.

### Phase Four: Expanding On Our Ideas

#### Adding More Qualities

The user should be able to add new qualities in addition to the original three.

* Each quality added will have a higher level of importance than the original qualities listed.
* All previous functionality should still exist for new qualities including changing the quality of an idea and filtering by importance.
  * Qualities should persist in between sessions.  Qualities will be stored in `localStorage` as an array, and the functionality for this will be implemented in the `main.js` file.

#### Removing Qualities

Just as a user should be able to add a quality, they should also be able to remove old qualities as well.

* By clicking the `x` button next to the quality, that quality will be removed from the qualities listed.
* All ideas that originally had the quality that was removed, should default to a quality of lower importance (by one level).
* There should always be atleast one quality listed.  The delete icon should be removed if the quality is the last one one the list.
  * Qualities list should persist in between sessions.  

#### Character Counter

The application is able to count the number of characters inside of the input field in real time.

* As the user types, the character count should increment up.
* If the user deletes characters, then the character count should decrease.

#### Submit button disabled based on character count

The submit button should be disabled when there is not valid content in both input fields **and** if the input field character count exceeds 120 characters.

## Submission Details

* Place submissions in the _appropriate tab_ of the [Submission Sheet](https://docs.google.com/spreadsheets/d/1CS4BipxFi1VPh5NJFsn0yoeDTQQL_yjwcIM0fccVOGc/edit#gid=496549355)

#### Layout comps

Full mobile layout:

![full mobile layout][mobile-full]

Full mobile layout with open navigation:

![full mobile layout with navigation][mobile-full-navigation]

[mobile-full]: /assets/images/projects/ideabox/ideabox-redux-02.jpg
[mobile-full-navigation]: /assets/images/projects/ideabox/ideabox-redux-03.jpg

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
* [ ]  Advanced Beginner - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons,spacing, alignment,  etc.). Transitions between screen sizes may not be smooth
* [ ]  Proficient - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons,spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements added generally match the visuals established in the comps, but may be slightly awkward
* [ ]  Exceptional - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons,spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements that have been added match the visuals established in the comps

------------------------------------------------------------------

### HTML - Style and Implementation

* [ ]  Novice - Crafts markup according to the [turing html style guide](https://github.com/turingschool-examples/html)
* [ ]  Advanced Beginner - Application adds to the above by using appropriate semantic elements and using `data-*` attributes for all data related things
* [ ]  Proficient - Applications adds to the above with markup that is easy to read and follow across naming conventions
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes and:
  * [ ]  Implements html that is accessible for folks with visual disabilities. Reference [this lesson plan](http://frontend.turing.edu/lessons/floating/web-accessibility.html)

------------------------------------------------------------------

### CSS - Style and Implementation

* [ ]  Novice - Crafts CSS according to the [turing css style guide](https://github.com/turingschool-examples/css)
* [ ]  Advanced Beginner - Application adds organization for the whole stylesheet and within rules
* [ ]  Proficient - Applications adds to the above by removing repetitive rules and blocks of code according to the DRY principle
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes

------------------------------------------------------------------

### JAVASCRIPT - Style and Implementation

* [ ]  Novice - Crafts JS according to the [turing js style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
* [ ]  Advanced Beginner - Application adds to the above by correctly implementing a data model for the `Idea` class including all required methods
* [ ]  Proficient - Application adds readability by incorporating both DRY and SRP practices and students can speak to implementation decisions and:
  * [ ]  Uses event delegation correctly on dynamic elements for deleting, editing, & starring an idea
  * [ ]  All functions are less than 10 lines
  * [ ]  There are no global variables aside from query selectors and two arrays for your ideas and qualities
  * [ ]  There are no nested if else statements
* [ ]  Exceptional - Application adds to code quality by refactoring all for loops into the proper array prototype iteration methods and:
  * [ ]  Uses logical operators instead of if/else statements where applicable
  * [ ]  Uses arrow functions, block scoped variables, and destructuring correctly.
  * [ ]  When 'Filtering and Searching by Text' and 'Filtering by Importance', ideas that do not need to be shown on the dom should be completely removed from the dom, instead of only being hidden from view
