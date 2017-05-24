---
title: Capstone Project
module: 4
---

## Goals

By the end of this session we will have established Capstone projects that'll guide your last two weeks in the program. It's your final project which means it's your last opportunity to build something your really proud of and can show off for your portfolio. It's also the last time you will get to work with your cohort-mates and master your workflow before becoming a professional developer. Take risks, be creative, work nicely with your team and build something useful for others.

The project is due on Wednesday, June 7th.

### Past Capstones
* [Ian and Graham's We the People Native](https://github.com/ianlancaster/we-the-people-native)
* [Jeff, David, Casey, Pete and Kirsten's Turing Fridays](https://github.com/Jeff-Duke/turing-fridays)

### Part 1: Solo (30 minutes)

On the whiteboard or with pen and paper, summarize the data that is returned from your BYOB endpoints. While you don't **have** to use your BYOB project as a base, we have found it greatly helps students to have that foundation. You are welcome to create another backend API if there is an application you strongly want to build, but remember that will require setting up new schemas and seeds.

**Example**

* Patients
* Medical Procedures (belong to patient)
* Readings (belong to procedure)

### Part 2: Solo (30 minutes)

Summarize and post your ideas of what kind of applications you could build off of your BYOB (or a new backend you'd like to build). For *each idea* create
an issue on the [Turing Mastery Project repo](https://github.com/turingschool/mastery_project). Summarize the idea in the following format:

Issue Name: (Name of the Project)  
Issue Description:
* Problem it solves:
* How it solves it:
* Technical challenges:

If a proposal similar to yours is already in the list of issues, please add to that issue with your refinements. We'll rename the issue to the name you choose, but this will help us limit the number of duplicate ideas.

### Part 3: Small Groups (60 minutes)

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

### Part 7: Pick Your API (20 minutes)
With the project and team established, get together with your group to decide whose API you will be utilizing, or if you'll be building a new one. Feel free to use more than one if it makes sense.

Remember, you can easily change the datasource for your API. Don't feel like you need to use the current data to fit your project. It's easy to switch out data sources, just be sure to cover the new data with tests.

The requirement is that you use a custom-built API for a GET, POST, PUT/PATCH and DELETE requests through the UI.

### Part 8: Wireframing & Design (60 minutes)

With the project and team established, get together with your group to wireframe
the key screens / interactions and figure out how you'll implement services.

Below are the key concepts from our instructional sessions which may inform some
of your thinking:

- Building applications for the web, desktop, and mobile platforms
- Offline applications and progressive web applications
- Building real-time web applications with WebSockets
- Building servers to store and share data between users

### Part 9: Workflow (20 minutes)

Pick a team lead to create a repository for each the selected projects. If you have a clever name, now is the time.

### Part 10: Definition of Done (20 minutes)

As a team, come up with your own Definition of Done. Have at least 5 criteria for your DoD. Follow your DoD throughout the project!

## Rubric

### Deployment (75 points)

- 75: Application is automatically deployed to production via CircleCI.
- 40: Application is deployed to Heroku but not automatically via CircleCI.
- 0: Application is not building with CircleCI and not deployed.

### JavaScript Style (50 points)

* 50: Application has exceptionally well-factored code with little or no duplication and all modular pieces separated out into logical components. There are _zero_ instances where an instructor would recommend taking a different approach.
* 35: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 15: Application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what most lines are doing.
* 10: Application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* 5: Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* 0: There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### User Interface (40 points)

* 40: The application is pleasant, logical, and easy to use. There are no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* 30: The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 20: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 0: The application is confusing or difficult to use.

### Risk Taking and Creativity (60 points)

Instructor/developers will select one feature in the project to review for this section of the rubric.

- 60: Developers pushed themselves and their team by taking risks which is demonstrated by a delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 50: Developers pushed themselves and their team by taking risks which is demonstrated by an almost delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 30: Developers attempted to implement feature using technologies not covered in class but it did not result in a delivered feature.
- 10: Developers did not build any features.

### Testing & Linting (50 Points)

* 50: Project has a running test suite that exercises the application at multiple levels (feature and unit, client-side and server-side). The test suite covers almost all aspects of the application. A linter has been enforced and passes with no errors.
* 40: Project has a running test suite that tests multiple levels but fails to cover some features. Most functionality is covered by tests. The application makes some use of feature testing. A linter has been enforced but may contain some errors or warnings.
* 30: Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested. A linter was enforced but it does not pass in multiple places.
* 20: Testing in the application is sporadic and does not add confidence that the application would not break during refactoring. A linter was not enforced.
* 0: There is little or no evidence of testing in this application. A linter was not enforced.

### Workflow (50 Points)

* 50: The developers effectively uses Git branches and many small, atomic commits that document the evolution of their application. There is visible evidence of code review happening in pull requests and discussion around approaches. Commit messages are consistent and there are no instances where developers are committing debuggers or commented out code.
* 35: The developers make a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. There is little evidence of code review. Commit messages may be somewhat inconsistent and at times, the codebase contains debugger code.
* 15: The developers make large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. There are formatting or code styling issues in the code base. (This is important. These issues should not be able to make it past code review.)
* 5: The developers committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0: The application was not checked into version control.

#### Extensions (20 points each)

- Developer contributes to or creates an npm module/library.


### To get a 4 on this project, you need to achieve 300 / 325

### To get a 3 on this project, you need to achieve 250 / 325

## Final Score: x / 325
