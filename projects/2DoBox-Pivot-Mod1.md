---
title: 2DoBox Pivot
---

Do you remember that project IdeaBox?...

We thought they were pretty great, but, we think it's time to pivot those projects over to something we like to call 2DoBox.

You will be inheriting someone's previous IdeaBox and pivoting it over to 2DoBox.

## Getting Started (Should I Fork or Clone?!)

Beginning The Pivot

Once you've explored the base project, the team leader will:

- Create a new, blank repository on GitHub named `2DoBox-Pivot`
- Clone the IdeaBox project that you'll be working with to your local machine
- Go into that local project directory and `git remote rm origin`
- Add the new repository as a remote `git remote add origin` `git://new_repo_url` (this will be different based on your actual remote URL)
- Push the code `git push origin master`
- Add the other team members as collaborators in GitHub
- Once the team leader has done this, the other team members, if applicable, can fork the new repo.

# Restrictions and Outside Code

Your project should evolve, refactor, and clean up the code you inherit. This includes deleting redundant, broken, or obsolete code. However, **you should not throw out the previous work wholesale**.

Furthermore, there should be no reduction in functionality except when explicitly called for by new requirements.

## Phase 1: Refactor

The following features are not completely new. While this functionality may be already in place, you need to update the user interface and naming conventions in your code base. For example, if there is an HTML element with the class of `idea-save-button`, then it should be updated to `save-btn`, which is less coupled to content and tied more to functionality.

### Refactoring Guidelines

Here are some refactoring points we want to see in your project:

  * Small JavaScript functions focused on single responsibility (SRP) - for example, one function should not handle both disabled button state and rendering elements to the DOM
  * Consistent formatting, indentation, and naming schemes
  * Smart, concise comments (only when absolutely needed for clarity)
  * Little to no duplication in JavaScript (DRY principle)
  * Avoid deep nesting (for if/else conditionals)
  * Line lengths (keep them short and readable to avoid horizontal scrolling in your text editor)
  * File and folder organization (images, CSS directories)

Specifically, we're going to set some constraints:

  * You cannot use any nested if/else statements
  * You cannot use anonymous functions (mainly looking at event event listeners for this)
  * HTML must follow basic accessibility guidelines (semantic tagging, image attributes, roles)
  * No use of global variables
  * Functions cannot be longer than 8 lines (including event listeners)

When you "refactor," you make changes to the code without changing any of its functionality. You can think of it like a "clean up," for the sake of improving readability and quality.

This doesn't include bug fixes or the addition of any new functionality. You might refactor code that you have written the day before, while it's still fresh in your head, so that it is more readable and reusable when you may potentially look at it two months from now. As the motto says: "refactor early, refactor often."

This is the existing functionality that should be pivoted for the 2DoBox user interface:

### Adding a new TODO

On the application’s main page, a user should:

* See two text boxes for entering the `Title` and `Task` for a new TODO, and a `Save` button for committing that TODO.

* When a user clicks `Save`:
  * A new TODO with the provided title and body should appear in the TODO list.
  * The text fields should be cleared and ready to accept a new TODO.
  * The page should not reload.
  * The TODO should be persisted (in localStorage) - it should still be present upon reloading the page.

* The `Save` button should be disabled when there is not valid content in both input fields.

### Deleting an existing TODO

When viewing the TODO list:

  * Each TODO in the list should have a link or button to `Delete` (or 𝗫).
  * Upon clicking `Delete`, the appropriate TODO should be removed from the list.
  * The page should not reload when an idea is deleted.
  * The TODO should be removed from localStorage - it should not re-appear on next page load.

### Editing an existing TODO

When a user clicks the title or task of a TODO in the list, that text should:

  * Become an editable text field, pre-populated with the existing TODO title or task.
  * The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
  * If the user reloads the page, their edits will be reflected.

### Filtering

We’d like our users to be able to easily find specific TODOs they've already created, so let’s provide them with a filtering interface on the TODO list.

  * At the top of the TODO list, include a text field labeled `Filter`.
  * As a user types in the filter box, the list of TODOs should filter in real time to only display TODOs whose title **or** task include the user’s text.
  * The page should not reload.
  * Clearing the filter box should restore all the ideas to the list.

## Phase 2: Add New Features

### Marking a TODO as completed

When viewing the TODO list:

  * Each TODO in the list should have a button called `Completed Task`.
  * When a the user clicks the `Completed Task` button, the idea should be either grayed out and/or shown with a strike through text.
  * On reloading the page the page, the completed TODOs should be exempted (but not deleted) from the list.
  * When the user clicks the `show completed TODOs`, the completed TODOs should be loaded back onto the top of the TODO list.

### Importance

Each TODO should be given a level of importance.

  * As a user, I should be able to change the level of importance by up-voting or down-voting that specific TODO.
  * Each TODO should start with a level of `Normal`.
      * Levels of importance are as follows:

        1) Critical

        2) High

        3) Normal

        4) Low

        5) None

  * The change of importance should persist after a page refresh.

### Recent TODOs

The application should only show the ten most recent TODOS.

* The application should contain a button labeled `Show more TODOs ...`.
* When a user clicks on the `Show more TODOs...` button, this list should load additional messages from the past.

### Filter by Importance

The application should allow users to filter the TODO list based on level of importance.

* Your application should have 5 buttons corresponding to each level of importance (Critical, High, Normal, Low, and None).
* When one of the filter buttons is clicked, the TODO list should only display TODOs with the selected importance.

## Extensions

### Character Counter

The application is able to count the number of characters inside of the input field in real time.

* As the user types, the character count should increment up.
* If the user deletes characters, then the character count should decrease.

### Submit button disabled based on character count

The submit button should be disabled when there is not valid content in both input fields **and** if the input field character count exceeds 120 characters.

### TODO Due Dates

When viewing the TODO list:

  * Each TODO should have an option to set a due date for the specific TODO.
  * Once a TODO's due date is reached, the TODO should show a visual indication that it is past due if it has not been completed.

Note: TimeZones are hard - consider using a library like [MomentJS](http://momentjs.com/)

## Instructor Evaluation Points

### Specification Adherence

4 - The application meets all of the phase requirements listed above and implements one or more of the extensions.

3 - The application meets all of the phase requirements listed above with functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from phases 1 through 4 that make the application feel incomplete or hard to use.

2 - The application is in a usable state, but is missing 1 or more of the features outline in the specification above.

1 - The application is missing 3 or more smaller features or 1 major feature essential to having a complete application.

0 - The application is unusable.

### User Interface

4 - The application is pleasant, logical, and easy to use. The application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality and the application stands on it own to be used by the instructor without guidance from the developer.

3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality.

2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.

1 - The application is confusing or difficult to use.

### HTML Style

4 - Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.

3 - Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.

2 - Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.

1 - Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

### JavaScript Style

4 - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There zero instances where an instructor would recommend taking a different approach.

3 - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.

2 - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.

1 - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.

0 - Your client-side application does not function or the application does not make use of localStorage for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.

### Workflow

4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.

3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.

2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.

1 - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.

0 - The application was not checked into version control.
