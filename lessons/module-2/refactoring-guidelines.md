---
title: Managing Technical Debt - Refactoring & Reformatting
length:
tags: javascript, js, array, object, 
---

### Goals

By the end of this lesson, students should be able to:

* define technical debt
* identify several code smells and areas for improvement in codebases



Refactoring your code is an important part of reducing <b>technical debt</b>. Technical debt is the build up of code that might be inefficient, fragile, unreadable, and/or difficult to maintain.
 
As we work under strict deadlines, we often write less-than-ideal code that might suffer from the above ailments. No codebase will ever be perfect, but we can take a lot of simple steps to clean up our projects and keep our technical debt in check.


## File Issues

First things first: before you even begin to prioritize working on technical debt, keep track of it. This is a great use-case for GitHub issues. Because resolving technical debt is usually a lower priority, and not as urgent as bug fixes and feature completion, it's important to file issues that will remind you of what needs fixing up once you have some downtime.

When you file issues for technical debt, it's helpful to put a label on them so you can filter through them later. Often times you'll see issues labeled 'P1', 'P2', 'P3', which represents the priority level of the issue. Usually refactoring issues are labeled with a lower priority (P3 is lower than P1). You might also add a label called 'technical-debt' or 'enhancement'. Feel free to use whatever label name makes sense to you, but those are some popular ones you'll see in the wild.

