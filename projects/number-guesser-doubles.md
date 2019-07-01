---
title: Number Guesser Doubles
---

## Learning Goals

* Develop your skills in writing:
  * semantic HTML
  * clean & organized CSS styles
  * DRY and organized JavaScript
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements

## Overview:
- Build a game where two users can guess a number between 1 and 100, with the ability
for the user to add custom ranges for increased difficulty of play
- Display the current guess of both players
- Display the final results of each match in card UI
  - each card should display the name of the winner
  - each card should display both player's names
  - each card should show how many guesses it took to guess the correct number
  - each card should have a **delete** button that removes the card from the page
  - **EXTENSION:** each card should display how long the match took
- Game should be fully responsive and usable down to screens/viewport width of 320px
- Project should be pushed to Github with a live site on Github Pages
- Care and attention to detail should be clearly demonstrated in execution of the comp
- Include a README.md in your project that summarizes the project (this does not mean paste this project spec into your README)

## Phase One: Basic Requirements

The application should have the following user interface components:

#### Zero State:
- Two inputs to set a custom range for the random number to fall within
- A button to update the custom range
- for **each player**:
  - An input field for guessing the number which can only accept numeric values
  - An input field for their name that can accept any alpha-numeric character
- One button that submits both players guesses
- A button for clearing the input field, which *does not* reset the random number
- One button that resets the game and generates a new random number
- The clear button should be disabled if there is nothing to clear.
- The reset button should be disabled if there is nothing to reset.

#### Players Guess State:
- Display both player's most recent guesses
- Display results and feedback for each players guess:
  - If their guess is too high, it should display the error message: "That's too high"
  - If their guess is too low, it should display the error message: "That's too low"
  - If the guess is correct, it should display the success message: "BOOM!" and create a new card to display results _(card details are outlined in Phase Three)_

#### Some things to consider:
- Input fields,regardless of their "type" attribute, store their values in strings. You'll need to use `parseInt()` to turn it back into a number.
- You'll need a strategy for [generating random numbers][rand].

[rand]: http://frontend.turing.io/independent-study/random-numbers.html

## Phase Two: More Better

- Range and guess input fields should only accept numerical entries
- The `Guess` fields should only accept values that fall within the defined min and max range.
- The application should display an error message if the value entered in the `Max Range` input is less than the value in the `Min Range` input
- The application should display an error message if the value entered in the `Min Range` input is greater than the value in the `Max Range` input
- The application should display an error message if either guess is not a number (e.g. `parseInt()` returns `NaN`).
- The application should display an error if either guess is outside of the range of possible answers.
- The application should display an error if the `Update` or `Submit Guess` buttons are clicked when their associated input fields do not have a value entered

## Phase Three: Level Up

Upon successful win, user's range is updated:
- Every time the user wins a round increase the maximum number by 10.
- Every time the user wins a round decrease the minimum number by 10.

Display final result of each match in card UI
- Both player name 1 and player name 2 should be displayed
- Winning player is indicated
- Total combined guess count of both players is displayed
- Delete button removes the card from page

## Phase Four: Level Up extensions (if you complete all of these, reach out to instructors for more goodies)

Work through these **in order**:

