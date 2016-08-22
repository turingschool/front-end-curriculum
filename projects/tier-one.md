---
title: Tier One
---

## Project Introduction

This module you will be working through three tiers of projects. Each of these tiers will allow you and your project group to select one of several project options, and will increase in difficulty each tier level.

In Tier One, you will choose one of the following projects, with specific base requirements outlined below:

* Pomodoro app
* Weather app
* Address book / contacts manager / "job stalker"

Regardless of which project you choose, your project must:

- Be test-driven
- Use build tools
- Designed by the student
- Use a mobile-first approach
- Accessible

### Project Option Descriptions:

#### Pomodoro App

Pomorodo timers are a great way to remind yourself to take breaks, to set a limit on how long you struggle with a problem before you reach out for help, and just to remind yourself to stand up from your desk periodically throughout the day. Your timer must have the following:

* A default setting of 25 minutes of work followed by 5 minutes of break.
* The ability to set custom lengths of time for both work and breaks.
* If a custom length is set, it will stay at that new setting until it is set back to default.
* A countdown alert that pings every 5 seconds for the final 20 seconds of both work and break, ending in an alert sound to signal the time has run out.
* Visual indication of the time countdowns, including an indicator with more urgency/importance showing the final 20 second countdown.

#### Weather App

It's important to know what Mother Nature is going to throw at you each day -- what if you wear flip flops because it's sunny and 65 degrees in the morning and then it snows all afternoon (this is Colorado, after all). You weather app should:

* By default shows an hourly breakdown of the forecasted weather for a 24-hour period.
* Allows a user to get more detailed information on the hourly forecast
* A user can view a weekly forecast overview (morning/evening for 7 days).
* Allow a user to specify what city/area code they are located in for an accurate forecast.
* Have an alert if an extreme weather event is forecasted in the area the user has specified (tornado watch, flood watch, blizzard watch, etc).

#### Address Book

Networking is a critical skill, and it can get hard to keep track of everyone you meet when you're getting established in a new industry. Build an app to help you organize all your contacts and, hey, maybe even do a little job stalking while you're at it. You'll need to:

* Each entry must have a name, company, email, social media, and phone number field. Name and email are required fields to save a new contact, the others are optional but must be included on the input form.
* A contact's information must be editable. You can enter multiple options for email, phone, and social media but if there is more than one you must specify a "primary".
* You must be able to enter a note for each contact (what if you forget where you met them or what you talked about?)


### Project Timeline

This projects spans a full seven (plus one) days. Your group will have the opportunity to check-in with instructors for guidance and assistance.

Things to keep in mind as you are planning your time for the next week:

* DTR: clarify roles, scheduling restraints, personal learning goals at the start of the project
* Take the time to wireframe your app. Think through the user flow, have a solid plan and direction for you project. Don't start coding without a roadmap.
* Your app must be visually correct and consistent in Chrome, Safari, and Firefox.
* TDD: test test test


### Evaluation Criteria

You will have _two_ evaluations for this project. The first is the good, old-fashioned technical evaluation. You'll also have an evaluation on the UI -- you will be on your own to wireframe and design this project.

You're application should:

- Work on all screen devices
- Should take a mobile-first approach
- Be thoughtfully designed. (This is a good opportunity to practice with Sketch)


### Specification

Please emphasis quality over quantity. (That said, quality is not an excuse for missing a large number of features.)

#### Phase One

<!-- Louisa is currently not sure how to outline the phases for this since there are 3 project options to choose from -->

#### Phase Two

<!-- Louisa is currently not sure how to outline the phases for this since there are 3 project options to choose from -->

#### Phase Three

<!-- Louisa is currently not sure how to outline the phases for this since there are 3 project options to choose from -->

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
