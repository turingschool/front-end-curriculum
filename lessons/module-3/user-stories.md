---
title: Writing Effective User Stories
length: 60 minutes
tags: agile, user story, user stories, project management, testing
module: 3
---

## Intro

Breaking down what you want to build is incredibly important when it comes to software. Too often, we decide that we’re going to build an application that does something specific without much upfront planning. This is where we can utilize writing stories to help us know what building blocks we’ll need to create in order to accomplish our final end goal.

### Learning Goals

* Be able to describe app functionality with user stories
* Improve current and future project boards
* Define acceptance criteria for marking a user story complete
* Start aligning current workflow to professional dev workflows

### Vocabulary

* `Agile workflow` - a mode project management that uses short "sprints", flexibility, multidisciplinary teams, and rapid delivery to build a product
* `Project board` - organizes user stories, chores, and bugs showing at a glance where in its evolution a project/product is
* `Features` - overarching pieces of functionality
* `User story` - description of a single user flow in the application
* `Chores` - developer tasks that are not user stories (i.e. "Update README", "Write documentation", etc) that get added as cards in the project board toward the end of a sprint
* `Bugs` - as bugs are found, new project board cards should be created in the project board to track them
* `Sprint` - a set and consistent period of time (usually two weeks) of concentrated and focused work with set goals
* `Acceptance criteria` - the predefined requirements that must be met in order to mark a user story complete

## What is a user story?

<section class="call-to-action">
### Once upon a time ...

With your project partner, choose a web app that you are both familiar with.

Together, try to describe every possible action a user could take in this app!

* What is the action? (ex: logging in)
* What steps go into accomplishing this action? (ex: finding and clicking an input field, typing into it, etc)
* Why would the user want to do this? (ex: to view their personalized profile)
* Does this action allow them to take any other actions? (ex: go view their saved favorite items)
</section>

Congrats! You just described several "user flows" through the application!

We're going to spend the rest of the lesson learning to turn these user flows into an important tool: user stories.

A user story describes a single user flow, including not just the steps that need to be taken, but also the motivation a user might have for pursuing that flow, as well as the expected results that tell the developer when the user story has been successfully accomplished.

[This video](https://youtu.be/Fw98L-kcRpc) is a great overview of user stories.

### Anatomy

A good user story:

* Is written in a consistent format
* Exhibits a tiny chunk of functionality
* Can be clearly demonstrated/verified
* Represents 1/2 a work day of labor _or less_

Here are two examples of ways to write a user story:

1:  
```
As a <type of user>, I want to <execute some goal> so that <some reason>
```

2:
```
As a(n) [user type]
In order to [extract business value]
When I [take some action]
  (and [take some other action])
Then I [observe an outcome]
  (and I [observe another outcome])
```

In a moment, we'll dive further into this. But let's take a moment and zoom out: why are we even talking about this?

### What's the point?

We're going over user stories for a few reasons:

1. Most professional dev teams which use agile practices use project boards filled with user stories to build an application
1. Clear user stories will help you begin to estimate the speed of your own work
1. Reflecting on your user stories can help expose the biases you may have about your imagined users
1. Strong user stories can help clarify and define what you need to test

### User stories in the real world

You've probably heard about agile workflow. Agile could be an entire lesson unto itself, but for now, know these key points:

* Agile is defined by work completed in short sprints
* Progress and end goals are evaluated at the end of each sprint so work can pivot if necessary
* Rather than building an entire app and then delivering it, an app is built and delivered feature by feature (ideally most critical to least critical) and is continually under review and improvement
* Project boards are heavily used, with app features broken down into individual user stories
* Work for each sprint is divided up amongst a team through various means (assignment by ticket, tickets being given "points" according to estimated time for completion, etc)

You can learn more about agile in [this short video](https://youtu.be/7U44I6pLiRY) (as well as through countless blog posts, videos, and more).

Out there in the real world, it's important to be familiar with user stories because they are a key part of how many teams assign work.

## Writing user stories

### Questions to ask while writing user stories

* Who is the user you are focusing on? This should be defined
* What is the goal of the user in this story?
* What should happen when the user is successful in their goal?
* What should happen when the user isn’t successful in their goal?
* What is the acceptance criteria for your user story?

### User story titles

Similar to writing a commit message, a user story title is a concise description of the user flow.

The titles of your user stories should convey what is being worked on and what the user will be able to do once it has been accomplished. For example:

* As a user, I can visit the homepage
* As a user, I can view a movie's details
* As a user, I can update my profile information

### Story details

In addition to a title, every single user story should include a description! The description will be detailed and include several items:

* The entire workflow of the user when attempting to accomplish the story's task
* Any additional resources that would clarify the user story (wireframes, etc)
* As much context as is needed so a developer could begin working on a random user story without needing to ask additional questions

<section class="call-to-action">
### Add details

Take the user story examples from above:

* As a user, I can visit the homepage
* As a user, I can view a movie's details
* As a user, I can update my profile information

and flesh them out with additional information!

1. What steps need to be taken to accomplish this task
1. When the task is executed, what happens? What does the user see?
1. How will a developer know when the user story has been successfully accomplished?
</section>

### Acceptance criteria

That final piece of information from the previous exercise can be hard to conceptualize! It's known as the [acceptance criteria](https://www.productplan.com/glossary/acceptance-criteria/). It lets a developer know when that particular user story can be considered "completed" and finished.

The previous link includes a great explanation of the difference between a user story and its acceptance criteria.

>**User story**:  
>As a product manager,  
>I want to score potential ideas,  
>So that I can decide what to include on my product roadmap.  
>
>**Acceptance criteria for that user story could be**:  
>_Scenario: The product manager adds potential ideas and ranks the best ideas based on benefit versus cost._  
>Given that I have added two or more ideas and scored them using the Benefit vs Cost scoring model  
>When I click the Rank button  
>Then ideas are sorted with the top-scoring ideas at the top.  

The user story is a goal of the user. The acceptance criteria actually describe the steps the user would take to accomplish their goal.

As you can see, the acceptance criteria reads a lot like our descriptions when we test things.... 🤔 🤔 🤔 Keep this in mind! It _might_ come in handy later....

## In closing

<section class="call-to-action">
### Action Item! Rancid Tomatillos Project Board

For your project board for Rancid Tomatillos, use user stories to create each card. Your instructors will ask to see your project board at project check-ins later this week.
</section>

## Additional Resources

* [Agile video explanation](https://youtu.be/7U44I6pLiRY)
* [User Stories video explanation](https://youtu.be/Fw98L-kcRpc)
* [Blog post on defining acceptance criteria](https://www.productplan.com/glossary/acceptance-criteria/)
