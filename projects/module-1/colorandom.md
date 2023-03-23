---
title: ColoRandom - Group
---

## Learning Goals

* Write semantic HTML and efficient CSS to form a usable UI
* Write clean, DRY JavaScript and leverage classes, creating and using an effective data model
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Refine your collaboration skills

## Overview

We will be building a site that generates color palettes for us. Similar to other sites like [coolors](https://coolors.co/app), we will present users with various random colors which they can choose to "save" (note: saved palettes will not persist across page refreshes). Users can "lock" a color, which will keep that color when a new palette is generated.

This project will give you and your team an opportunity to write HTML and CSS, and leverage JavaScript to both create your data model and interact with the DOM.

Additionally, as your first group project, this will give you a chance to continue to hone your team skills: communication, planning, proper git and GitHub workflow.

## Set Up

To begin, choose ONE TEAM MEMBER to do the following:

1. Create a Slack DM with you, all project teammates, and your assigned project manager.
2. Locally, create a new folder containing an empty `index.html` file, a blank `scripts.js` file, and an empty `styles.css` file.
3. Run `git init` in your terminal (make sure your working directory is your project folder).
4. Create an initial commit.
5. On GitHub, create a new repository. Follow the written instructions on GitHub to add the repo's remote to your local project, and push your initial commit up to GitHub.
6. Add all project partners to the repository as contributors.
7. If your repository is set to private, add your project manager as a collaborator as well.

Then, as a team:

* Have all team members clone down the repo.

## Day 1 Deliverables

**By EOD on Kick Off Day:** complete the following tasks:

* As a team, read the entire project spec and rubric
* As a team, complete [the DTR Form](https://docs.google.com/forms/d/e/1FAIpQLSche5cvtlYQ_SaBDqqoF3H9gFiy2p60AOPoUMbhgIHlg-vRlQ/viewform?usp=sf_link)
* Complete [this project submission form](https://docs.google.com/forms/d/1kW1JPMpZUhAjzIDnW_wDrGB8PtRDTIFh9ohpkd5h0xk/edit) to ensure your project manager has the following links:
  - your team's GitHub repo
  - the GitHub Pages deployed site
    - Instructions for deploying: Repo Settings >> Pages >> Select the `main` branch as your Source branch >> Save >> Send us the URL they give you in the pop up that says "Your site is ready to be published at [URL]"

## Progression

### Iteration 0 - Basic Layout

![iteration 0](./assets/colorandom/iteration0.png)

- When the page loads, we should see:
  -  a title
  -  5 colors labeled with their hex codes, hardcoded for now

You should be matching the comp closely. Act like you're a frontend dev on a team and this is the design you've been given to match. Details and spacing matter! 

Comp Details:
  - background color: #E7F1F1
  - font: [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins)

### Iteration 1 - Generating Random Palettes

![iteration 1](./assets/colorandom/iteration1.png)

- Add a button that matches the design above  
- When the page initially loads, is refreshed, or the button is clicked:  
  - 5 random and new colors should appear
  - the color's hex codes should appear below each color box
  - the current palette should be tracked somewhere in your Data Model and updated when a new palette is generated

Hint: Hex codes are 6 characters long, and each character is some value of 0-9 or A-F (ABCDEF0123456789). Don't look up how to generate a random hex code - challenge yourselves to use pseudocode to problem-solve through it. This is where the learning happens!

### Iteration 2 - Locking + Unlocking Colors

![iteration 2](./assets/colorandom/iteration2.png)

- When the page is initially loaded, all colors should have an unlocked icon in the bottom right corner
- When a user clicks on the unlocked icon, a locked icon should appear. The locked/unlocked icons should toggle back and forth as the user clicks them.
- When the `New Palette` button is clicked, only the unlocked colors should change. Locked colors should remain.
- When the palette is updated, your Data Model should be updated too

Note: [The locked and unlocked icons can be found here!](https://drive.google.com/drive/folders/1ZX31xVFdRAsLPzsL8G2_ujNQNXgFmKxD?usp=sharing)

### Iteration 3 - Saving Palettes

![iteration 3](./assets/colorandom/iteration3.png)

- Add a `Save Palette` button to match the design above
- Add a `Saved Palettes` section to match the design above
- When the page loads, there should be no saved palettes
- When the user clicks `Save Palette`:
  - the palette should be saved somewhere in your Data Model
  - the palette should show up in the saved palette section to match the design above
- A new Palette should automatically be created and displayed in the main part of the app

Note: Saved palettes do NOT need to persist on page load

### Iteration 4 - Deleting Saved Palettes

![iteration 4](./assets/colorandom/iteration4.png)

- Add a delete button next to each saved palette to match the design above
- When a saved palette's delete button is clicked:
  - the palette is removed from your Data Model
  - that palette is removed from the page

Note: [The delete icon can be found here!](https://drive.google.com/drive/folders/1ZX31xVFdRAsLPzsL8G2_ujNQNXgFmKxD?usp=sharing)

### Iteration 5 - Editing Saved Palettes

![iteration 5](./assets/colorandom/iteration5.png)

- When a user clicks on a saved palette, it should appear on the main part of the page
- From there, a user can change the palette by locking/unlocking colors and clicking `New Palette`
- If a user saves the updated palette, it should appear as a NEW saved palette. The previous saved palette (the one you were initially editing) should remain untouched in the saved palettes section.

### Optional Extensions - Getting fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

Options:
- Ensure that all saved palettes are unique.
- When a user tries to delete a saved palette, have them confirm that they really do want to delete it.
- Allow users to name their palettes when saving.
- Allow users to name their palettes when saving, and allow them to search their saved palettes by name.
- Create a way for users to adjust a color (look to [Coolors](https://coolors.co/app) for inspiration).
- Research hex codes to figure out how to programmatically generate random palettes that are cohesive and pleasant.

## Rubric

This project has 4 evaluated concepts:

- Professionalism
- Comp Recreation
- HTML & CSS
- JavaScript
- Functionality

<section class="note">
### Note about the below criteria

Competency & understanding of these concepts can be demonstrated in many ways. **The following examples are not checklists to complete!** They are illustrations to guide your team as you develop this project and continue your learning.
</section>

---

<section class="answer">
### Professionalism

- The team's norming document is taken seriously, with thoughtful reflections from all team members regarding their skills, learning goals, work styles, etc. 
- The work is distributed equitably; commit/code contributions are roughly even for each team member in the final product and throughout the process
- Branches are consistently used for individual features and commit messages are descriptive and concise
- Commits are atomic, documenting a single changeset (such as a new function being created, or a function being updated) and clearly demonstrates how the project evolved over time.
- PRs have clear, thorough descriptions and are consistently reviewed by other team members before work has been merged.
- README is formatted and gives new contributors and employers sufficient context about the project including setup instructions, deploy link (gh-pages), images or video of the functioning app, technologies used, reflections, future features, and other pertinent information.

✨WOW✨ can look like:
- The team holds regular standups and retros while also revisiting the norming document as better perspective is gained
- A [PR template](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository) is effectively used
</section>

<section class="answer">
### Comp Recreation

- Application implements all major comp details accurately and correctly on desktop (layout, spacing, alignment, etc)
- Careful attention was given to the little details like hover states.

✨WOW✨ can look like:
- Additional elements and animations have been added that match the visuals established in the comps.
- The design is responsive across multiple screen sizes including tablets and mobile devices.
</section>

<section class="answer">
### HTML & CSS

- Crafts CSS according to the [Turing CSS style guide](https://github.com/turingschool-examples/css)
- Crafts markup according to the [Turing HTML style guide](https://github.com/turingschool-examples/html)
- Application utilizes consistant naming for HTML classes and IDs, and follows suggested conventions.
- Application uses an appropriate amount of [HTML semantic elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure). If `<div>` elements are used, they are only for styling purposes.
- Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.
- Application utilizes data attributes to store information in the HTML

✨WOW✨ can look like:
- Developers use [BEM](http://getbem.com/), [SMACCS](http://smacss.com/), or another set of naming conventions for classes. _Note: If going this route, document it in your README and let your project manager know which naming convention will be used._
- Application fully implements HTML that is accessible for individuals with visual disabilities. _Note: This will be checked using the Chrome Extenstion [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) audit tool, and 0 errors & 0 contrast errors are expected._
</section>

<section class="note">
### Note about using the WAVE tool

To get this extension to work with local files, follow these steps:
- Install
- Right click the WAVE extension
- Click "Manage Extensions"
- Flip the "Allow access to file URLs" switch
- Success!
</section>

<section class="answer">
### Javascript

- Changes to the DOM only happen after the Data Model has been updated.  The Data Model is then used to update the DOM.
- No nested if/else statements or for loops.
- Functions are DRY and adhere to the Single Responsibility Prinicple (SRP).
- Event delegation is used correctly on dynamic elements like saved palettes.
- Global variables are thoughtfully created, with a clear understanding demonstrated as to what needs to be global and what can be local.
- Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)

✨WOW✨ can look like:
- Functions make use of arguments and parameters to be dynamic and reusable where possible without overengineering
- Bracket notation is utilized effectively to make accessing properties of class instances more dynamic.
- Demonstrates efforts towards making functions pure when possible. *Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.*
</section>

### Functional Expectations
Functionality is the least important piece of the rubric. It’s included because it is another benchmark to gauge proficiency (for example, we can’t grade your JS if there isn’t enough of it written!). However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:

* Code that completes iterations but is sloppy
* One or both team members do not understand every single line of code
* One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality

Well-refactored, thoughtful code is better than sloppy extra features.

<section class="answer">
### Functionality competency examples

- The application completes all of the expectations of Iteration 5 without bugs.

✨WOW✨ can look like:

- Iteration 5 and at least one extension are successfully implemented without bugs.
</section>

---

## Feedback

A few days after the due date, your team will receive feedback about the project's average outcome (yes/not yet/wow), as well as each section's outcome. You will also receive a few pieces of team-specific feedback for each section (things done well, things to improve on for the current/next project).