<em>Note: For Turing students specifically, filing issues is incredibly important. While you're interviewing, issues indicate to an employer that you know how to improve your projects. Even if you don't have time to resolve all of the issues you file (you won't), you can at least signify to potential employers that you're aware x, y, and z are broken and you plan on fixing them. (Filing these issues will also give you nice, bite-sized work to do after graduation when you're trying to keep coding.)</em>

## Write Your Tests

Testing your application is an important part of keeping technical debt under control. The more test coverage you have, the easier it will be to refactor your code later. Often, the scariest part of refactoring your code is not knowing whether or not something is going to break based on the changes you made. Unit tests and acceptance tests will let you know if your changes have broken any existing functionality, so you can safeguard yourself against adding bugs to your project.

While testing may seem daunting or time-consuming upfront, it will save you a lot of time and stress in the long run. There is no better feeling than refactoring some code, and having a test alert you to a potential bug you may have introduced. 


## Lint Everything

Linting your files helps prevent a lot of technical debt. For starters, it forces you to conform to a style guide for writing your code. The consistency provided by style guides makes your code infinitely easier to read. Without a linter, and with many collaborators, a codebase can quickly become an unreadable mess. Being able to read your code is a necessary requirement before you can start identifying areas for improvement.

## Maintain a Healthy Git Workflow

Many linters will catch things like debugger statements and `console.logs()`, but occessionally some of the things that we do in development will sneak through the linter and into our codebase. For example, a lot of new developers will try out several solutions to solve a problem, and leave a bunch of commented-out code from their prior attempts in place. There is no reason to commit commented-out code. You can hold onto those types of things through git in a number of ways. `git stash` is a great way to temporarily hang onto some code, and ensure it doesn't sneak into your commits. You should also get into the habit of adding code to your commits in patches rather than in bulk: `git add --patch`.

Similarly, you want to make sure you don't accidentally leave "dead" code in your codebase. Any functions, methods, variables that you were using at one point, but aren't any more, should be removed. Leaving in dead code makes it really difficult for new developers to jump into the codebase and understand what's happening.

Additionally, both commented-out code and dead code are often dead giveaways that you are throwing solutions at the wall rather than taking a purposeful, logical approach to solving a problem. Leaving these things in can affect people's confidence in the stability of the codebase and the developers working on it.

## Types of Code Smells

### Repetitive Code

One of the most common code smells is redundant code. Ever find yourself copy and pasting chunks of code from one part of a file to another? Don't do that! Any time you see the same exact code in multiple places, or even just very similar code, you've got some refactoring to do. "Don't Repeat Yourself" is a core pillar of maintaining a healthy codebase. DRY up your code as much as possible. Here's an example where no line of code is exactly the same, but it still could use some DRYing up:

```js
const color1 = $('#color1').children('p').text()
const color2 = $('#color2').children('p').text()
const color3 = $('#color3').children('p').text()
const color4 = $('#color4').children('p').text()
const color5 = $('#color5').children('p').text()
```

Notice that only the number is changing in each line. We could refactor this using a for loop:

```js
let colors = [];

for (let i = 0; i < 5; i++) {
  colors[i] = $(`#color${i}`).children('p').text();
}
```


### Hardcoded Values

Hardcoded values are often strings or other values that you use in multiple places throughout your codebase. The problem with hardcoding values like this is that if that value ever needs to change, now you have to update it in multiple places. It's best to store these types of values in a variable at the top of your file (or in the scope of wherever it's needed) so that you only have to change it once when the time comes. A common example that you'll run into in the future is seeing hardcoded URLs for accessing third-party APIs. For example, we would want to turn this:

```js
fetch('https://weatherunderground.com/api/v1/7day-forecast/denver')
  .then(forecast => doThingsWithForecast(forecast))
  .catch(error => throw error);
  
fetch('https://weatherunderground.com/api/v1/hourly-forecast/denver')
  .then(forecast => doThingsWithForecast(forecast))
  .catch(error => throw error);
  
fetch('https://weatherunderground.com/api/v1/radar-map/denver')
  .then(forecast => doThingsWithForecast(forecast))
  .catch(error => throw error);
```

Into something like this:


```js
const API_HOSTNAME = 'https://weatherunderground.com/api/v1';

fetch('/7day-forecast/denver')
  .then(forecast => doThingsWithForecast(forecast))
  .catch(error => throw error);
  
fetch('/hourly-forecast/denver')
  .then(forecast => doThingsWithForecast(forecast))
  .catch(error => throw error);
  
fetch('/radar-map/denver')
  .then(forecast => doThingsWithForecast(forecast))
  .catch(error => throw error);
```

### Long, Gnarly if-else Statements

Try to keep your if-else statements to a legitimate if, else, and nothing more. Relying heavily on `else if`'s is a sure sign your conditional logic is getting a little out of control. Some ways to refactor unruly if-else statements is to convert them into `switch` statements, or create an object of key-value pairs that you can use as a reference map for certain conditions. For example, this:

```js
function evalInput(event) {
  if (event.keyCode === 37) {
    game.toad.moveToad('left', canvas);

  } else if (event.keyCode === 38) {
    game.toad.moveToad('up', canvas);

  } else if (event.keyCode === 39) {
    game.toad.moveToad('right', canvas);

  } else if (event.keyCode === 40) {
    game.toad.moveToad('down', canvas);

  } else if (event.keyCode === 72) {
    game.winLevel();
  }
}
```

Could be converted into something like this:

```js
const keyboard = {
  'key37': () => game.toad.moveToad('left', canvas),
  'key38': () => game.toad.moveToad('up', canvas),
  'key39': () => game.toad.moveToad('right', canvas),
  'key40': () => game.toad.moveToad('down', canvas),
  'key72': () => game.winLevel()
};

function evalInput(event) {
  if (keyboard[event]) {
    keyboard[`key${event}`]()
  }
}
```


## When to Prioritize Refactoring

We mentioned earlier that refactoring is often a secondary priority. It's hard to know when exactly to prioritize resolving technical debt, but there are a couple of scenarios where it makes sense:

* **When you have some down time.** Some teams will even dedicate some sacred time to resolving technical debt each week to make sure it doesn't get out of hand.
* **When refactoring will make it faster or easier to implement a new feature.** Sometimes the time spent refactoring upfront will save you time down the road. If you're running into a serious roadblock with pre-existing code that's making it difficult to work on your higher-priority tasks, this might be a good time to do some refactoring.
* **When you can resolve the technical debt quickly without taking yourself off your current task.** If you notice something small (e.g. a linter or code style error) that can be cleaned up while you're working on another feature, feel free to fix it right away rather than filing an issue to fix it later. In this scenario, you would still want to create a separate commit for the refactoring fix, to prevent cluttering up the diff on your feature commits.


## Checks for Understanding

* What is technical debt?
* What are some things we can do to keep technical debt under control?
* When should we prioritize resolving technical debt?