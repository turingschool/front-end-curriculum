---
title: Style Guide Challenges
---

## Project Introduction

As you work on more and more projects, you'll notice that you build variations of the same page elements many times over. We build lots of nav bars, modals, tabbed information, and other common layout structures and patterns. On large projects, we may even build the same type of elements numerous times in slightly different ways, leading to visual inconsistencies, unclear design, and hard-to-maintain code. The more you do this, the more you notice it. Small inconsistencies in implementation can be a big pain on larger projects, leading to wasted time and a lot of duplication. Wouldn't it be nice if we had a base template we could refer back to so we could get these elements built more quickly and more consistently the next time we need them? Well, good news! We can do just that using a style guide.

As defined by [Brad Frost's Style Guide Best Practices](http://bradfrost.com/blog/post/style-guide-best-practices/): "Style guides and pattern libraries are essential tools to help Web teams maintain sanity while creating experiences for our multi-device Web." At it's core, a style guide is about building a cohesive and reusable system of parts rather than building complete individual pages of a product. It's an exercise in breaking down your project into it's smallest components, rather than tackling your project as a whole. A style guide becomes a tool that allows us to direct other developers' approach to working within out codebase, and guides how designers should approach creating additions to an existing visual language.

By focusing on the parts that make up the whole, we are allowing ourselves to maintain consistency of elements across our site, and to build content that is modular with a cohesive design approach tying it all together.

## Project Overview

Every week you will be given a specific page element to build. It must be responsive, and the HTML, CSS, and JS must be written in a highly reusable way. The goal is to create a small library of page components that can be quickly and easily dropped into a project with minimal work to integrate them into a codebase.

## Project Requirements

Each week you will be given a new page element to build, and by the end of the module you will have a created a style guide. As outlined in Brad Frost's [Style Guide](http://bradfrost.com/blog/post/style-guides/) overviews, you will focus on creating a pattern library and code style guide for each element.

Focus on semantic HTML, well organized and clear CSS, and DRY, well factored Javascript. At the end of the module, your deliverable will be a gh-pages site displaying each of your solutions and the code for each, along with a brief description of the element so a developer new to your project can understand the intended use without further explanation.

Your final style guide deliverable must meet the following criteria:

- Must have a one-page site holding all of the examples
- One-page site must be live on gh-pages
- Each weekly exercise should be a section of the one-page site
- Weekly submissions must include the completed element and the associated code, along with a brief description of the element
- All layouts must be responsive matching the weekly project spec

# Weekly Assignments

Design, fonts, styles, and general structure is up to you. The final bar must be straightforward to maintain, user friendly, and easy to drop into a new codebase.

## Week One

Design and build a reusable primary navigation bar. It must meet the following criteria:

- be responsive
- have a series of links that is not a dropdown on mid to large screens
- small screen/device layout must have the links shown as a dropdown
- have a button suitable to be used for "sign up" or "log out"
- have space for a logo, with a placeholder icon

## Week Two

Design and build a reusable content card. It must meet the following criteria:

- be responsive -- how does the layout/use of the cards change at small and large screen?
- have an image
- have a title
- have a description
- have a nicely styled link

# Resources

#### Best Practices and Definitions
- Brad Frost's post on [Style Guides](http://bradfrost.com/blog/post/style-guides/)
- [Anatomy of a Pattern in a Pattern Library](http://bradfrost.com/blog/post/anatomy-of-a-pattern-in-a-pattern-library/)

#### Reference Style Guides and Pattern Libraries
- [Code for America Style Guide](http://codeforamerica.clearleft.com/)
- [MailChimp Patterns](http://ux.mailchimp.com/patterns/)
- [Bourbon Refills](http://refills.bourbon.io/)
- [Pattern Lab](http://patternlab.io/)
