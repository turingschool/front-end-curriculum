---
title: Flash Cards
tags: javascript, mocha, chai, testing
---

## Goals and Objectives

- Contribute code to an partially constructed application
- Follow spec/prompts to make a working application
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD

In this project, you will write a program to simulate a set of flash cards through the command line! 😱 A user will be able to see the questions, take guesses, and see a final score at the end of the round.

In order to build good habits, we've broken the project up into small pieces to demonstrate functions that have a single responsibility.

Through each iteration, you should use TDD to drive implementation of your code.

# Requirements

## Initial Setup

For this project, you need to use this [Flash Cards Starter](https://github.com/turingschool-examples/flashcards-starter) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up (through running `npm install`), follow the instructions to verify it is setup correctly.  

<section class="note">
### Hot Tips 🔥
Try renaming your repo from "flashcards-starter" to "flashcards" (or whatever you'd like) when you clone it.  

```bash
git clone git@github.com:turingschool-examples/flashcards-starter.git flashcards
```

Please also note that there is logic provided to you (`util.js`) to make this game playable via the command line. You will not need to edit the `util.js` file. Completion of Iterations 1 and 2 are required before you are able to utilize the command-line interface to verify that your code is functioning properly. Prior to this, you should be using your tests to confirm functionality is working as you expect.
</section>

## Day-One Deliverable
By end of day on kick off day: Submit your GH Repo [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link)

## Testing

You should be using the prompts below to develop tests that will drive your implementation of code.

Your testing suite should test all of the functionality of the game that you have implemented. Remember to test all possible outcomes (happy/sad/etc). Ask yourself:  
  - What does the function return?  
  - Are there different possible outcomes to test for based on different arguments being passed in?

To DRY up your tests, consider researching and implementing Mocha's `beforeEach` hook in your test files.

<section class="note">
### A note on file structure

The way that the tests are structured currently, there is already a `card-test.js` file that matches with the `card.js` file.  While you could write all of your tests and functions in these two files, I would encourage creating other files such as a `deck-test.js` or a `round-test.js` as well to match that structure.  **Note: You may need to import functions into your implementation files to access them as needed.**
</section>

# Iterations

## Iteration 1:

***Cards***

- A `card` represents a single flashcard
- Each card has an id, a question, possible answers, and a correct answer

<section class="answer">
### For Example  

```js
const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');  // => {id: 1, question: 'What is Robbie\'s favorite animal', possibleAnswers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'}
```
</section>

***Turns***

A `turn` help evaluate if a guess to a flashcard question is correct or incorrect. This function helps evaluate a turn:
- `evaluateGuess(guess, correctAnswer)`: returns either `'incorrect!'` or `'correct!'` based on whether the guess is correct or not

<section class="answer">
### For Example  

```js
evaluateGuess(guess, correctAnswer);  // => incorrect! OR correct!
```
</section>

## Iteration 2:

***Deck***

Your `deck` should be created with an array of `card` objects. It should know how many `cards` are in the `deck`.

<section class="answer">
### For Example  

```js
const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

const deck = createDeck([card1, card2, card3]);

countCards(deck); // => 3
```
</section>

***Round***

Your `round` will be the object that organizes guesses and records if they are correct or incorrect.

- Your `round` object should meet the following requirements:
  - `deck` property that holds onto the `deck` object
  - `currentCard` property should start as the first `card` in the `deck`
  - `turns` property that starts as `0`
  - `incorrectGuesses` property that starts as an empty array and stores the incorrectly guessed cards during a round
- `takeTurn(guess, round)`: updates the `turns` count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  * When a guess is made:
  * The `turns` count is updated, regardless of whether the guess is correct or incorrect
  * The next card becomes current card
  * Guess is evaluated. Incorrect guesses will be stored (via card's the id) in an array of `incorrectGuesses`
  * Feedback is returned regarding whether the guess is incorrect or correct

- `calculatePercentCorrect(round)`: calculates and returns the percentage of correct guesses
- `endRound(round)`: prints the following to the console: '****** Round over! ****** You answered <>% of the questions correctly!'

<section class="answer">
### For Example  

```js
const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

const deck = createDeck([card1, card2, card3]);

const round = createRound(deck);

round.deck;  // => [card1, card2, card3];

round.currentCard; // => { id: 1,
                   //      question: 'What is Robbie\'s favorite animal',
                   //      answers: ['sea otter', 'pug', 'capybara'],
                   //      correctAnswer: 'sea otter'
                   //    }

round.turns; // => 0

round.incorrectGuesses;  // => []

takeTurn('sea otter', round); // => 'correct!'

takeTurn('spleen', round);  // => 'incorrect!'

round.turns;  // => 2

round.incorrectGuesses;  // => [14]

round.currentCard;  // => { id: 12,
            	      //      question: 'What is Travis\'s favorite stress reliever?',
            	      //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
            	      //      correctAnswer: 'playing with bubble wrap'
            	      //    }

calculatePercentCorrect(round);  // => 50
```
</section>

## Iteration 3:

***Playing the Game***

Now that we have all of our functions and objects set up, we can connect this to the pre-existing code to make the game playable through the CLI (Command-Line Interface).

***Game***

As you may have noticed, your `game` file has two functions fleshed out already: `printMessage` and `printQuestion`.  We are going to abandon testing for these functions - as the techniques for this type of testing are beyond the scope of this project.

- Your `game` should meet these other requirements:
  - `start()`: the function that starts everything
    * Passes `prototypeQuestions` into a `deck`
    * Creates a new `round` using the `deck`
    * Invokes `printMessage(deck)` to display the message in the CLI
    * Invokes `printQuestion(round)` to kick off our helper functions that allow interaction via the CLI
- Your game's `start()` function should be invoked to make the game playable in the console.
  - Look at the file being run when we want to start the game. Think about where you need to invoke your `start` function.


<section class="note">
### Implementation Note
The helper functions are all fleshed out and fit to work with functions that meet the requirements in the previous iterations.

You'll notice it difficult to test the game's `start` function. If you invoke it in your test file, it hangs the test suite by starting the game while running the tests. Sometimes as front end developers, we run into pieces of code that aren't possible, or worth it, to test.  In this case, instead of testing `start`, consider trying to extract what you can out of `start` and into a separate function, and test those functions on their own.
</section>

## Iteration 4:

Choose one or more of these extensions for this iteration.

<section class="note">
### Note

Solving some of these problems may require modifying pre-existing code that was given to you.
</section>

***Use a project board to guide your workflow***
Use a tool like GitHub projects or Trello to split up iteration items into small tasks.

***Build out another study/flashcards dataset***
Create a new dataset that is structured similarly to our prototypes dataset. This dataset should be reviewing another fundamental topic and should live in the same `data.js` file. Update your application so that once the first `round` is over (and thus, the `game` is over), a new `round` starts with the new dataset that you've created.

***More practice***   
Add functionality so that a score of less than 90% will require the user to go through the entire dataset again.

***Review incorrect answers***  
Add functionality so that the `round` (and thus, the `game`) does not end after you've gone through all of the cards. The player should then be prompted to try to guess again, reviewing only those cards that are stored as incorrect.

***Timer***  
At the end of the game, report how much time it took to complete the game (in minutes and seconds).

***Report Card***  
At the end of the game, create a report card that would detail any answers that the user got wrong as well as how many tries each question took.

***Options for mixed datasets***  
At the beginning of the game, give options for choosing to study different subjects (have a dataset for one subject and another subject), as well as the option for mixing all of the subjects together.

***CYOE (Choose Your Own Extension)***  
Collaborate with instructors to personalize an extension for this project

## README

Your README should include the following, in this order:

- Abstract at the top (A sentence or two describing the project)
- A GIF of the working application
- Technologies used
- Install/Setup instructions

## Rubric

For the rubric sections below, you will be scored as **Wow**, **Yes** or **Not Yet** depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstrate competency. These are just some examples. 

<section class="answer">
### Functional Expectations
* **Wow**: Application fulfills all requirements *as well as* an extension from iteration 4.
* Yes: Application fulfills all requirements of iterations 1-3 without bugs.
* Not Yet: Application crashes (game is not playable) or has missing functionality or bugs.
</section>

<section class="answer">
### JavaScript & Style / Functional Programming

On track looks like:
- Code is divided into logical components each with a clean, single responsibility
- Variables and functions are consistently and appropriately named
- Code leverages JavaScript's truthy/falsey principles
- Demonstrates efforts towards making functions pure when possible. *Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.*

**WOW Option**: Effectively implements one or more closures throughout project.  *Note: See Closures lesson on the Module 2 lessons page as a resource.*
</section>

<section class="answer">
### Testing

On track looks like:
- Application has a robust and thorough test suite that covers all functions.
- Test suite is organized (each function is tested in its own `it` block).
- All scenarios/outcomes/paths are tested for your functions, including happy and sad paths.
- Rather than using the production dataset, a small sample dataset is stored in its own file and used for testing.
  - Sample data has been crafted to create the scenarios needed for thorough testing.
- There are no failing/pending tests upon submission

**WOW Option**: mocha's `beforeEach` hook is used to DRY up test files
</section>

Project is due at **9PM on Thursday of Week 1**.
