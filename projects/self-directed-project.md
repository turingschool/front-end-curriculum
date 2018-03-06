---
title: Self-Directed Project
module: 3
---

The goal of this project is to create a successful web application from a project idea. You will create an app that will solve an actual problem.

### Project Scope

A good project idea should:

* Break down into logical iterations so that you can deliver a strong product on every check-in
* Be something that real people would want to use to solve a problem
* Have enough *technical* challenge to be worth your time (as opposed to a *content* challenge)


### Feature Delivery

**1. Completion**

* 4: Developer completed all the user stories and requirements set in check-ins in timely manner.
* 3: Developer completed all the user stories and requirements set during check-ins.
* 2: Developer completed most of the user stories and requirements set during check-ins.
* 1: Developer completed the user stories and requirements partially.

### CSS/Design

- 4 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has minimal recommendations for design changes. Follows [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 3 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has multiple recommendations for design changes. Follows majority of the [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 2 - Developer has made intentional design decisions to create a user friendly application but Louisa would be mad. Attempts to follow [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 1 - Developer did minimal to no CSS for this project besides what was indicated in the comp.

### Code Quality

- 4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
- 3 - Developer appears comfortable in React. There are minor opportunities to refactor.
- 2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
- 1 - Developer did not make any effort to use React effectively or refactor code.

### Redux Architecture

* 4: Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary application data and nothing more. All state changes are handled through Redux actions and reducers. Developer uses middleware. Actions and reducers are clean. At least one container is reused.
* 3: All state changes are handled by Redux with exeception to Controlled Forms. Actions and Reducers are simple. Containers don't hold unnecessary data.
* 2: Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of stateful vs. statelessness.
* 1: Application does not make use of Redux to manage state. There are little or no connected components.

### Code Sanitation

The output from ESLint shows…

* 4 - Zero complaints
* 3 - Five or fewer complaints
* 2 - Six to ten complaints
* 1 - More than ten complaints

### PropType Implementation

- Pass - Proptype validation is implemented for any component receiving props.
- Fail - There are components missing proptype validation.

### README Updates

- Pass - The README.md file has been updated with a description of the project, the team, and how to get it up and
  running
- Fail - The boilerplate README is still in place

### Testing

- 4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
- 3 - Almost all components are tested to a level that indicates developer has an understanding of testing
- 2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
- 1 - There was little to no attempt to test this application.


### Workflow

- 4 - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.

- 3 - Developer make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.

- 2 - Developer make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.

- 1 - Developer make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.
