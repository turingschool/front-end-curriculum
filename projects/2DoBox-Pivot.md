---
title: 2DoBox-Pivot
---
# 2DoBox Pivot

Do you remember that project Ideabox?

We thought they were pretty great, but, I think it's time to pivot those projects over to something we like to call 2DoBox.

You will be inheriting someone's previous IdeaBox and pivoting it over to 2DoBox.

Your projects will utilize webpack & its awesome development server.

Keeping accessibility in mind we will be grading you based on how accessible your application is.

Now that we're using Webpack, we can use some fancy es6 syntax. You will be expected to attempt to get some es6 syntax in your project (and make sure that Webpack uses Babel to transpile it).

Lastly you will implement feature tests using selenium webdriver.

# Getting Started ( Should I Fork or Clone?! )

Beginning The Pivot

Once you've explored the base project, the team leader will:

- Create a new, blank repository on GitHub named `2DoBox-Pivot`
- Clone the ideaBox project that you'll be working with to your local machine
- Go into that project directory and `git remote rm origin`
- Add the new repository as a remote `git remote add origin` `git://new_repo_url`
- Push the code  `git push origin master`
- Add the other team members as collaborators in Github
- Once the team leader has done this, the other team member can fork the new repo.

# Restrictions and Outside Code

Your project should evolve, refactor, and clean up the code you inherit. This includes deleting redundant, broken, or obsolete code. However, you should not throw out the previous work wholesale.

Furthermore, there should be no reduction in functionality except when explicitly called for by new requirements.

# Phase 1

### Adding a new ToDo

On the application’s main page, a user should:

* See two text boxes for entering the “Title” and “Task” for a new TODO, and a “Save” button for committing that TODO.

* When a user clicks “Save”:
  * A new TODO with the provided title and body should appear in the TODO list.
  * The text fields should be cleared and ready to accept a new TODO.
  * The page should not reload.
  * The TODO should be persisted. It should still be present upon reloading the page


### Deleting an existing TODO

When viewing the TODO list:

  * Each TODO in the list should have a link or button to “Delete” (or 𝗫).
  * Upon clicking “Delete”, the appropriate TODO should be removed from the list.
  * The page should not reload when an idea is deleted.
  * The TODO should be removed from localStorage. It should not re-appear on next page load.


### Editing an existing TODO

When a user clicks the title or task of a TODO in the list, that text should:

  * Become an editable text field, pre-populated with the existing  TODO title or task.
  * The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
  * If the user reloads the page, their edits will be reflected.

### Searching

We’d like our users to be able to easily find specific TODOs they already created, so let’s provide them with a filtering interface on the TODO list.

  * At the top of the TODO list, include a text field labeled “Search”.
  * As a user types in the search box, the list of TODOs should filter in real time to only display TODOs whose title or task include the user’s text.
  * The page should not reload.
  * Clearing the search box should restore all the ideas to the list.

### Es6 Usage

- You should make sure that Webpack is set up to use es6 (hint: the key words here are babel, es6 and webpack)

- Picking at least one new feature of es6 - [review the intermission assignment for ideas](https://github.com/turingschool/intermission-assignments/blob/master/prep-for-module-2-frontend.markdown) - refactor your existing code and use this es6 feature instead
  - Note: You should always try to not 'mix and match' in your code, so if you decide to use `let` and `const` instead or `var` in your code - you should not have _any_ files with both `var` and `let`.

# Phase 2

### Marking a TODO as completed

When viewing the TODO list:

  * Each TODO in the list should have a button called `Completed Task`
  * When a the user clicks the `Completed Task` button the idea should be either grayed out and/or shown with a strike through text
  * On reloading the page the page the completed TODOs should be exempted from the list.
  * When the user clicks the `show completed TODOs` The completed TODOs should be loaded back onto the top of the TODO list.

### Accessibility

Your web application should pass `aXe-core` tests and should be `tab index` accessible. For tab indexing refer to this [resource](http://archive.tlt.psu.edu/accessibility/tabindex0.html#whyzero)

### Importance

Each  TODO should be given a level of importance.

  * As a user I should be able to change the level of importance by up-voting or down-voting that specific  TODO.
  * Each  TODO should start with a level of `Normal`.
      * Levels of Importance are as follows

        1) Critical

        2) High

        3) Normal

        4) Low

        5) None

  * The change of importance should persist after a page refresh

# Phase 3

### Recent TODOs

The application should only show the ten most recent  TODOS.

  * The application should contain a button labeled “Show more TODOs ...”
  * When a user clicks on the `Show more TODOs...` button this list should load additional messages from the past.

