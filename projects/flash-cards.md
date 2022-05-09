---
title: Flash Cards
tags: javascript, oop, mocha, testing
---

## Goals and Objectives

- Contribute code to an partially constructed object-oriented application
- Follow spec/prompts to make a working application
- Implement ES6 classes
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD

In this project, you will write a program to simulate a set of flash cards through the command line! 😱 A user will be able to see the questions, take guesses, and see a final score at the end of the round.

In order to build good habits, we've broken the project up into small classes to demonstrate objects that have a single responsibility.

Through each iteration, you should use TDD to drive implementation of your code.

# Requirements

## Initial Setup

For this project, you need to use this [Flashcards Starter](https://github.com/turingschool-examples/flashcards-starter) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up (through running `npm install`), follow the instructions to verify it is setup correctly.

Please note that there is logic provided to you (util.js) to make this game playable via the command line. You will not need to edit the util.js file. Completion of Iterations I and II are required before you are able to utilize the command line interface to verify that your code is functioning properly. Prior to this, you should be using your tests to confirm functionality is working as you expect.

## Day One Deliverable
- By end of day on kick off day: Submit your GH Repo [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link) 

## README

Your README should include the following, in this order:

- Abstract at the top (A sentence or two describing the project)
- A GIF of the working application
- Technologies used
- Install/Setup instructions

## Testing

You should be using the prompts below to develop tests that will drive your implementation of code. Each JavaScript file in your project should have its own test file. (e.g. Your `Turn.js` class file should have a corresponding testing file called `Turn-test.js`)

Your testing suite should test all of the functionality of the game, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

<!-- <section class="note">
### Note

While not a major learning goal in this project, we do encourage that you start experimenting with destructuring especially with objects either in your implementation or testing code!  No need to force it if it doesn't work well, but you might find a couple of scenarios where it makes your code more readable.  This will be more of a focus in the next project where you'll have more opportunities!
</section> -->

# Iterations

## Iteration 1:

***Cards***

- A `Card` represents a single flashcard
- Each card has an id, a question, possible answers, and a correct answer

<section class="answer">
### For Example  

```js
const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
```
</section>

***Turns***

- Your `Turn` class should meet the following requirements:
  - Instantiated with two arguments - a string (that represents a user's guess to the question), and a `Card` object for the current card in play.
  - `returnGuess`: method that returns the guess
  - `returnCard`: method that returns the `Card`
  - `evaluateGuess`: method that returns a boolean indicating if the user's guess matches the correct answer on the card
  - `giveFeedback` - method that returns either 'incorrect!' or 'correct!' based on whether the guess is correct or not.

<section class="answer">
### For Example  


```js
const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const turn = new Turn('pug', card);

turn.returnGuess();    // => 'pug'


turn.returnCard();     // => { id: 1,
                       //      question: 'What is Robbie\'s favorite animal',
                       //      answers: ['sea otter', 'pug', 'capybara'],
                       //      correctAnswer: 'sea otter'
                       //    }


turn.evaluateGuess();  // => false


turn.giveFeedback();   // => incorrect!
```
</section>

## Iteration 2:

***Deck***

Your `Deck` class should be initialized with an array of `Card` objects and should have an accompanying test file. It should know how many `Cards` are in the `Deck`.

<section class="answer">
### For Example  


```js
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

const deck = new Deck([card1, card2, card3]);

deck.countCards(); // => 3
```
</section>

***Round***

Your `Round` class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The `currentCard` should be the first `Card` in the `Deck` (the array of `Cards`) at the start of the `Round`

- Your `Round` class should meet the following requirements:
  - `returnCurrentCard`: method that returns the current card being played
  - `takeTurn`: method that updates `turns` count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

    * When a guess is made, a new `Turn` instance is created.
    * The `turns` count is updated, regardless of whether the guess is correct or incorrect
    * The next card becomes current card
    * Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of `incorrectGuesses`
    * Feedback is returned regarding whether the guess is incorrect or correct

  - `calculatePercentCorrect`: method that calculates and returns the percentage of correct guesses
  - `endRound`: method that prints the following to the console: '****** Round over! ****** You answered <>% of the questions correctly!'

<section class="answer">
### For Example  

```js
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

const deck = new Deck([card1, card2, card3]);

const round = new Round(deck);

round.deck;   // => [card1, card2, card3];

round.returnCurrentCard(); // => { id: 1,
                           //      question: 'What is Robbie\'s favorite animal',
                           //      answers: ['sea otter', 'pug', 'capybara'],
                           //      correctAnswer: 'sea otter'
                           //    }

round.turns; // => 0

round.incorrectGuesses;     // => []

round.takeTurn('sea otter'); // => 'correct!'

round.takeTurn('spleen');   // => 'incorrect!'

round.turns; // => 2

round.incorrectGuesses;     // => [14]

round.returnCurrentCard();    // => { id: 12,
            	              //      question: 'What is Travis\'s favorite stress reliever?',
            	              //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
            	              //      correctAnswer: 'playing with bubble wrap'
            	              //    }

round.calculatePercentCorrect(); // => 50
```
</section>

## Iteration 3:

***Playing the Game***

Now that we have all of our classes and methods set up, we can connect this to the pre-existing code to make the game playable through the CLI (Command-Line-Interface).

***Game***

As you may have noticed, your `Game` class has two methods fleshed out already: `printMessage` and `printQuestion`.  We are going to abandon testing for these methods - as the techniques for this type of testing are beyond the scope of this project.

- Your `Game` class should meet these other requirements:
  - Should keep track of the `currentRound`
  - `start`: method that starts everything
    * Creates `Cards`
    * Puts `Cards` in a `Deck`
    * Creates a new `Round` using the `Deck`
    * invokes `printMessage` to display the message in the CLI
    * invokes `printQuestion` to kick off our helper functions that allow interaction via the CLI

    _Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations._
- Your `game.start()` method should be invoked to make the game playable in the console.
  - Look at the file being run when we want to start the game. Think about where you need to invoke your `Game.start` method.

<section class="answer">
### For Example  

```js
game.currentRound; // => Round {...} (The new Round object that has been instatiated)
```
</section>



## Iteration 4:

Choose one or more of these extensions for this iteration.

_Note: Solving some of these problems may require modifying pre-existing code that was given to you_

***Use a project board to guide your workflow***
Use a tool like GitHub projects or Trello to split up iteration items into small tasks.

***Build out another study/flashcards dataset***
Create a new dataset that is structured similarily to our prototypes dataset. This dataset should be reviewing another fundamental topic and should live in the same `data.js` file.. Update your application so that once the first `Round` is over (and thus, the `Game` is over), a new `Round` starts with the new dataset that you've created.

***More practice***   
Add functionality so that a score of less than 90% will require the user to go through the entire dataset again.

***Review incorrect answers***  
Add functionality so that the `Round` (and thus, the `Game`) does not end after you've gone through all of the cards. The player should then be prompted to try to guess again, reviewing only those cards that are stored as incorrect.

***Timer***  
At the end of the game, report how much time it took to complete the game (in minutes and seconds).

***Report Card***  
At the end of the game, create a report card that would detail any answers that the user got wrong as well as how many tries each question took.

***Options for mixed datasets***  
At the beginning of the game, give options for choosing to study different subjects (have a dataset for one subject and another subject), as well as the option for mixing all of the subjects together.

***CYOE (Choose Your Own Extension)***  
Collaborate with instructors to personalize an extension for this project

## Evaluation Rubric

### Functional Expectations
* 4: Application fulfills all expectations of iterations 1 - 4 (at least one extension) with no bugs, crashes, or missing functionality. Game must be playable in the console.
* 3: Application fulfills expectations of iterations 1 - 3 with no bugs, crashes, or missing functionality.  Game must be playable in the console.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.
* 3: Application shows strong effort towards organization, content, and refactoring. Leverages JavaScript's [truthy/falsey principles](https://frontend.turing.edu/lessons/module-1/js-truthy-falsy-expressions.html) to write concise conditional logic. Does not use for loops.
* 2: Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.
* 1: Application generates syntax error or crashes during execution.

### Test-Driven Development
* 4: Application is broken into components, good use of own data, good happy and sad path testing. Has consistent use of beforeEach to DRY up tests.  Tests must be passing to be considered.  
* 3: Application is well tested, but some coverage might be lacking. Smaller data files are used for testing instead of the entire data file. Some use of beforeEach to DRY up tests. Tests must be passing to be considered.  
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements. No use of beforeEach to DRY up tests. Tests must be passing to be considered.  
* 1: Application does not demonstrate strong use of TDD. Tests must be passing to be considered.  

## Repeaters
- Must create a brand new repo and start the project fresh
- Should aim to complete at least one extension in addition to using a project board

# Evaluations / Submission

You'll have the opportunity to review code with your accountabilibuddy after submitting. Instructors will share group feedback.

Project is due at **9PM on Thursday of Week 1**.
