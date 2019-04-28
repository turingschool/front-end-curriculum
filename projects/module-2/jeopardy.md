---
title: Jeopardy
length: 2 weeks
tags: javascript, jquery, svg, mocha, testing
---

2 week paired project for FE Mod 2 (week 2-3)

## Dataset

Copy [this dataset](https://repl.it/@brittanystoroz/Jeopardy) into a `.js` file under the `src` directory of your repo.

## User Stories

These user stories should be worked on in the order presented, accounting for dependencies between stories.


***EPIC: Game Mechanics*** _#Game Mechanics_  
***EPIC: Core Application*** _#Core Application_  


*Issue title*  
User Story 1, Basic Game Mechanics

```
As a developer of the game, 
I must allow 3 players to play the game,
and I must allow 2 rounds of play for all players, plus one final round for all players.

* [ ] done

child of #Game Mechanics

child of #Core Application
```

*Issue title*  
User Story 2, Game Mechanics, Clues

```
As a developer of the game,
I must generate a list of clues for players to provide answers.
Each clue can only appear once per game.

My clue generator must be able to generate a "Daily Double" clue.
The "Daily Double" clue will allow the player to determine the amount to bid.

* [ ] done

child of #Game Mechanics

child of #Core Application
```

*Issue title*  
User Story 3, Game Mechanics, Board

```
As a developer of the game,
I need to provide a grid to display 4 categories.
Each category will have 4 unrevealed clues.
Each category can only appear once per game.

* [ ] done

child of #Game Mechanics

child of #Core Application
```

*Issue title*  
User Story 4, Beginning a Game

```
As a visitor,
When I visit the web page,
Then I see a button to start a new game.
Clicking this button starts a new game
Even if one was already in progress.

* [ ] done

child of #Game Mechanics

child of #Core Application

depends on #1
```

*Issue title*  
User Story 5, Setting Up a New Game

```
As a visitor,
When I begin a new game,
All scores are reset to 0,
And I am prompted to enter the names of three players.
The new game begins when I successfully enter three names.
I see scores of 0 next to each player's name.

* [ ] done

child of #Game Mechanics

child of #Core Application

depends on #4
```




















***EPIC: Playing a Round*** _#Playing A Round_

*Issue title*  


```
User Story 6, Playing a Round, Step 1

As a player of the game,
When a round begins,
A random puzzle word is chosen
A random wheel is generated
Each player is given a "round" score of $0
This score is not the same as their "game" score.

* [ ] done

child of #Playing A Round

child of #Core Application

depends on #5

depends on #3

depends on #2
```

*Issue title*  

```
User Story 7, Playing a Round, Step 2

As a player of the game,
When a round begins,
The UI hides all letters of the puzzle word/phrase
The UI shows the category of the puzzle
The UI shows clear indications of letters/spaces in the word/phrase

* [ ] done

child of #Playing A Round

child of #Core Application

depends on #6
```

*Issue title*  


```
User Story 8, Playing a Round, Step 3

As a player of the game,
Until the round is finished,
Each player is prompted to choose one of three actions:

- solve the puzzle
- spin the wheel
- buy a vowel

The UI should show an easy way to input this choice.

* [ ] done

child of #Playing A Round

child of #Core Application

depends on #7
```

*Issue title*  

```
User Story 9, Playing a Round, Step 4

As a player of the game,
The UI updates to show all letters and vowels guessed during the round.

* [ ] done

child of #Playing A Round

child of #Core Application

depends on #7

depends on #15

depends on #10
```
*Issue title*  


```
User Story 10, Buying a Vowel

As a player of the game,
If I choose to buy a vowel,
The UI allows me to enter a choice.
My choices are A, E, I, O, U only.

If there are remaining vowels to guess
My "round" score is reduced by $100.
If I guess a vowel that was already chosen,
I get to guess again

If there are no remaining vowels to guess,
My "round" score is not reduced by $100
And my turn is over.

* [ ] done

depends on #8
```





























***EPIC: Spinning the Wheel*** _#Spinning the Wheel_
*Issue title*  


```
User Story 11, Spin the Wheel, Step 1

As a player of the game,
If I choose to spin the wheel,
The UI will indicate that the wheel is spinning.
The section of the wheel I land on will determine my outcome.

* [ ] done

child of #Spinning the Wheel

child of #Core Application

depends on #8
```
*Issue title*  

```
User Story 12, Spin the Wheel, Losing a Turn

As a player of the game,
If I land on "Lose Your Turn" when I spin the wheel
Then my turn is over.

* [ ] done

child of #Spinning the Wheel

child of #Core Application

depends on #11
```
*Issue title*  

```
User Story 13, Spin the Wheel, Bankruptcy

As a player of the game,
If I land on "Bankruptcy" when I spin the wheel
Then my "round" score is reset to $0.
My "game" score is unaffected.
My turn is over.

* [ ] done

child of #Spinning the Wheel

child of #Core Application

depends on #11
```
*Issue title*  

```
User Story 14, Spin the Wheel, in a regular round, landing on money

As a player of the game,
If I land on a dollar amount when I spin the wheel
Then I am prompted by the UI to choose a consonant.

* [ ] done

child of #Spinning the Wheel

child of #Core Application

depends on #11
```
*Issue title*  

```
User Story 15, Spin the Wheel, choosing a valid consonant

As a player of the game,
When I choose a consonant,
If that consonant was previously chosen I am prompted to guess again.
If that consonant is a valid letter in the puzzle:

- each instance of that letter is revealed
- my "round" score increases by the money amount on the wheel multiplied
by the number of letters that were just revealed

My turn continues, and I can solve, buy a vowel, or spin the wheel again

* [ ] done

child of #Spinning the Wheel

child of #Core Application

depends on #11
```
*Issue title*  

```
User Story 16, Spin the Wheel, Choosing an invalid consonant

As a player of the game,
When I choose a consonant,
If that consonant is NOT a valid letter in the puzzle
Then my turn is over.

* [ ] done

child of #Spinning the Wheel

child of #Core Application

depends on #15
```

***EPIC: Solving the Puzzle*** _#Solving the Puzzle_

*Issue title*  

```
User Story 17, Solving the Puzzle, Step 1

As a player of the game,
If I choose to solve the puzzle,
The UI will give me an input field where I type my guess
My guess should not have to be CaSe-SeNsItiVe to be correct.

If I do not solve the puzzle correctly, my turn is over.

* [ ] done

child of #Solving the Puzzle

child of #Core Application

depends on #8
```
*Issue title*  

```
User Story 18, Solving the Puzzle, Step 2

As a player of the game,
If I choose to solve the puzzle,
And I solve the puzzle correctly,
The round is over
Any money I've accumulated in this round is added to my "game" score.
Money accumulated by other players in this round is discarded.

* [ ] done

child of #Solving the Puzzle

child of #Core Application

depends on #17
```

*EPIC: Bonus Round*
*Issue title*  


```
User Story 19, Solving the puzzle ends the round

As a developer of the game,
When a player successfully solves the puzzle,
All players see their accumulated "game" scores so far.
The UI prompts the user to start the next round.
If this was the 3rd round, a game winner is declared
And a bonus round begins.

* [ ] done

child of #Bonus Round

child of #Core Application

depends on #18
```
*Issue title*  


```
User Story 20, Picking a Winner

As a developer of the game,
When all 3 rounds have been finished,
The player with the highest accumulated "game" score is the winner.

* [ ] done

child of #Bonus Round

child of #Core Application

depends on #19
```
*Issue title*  

```
User Story 21, Bonus Round, Part 1

As a player of the game,
If I am declared the winner,
A new bonus round is started where I am the only player who participates.
A new puzzle is chosen that contains at least 6 consonants.
A new "bonus" wheel is generated.
The UI shows the puzzle the same as the start of a regular round.

* [ ] done

child of #Bonus Round

child of #Core Application

depends on #20
```
*Issue title*  

```
User Story 22, Bonus Round, Part 2

As the winning player of the game,
When the bonus round begins,
I spin the "bonus" wheel to select my prize.

* [ ] done

child of #Bonus Round

child of #Core Application

depends on #21
```
*Issue title*  

```
User Story 23, Bonus Round, Part 3

As the winning player of the game,
When I have spun the "bonus wheel",
I am prompted to choose 1 vowel and 3 consonants.
The consonants cannot repeat, they must all be different.
Correct letter choices are revealed on the UI
No accumulated money is updated.

* [ ] done

depends on #22
```
*Issue title*  

```
User Story 24, Bonus Round, Part 4

As the winning player of the game,
Once the UI reveals any correct letters,
I am prompted to solve the puzzle.
If I guess correctly, the prize is added to my "game" score
And the game is over.
My full accumulated "game" score is shown on the UI.

* [ ] done

child of #Bonus Round

child of #Core Application

depends on #23
```
*Issue title*  

```
User Story 25, Bonus Round, Part 5

As the winning player of the game,
When I am prompted to solve the puzzle,
If I guess incorrectly, the puzzle is revealed.
No additional money is added to my "game" score.
The game is over.
My full accumulated "game" score is shown on the UI.

* [ ] done

child of #Bonus Round

child of #Core Application

depends on #23
```

























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

