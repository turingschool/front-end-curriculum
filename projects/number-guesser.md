---
title: Number Guesser
---

## Overview
- Build a game where the user guesses a number between 1 and 100.
- Build out phases 1-3 and push them to Github via the MASTER branch for evaluation.
- Phase 4 is optional. If you execute phase 4, create a separate branch for that work for evaluation.
- Include a README.md in your project that summarizes the project (this does not mean paste this project spec into your README)

## Phase One: Basic Requirements

The application should have the following user interface components:

#### Zero State:
- An input field for guessing the number
- A button for submitting a guess
- A button for clearing the input field
- A button that resets the game

#### User's Guess State:
- Display the user's most recent guess
- Display results and feedback:
  - If their guess is too high, it should display: "That is too high"
  - If their guess is too low, it should display: "That is too low"
  - If the guess is correct, it should display: "BOOM!"

#### Some things to consider:
- Input fields,regardless of their "type" attribute, store their values in strings. You'll need to use `parseInt()` to turn it back into a number.
- You'll need a strategy for [generating random numbers][rand].

[rand]: http://frontend.turing.io/independent-study/random-numbers.html

## Phase Two: More Better

- The input field should only accept numerical entries, within the defined min and max range
- The application should display an error message if the guess is not a number (e.g. `parseInt()` returns `NaN`).
- The application should display an error if the guess is outside of the range of possible answers.
- The clear button should be disabled if there is nothing to clear.
- The reset button should be disabled if there is nothing to reset.

## Phase Three: Level Up

- Add additional inputs that allow the user to specify the minimum/maximum range.
- Upon successful win, user's range is updated:
  - Every time the user wins a round increase the maximum number by 10.
  - Every time the user wins a round decrease the minimum number by 10.
  - Appropriate UI is incorporated such that user understands what is happening.

(**Pro-tip**: You'll need to adjust the input fields to accept the new minimum and maximum numbers.)

## Phase Four: Choose Your Own Adventure

You have liberty with the UI.

- Make it two player.
- Incorporate a scoring system based on how quickly user guesses correct number.
- Turn it into a game to teach basic arithmetic to kids.

#### Layout comps

Desktop layout:

![Number Guesser Desktop][desktop-base]

Color and font spec:

![Design Specs][design-specs]


[desktop-base]: /assets/images/projects/number-guesser/numberguesser1.png
[mobile-base]: /assets/images/projects/number-guesser/numberguesser2.png
[design-specs]: /assets/images/projects/number-guesser/numberguesser3.png

------------------------------------------------------------------

## Functional Expectations

[] Novice: Application meets all of the expectations of phase one.
[] Advanced Beginner: Application meets all of the expectations of phase two.
[] Proficient: Application meets all of the expectations of phase three.
[] Exceptional: Application meets all of the expectations of phase three and one or more of the extensions.

<br>

## COMP RECREATION / DESIGN
[] Novice
[] Advanced Beginner
[] Proficient
[] Exceptional

<br>

## HTML
[] Novice
[] Advanced Beginner
[] Proficient
[] Exceptional

<br>

##  CSS
[] Novice
[] Advanced Beginner
[] Proficient
[] Exceptional

<br>

##  JS/jQuery
[] Novice
[] Advanced Beginner
[] Proficient
[] Exceptional

<br>

## Git/Github
[] Novice
[] Advanced Beginner
[] Proficient
[] Exceptional

<br>

## Pairing
[] Novice
[] Advanced Beginner
[] Proficient
[] Exceptional

<br>

## Surprise and Delight (reminder: have fun!)
[] Unicorn Rainbows
[] Hot Fire
[] Sparkles
[] Magic
