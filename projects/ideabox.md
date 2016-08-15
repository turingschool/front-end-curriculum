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

Extensions are a great way to earn additional points beyond the 150 available in this project. That said, awarding points for delivering a given extension is up to the instructor, who may only award partial points depending on the quality of the implementation. The points listed below represent the maximum number of points. Extensions can _not_ be done after the fact without instructor permission in advance.

#### Tagging

Add an optional third text field upon idea creation for "Tags". Tags should be a comma-separated list of short text tags, and should be processed on the server such that any existing tags are re-used, and any new ones are created. Once there are tags to display, a list of existing tags should appear at the top of the idea list. Clicking one of these tags should show only ideas that include it. When viewing ideas filtered by tag, be sure to include a link to take the user back to "All Ideas". This filtering could be implemented either as a separate page or via javascript within the same interface.

#### Sorting

When viewing the ideas list, the user should have the option to sort ideas by Quality. The default sort should be descending ("genius" → "plausible" → "swill"), and clicking the sort a second time should reverse it. The Idea list should be sorted client-side without reloading the page.

#### Student Directed Extension

Student chooses an additional feature or performance optimization to add to the project. The extension must be intuitive and should not detract from the user's experience in any major way (i.e. not buggy or incomplete).

## Instructor Evaluation Points

### Specification Adherence

* 4 - The application meets all of the requirements listed above and implements one or more of the extensions.
* 3 - The application consists of one page with all of the major functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.
* 2 - The application is in a usable state, but is missing 1 or more of the features outline in the specification above.
* 1 - The application is missing 3 or more smaller features or 1 major feature essential to having a complete application.
* 0 - The application is unusable.

### User Interface

* 4 - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* 3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 1 - The application is confusing or difficult to use.

### JavaScript Style

* 4 - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* 3- Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 2 - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 1 - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* 0 - Your client-side application does not function or the application does not make use of `localStorage` for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.

### Workflow

* 4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* 3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* 2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* 1 - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0 - The application was not checked into version control.
