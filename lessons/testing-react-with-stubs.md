---
title: Testing React: Stubs/Spies/Mocks
length: 
module: 2
tags: react, testing, enzyme, stub, spy, mock
---

# Testing React: Stubs/Spies/Mocks

## Repository

[Lesson Repository](https://github.com/turingschool-examples/react-testing-with-stubs)

## Goals

By the end of this lesson, you will know/be able to:

* Understand the Concept of a Test Runner: Mocha vs Jest
* Be Familiar with Libraries Used to Mock/Stub/Spy: Sinon vs. TestDouble vs. Runner-Based Solutions
* Practice a Specific Implementation with Mocha and Sinon

## RoadMap

## Hard Things About Testing React

There are times that we do complicated things with React. For example:

- Write to localStorage
- Hit an external API
- Post to Firebase
- Respond differently based on time of day

Testing a React component that does any of these things is in direct conflict with these rules of testing.

- A test suite should be able to run without an internet connection
- A test suite should run as quickly as possible so that you can run it frequently during your development process
- A test suite should NEVER hit or share the same storage resources as your production users
- A test suite should have the same outcome no matter what time of day, or number of times you run it (i.e. no intermittant failures)

We can solve these tricky problems in React (and in other libraries/languages) by using concepts called ***mocking***, ***stubbing*** and ***spying***

For the rest of this lesson - we'll focus on how to implement these solutions in React. Check out the additional resources to learn about mocking, stubbing and spying in JavaScript testing in general.

##### Additional Resources: 

[Testing JavaScript in General with Mocks, Stubs and Spies](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/testing_javascript-mocks_and_stubs.markdown)

##### Your Turn

- Take the next ***10 minutes*** and re-read the JavaScript Testing Lesson above.
  - Don't code along with the examples, just read the overview. We'll work through examples in React later on today.
- (Try to) answer the following questions
  - What is the difference between a mock, stub and spy?
  - When have you used these techniques already?

## Alphabet Soup: Why Is It So Hard to Google React Testing?

How many times have you been looking up example repositories and blog posts to try and figure out how to do something in JavaScript?

Let's say you google 'testing localStorage in React'

You find some stackoverflow answers, some blog posts, a few npm packages.

The first example you click looks great, until you get to '...and we're testing this using Karma, Jest and Istanbul'

Everything else about the scenario is correct, they're using React, they're storing info in localStorage... but you have no idea what Karma, Jest and Istanbul are, other than names of Power Ranger villains. It's hard to use the blog post to help yourself understand the concept because the tech stack seems wildly different.

One of the most difficult parts of learning how to test in JavaScript is the fact that there are 14 different ways to do basically anything.

So let's spend some time talking about the tech stack we will use in this lesson - and what the other options are....

## Jasmine vs. Mocha vs. Jest vs. Enzyme

If you've done an [exercism exercise](http://exercism.io/languages/javascript/installing), you've used a spec framework called [Jasmine](http://github.com/pivotal/jasmine) (or actually more specifically [jasmine-node](https://github.com/mhevery/jasmine-node)). Jasmine included a test runner (the thing that finds your test files and runs them) AND an assertion library (the thing that lets you say things like `expect(something)to.eq(somethingElse)`) AND some other bells and whistles.

When you wrote tests for [GameTime](http://frontend.turing.io/projects/game-time.html), or for our [data structures sessions](https://github.com/turingschool/data_structures_and_algorithms/blob/master/linked_lists/javascript/linkedList_test.js) you used a test runner called [MochaJS](https://mochajs.org/) and an assertion library called [ChaiJS](http://chaijs.com/).

The problems you were solving were relatively simple. Well not the problems, but the set up. You had vanilla JS, maybe some jQuery, a little bit of putting things on the DOM... 

The main difficulty in testing front-end applications is the nature of some of the advanced things that frameworks and libraries do for us. For example, React has a virtual DOM. Components have state, receive props, they have an entire life cycle. It's complicated stuff, and we want to try and make our tests simple.

So it's not enough to just use Mocha + Chai or Jasmine

###### We Want a Specialized Testing Tool for React

The two major React testing tools right now are [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest).

[Jest](https://facebook.github.io/jest) is created by Facebook and is actively in development. Anecdotally, it sort of sucked for a while and now is really wonderful. It also has a lot of features. For that reason, it is great to use but NOT great to learn with. We teach Mocha instead of Jasmine because mocha is light weight... and we'll teach Enzyme instead of Jest for the same reason.

[Enzyme](https://github.com/airbnb/enzyme) is created by AirBnB. It is a `JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.`

The lessons you learn in using Enzyme will translate to Jest - of if you started working in Angular and used their Angular testing tool called [Protractor](https://angular.github.io/protractor) and when someone creates a new framework called American Black Bear... and etc etc etc... 

Enzyme is lightweight, so we will use some of our familiar testing tools in this lesson.

##### Our Testing Stack

- Mocha: To run our tests
- Chai: To give us an assertion syntax
- Enzyme: To give us special React testing ammenities
- Babel: To translate our ES6 to ES5
- Webpack: To manage the entire process
- ______: To give us stubbing/spying/mocking ammenities

You will see many different tech stacks as you google things - but this is our tech stack, and I happen to like it very much.

Notice I left that last section blank. Let's talk about how we'll integrate mocks/stubs and spies into our tech stack next.

##### Additional Resources: 

- [Testing React with Enzyme](http://frontend.turing.io/lessons/testing-react.html)
- [Jest](https://facebook.github.io/jest)

##### Your Turn

- Take the next ***10 minutes*** and review the Additional Resources list above: JavaScript Testing with Enzyme Lesson and the front page of the Jest website.
  - ***Don't code along with the examples***, just read the overview. We'll work through examples in React later on today.
- (Try to) answer the following questions
  - What does it seem like the difference is between Jest and Enzyme for you?
  - Does anything in the Enzyme lesson make more sense, or less sense, since the last time you read it?

## Mocking/Stubbing/Spying Libraries

#### Hand Rolling

#### Sinon vs. TestDouble vs. Runner-Based Solutions

## Setup the Testing Tech Stack

- Mocha: To run our tests
- Chai: To give us an assertion syntax
- Enzyme: To give us special React testing ammenities
- Babel: To translate our ES6 to ES5
- Webpack: To manage the entire process
- Sinon: To give us stubbing/spying/mocking ammenities

## Practice Specific Implementations

- Write to localStorage
  - I do
  - You do

- Hit an external API
  - I do
  - You do

- Post to Firebase
  - I do
  - You do

- Respond differently based on time of day
  - I do
  - You do

## Clarifying Questions

## Additional Resources

- Blog: [Testing React Components with Enzyme and Mocha](https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha)