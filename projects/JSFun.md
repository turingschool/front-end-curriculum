---
title: JSFun
module: 2
length: 1 week
---

## Abstract

JSFun(damentals) will focus on practicing three core concepts of the JavaScript language:

* [context](http://frontend.turing.io/lessons/module-2/this-is-confusing.html)
* [scope](http://frontend.turing.io/lessons/module-2/scope-and-closures.html) & [order of execution](http://frontend.turing.io/lessons/module-2/advanced-scope.html)
* [prototypes](http://frontend.turing.io/lessons/module-2/arrays-objects/index.html)

There are two ways we'd like you to demonstrate mastery of these concepts:

* accurate implementation/problem-solving
* eloquent articulation of your thought process


## Work Time

Fork this [repo]() of practice exercises. There are three folders of problems to work through, each corresponding with a concept to be mastered.



### In-Class

Each morning, we'll cover one of the three concepts as a class through instruction. At the end of class:

*On a scale of 1-4, how confident do you feel that you understand the material covered this morning?*


------------------------------------------------------------------


Based on your ranking here, we will break you into groups of 3-4 for the afternoon to work through some of the problems in the repo for that concept. In your small groups:

* Each person should walk the group through a solution to at least one problem
* Before moving on to the next problem, each person in the group must thoroughly understand how and why the group came to that solution. If someone in the group feels they do not thoroughly grasp the problem, take turns working through it again. Sometimes it won't click the first time around, and simply hearing someone different work through the problem can help set the lightbulbs off.
* After completing a problem, provide feedback for your fellow classmate: Were you able to follow their thought process and articulation? Was there potentially a better way to solve the problem?
* If your group has questions about the problem or its solution, post them in your public slack channel so instructors and other groups can assist


### At Home

There will be many more problems in the repo than you'll have time to solve during class. At home, you should work on the remaining problems for that concept on your own. Do not worry about completing *all* of the problems. Focus more on being able to thoroughly understand and articulate the solution to the problems you do make it through. For each problem you solve, also add an annotation for how you would walk someone through arriving at that solution. For example, given the following scope exercise:


```js
var text = 'outside!';

function log() {
  console.log(text);
  var text = 'inside!';
}

log();
```

Your solution should look like the following:


```js
const result = undefined;
return result;

// On line 1, we're declaring a global variable called `text`, and assigning it to a string of 'outside!'.
// Then on line 3 we declare a function named `log`, but because it hasn't been invoked yet, we will skip over the code inside of it, and head down to line 8 where we do the invocation of the `log` function.
// This brings us back up to line 4 to begin executing the contents of `log`, and puts us into a new function scope.
// On line 5 we run our console.log, and on line 6 we declare a new variable of `text` within our function scope, assigning it to a string of 'inside'.
// The console.log returns undefined because our variable declaration on line 6 was hoisted to the top of our function scope
// prior to execution. Because hoisting takes only the variable declaration, and not the varaible assignment, our `text` variable is undefined at the time our console.log is run.
```


## Evaluation

Repos are due on **Friday of week 1 at 12PM**. Instructors will run your solutions through an automated test suite to evaluate the accuracy of your solutions. In class on Monday of week 2, we will divide the class into equal parts to work with a single instructor. Each person will receive a problem at random and articulate their way through a solution.

### Accuracy 

The automated test suite will ensure that your solutions are returning the correct results. For prototype problems, it will also ensure that you've used the correct prototype methods to arrive at your solution. (While there are often many different ways to solve prototype problems, and some aren't necessarily "wrong", there is usually a preferred approach, which is what we will assess against.) Instructors will send you the results of your test suite that will include an accuracy percentage for each core concept.

*Note: We are aware you can simply run the scope and context exercises in a repl and receive the correct solutions. We encourage you to attempt them on your own first, and leave your initial solutions & annotations in place even if they are incorrect. You are more than welcome to add the correct solutions and annotations as comments in your codebase after the fact, but we'd still like to see where you may have initially gone wrong. This feedback will allow us to more accurately assess where concepts are foggy, what we might need to teach more thoroughly, and where you might need extra help. Remember that this project has no effect on your final grade for the inning, so feel comfortable making mistakes!*

### Articulation

During the in-class evaluations, each student will have an opportunity to walk the group through their thought process for solving a problem related to these three core concepts. The student will receive feedback on how they articulate themselves while working towards a solution, and where improvements can be made.

Eloquent articulation:

* is understandable to both senior and junior engineers
* makes use of proper vocabulary terms and avoids meaningless words like "thing" and "stuff"
* clearly demonstrates a solid understanding of the concepts needed to solve the problem
* is not lazy - it does not skip over important explanatory details