- Display how quickly user guesses correct number
- Include at least 3 different animations. Example: one for when a card gets created/deleted. Check out [this link of great examples for inspiration](https://uxplanet.org/functional-animation-in-ux-design-what-makes-a-good-transition-d6e7b4344e5e)
- Easter Egg: use a [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) to display some secret surprise for users -- have fun, get weird, be creative!!
- Have a **Clear All** button that removes all of the cards from the page.
- Have a sort button that organizes the game cards by the least amount of guesses to the greatest.
  - Incorporate in the UI which game has the **High Score**!


## Week 1 Check-ins
- Have all of phase 1 completed and start phase 2
  - Finished UI on desktop views
  - Logic for showing last guess
  - Should append a card when a user wins the game

## Submission Details

* Place submissions in the _appropriate tab_ of the [Submission Sheet](https://docs.google.com/spreadsheets/d/1CS4BipxFi1VPh5NJFsn0yoeDTQQL_yjwcIM0fccVOGc/edit?usp=sharing)

#### Layout comps

Desktop layout:

![Number Guesser Desktop][desktop-base]
![Number Guesser Desktop Error Messages][desktop-error-base]

Mobile layout:

![Number Guesser Mobile][mobile-base]

Color and font spec:

![Design Specs][design-specs]


[desktop-base]: /assets/images/projects/number-guesser/week2-numberguesser-01.jpg
[desktop-error-base]: /assets/images/projects/number-guesser/week2-numberguesser-02.jpg
[mobile-base]: /assets/images/projects/number-guesser/week2-numberguesser-03.jpg
[design-specs]: /assets/images/projects/number-guesser/week1-numberguesser-03.jpg

------------------------------------------------------------------

## Rubric

### Functional Expectations

* [ ] Novice: Application meets all of the expectations of phase one.
* [ ] Advanced Beginner: Application meets all of the expectations of phase two.
* [ ] Proficient: Application meets all of the expectations of phase three.
* [ ] Exceptional: Application adds three or more of the extensions from phase four.

------------------------------------------------------------------

### Comp Recreation

* [ ]  Novice - Application implements all major comp details accurately and correctly on desktop only (colors, fonts, icons, spacing, alignment, etc.)
* [ ]  Advanced Beginner - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.). Transitions between screen sizes may not be smooth.
* [ ]  Proficient - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* [ ]  Exceptional - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements that have been added match the visuals established in the comps.

------------------------------------------------------------------

### HTML - Style and Implementation

* [ ]  Novice - Crafts markup according to the [turing html style guide](https://github.com/turingschool-examples/html)
* [ ]  Advanced Beginner - Application adds to the above with HTML that incorporates semantic HTML elements and has a simple, clean HTML structure.
* [ ]  Proficient - Application adds to the above with markup that is easy to read and follows across naming conventions
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes and:
    * [ ]  Implements html that is accessible for folks with visual disabilities. Reference [this lesson plan](http://frontend.turing.io/lessons/floating/web-accessibility.html)

------------------------------------------------------------------

### CSS - Style and Implementation

* [ ]  Novice - Crafts CSS according to the [turing css style guide](https://github.com/turingschool-examples/css)
* [ ]  Advanced Beginner - Application adds organization for the whole stylesheet and within rules and
  * [ ] Has 5 or less media queries for responsiveness
* [ ]  Proficient - Applications adds to the above by removing repetitive rules and blocks of code according to the DRY principle and
  * [ ] Has 3 or less media queries for responsiveness
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes

------------------------------------------------------------------

### JAVASCRIPT - Style and Implementation

* [ ]  Novice - Crafts JS according to the [turing js style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
* [ ]  Advanced Beginner - Displays good understanding of arguments vs parameters and:
  * [ ] Uses function declarations over anonymous functions in event listeners
  * [ ] Uses if/else statements to handle multiple paths of logic/error handling
* [ ]  Proficient - Application uses event delegation correctly on dynamic elements and:
  * [ ] Keeps functions DRY with a focus on SRP and can call functions within functions
  * [ ] There are no nested if/else statements
* [ ]  Exceptional - Functions and code are well-refactored and show developer empathy and:
  * [ ] No global variables aside from query selectors, min & max, number of guesses, and start time
  * [ ] All functions are less than 10 lines
  * [ ] Uses logical operators instead of if/else statements where applicable

------------------------------------------------------------------

### Number Guesser Checkins (25 minutes each)

Take some time to go through your projects together.  The person with the closest birthday should present their project and the functionality of their app first.  Take some time to go through the code including HTML, CSS, and JavaScript.  Use the rubric above as a guide to get a better idea of where you both are at.  

#### Summary

At the end, take a few minutes to write some notes and update your plan for the remaining few days. What feedback did you get? What areas in your application would you like to improve on before your eval? List out atleast 3 goals that you want to accomplish and bring it up in your next DTR.
