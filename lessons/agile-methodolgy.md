---
title: Project Management with Agile Methodologies
length: 90 minutes
tags: agile, project, management
---

# Project Management with Agile Methodologies

## Manifesto

  1. Individuals and Interactions over processes and tools
  2. Working Software over comprehensive documentation
  3. Customer Collaboration over contract negotiation
  4. Responding to Change over following a plan

## Theory

### Iterative vs. waterfall

One of the differences between agile and waterfall is the approach to quality and testing. In the waterfall model, there is always a separate testing phase after a build phase; however, in agile development testing is completed in the same iteration as programming.

Because testing is done in every iteration—which develops a small piece of the software—users can frequently use those new pieces of software and validate the value. After the users know the real value of the updated piece of software, they can make better decisions about the software's future. Having a value retrospective and software re-planning session in each iteration helps the team continuously adapt its plans so as to maximize the value it delivers.

This iterative approach supports a product rather than a project mindset. This provides greater flexibility throughout the development process; whereas on projects the requirements are defined and locked down from the very beginning, making it difficult to change them later. Iterative product development allows the software to evolve in response to changes in business environment or market requirements.

Because of the short iteration style of agile software development, it also has strong connections with the lean startup concept.

### Roles

**Product Owner** - Product owners are the champions for their product. They are focused on understanding business and market requirements, then prioritizing the work to be done by the engineering team accordingly. Effective product owners:

  * Build and manage the backlog (list of user stories to be completed)
  * Closely partner with the business and the team to ensure everyone understands the work items in the backlog
  * Give the team clear guidance on which features to deliver next (which stories are to be completed for every sprint)
  * Decide when to ship the product with the predisposition towards more frequent delivery  (have final call on whether or not to push code to production)
  * Keep in mind that a product owner is not a project manager. They own the product for it's whole lifecycle, not the team that creates the product.

Product owners are not managing the status of the program. They focus on ensuring the development team delivers the most value to the business . Also, it's important that the product owner be an individual. No development team wants mixed guidance from multiple product owners.



**Scrum Master** - Scrum masters are the champion for the agile process within their team. They coach the team, the product owner, and the business on the agile process and look for ways to improve it and remove barriers of success. An effective scrum master deeply understands the work being done by the team and can help the team optimize their delivery flow. As the facilitator-in-chief, they schedule the needed resources (both human and logistical) for sprint planning, standups, sprint review, and the sprint retrospective.

Scrum masters also look to resolve impediments and distractions for the development team, insulating them from external disruptions whenever possible.

Part of the scrum master's job is to defend against an anti-pattern common among teams new to scrum: changing the sprint's scope after it has already begun. Product owners will sometimes ask, "Can't we get this one more super-important little thing into this sprint?" But keeping scope air tight reinforces good estimation and product planning–not to mention fends off a source of disruption to the development team.

Scrum masters are commonly mistaken for project managers, when in fact, project managers don't really have a place in the scrum methodology. A scrum team controls its own destiny and self-organizes around their work. Agile teams use pull models where the team pulls a certain amount of work off the backlog and commits to completing it that sprint, which is very effective in maintaining quality and ensuring optimum performance of the team over the long-term. Neither scrum masters nor project managers nor product owners push work to the team (which, by contrast, tends to erode both quality and morale).


**Scrum team** - Scrum teams are the champions for sustainable development practices. The most effective scrum teams are tight-knit, co-located, and usually 5 to 7 members. Team members have differing skill sets, and cross-train each other so no one person becomes a bottleneck in the delivery of work. Strong scrum teams approach their project with a clear "we" attitude. All members of the team help one another to ensure a successful sprint completion.

As mentioned above, the scrum team drives the plan for each sprint. They forecast how much work they believe they can complete over the iteration using their historical velocity as a guide. Keeping the iteration length fixed gives the development team important feedback on their estimation and delivery process, which in turn makes their forecasts increasingly accurate over time.

## Sprints
  * Can be between 1 week and 4 weeks
  * The user stories to be completed for each sprint are prioritized by the Product Owner before the sprint starts
  * Code is tested every sprint before shipping
  * Ship code at the end of every sprint (usually late when no one is using the product)

