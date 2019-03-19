---
title: Wheel of !Fortune
length: 2 weeks
tags: javascript, jquery, svg, mocha, testing
---

2 week paired project for FE Mod 2 (week 2-3)

## Dataset

Copy [this dataset](https://repl.it/@thatpamiam/WheelOfFortune) into a `.js` file under the `src` directory of your repo.


## User Stories

These user stories may be worked on in any order that makes sense to your pair.

``` 
Game play,
  - Must have 3 players
  - Must have 4 rounds - 4 rounds make up 1 game
  - The winner is determined by the player with the highest grand total score at the end of all rounds
  - Each player starts with a score/account of 0 at the start of every round
  - Each player's score should be displayed by their name
  - The player who solves the puzzle is the only one keeps all of the money from their account for the current round. This money is added to their grand total score
  - The player with the highest score after 4 Rounds will play in a Bonus Round with a Bonus Wheel.
```

```
Puzzle,
  - The game should have at least one bank of puzzles. One bank should be chosen at the start of the game
  - A word puzzle is randomly chosen at the start of every round
  - Each puzzle has a category (or class) (e.g. "phrase," "person," "things," etc)
  - Each puzzle is one or more words that is an instance of the category/class
  - Initially, the letters of the puzzle will be hidden
  - There will be clear indications in the UI to indicate hidden letters and spaces
  - The UI will keep track of what letters have already been guessed
  - The category for the puzzle will be displayed as a hint 
```

```
Wheel,
  - A new randomized wheel is chosen at the start of every round
  - Wheel must have at least six elements
  - An element can either be a positive whole dollar amount, a "Lose-a-turn", or a "Bankruptcy" element
  - The elements of a wheel are in a 'randomized' order
  - The Bonus Wheel elements can either be a special prize or a dollar amount.
```

```
As a player,
  I should be able to quit/start a new game at any time.
  
  I have three options when it is my turn:
  1) Solve the puzzle
    - If I guess correctly, my grand total score is increased by my current score and the round is over
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
  
  I will participate in the Bonus Round if I am the top player at the end of 4 rounds. I will be given a new puzzle with up to six consonants revealed. I can pick 1 vowel and 3 consonants before attempting to solve the puzzle.
    - If I guess correctly, I will win the prize or cash award from the bonus wheel and the money from my grand total account
    - If I guess incorrectly, I will win the money from the grand total account only. 
```