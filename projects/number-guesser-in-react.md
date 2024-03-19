---
title: Number Guesser in React
---

![Number Guesser UI](/assets/images/number-guesser.png)

The goal of this project is to help you practice for your assessment. This project should seem somewhat familiar with the added twist that you'll be doing it in React.

## Phase One: Basic Requirements

The application should have the following user interface elements:

- An input field for guessing the number
- A button for submitting a guess
- A button for clearing the input field
- A button that resets the game to its initial state
- An element that displays the users most recent guess
- An element that displays a message to user
  - If their guess is too high, it should display: "Sorry, that guess is too high. Try a lower number."
  - If their guess is too low, it should display: "Sorry, that guess is too low. Try a higher number."

Some things to think about:

- Input fields—regardless of their "type" attribute—store their values in strings. You'll need to use `parseInt()` to turn it back into a number.
- You'll need a strategy for [generating random numbers][rand].

[rand]: https://github.com/turingschool/try-turing/blob/gh-pages/_posts/2000-01-31-afternoon-projects.markdown#generating-random-numbers

## Phase Two: More Better

- The type attribute for the guess input should be "number".
  - It should have "min" and a "max" attributes equal to the minimum and maximum of the range of guesses (e.g. 1 and 100, respectively).
- The application should display an error message if the guess is not a number (e.g. `parseInt()` returns `NaN`).
- The application should display an error if the guess is outside of the range of possible answers.
- The clear button should be disabled if there is nothing to clear.
- The reset button should be disabled if there is nothing to reset.

## Phase Three: Level Up

- Add additional inputs that allows the user to specify what the minimum and maximum numbers should be.
- Every time the user wins a round increase the maximum number by 10.
- Every time the user wins a round decrease the minimum number by 10.

(**Pro-tip**: You'll need to adjust the input fields to accept the new minimum and maximum numbers.)

## Rubric

### Functional Expectations

- 4: Application meets all of the functional expectations in Phase Three
- 3: Application meets all of the functional expectations in Phase Two
- 2: Application meets all of the functional expectations in Phase One
- 1: Application does not meet the requirements in Phase One

### Fundamental JavaScript/React Style

- 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring
- 3: Application shows strong effort towards organization, content, and refactoring
- 2: Application runs but the code has long functions, unnecessary or poorly named variables, and needs significant refactoring
- 1: Application generates syntax error or crashes during execution
