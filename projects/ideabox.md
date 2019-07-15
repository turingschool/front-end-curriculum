---
title: IdeaBox
---

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating
ideas, not remembering them." In this project, we'll be building a simple application for recording and
archiving our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side
interface. To this end, we'll rely on JavaScript and jQuery to implement snappy filtering in the
browser, and `localStorage` to persist our wonderful ideas between sessions.

## Project Requirements

### Architecture

For this project, we'll be increasingly thinking about the "server" and "client"
as separate entities. We'll be using:

- JavaScript (with jQuery) to manage client-side interactions.
- JSON and `localStorage` to persist data between sessions.

Your entire application will consist of one HTML page or template.

### Data Model

* An Idea has an _id_, _title_, a _body_, and a _quality_.
  * The _id_ should be a unique identifier.
  * _title_ and _body_ are free-form strings.
* _quality_  should be one of the follow: "genius", "plausible", and "swill."
* By default, the idea's "quality" should default to the lowest setting (i.e. "swill").

### User Flows

#### Viewing ideas

When visiting the application, the user should:

* See a list of all existing ideas, including the title, body, and quality for each idea.
* Ideas should appear in descending chronological order (with the most recently created
  idea at the top).

#### Adding a new idea

On the application's main page, a user should:

* See two text boxes for entering the "Title" and "Body" for a new idea,
  and a "Save" button for committing that idea.

When a user clicks "Save":

* A new idea with the provided title and body should appear in the idea list.
* The text fields should be cleared and ready to accept a new idea.
* The page _should not_ reload.
* The idea should be persisted. It should still be present upon reloading the page.

#### Deleting an existing idea

When viewing the idea list:

* Each idea in the list should have a link or button to "Delete" (or 𝗫).
* Upon clicking "Delete", the appropriate idea should be removed from the list.
* The page _should not_ reload when an idea is deleted.
* The idea should be removed from `localStorage`. It should not re-appear on next page load.

#### Changing the quality of an idea

As we said above, ideas should start out as "swill." In order to change the recorded quality of an idea, the user will interact with it from the idea list.

* Each idea in the list should include an "upvote" and "downvote" button.
* Clicking upvote on the idea should increase its quality one notch ("swill" → "plausible",
  "plausible" → "genius").
* Clicking downvote on the idea should decrease its quality one notch ("genius" → "plausible",
  "plausible" → "swill").
* Incrementing a "genius" idea or decrementing a "swill" idea should have no effect.

#### Editing an existing idea

* When a user clicks the title or body of an idea in the list, that text should become an editable text field, pre-populated with the existing idea title or body.
* The user should be able to "commit" their changes by pressing "Enter/Return" or by clicking outside of the text field.
* If the user reloads the page, their edits will be reflected.

#### Idea Filtering and Searching

We'd like our users to be able to easily find specific ideas they already created, so let's provide them with a filtering interface on the idea list.

* At the top of the idea list, include a text field labeled "Search".
* As a user types in the search box, the list of ideas should filter in real time to only display ideas whose title or body include the user's text. The page _should not_ reload.
* Clearing the search box should restore all the ideas to the list.

#### Layout comps

Desktop layout:

![desktop specs][desktop-base]

Mobile layout:

![mobile specs][mobile-base]

Full mobile layout:

![full mobile layout][mobile-full]


Color, font, and icon spec:

![color font and icon specs][button-hover-specs]

#### Link to icon files

You will need the `svg` files for the delete, upvote, and downvote icons. [Here's the link.](https://drive.google.com/open?id=0B_lPnjyMN6-CaHpTQlRUdzNnZ0U)


[desktop-base]: /assets/images/projects/ideabox/ideabox-01.png
[mobile-base]: /assets/images/projects/ideabox/ideabox-02.png
[mobile-full]: /assets/images/projects/ideabox/ideabox-03.png
[button-hover-specs]: /assets/images/projects/ideabox/ideabox-04.png

### Extensions
Go for it!! :muscle:

#### Tagging

Add an optional third text field upon idea creation for "Tags". Tags should be a comma-separated list of short text tags, and should be processed on the server such that any existing tags are re-used, and any new ones are created. Once there are tags to display, a list of existing tags should appear at the top of the idea list. Clicking one of these tags should show only ideas that include it. When viewing ideas filtered by tag, be sure to include a link to take the user back to "All Ideas". This filtering could be implemented either as a separate page or via javascript within the same interface.

#### Sorting

When viewing the ideas list, the user should have the option to sort ideas by Quality. The default sort should be descending ("genius" → "plausible" → "swill"), and clicking the sort a second time should reverse it. The Idea list should be sorted client-side without reloading the page.

#### Student Directed Extension

Student chooses an additional feature or performance optimization to add to the project. The extension must be intuitive and should not detract from the user's experience in any major way (i.e. not buggy or incomplete).

## Rubric

### Functional Expectations

|Novice             | Application meets all of the basic functional expectations of create, edit, delete, persist in local storage. |
|Advanced Beginner  | Application allows for upvote/downvote and enables searching/filtering as defined in the spec. |
|Proficient         | The application consists of one page with all of the major functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. |
|Exceptional        | The application meets all of the requirements listed above and implements one or more of the extensions. |

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

#### Comp Recreation

|Novice             | Can establish a complementary color palette, integrate font(s), and execute a handful of the large comp details. |
|Advanced Beginner  | Can accomplish about 50-75% of the large and small design details and can logically rework them on at least 1 breakpoint. |
|Proficient         | Developer captures the spirit and design intent of the comp. Some small details need polish to achieve a pixel-perfect match to the comp, but developer is clearly mindful of details and has made a conscious and careful effort to match the comp. Any design decisions left open to interpretation are handled thoughtfully and are well executed, but are more noticeable and/or unintuitive than they would be if the designer had provided the solution, or may not be totally seamless during screen-size transitions.|
|Exceptional        | Developer skillfully captures the spirit and design intent of all comp details. Execution is pixel-perfect and any design decisions left open to interpretation are solved intentionally, are as seamless as if the designer had provided the solution, are handled gracefully, and enhance the overall design.|

<br>

------------------------------------------------------------------

## PAIRING

#### Collaboration

|Novice             | Can communicate needs, expectations, scheduling constraints through a DTR, effectively creating a working plan with partner.|
|Advanced Beginner  | Can identify deltas in skill level and collaborate on methods whereby both pairs can share equitably in the workload. Can revisit the DTR to address changes that arise, and/or simply to keep one another reminded of the working plan.|
|Proficient         | Can diplomatically handle issues that arise between the pair through respectful, focused, targeted feedback and implement changes to positively adapt the working relationship and keep the project on track. Can effectively implement tactics to support their partner's learning and project goals, while also honoring their own personal learning and project goals, should the two be different or at different levels due to skill delta. |
|Exceptional        | Pair collaboration and communication is exceptional, with the distribution of work being equal and balanced, and both partners experiencing a good working flow, able to handle stress, deadlines, issues with calm and focused demeanor.|

## Technical Vocabulary

|Novice             | Can articulate what is going on in the overall codebase. Doesn't use the correct terminology.
|Advanced Beginner  | Can articulate what is going on in the overall codebase and uses the correct terminology some of the time.
|Proficient         | Can articulate what is going on in the codebase, line by line, using the correct terminology most of the time. Developer can speak to and answer questions that utilize technical vocabulary.
|Exceptional        | Can articulate what is going on in the codebase, line by line, using the correct terminology. Developer is confident and comfortable speaking to and answering questions that utilize technical vocabulary.