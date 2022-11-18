---
title: Game Time
length: 2 weeks
tags: javascript, jquery, data, prototype methods, chai, mocha, testing
---

2 week group project for FE Mod 2 (weeks 4-5)

## Background and Description

For this project you will solidify your understanding of object-oriented programming (OOP) principles by building out a game show. This is an opportunity to work with classes to build a program at a larger scale than you have with previous projects. This is also an opportunity for you to build out a program based on user stories - which is more aligned to what you can expect to see working with product managers in a production environment.

Building software, at its core, is about solving problems. Generally speaking, the first step in finding a solution to the problem is to be sure that you have clearly identified the problem as well what features the solution must incorporate. From here, we can flesh out the _requirements_ that specify what our program should have. You will be assigned to build one of the following games:

* Wheel of Fortune
* Jeopardy
* Family Feud

The rules of your assigned game will serve as the requirements for the spec.


## Goals and Objectives

- Write a program from scratch
- Synthesize knowledge of OOP, classes, and JS fundamentals to create a playable game
- Demonstrate good GitHub collaboration and workflow within a large group
- Write modular, reusable code that follows SRP (Single Responibility Principle)
- Create a robust test suite that thoroughly tests all functionality of a client-side application
- Implement array iterator and mutator methods to work with game data

## Technologies

You'll be working with some new technologies for this project:

* **the fetch API** for sending/receiving data
* **Sass** for getting fancy with your CSS

## Outline

### Weeks 3/ 4

|Day           | Status| Deliverables |
|---           |---    |--- |
|*Day 1 (Thur Week 3)* | Kick-off| Set up DTR, explore boilerplate repo, design theme/inspiration|
|*Day 2 (Fri Week 3)* | Setup & Coding| Setup your repository using the instructions in this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit) and continue with the instructions in the README. In your project's repo, update the README to include relavent information to your version of the project, a link to your group's DTR, your final wireframes, and any design inspiration|
|*Day 6 (Tue Week 4)* | 1st PR | PR due w/instructors tagged|

### Week 5

|Day | Status| Deliverables |
|--- |---    |--- |
|*Day 11 (Mon)* | 2nd PR| PR due w/instructors tagged|
|*Day 14 (Wed)* | Assessment| Formal Demo|

## Restrictions

To populate the data for your assigned game, you will be using one of the following datasets:

