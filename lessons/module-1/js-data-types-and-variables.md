---
title: "JS: Data Types & Variables"
length: 90
tags: javascript, foundation, variables, data types, interpolation, concatenation
---

## Learning Goals

* Review what you know about the primitive data types used in JavaScript
* Review how to create and use variables to store values
* Add variables to strings using concatenation and interpolation

## Vocabulary

- `Data Type` A kind of data, defined by the values it can hold and the operations that can be done on it
- `Primitive type` Also known as a `simple` data type. The primitives in Javascript that we will care about are Boolean, Undefined, Null, Number, String (BUNNS).  
- `Variable` A container for a value. The main building block for all programming
- `Declare` Creating a new variable (distinct from assignment)
- `Assignment` Assigning a value to a variable
- `Concatenation` The binding of multiple strings together using the `+` string operator
- `Interpolation` The process of injecting a variable directly into a string.

## Part 1: Student Exploration

We will start this lesson with a BIG chunk of work time. You might be thinking - What! We haven’t learned anything yet! That’s not true! You already know some stuff about these concepts from Mod 0. Plus, you have problem solving skills (and googling skills 😉).

We want to give YOU a chance to dig into the code and explore before we all get together and talk about these concepts. It’s okay (and expected!) that some of this activity will be difficult on your own. We want you to get used to that feeling - not knowing all the answers - and start to enjoy the process of diving in and getting your hands dirty in the code!



**Spend one hour working through [this repl](https://replit.com/@hfaerber/DataTypesandVariables#index.js)**. As you're working, write down the following things in your notes:
* Ah-ha moments/Key Points (for example: `A boolean is always a true or false value.`)
* Questions (for example: `Do you ever use null or undefined on purpose?`)

If you get stuck...
* Reference [this Intro to Data Types & Variables lesson](https://frontend.turing.edu/lessons/module-1/js-intro-to-data-types-variables.html)
* Reference [javascript mdn documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview).  Use the search bar and Command+F to search for specific terms and concepts
* Google (for example: `null vs undefined javascript`)
* Write down your question/what exactly you're stuck on and move on. Then ask that question when we get on the zoom call!

After this hour, we will continue with the remainder of this lesson guided primarily by your questions.

## Part 2: Class Discussion

Since this is your first mod 1 lesson, let's go over some general classroom expectations:  
- **We prefer cameras ON, if possible.** Being able to see each other helps us build relationships with one another. It also helps us teach you because we can read your facial/body language for cues on how the lesson is landing. That said, we want you to feel comfortable, so we understand if you need to have the camera off sometimes. Also, feel free to use a virtual background! Virtual backgrounds are a great way to give you some privacy and show off your personality!  
- **Ask questions. LOTS of questions!** Each instructor will set up their preferred method for questions - whether it’s raising your hand, using the chat, or simply unmuting. It’s less important how you ask the question - we just care that you ask! No developer knows everything. One of the strongest skills a junior developer can bring to their team is their questions. Every single person on the call will learn from the questions you ask. Do it!  
- **We will always turn on Live Captioning.** It’s totally up to you if you want to have the captions ON or OFF!  

### Questions

Asking questions is an essential part of being a developer. Take a few minutes right now to look through your notes from the last hour. What questions do you have about data types, variables, interpolation and concatenation? Everyone should have at least one question! Let's add those questions to [this jamboard](https://jamboard.google.com/d/1QP1MDfmj3yrAKrWTcAA1WoSk5HmlBMDHybWyI7oLELk/edit?usp=sharing).

### Key Points

We just went through **a lot** of information. Let's go over the most important things we need to know.  

<section class="answer">
### What are JavaScript's primitive data types?
BUNNS!  boolean, undefined, null, number, string

Technically also:
- Symbol (new in ECMAScript 6; we won't focus on this in Mod 1)
- BigInt (new in ECMAScript 2020; you don't need to know this at this time)
</section>

<section class="answer">
### What do we need to know about each data type?

- Boolean: true or false (not in quotation marks)  

- Undefined: not yet given a value (the value hasn't been defined so its UNdefined)  

- Null: intentional absence of a value  

- Number: regular ol’ numbers as we know them  

- String: any characters wrapped in quotation marks (single or double quotes) - often just normal text/words

</section>

<section class="answer">
### Whats the difference and use cases for undefined vs null?
Both mean "nothing".  
Null is like a placeholder where someone proactively decided to specifically declare "nothing".  
Undefined is kind of unintentional. Like, it's nothing because no one got around to declaring anything so it defaults to "nothing".

A use case for null might be creating a `userEmail` variable and assigning it to null in case the user does not provide an email.   

You aren't likely to specifically assign a value of `undefined` so there's not a great use case to use as an example.  
</section>

<section class="answer">
### Why do we need variables?
To be able to store pieces of data in a way that we can reference and use them later.
</section>

<section class="answer">
### What are best practices for naming variables?
  - Variable names can begin cannot begin with a number.  The can begin with a letter, dollar sign, or an underscore.  
  - You cannot use a dash (-) or a period (.) within a variable name
  - You cannot use keywords or reserved words (such as var or for)
  - Variables are case sensitive.  
  - Choose names that describe the kind of information you plan to assign the variable. Call it what it is.
  - Use camelCase for multiple word names i.e., thisIsMyVariableName
</section>

<section class="answer">
### What is the difference between concatenation and interpolation?
Concatenation and interpolation are two different ways to accomplish the same goal. The only different is the syntax - neither is better than the other.

Concatenation:  
  - Uses the `+` string operator to combine variables and other values (strings, numbers, html tags) to make a big, long string.

```js
var name = "Hillary";
var age = 30;
var location = "Denver";

var concatenatedString = "My friend " + name + "is " + age + "years old and lives in " + location + "."
```

Interpolation:  
  - Uses the backticks and `${ }` to inject variables to make a big, long string.  

```js
var name = "Hillary";
var age = 30;
var location = "Denver";

var interpolatedString = `My friend ${name} is ${age} years old and lives in ${Denver}.`
```

</section>

<section class="answer">
### What is type coercion?
Sometimes JavaScript tries to help us by deciding to change a data type to accomplish a goal without us explicitly telling it to do so. A common example is coercing a number into a string.

For example:
```js
var num = 30;
var word = "Rock";
var showName = num + word;

//showName will be a string of "30Rock" because JavaScript coerced the number 30 into a string to accomplish the goal of combining the two differing data types.
```

</section>

<section class="answer">
### What about `let` and `const`?

JavaScript recognizes a few different types of variables: `var`, `let`, and `const`.  They each behave a little differently, so it's important to understand the differences. If you don't, you might run into some errors.

In mod 1, you'll mostly see `var`. It's the ES5 (ECMAScript 5) version of a variable. It's still used in production code to this day, but newer versions of JavaScript gave us `let` and `const`.

As you move through the program, you'll work with `let` and `const` more and more. Our recommendation is to just stick with `var` for now.  However, if you'd like to use `let` and `const` - go right ahead. Just make sure to [do your research first.](https://codeburst.io/difference-between-var-let-and-const-in-javascript-fbce2fba7b4)

</section>


Post any questions you still have in your main cohort channel!
