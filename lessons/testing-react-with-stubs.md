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

## What Is a Test Runner: Mocha vs. Jest

## What is a Test Utility: Enzyme

## What Solutions/Libraries Can We Use

#### Hand Rolling

#### Sinon vs. TestDouble vs. Runner-Based Solutions

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