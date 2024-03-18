---
title: FitLit - Part Two!
tags: JavaScript, mocha, chai, testing, fetch
---

## Goals and Objectives

- Work with a local server and make network requests to API endpoints to retrieve and manipulate data.
- Ensure your app follows best practices for accessibility
- Practice talking about your code and high level technical concepts
- Implement feedback from a usability test to improve product
- Improve group workflow.

In this project, you will use your project from FitLit (Part One) and build on top of that.  This is an opportunity to refactor your code, utilize agile processes, complete unfinished work, build new features, and take advantage of instructor feedback.

These are all aspects of your future job. Code is important, but process allows for great applications to be built. This part of the project focuses heavily on process so that you have an opportunity to talk about process in your future interviews.

## Timeline
Dates and deliverables to be aware of:

- **Monday of Week 4** - Project kickoff
    - Perform your retrospective and DM your instructor project manager two things from your retrospective (see below for details) that you want to keep doing and two things that you want to improve on as a group heading into Part 2.
    - DM your instructors your “definition of done” for your track.
- **Monday of Week 5** - Project due
- **Tuesday of Week 5** - Project evaluations (presentation and interview questions)
    - Instead of submitting code in-depth review, you’ll be giving a presentation about your process and how you implemented your track’s features as well as answering a couple interview-style questions.

## Daily Check-Ins

Every work day, your group should do a check-in as a whole group, preferably live over Zoom, and discuss at least these things:

- What is the state of the project so far? (update your GitHub project board if necessary)
- What is each person working on today?
- Are there any blockers, and what is your plan to get through the blockers?

Your daily check-in schedule (sometimes called “stand-ups”) should be outlined in your DTR so the whole group is aware of the meeting.

## Retrospective

A retrospective (retro) is a look back at the recent development period, in this case, Part 1 of the project, in order to improve future development **process** and **workflow** as a team. For your retrospective, meet with your team to discuss the following questions:

- What helped you to be successful as a team?
- What caused the problems that you had in Part 1? For example: When we got stuck, how long did we grind before reaching out for help?
- Were daily check-ins productive and helpful? If not, what would you change?
- What questions do we have about Part 2 of the project?
- Is there anything we should change in our DTR?

When you’ve finished your retro, DM your project manager two things from your retrospective that you want to keep doing and two things that you want to improve on as a group heading into Part 2.

## Project Iterations


<section class="answer">
### Iteration 5 - Applying Instructor Feedback from Part 1

- Implement instructor feedback from Part 1. Be sure to ask your instructor about any clarifying questions you have about feedback.
- Consider any additional refactoring opportunities. For example, identify redundant code in your functions and opportunities for DRYing them up.

### Catching Up on Functionality

You must complete all of the remaining user stories from the [FitLit Part 1 Spec](https://frontend.turing.edu/projects/module-2/fitlit-part-one-agile.html). If you did not finish parts of the original requirements, this is your chance to revisit and finish all of the functionality. In addition to the Part 1 requirements you must also ***implement your instructor’s feedback*** and add ***“Iteration 6” and “Iteration 7”***.
</section>


<section class="answer">
### Iteration 6 - POST

**Choose one:** A user should be able to add new sleep, new hydration, **OR** new activity data from the dashboard.

You will no longer receive your data from the deployed API, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/fitlit-api){:target='blank'}.

Your GET requests should not change very much, but you will need to clone down the local server repo, set it up, and run it in a separate tab in your terminal each time you run your client (app). Below are the endpoints set up for this project.

<section class="note">
### Why this change?

Everyone was using the same exact endpoints for Part One. This is typically how things work, but can cause some headache when implementing types of requests other than GET. In this part of the project, you will start making POST requests. Creating a local server instead of using the hosted (deployed) one, gives everyone their own version of the APIs and decreases an overload of new data getting sent.

</section>

#### Endpoint Documentation (GET and POST)

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all users | `http://localhost:3001/api/v1/users` | GET  | none | An array containing all users |
| Get all sleep data | `http://localhost:3001/api/v1/sleep` | GET | none | An array containing all sleep datas |
| Get all activity data | `http://localhost:3001/api/v1/activity` | GET | none | An array containing all activities |
| Get all hydration data | `http://localhost:3001/api/v1/hydration` |GET | none | An array containing all hydration data |
| Add A User sleep data |`http://localhost:3001/api/v1/sleep`| POST | `{ userID: <number>, date: <string> , hoursSlept: <number> , sleepQuality:<number> }` | `{ userID: #, date: "some dates ex("12/12/2020")" , hoursSlept: # , sleepQuality: # }`|
| Add A User hydration data |`http://localhost:3001/api/v1/hydration`| POST | `{ userID: <number>, date: <string> , numOunces: <number> }` | `{ userID: #, date: "some dates ex("12/12/2020")" , numOunces: # }`|
| Add A User activity data |`http://localhost:3001/api/v1/activity`| POST | `{ userID: <number>, date: <string>, flightsOfStairs: <number>, minutesActive: <number>, numSteps: <number>` | `{ userID: #, date: "some dates ex("12/12/2020")" , flightsOfStairs: #, minutesActive: # }`|

