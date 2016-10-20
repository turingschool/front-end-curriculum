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
## What Is a Test Runner: Mocha vs. Jest

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