---
title: Game Time
length: 2 weeks
tags: javascript, jquery, data, prototype methods, chai, mocha, testing
---

2 week paired project for FE Mod 2 (weeks 2-3)

## Background and Description

For this project you will learn object-oriented programming (OOP) principles by building out a game show. This is an opportunity to work with classes to build a program at a larger scale than you have with previous projects. This is also an opportunity for you to build out a program based on user stories - which is more aligned to what you can expect to see working with product managers in a production environment.

Building software, at its core, is about solving problems. Generally speaking, the first step in finding a solution to the problem is to be sure that you have clearly identified the problem as well what features the solution must incorporate. From here, we can flesh out the _requirements_ that specify what our program should have. You will be assigned to build one of the following games:

* Wheel of Fortune
* Jeopardy
* Family Feud

The rules of your assigned game will serve as the requirements for the spec.


## Goals and Objectives

- Write a program from scratch
- Design and implement OOP patterns
- Understand and implement ES6 classes
- Implement array iterator and mutator methods to work with game data
- Write modular, reusable code that follows SRP (Single Responibility Principle) 
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Outline

### Week 1

|Day | Status| Deliverables |
|--- |---    |--- |
|*1* | Kick-off and exploration| What is OOP? Why is OOP useful? How is OOP used in games? Set up DTR and explore boilerplate repo |
|*2* | Understanding/Planning| Diagram for OOP design/classes due|
|*3* | Setup and Coding| [Fork this repo](https://github.com/turingschool-examples/gametime-starter) by following the "Initial Setup" below and then continue with the instructions in the README. In your forked repo, update the README to include a link to your pair's DTR, your final wireframes, and chosen design inspiration|
|*4* | Check-in| Instructor Pairing|

### Week 2

|Day | Status| Deliverables |
|--- |---    |--- |
|*8* | Check-in| Pair-to-Pair feedback|
|*11* | Assessment| Formal Code Review or Class Code Review|

## Restrictions

To populate the data for your assigned game, you will be using one of the following datasets:

* [Wheel of Fortune](https://repl.it/@thatpamiam/WheelOfFortune)
* [Jeopardy](https://repl.it/@brittanystoroz/Jeopardy)
* [Family Feud](https://repl.it/@brittanystoroz/FamilyFeud)

Copy your assigned data into a separate `js` file that you can then include in your repository.

You will be using the following JavaScript libraries:

* [jQuery](http://jquery.com/) (REQUIRED)
* [Mocha](http://mochajs.org/) (and Chai) (REQUIRED)

(Other libraries may be used *only* with instructor approval.)

# Requirements

## Initial Setup

For this project, you need to use this [Gametime Starter Kit](https://github.com/turingschool-examples/gametime-starter) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up (through running `npm install`), follow the instructions to verify it is setup correctly.

There are additional notes in the README about where your game logic code goes and where your test code goes as well. Be sure to read through the README before you start coding because for this starter kit to work correctly, it has some underlying assumptions of where files live. 

## Code Organization

You should have at least one use-case for [inheritance](https://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/) with your classes.
  - a parent class's properties and methods should be shared by all the child classes
  - a child class should inherit those properties and methods from the parent class
  - a child class should add additional properties or methods, or override the functionality of a parent method

  Each class should have its own file with the filename capitalized (e.g. `Level.js`). The class should be capitalized as well. Only code that is a part of this class should be in this file.


## Testing

You should be testing your the correctness of your code throughout your project. Each JavaScript file in your project should have its own test file. (e.g. Your `Game.js` class file should have a corresponding testing file called `Game-test.js`)

Your testing suite should test all of the functionality of the game, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

For the purposes of this project, you will keep your state logic completely separate from your view logic. In other words, your business logic (classes/methods) should not handle anything that deals with the UI (DOM Manipulation).

To do this, you will utlize a separate `domUpdates.js` file that handles any DOM manipulation that is triggered by your business logic. This is covered in more depth in the testing lesson, which you can find [here](http://frontend.turing.io/lessons/module-2/test-driven-development.html#dom-manipulation).

## User Stories

These user stories may be worked on in any order that makes sense to your pair. Do take time to think about which ones must be completed before you can make progress on others. This will help you prioritize the work that you do.

* [Wheel of Fortune User Stories](http://frontend.turing.io/projects/module-2/wheel-of-fortune)
* [Jeopardy User Stories](http://frontend.turing.io/projects/module-2/jeopardy)
* [Family Feud User Stories](http://frontend.turing.io/projects/module-2/family-feud)


## Extensions

* Get your game hosted on GitHub pages
* Research and use a CSS3 Transition/Animation in your UI
* Write a blog post to publish on Medium that details your experience with implementing OOP designs in your game
* Create AI players
* Choose your own extension (instructor approval)

# Rubric

### Functional Expectations

* [ ] Novice - Application is unplayable due to lack of functionality or broken logic. The majority of user stories are incomplete.
* [ ] Advanced Beginner - Application has some missing functionality. Developers have implemented functionality for most of the user stories. There are 1 or more major bugs.
* [ ] Proficient - Application is fully playable. Developers have implemented functionality for all user stories.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, developers have implemented one or more extensions.

### UX/Accessibility

* [ ] Novice - The application is confusing or difficult to use.
* [ ] Advanced Beginner - The application shows effort in the user experience, but the result is not effective. The evaluator has some difficulty using the application and may need assistance from developers.
* [ ] Proficient - The application is pleasant, logical, and easy to use. Developers use appropriate semantic elements in markup that allow for both mouse and keyboard navigation to all interactive elements.
* [ ] Exceptional -  Meets all expectations for `Proficient`.  In addition, developers implement attributes and ARIA labels where appropriate to allow for a better user experience with a screen reader. The application stands on its own to be used by the instructor _without_ guidance from the developers.

### User Interface

* [ ] Novice - Developers can integrate typography, color choices, and layout in ways that do not detract from legibility.
* [ ] Advanced Beginner - Developers can apply fundamental design concepts with increased sensitivity that result in clear legibility but likely break in areas of layout or “noise”.
* [ ] Proficient - Developers can apply fundamental design concepts that demonstrates a thoughtful, purposeful, cohesive strategy that does not detract from legibility or overall design integrity.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, typography, color choices, and layout decisions are thoughtful and appropriate, and strongly enhance the layout and legibility of the design.

### Testing

* [ ] Novice - There is little or no evidence of testing in this application. ESLint shows 10+ complaints.
* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested. ESLint shows 5+ complaints.
* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of integration testing. ESLint shows < 5 complaints.
* [ ] Exceptional - Meets all requires of `Proficient`. In addition, the test suite makes use of mocks and stubs when appropriate. ESLint shows 0 complaints.


### JavaScript Style & OOP

* [ ] Novice - Application is not separated into classes, or methods and properties are illogically assigned to classes. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Business-side logic and view-related code are not separated.
* [ ] Advanced Beginner - Application has a significant amount of duplication. Application is organized into classes that do not display a good understanding of encapsulation, and logic is not well-divided. Developer cannot articulate what each line of code is doing. 
* [ ] Proficient - Application is thoughtfully put together with some duplication. Developers can speak to choices made in the code and knows what every line of code is doing. Application is organized into classes (and correctly uses inheritance) with some misplaced logic. Business-logic code is mostly separated from view-related code. 
* [ ] Exceptional - Meets all requirements of `Proficient`. In addition, application has exceptionally well-factored code with little or no duplication. SRP (single responsibility principle) and DRY (don't repeat yourself) principles are utilized. There are _zero_ instances where an instructor would recommend taking a different approach. There are no instances where instructor would suggest moving logic or data to another class. The business-logic code driving functionality is cleanly separated from rendering, view-related code.

### Workflow
* [ ] Novice - The developer/team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* [ ] Advanced Beginner - The developer/team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* [ ] Proficient - The developer/team makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. The team conducts a DTR (Define the Relationship) that is linked in the README. Both members contribute meaningfully to the application.
* [ ] Exceptional - Meets all requirements for `Proficient`. In addition, the developer/team effectively uses Git branches and many small, atomic commits that document the evolution of their application with descriptive commit messages. The team displays good pairing practices (driver-navigator, dividing up work, etc) and utilizes some sort of planning tool (GitHub issues, Waffle, Trello, etc). 