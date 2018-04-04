---
title: CSS Jigsaw
tags: css, introduction, practice
length: 150
---

# Learning Goals

* Understand the differences between reset and normalize css files
* Learn how to write consistent and idiomatic CSS with an understanding of why it is important
* Explore and understand how to implement a variety of image optimization methods
* Understand the key issues in crafting CSS that can impact performance
* Explore current industry patterns for organizing CSS files, understanding their differences and pros/cons
* Learn the difference in CSS transitions, transformations, animations and how to implement various interactions utilizing all of them

**

## Structure
"Jigsaw" lesson! Today, you'll be creating your own learning. We've arranged "learning groups" whereby you collaborate on the research of assigned subject matter and then share your learnings with fellow students from other groups. There are six sessions designed to guide us through the process.

## Introduction (5 min)
Each student is part of a Research Group investigating one of four content areas:

* Reset vs Normalize CSS files & Idiomatic CSS
* Image Optimization
* Performance & Organization
* Transitions, Transformations, Animations

<!-- ### Session 1: Warmup (10 min)
For warmup, before you get into your Research Group, spend ten minutes getting your feet wet with your research topic. -->

## Session 1: Research (35 min)
In this session your goal is to "build expertise". Gather into your "Research Groups" specified in the outline. During this time your group is collaborating to put together a collection of notes / key understandings such as:

* What is this thing?
* Why is it useful?
* How do you put it into action?
* Put together a short demo (less than 3 minutes)
* How can it affect your development process?
* Are there any downsides to using it?
* Where can a person go to learn more about it? Any resources seem better than others?

Additional requirements to note:

* _There are specific questions per content area below to guide the group's research. The expecation is that your presentations for session 3 cover the key questions provided per content area._
* _Each person from the "Research Group" needs to finish session 1 with their own set of notes and their own demo ready to go._

## BREAK (5 min)

## Session 2: Expert Presentations (10 min each)
Recombine into your "Learning Groups" specified in the outline. You should have one person from each of the Research Groups.
A representative from each of the research groups will take turns sharing their findings from the respective content areas as follows:

* Clear, concise definition(s) of the subject matter and its importance
* Concrete example(s) of when to use, employ, consider
* Any concerns and/or things to watch out for
* Create a short demo-able code example to share
* Optional/additional resources for independent study

**While they're sharing, the rest of the group should:**

* Take their own notes
* Ask clarifying questions
* Brainstorm/record any depth questions the researcher is not able to answer
* Assign a time keeper to WATCH THE CLOCK so the presenter doesn't have to keep track, and the group ends up with a comprehensive set of notes, understandings, and questions across each of the subjects by the end of the session
* Write down any questions that your group wasn't clear on for instructors

## Session 3: Wrap Up (5 mins)

Give instructors group questions so we can circle back around on them at a later lesson.

***

# Content

### Reset v. Normalize CSS Files & Idiomatic CSS

* Start with the [Reset vs Normalize](http://frontend.turing.io/lessons/module-1/reset-vs-normalize) lesson
* What are the differences Reset v. Normalize files and when/why would they matter to us as FE Devs?
* Who are the creators of normalize and why should we care?
* Anything else of interest to note? Think output of the CSS, bug issues, performance, documentation, maintainability, legacy and future support, etc.
* Check out [Idiomatic CSS](http://frontend.turing.io/independent-study/idiomatic-css.html) lesson from the FE curriculum independent study section
* What is idiomatic CSS and why is it important?
* What are some options in the organization of properties per CSS declaration? Describe and show details.
* Check out this [article](https://www.wired.com/2012/06/write-better-css-with-idiomatic-css/) and see if there is anything else interesting to add to your share list.

### Image Optimization

* Start with the [Image Handling 101](http://frontend.turing.io/independent-study/image-handling.html) lesson from the FE curriculum independent study section
* What are the different image types and their best uses? Can you provide any visual examples to highlight differences?  
* What is the lowest hanging fruit available to you as a developer to optimize image file size? How does it work? Can you test it out/demonstrate it quickly for the class?
* What is a sprite? How does it work?
* Create a code demo with images to implement and explain html's `srcset` and `sizes` attributes available on the image tag. Be prepared to discuss why the different image versions are important in FE development.
* Anything else of interest to note? Think output of the CSS, bug issues, performance, documentation, maintainability, legacy and future support, etc.

### Performance & Organization

* Start with the [CSS Performance & Organization](http://frontend.turing.io/independent-study/css-performance-and-organization.html) lesson from the FE curriculum independent study section
* Revisit the concept of specificity from the [CSS 1](http://frontend.turing.io/lessons/module-1/css-1) lesson
* How does the browser handle conflicting CSS rules?
* When writing CSS, what sorts of things does a front end dev need to consider for performance (remember - always want things to read/render/perform FASTER)
* Are there any good "rules of thumb" to remember as you construct your CSS?
* Someday... you will have LOT's of CSS to organize. Multiple files even! What are some organization patterns that exist in the industry? Give a high-level overview of each, focusing on basic principles, how they compare, pros/cons. (Hint: BEM, SMACSS, Object Oriented CSS, Atomic CSS)
* Why is a system of organization important at all?
* Anything else of interest to note? Think output of the CSS, bug issues, performance, documentation, maintainability, legacy and future support, etc.

### Transitions, Transformations, Animations

* Start with the [CSS Transitions, Transformations, Animations](http://frontend.turing.io/lessons/module-1/css-transitions-transformations) lesson
* Articulate the differences between transitions, transformations, and animations.
* Are there accessibility concerns with CSS animations? What are they and what can we do about it?
* Create your own code pen examples of various transitions, transformations, and at least one multi-stage animation (goal: 5 code pens, different from the lesson provided above)
* Anything else of interest to note? Think output of the CSS, bug issues, performance, documentation, maintainability, legacy and future support, etc.
