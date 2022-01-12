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

Notes:
* A timeout is used after a completed game to reset the board.
* No need to match colors or icons, but the overall layout should be the same. You can get as creative as you would like with your Rock Paper Scissors design!
* This game is played by one user against a computer. The computer player should be an instantiation of Player and have the ability to make a random choice.
* You'll need to make two versions of Rock, Paper, Scissors - "classic" and some variation. The variation should include more than 3 options (the one in the video has 5). You can invent your own variation, or do some research on variations [here](https://www.wrpsa.com/different-variations-of-rock-paper-scissors/). Make sure you communicate the rules to your user!

**Classic Rock Paper Scissors Rules**
- Rock smashes scissors
- Scissors cuts paper
- Paper covers rock

**We have provided [some images](https://drive.google.com/drive/folders/1eWHo2qgTaBQGEhvamiK-74GIZXoXq4_c) to get you started, but feel free to find your own if you would like!**

### Architecture

Your entire application will consist of one HTML page. You will have three JavaScript files:

1. A `player.js` file that contains a `Player` class.
   * `Player` methods must include, _but are not limited to_:
     - `constructor` - properties should include: `name` (ex: `'Human'`), `token` (ex: `'👩🏻'`), `wins` (ex: `0`)
     - `saveWinsToStorage` - only necessary if you choose the localStorage extension
     - `retrieveWinsFromStorage` - only necessary if you choose the localStorage extension
     - `takeTurn`
2. A `game.js` file that contains a Game class.
   * A `Game` should include:
     - Two `Player` instances
     - A way to keep track of the data for the game board
     - A way to keep track of the selected game type
     - A way to check the Game's board data for win conditions
     - A way to detect when a game is a draw (no one has won)
     - A way to reset the Game's board to begin a new game
3. A `main.js` file that contains all DOM related JavaScript

### Data Model

In a game like Rock Paper Scissors, it is tempting to manipulate the DOM first. Remember that the game logic exists exclusively in the data model. The DOM simply reflects/displays that data model.

### Suggested Iterations

This workflow is not required, but will help you meet the overall requirements of the project.

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
2. Create the Player class
3. Create the Game class
4. Make game fully playable without the DOM (manually updating the Game data, etc, from your console) to force yourself to think data-model-first
5. Create central game board on the DOM
6. Connect Game data model to the DOM
7. Display the Player data in the sidebars
8. Automatically reset the game board to allow for a new game to be played after the previous game is won
9. Extension - Persist Player data using local storage (number of wins should persist across page refreshes)

## Rubric

The rubric categories are **not** weighted equally. We will be using the following weights in order to determine your final score:

* **Functionality**: 1/3 of final score
* **JavaScript**: 1/3 of final score
* **HTML**: 1/6 of final score
* **CSS**: 1/6 of final score

Here is what the final score means in terms of completing the module:

* **4:** Student will complete module if prior project work, attendance, and final assessment corroborate readiness
* **3+:** Student will complete module if prior project work, attendance, and final assessment corroborate readiness
* **2+:** Student may complete module if prior project work, attendance, and final assessment corroborate readiness
* **<2:** Student needs more time with concepts and work covered in module

**Please note that a passing project must include a fully playable game.**

------------------------------------------------------------------

### Functional Expectations

* **4:** Application is fully complete (matches all functionality from demo, without bugs), and implements additional functionality devised by the student
* **3:** Application is fully complete (matches all functionality from demo)
* **2:** Able to play an entire game successfully (win, draw, displayed player data updates)
* **1:** Unable to play an entire game successfully

------------------------------------------------------------------

### JavaScript

* **4:**

  - Code is well refactored, DRY, follows SRP, and demonstrates developer empathy. There are multiple examples of reusable functions. There are no instances of repetitive code.
  - No global variables are used aside from query selectors and instance of `Game`. If you feel you need more because you are building out additional functionality that requires a global variable, please check in with an instructor.

* **3:**

  - The separation of data model logic and DOM logic is clear. All DOM manipulation is handled exclusively in `main.js`.
  - The application correctly implements a data model for the `Player` and `Game` classes, including all required methods. The data model is kept up to date.
  - Developer demonstrates understanding and ability to refactor code by having at least 1 example of DRY code that was intentionally reused.
  - SRP is evidenced by clear, concise function names, and most functions only do what the name describes.

* **2:**

  - Some arguments and parameters are used to limit global variables and repetitive code.
  - The event object is used correctly, and is only accepted as a parameter when the function calls on it directly.
  - Function and variable names generally describe their role in the program.
  - Function declarations are used over anonymous functions in event listeners, unless data needs to be passed in. There is no logic present in an event listener.

* **1:**

  - Style and syntax meets the criteria of the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript).

------------------------------------------------------------------

### HTML

* **4:**

  - Developers use [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes.
  - Application fully implements HTML that is accessible for individuals with visual disabilities. Note: Typically, this is checked using Chrome DevTools [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit tool, but unfortunately, Lighthouse does only work if your site is hosted. Instead, we will be using an accessibility extension called [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh). We will be looking for 0 Errors and 0 Contrast Errors. To get WAVE to work on local files, you'll need to do these steps after installing it:
    - Right click the WAVE extension
    - Click "Manage Extensions"
    - Flip the "Allow access to file URLs" switch
    - Success!

* **3:**

  - Application utilizes consistent naming for HTML classes and IDs, and follows suggested conventions. Example: classes should be named using kabab-case, ids should be used sparingly

* **2:**

  - Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). Semantic elements like `<button>`, `<li>`, etc. are used instead of `<div>` or `<span>`. If `<div>` or `<span` elements are used, they are only for styling purposes.

* **1:**

  - Style and syntax meets the criteria of the [Turing HTML Style Guide](https://github.com/turingschool-examples/html).

------------------------------------------------------------------

### CSS

* **4:**

  - CSS is DRY, utilizing classes/rules to cut down on repetitive styles.
  - Microinteractions such as hover states and animations have been thoughtfully added to improve the user experience.
  - Design is responsive across small, medium and large breakpoints.

* **3:**

  - CSS includes several examples of using a class to apply a styling rule block to multiple elements.
  - The design of the page is cohesive and ensures an intuitive user experience. Any user could navigate the application without any guidance from the developer.

* **2:**

  - Developer makes attempts to write DRY CSS by having at least 1 example of using a class to apply a styling rule block to multiple elements.
  - There is no use of the `!important` tag. One exception may be for a `.hidden` class.
  - The design of the page does not match the overall layout provided in the comp.

* **1:**

  - Style and syntax meets the criteria of the [Turing JS Style Guide](https://github.com/turingschool-examples/css).

------------------------------------------------------------------

### Minimum Professionalism Expectations
  * Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  * Developer uses PRs from feature branches before adding new code to the main branch.
  * The README is formatted well and contains:
      * Overview of project and goals
      * Overview of technologies used, your code architecture, challenges, wins, and any other reflections
      * Screenshots/gifs of your app
