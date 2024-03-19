---
title: Tic Tac Toe
---

## Specification

Now that you've got the main foundations down to build out a frontend application, it's time to prove to yourself that you own those skills! You're going to be building a Tic Tac Toe game from scratch!

## Learning Goals

* Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Iterate through/filter DOM elements using for loops
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside "answer" to a logical challenge

## Solo Project Expectations

This project is an important step in demonstrating that you are ready to start Module 2. To ensure we can accurately assess this, it's important you meet the expectations:

- You are the only one who should type code - and no copy-pasting code from elsewhere!
- For any code that you didn't write entirely by yourself (mentor or rock supported), you should be able to explain the concepts used, and be able to delete it and re-write it yourself 
    - (we don't mean you should memorize everything, but that you should understand it so well that you could re-implement the concepts)
- No youtube videos or tutorials of programming Tic Tac Toe. If you have an opportunity and are tempted, do the right thing for YOUR learning and don't do it!
- Any peer-to-peer collaboration should be discussions about IDEAS and CONCEPTS, not coding together or sharing code.

We want to see YOUR work.

## Set Up & Submission

- Create a **private** repository and add your assigned instructor as a collaborator. (You cannot deploy private repositories to GitHub Pages; that's ok. If you'd like, at the end of the project, you can make your repo public in order to deploy to GH pages.)
- Create a planning document where you outline your anticipated progress through the project. You can choose any format for this planning doc: Google Docs, a Gist, [GitHub Projects](https://github.com/features/project-management/), [Trello](https://trello.com/en-US), etc. You can add anything to this doc that will help you stay organized throughout the completion of this project. At minimum, it should include a timeline for when you'd like to complete each piece of functionality for the project.

## Day One Deliverables
- **By EOD on Kick Off Day:** Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the links to your repo and the planning doc.

### Functionality

Here is a video demonstrating most functionality of the game:

<video controls width="100%">
    <source src="./assets/Tic Tac Toe.mp4" type="video/mp4">
</video>


There have been some changes to this project - so until we can get a new video uploaded, please refer to the bullet points below to understand the functional expectations of the project.

- The top displays which player’s turn it is
- They can only place their token in an empty square
- Attempting to place their token on a square that’s already occupied will not work, and it remains their turn
- Once they place their token, it becomes the other player’s turn (the banner updates to communicate this)
- A player can win by connecting 3 horizontally, vertically, or diagonally.
When a win occurs
  - The top banner changes to declare the winner
  - The dom updates to display how many wins the player has in total
  - The game RESTARTS ITSELF after a brief pause, (long enough that the winner message can be read before resetting)
  - The player who didn’t begin the previous game now is the first player to go in the new game
- A draw can occur, in which case:
  - The top banner declares a draw
  - Neither player’s win count increases or decreases
  - The game restarts after a brief pause, with the opposite player beginning the game (just like when a game restarts after a player wins)

**In this project, we will not be providing detailed iterations. We want you to exercise your skills in planning out work!**

Notes:
* A timeout is used after a completed game to reset the board.
* No need to match colors or icons, but the overall layout should be the same. You can get as creative as you would like with your Tic Tac Toe design!
* You can simply use emoji instead of actual icons (the video demo above just used the ⭐ and ❤️ emoji!)

### Architecture

Your entire application will consist of one HTML file, one CSS file and one JavaScript file.

Your `main.js` file should hold your game's logic and DOM related JavaScript.  
It's best to keep this file organized with the logic organized separately from the DOM related JavaScript.

  * Your game logic methods must include, _but are not limited to_:
    1. A function that creates the objects that store each players' information - properties should include: `id` (ex: `'one'`), `token` (ex: `'⭐️'`), `wins` (ex: `0`)
    2. A function called `increaseWins` - increases the count of a player's wins (should work for either player)
    3. A function that keeps track of the data for the game board
    4. A function that keeps track of which player's turn it currently is
    5. A function that checks the game board data for win conditions
    6. A function that detects when a game is a draw (no one has won)
    7. A function that resets the game board's data to begin a new game
  * Your DOM related JavaScript will include:
    1. Query selectors
    2. Function(s) to display the game board and user data
    3. Event listeners

As an *optional extension* you *could* choose to keep your DOM related JavaScript in a separate JS file altogether.  This is **NOT** a requirement or expectation of this project.  If you finish with extra time and want to try refactoring your code to pull the DOM related JavaScript into a `domUpdates.js` file, be sure to do so on a branch so you aren't breaking your finished, working code while you play with it. 

### Data Model

In a game like Tic Tac Toe, it is tempting to manipulate the DOM first. Remember that the game logic exists exclusively in the data model. The DOM simply reflects/displays that data model.

### Suggested Iterations

This workflow is not required, but will help you meet the overall requirements of the project.

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
2. Create the functions that describe/update the players and their data
3. Create the functions that describe/update the game board and gameplay
4. Reflect: without thinking about the DOM, could you call all the necessary functions that a game would need in order to function? Would your data update properly? Would your game be able to know when someone has won? etc
5. Create central game board on the DOM and connect it to the game's data
6. Display each player's data in the sidebars
7. Connect the data model to the DOM - ensure that the data model updates based on user interaction
8. Automatically reset the game board to allow for a new game to be played after the previous game is won
9. Extension: Persist player data using local storage (number of wins should persist across page refreshes)
10. Extension: Refactor your code to organized your game logic and DOM related JS separately in 2 different JS files - `main.js` and `domUpdates.js`

---

# Notes on Project Feedback

The rubric below serves as a guide for both **students** and **instructors**. 

**Students:**
- It should be used as a reference throughout the project to keep on track and guide learning.
- It should also be used by students to self-assess their work.

**Instructors:**
- It should be used to evaluate the project at its final due date/time.
- It should be a guide to provide relevant feedback to students so they can grow and improve in the areas that need deeper understanding.

### Final Project as Showcase

The evaluation will provide feedback by answering the only important question:

**Does the project demonstrate student understanding of the learning goals & concepts of this module?**

This project will answer that question, being marked as **YES**, **NOT YET**, and **WOW**. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

The overall project outcome (yes, not yet, wow) is determined by "averaging" each section's outcome. You can think of a "yes" being worth a  1, a "not yet" being worth a 0, and a "wow" being worth a 2. 

An average that is above 0.5 is considered a yes - a passing project that demonstrates good student understanding! An average of 1+ is considered a wow. An average of 0.5 or below is considered a not yet - a project that indicates that the concepts have not been fully understood (see note in the section below).

<section class="answer">
### A important note about the possible outcomes

**Yes** indicates that the student/team is ON TRACK in this area! YES you showed us you understand the concept! 
- The student/team demonstrates a good understanding of the concept

**Not Yet** indicates that the student/team is BEHIND in this area - you showed us that you don't yet understand the concept
- The student/team demonstrates misconceptions or confusion around the topic
- Student/team should prioritize this concept in their studying and practice
- ❗️ An overall "not yet" on this project will mean that the student will need to repeat the module! ❗️

**Wow** indicates that the student/team did extra work to teach themselves a new concept, or to achieve a deep & nuanced understanding of a concept
- This is not an outcome to prioritize achieving
- "Wow" should not come at the expense of another concept
- "Wow" often does not look like extra features, but instead looks like thoughtful refactoring and polish 💅
</section>

## Rubric

This project has 4 evaluated concepts.  Please note that the rubric categories are **not** weighted equally. We will be using the following weights in order to determine your final score:

* **Functionality**: 1/3 of final score
* **JavaScript**: 1/3 of final score
* **HTML**: 1/6 of final score
* **CSS**: 1/6 of final score

Here is what the final score means in terms of completing the module:

* **Wow:** Student will complete module if prior project work, attendance, and final assessment corroborate readiness
* **Yes:** Student will complete module if prior project work, attendance, and final assessment corroborate readiness
* **Not Yet** Student needs more time with concepts and work covered in module

**Please note that a passing project must include a fully playable game.**

<section class="note">
### Note about the below criteria

Competency & understanding of these concepts can be demonstrated in many ways. **The following examples are not checklists to complete!** They are illustrations to guide you as you develop this project and showcase your learning.
</section>

---

### Functional Expectations

As mentioned above, functionality does have more weight in this final project in order to demonstrate proficiency across the other criteria of the rubric.  However, you should not pursue additional functionality at the expense of code quality.  Well-refactored, thoughtful code is better than sloppy extra features.

<section class="answer">
### Functionality competency examples

💫ON TRACK💫 can look like:
- The user is able to play an entire game successfully (win, draw, display player data updates).

✨WOW✨ can look like:

- Application is fully complete (matches all functionality from demo without bugs) and implements additional functionality devised by the student, such as player data persisting across page refreshes, or allowing a player to choose their own emoji icon, etc.
</section>

<section class="answer">
### Javascript

💫ON TRACK💫 can look like:
- Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
- No nested if/else statements or for loops.
- Functions are DRY and adhere to the Single Responsibility Principle (SRP)
- Global variables are thoughtfully created, with a clear understanding demonstrated as to what needs to be global and what can be local
- The application correctly implements a data model to describe the player and game data, including all required methods. The data model is kept up to date when players interact with the DOM

✨WOW✨ can look like:
- Changes to the DOM only happen after the Data Model has been updated.  The Data Model is then used to update the DOM.
- Functions make use of arguments and parameters to be dynamic and reusable where possible without overengineering.
- Demonstrates efforts towards making functions pure when possible. *Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.*
- Bracket notation is utilized effectively to make accessing properties of class instances more dynamic.
</section>

<section class="answer">
### HTML

💫ON TRACK💫 can look like:
- Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)
- Application utilizes consistent naming for HTML classes and IDs, and follows suggested conventions. _Example: classes should be named using kebab-case, ids should be used sparingly_
- Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). If `<div>` or `<span>` elements are used, they are only for styling purposes.

