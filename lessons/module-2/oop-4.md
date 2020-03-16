---
title: "OOP: Review Session"
length: 90
tags: javascript, object oriented programming, oop
module: 2
---

## Learning Goals

By the end of this session, you will be able to:

- Synthesize your understanding of objects and OOP principles
<!-- - Compare and contrast several different implementations of a game based on your knowledge of OOP thus far -->
- Assess the pros and cons of approaching the same problem in a variety of ways
- Identify code smells

## Structure (5 mins)

* 10 mins of reflection
* 30 mins of research and journaling
* 15 mins of group discussion
* 30 - 40 mins of code review

### Reflection (10 minutes)

In your paired project teams, get with another pair and discuss what it was like to structure your code around objects when first building the project, and when refactoring another group's code. Focus specifically on:

* What **didn't** we teach you, that would have been helpful to know?
* How did your paired project / your assigned refactor tractor project stray from the class structure that the spec outlined, if at all? Why did you do that?
* How did what you built compare to what you received for your refactor tractor project? What similarities/differences did you notice?
* Are there any different approaches you might take to structuring your code now if given a similar project?


#### Research (20 minutes)

Take a few minutes to go through the readings listed below. Take note of your thoughts and questions as you read. Make a habit of condensing and paraphrasing what you read. As you finish each section or page, how well can you explain key terms and ideas without reproducing the author’s words? You will have an opportunity to discuss your findings within your small group.


* [STUPID to SOLID](https://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/)
* [SOLID Principles](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

  _Note: Although the code examples are in PHP, these design principles still apply to JavaScript. As of yet, JavaScript does not support `interfaces` without using outside libraries like `Implement.js`. TLDR: both `implements` and `extends` create subtypes. The former sets up a "contract" to implement the methods declared in the supertype, the latter inherits code from the supertype_

* [Bad OOP Design Discussion](https://stackoverflow.com/questions/345698/what-are-the-tell-tale-signs-of-bad-object-oriented-design)
* [Code Smells](https://blog.codinghorror.com/code-smells/)


#### Journal (10 minutes)

After you have finished reading the four articles, answer the following questions:
- What constitutes code that follows good OOP principles?
- Define "code smell." Name at least 3 specific examples of a code smell from a current or previous project.
- What new information have you learned from one (or all) of these readings?
- What questions do you have after reading through these?

#### Discussion & Closing (15 minutes)

Using the journal questions to guide you, start a discussion within your small groups.



<!-- #### Code Review & Group Discussion

[*Jeopardy*](https://github.com/turingschool-examples/oop-review/tree/master/jeopardy)  
[*Wheel of Fortune*](https://github.com/turingschool-examples/oop-review/tree/master/wheel-of-fortune)

*Get in your GameTime groups. You will be reviewing two codebases that have implemented games in OOP*

While reviewing the code, ask yourself the following questions:

* Is all the code easily understood?
* Is there any redundant or duplicate code?
* Does the code follow the principle of single responsibility?
* Do the names used in the application convey intent?
* Looking back at the reading covering code smells - find two examples of a code smell in either of the codebases. What changes would you make to this particular piece of code to not make it smell?
* Find two examples of good OOP design, based on the readings -->

#### Closing

In your journals, answer the following questions:  
* What new information have you learned from the readings? From the code review?
* How will this effect the way you continue to write object-oriented code? Is there any code you now would like to change in hindsight?
