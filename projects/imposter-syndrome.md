---
title: Imposter Syndrome
module: 4
tags: electron
---

## The Project

> Any application that can be written in JavaScript will eventually be written in JavaScript

— Atwood's Law

---

In this project, we'll be designing an interpretation of a traditional desktop application using Electron. The choice of which application your pair is going to work on is due to Steve by 4:00pm today.

Here are some helpful suggestions:

- A clone of the OS X Notes application
- An application converting Markdown-to-HTML
- An application for storing and keeping track of recipes
- An application for keeping track of reminders (and reminding you of them)
- A simple [WinAmp][wa] clone (alternatively, it could keep tract of a list of Soundcloud files)
- A color picker and manager like [Hues](http://giantcomet.com/hues/)

[wa]: https://en.wikipedia.org/wiki/Winamp

A simple application done really well is better than a complicated application done poorly.

### A Word of Caution

We're going to do something that hasn't really been done too many times in the past. We'll be wading through plenty of uncharted waters and have to figure out a lot of the solutions on our own. The hope is that you'll have the foundation of something worth talking about at the end of the project, but the main goal is to learn a ton.

### Pre-Work

You'll be expected to have reviewed the following materials by Monday.

1. [Building Desktop Applications with Node and Electron](https://www.youtube.com/watch?v=rbSvc8_BHaw)
1. [Getting Started with Electron](https://vimeo.com/155240396)

## Requirements

Since this is [terra incognita][], a big part of the project will be documenting our travels. One of the goals of this project is strengthen your portfolio and there is no better way to do that than to showcase your expertise in an area that not may other people know about. In addition to programming, you'll be writing a a series of blog posts:

1. An introduction to Electron along with any other libraries you're using (e.g. you may decide you want to manage your UI with React or Vue). Discuss how they work (both individually as well as how they work together), why you chose the additional libraries you chose, and why you chose them over the alternatives.
1. A particular technical problem that you encounter and how you solved it (or your efforts to solve it, if you didn't end up solving it)
1. A post-mortem on what went well and what you would improve upon if you were to continue working on this project or if you started over

Each section is worth 15 points for a total of 45 points.

**Important Note**: It's easy to complain how stuff is hard in a blog post. Not only is that not particularly helpful to anyone who reads your post, it turns out that most open source software is created by humans and humans have a tendency to feel really bad when you complain about their donated efforts.

[terra incognita]: http://www.merriam-webster.com/dictionary/terra%20incognita

---------

## Rubric

### Blog Post (45 Points - 15 points per post)

### JavaScript Style (40 points)

* 40: Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* 35: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 15: Application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 10: Application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* 5: Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* 0: There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### User Interface (10 points)

* 10: The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* 7: The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 0: The application is confusing or difficult to use.

### Risk Taking and Creativity (60 points)

Instructor/developers will select one feature in the project to review for this section of the rubric.

- 60: Developers pushed themselves and their team by taking risks which is demonstrated by a delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 50: Developers pushed themselves and their team by taking risks which is demonstrated by an almost delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 30: Developers attempted to implement extensions using technologies not covered in class but it did not result in a delivered feature.
- 10: Developers did not build any features.

### Workflow (20 Points)

* 20: The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application. There is visible evidence of code review happening in pull requests and discussion around approaches.
* 15: The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. There is little evidence of code review.
* 5: The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. There are formatting issues in the code base. (This is important. These issues should not be able to make it past code review.)
* 1: The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0: The application was not checked into version control.

#### Extensions (20 points each)

- Developer contributes to or creates an npm module/library.
- Developer packaged their application for distribution.
