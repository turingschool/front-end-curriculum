---
title: 2DoBox Pivot
---

Do you remember that project IdeaBox?...

We thought they were pretty great, but, we think it's time to pivot those projects over to something we like to call 2DoBox.

You will be inheriting someone's previous IdeaBox and pivoting it over to 2DoBox.

## Getting Started (Should I Fork or Clone?!)

Beginning The Pivot

For this project, go ahead and clone the code base. Once you've explored the base project, the team leader will:

- Create a new, blank repository on GitHub named `2DoBox-Pivot`
- Clone the IdeaBox project that you'll be working with to your local machine
- Go into that local project directory and `git remote rm origin`
- Add the new repository as a remote `git remote add origin` `git://new_repo_url` (this will be different based on your actual remote URL)
- Push the code `git push origin master`
- Add the other team members as collaborators in GitHub
- Once the team leader has done this, the other team members, if applicable, can clone the new repo.

## Phase 1: Refactor

Your project should evolve, refactor, and clean up the code you inherit. This includes deleting redundant, broken, or obsolete code. However, **you should not throw out the previous work wholesale**.

Furthermore, there should be no reduction in functionality except when explicitly called for by new requirements.

There are no new features in this phase, however it is a good idea to generalize your application. For example, if there is an HTML element with the class of `idea-save-button`, then it should be updated to `save-btn`, which is less coupled to content and tied more to functionality.