<section class="note">

### Note about Adding Sleep, Hydration and Activity Data

Your user should see the dashboard update to include the newly added data *without having to refresh the page.*

For example, if the currently displayed user has an ID of 50, and you want to add new sleep data you would want to send a JSON object through with your POST request that looks like:


```json
{
    userID: 50,
    date: "10/29/2021" ,
    hoursSlept: 2,
    sleepQuality:2.2
}
```

Also, for POST requests, your request will need a header of `Content-Type: application/json`.
</section>

#### Error Handling

Make proper error handling for your users to ensure they GET data and submit their POST requests successfully. An example is handling the case where they submit their data and an error message returns from the request. How would you show feedback to a user? Also, validate the input fields on the client-side.

</section>

## Iteration 7 - Differentiation Tracks

Instructors will assign each team **one** of these tracks to work through.
  
<section class="answer">
### Step Challenge

Design a step challenge between a user and some friends (other users). A user in a step challenge wants to see their friends’ results and see who won the step challenge.
</section>

<section class="answer">
### User Trends

A user wants to know how they’re doing overall. What are some interesting trends for a single user? How can you display those trends for a user in a meaningful way? For instance, for a user, were there days with increasing steps for 3 or more days for a given week?
</section>

<section class="answer">
### UI Rearrangement

The user would like to be able to rearrange their dashboard so that certain parts of the UI are at the top or bottom depending on their preferences. You can use a 3rd-party library to help you accomplish this.
</section>

<section class="answer">
### Priority Views

The user would like the ability to select the information they always want to see at the top of the page. This is a customization the user would want to make, and when they leave the app and come back, their customization should stay the same.
</section>

<section class="answer">
### Admin View

An administrator (admin) wants to view data from any user. They also want to see views of interesting data from all users - what are some interesting trends of all users? How can you display data from all users in a meaningful way? For instance, which users have the top ten step counts for a given week?
</section>

<section class="answer">
### Run Map View

Some users have their latest run data associated with their accounts. They would love to be able to see where they ran on a map view. Their latest run data is available at the endpoint: 

**http://localhost:3001/api/v1/users/:userID/latestrun**

Where `:userID` is replaced with a user ID integer. Only users 1-5 have latest run data.

