---
title: Check Yo'Self
---

## Specification

Now that you've got the main foundations down to build out a frontend application, it's time to prove to yourself that you own those skills! You're going to be building a checklist application called Check Yo'Self!

Note: If you have started to learn some es6, feel free to implement all of those new es6 features (arrow functions, block scoped variables, etc.).  However, if es5 syntax is still more comfortable for you, then stick with what you know.  You'll get a lot more practice and instruction with modern Javascript features next mod!

## Learning Goals

* Solidify and demonstrate your use of:
  * semantic HTML
  * clean & organized CSS styles
  * DRY JavaScript
  * localStorage to persist data
* Iterate through/filter dom elements using for loops/array prototype methods
* Understand the difference between the data model and how the data is displayed on the DOM
* Ability to match/recreate a UI and create a great UX

### Architecture

### Data Model

### Phase One: Beginning User Flow

#### Viewing the List of ToDos

When visiting the application, the user should:

* See a list of all existing todos, including the title, list of tasks to be checked off, and state of urgency.
* Todos should appear in descending chronological order (with the most recently created todo at the top left).
  * If there are no todos yet, then there should be an indication to the user to create a todo list, displayed in the empty section.

#### Adding a New Checklist

On the left side of the page, a user should see:

* Two inputs for entering the title and adding a new task to the list.
* Two buttons including a `Make ToDo List` button for committing the checklist and a `Clear All` button to clear the title and checklist.
* Lastly, there should be a `Filter by Urgency` button. 

When a user adds a new `Task`:

* The todo is added to the bottom of the checklist in between the `Title` and `Task` inputs 
* Each todo on the checklist should also be able to be removed by clicking the respective "delete" button. 
* It should not add a todo to the checklist if the input is empty.
* Tasks on the checklist of the form _do not need to persist_.

When a user clicks `Make Todo List`:

* A new card with the provided title and tasks should appear in the todo list.
* The text fields and checklist in the form should be cleared and ready to accept a new todo.
* The `Make ToDo List` button should be disabled if either the title input or checklist is empty.
* The page _should not_ reload.
* The todo card should be persisted. It should still be present upon reloading the page.
* The todo should be added to `localStorage` using the `saveToStorage` method defined in the `ToDo` class.

When a user clicks `Clear All`:
* Both the title input and list of tasks should be cleared.
* The `Clear All` button should be disabled if both the title input and checklist are empty.

### Phase Two: Completing The MVP (Minimum Viable Product)

#### Checking Off A Task

After a user has completed a task on their checklist, they should be able to check it off.

* There should be a visual cue so that the user knows what they have completed and what is still left to do.
* Tasks that are checked off should persist upon reloading the page.
* The update of the data model should occur in the `updateToDo` method that is defined in the `ToDo` class.
* How the DOM gets updated using javascript should happen in the `main.js` file.

#### Deleting an Existing ToDo Card

After creating a todo card, the user should be able to remove it once they have completed their checklist.

* Each todo card in the list should have a button to remove it from both the data model and the dom.
* The "Delete" button should only be enabled if all of the tasks on the checklist have been checked off.
* Upon clicking the "Delete" button, the appropriate todo list should be removed from the list.
* The update of the data model should happen in the `deleteFromStorage` method that is defined in the `ToDo` class.
* How the DOM gets updated using javascript should happen in the `main.js` file

#### Marking a ToDo Card Urgent

A user should be able to mark their todo cards urgent so that they know which they need to complete first.

* When the user clicks on the `Urgent` button, the button should stay in the active state. 
* ToDo cards that are marked as urgent should persist upon reloading the page.
* This update of the data model should occur in the `updateToDo` method that is defined in the `ToDo` class.
* How the DOM gets updated using javascript should happen in the `main.js` file

### Phase Three: Specifying what Content is Viewed

#### Filtering and Searching by Text

We'd like our users to be able to easily find their todos, so let's provide them a search bar to filter through their list.

* At the top of the application, include a text field labeled `Search`.
* As a user types in the search box, the list of todos should filter in real time to only display todo cards whose title include the user's text. The page _should not_ reload.
* Clearing the search box should restore all the todo cards to the list.
* There is no need to make persisting changes to the data model to achieve this functionality.

#### Viewing Urgent ToDo Cards

Let's also allow our user be able to view their urgent todo cards only.

* The user should only see the urgent todo cards when they click on the `Filter by Urgency` button. (consequently, the text on the button should then say `View All ToDos`)
* Clicking on the `View All ToDos` button, all of the user's todos should be displayed.
* When viewing urgent todos, the search field should only search through the urgent todos.
* If there are no urgent todos yet, then there should be an indication displayed in the empty todo section notifying the user to mark some todos urgent.
* These changes _do not need to persist_ in between sessions.

