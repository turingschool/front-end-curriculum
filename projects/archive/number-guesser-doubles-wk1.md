---
title: Number Guesser Doubles - Week 1
---

## Overview: Week 1
- Build a game where a user can guess a number between 1 and 100, with the ability for the user to add custom ranges for increased difficulty of play
- Project should be pushed to Github with a live site on Github Pages
- Care and attention to detail should be clearly demonstrated in execution of the comp
- Include a README.md in your project that summarizes the project (this does not mean paste this project spec into your README)

##### NOTE: work to have the functionality outlined in this project spec completed before the Week 2 Spec/Additions is kicked off at the end of the week.

## Phase One: Basic Requirements

The application should have the following user interface components:

#### Zero State:
- Two inputs to set a custom range for the random number to fall within
- A button to update the custom range
- An input field for guessing the number
- A button for submitting a guess
- A button for clearing the input field, which *does not* reset the random number
- A button that resets the game and generates a new random number

#### User's Guess State:
- Display the user's most recent guess
- Display results and feedback:
  - If their guess is too high, it should display the error message: "Sorry, that is too high"
  - If their guess is too low, it should display the error message: "Sorry, that is too low"
  - If the guess is correct, it should display the success message: "BOOM!"

#### Some things to consider:
- Input fields,regardless of their "type" attribute, store their values in strings. You'll need to use `parseInt()` to turn it back into a number.
- You'll need a strategy for [generating random numbers][rand].

[rand]: http://frontend.turing.edu/independent-study/random-numbers.html

## Phase Two: More Better

- All input fields should only accept numerical entries
- The `Guess` field should only accept values that fall within the defined min and max range.
- The application should display an error message if the value entered in the `Max Range` input is less than the value in the `Min Range` input
- The application should display an error message if the value entered in the `Min Range` input is greater than the value in the `Max Range` input
- The application should display an error message if the guess is not a number (e.g. `parseInt()` returns `NaN`).
- The application should display an error if the guess is outside of the range of possible answers.
- The application should display an error if the `Update` or `Submit Guess` buttons are clicked then their associated input fields do not have a value entered
- The clear button should be disabled if there is nothing to clear.
- The reset button should be disabled if there is nothing to reset.

## Phase Three: Level Up

- Upon successful win, user's range is updated:
  - Every time the user wins a round increase the maximum number by 10.
  - Every time the user wins a round decrease the minimum number by 10.
- OPTIONAL EXTENSION: Incorporate a scoring system based on how quickly user guesses correct number (NOTE: this may take some UI tweaks to incorporate -- make sure you're honoring the comp and visual patterns that already exist!)

#### Layout comps

Desktop layout:

![Number Guesser Desktop][desktop-base]
![Number Guesser Desktop Error Messages][desktop-error-base]

Color and font spec:

![Design Specs][design-specs]


[desktop-base]: /assets/images/projects/number-guesser/week1-numberguesser-01.jpg
[desktop-error-base]: /assets/images/projects/number-guesser/week1-numberguesser-02.jpg
[design-specs]: /assets/images/projects/number-guesser/week1-numberguesser-03.jpg

------------------------------------------------------------------

# Scoring Rubric

Remember to [check out the Syllabus](http://frontend.turing.edu/lessons/module-1/syllabus-eval-progression.html) for more details on how we evaluate your progression!

## Functional Expectations

- Novice: Application meets most of the expectations of phase one _and_ execution of UI is somewhat unpolished.
- Advanced Beginner: Application meets all of the expectations of phase one _and_ execution of UI is somewhat unpolished but shows attention to detail.
- Proficient: Application meets all of the expectations of phase two _and_ demonstrates good execution and control of the UI.
- Exceptional: Application meets all of the expectations of phase two _and_ demonstrates exceptional execution and control of the UI.

<br>

## COMP RECREATION / DESIGN

- Novice
- Advanced Beginner
- Proficient
- Exceptional

<br>

## HTML

- Novice
- Advanced Beginner
- Proficient
- Exceptional

<br>

##  CSS

- Novice
- Advanced Beginner
- Proficient
- Exceptional

<br>

##  JS

- Novice
- Advanced Beginner
- Proficient
- Exceptional

<br>

## Git/Github

- Novice
- Advanced Beginner
- Proficient
- Exceptional

<br>


## Surprise and Delight (reminder: have fun!)

- Unicorn Rainbows
- Hot Fire
- Sparkles
- Magic
