---
title: Wheel of !Fortune
length: 2 weeks
tags: javascript, jquery, svg, mocha, testing
---

# Wheel of !Fortune

2 week paired project for FE Mod 2 (week 2-3)

## Background and Description

For this project you will learn object-oriented programming (OOP) principles by building the game Wheel of Fortune. This is an opportunity to work with classes to build a program at a larger scale than you have with previous projects. This is also an opportunity for you to build out a program based on user stories - which is more aligned to what you can expect to see working with product managers in a production environment.

Building software, at its core, is about solving problems. Generally speaking, the first step in finding a solution to the problem is to be sure that you have clearly identified the problem as well what features the solution must incorporate. From here, we can flesh out the _requirements_ that specify what our program should have. For the problem of building Wheel of Fortune, the rules of this game will serve as the requirements for the spec.

## Goals and Objectives

- Write a program from scratch
- Design and implement OOP patterns 
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Outline

### Week 1

|Day | Status| Deliverables |
|--- |---    |--- |
|*1* | Kick-off and exploration| What is OOP? Why is OOP useful? How is OOP used in games?|
|*2* | Understanding/Planning| Initialize repo with a README that includes a link to your pair's DTR, a description of the game, the basic rules, and a wireframe for your game|
|*3* | Understanding/Planning| Diagram for OOP design/classes due|
|*5* | Check-in| Pair-to-Pair feedback|

### Week 2

|Day | Status| Deliverables |
|--- |---    |--- |
|*8* | Check-in| Instructor pairing|
|*11* | Assessment| Formal Code Review or Class Code Review|

## Restrictions

You can use any of the following JavaScript libraries:

* [jQuery](http://jquery.com/)
* [Mocha](http://mochajs.org/)

(Other libraries may be used *only* with instructor approval.)

# Requirements

## Code Organization

You should use [inheritance](https://www.sitepoint.com/understanding-ecmascript-6-class-inheritance/) with your classes.
  - a parent class should have properties that might be shared by several other child classes
  - a parent class's properties and methods should be shared by all the child classes
  - a child classes should inherit those properties from the parent class

  Each class should have its own file with the filename capitalized. The class should be capitalized as well. Only code that is a part of this class should be in this file.


## Testing

You should be testing your the correctness of your code throughout your project. Each JavaScript file in your project should have its own test file. (e.g. Your `Wheel.js` class file should have a corresponding testing file called `Wheel-test.js`)

Your testing suite should test all of the functionality of the game, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

## User Stories

These user stories may be worked on in any order that makes sense to your pair.

``` 
Game play,
  - Must have 3 players
  - Must have 4 rounds - 4 rounds make up 1 game
  - The winner is determined by the player with the highest grand total score at the end all rounds
  - Each player starts with a score/account of 0 at the start of every round
  - Each player's score should be displayed by their name
  - At the end of a round, each player's score will be added to a grand total score.
```

```
Puzzle,
  - The game should have at least one bank of puzzles. One bank should be chosen at the start of the game
  - A word puzzle is randomly chosen at the start of every round
  - Initially, the letters of the puzzle will be hidden
  - There will be clear indications in the UI to indicate hidden letters and spaces
  - The UI will keep track of what letters have already been guessed
  - The category for the puzzle will be displayed as a hint 
  - Each puzzle has a category (or class) (e.g. "phrase," "person," "things," etc)
  - Each puzzle is one or more words that is an instance of the category/class
```

```
Wheel,
  - A wheel is chosen at the start of the game
  - Wheel must have at least six elements
  - An element can either be a positive whole dollar amount, a "Lose-a-turn", or a "Bankruptcy" element
  - The elements of a wheel are in a 'randomized' order
```

```
As a player,
  I should be able to quit/start a new game at any time.
  I have three options when it is my turn:
  1) Solve the puzzle
    - If I guess correctly, my grand total score is increased my current score and the round is over
    - If I guess incorrectly, my turn is over
  2) Spin the wheel
    - A random element will be chosen for my spin
    - If a bankrupt element is chosen, my score/account will be reset to 0
    - If a lose-a-turn element is chosen, my turn will end
    - If an element is chosen with a dollar amount, I will be prompted to choose a consonant
  3) Buy a vowel
    - The cost or buying a vowel is $100
    - I should be prompted to enter what vowel I would like to buy
    - $100 is subtracted from my score/account regardless of whether the vowel is part of the puzzle.
```

## Extensions

* Get your game hosted on GitHub pages
* Create AI players
* Write a blog post to publish on Medium that details your experience with implementing OOP designs in your game
* Choose your own extension (instructor approval)

# Rubric

