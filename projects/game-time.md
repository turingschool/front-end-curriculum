---
title: Game Time
length: 2
tags: javascript, jquery, canvas, svg, mocha, testing
---

## Abstract

Build a game that is playable in the browser. There is no server-side component for this project.

This project is inspired by [Minicade](http://minica.de/).

## Goals

* Use design patterns to drive both the design and implementation of code
* Separate business-logic code from view-related code
* Use test-driven design to build a client-side application

### Restrictions

You can use any of the following libraries:

* [jQuery](http://jquery.com/)
* [Mocha](http://mochajs.org/)
* [Lodash](http://lodashjs.com/)
* [Moment.js](http://momentjs.com)
* [Numeral.js](http://numeraljs.com)

(Other libraries may be used *only* with instructor approval.)

**Nota bene**: We provide a [Game Time Starter Kit](https://github.com/turingschool-examples/game-time-starter-kit) that has been preconfigured with Webpack. You should probably use this starter kit.

## Game Choices

- Connect Four
- Lights Out
- Snake
- Hang Man
- Breakout
- Black Jack
- Othello/Reversi
- 2048
- Snake
- Tron

(Any other game can requires instructor approval.)

## Playability Features

We want your game to be full-featured and playable—not just a proof of concept of the gameplay and rendering
features.

To this end, make sure to include sufficient UX to allow the user to fully interact with the game. This would
include:

* Indicate when the game is over and won or lost
* Allow the user to start a new game
* Include a clean UI surrounding the actual game interface itself
* Create multiple rounds of difficulty (consider increasing factors
  such as game speed, randomness of starting setup, etc.).

## Extensions

* Create an AI player that can play as the second player (except in 2048).

### Functional Expectations

* 4 - Application is fully playable and exceeds the expecations set by instructors
* 3 - Application is fully playable without crashes or bugs
* 2 - Application has some missing functionality but no crashes
* 1 - Application crashes during normal usage

### User Interface

* 4 - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* 3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 1 - The application is confusing or difficult to use.

### Testing

* 4 - Project has a running test suite that exercises the application at multiple levels. The test suite convers almost all aspects of the application and uses mocks and stubs when appropriate.
* 3 - Project has a running test suite that tests and multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of integration testing.
* 2 - Project has sporadic use of tests and multiple levels. The application contains numerous holes in testing and/or many features are untested.
* 1 - There is little or no evidence of testing in this application.

### JavaScript Style

* 4 - Application has exceptionally well-factored code with little or now duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* 3 - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 2 - Your application has a significant amount of duplication and one or major bugs.
* 1 - Your client-side application does not function. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* 0 - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* 4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* 3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* 2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* 1 - The developer commited the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0 - The application was not checked into version control.

### Code Sanitation

The output from JSHint shows…

* 4 - Zero complaints
* 3 - Five or fewer complaints
* 2 - Six to ten complaints
* 1 - More than ten complaints
