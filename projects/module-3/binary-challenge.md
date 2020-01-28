---
title: Binary Challenge
module: 3
tags: react, redux, javascript, api
---

## Introduction

This project will challenge you to use the technology you've become familiar with over the course of Mod 3, as well as force you to work inside some constraints. Everyone will be working with (at least) one API and one audience.

Choose an open API to work with where the data sounds interesting to you. A good place to start looking is [this repo with a list of free/open APIs](https://github.com/public-apis/public-apis). Choose an API where you could make an application based on the data from the API. _Do not choose an API that requires "OAuth or OAuth 2.0"_, which is a more complicated authentication scheme.

APIs that require an `apikey` are usually easy to deal with, and some APIs don't require an `apikey`. If the API you want to use relies on an API key, be sure to request on ASAP!

After you have an API that interests you, the next thing you need to do is choose an audience. You need to be _specific_ with your audience. For instance, if you chose an API that served cat data, your audience should not just be "cat lovers", it should be something more specific like "cat lovers who live in Alaska". This will give you some constraints for the project to make it more unique and design decisions a little easier.

<!-- Your instructors will pass out cards to each of you. You now have 30 minutes to haggle with each other. Want a different API? Find someone to trade with. -->

Once you've got your API and audience settled, start thinking about how you're going to build something for this audience, using that API. Come up with a few different ideas.

## Wireframes

Wireframing will be a major component of this project. The more time you spend intentionally thinking about what the layout of your application will look like, the better the final result will be.

There are a lot of different tools you can use for this, including just plain old pen and paper. Just make sure you really spend time thinking about the user interactions. For a good overview of how to effectively wireframe a project, check out [this video](https://www.youtube.com/watch?v=e2Oynq-mOLk).

## Project Goals and Requirements

1. Use the technology you've been working with over the course of the module to
   demonstrate mastery of the following:
   - React
   - Redux
   - Router
   - Asynchronous JavaScript

2. Work within constraints to deliver a unique product for your audience which helps them in some way. Your project must utilize your assigned API and technology, and must be built for your assigned audience.

3. Your applications should have the following core functionality:
  - Display the data from the API in a way that applies directly to your audience
  - Ability for users to store/manipulate the data displayed in the application, such as favoriting or adding to a list 

### Day-1 Deliverables

By noon of day 1, send your instructional project manager the plans for you API, specific audience, and a general overview of what the application will do. Have a backup API/audience ready just in case.

If you have wireframes ready to go, send those along too. You can send your wireframes to your project manager at any time to get feedback.

## Rubric

### Specification Adherence

* 4 - All requirements from 3 are met. The application completes all iterations above and implements one or more of the extensions. And the evaluator has no recommendations for design changes.
* 3 - The application uses the above technologies to a professional level. The evaluator has minimal recommendations for refactoring or design changes.
* 2 - The application is in a usable state, but is missing part of one or more of the technologies outlined above. Evaluator has multiple recommendations for design changes.
* 1 - The application is missing multiple features outlined above. Developer did minimal to no CSS for this project.

[10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)

### Project Professionalism

* 4 - All requirements from 3 met, codebase has zero linter errors/warnings and readme contains screenshots of application. Project team uses a rebase workflow, taking advantage of GitHub issues to track work. Project shows a complete mastery of React architecture.
* 3 - PropType functionality is complete, the codebase has less than 5 linter errors, README has been updated with all group members. Project utilized wireframes from the outset. All git commits are atomic, made first to branches, and use descriptive and concise commit messages. Project demonstrates a fundamental understanding of React architecture.
* 2 - Project is missing PropTypes, README updates, wireframes, or has more than 5 linter errors. Project team makes large infrequent git commits. Project shows a basic understanding of React.
* 1 - PropTypes are substantially unused, README is incomplete, wireframes were not used, or more than 10 linter errors are present. Git history does not show evolution of project, with many large and inconsistent commits. Project shows little understanding of React and significant refactoring is required.

### Testing

* 4 - All requirements from 3 met, all async functionality is tested, tests are passing and run efficiently (using mount only when appropriate).
* 3 - All Redux functionality is tested (actions, reducers, mapStateToProps, mapDispatchToProps), all components are unit tested, and a valid attempt was made to test any async functionality.
* 2 - Nearly all unit tests for Redux and React are in place. No attempt to test async functionality was made.
* 1 - A valid attempt to test this application was made, but there are obvious gaps, with missing unit tests for Redux and React.

### Redux Architecture

* 4 - All requirements from 3 met, and no duplication of data exists in the store. Data in the store remains flat (not nested).
* 3 - Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary application data. All state changes are handled through Redux actions and reducers.
* 2 - At least one component is not connected with Redux appropriately. Application state is mutated by more than just Redux. The Redux store is missing application data that it should be handling.
* 1 - Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of class vs. functional.

### Routing

* 4 - All requirements from 3 met, and always chooses the correct component for rendering, as well as the correct Route API. Application should account for undefined routes.
* 3 - Application uses React Router to display appropriate components based on URL.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.
* 1 - Application uses React Router, but does not render/use all routes.
