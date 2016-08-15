---
title: Chatroom Adventures
---

## Project Introduction

Along with day-glow clothes, grunge rock, and fanny packs, chatrooms were a staple of the 90s. We'll be getting back to our Internet roots by building our very own chat applications.

At the end of the day, let's be really honest: this isn't that much different than Idea Box or Linked List, right? Yea, that's fair. But, this time around we are going to up the ante a little bit.

- Test-driven (feature tests as well as unit tests)
- Using build tools (like you did with Game Time)
- Students design it (like you didn't do with Idea Box)
- Mobile-first (like you've never done)
- Accessible

Your main goal for this phase of the project is to focus on the user interface. In later interations, we will add the actual functionality that makes it a chat application.

### Project Timeline

This projects spans a full seven (plus one) days.

- **Day One**: Define relationships. Create wireframes. Try your hand at putting together mock-ups in Sketch.
- **Day Two**: Get the build system up and running. Get the basic markup in place.
- **Day Three**: Get a mostly unstyled implementation in place for Phase One. If the markup is sound then adding styling later should be easy.
- **Days Four and Five**: Get Phase Two in place. Refactor Phase One.
- **Day Six**: Style the application to match your mock-ups and wireframes.
- **Day Seven**: Make a push on Phase Three and any extensions. Also: panic.
- **Day Eight**: Meet with instructors for evaluations. Fix the easy and obvious things. Open up issues for the bigger things that explain what needs to be done in excrutiating detail.

### Evaluation Criteria

You will have _two_ evaluations for this project. The first is the good, old-fashioned technical evaluation. You'll also have an evaluation on the UI -- you will be on your own to wireframe and design this project.

You're application should:

- Work on all screen devices
- Should take a mobile-first approach
- Be thoughtfully designed. (This is a good opportunity to practice with Sketch)

### Quick Notes on the "Other Chatters"

In this first phase, you're chat application will be a fairly lonely place. There isn't really a way to have anyone send messages back to you. There are a number of ways you could handle this for now:

1. Set up a timer that sends a message on a regular interval.
2. Have the application send a message back to the user whenever he or she sends a message.

In future iterations, we'll implement the collaborative aspect of the application, which will eliminate the need for the above options.

### Specification

Please emphasis quality over quantity. (That said, quality is not an excuse for missing a large number of features.)

#### Phase One

- The application should have an input field for typing messages.
- The "Send" button should not be enabled if there is no text in the message input.
- The message input should be cleared whenever a new message has been sent.
- The application should have a section for displaying chat messages.
- Chat messages should be displayed in reverse chronological order.
- Messages from the current user should be visually different from messages from other users.

#### Phase Two

- Users should be able to delete their own messages.
- Users should not be able to delete messages from other users.
- Users should be able to edit their own messages.
- Users should not be able to edit other people's messages.
- The message input field should show a live count of the number of characters.
- Messages should persist in local storage. They should be loaded when the application loads.

#### Phase Three

- The application should only show the ten most recent messages.
- The application should contain a button labeled "Show more messages…" which will load additional messages from the past.

## Instructor Evaluation Points

### Specification Adherence

* 4 - The application meets all of the requirements listed above and implements one or more of the extensions.
* 3 - The application consists of one page with all of the major functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.
* 2 - The application is in a usable state, but is missing 1 or more of the features outline in the specification above.
* 1 - The application is missing 3 or more smaller features or 1 major feature essential to having a complete application.
* 0 - The application is unusable.

### User Interface

* 4 - The application is pleasant, logical, and easy to use. The application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* 3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 1 - The application is confusing or difficult to use.

### HTML Style

- 4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.
- 3:  Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.
- 2:  Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.
- 1:  Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

### CSS/Sass Style

- 4: Application has exceptionally well-factored CSS/Sass with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.
- 3:  Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS/Sass is doing.
- 2:  Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
- 1:  Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS/Sass is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.

### JavaScript Style

* 4 - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* 3- Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 2 - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 1 - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* 0 - Your client-side application does not function or the application does not make use of `localStorage` for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.

### Testing

* 4 - Project has a running test suite that exercises the application at multiple levels (feature and unit). The test suite covers almost all aspects of the application.
* 3 - Project has a running test suite that tests and multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of feature testing.
* 2 - Project has sporadic use of tests and multiple levels. The application contains numerous holes in testing and/or many features are untested.
* 1 - There is little or no evidence of testing in this application.

### Workflow

* 4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* 3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* 2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* 1 - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0 - The application was not checked into version control.

### Code Sanitation

The output from a code sanitizer (either JSHint or ESLint) shows…

* 4 - Zero complaints
* 3 - Five or fewer complaints
* 2 - Six to ten complaints
* 1 - More than ten complaints

### Design

* 4 - The application is visually appealing and shows thoughtful and effective use of typography, color, and layout. The application looks professional, with visuals enhancing the user's experience. The evaluator has very few recommended changes.
* 3 - The application has a strong approach to layout and content hierarchy, but typography and color choices are lacking. The evaluator has several recommended changes to improvement.
* 2 - Layout, content hierarchy, typography, and color choices show effort, but the result is not effective. The evaluator recommends significant changes.
* 1 - Layout, content hierarchy, typography, and color choices actively detract from the user's ability to use the application.
