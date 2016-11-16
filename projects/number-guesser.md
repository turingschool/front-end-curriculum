---
title: Number Guesser
---

Build a game where the user guesses a number between 1 and 100.
Phases 1-3 must be on your master branch. If you elect to incorporate Phase 4, it must be on its own branch.

## Phase One: Basic Requirements

The application should have the following user interface components:

Zero State:
- An input field for guessing the number
- A button for submitting a guess
- A button for clearing the input field
- A button that resets the game 

User's Guess:
- Display the user's most recent guess
- Display results and feedback: 
  - If their guess is too high, it should display: "That is too high"
  - If their guess is too low, it should display: "That is too low"
  - If the guess is correct, it should display: "BOOM!"

Some things to think about:

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

Mobile layout:

![Number Guesser Mobile][mobile-base]

Color and font spec:

![Design Specs][design-specs]


[desktop-base]: /assets/images/projects/number-guesser/numberguesser1.png
[mobile-base]: /assets/images/projects/number-guesser/numberguesser2.png
[design-specs]: /assets/images/projects/number-guesser/numberguesser3.png

## Rubric

### UX/UI Expectations

- 4: Application matches comp exactly. There are no omitted details. Any extensions are intuitive, well designed, easy to use, and in keeping with the visuals outlined in the comp. Virtually no major improvements are needed in the UX or UI.
- 3: Application shows strong effort towards matching the comp, but some details have been missed. Any extensions are simple, clean design, content organization, and well thought out experience and user interactions.
- 2: Application meets the basic spirit of the comp but overlooks many details. Extensions show questionable design decisions that negatively impact the overall UX/UI.
- 1: Application does not match the comp, is lacking in basic best practices, and user struggles to understand how to use it.

### Functional Expectations

- :sparkles: You completed through Phase Three and you did something with Phase Four
- 4: Application meets all of the functional expectations in Phase Three
- 3: Application meets all of the functional expectations in Phase Two
- 2: Application meets all of the functional expectations in Phase One
- 1: Application does not meet the requirements in Phase One

### Fundamental HTML

- 4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.
- 3:  Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.
- 2:  Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.
- 1:  Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

### Fundamental CSS

- 4: Application has exceptionally well-factored CSS with little or no duplication. There are zero instances where an instructor would recommend taking a different approach.
- 3:  Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS is doing.
- 2:  Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
- 1:  Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.

### Fundamental JavaScript

- 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and there are no areas of suggested improvement
- 3: Application shows strong effort towards organization, content, and proper syntax
- 2: Application runs but the code is confusing with unnecessary or poorly named variables, functions, and unclear organization, structure, and/or duplication
- 1: Application generates syntax error or crashes during execution
