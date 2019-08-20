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
- Include a `README.md` in your project that summarizes the project (this does not mean paste this project spec into your README)

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
- Input fields, regardless of their "type" attribute, store their values in strings. You'll need to use `parseInt()` to turn it back into a number.
- You'll need a strategy for generating random numbers.

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

Display final result of each match in card UI:
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


## Mid-Way Check-ins

- Have all of Phase 1 completed and start Phase 2
  - Finished UI on desktop views
  - Logic for showing last guess
  - Should append a card when a user wins the game

Being in the place noted above would put you on track for functionality completion. This does not mean that if you don't meet this benchmark, you _can't_ do it; and it also doesn't mean that you are _guaranteed_ to have a passing project if you do have this much functionality. Keep in mind that the rubric weighs the quality of your code much more than your functionality.

## Submission Details

* In your final PR, tag your assigned instructor. Also, make sure that the link to you GitHub Pages site is in the body of that PR.

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

Error Icon:
[Error Icon](https://drive.google.com/drive/folders/1xMuapAlmwswiz28L3SUGCma9AUHEQ-uD?usp=sharing)

------------------------------------------------------------------

## Rubric

### Professionalism

- **Exceptional:** Participated in at least one conversation on a PR that was constructive and supportive. *("Great Job" does not count. It should be a conversation where technical considerations/questions arose and moved the project forward or helped all teammates get on the same page about why/what has been/will be implemented).*
- **Proficient:** Pointed to two commits that you made, were able to explain your process, approach, and what the code you wrote does. You made no less than 40% of the commits, and no more than 60% of the commits. You were able to speak to how the event object is utilized for any given event handler.
- **Advanced Beginner:** You were able to explain how any given event listener and it's handler worked. You made no less than 35% of the commits, and no more than 65% of the commits.
- **Novice:** There was a large discrepancy in commits and/or you were not able to articulate what any given event listener and it's handler worked.

**NOTE:** In addition to this rubric, keep in mind that you will complete a survey regarding your partner's professionalism at the end of the project so we have a pulse on how things went. The results will be confidential. We ask:
  - Would you want to work with this teammate agin?
  - Did your teammate honor the commitments made in the DTR?
  - Did your teammate respect your time (show up on time, complete tasks when they said they would, was focused during pairing time, etc)?
  - Did your teammate respect your space & your learning (give you the chance to write some code on your own, give you time to soak in concepts if/when needed, didn't write code without you unless agreed, didn't interrupt you while talking, listened to your ideas and was open to implementing them, etc.)?

### Functional Expectations

* **Exceptional:** Application adds three or more of the extensions from phase four.
* **Proficient:** Application meets all of the expectations of phase three.
* **Advanced Beginner:** Application meets all of the expectations of phase two.
* **Novice:** Application meets all of the expectations of phase one.

------------------------------------------------------------------

### Comp Recreation

* **Exceptional:** Application implements all major comp details accurately and correctly on desktop **and** mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements that have been added match the visuals established in the comps.
* **Proficient:** Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* **Advanced Beginner:** Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.). Transitions between screen sizes may not be smooth.
* **Novice:** Application implements all major comp details accurately and correctly on **desktop only** (colors, fonts, icons, spacing, alignment, etc.)

------------------------------------------------------------------

### HTML - Style and Implementation

* **Exceptional:** Application fully implements HTML that is accessible for folks with visual disabilities. Reference [this lesson plan](http://frontend.turing.io/lessons/floating/aria-accessibility.html)
* **Proficient:** Application adds to the above with markup that is easy to read and follows across naming conventions
* **Advanced Beginner:** Application adds to the above with HTML that incorporates semantic HTML elements and has a simple, clean HTML structure.
* **Novice:** Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)

------------------------------------------------------------------

### CSS - Style and Implementation

* **Exceptional:** Application adds to the requirements of the Proficient category by using [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes
* **Proficient:** Applications adds to the above by removing repetitive rules and blocks of code according to the DRY principle and has 3 or less media queries for responsiveness
* **Advanced Beginner:** Application adds organization for the whole stylesheet and within rules and has 5 or less media queries for responsiveness
* **Novice:** Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)

------------------------------------------------------------------

### JavaScript - Style and Implementation

* **Exceptional:**
  - Functions and code are well-refactored and show developer empathy
  - There are no global variables aside from query selectors, `min` & `max`, `number of guesses`, and `start time`
  - All functions are less than 10 lines
  - Uses logical operators instead of if/else statements where applicable
* **Proficient:**
  * Application uses event delegation correctly on dynamic elements
  * Functions are [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) with a focus on [SRP](http://knnthvu.weebly.com/srp-and-dry.html)
  * There are no nested if/else statements
* **Advanced Beginner:**
  * All parameters are used in their respective functions
  * Uses function declarations over anonymous functions in event listeners
  * Uses if/else statements to handle multiple paths of logic/error handling
* **Novice:** Crafts JS according to the [Turing JS style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
