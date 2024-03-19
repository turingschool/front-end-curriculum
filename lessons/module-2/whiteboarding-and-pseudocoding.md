---
title: Whiteboarding and Pseudocoding
length: 120
tags: whiteboarding, interviews, pseudocoding
module: 2
---

### Learning Goals
 
* Understand the relationship between problem-solving, programming, and algorithmic thinking
* Identify and implement different strategies for solving problems
* Identify common roadblocks to effective problem-solving

### Warm Up
* In your journal, draw out the process of how you make toast. You must start with a clean sheet of paper and you are not allowed to write/use any words.

<!-- Most solutions should have nodes and links. On average, should be between 4 and 8 nodes. Sweet spot is between 5 and 13 - not too simple, not too complex. Helps us understand the situations as systems with nodes and their relationships-->

## Problem Solving

When you are presented with a problem... whether it is a complex mathematical problem or a broken printer, how do you solve it? Generally speaking, the first step in finding a solution to a problem is to be sure that you have clearly identified the problem itself. To solve problems, we can utilize the UPS strategy:

* Understand: Read the problem. Restate the problem by writing it down in your own words. What do you know? What do you not know?
* Plan: What problem strategy will you try? You might also draw a picture/representation of how you plan to approach the problem
* Solve: Use your plan to implement your solution

#### Possible Problem Solving Strategies

| Method | Description | Example |
| :-------------: | :-------------: | :-----: |
| Trial and Error | Continue trying different solutions until problem is solved | Restarting phone, turning off WiFi, turning off bluetooth in order to determine why your phone is malfunctioning |
| Heuristic | General problem-solving framework|Working backwards, breaking a task into steps |
| Algorithm | Step-by-step problem solving formula |Instruction manual for installing new software on your computer|

#### Journal/Reflection

Think about how you currently solve problems when you are programming. Has that changed since you were in Mod 1? What are some of the possible pros and cons of the methods listed above?

## Whiteboarding

In the context of building out programs, whiteboarding is a useful tool to utilize in solving complex problems. If we rush into coding out the solution immediately, we completely skip over the `P`lanning part of the process... and its likely that we don't fully `U`nderstand the problem at hand.

In the context of interviewing for a job, being able to whiteboard is important because it shows you can think through/discuss a problem without having to actually code it first - which can be a difficult skill to learn. 

*Things to remember* 
- Ask for feedback
- Talk as you write
- Pay attention to the amount of space you have to write
- DON'T WIPE THE WHITEBOARD WITH YOUR HAND WHEN YOU ERASE THINGS
- High level vs low level
- Develop a shorthand for writing code:

```js
if (foo === 'bar') {
  this.changeFoo('baz')
} else if (foo === 'baz') {
  this.changeFoo('bar');
} else {
  this.changeFoo('caw caw');
}
```
Could be written as shorthand:

```js
foo = baz?
  changeFoo(bar)
foo = bar?
  changeFoo(baz)
else 
  changeFoo(caw caw)
```
<!-- * What do you notice about the difference in these two code examples?
  * No curly braces
  * No semi-colons
  * No full-blown if/else statements (ifs are replaced with question marks)
  * Strict equals looks more like an assignment than a strict equals
 -->


<!-- * Be talking as you write! Don't feel rude for looking away, it takes too long to look at the person and talk, then write, then talk, then write. Talk loud so they can hear you while you write on the board

* Pay close attention to the amount of space you have! Don't start writing huge and in the dead center of the board, you'll run out of room. If you *do* start running out of room, don't worry about putting things in different places - the whiteboarded code doesn't have to read perfectly top-to-bottom, you can make use of horizontal space.

* DON'T WIPE THE WHITEBOARD WITH YOUR HAND WHEN YOU ERASE THINGS. Youll get marker on your hand, then you'll be nervous and sweating and you'll wipe a bead of sweat off your face with your marker hands and then you'll have marker on your forehead and you'll look like a total nerd and then you'll go to shake the interviewer's hand at the end of the interview and you'll get marker on them.

* How much specificity should you have as you speak about what you're doing - where can you be vague, where do you need to go into detail? - Not sure how to demonstrate this balancing act to them-->

## Pseudocoding

Pseudocode is an artificial and informal language that helps programmers develop algorithms to solve problems. A key thing to remember is that pseudocode is _not_ code. It is a way to force yourself to slow down and think about how to solve problems at a high-level, using natural language.

Pseudocode:
- gives you a fallback 
- gives people 👀 the chance to intervene
- demonstrates your logic
- takes syntax errors out of the equation

<!-- 
* Important because it gives you a plan for solving the problem that you can stick to, and fall back on when you get stuck

* Allows interviewers to intervene before you start writing code - it's easier for them to correct your pseudocode than it is to correct your actual code

* Demonstrates that you can logically solve the problem at a high-level, which is the most important step/most insightful for people who are evaluating your skill level