### Phase Four (Extensions): Improving on the Experience

#### Editing Our Tasks

A user would likely want to edit the title of a todo or update their task later on.

* When a user clicks the title or any of the tasks on the checklist of a todo card, that text should become an editable text field, pre-populated with the existing todo title or task.
* The user should be able to "commit" their changes by pressing "Enter/Return" and by clicking outside of the text field.
* This change should be saved in localStorage using the `updateToDo` method defined in the `ToDo` class.

#### Improving The Search Functionality

Our user might want to be able to search their cards not only by their title, but by their tasks as well.

* The user should have a drop down next to the search bar to select if they want to filter their list by `Title`, `Tasks`, or `All`.
* Searching by the `Title` will be the original functionality where it filters the todo cards by their title based on the user's text.
* Searching by the `Tasks` will filter the todo cards by their tasks based on the user's text.
* Searching by the `All` will filter the todo cards by both their title and tasks based on the user's text.

#### Adding More Tasks To Each Card

The user might also might to add more tasks to their checklist after they have created a todo card. 

* Add an input to the bottom of each card so that the user can add more tasks later.
* Each task added should appear at the bottom of the list unchecked.
* The user should not be able to add blank tasks if the input is empty.

## Submission Details

* Place submissions in the _appropriate tab_ of the [Submission Sheet](https://docs.google.com/spreadsheets/d/1twjIgn6X0Yqi3tS3Nx3hOgZ9dR5juGg58gly1GsbOBs/edit#gid=557400577)

### Layout Comps

----------------------------------------------------------

## Rubric

### Functional Expectations

* [ ] Novice: Application meets all of the expectations of phase one.
* [ ] Advanced Beginner: Application meets all of the expectations of phase two.
* [ ] Proficient: Application meets all of the expectations of phase three.
* [ ] Exceptional: Application adds all of the extensions from phase four.

------------------------------------------------------------------

### Comp Recreation

* [ ]  Novice - Application implements all major comp details accurately and correctly on desktop only (colors, fonts, icons, spacing, alignment, etc.)
* [ ]  Advanced Beginner - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.). Transitions between screen sizes may not be smooth.
* [ ]  Proficient - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* [ ]  Exceptional - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements that have been added match the visuals established in the comps.

------------------------------------------------------------------

### HTML - Style and Implementation

* [ ]  Novice - Crafts markup according to the [turing html style guide](https://github.com/turingschool-examples/html)
* [ ]  Advanced Beginner - Application adds to the above by using `data-*` attributes for all data related things
* [ ]  Proficient - Applications adds to the above with markup that is easy to read and follow across naming conventions
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes
    * [ ]  Implements html that is accessible for folks with visual disabilities. Reference [this lesson plan](http://frontend.turing.io/lessons/floating/web-accessibility.html)

------------------------------------------------------------------

### CSS - Style and Implementation

* [ ]  Novice - Crafts CSS according to the [turing css style guide](https://github.com/turingschool-examples/css)
* [ ]  Advanced Beginner - Application adds organization for the whole stylesheet and within rules
* [ ]  Proficient - Applications adds to the above by removing repetitive rules and blocks of code according to the DRY principle
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes

------------------------------------------------------------------

### JAVASCRIPT - Style and Implementation

* [ ]  Novice - Crafts JS according to the [turing js style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
* [ ]  Advanced Beginner - Application correctly implements data model for the `ToDo` class including all required methods
* [ ]  Proficient - Application adds readability by incorporating both DRY and SRP practices and students can speak to implementation decisions and:
  * [ ]  Uses event delegation correctly on dynamic elements for deleting, checking tasks off, and marking a todo urgent
  * [ ]  All functions are less than 10 lines
  * [ ]  There are no global variables aside from query selectors and an array for your todos
  * [ ]  There are no nested if/else statements
* [ ] Exceptional - Application adds to code quality by refactoring all for loops into the proper array prototype iteration methods and:
  * [ ] Uses logical operators instead of if/else statements where applicable
  * [ ] Uses arrow functions, block scoped variables, and destructuring correctly.
  * [ ] Application stores all todos in one array in local storage, instead of individually
  * [ ] When 'Filtering and Searching by Text' and 'Viewing Urgent ToDo Cards', todos that do not need to be shown on the DOM should be completely removed from the DOM, instead of only being hidden from view

