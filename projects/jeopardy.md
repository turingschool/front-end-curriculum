---
title: Jeopardy
length: 2 weeks
tags: javascript, jquery, svg, mocha, testing
---

# Jeopardy

2 week paired project for FE Mod 2 (week 2-3)

## Background and Description

For this project you will learn object-oriented programming (OOP) principles by building the game Jeopardy. This is an opportunity to work with classes to build a program at a larger scale than you have with previous projects. This is also an opportunity for you to build out a program based on user stories - which is more aligned to what you can expect to see working with product managers in a production environment.

Building software, at its core, is about solving problems. Generally speaking, the first step in finding a solution to the problem is to be sure that you have clearly identified the problem as well what features the solution must incorporate. From here, we can flesh out the _requirements_ that specify what our program should have. For the problem of building Jeopardy, the rules of this game will serve as the requirements for the spec.

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
|*1* | Kick-off and exploration| What is OOP? Why is OOP useful? How is OOP used in games?|
|*2* | Understanding/Planning| [Initialize a repo](https://gist.github.com/brittanystoroz/7ffa5c4e1d39aa92b3e95d3358d9d6fd) with a README that includes a link to your pair's DTR, a wireframe for your game, and some potential design inspiration. Start diagram for OOP design/classes|
|*3* | Understanding/Planning| Diagram for OOP design/classes due|
|*5* | Check-in| Pair-to-Pair feedback|

### Week 2

|Day | Status| Deliverables |
|--- |---    |--- |
|*8* | Check-in| Instructor pairing|
|*11* | Assessment| Formal Code Review or Class Code Review|

## Restrictions

To populate your data for Jeopardy, you will be using [this data](https://repl.it/@brittanystoroz/Jeopardy). Copy this into a separate `js` file that you can include as a `script` tag in your HTML file.

You can use any of the following JavaScript libraries:

* [jQuery](http://jquery.com/)
* [Mocha](http://mochajs.org/) (and Chai)

(Other libraries may be used *only* with instructor approval.)

# Requirements

## Code Organization

You should have at least one use-case for [inheritance](https://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/) with your classes.
  - a parent class should have properties that might be shared by several other child classes
  - a parent class's properties and methods should be shared by all the child classes
  - a child class should inherit those properties and methods from the parent class
  - a child class should add additional properties or methods, or override the functionality of a parent method

  Each class should have its own file with the filename capitalized (e.g. `Level.js`). The class should be capitalized as well. Only code that is a part of this class should be in this file.


## Testing

You should be testing your the correctness of your code throughout your project. Each JavaScript file in your project should have its own test file. (e.g. Your `Clue.js` class file should have a corresponding testing file called `Clue-test.js`)

Your testing suite should test all of the functionality of the game, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

## User Stories

These user stories may be worked on in any order that makes sense to your pair.

``` 
Game play,
  - Must have 3 players
  - Must have 3 rounds - 3 rounds make up 1 game
  - The winner is determined by the player with the highest total score at the end all rounds
  - Each player starts with a score of 0
  - Each player's score should be displayed by their name
  - Each player gets an individual turn (rather than every player racing to answer the question)
```

```
Rounds,
  - 1st Round must have 4 categories, with 5 clues each, and point values ranging from 100 - 500
  - One clue in the first round must be a 'Daily Double'
  - 2nd Round must have 4 categories, with 5 clues each, and point values ranging from 200 - 1,000
  - Two clues in the second round must be a 'Daily Double'
  - 3rd Round must have a single category and a single clue that behaves like a 'Daily Double'
  - 3rd Round must only display the category, allow each player to input a wager, then display the clue

```

```
Clues,
  - Each clue should only appear once per game
  - 'Daily Double' clues must accept a wager from the player who selects it
  - The wager can range from a minimum of 5 points to a maximum of either:
    - the player's current total score
    - the highest point value remaining on the board
    - (whichever is greater)
```

```
As a player,
  - I should be able to quit/start a new game at any time
  - I should be able to enter my name
  - When it is my turn:
    - I should be able to select a category and point value off the board, as long as it hasn't already been previously selected
    - I should be able to input a wager if I have selected a 'Daily Double' clue
    - I should be able to input an answer after the clue I selected has been revealed
    - My score should increment or decrement by the point value of the clue if I answered right or wrong, respectively
```

## Extensions

* Get your game hosted on GitHub pages
* Research and use a CSS3 Transition/Animation in your UI
* Write a blog post to publish on Medium that details your experience with implementing OOP designs in your game
* Create AI players
* Choose your own extension (instructor approval)

# Rubric

### Functional Expectations

* 4 - Application is fully playable and exceeds the expectations set by instructors. At least one extension is in place.
* 3 - Application is fully playable and exceeds the expectations set by instructors.
* 2 - Application has some missing functionality but no bugs or broken functionality.
* 1 - Application is unplayable due to lack of functionality or broken logic.

### User Interface

* 4 - The application is pleasant, logical, and easy to use. There are no holes in functionality and the application stands on its own to be used by the instructor _without_ guidance from the developer.
* 3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 1 - The application is confusing or difficult to use.

### Testing

* 4 - Project has a running test suite that exercises the application at multiple levels. The test suite covers almost all aspects of the application and uses mocks and stubs when appropriate. ESLint shows 0 complaints.
* 3 - Project has a running test suite that tests multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of integration testing. ESLint shows < 5 complaints.
* 2 - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested. ESLint shows 5+ complaints.
* 1 - There is little or no evidence of testing in this application. ESLint shows 10+ complaints.

### JavaScript Style & OOP

* 4 - Application has exceptionally well-factored code with little or no duplication. SRP (single responsibility principle) and DRY (don't repeat yourself) principles are utilized. There are _zero_ instances where an instructor would recommend taking a different approach. Application is organized into classes (and correctly uses inheritance) and there are no instances where instructor would suggest moving logic or data to another class. The business-logic code driving functionality is cleanly separated from rendering, view-related code.
* 3 - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing. Application is organized into classes (and correctly uses inheritance) with some misplaced logic and no major bugs. Business-logic code is mostly separated from view-related code. Developer can speak to choices made in the code and knows what each line of code is doing.
* 2 - Your application has a significant amount of duplication and one or more major bugs. Application is organized into classes that do not display a good understanding of encapsulation, and logic is not well-divided. Developer cannot articulate what each line of code is doing. There are one or more major bugs.
* 1 - Your client-side application does not function. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Application is not separated into classes, or methods and properties are illogically assigned to classes. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Business-side logic and view-related code is not separated at all.


### Workflow

* 4 - The developer/team effectively uses Git branches and many small, atomic commits that document the evolution of their application with descriptive commit messages. The team displays good pairing practices (driver-navigator, dividing up work, etc) and utilizes some sort of planning tool (GitHub issues, Waffle, Trello, etc). The team develops a clear MVP (minimum viable product) and conducts a DTR (define the relationship). Both members contribute meaningfully to the application.
* 3 - The developer/team makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. The team conducts a DTR (define the relationship) and utilizes a planning tool and pairing practices. Both members contribute meaningfully to the application.
* 2 - The developer/team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* 1 - The developer/team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0 - The application was not checked into version control.