✨WOW✨ can look like:
- Developers use [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes. _Note: If going this route, document it in your README and let your project manager know which naming convention will be used._
- Application fully implements HTML that is accessible for individuals with visual disabilities. _Note: This will be checked using the Chrome Extension [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) audit tool, and 0 errors & 0 contrast errors are expected._
</section>

<section class="answer">
### CSS

💫ON TRACK💫 can look like:
- Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)
- Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.
- CSS includes several examples of using a class to apply a styling rule block to multiple elements.
- The design of the page is cohesive and ensures an intuitive user experience. Any user could navigate the application without any guidance from the developer.

✨WOW✨ can look like:
- CSS is DRY, utilizing classes/rules to cut down on repetitive styles.
- Microinteractions such as hover states and animations have been thoughtfully added to improve the user experience.
- Design is responsive across small, medium and large breakpoints.
</section>

------------------------------------------------------------------

### Minimum Professionalism Expectations
- Commits are atomic and frequent, effectively documenting the evolution/progression of the application
- Developer uses PRs from feature branches before adding new code to the main branch.
- The README is formatted well and gives new contributors and employers sufficient context about the project:
  - Overview of project and goals, technologies used, your code architecture, future features, challenges, wins, and any other reflections
  - Setup instructions
  - Screenshots or video of your functioning app