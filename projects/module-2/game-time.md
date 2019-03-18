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
|*1* | Kick-off and exploration| What is OOP? Why is OOP useful? How is OOP used in games?, Wireframe & Design Inspiration |
|*2* | Understanding/Planning| Diagram for OOP design/classes due|
|*3* | Setup and Coding| [Initialize a repo](https://github.com/turingschool-examples/gametime-starter) following the "Initial Setup" below and then continue with the instructions in the README. In your forked repo, update the README to include a link to your pair's DTR, your final wireframes and chosen design inspiration|
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


``` 
Game play,
  - Must have 2 players
  - Must have 3 rounds - 3 rounds make up 1 game
  - Each player starts with a score of 0 and alternates turns responding to the current survey
  - Each player's score should be displayed by their name
  - In the first two rounds, players will take turns guessing responses to the survey. The round is over when all responses to the survey have been guessed
  - The third round should be a "Fast Money" round: each player gets 30 seconds to enter as many responses as they can think of
  - The winner is determined by the player with the highest total score at the end of 3 rounds
```

```
Survey,
  - A single, random survey should be chosen at the start of every round
  - The survey chosen at the start of each round should not be shown more than once in a game
  - Each survey includes a question and the top 3 responses
  - Each response has a number associated with it that represents the number of people who gave that response
  - Initially, only the survey question should be displayed and all responses should be hidden.
  - As a player guesses a response, the survey should check its responses for a match
    - If there is a match, that answer should be revealed along with the number of respondents who gave it
    - If there is no match, the UI should indicate that answer is not on the board
  - Responses should be displayed on the board in the order of most popular to least popular
```

```
As a player,
  - I should be able to quit/start a new game at any time
  - I should be able to input a guess
    - If I guess a correct response, I am awarded points. My score should increment by the number of people who also responded with my guess.
    - If I guess an incorrect response, I am not awarded points. My score will not increment, and it will then be the other player's turn.
  - In the fast money round, I should first be able to input a multiplier between 1-5
    - The multiplier will multiply my awarded points for that round by that number (e.g. if I correctly guess 2 responses that were worth a combined 70 points, and I entered a multiplier of 2, I would be awarded 140 points for that round)
```

## Extensions

* Get your game hosted on GitHub pages
* Research and use a CSS3 Transition/Animation in your UI
* Write a blog post to publish on Medium that details your experience with implementing OOP designs in your game
* Create AI players
* Choose your own extension (instructor approval)

# Rubric

### Functional Expectations

* [ ] Novice - Application is unplayable due to lack of functionality or broken logic.
* [ ] Advanced Beginner - Application has some missing functionality but no bugs or broken functionality.
* [ ] Proficient - Application is fully playable and meets all requirements of the spec.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, the application exceeds the expectations set by instructors.


### User Interface

* [ ] Novice - The application is confusing or difficult to use.
* [ ] Advanced Beginner - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* [ ] Proficient - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* [ ] Exceptional -  Meets all expectations for `Proficient`. In addition, the application is pleasant, logical, and easy to use. There are no holes in functionality and the application stands on its own to be used by the instructor _without_ guidance from the developer.

### Testing

* [ ] Novice - There is little or no evidence of testing in this application. ESLint shows 10+ complaints.
* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested. ESLint shows 5+ complaints.
* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of integration testing. ESLint shows < 5 complaints.
* [ ] Exceptional - Meets all requires of `Proficient`. In addition, the test suite makes use of mocks and stubs when appropriate. ESLint shows 0 complaints.


### JavaScript Style & OOP

* [ ] Novice - Your client-side application does not function. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Application is not separated into classes, or methods and properties are illogically assigned to classes. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Business-side logic and view-related code is not separated.
* [ ] Advanced Beginner - Your application has a significant amount of duplication and one or more major bugs. Application is organized into classes that do not display a good understanding of encapsulation, and logic is not well-divided. Developer cannot articulate what each line of code is doing. There are one or more major bugs.
* [ ] Proficient - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing. Application is organized into classes (and correctly uses inheritance) with some misplaced logic and no major bugs. Business-logic code is mostly separated from view-related code. Developer can speak to choices made in the code and knows what each line of code is doing.
* [ ] Exceptional - Meets all requirements of `Proficient`. In addition, application has exceptionally well-factored code with little or no duplication. SRP (single responsibility principle) and DRY (don't repeat yourself) principles are utilized. There are _zero_ instances where an instructor would recommend taking a different approach. Application is organized into classes (and correctly uses inheritance) and there are no instances where instructor would suggest moving logic or data to another class. The business-logic code driving functionality is cleanly separated from rendering, view-related code.

### Workflow
* [ ] Novice - The developer/team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* [ ] Advanced Beginner - The developer/team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* [ ] Proficient - The developer/team makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. The team conducts a DTR (define the relationship) and utilizes a planning tool and pairing practices. Both members contribute meaningfully to the application.
* [ ] Exceptional - Meets all requirements for `Proficient`. In addition, the developer/team effectively uses Git branches and many small, atomic commits that document the evolution of their application with descriptive commit messages. The team displays good pairing practices (driver-navigator, dividing up work, etc) and utilizes some sort of planning tool (GitHub issues, Waffle, Trello, etc). The team develops a clear MVP (minimum viable product) and conducts a DTR (define the relationship). Both members contribute meaningfully to the application.