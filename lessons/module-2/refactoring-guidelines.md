---
title: "Managing Technical Debt - Refactoring & Reformatting"
length:
tags: javascript, js, refactoring
---

## Goals

By the end of this lesson, students should be able to:

* define technical debt
* identify several code smells and areas for improvement in codebases

## Vocab

- `Technical Debt` The build up of code that might be inefficient, fragile, unreadable, and/or difficult to maintain
- `Code Smell` A surface level indication of bad code that usually corresponds to a deeper, more fundamental problem
- `Refactoring` The process of changing the internals of a system (it's factoring), without changing its external behavior
- `DRY` Don't Repeat Yourself

## The Basics

Refactoring your code is an important part of reducing <b>technical debt</b>. Technical debt is the build up of code that might be inefficient, fragile, unreadable, and/or difficult to maintain.
 
As we work under strict deadlines, we often write less-than-ideal code that might suffer from the above ailments. No codebase will ever be perfect, but we can take a lot of simple steps to clean up our projects and keep our technical debt in check.


## Tracking Technical Debt: GitHub Issues

First things first: before you even begin to prioritize working on technical debt, keep track of it. This is a great use-case for GitHub issues. Because resolving technical debt is usually a lower priority, and not as urgent as bug fixes and feature completion, it's important to file issues that will remind you of what needs fixing up once you have some downtime.

When you file issues for technical debt, it's helpful to put a label on them so you can filter through them later. Often times you'll see issues labeled 'P1', 'P2', 'P3', which represents the priority level of the issue. Usually refactoring issues are labeled with a lower priority (P3 is lower than P1). You might also add a label called 'technical-debt' or 'enhancement'. Feel free to use whatever label name makes sense to you, but those are some popular ones you'll see in the wild.

<em>Note: For Turing students specifically, filing issues is incredibly important. While you're interviewing, issues indicate to an employer that you know how to improve your projects. Even if you don't have time to resolve all of the issues you file (you won't), you can at least signify to potential employers that you're aware x, y, and z are broken and you plan on fixing them. (Filing these issues will also give you nice, bite-sized work to do after graduation when you're trying to keep coding.)</em>

<!-- go through an example of opening an issue on gametime project -->

## Write Your Tests

Testing your application is an important part of keeping technical debt under control. The more test coverage you have, the easier it will be to refactor your code later. Often, the scariest part of refactoring your code is not knowing whether or not something is going to break based on the changes you made. Unit tests and acceptance tests will let you know if your changes have broken any existing functionality, so you can safeguard yourself against adding bugs to your project.

While testing may seem daunting or time-consuming upfront, it will save you a lot of time and stress in the long run. There is no better feeling than refactoring some code, and having a test alert you to a potential bug you may have introduced. 


## Lint Everything

Linting your files helps prevent a lot of technical debt. For starters, it forces you to conform to a style guide for writing your code. The consistency provided by style guides makes your code infinitely easier to read. Without a linter, and with many collaborators, a codebase can quickly become an unreadable mess. Being able to read your code is a necessary requirement before you can start identifying areas for improvement.

Take a look at how much of a difference linting can make for readability:

<img src="/assets/images/lessons/refactoring/linting.gif" width="800px" />


## Maintain a Healthy Git Workflow

Many linters will catch things like debugger statements and `console.logs()`, but occasionally some of the things that we do in development will sneak through the linter and into our codebase. For example, a lot of new developers will try out several solutions to solve a problem, and leave a bunch of commented-out code from their prior attempts in place. There is no reason to commit commented-out code. You can hold onto those types of things through git in a number of ways. `git stash` is a great way to temporarily hang onto some code, and ensure it doesn't sneak into your commits. You should also get into the habit of adding code to your commits in patches rather than in bulk: `git add --patch`.

Similarly, you want to make sure you don't accidentally leave "dead" code in your codebase. Any functions, methods, variables that you were using at one point, but aren't any more, should be removed. Leaving in dead code makes it really difficult for new developers to jump into the codebase and understand what's happening.

Additionally, both commented-out code and dead code are often dead giveaways that you are throwing solutions at the wall rather than taking a purposeful, logical approach to solving a problem. Leaving these things in can affect people's confidence in the stability of the codebase and the developers working on it.

## Types of Code Smells

### Repetitive Code

One of the most common code smells is redundant code. Ever find yourself copy and pasting chunks of code from one part of a file to another? Don't do that! Any time you see the same exact code in multiple places, or even just very similar code, you've got some refactoring to do. "Don't Repeat Yourself" is a core pillar of maintaining a healthy codebase. DRY up your code as much as possible. Here's an example where no line of code is exactly the same, but it still could use some DRYing up:

```js
const color1 = $('#color1').children('p').text();
const color2 = $('#color2').children('p').text();
const color3 = $('#color3').children('p').text();
const color4 = $('#color4').children('p').text();
const color5 = $('#color5').children('p').text();
```

Notice that only the number is changing in each line. We could refactor this using a for loop:

```js
let colors = [];

for (let i = 0; i < 5; i++) {
  colors[i] = $(`#color${i}`).children('p').text();
}
```

Also note in this example, if you're ever naming variables with numbers appended to them, or making variables like `FirstThing` and `SecondThing`, that's another big code smell. Imagine if your app needed to scale and you eventually had a variable named `QuintillionthThing`. Numbering variables is usually a sign that you should be using an array and accessing them by their index.


### Hardcoded Values

Hardcoded values are often strings or other values that you use in multiple places throughout your codebase. The problem with hardcoding values like this is that if that value ever needs to change, now you have to update it in multiple places. It's best to store these types of values in a variable at the top of your file (or in the scope of wherever it's needed) so that you only have to change it once when the time comes. A common example that you'll run into in the future is seeing hardcoded URLs for accessing third-party APIs. For example, we would want to turn this:

```js
fetch('https://weatherunderground.com/api/v1/7day-forecast/denver')
  .then(forecast => handleDayForecast(forecast))
  .catch(error => throw error);
  
fetch('https://weatherunderground.com/api/v1/hourly-forecast/denver')
  .then(forecast => handleHourForecast(forecast))
  .catch(error => throw error);
  
fetch('https://weatherunderground.com/api/v1/radar-map/denver')
  .then(forecast => handleRadarMap(forecast))
  .catch(error => throw error);
```

Into something like this:


```js
const API_HOSTNAME = 'https://weatherunderground.com/api/v1';
const CITY = 'denver';

fetch(`${API_HOSTNAME}/7day-forecast/${CITY}`)
  .then(forecast => handleDayForecast(forecast))
  .catch(error => throw error);
  
fetch(`${API_HOSTNAME}/hourly-forecast/${CITY}`)
  .then(forecast => handleHourForecast(forecast))
  .catch(error => throw error);
  
fetch(`${API_HOSTNAME}/radar-map/${CITY}`)
  .then(forecast => handleRadarMap(forecast))
  .catch(error => throw error);
```

### Long, Gnarly if-else Statements

Try to keep your if-else statements to a legitimate if, else, and nothing more. Relying heavily on `else if`'s is a sure sign your conditional logic is getting a little out of control. Some ways to refactor unruly if-else statements is to convert them into `switch` statements, or create an object of key-value pairs that you can use as a reference map for certain conditions. 

Turn to the person sitting next to you, and spend the next 5 minutes
talking about how you could refactor this code example: 

<!-- CODE REFACTOR SOLUTION MOVED TO BOTTOM (IF-ELSE REFACTOR) -->

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

## When to Prioritize Refactoring

We mentioned earlier that refactoring is often a secondary priority. It's hard to know when exactly to prioritize resolving technical debt, but there are a couple of scenarios where it makes sense:

* **When you have some down time.** Some teams will even dedicate some sacred time to resolving technical debt each week to make sure it doesn't get out of hand.
* **When refactoring will make it faster or easier to implement a new feature.** Sometimes the time spent refactoring upfront will save you time down the road. If you're running into a serious roadblock with pre-existing code that's making it difficult to work on your higher-priority tasks, this might be a good time to do some refactoring.
* **When you can resolve the technical debt quickly without taking yourself off your current task.** If you notice something small (e.g. a linter or code style error) that can be cleaned up while you're working on another feature, feel free to fix it right away rather than filing an issue to fix it later. In this scenario, you would still want to create a separate commit for the refactoring fix, to prevent cluttering up the diff on your feature commits.
* **When you don't have a choice** Many dev teams use something called
"Continuous Integration", or "CI". These are various "hooks" or scripts that
run before your code can be merged into master. Often times, these hooks
include running your code linter, your test files, or any other maintenance
libraries that your codebase depends on. 


## Practice

Take the following code examples and try to identify what code smells you find. Then make an attempt at refactoring them.

#### Example 1

```js
if (explode === 'no') {
  let playerImage = new Image();

  playerImage.src = 'assets/airplane.png';

  drawImage(
    playerImage,
    x,
    y,
    width,
    height
  );

} else if (explode === 'yes') {
  let playerImage = new Image();

  playerImage.src = 'assets/kapow.png';

  drawImage(
    playerImage,
    x,
    y,
    width,
    height
  )
}
```

#### Example 2
The following code is used to toggle between two players. If a player successfully places a token in the array, a token is created for the other player. If a player does not successfully place a token a new token is created for the original player.

```js
function togglePlayer(currentToken) {
  if (currentToken.player === "Player One") {
    var placedToken = currentToken.place(currentToken, newArray);

    if (placedToken) {
      newArray.push(placedToken);
      return new Token("Player Two");
    } else {
      return new Token("Player One");
    }

  } else {
    var placedToken = currentToken.place(currentToken, newArray);

    if (placedToken) {
      newArray.push(placedToken);
      return new Token("Player One");
    } else {
      return new Token("Player Two");
    }
  }
}
```

## Checks for Understanding

* What is technical debt?
* What are some things we can do to keep technical debt under control?
* When should we prioritize resolving technical debt?

### IF-ELSE REFACTOR SOLUTION

Switch Statement Example: 

```js
const keyMapping = key => (
  switch(key) {
    case 'key37': 
      return 'left';
    case 'key38':
      return 'up';
    case 'key39': 
      return 'right';
    case 'key40':
      return 'down';
    default:
      return 'up';
  }
)

const evalInput = event => {
 if (event.keyCode === 72) {
  return game.winLevel();
 } 

const direction = keyMapping(event.keyCode)
  return game.toad.moveToad(direction, canvas);
}
```

Object Map Example:

```js
const keyboard = {
  'key37': () => game.toad.moveToad('left', canvas),
  'key38': () => game.toad.moveToad('up', canvas),
  'key39': () => game.toad.moveToad('right', canvas),
  'key40': () => game.toad.moveToad('down', canvas),
  'key72': () => game.winLevel()
};

function evalInput(event) {
  const property = `key${event.keyCode}`;

  if (keyboard[property]) {
    keyboard[property]();
  }
}
```

