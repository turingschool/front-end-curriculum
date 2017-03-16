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

