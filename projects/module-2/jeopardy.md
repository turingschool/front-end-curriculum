---
title: Jeopardy
length: 2 weeks
tags: javascript, jquery, svg, mocha, testing
---

2 week paired project for FE Mod 2 (week 2-3)

## Dataset

Copy [this dataset](https://repl.it/@brittanystoroz/Jeopardy) into a `.js` file under the `src` directory of your repo.


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
  - 1st Round must have 4 categories, with 4 clues each, and point values ranging from 100 - 400
  - One clue in the first round must be a 'Daily Double'
  - 2nd Round must have 4 categories, with 4 clues each, and point values ranging from 200 - 800
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

