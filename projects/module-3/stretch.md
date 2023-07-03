---
title: Stretch
module: 3
tags: react, javascript, api, frameworks
---

## Introduction and Learning Goals

You've made it through your first front-end JavaScript framework: React! Now that you have the building blocks down, it's time to take what you've learned, build something creative, and dive into some independent learning of new technologies.

Incorporating a new technology into your application that isn't explicitly taught will give you the opportunity to differentiate yourself from other Turing grads **and** give you a great story to tell in your job interview - employers love to hear about your experiences being self driven and learning new technologies outside of the standard Turing curriculum.

No one hires a junior dev based on what the junior already knows. Instead, junior developers are successful when they showcase their ability to learn and ask questions. This project will provide tangible, demonstrable anecdotes for you to bring up during interviews to show your ability to overcome challenges with new technologies and implement your problem-solving strategies.

You have a lot of freedom with this project, but there are a few requirements.

## Requirements

By the time this project is submitted for evaluation, it must:

1. Meet the specs listed below under "MVP"
1. Use at least one external API
1. Implement one of the "Stretch Technologies" listed below.
1. Be deployed
1. Be a featured project on your resume (Your resume must meet all requirements listed in [this document](https://careerdev.turing.edu/resources/resume_resources).)

## MVP

Your application needs to be summarized with a **minimum viable product**. What is the _smallest_ set of features to give the user a way to accomplish the goal of the application?

The functionality for Stretch will be MUCH LIGHTER than the functionality in previous projects. Remember: the learning goals of this project are to expand/deepen your understanding of your learning process & dynamics within a team - NOT to build the flashiest thing ever.

The project is very open-ended in that you can make pretty much anything you want. However, we have some requirements to follow:  
* Assume one single user - multiple users with log in and authentication is out of the scope of this project.
* The application cannot simply be a display of data - there needs to be some way for the user to work with or manipulate the data (favoriting, searching, filtering, commenting, rating, etc)
* The application should be a multi-page application using React Router
* Be able to answer: What problems are you solving? What are the minimum features the application **must** have to solve this problem?

Create a summary (MVP) of what your application will do and who your application is made for - be specific with your audience because it will give you direction in your work and make your project more interesting.

## Data APIs

<section class="answer">
### Here is a list of some data APIs that are open to the public:

* [Thesaurus](https://words.bighugelabs.com/site/api)
* [Jokes](https://jokes.one/api/joke/)
* [Pokemon](https://pokeapi.co/)
* [Cat Facts](https://alexwohlbruck.github.io/cat-facts/docs/)
* [Marvel](https://developer.marvel.com/)
* [Dad Jokes](https://icanhazdadjoke.com/api)
* [Covid 19](https://covid19api.com/)
* [IQAir - Real-Time Air Quality Forecast](https://www.iqair.com/us/air-pollution-data-api)
* [eBird](https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest)
* [Dog CEO - Pictures of Dogs](https://dog.ceo/dog-api/)
* [The Cat - Cat Pictures and Info](https://thecatapi.com/)
* [New York Times](https://developer.nytimes.com/)
* [Makeup](https://makeup-api.herokuapp.com/)
* [Dandelion - Semantic Text Analytics](https://dandelion.eu/docs/)
* [Jemendo Music](https://developer.jamendo.com/v3.0) - stay away from editing a private user's data as this will require OAuth, which is too much to take on for this project
* [Board Game Atlas](https://www.boardgameatlas.com/api/docs/) - stay away from writing data for a user as this will require OAuth, which is too much to take on for this project
* [Cards](http://deckofcardsapi.com/)
* [Dungeons and Dragons](https://www.dnd5eapi.co/docs/)
* [Paleontology](https://paleobiodb.org/data1.2/)
* [E-Sports](https://pandascore.co/)
* [Song Lyrics](https://lyricsovh.docs.apiary.io/#reference)
* [TasteDive Recommendation Engine](https://tastedive.com/read/api)
* [Harvard Art Museums](https://www.harvardartmuseums.org/collections/api)
* [Rijks Museaum](https://www.rijksmuseum.nl/en/api/-rijksmuseum-oai-api-instructions-for-use)

Some of these APIs require API keys to consume the data. You'll have to go to the documentation for that API to find out how to get an API key and how to use the API key in your network requests.

You can also take a look at [this list of APIs](https://github.com/public-apis/public-apis) for some more ideas. However, stay away from APIs listed here where "Auth" is "OAuth" and where "CORS" is either "Unknown" or "Yes". If you find an API in this list or from somewhere else that you are interested in using, then let your project manager know so they can help you see if it will be relatively easy to work with.
</section>


## Stretch Technologies

In addition to an API, you must choose a new technology (or set of technologies) to work with. Here are the possibilities for technologies you can explore for this project.

**Note:** For all technologies except for "Another Framework" listed below, the expectation is that you are using React.

<section class="answer">
### Global State Management

As apps begin to grow and grow, state management via `useState()` and passing props down through dozens of components gets kind of tangled, messy, and confusing. There are some tools invented to alleviate that issue:

* React's built-in Context API
* Redux

Companies with large apps are likely to be using a state management tool like the ones listed above. If you're interested in this, you should pick _one_ tool from the list and use it within your React app.
</section>

<section class="answer">
### Workflow

Writing bug-free code can be made easier by adding some very common workflow tooling. Here are just a few you will see on the job, and learning these will make you productive in your job sooner. If you're interested in this category, then you must complete all listed here:

* Continuous Integration (using Travis CI or Github Actions)
* Deployment to production using any deployment service
* Automatic deployment when a PR is merged to `main` on GitHub
</section>

<section class="answer">
### Testing

For those who just can't get enough testing, you can challenge yourself to do acceptance testing with our friend Cypress, AND unit/integration testing with React-Testing-Library or Enzyme!

* React-Testing-Library
* Enzyme

If you choose this, then all of your large/important integration tests should be done with Cypress. Unit tests should still be done using React Testing Library.
</section>

<section class="answer">
### Another Framework

React might not be the framework you end up working with on the job, and employers might want to see that you can be flexible in the technologies/frameworks you work in. Choosing this category means that you would use a framework other than React - there are two you can choose from for this project since they have a similar feel to React:

* Vue
* Svelte

**Some things to note**: Instructors will not be able to give in-depth feedback because most instructors do not have a lot of experience in each of these frameworks, and you will _still be required to test the application_ even though you are choosing a framework other than React. **You will not be able to use React Router with these frameworks, start with a single-page application and add a routing tool once you get moving in the new framework.**
</section>

<section class="answer">
### User Authentication

Some apps allow you to sign in using your Google, Facebook, or Twitter account - this is called user authentication. If you made this yourself, **you will need a back-end server** to store the user's data and it gets complicated, which is too much for this project. Use a third-party library like:

* Google's Firebase
* PassportJS
* Auth0

to enable a user to login to your application via Google, Facebook, and/or Twitter. The user should be able to stay logged in even after refreshing the page.
</section>

<section class="answer">
### TypeScript

The JavaScript language that we know and love is loosely typed - meaning a variable that you make can hold a string, and then you can change the value to a number and JS has no problem with that. TypeScript says once a variable is a string, it must stay a string, amongst other features. It's increasingly popular and some employers are seeking TypeScript experience.

You can add TypeScript in React! This is a big shift in writing JavaScript like you have been, so be sure to keep your MVP small and then you can add on as you go. To get started with TypeScript and `create-react-app`, [start here](https://create-react-app.dev/docs/adding-typescript/).
</section>

<section class="answer">
### Building a Backend

Not feeling excited about any of the free data APIs? Build your own! If you choose this category, you would be responsible for building your own server in Express, connecting it to a PostgreSQL database (usually with Knex), and hosting it on some deployment service. You would not be required to use a separate data API.
</section>

<section class="answer">
### Progressive Web App

[Progressive Web Application](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction) allow you to turn a regular web page into a [native app](https://www.techopedia.com/definition/27568/native-mobile-app) with access to device hardware, push notifications, offline use, etc.

If you choose to create a PWA, your application must include:
- a manifest file to be able to “install” the application and see an icon on your phone’s home screen
- a service worker to make your app available offline (even if it doesn’t really function offline)  

A few notes:
- Beyond the requirements listed above, the rest of the technologies for PWAs are fairly complex (like web push, background sync, indexedDB). None of these should be included in your MVP.
- The service worker that comes with Create React App can be really frustrating to work with. It is usually better to start from scratch, and there are various tutorials on how to create a service worker from scratch when working with CRA.
</section>

<section class="answer">
### Miscellaneous

If you choose from this category, then you must pick at least two of these options:

* Styled Components
* Localization and Internationalization (would recommend using a library for this like [react-i18next](https://github.com/i18next/react-i18next))
* GSAP Animations or WebGL Animations
* 100% passing accessibility testing using an accessibility analyzer like A11y or Axe
</section>

## Deliverables

Note: All of these dates are reflected in the calendar

### Most Days

Stand-up meetings will be held most mornings to see where the group is at, and give a chance for each group member to talk through what they're working on or where they have blockers.

<section class="answer">
### Day 1 (12 PM MT)

* The link to your MVP proposal in [this google sheet](https://docs.google.com/spreadsheets/d/11TCQtSl_DLo5IaX7ATw3A6uPL-rWQzyxUiT1KghqSKg/edit?usp=sharing)
</section>

<section class="answer">
### Day 2 (4 PM MT)

* The link to your repo
* The link to your DTR
* The link to your Project Board
* A link to 2-3 pieces of design inspiration that you will aim to mimic
* A wireframe of your app - this can include sketches of your user interface, or a link to your Canva, InVision, etc.
...in [this google sheet](https://docs.google.com/spreadsheets/d/11TCQtSl_DLo5IaX7ATw3A6uPL-rWQzyxUiT1KghqSKg/edit?usp=sharing)
</section>

<section class="answer">
### Day 3

Anytime before Day 4:
* In a DM with both instructors, send us the link to a recent PR
* Choose a PR that is related to your Stretch Tech, and use the PR description to fill us in on your learning.
* Sometime in the next few days, we'll perform a code review
* You do not need to wait for our review to merge it in.
</section>

<section class="answer">
### Day 5 (during stand ups)

Your PM will join one of your standups between days 5-7. PMs may ask to see:
* A very quick demo of your application so far detailing the progress made toward your MVP
* **Your testing suite running**
* Progress you've made on your Stretch Technology category
* Any blockers you're experiencing
* Your plan going forward for the next few days
</section>

<section class="answer">
### Day 7 (9:30 AM MT)

Share your app progress with the class for Show and Tell! Be prepared to tell the story of what your app is, why you're making it, and share a quick demo of your app so far. In total, the show and tell for your app should last no longer than 10 minutes (shoot for 5 minutes).

Your project does not need to be done or impressive by this point; this is more of a way to give you a milestone to shoot for and to help plan your timeline.
</section>

## Demo Comp
One of the Stretch Tech projects will be entered into Demo Comp next inning! Demo Comp is an event that happens on Tuesday of week 1 where the top projects at Turing are presented by students in front of Turing students, staff, and real world devs. It's an amazing opportunity to get your name out there and build your network. It's a big honor and we're excited to choose one of your groups to go represent your cohort!  

Your instructors will choose our Demo Comp project by looking for the following things:
* A polished application that is intuitive and professional
* A bug-free application that meets all of the features from your MVP
* Strong implementation of the stretch technology with best practices implemented in React, Router, and Cypress  

Involvement in Demo Comp is optional.

## Evals

Connecting back to the purpose of this project, Evals will be conducted in a way that gives you an opportunity to practice speaking about your learning experience.

Evals are
* 1:1 sessions with you and an instructor from the Frontend Team
* 15 minutes
* Two interview questions - one technical (about your stretch tech) and one behavioral (you get to choose the "theme", but not the specific question)
* You will be expected to send your interviewer your resume (updated with the stretch project) prior to the interview via slack

## Rubric

There will be no written feedback for this project, but each and every one of you is capable of self-assessing whether or not your project is proficient. Mentors and Rocks are also a valuable resource here. **A proficient project would include the following:**  

<section class="answer">
### Minimum Collaboration and Professionalism Expectations

On track can look like:
* Project is deployed
* README concisely communicates the team's individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability
* README links to all user GitHub profiles and any applicable repos & deployed sites
* Setup instructions for any and all repos are thorough and verbose enough that even non-technical people (like recruiters) could follow them
* Git commits are atomic, with concise and precise descriptions of the change made
* PRs have full, consistent descriptions
* Team members conduct consistent code reviews of PRs
* Evolution of the project (decisions made, etc) is documented in the git history and PRs
* When the project is run locally, the terminal shows no errors and no warnings.
* The Team collaborates effectively to accomplish the shared goal. The Team productively and professionally works through challenges and conflicts to ensure all team members are able to be heard and contribute throughout the project.
  * Instructors are available to offer support and guidance but conversations around what is and what is not working are expected to be led by the team members themselves.

WOW can look like:
* Mapping out extensions in your project board beyond your MVP
* Using github issues to track bugs or other issues as they crop up. 
* Getting several PR reviews from your rocks and/or mentors and implementing their feedback _before_ you merge the PR.
</section>

<section class="answer">
### React Architecture:

On track can look like:
* A consistent, modular file structure is used
* Data and functions are passed as props (only as needed) to effectively organize the application
* Logic is pulled out of return statements when it makes sense.  `return` statements are as readable as possible, only communicating what will be displayed
* Frontend state matches the backend data
* Functions follow the single responsibility principle and are written to be reusable when appropriate
* Props are protected via Proptypes or type-checking 
* Application properly uses a catch block for network request error handling (if the server is down or if a fetch call fails) and displays helpful information to the user.
* Application is deployed (to Vercel or similar service)

WOW can look like:
* Data retrieved from a server is run through a cleaning function to handle any missing/inconsistent data and remove any extraneous data that isn't using in the application - before setting that data to state.
* Application design is [responsive](https://frontend.turing.edu/lessons/module-3/css-responsive-layouts.html) across small, medium and large breakpoints

</section>

<section class="answer">
### Stretch Technology:

On track can look like:
* Project implements the chosen stretch tech throughout the entire application
* Group members can all individually speak about the stretch tech's best practices and attempts were made to follow those best practices in your application
* Group members have reflected on the process of learning these technologies and can speak clearly about their learning processes  


WOW can look like:
* The team collaborates on an article, blog post, recorded presentation or some other shareable media that shares the learning, decision-making and the pros and cons of using their stretch tech. This piece of media should use real, specific examples from the project to illustrate the story of how it all came together.
</section>

<section class="answer">
### Testing:

On track can look like:
* Application views are thoroughly tested
* Application user flows are thoroughly tested
* Tests make specific assertions about the content DOM elements contain
* Network requests are properly stubbed (intercepted)
* Happy path async functionality is stubbed and tested

WOW can look like:
* Sad path async functionality is stubbed and tested
* Implements Cypress `fixture` 
* Implements Cypress `command`
</section>

### Collaboration and Professionalism 
- See "Minimum Collaboration and Professionalism Expectations" above.  
- While this is not a scored rubric section, every team member is expected to fully participate, contribute, communicate and collaborate with the team throughout the entirety of this project. **Failure to do so can result in an individual failing the project, even if the group/project is otherwise passing**.