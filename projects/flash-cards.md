---
title: Flash Cards
length: 1 week
tags: javascript, oop, mocha, testing
---

1 week solo project for FE Mod 1 (Week 1)

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

There are additional notes in the README about the logic that is provided to you (utils.js) for finishing Iteration 3. Be sure to read through the README before you start coding - for this starter kit to work correctly, it has some underlying assumptions of where files live. 

## README

Your README should include the following, in this order:

- Abstract at the top (A sentence or two describing the project)
- A GIF of the working application
- Install/Setup instructions

# Iterations

## Iteration 1: 

***Cards***

- A `Card` represents a single flashcard
- Each card has an id, a question, possible answers, and a correct answer

For example: 

```js
const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
````

***Turns***

- Your `Turn` class should meet the following requirements:
  - Instantiated with two arguments - a string (that represents a user's guess to the question), and a `Card` object for the current card in play.
  - `returnGuess`: method that returns the guess
  - `returnCard`: method that returns the `Card`
  - `evaluateGuess`: method that returns a boolean indicating if the user's guess matches the correct answer on the card
  - `giveFeedback` - method that returns either 'incorrect!' or 'correct!' based on whether the guess is correct or not.

For example: 

```js
const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const turn = new Turn('function', card);

turn.returnGuess()    // => 'pug'


turn.returnCard()     // => { id: 1,
                      //      question: 'What is Robbie\'s favorite animal',
                      //      answers: ['sea otter', 'pug', 'capybara'],
                      //      correctAnswer: 'sea otter' 
                      //    }


turn.evaluateGuess()  // => false


turn.fiveFeeback()    // => incorrect!
```

## Iteration 2:

***Deck***

Your `Deck` class should be initialized with an array of `Card` objects and should have an accompanying test file. It should know how many `Cards` are in the `Deck`.

For example:

```js
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

const deck = new Deck([card1, card2, card3]);

deck.countCards() // => 3
```

***Round***

Your `Round` class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The `currentCard` should be the first `Card` in the `Deck` (the array of `Cards`) at the start of the `Round`

- Your `Round` class should meet the following requirements:
  - `returnCurrentCard`: method that returns the current card being played
  - `takeTurn`: method that updates `turns` count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

    * When a guess is made, a new `Turn` instance is created.
    * `Turns` count is updated, regardless of whether the guess is correct or incorrect
    * The next card becomes current card
    * Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of `incorrectGuesses`
    * Feedback is returned regarding whether the guess is incorrect or correct

  - `calculatePercentCorrect`: method that calculates and returns the percentage of correct guesses
  - `endRound`: method that prints the following to the console: '****** Round over! ****** You answered <>% of the questions correctly!'

For example:

```js
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

const deck = new Deck([card1, card2, card3]);

const round = new Round(deck);

round.deck   // => [card1, card2, card3];

round.returnCurrentCard() // => { id: 1,
                          //      question: 'What is Robbie\'s favorite animal',
                          //      answers: ['sea otter', 'pug', 'capybara'],
                          //      correctAnswer: 'sea otter' 
                          //    }

round.turns // => 0

round.incorrectGuesses     // => []

round.takeTurn('capybara') // => 'correct!' 

round.takeTurn('spleen')   // => 'incorrect!'

round.turns // => 2

round.incorrectGuesses     // => [14]

round.currentCard()    // => { id: 12,
                       //      question: 'What is Travis\'s middle name?',
                       //      answers: ['Lex', 'William', 'Fitzgerald'],
                       //      correctAnswer: 'Fitzgerald' 
                       //    }

round.calculatePercentCorrect() // => 50 
```

## Iteration 3:

***Playing the Game***

Now that we have all of our classes and methods set up, we can connect this to the pre-existing code to make the game playable through the CLI (Command-Line-Interface).

***Game***

As you may have noticed, your `Game` class has some the `printMessage` ad `printQuestion` methods fleshed out already.  We are going to abandon testing for these methods - as the techniques for this type of testing are beyond the scope of this project.

- Your `Game` class should meet these other requirements:
  - Should keep track of the `currentRound`
  - `start`: method that starts everything
    * Creates `Cards`
    * Puts `Cards` in a `Deck`
    * Creates a new `Round` using the `Deck` 
    * invokes `printMessage` to display the message in the CLI
    * invokes `printQuestion` to kick off our helper functions that allow interaction via the CLI 

    _Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations._

For example: 

```js
game.currentRound // => Round {...} (The new Round object that has been instatiated)
```


## Iteration 4:

***Extensions***

_Note: These extensions may require modifying pre-existing code that was given to you_

*Build out another study/flashcards dataset.*

Create a new dataset that is structured similarily to our prototypes dataset. This dataset should be reviewing another fundamental topic and should live in the same `data.js` file.. Update your application so that once the first `Round` is over (and thus, the `Game` is over), a new `Round` starts with the new dataset that you've created

*More practice*

Add functionality so that a score of less than 90% will require the user to go through the entire dataset again

*Review incorrect answers*
Add functionality so that the `Round` (and thus, the `Game`) does not end after you've gone through all of the cards. The player should then be prompted to try to guess again, reviewing only those cards that are stored as incorrect

### CYOE (Choose Your Own Extension)

Collaborate with instructors to personalize an extension for this project

# Evaluation Rubric

The project will be assessed with the following guidelines:

### Functional Expectations

* 4: Application fulfills all expectations of iterations 1 - 5 with no bugs, crashes, or missing functionality *as well as* an extensions.
* 3: Application fulfills expectations of iterations 1 - 5 with no bugs, crashes, or missing functionality.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental Javascript & Style

* 4:  Application demonstrates excellent knowledge of Javascript syntax, style, and refactoring.
* 3:  Application shows strong effort towards organization, content, and refactoring.
* 2:  Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.
* 1:  Application generates syntax error or crashes during execution.


### Test-Driven Development

* 4: Application is broken into components which are well tested in both isolation and integration using appropriate data.
* 3: Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality.
* 2: Application makes some use of tests, but the coverage is insufficient given projet requirements.
* 1: Application does not demonstrate strong use of TDD.

### Encapsulation / Breaking Logic into Components

* 4: Application is expertly divided into logical components each with a clear, single responsibility.
* 3: Application effectively breaks logical components apart but breaks the principle of SRP.
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear.
* 1: Application logic shows poor decomposition with too much logic mashed together.

