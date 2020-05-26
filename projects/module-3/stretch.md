---
title: Stretch
module: 3
tags: react, javascript, api, frameworks
---

## Introduction and Learning Goals

You've made it through your first front-end JavaScript framework: React! Now that you have the building blocks down, it's time to take what you've learned, build something creative, and dive into some independent learning of new technologies.

Incorporating a new technology into your application that isn't explicitly taught will give you the opportunity to differentiate yourself from other Turing grads and give you a great story to tell in your job interview - employers love to hear about your experiences being self driven and learning new technologies outside of the standard Turing curriculum.

No one hires a junior dev based on what the junior already knows. Instead, junior developers are successful when they showcase their ability to learn and ask questions. This project will provide tangible, demonstrable anecdotes for you to bring up during interviews to show your ability to struggle with new material and problem solve!

You have a lot of freedom with this project, but there are a few requirements listed next.

## Requirements

As a group, you need to decide on:

1. A minimum viable product (MVP) idea that solves a problem for your users
1. The use of at least one external API
1. Choose one category from the "Stretch Technologies" section below

### MVP

Your application needs to be summarized with a minimum viable product. What is the smallest set of features to give the user a way to accomplish the goal of the application?

The project is very open-ended in that you can make pretty much anything you want. However, we have some requirements to follow:
* The application cannot simply be a display of data - there needs to be some way for the user to work with or manipulate the data (think favoriting at the very least, but be more creative than favoriting)
* The application should be a multi-page application using React Router
* Be able to answer: What problems are you solving? What features must the solution include to solve this problem?

Create a summary (MVP) of what your application will do and who your application is made for - be specific with your audience because it will give you direction in your work and make your project more interesting.

### Data APIs

Here is a list of some data APIs that are open to the public:

* [Harry Potter](https://www.potterapi.com/)
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

### Stretch Technologies

In addition to an API, you must choose a new technology (or set of technologies) to work with. Here are the possibilities for technologies you can explore for this project.

**Note:** For all technologies except for "Another Framework" listed below, the expectation is that you are using React.

#### Global State Management

As apps begin to grow and grow, state management via `this.state` and passing props down through dozens of components gets kind of tangled, messy, and confusing. There are some tools invented to alleviate that issue:

* Redux
* MobX
* React's built-in Context API

Companies with large apps are likely to be using a state management tool like the ones listed above. If you're interested in this, you should pick _one_ tool from the list and use it within your React app.

#### Workflow

Writing bug-free code can be made easier by adding some very common workflow tooling. Here are just a few you will see on the job, and learning these will make you productive in your job sooner. If you're interested in this category, then you must complete all listed here:

* Continuous Integration (using Travis CI or Github Actions)
* git hooks (add pre-commit hook to check for linter error and forgotten `console.log`s and deny the commit until those are fixed)
* Deployment to production with Heroku
* Automatic deployment to Heroku when a PR is merged to `master` on GitHub

#### Testing

For those who just can't get enough testing, there is another testing subject we haven't touched on: end-to-end testing. This is another type of testing that loads your app in a browser and clicks on buttons/types in forms automatically. The technology we would like to see used here is called Cypress, which is a very popular E2E testing tool.

If you choose this, then all of your large/important integration tests should be done with Cypress. Unit tests should still be done using React Testing Library.

#### React Hooks

React "hooks" is a way of writing React components that are all functional - no class components needed. Lifecycle methods and state are wrapped up into hooks. Choosing this means you will create your application in React, and all of your components should be functional. You should be utilizing hooks to manage your state and lifecycle needs.

#### Another Framework

React might not be the framework you end up working with on the job, and employers might want to see that you can be flexible in the technologies/frameworks you work in. Choosing this category means that you would use a framework other than React - there are two you can choose from for this project since they have a similar feel to React:

* Vue
* Svelte

**Some things to note**: Instructors will not be able to give in-depth feedback because most instructors do not have a lot of experience in each of these frameworks, and you will still be required to test the application even though you are choosing a framework other than React. **You will not be able to use React Router with these frameworks, start with a single-page application and add a routing tool once you get moving in the new framework.**

#### User Authentication

Some apps allow you to sign in using your Google, Facebook, or Twitter account - this is called user authentication. If you made this yourself, you would need a back-end server to store the user's data and it gets complicated, which is too much for this project. Use a third-party library like: PassportJS, Auth0, or Google's Firebase to enable a user to login to your application via Google, Facebook, and/or Twitter. The user should be able to stay logged in even after refreshing the page.

#### TypeScript

The JavaScript language that we know and love is loosely typed - meaning a variable that you make can hold a string, and then you can change the value to a number and JS has no problem with that. TypeScript says once a variable is a string, it must stay a string, amongst other features. It's increasingly popular and some employers are seeking TypeScript experience.

You can add TypeScript in React! This is a big shift in writing JavaScript like you have been, so be sure to keep your MVP small and then you can add on as you go. To get started with TypeScript and `create-react-app`, [start here](https://create-react-app.dev/docs/adding-typescript/).

#### Miscellaneous

If you choose from this category, then you must pick at least two of these options:

* Styled Components
* Localization and Internationalization (would recommend using a library for this like [react-i18next](https://github.com/i18next/react-i18next))
* GSAP Animations or WebGL Animations
* 100% passing accessibility testing using an accessibility analyzer like A11y or Axe


## Deliverables

### Day 1

Create a private Slack channel with your team members and instructor project manager. Submit the following by **noon** of day 1:

* MVP summary with a description the problem you are solving and your audience
* The API you will use
* DTR (be as actionable, detailed, and specific as you can)
* Wireframes of your application (using any electronic or hand-drawn tool you would like)
* Project management tool (with some cards filled out and assigned to team members)
* A plan for how you will learn the stretch technology together as a group

### Most Days

Your instructors will do a stand-up meeting in the mornings to see where the group is at, and give a chance for each group member to talk through what they're working on or where they have blockers.

### Day 4

Your instructors will do a formal check-in with your group. At this check-in, instructors expect to see:
* A very quick demo of your application so far detailing the progress made toward your MVP
* Your testing suite running
* Progress you've made on your Stretch Technology category
* Any blockers you're experiencing
* Your plan going forward for the next few days

Share your app progress with the class for Show and Tell! Be prepared to tell the story or what your app is, why you're making it, and share a quick demo of your app so far. In total, the show and tell for your app should last no longer than 10 minutes.

## Rubric

Coming soon.
