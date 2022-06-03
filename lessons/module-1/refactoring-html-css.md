---
title: "Refactoring: HTML & CSS"
length: 90
tags: html, css, refacoring
---

## Learning Goals

* Justify the importance of consistent formatting and convention in a code base
* Create a checklist to ensure that our HTML and CSS code is accessible for our users and other developers

## Vocabulary

- `HTML` HyperText Markup Language
- `CSS` Cascading Style Sheet
- `Refactoring` Restructuring code without changing or adding to its external behavior and functionality

<section class="call-to-action">
### Warm Up

Looking at the definition of refactoring above, why do you think refactoring code is important? What do you think might be challenging about it?
</section>

<section class="call-to-action">
### Be the Instructor

* Go to [this repo](https://github.com/kaylaewood/number-guesser-refactor) and follow the instructions for cloning it down.
* Spend a few minutes looking at the **HTML** and **CSS** files (there is no need to look at any other files!).
* As a group, decide on a score for this project given the rubrics below. You should decide on one HTML score and one CSS score.
* After deciding on scores, start making a list of code that you would refactor if this were your project (again, HTML and CSS only!).
* Be prepared to share and defend your rubric score and share ideas for refactoring with the whole group.
</section>

<section class="answer">

### HTML Rubric
✅On Track✅
- Crafts markup according to the Turing HTML style guide
- Application utilizes consistent naming for HTML classes and IDs, and follows suggested conventions. Example: classes should be named using kabab-case, ids should be used sparingly
- Application uses an appropriate amount of HTML semantic elements. If <div> or <span> elements are used, they are only for styling purposes.

✨WOW✨ can look like:

- Developers use BEM, SMACCS, or another set of naming conventions for classes. Note: If going this route, document it in your README and let your project manager know which naming convention will be used.
- Application fully implements HTML that is accessible for individuals with visual disabilities. Note: This will be checked using the Chrome Extenstion WAVE audit tool, and 0 errors & 0 contrast errors are expected.
</section>

<section class="answer">

### CSS Rubric

✅On Track✅
- Crafts CSS according to the Turing CSS style guide
- Application utilizes organizational conventions for the whole CSS stylesheet. This may look like - grouping native elements, typography styles, layout styles, etc. together.
- CSS includes several examples of using a class to apply a styling rule block to multiple elements.
- The design of the page is cohesive and ensures an intuitive user experience. Any user could navigate the application without any guidance from the developer.

✨WOW✨ can look like:

- CSS is DRY, utilizing classes/rules to cut down on repetitive styles.
- Micro-interactions such as hover states and animations have been thoughtfully added to improve the user experience.
- Design is responsive across small, medium and large breakpoints.
</section>

## Group Discussion

While we are looking at these two files, let's create [a checklist](https://turingschool.notion.site/Refactoring-HTML-CSS-Class-Notes-15dc6b215c0640a18f5c372af60f41fc). We can add to this checklist throughout the lesson, and you can refer to it as you work on future projects.

First, let's look at the HTML file. In the zoom chat, share what score your group gave for the HTML.

Now, let's share some ideas for refactoring the HTML code.

Next, let's look at the CSS file. In the zoom chat, share what score your group gave for the CSS.

Now, let's share some ideas for refactoring the CSS code.

## Wrap Up

<section class="call-to-action">
### Solo Journaling

- What is one thing you learned today that you'd like to implement in your current project?
- What is the importance of writing code that follows consistent convention for indentation, naming, and spacing?
- How will you ensure that you give these details careful attention in all future projects?

</section>