* If you can pseudocode, you can solve the problem with JavaScript - maybe you just run into little syntax errors or something that most people will be kind enough to point out to you -->


### Basic Structure for Pseudocoding

_Sequences_: Sequences are the most straightforward part of structuring pseudocode. At the most basic level, a sequence is made up of commands or steps that must be followed. Any commands in a sequence are generally written as a list.

Here's an IRL example of a sequence for feeding my dogs:

```js
// Pick up dog bowls from the floor
// Bring bowls to pantry
// Open up big dog food bag
// Fill big bowl
// Open up small dog food bag
// Fill small bowl
// Call dogs by name
// Place both bowls on the floor
```

_Choices_: Choices give us the option to take different paths based on certain conditions. You may find that you have just one path based on a condition, two paths, or multiple paths.

Here's another IRL example of how I may choose a certain path (based on the weather) when dressing myself in the morning:

```js
// Check the weather forecast
// If snow is expected, put on boots
// Otherwise, put on flip flops
```

_Iterations_: Iterations allow us to repeat steps until a certain condition is met. They _always_ begin with a choice. Here's another IRL example of preheating my oven:

```js
// While the oven is not 350 degrees, wait
```

Which could also be written like this:
```js
// Until the oven is 350 degrees, wait
```

<!-- * How to convert plain english lines of pseudocode into actual JavaScript
  * Find keywords in your pseudocode that represent operators/patterns in code. e.g.
    * *Create the key & set it equal to an empty array* - "set it equal to" represents the assignment operator (`=`)
    * *Check if foo equals bar* - "if" represents an if condition (`if (foo ==== bar)`)
    * *Otherwise, do something different* - "otherwise" represents an else condition (`else ()`) -->


## Solving a JS Problem with Pseudocode

Imagine you were given the following prompt on a technical interview:

>Create a function that determines if a string is a palindrome or not. Your function should return a boolean (true if the given word is a palindrome, false if it is not).

1. Try writing some pseudocode that will lead you to an answer in JavaScript
2. Use your pseudocode to write a solution -- if it doesn't lead you to one, where did your pseudocode go wrong? Was it too vague? Was it inaccurate? Was it out of order?
3. Compare your solution, or lack thereof, to the one [here](https://repl.it/@brittanystoroz/DeeppinkAromaticEngineer)
4. Write a new draft of pseudocode that would have more easily led you to the solution above



## PIA (Pseudocoding in action)
 
Task: Create your own `filter` function (on `Array.prototype`) to really understand/see how `filter` is working under the hood. You should implement a filter function that is like the `<Array>.filter()` in JavaScript.

```js
[1,2,3,4].filter((num)=>{ return num > 3}) // Should return [4]
```

<!-- PSEUDOCODE:

Define myFilter(callback) on prototype
Initialize empty filtered array
Iterate over array
if return from callback(element) = true
push element into filtered array

return filteredarray

CODE ANSWER:


```js
Array.prototype.myFilter = function(callback) {
  var filteredData = [];
  
  this.forEach(function(i) {
    if (callback(i)) {
      filteredData.push(i)
    }
  })
  return filteredData;
}
```
 -->


#### Turn and Code: 

In pairs, you will be working through two problems. Be sure that you are actively switching between being the driver and the navigator role. 

[Problem I](https://repl.it/@thatpamiam/Problem-I-Psuedo-coding)  
<!-- Possible solution:
```js
function returnIndexValues(indices, list) {
  return indices.reduce((values, index) => {
    values.push(list[index])
    return values;
  }, []);
}
``` -->
[Problem II](https://repl.it/@thatpamiam/Problem-II-Psuedo-coding)  

<!-- Possible solution:
```js
function reverseOddWords(words) {
  const reversed = words.split(' ').map((word, index) => {
    if (index % 2 !== 0) {
      return word.split('').reverse().join('');
    }

    return word;
  });

  return reversed.join(' ');
}
``` -->


>Phase I => (Understand and Plan) Break out the way that you would solve this problem in pseudocode. Remember, pseudocode is _not_ code... but a way to work through the logic of the problem without worrying about syntax.

**Person A: Driver**  
**Person B: Navigator**  

>Phase II => (Solve) Using your pseudocode as a guide (feeling free to make adjustments as necessary) to start to implement your solution in code.

**Person B: Navigator**  
**Person A: Driver**  



### Some possible pitfalls to problem solving

* Mental set - Persist in approaching a problem in a way that has worked in the past but is clearly not working now
* Anchoring bias - Tendency to focus on one particular piece of information when making decisions or problem-solving
* Availability bias - Decision is based upon either an available precedent or an example that may be faulty

## Summary

In your journal, answer the following:
- What kind of pitfalls/biases do you recognize in your own problem solving process? 
- How can you use your awareness of this to improve your problem-solving skills during your time as a developer?
- Why are problem-solving strategies important?