### Filter by Importance

The application should allow users to filter the TODO list based off of importance.

* Your application should have 5 buttons corresponding to each level of importance (Critical, High, Normal, Low, and None).

* When one of the filter buttons is clicked the TODO list should only display TODOs with the selected importance.

### Character Counter

The application is able to count the number of characters inside of the input field in real time.

* As the user types the character count should increment up.
* If the user deletes characters the character count should decrease.

### Submit button disabled

The submit button should be disabled when there is not valid content in both input fields and if the input field character count exceeds 120 characters.

# Extensions

## TODO Due Dates

When viewing the TODO list:

  * Each TODO should have an option to set a due date for the specific TODO
  * Once a TODO's due date is reached the TODO should show a visual indication that it is past due if it has not been completed.

Note: TimeZones are hard - consider using a library like [MomentJS](http://momentjs.com/)

## Refactoring to Sass

Your webpack setup will help you install Sass - a CSS preprocessor - but to complete this extension you need to _really use it_

* CSS for the project should be structured matching the new Sass style.
  * Re-read [this intermission assignment](http://thesassway.com/beginner/how-to-structure-a-sass-project) for an idea of how to set up a structure for Sass

* CSS code should be exceptionally DRY (Do Not Repeat Yourself) - meaning that there is _no_ repetition of CSS that could be broken reasonably into variables and mixins.
  * Read through this [lesson](http://frontend.turing.edu/lessons/introduction-to-sass.html) for an idea of what Sass can do

* Atleast one advanced feature of Sass should be used to enhance the project.
  * Developer should be able to speak to what this feature does and why it improves the code for future developers.
  * Google 'fun sass tricks' or use a gist like [this one](https://gist.github.com/jareware/4738651) for inspiration!

# Instructor Evaluation Points

## Specification Adherence

4 - The application meets all of the requirements listed above and implements one or more of the extensions.

3 - The application consists of one page with all of the major functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.

2 - The application is in a usable state, but is missing 1 or more of the features outline in the specification above.

1 - The application is missing 3 or more smaller features or 1 major feature essential to having a complete application.

0 - The application is unusable.

## Accessibility

4 - The application demonstrates an exceptional knowledge of web accessibility. The application has no aXe-core violations, is fully functional without using a mouse, and the application uses HTML/CSS to 'chunk' content into more manageable pieces. The application utilizes semantic HTML.

3 - The application has a strong accessibility presence. The developer showed a strong effort to keep accessibility in mind from the beginning of the project. The application has 0-3 aXe-core violations.

2 - The application shows glimpses of good accessibility practices, but fails to deliver a truly accessible product. The application has 4-6 aXe-core violations

1- Developer did not keep accessibility in mind. The application has 6+ aXe-core violations.

## User Interface

4 - The application is pleasant, logical, and easy to use. The application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality and the application stands on it own to be used by the instructor without guidance from the developer.

3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality. The application less than 3 aXe-core violations

2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.

1 - The application is confusing or difficult to use.

## HTML Style

4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.

3: Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.

2: Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.

1: Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

## JavaScript Style

4 - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There zero instances where an instructor would recommend taking a different approach.

3- Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.

2 - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.

1 - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.

0 - Your client-side application does not function or the application does not make use of localStorage for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.

## Utilization of es6

4 - Developer has used more than one new es6 feature in their code. Developer should be able to speak to what the feature(s) does/do and why it improves the code for future developers. Developer has zero instances of the es5 style in their code left in the codebase.

3 - Developer has used one new es6 feature in their code. Developer should be able to speak to what the feature does and why it improves the code for future developers. Developer has zero instances of mismatching es5 and es6 style in any specific file.

2 - Developer has used one new es6 feature in their code. Developer cannot effectively speak to why the code change is valuable || Developer does not implement the code change more than a few times || Developer has mismatching es5 and es6 syntax in files.

1 - Developer has little to no evidence of having researched and implemented an es6 feature in the codebase.

## Testing

4 - Project has a running test suite that exercises the application at multiple levels (feature and unit). The test suite covers almost all aspects of the application.

3 - Project has a running test suite that tests and multiple levels but fails to cover some features. The application makes some use of feature testing.

2 - Project has sporadic use of tests. The application contains numerous holes in testing and/or many features are untested.

1 - There is little or no evidence of testing in this application.

## Workflow

4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.

3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.

2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.

1 - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.

0 - The application was not checked into version control.