**Note:** While refactoring, if there is functionality missing from the base IdeaBox project, you will need to implement that functionality as well in this refactor phase.

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

  * You cannot use any _nested_ if/else statements
  * When you can, you should not use anonymous functions (mainly looking at event event listeners for this)
    * For example, if you find an anonymous function in an event listener, pull it out of the event listener and use a function reference as the callback function
  * HTML must follow basic accessibility guidelines (semantic tagging, image attributes, roles)
  * No use of global variables (we're not saying you should never use global variables in life, but for this project it will be an exercise in not using global variables)
  * Functions cannot be longer than 8 lines (including event listeners)

When you "refactor," you make changes to the code without changing any of its functionality. You can think of it like a "clean up," for the sake of improving readability and quality.

This doesn't include bug fixes or the addition of any new 2DoBox functionality. You might refactor code that you have written the day before, while it's still fresh in your head, so that it is more readable and reusable when you may potentially look at it two months from now. As the motto says: "refactor early, refactor often."

## Phase 2: Pivot

This is the existing IdeaBox functionality that should be pivoted for the 2DoBox user interface:

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

## Phase 3: Add New Features

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

------------------------------------------------------------------

## Functional Expectations

|Novice             | Application meets all of the expectations of phase one. |
|Advanced Beginner  | Application meets __most__ of the expectations of phase two. |
|Proficient         | Application meets __all__ of the expectations of phase two. |
|Exceptional        | Application meets all of the expectations of both phases and one or more of the extensions. |

<br>

------------------------------------------------------------------

## HTML

#### Accessibility

|Novice             | Knows what a semantic tag is and leverages the HTML5 structural tags to organize the content of their markup. |
|Advanced Beginner  | Leverages more precise semantic tags when applicable, and employs basic ARIA roles attributes for added clarity in structure, descriptive image alt attributes, title attributes for applicable anchor tags. |
|Proficient         | Employs detailed accessibility practices throughout markup, especially in forms and can speak to decisions made in accessibility choices as it relates to specific accessibility concerns. |
|Exceptional        | Can run markup through a variety of online accessibility tools and score well for content, color, screen readers, etc. |

#### Style

|Novice             | Crafts markup with proper indentation and opening/closing tags. |
|Advanced Beginner  | Crafts markup with proper and logical nesting. |
|Proficient         | Crafts lean, efficient markup that is easy to read and follow across naming conventions, structure, and solid formatting that follows industry best practices. |
|Exceptional        | Crafts lean, efficient markup and can speak directly to choices made to improve performance, including but not limited to, page load times, css/js optimizations, image optimizations. |

<br>

------------------------------------------------------------------

## CSS

#### Structure of Code

|Novice             | Can effectively target DOM elements via tag, class, and/or id and write CSS rules around each element to create the desired style. |
|Advanced Beginner  | Can cleanly and logically organize CSS rules according to similar categories (i.e. typography, layout, components), and then logically organize the remaining CSS rules based on flow of the markup. Organizes properties within rules alphabetically.|
|Proficient         | Leverages cascading styles and CSS specificity rules to create more complex targeting of elements in order to reduce, reuse, share styles across elements. Organizes properties within rules based upon industry standard principles of writing consistent, idiomatic CSS. |
|Exceptional        | Understands the performance implications surrounding cascading/specificity and crafts CSS that is mindful of reducing complexity and increasing performance.|

#### Implementation

|Novice             | Can articulate how the CSS box model works and apply it appropriately in a static layout.|
|Advanced Beginner  | Can articulate the differences between the approaches of absolute/relative positioning, flex-box, floats, and can appropriately apply the approaches to solve a variety of layout problems.|
|Proficient         | Develops layouts that work cross-browser, are responsive, and can logically defend the choices made in implementation approach for layout. |
|Exceptional        | Can articulate rationale for all parts of the CSS implementation (each line of code/CSS rule) specifically in regards to the balance of: structure of code, design integrity, performance.|

<br>

------------------------------------------------------------------

## JAVASCRIPT

#### Data Types

|Novice             | Can articulate the definitions of primitive data types: strings, booleans, numbers, null, and undefined. Can articulate and describe object types: objects, arrays.|
|Advanced Beginner  | Can diagnose when issues of data-type mismatch are present and appropriately redirect their coding and/or research efforts accordingly to solve the problem.|
|Proficient         | Can identify and track data types through any variety of functions, understanding their affect and result on each line of code. Knows which scenarios are better suited for objects vs. arrays and employs them accordingly.|
|Exceptional        | Can assess and implement data type decisions for implementation based on increasing performance, shoring up code to be concise/clean, and composing for future maintainability.|

#### Conditional Logic

|Novice             | Can understand when an expression evaluates to true or false.|
|Advanced Beginner  | Uses if/else statements, but there are multiple levels of nesting, which makes the paths through the code difficult to follow. Understands what is "truthy" and "falsey" in JavaScript.|
|Proficient         | Can use an if/esle statement to effectively handle multiple paths through the code. Writes if/else statements that only have one level of logic (no nesting). Can use logical operators instead of if/else statements where applicable.|
|Exceptional        | Can write conditional logic that is succinct and easy to read. Logic can handle all situations where user gives incorrect/unexpected input.|

#### Functions & Scope

|Novice             | Can write a simple function that takes at least one input argument.|
|Advanced Beginner  | Developer is comfortable using multiple arguments to pass data into functions. Understands how variables are scoped at the function level and global level. Functions are named descriptively. Knows when and why to use return in a function.|
|Proficient         | Functions have single responsibility. The entirety of the function is easy to read what functionality it contains. Function is generally shorter than 8 lines. Uses functions to eliminate repeated code. Comfortable refactoring any piece of code and extracting it to a function.|
|Exceptional        | Comfortable with using callback functions where applicable. Comfortable returning collections from functions (objects, arrays).|

#### Arrays

|Novice             | Can create array and use array indexing to extract data from array or modify array. Comfortable using arrays to store simple data types: numbers, booleans, or strings.|
|Advanced Beginner  | Can modify arrays by adding or removing specific elements - uses array methods such as push or shift. Can use a for loop to iterate through array.|
|Proficient         | Does not use for loops for arrays - uses array prototypes, such as forEach, to iterate through or manipulate arrays. Can use array to store more complicated data structures such as objects or nested arrays. Is comfortable/efficient with reading array prototype documentation and can efficiently test/apply array prototype methods they have not worked with before.|
|Exceptional        | Uses variety array prototypes to iterate through arrays and manipulate/create new arrays without using documentation as a resource.|

#### Objects & Prototypes

|Novice             | Can declare an object literal and define/articulate properties vs. methods for an object. Can extract values of an object's property, and assign new properties and/or reassign values of existing properties on an object.|
|Advanced Beginner  | Can use object constructor functions and is comfortable with extracting values of properties on different object instances.|
|Proficient         | Can use object prototypes. Can articulate the definition and the "why" of an object prototype - the best use cases for prototypes.|
|Exceptional        | Can identify and apply best use cases for constructor functions vs object literals in their code, and leverages more advanced object prototype methods.|

#### DOM Manipulation

|Novice             | Can articulate what the DOM is and can effectively target elements in vanilla JavaScript via class, id, or tag.|
|Advanced Beginner  | Can add event listeners and create small functions that execute on events, can leverage the event object appropriately, and can articulate the what/why/how of jQuery.|
|Proficient         | Able to extract information, modify attributes, or append/prepend data in the DOM easily regardless of whether they are employing vanilla JavaScript or jQuery. Understands how to harness event bubbling.|
|Exceptional        | Understands the potential performance impact imposed by leveraging vanilla JavaScript vs. jQuery in their implementation and will make choices accordingly based on the problem to solve.|

#### Style

|Novice             | Can explain the choices made in the overall codebase and is able to articulate what every line of code is doing. Code is neatly formatted and easy to read with correct indentation.|
|Advanced Beginner  | Code shows strong effort toward organization, but suffers from long functions, unnecessary or poorly named variables, and requires significant refactoring. Application may have some duplication and minor bugs. |
|Proficient         | Code is logically organized, such that reader can easily follow the progression of the app because variable and function names are descriptive and follow a single responsibility approach. There are no major bugs and minimal duplication.|
|Exceptional        | Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application has exceptionally well-factored code with little or no duplication. |

<br>

------------------------------------------------------------------

## GIT & GITHUB

#### Git

|Novice             | Can use commits and can articulate what a commit is and why we use them. Makes large, infrequent commits directly to master branch. |
|Advanced Beginner  | Can create branches and willingly attempts to incorporate branches into their workflow. Commits, while infrequent, are increased in volume and show improvements in description. |
|Proficient         | Commits changes frequently with detailed commit messages. Uses feature branches to keep master branch free of incomplete features or bugs.|
|Exceptional        | Knows how to reset to previous commits, rebase large sets of small commits, if applicable, and other advanced Git maneuvers. |

#### Github

|Novice             | Can articulate what GitHub is, how it is different from Git, and why it is important. Can comfortably push and/or pull changes from master.|
|Advanced Beginner  | Can execute basic pull requests with context about changes in description. Can keep local and GitHub repositories in sync.|
|Proficient         | Is comfortable with resolving merge conflicts. Asks for review/merge of their pull requests from teammates. Is comfortable editing code based on review feedback from a pull request and resubmitting the branch code.|
|Exceptional        | Uses issues as resource for project management. There are comments on specific lines of pull requests with discussion about the implementation.|

<br>

------------------------------------------------------------------

## DESIGN

#### Design Concepts

|Novice             | Can integrate typography, color choices, and layout in ways that do not detract from legibility.  |
|Advanced Beginner  | Can apply fundamental design concepts with increased sensitivity that result in clear legibility but likely break in areas of responsiveness, layout, "noise". |
|Proficient         | Can apply fundamental design concepts in a comp that demonstrates a thoughtful, purposeful, cohesive strategy that does not detract from legibility or overall design integrity.  |
|Exceptional        | Typography, color choices, and layout decisions are thoughtful and appropriate, and strongly enhance the layout and legibility of the design.|

<br>

------------------------------------------------------------------

## PAIRING

#### Collaboration

|Novice             | Can communicate needs, expectations, scheduling constraints through a DTR, effectively creating a working plan with partner.|
|Advanced Beginner  | Can identify deltas in skill level and collaborate on methods whereby both pairs can share equitably in the workload. Can revisit the DTR to address changes that arise, and/or simply to keep one another reminded of the working plan.|
|Proficient         | Can diplomatically handle issues that arise between the pair through respectful, focused, targeted feedback and implement changes to positively adapt the working relationship and keep the project on track. Can effectively implement tactics to support their partner's learning and project goals, while also honoring their own personal learning and project goals, should the two be different or at different levels due to skill delta. |
|Exceptional        | Pair collaboration and communication is exceptional, with the distribution of work being equal and balanced, and both partners experiencing a good working flow, able to handle stress, deadlines, issues with calm and focused demeanor.|

<br>
