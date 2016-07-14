---
title: Linked List
---

## Specification

With a little jQuery under your belt, it's time to try your hand at building a small application.

In it's simplest form, the application should have the following:

- Two input fields
  - One for the title of the bookmark
  - One for the URL that the bookmark should link to
- One for creating the bookmark and adding it to the page
- A section for all of the created bookmarks; each bookmark should display:
  - The title of the bookmark
  - The URL of the bookmark (this should be clickable and link to the URL)
  - A button to "Mark as Read"
  - A button to "Remove" the bookmark

### Phase One

- The user should be able to input a title and URL into the appropriate fields
- When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
- When the user clicks on the "Mark as Read" button:
  - A class of `.read` should be added to the bookmark
  - If it already has the class of `.read`, it should be removed
- When the user clicks on the "Remove" button, the link should be removed from the page

### Phase Two

- If the user omits the title or the URL, the application should not create the link and should instead display an error.
- The application should be resposive and work equally well on desktop and mobile. (Flexbox is your friend here.)

### Phase Three

- The button for creating links should be disabled if there are no contents in the title or URL fields.
- The application should be able to keep count of the total number of links currently on the page.
- The application should be able to keep count of the total number of read and unread links currently on the page.

### Phase Four: The Project Strikes Back

- Add a "Clear Read Bookmarks" button which clears all the read bookmarks when clicked.
- The user should **not** to be able to add a URL that isn't valid.

## Rubric

### Functional Expectations

- 4: Application meets all of the functional expectations in Phase Three.
- 3: Application meets all of the functional expectations in Phase Two.
- 2: Application meets all of the functional expectations in Phase One.
- 1: Application does not meet the requirements in Phase One.

### Fundamental JavaScript Style

- 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.
- 3: Application shows strong effort towards organization, content, and refactoring.
- 2: Application runs but the code has long functions, unnecessary or poorly named variables, and needs significant refactoring.
- 1: Application generates syntax error or crashes during execution.

### Workflow

- 4: The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
- 3: The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
- 2: The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
- 1: The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
- 0: The application was not checked into version control.

### HTML Style

- 4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.
- 3:  Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.
- 2:  Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.
- 1:  Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

### CSS Style

- 4: Application has exceptionally well-factored CSS with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.
- 3:  Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS is doing.
- 2:  Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
- 1:  Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.