* [Wheel of Fortune](https://repl.it/@Khalid_Williams/WheelOfFortune)
* [Jeopardy](https://repl.it/@Khalid_Williams/Jeopardy)
* [Family Feud](https://repl.it/@Khalid_Williams/FamilyFeud)

Copy your assigned data into a separate `js` file that you can then include in your repository.

You will be using the following JavaScript libraries:

* [jQuery](http://jquery.com/) (REQUIRED)
* [Mocha](http://mochajs.org/) (and Chai) (REQUIRED)

(Other libraries may be used *only* with instructor approval.)

# Requirements

## Initial Setup

For this project, you need to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up (through running `npm install`), follow the instructions to verify it is setup correctly.

There are additional notes in the README about where your game logic code goes and where your test code goes as well. Be sure to read through the README before you start coding because for this starter kit to work correctly, it has some underlying assumptions of where files live.

## Code Organization

You should have at least one use-case for [inheritance](https://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/) with your classes.
  - a parent class's properties and methods should be shared by all the child classes
  - a child class should inherit those properties and methods from the parent class
  - a child class should add additional properties or methods, or override the functionality of a parent method

  Each class should have its own file with the filename capitalized (e.g. `Level.js`). The class should be capitalized as well. Only code that is a part of this class should be in this file.

## Testing

You should be testing the correctness of your code throughout your project. Each JavaScript file in your project should have its own test file. (e.g. Your `Game.js` class file should have a corresponding testing file called `Game-test.js`)

Your testing suite should test all of the functionality of the game, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

For the purposes of this project, you will keep your state logic completely separate from your view logic. In other words, your business logic (classes/methods) should not handle anything that deals with the UI (DOM Manipulation).

To do this, you will utlize a separate `domUpdates.js` file that handles any DOM manipulation that is triggered by your business logic. This is covered in more depth in the testing lesson, which you can find [here](http://frontend.turing.edu/lessons/module-2/testing-with-chai-spies.html).

<section class="note">
  domUpdates will hold your DOM updating logic. Some of this logic may be called on by methods in your class files. You won't test actual methods in domUpdates, but you will test class methods that call on DOM updates. This is done with [spies](http://frontend.turing.edu/lessons/module-2/testing-with-chai-spies.html).
</section>


## Fetch

After learning about GET and POST requests, you'll be using the following endpoints to retrieve your game data:

* [Wheel of Fortune](https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data)
* [Jeopardy](https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data)
* [Family Feud](https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data)

For implementing a leaderboard, you'll want to send your high scores to the following endpoint: [http://fe-apps.herokuapp.com/api/v1/gametime/leaderboard](http://fe-apps.herokuapp.com/api/v1/gametime/leaderboard). A new high score entry should be sent through like so:

```js
{
	appId: "1909adbecf", // where 1909 is replaced with your cohort number, and the letters are the first and last initials of each group member
	playerName: "Bob Loblaw",
	playerScore: 100
}
```

You can retrieve all the high scores by doing a GET request to the same endpoint, but once that data comes back, you'll want to `filter` for only the high scores that pertain to your appId.

## User Stories

These user stories may be worked on in any order that makes sense to your pair. Do take time to think about which ones must be completed before you can make progress on others. This will help you prioritize the work that you do.

* [Wheel of Fortune User Stories](http://frontend.turing.edu/projects/module-2/wheel-of-fortune)
* [Jeopardy User Stories](http://frontend.turing.edu/projects/module-2/jeopardy)
* [Family Feud User Stories](http://frontend.turing.edu/projects/module-2/family-feud)

## GitHub Collab & Workflow

The requirements for collaboration and workflow are more constrained within this project considering this project's learning goals:

- Two PRs must be submitted where instructors are tagged. PRs should be submitted according to the outline listed in the spec.
- PR should be around 100 lines of code (significant enough for your partners to have some serious code to review, think about, and ask questions about, but not so big that it’s overwhelming and the reviewer is just going to skim over it/miss potential mistakes)
- You should be reviewing each other's code by leaving line-by-line comments
- If you have feedback for one of your partners to change something, *DO NOT* merge the PR before that person has a chance to make the change

## README

Your README should include the following, in this order:

- Abstract at the top (A sentence or two describing the project)
- Install/Setup instructions
- Everything else (screenshot/GIF of finished project)

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


### UI/UX

* [ ] Novice - Developers can integrate typography, color choices, and layout in ways that do not detract from legibility. Instructor can use the app on its own without guidance.
* [ ] Advanced Beginner - Developers can apply fundamental design concepts with increased sensitivity that result in clear legibility but likely break in areas of layout or “noise”.
* [ ] Proficient - Developers can apply fundamental design concepts that demonstrates a thoughtful, purposeful, cohesive strategy that does not detract from legibility or overall design integrity.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, typography, color choices, and layout decisions are thoughtful and appropriate, and strongly enhance the layout and legibility of the design.


### CSS/Sass Style

* [ ] Novice - There are several (10+) instances of duplication and one or two major bugs. Developers write code with unnecessary selectors or tags which do not increase clarity.
* [ ] Advanced Beginner - There is some duplication (5-10 instances) in the codebase. There may be one to two minor bugs. There may be some unncessary selectors or tags. Application adds organization for the whole stylesheet and within rules.
* [ ] Proficient - Application is thoughtfully put together with comments to help guide organization. There may be some duplication (fewer than 5 instances) present. Comments are present to assist with organization of code.
* [ ] Exceptional - Meets all expectations for `Proficient`. The application has exceptionally well-factored CSS/Sass with all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.

### JavaScript Style & OOP

* [ ] Novice - Application is not separated into classes, or methods and properties are illogically assigned to classes. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Business-side logic and view-related code are not separated.
* [ ] Advanced Beginner - Application has a significant amount of duplication. Application is organized into classes that do not display a good understanding of encapsulation, and logic is not well-divided. Developer cannot articulate what each line of code is doing.
* [ ] Proficient - Application is thoughtfully put together with some duplication. Developers can speak to choices made in the code and knows what every line of code is doing. Application is organized into classes (and correctly uses inheritance) with some misplaced logic. Business-logic code is mostly separated from view-related code.
* [ ] Exceptional - Meets all requirements of `Proficient`. In addition, application has exceptionally well-factored code with little or no duplication. SRP (single responsibility principle) and DRY (don't repeat yourself) principles are utilized. There are _zero_ instances where an instructor would recommend taking a different approach. There are no instances where instructor would suggest moving logic or data to another class. The business-logic code driving functionality is cleanly separated from rendering, view-related code.

### Testing

* [ ] Novice - There is little or no evidence of testing in this application. ESLint shows 10+ complaints.
* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested. ESLint shows 5+ complaints.
* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of integration testing. ESLint shows < 5 complaints.
* [ ] Exceptional - Meets all requires of `Proficient`. In addition, the test suite makes use of mocks and stubs when appropriate. ESLint shows 0 complaints.

### GitHub Collaboration/Workflow

* [ ] Novice - Developers do not tag instructors in the two required PRs by due dates listed in the project outline or tagged PR has fewer than 200 lines of code. The developer creating the PR does not summarize the changes or why the changes were made. Reviewers are not leaving line-by-line feedback/comments _or_ are merging the PR before changes are made.
* [ ] Advanced Beginner - Developers tag instructors in both required PRs by due dates _or_ in one of the two required. PR has less than the required lines of code in PR. Reviewers do not leave line-by-line feedback. May be merging PR before feedback is incorporated.
* [ ] Proficient - Developers tag instructors in both required PRs by due dates. PR is over 100 lines of code. The developer creating the PR summarizes the changes made, why those changes were necessary, and asks for insights. Reviewers leave line-by-line comments/feedback and wait to merge PR until feedback is incorporated.
* [ ] Exceptional - Meets all expectations for `Proficient`. The feedback is both kind _and_ insightful. There may be numerous threads of conversation where developers go back and forth to find the best solution to the problems they are solving together.

### Presentation

* [ ] Novice - Not all presenters speak. Presenters give too much or too little information about the application. Presenters do not use audio/visual aids or media.
* [ ] Advanced Beginner - Everyone in the group speaks. Presenters do a live demo of the application. The group may speak about the planning/challenges/rewards of the project; however, the delivery does not seem thought out/well-planned.
* [ ] Proficient - Everyone in the group has an opporunity to speak during the presentation. The group has a visual of the application to demo (e.g. slides, recordings of interactions, live demo). The group talks about the app, speaking to the challenges, rewards, and collaborative aspects of the project.
* [ ] Exceptional - Meets all expectations of `Proficient`. In addition, the presentation runs smoothly w/no hiccups - indicating that it was planned/rehearsed/polished. The presentation is so engaging that there is no time that the evaluators find themselves checking the time/clock.


### Technical Articulation
* [ ] Expert - Responds to the question accurately and gracefully. Uses the correct vocabulary when discussing the concept, and is sure of their response. Gives an appropriate amount of detail to thoroughly answer the question, but responds well to any follow-up questions that may arise.
* [ ] Proficient -  Responds to the question with accuracy, but may be a bit vague or unsure of themselves. May answer the question by describing an example rather than having an eloquent articulation of the concept. May not be able to dig much deeper to respond to follow-up questions that may arise.
* [ ] Advanced Beginner - Cannot respond to the question with accuracy. May discuss related ideas, but does not quite stay on topic for the question we're asking. May ramble a bit until they throw out the correct term, looking to the interviewer for signs of being on the right track.
* [ ] Novice - Cannot respond to the question with accuracy. Interviewer may reprhase the question several times or pivot to ask a simpler question. May find a way to gracefully say "I don't know".

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask follow-up question to you - or they may open it up to volunteers in the group to assist.
