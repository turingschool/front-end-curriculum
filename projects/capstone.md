---
title: Capstone Project
module: 4
---

## Goals

By the end of this session we will have established Capstone projects that'll guide your last two weeks in the program. It's your final project which means it's your last opportunity to build something you're really proud of and can show off for your portfolio. It's also the last time you will get to work with your cohort-mates and master your workflow before becoming a professional developer. Take risks, be creative, work nicely with your team and build something useful for others.

The project is due on Tuesday of Week 6.

### Past Capstones

* [Ian and Graham's We the People Native](https://github.com/ianlancaster/we-the-people-native)
* [Jeff, David, Casey, Pete and Kirsten's Turing Fridays](https://github.com/Jeff-Duke/turing-fridays)

## Expectations

### Everyone Starts From Scratch

You cannot pitch an idea based on a project you've already worked on (e.g. your mod 3 personal project). You must build a new application from scratch. The only exception to this is that you can use your BYOB as the backend if you choose. 

### Design Research

Spend some time doing some legitimate design research to influence your UI. Pick a single UI element off of [Dribbble](https://dribbble.com) (or any other site you find to be really pretty) that you like and use it to inspire the rest of your design. For example: 

I really like the subtle drop-shadows on these [notifications](https://dribbble.com/shots/1467222-Notifications), and the way the notification icons vary slightly in color by being slightly lighter than the rest of the background. I will incorporate these types of drop-shadows on elements in my project and play with this particular use of color.

### Demonstrating What You've Learned

This project should encapsulate what you've learned throughout Turing, and anything else you've been interested in exploring. We'd like to see a strong emphasis on some of the technologies you've learned in mod 4:

* CSS Transitions & Animations
* Git Hooks & Advanced Workflow
* React Native (can be done as an extension, not as your entire application)
* Service Workers & Background Sync/Push Notifications


## Brainstorming

### Part 1: Solo (15 minutes)

On the whiteboard or with pen and paper, summarize the data that is returned from your BYOB endpoints. While you don't **have** to use your BYOB project as a base, we have found it greatly helps students to have that foundation. You are welcome to create another backend API if there is an application you strongly want to build, but remember that will require setting up new schemas and seeds.

**Example**

* Patients
* Medical Procedures (belong to patient)
* Readings (belong to procedure)

### Part 2: Solo (15 minutes)

Summarize and post your ideas of what kind of applications you could build off of your BYOB (or a new backend you'd like to build). For *each idea* create
an issue on the [Turing Mastery Project repo](https://github.com/turingschool/mastery_project). Summarize the idea in the following format:

Issue Name: (Name of the Project)  
Issue Description:
* Problem it solves:
* How it solves it:
* Technical challenges:

If a proposal similar to yours is already in the list of issues, please add to that issue with your refinements. We'll rename the issue to the name you choose, but this will help us limit the number of duplicate ideas.

### Part 3: Small Groups (30 minutes)

Get together in small groups or with a partner:

* Review/discuss each of your ideas
* Refine them
* Select 1 or 2 of your favorite ideas
* Practice a pitch to sell your ideas to the class

### Part 4: Pitch (30 minutes)

We'll get back together as a class and each person will pitch their project ideas. Spend less than two minutes on each pitch.

### Part 5: Voting

Everyone will write down their top 5 choices of a project to work on. Rank them in order of what you'd most like to work on. Instructors will create teams based on these rankings.

### Part 6: Teaming

We will team up by interest in projects. Teams will be between 2 - 4 people.

### Part 7: Pick Your API (15 minutes)
With the project and team established, get together with your group to decide whose API you will be utilizing, or if you'll be building a new one. Feel free to use more than one if it makes sense.

Remember, you can easily change the datasource for your API. Don't feel like you need to use the current data to fit your project. It's easy to switch out data sources, just be sure to cover the new data with tests.

The requirement is that you use a custom-built API for a GET, POST, PUT/PATCH and DELETE requests through the UI.

### Part 8: Wireframing & Design (45 minutes)

With the project and team established, get together with your group to wireframe
the key screens / interactions and figure out how you'll implement services.

Below are the key concepts from our instructional sessions which may inform some
of your thinking:

- Building applications for the web, desktop, and mobile platforms
- Offline applications and progressive web applications
- Building real-time web applications with WebSockets
- Building servers to store and share data between users

### Part 9: Workflow (15 minutes)

Pick a team lead to create a repository for each the selected projects. If you have a clever name, now is the time.

### Part 10: Definition of Done (15 minutes)

As a team, come up with your own Definition of Done. Have at least 5 criteria for your DoD. Follow your DoD throughout the project!



## Rubric

### Deployment (40 points)

* **40 points:** Application is automatically deployed to production via TravisCI.
* **20 points:** Application is deployed to Heroku but not automatically via TravisCI.
* **0 points:** Application is not building with TravisCI and not deployed.

### JavaScript Style (60 points)

* **50 points:** Application has exceptionally well-factored code with little or no duplication and all modular pieces separated out into logical components. There are _zero_ instances where an instructor would recommend taking a different approach.
* **35 points:** Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **15 points:** Application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what most lines are doing.
* **10 points:** Application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **5 points:** Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points:** There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### User Interface (60 points)

* **40 points:** User interface is intuitive and the instructor can easily use it on their own without guidance. Styling is consistent and call-to-action elements are obvious. The application provides the user with relevant feedback based on interactions.  

* **30 points:** User interface is mostly intuitive, though the instructor might need some guidance on interactions. Styling is mostly consistent, but could use some clean up. Application may be missing some relevant feedback that would help guide the user. 

* **20 points:** User interface demonstrates some effort, but is not intuitive and the instructor needs help figuring out how to use the application. Styling has several inconsistencies and it's sometimes unclear what elements a user can interact with. Application lacks useful feedback for the user.  

* **0 points:** User interface does not demonstrate effort and is unintuitive. The instructor cannot use the application on their own. Styling is inconsistent and user interactions are unclear. Application lacks useful feedback for the user.


### Risk Taking and Creativity (10 points)

Instructor/developers will select one feature in the project to review for this section of the rubric.

* **10 points:** Developers pushed themselves and their team by taking risks which is demonstrated by a delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
* **5 points:** Developers pushed themselves and their team by taking risks which is demonstrated by an almost delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
* **2 points:** Developers attempted to implement feature using technologies not covered in class but it did not result in a delivered feature.
* **0 points:** Developers did not use a new technology.

### Testing, Linting and Error Handling (40 Points)

* **40 points:** Project has a running test suite that exercises the application at multiple levels (feature and unit, client-side and server-side). The test suite covers almost all aspects of the application. A linter has been enforced and passes with no errors.
* **20 points:** Project has a running test suite that tests multiple levels but fails to cover some features. Most functionality is covered by tests. The application makes some use of feature testing. A linter has been enforced but may contain some errors or warnings.
* **10 points:** Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested. A linter was enforced but it does not pass in multiple places.
* **5 points:** Testing in the application is sporadic and does not add confidence that the application would not break during refactoring. A linter was not enforced.
* **0:** There is little or no evidence of testing in this application. A linter was not enforced.

### Workflow (40 Points)

* **40 points:** Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.

* **20 points:** Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.

* **10 points:** Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.

* **5 points:** Developer(s) make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

### To get a 3 on this project, you need to achieve 200 / 250

### To get a 4 on this project, you need to achieve 230 / 250

## Final Score: x / 250
