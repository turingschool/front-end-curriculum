---
title: Family Feud
length: 2 weeks
tags: javascript, jquery, svg, mocha, testing
---

2 week paired project for FE Mod 2 (week 2-3)

## Dataset

Copy [this dataset](https://repl.it/@brittanystoroz/FamilyFeud) into a `.js` file under the `src` directory of your repo.


## User Stories

These user stories may be worked on in any order that makes sense to your group.

``` 
Game play,
  - Must have 2 players
  - Must have 3 rounds - 3 rounds make up 1 game
  - Each player starts with a score of 0 and alternates turns responding to the current survey
  - Each player's score should be displayed by their name
  - In the first two rounds, players will take turns guessing responses to the survey. The round is over when all responses to the survey have been guessed
  - The third round should be a "Fast Money" round: each player gets 30 seconds to enter as many responses as they can think of
  - The winner is determined by the player with the highest total score at the end of 3 rounds
  - Winning score should be added to a leader board
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