## Major Sprint Activities
  * Sprint planning - Should occur the week before a sprint starts.
  * Standups - Daily. Who is working on what, what is the status of that work, are there any blockers to that work?
  * Sprint demo - Demo the sprint to PO and any other stakeholders. Often helpfully to have multiple demos in a sprint to allow for feedback and changes to be made during the sprint. No surprises when code gets shipped.
  * Sprint retrospective - What went well, what didn't go well, what can we change for next sprint?

## Metrics
  * Burndown chart - How many stories points completed vs. not completed. A quick way to view the progress of a sprint. Want a linear-ish slope, but usually not the case.
  * Compare every sprint's burndown in relation with each other. Is the team able to complete more points with each sprint? Is this team plateauing at a point level so we can accurately gauge future sprints? Is the team dropping points because they are taking on too much work or don't have enough resources?

## Common mistakes made in agile
  1. Lack of documentation - Because agile focuses on delivering a working software product, developers are usually heads down writing code and tests. Unlike waterfall, there is no planning/design phase where hundreds of specs and requirement documents are created to specifically document what each feature does, what dependencies how it relates to the entire product.
  2. Scope creep - Let's say you have your sprint planned, everything is prioritized and scored and developers are chugging away. Halfway through the sprint, an old bug rears it's ugly head and the PO decides that this bug NEEDS to be fixed this sprint along with all the other stories. They don't think it's a big deal because it's just one bug, couldn't take too long right?
  3. Product owner role is not filled or not properly filled - You need a Product advocate to understand the vision of the Product and not be engrained in the sprint team. This seperation of prioritization of product stories and the actual development of those stories is key. Many times a Scrum Master or other team member play the role of PO and it can cause a lot of termoil
  4. Allowing technical debt to grow - There's always things to clean up or improve upon in your code base. If you don't take a small part of your sprint to do this technical debt cleanup, whether it's refactoring, updating a package, removing unnecessary code or improving data models, your codebase will become unmanageable. Always try to pull in some kind of technical debt stories (even if they are tiny!) in every sprint.
  5. Doing too much in standup - Standups are for giving status on sprints and declaring roadblocks. But developers can take this as an opportunity to ask for input on solutions to their problems. This can waste time for people that don't need to be involved.

## Writing User Stories
A user story is a small, complete piece of functionality that delivers business value. It should be created with the following structure:

```
As a <user type>, I want to <functionality> so that <benefit>
```

User stories should not be overly detailed.

### Points
Fibonacci point system is a common practice for estimating the complexity of a user story.

```
1 - 1 - 2 - 3 - 5 - 8 - 13 - 21 - 34 - 55 - ...
```

For a small but frequent UI bug, I might assign 2 points for  finding all instances of the bug and fixing them all.

For creating a modal to assign a user a role, I might assign 8 points.

For replacing PHP with Javascript, I might assign 20000000 points.

The points themselves don't matter, it's arbitrary. What matters is an accurate comparison of complexity between user stories.

### Tasks
Tasks are the steps/actions/activities required to complete the user story. These tasks should be added during sprint planning, and updated as needed throughout the sprint. Idenitifying tasks allows a developer to think about dependencies with other teams or technologies and the order of things to complete. Tasks should drive conversations within the team to understand how everyone is chipping in to complete the story.

### Definition of Done
One of the most important aspects of agile is knowing when you've actually completed a user story. Definition of Done is the acceptance criteria for all user stories.

Each team should review their own DoD before every sprint and see if anything needs to be adjusted or added.

#### Example Definition of Done

1. Code produced (all tasks completed in user story)
2. Open PR with correct branch name and detailed comments on how the code successfully creates the business value of the user story.
3. Builds without errors (passes all linters)
4. Unit tests written and passing
5. Peer reviewed by a least one other team member and PR merged into master and closed.
6. Deployed to test environment and passed system tests
7. Passed UAT (User Acceptance Testing) and signed off as meeting requirements
8. Any build/deployment/configuration changes implemented/documented/communicated
9. Relevant documentation/diagrams produced and/or updated
10. Remaining hours for task set to zero and task closed