Helpful notes: A recommended mapping library is [Leaflet](https://leafletjs.com/index.html). The run data, which includes the latitude and longitude, for each run is formatted using XML, which is different from the JSON you’re used to! You’ll have to find a new way to parse through the XML to get the latitude and longitude values to plot on a map.
</section>

<section class="answer">
### Stretch Timer

A user wants to be able to time their stretches. This timer should be able to handle a time to hold the stretch, a number of reps, and a number of sets.
</section>

<section class="answer">
### Motivation

The user wants to feel motivated each time they open the app, and they want to be able to input into the app how motivated they feel for any given day.
</section>

<section class="answer">
### Activity Notes

Our users would like to be able to take notes about their day’s activities. For a given day, they would like to be able to keep track of what activity they did and how it went. The data should stay in the application even when refreshed.
</section>

<section class="note">
### Important Notes/Tips

The prompts are purposely vague - it is your job to interpret the task and implement it as you see fit. Be prepared to defend the choices you make in your eval with your project manager.  
  
  
It is very likely that adding your features will require some refactoring. Don't just try to brute force the new feature onto your existing code - spend some time planning what changes (big and small) you'll need to make in your existing codebase to make this feature work while keeping your code organized and efficient. Again, be prepared to defend the choices you make in your eval with your project manager.
</section>

---

### Usability Testing

As developers, we can get so accustomed to the features we create that we forget that users don’t have any background or know how to use a feature for the first time. That’s why it’s important to observe unbiased users try out your features and see where they succeed or have trouble. These observations are called usability tests.

Once your track’s feature is at a point where it’s usable and ready for some feedback, but before you think everything is finalized, that’s the right time to perform the usability test for the track's feature.

Your group will create a usability test for another group to go through. Here is the process:

1. Ask someone from another project group to be the tester (participant)
2. Schedule a time to do the usability test with the participant
3. Create a script for the usability test
    1. Decide what you are trying to learn from the usability test (can a user do [blank]? can a user find [blank] and know how to use it? do they notice [blank] information on the page?).
    2. Write step-by-step instructions for the participant doing the usability test to follow as you observe them.
    3. After the observation is done, prepare a few questions to ask the participant about how they felt while they were trying the feature.
    4. The usability test should not last for more than 30 minutes
4. Perform the test and take notes
5. Incorporate any valuable feedback into your application

You want to give the participant a specific task, but also balance that specificity with letting them try to find out how to do something. Try not to ask them leading questions like, "What was the source of your navigational difficulties?" This question assumes that the user had difficulties and that the difficulties came from software, specifically "navigation". Instead, you could ask "What has been your experience with this application?"

Once your usability test is complete, incorporate any useful and interesting feedback into your application. This is a feedback cycle that would ordinarily happen many times in your future job to improve your application.

### Accessibility

- You must be able to tab through your app and use it without a mouse
- Your app must still be usable when tested with a colorblind extension
- You must score as close to 100% as possible with the “Lighthouse" and "WAVE" accessibility audits. *Make sure that these audits pass on all pages and views.*  Be prepared to explain any accessibility audits your application is failing.
- Your HTML must be written semantically and should use ARIA tags (_ONLY if needed / appropriate_)

---

### Minimum Collaboration and Professionalism Expectations
* Team holds daily standups throughout project.
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* A project board is utilized (and updated throughout the project) with Github issues and labels.
* Team uses branches, PRs and thorough code reviews to add new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
  * **Part 2 Specific**
    * *How the new feature was handled*
    * *What was done to address accessibility*
    * *How usability testing was implemented*
  * List of contributors
* **Team collaborates effectively to accomplish the shared goal.  Team productively and professionally works through challenges and conflicts to ensure all team members are able to be heard and contribute throughout the project.**  
  * Instructors are available to offer support and guidance but conversations around what *is* and what *is not* working are expected to be led by the team members themselves.

---

## Project Requirements Rubric

For the rubric sections below, you will be scored as **Wow**, **Yes** or **Not Yet** depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstrate competency.  These are just *some* examples. 

<section class="answer">
### Does the project demonstrate student understanding of the learning goals & concepts?

Projects will answer that question, being marked as yes, not yet, and wow. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

The overall project outcome (yes, not yet, wow) is determined by “averaging” each section’s outcome. You can think of a “yes” being worth a 1, a “not yet” being worth a 0, and a “wow” being worth a 2.

For this project, an average of 0.5 is considered a yes - a passing project that demonstrates good student understanding! An average of 1+ is considered a wow. Anything below a 0.5 is considered a not yet - a project that indicates that the concepts have not been fully understood (see note in the section below). 
</section>

While M2 rubrics do not have a separate section for WOWs like in M1, there are a few WOW examples noted throughout.  In addition to these WOW bullets, you can strive for a WOW by demonstrating not just competency, but excellence and thoroughness across the rubric sections. 

<section class="answer">
### Functional Expectations
* **Wow**: Application fulfills all iteration requirements, without bugs, and the user experience is intuitive and consistent.
* Yes: Application fulfills all iteration requirements, including implementing feedback from Part 1 and feedback from the usability test.
* Not Yet: Application crashes or has missing functionality or bugs.
</section>

<section class="answer">
### Testing
- Application has a robust and thorough test suite.
- Test suite covers all scenarios/outcomes, including happy and sad paths.
- Test suite is organized.
- Tests use smaller, sample data files as input rather than the large, original data files.
- `beforeEach` hook is used to DRY up test files
- There are no failing/pending tests upon submission
</section>

<section class="answer">
### Accessibility

- The Lighthouse and WAVE audit tools were used to test and improve accessibility.
- Application uses semantic HTML.
- Users can have a seamless experience using only a keyboard to navigate the application (no mouse).
- Users who have color-blindness can utilize this application without issue.
- ARIA attributes are used on interactive elements if needed - and *only* if needed.
- **Wow option**: design is responsive across small, medium and large breakpoints
</section>

<section class="answer">
### JavaScript Refactoring
- Code has been refactored into logical components each with a clean, single responsibility
- Array prototype methods are used to iterate instead of for loops
- All DOM manipulation is held in the `domUpdates.js` file.  No DOM manipulation occurs outside of this file.
- Application handles all scenarios for error handling
- `fetch` is effectively implemented for GET and POST
- DOM is updated based on the results of network requests
- Demonstrates efforts towards making functions pure when possible. *Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.*
- **WOW option**: Effectively implements one or more closure throughout project.  *Note: See Closures lesson on M2 lesson page as a resource.*
</section>

### Collaboration and Professionalism 
- See "Minimum Collaboration and Professionalism Expectations" above.  
- While this is not a scored rubric section, every team member is expected to fully participate, contribute, communicate and collaborate with the team throughout the entirety of this project. **Failure to do so can result in an individual failing the project, even if the group/project is otherwise passing**.

---

## Evaluation

### Presentation

Part of your future interviews will be talking about your application, code, and decision process as a developer, and this presentation is _great_ practice for that situation. Your group’s presentation should have slides that include:

- What was your track?
- Given the vague track feature goal, what was your process like to go from idea to code to finished product?
- What was challenging about your track?
- What work were you proud of from your track?
- What did you observe during the usability test, and did you change anything about your application?
- How close were your time estimations for certain tasks? Did you overestimate or underestimate, and what do you think the cause was of the difference?

Aim for the presentation to take about 10 minutes.

### Interview Questions

As a group, you will respond to high-level technical questions, interview-style. These questions will all relate to the work you’ve done on this project. For example, “Describe what a POST request is and why we might perform one.”

Individually, you will be asked a question at random to respond to. You must give an attempt at responding to it before passing it off to a group member if you’re unsure. Imagine you don’t know the answer to a question on a technical interview, you won’t simply say “I don’t know”. Will you try to take an educated guess? Will you say you’re unsure? Will you try to explain by example?

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask a follow-up question to you - or they may open it up to volunteers in the group to assist.

If you get a question wrong, it will not count against you! This is really all about getting some practice answering interview-style questions.
