---
title: Rock Paper Scissors
---

## Specification

Now that you've got the main foundations down to build out a frontend application, it's time to prove to yourself that you own those skills! You're going to be building a Rock Paper Scissors game from scratch!

## Learning Goals

* Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside "answer" to a logical challenge

## Solo Project Expectations

This project is an important step in demonstrating you are ready to start Module 2. To ensure we can accurately assess that, it's important you meet the expectations:

- You are the only one who should type code - no copy-pasting code!
- For any code that you didn't write entirely by yourself (mentor or rock supported), you should be able delete it and re-write it yourself
- No youtube videos or tutorials of programming Rock Paper Scissors. If you have an opportunity and are tempted, do the right thing for YOUR learning and don't do it!
- Any peer-to-peer collaboration should be discussions about IDEAS, not coding together or sharing code.

We want to see YOUR work.

## Set Up & Submission

- Create a **private** repository and add your assigned instructor as a collaborator. (You cannot deploy private repositories to GitHub Pages; that's ok. If you'd like, at the end of the project, you can make your repo public in order to deploy to GH pages.)
- Create a planning document where you outline your anticipated progress through the project. You can choose any format for this planning doc: Google Docs, a Gist, [GitHub Projects](https://github.com/features/project-management/), [Trello](https://trello.com/en-US), etc. You can add anything to this doc that will help you stay organized throughout the completion of this project. At minimum, it should include a timeline for when you'd like to complete each piece of functionality for the project.

## Day One Deliverables
- **By EOD on Kick Off Day:** Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the links to your repo and the planning doc.

### Functionality

Here is a video demonstrating most functionality of the game:

<iframe width="840" height="473" src="https://www.youtube.com/embed/a2M5h1B9DQQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this project, we will not be providing detailed iterations. We want you to exercise your skills in planning out work!

**Required Features:**
* Both players' wins should be displayed.
* Both players' selected fighter icon should be displayed each round.
* Winner (or Draw) should be announced each round.
* A timeout is used after a completed round to reset the board.
* The overall layout should be the same but you can choose different colors and icons if you want to get creative with your with your Rock Paper Scissors design!
* This game is played by one user against a computer. The computer player should be another `player` object with the `name` of 'computer' and have the ability to make a random choice.
* You'll need to make two versions of Rock, Paper, Scissors - "classic" and some variation. The variation should include more than 3 options (the one in the video has 5). You can invent your own variation, or do some research on variations [here](https://www.wrpsa.com/different-variations-of-rock-paper-scissors/). *Make sure you communicate the rules to your user!*

**Classic Rock Paper Scissors Rules**
- Rock smashes scissors
- Scissors cuts paper
- Paper covers rock

**We have provided [some images](https://drive.google.com/drive/folders/1eWHo2qgTaBQGEhvamiK-74GIZXoXq4_c) to get you started, but feel free to find your own if you would like!**

### Architecture

Your entire application will consist of one HTML file, one CSS file and one JS file.

1. A `main.js` file that contains all of your JavaScript logic.
   * You'll need a `createPlayer` function, that should return an object with the following properties:
     - `name` (ex: `'Human'`), `token` (ex: `'👩🏻'`), `wins` (ex: `0`)

   * You'll need some of the following functions, but this is not an exhaustive list:
     - `saveWinsToStorage` - only necessary if you choose the localStorage extension
     - `retrieveWinsFromStorage` - only necessary if you choose the localStorage extension
     - `takeTurn`
   * A `createGame` function that should return a game object containing:
     - Two `Player` objects (`player1` and `player2`) 
     - A way to keep track of the data for the game board
     - A way to keep track of the selected game type
   * A separate function to check the game's board data for win conditions
   * A separate function to detect when a game is a draw (no one has won)
   * A separate function to reset the game's board to begin a new game


### Data Model

In a game like Rock Paper Scissors, it is tempting to manipulate the DOM first. Remember that the game logic exists exclusively in the data model. The DOM simply reflects/displays that data model.

### Suggested Iterations

This workflow is not required, but will help you meet the overall requirements of the project.

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
2. Create the `createPlayer` function
3. Create the `createGame` function
4. Make game fully playable without the DOM (manually updating the game data, etc, from your console) to force yourself to think data-model-first
5. Create central game board on the DOM
6. Connect game data model to the DOM
7. Display the player data in the sidebars
8. Automatically reset the game board to allow for a new game to be played after the previous game is won
9. *Optional Extension* - Persist player data using local storage (number of wins should persist across page refreshes)
10. As an *optional extension* you *could* choose to keep your DOM related JavaScript in a separate JS file altogether. This is **NOT** a requirement or expectation of this project. If you finish with extra time and want to try refactoring your code to pull the DOM related JavaScript into a `domUpdates.js` file, be sure to do so on a branch so you aren't breaking your finished, working code while you play with it.


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

This project will answer that question, being marked as **yes**, **not yet**, and **wow**. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

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

---

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

**Please note that a passing project must include a fully playable game that includes all the required features outlined above.**

<section class="note">
### Note about the below criteria

Competency & understanding of these concepts can be demonstrated in many ways. **With the exception of the functionality expectations, the following examples are not checklists to complete!** They are illustrations to guide you as you develop this project and showcase your learning.
</section>

---

### Functional Expectations

As mentioned above, functionality does have more weight in this final project in order to demonstrate proficiency across the other criteria of the rubric.  However, you should not pursue additional functionality at the expense of code quality.  Well-refactored, thoughtful code is better than sloppy extra features.

<section class="answer">
### Functionality competency examples

💫ON TRACK💫 can look like:
- Application is fully complete (matches all required features listed above without bugs).

✨WOW✨ can look like:

- Application is fully complete (matches all required features listed above without bugs) _and_ implements additional functionality devised by the student.
</section>

<section class="answer">
### Javascript

💫ON TRACK💫 can look like:
- Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
- No nested if/else statements or for loops.
- Functions are DRY and adhere to the Single Responsibility Prinicple (SRP)
- Global variables are thoughtfully created, with a clear understanding demonstrated as to what needs to be global and what can be local
- The application correctly implements a data model for the `player` and `game` objects, including all required methods. The data model is kept up to date.

✨WOW✨ can look like:
- Changes to the DOM only happen after the Data Model has been updated.  The Data Model is then used to update the DOM.
- Functions make use of arguments and parameters to be dynamic and reusable where possible without overengineering
- Bracket notation is utilized effectively to make accessing properties of objects more dynamic.
- Demonstrates efforts towards making functions pure when possible. Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.
</section>

<section class="answer">
### HTML

💫ON TRACK💫 can look like:
- Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)
- Application utilizes consistant naming for HTML classes and IDs, and follows suggested conventions. _Example: classes should be named using kabab-case, ids should be used sparingly_
- Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). If `<div>` or `<span>` elements are used, they are only for styling purposes.

✨WOW✨ can look like:
- Developers use [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes. _Note: If going this route, document it in your README and let your project manager know which naming convention will be used._
- Application fully implements HTML that is accessible for individuals with visual disabilities. _Note: This will be checked using the Chrome Extenstion [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) audit tool, and 0 errors & 0 contrast errors are expected._
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
