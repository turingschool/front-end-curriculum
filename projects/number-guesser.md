---
title: Number Guesser
---

## Overview
- Build a game where the user guesses a number between 1 and 100.
- Phases 1-3 = pushed to Github and on MASTER branch for evaluation.
- If you elect Phase 4, create a separate branch for that work.
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

<!-- Mobile layout:

![Number Guesser Mobile][mobile-base] -->

Color and font spec:

![Design Specs][design-specs]


[desktop-base]: /assets/images/projects/number-guesser/numberguesser1.png
[mobile-base]: /assets/images/projects/number-guesser/numberguesser2.png
[design-specs]: /assets/images/projects/number-guesser/numberguesser3.png

## Rubric

### Functional Expectations

|Novice             | Application meets all of the functional expectations in Phase One. |
|Advanced Beginner  | Application meets all of the functional expectations in Phase Two. |
|Proficient         | Application meets all of the functional expectations in Phase Three. |
|Exceptional        | You completed Phase Three and did something with Phase Four. |

<br>

------------------------------------------------------------------

## HTML

#### Accessibility

|Novice             | Knows what a semantic tag is and leverages the HTML5 structural tags to organize the content of their markup. |
|Advanced Beginner  | Leverages more precise semantic tags when applicable, and employs basic ARIA roles attributes for added clarity in structure, descriptive image alt attributes, title attributes for applicable anchor tags. |
|Proficient         | Employs detailed accessibility practices throughout markup, especially in forms and can speak to decisions made in accessibility choices as it relates to specific accessibility concerns. |
|Exceptional        | Can run markup through a variety of online accessibility tools and score well for content, color, screen readers, etc. |

#### Style

|Novice             | Crafts markup with proper indentation and opening/closing tags. |
|Advanced Beginner  | Crafts markup with proper and logical nesting. |
|Proficient         | Crafts lean, efficient markup that is easy to read and follow across naming conventions, structure, and solid formatting that follows industry best practices. |
|Exceptional        | Crafts lean, efficient markup and can speak directly to choices made to improve performance, including but not limited to, page load times, css/js optimizations, image optimizations. |

<br>

------------------------------------------------------------------

## CSS

#### Structure of Code

|Novice             | Can effectively target DOM elements via tag, class, and/or id and write CSS rules around each element to create the desired style. |
|Advanced Beginner  | Can cleanly and logically organize CSS rules according to similar categories (i.e. typography, layout, components), and then logically organize the remaining CSS rules based on flow of the markup. Organizes properties within rules alphabetically.|
|Proficient         | Leverages cascading styles and CSS specificity rules to create more complex targeting of elements in order to reduce, reuse, share styles across elements. Organizes properties within rules based upon industry standard principles of writing consistent, idiomatic CSS. |
|Exceptional        | Understands the performance implications surrounding cascading/specificity and crafts CSS that is mindful of reducing complexity and increasing performance.|

#### Implementation

|Novice             | Can articulate how the CSS box model works and apply it appropriately in a static layout.|
|Advanced Beginner  | Can articulate the differences between the approaches of absolute/relative positioning, flex-box, floats, and can appropriately apply the approaches to solve a variety of layout problems.|
|Proficient         | Develops layouts that work cross-browser, are responsive, and can logically defend the choices made in implementation approach for layout. |
|Exceptional        | Can articulate rationale for all parts of the CSS implementation (each line of code/CSS rule) specifically in regards to the balance of: structure of code, design integrity, performance.|

<br>

------------------------------------------------------------------

## JAVASCRIPT

#### Conditional Logic

|Novice             | Can understand when an expression evaluates to true or false.|
|Advanced Beginner  | Uses if/else statements, but there are multiple levels of nesting, which makes the paths through the code difficult to follow. Understands what is "truthy" and "falsey" in JavaScript.|
|Proficient         | Can use an if/esle statement to effectively handle multiple paths through the code. Writes if/else statements that only have one level of logic (no nesting). Can use logical operators instead of if/else statements where applicable.|
|Exceptional        | Can write conditional logic that is succinct and easy to read. Logic can handle all situations where user gives incorrect/unexpected input.|

#### Functions & Scope

|Novice             | Can write a simple function that takes at least one input argument.|
|Advanced Beginner  | Developer is comfortable using multiple arguments to pass data into functions. Understands how variables are scoped at the function level and global level. Functions are named descriptively. Knows when and why to use return in a function.|
|Proficient         | Functions have single responsibility. The entirety of the function is easy to read what functionality it contains. Function is generally shorter than 8 lines. Uses functions to eliminate repeated code. Comfortable refactoring any piece of code and extracting it to a function.|
|Exceptional        | Comfortable with using callback functions where applicable. Comfortable returning collections from functions (objects, arrays).|

<br>

------------------------------------------------------------------

#### DOM Manipulation

|Novice             | Can articulate what the DOM is and can effectively target elements in vanilla JavaScript via class, id, or tag.|
|Advanced Beginner  | Can add event listeners and create small functions that execute on events, can leverage the event object appropriately, and can articulate the what/why/how of jQuery.|
|Proficient         | Able to extract information, modify attributes, or append/prepend data in the DOM easily regardless of whether they are employing vanilla JavaScript or jQuery. Understands how to harness event bubbling.|
|Exceptional        | Understands the potential performance impact imposed by leveraging vanilla JavaScript vs. jQuery in their implementation and will make choices accordingly based on the problem to solve.|

#### Style

|Novice             | Can explain the choices made in the overall codebase and is able to articulate what every line of code is doing. Code is neatly formatted and easy to read with correct indentation.|
|Advanced Beginner  | Code shows strong effort toward organization, but suffers from long functions, unnecessary or poorly named variables, and requires significant refactoring. Application may have some duplication and minor bugs. |
|Proficient         | Code is logically organized, such that reader can easily follow the progression of the app because variable and function names are descriptive and follow a single responsibility approach. There are no major bugs and minimal duplication.|
|Exceptional        | Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application has exceptionally well-factored code with little or no duplication. |

<br>

------------------------------------------------------------------

## DESIGN

#### Comp Recreation

|Novice             | Can establish a complementary color palette, integrate font(s), and execute a handful of the large comp details. |
|Advanced Beginner  | Can accomplish about 50-75% of the large and small design details and can logically rework them on at least 1 breakpoint. |
|Proficient         | Developer captures the spirit and design intent of the comp. Some small details need polish to achieve a pixel-perfect match to the comp, but developer is clearly mindful of details and has made a conscious and careful effort to match the comp. Any design decisions left open to interpretation are handled thoughtfully and are well executed, but are more noticable and/or unintuative than they would be if the designer had provided the solution, or may not be totally seamless during screen-size transitions.|
|Exceptional        | Developer skillfully captures the spirit and design intent of all comp details. Execution is pixel-perfect and any design decisions left open to interpretation are solved intentionally, are as seamless as if the designer had provided the solution, are handled gracefully, and enhance the overall design.|

<br>

------------------------------------------------------------------
