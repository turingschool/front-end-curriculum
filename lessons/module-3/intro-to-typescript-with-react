---
title: Introduction to TypeScript with React
tags: JavaScript, JS, TypeScript, TS, React
---

## Goal

The intent for this session is to give someone who has never seen TypeScript a brief introduction and give enough information that they can run with.

## What is TypeScript

TypeScript (TS) is really just JavaScript (JS) with some added syntax! Everything you know about JavaScript still applies, but there are features of TypeScript added in. What are those added features? They all revolve around the idea that of a **typed** language, hence the name.

What does it mean for a language to be typed? Let's review the basic set of types available to us in JS: number, bigint, string, boolean, null, undefined, symbol, and object.

In JS, we can take a variable that holds one type and change it to another type. This is called **dynamic** typing because it can change.

```js
var user = "Alex";

user = 10; // This is ok to do with JS, but not TS

// TS will say "Type 'number' is not assignable to type 'string'."
```

TS will not allow this to happen. If a variable begins its life as one type, then it must remain that type.

Similarly, we can and should declare function parameters and return values to be of a certain type in TS. Why is this useful?

```js
// How we might write it in JS
function addFive(num) {
  return num + 5;
}

// How TS wants us to be specific with parameters AND return value
function addFive(num: number): number {
  return num + 5;
}
```

TS prevents developers on your team accidentally passing in something other than a number into the `addFive` function. Declaring the return type also gives other developers more awareness of what the function will return. If we were to call `addFive` with a string in TS like this:

```js
addFive('5')

// We would see an error:
// "Argument of type 'string' is not assignable to parameter of type 'number'."
```

Overall, TS is useful for us as developers. There aren't big benefits in terms of performance for the user. It's a **development tool** that helps us predict errors before the code gets run (it helps to prevent "runtime errors").

At first, writing TS will be much slower than writing the same thing in JS. You'll have to look up how to define types and learn a whole new set of error messages. However, it will get faster, and the time saved not debugging as much will be worth it!

## TypeScript Workshop

First let's see some more TS without React involved. Just like we learned JS without React, it's nice to learn TS without React so we can separate what is TS syntax and what is React syntax.

<section>
### Explore

Open up this [repl.it](https://replit.com/@robbiejaeger/TypeScriptIntro#index.ts), and let's explore TS more.
</section>

## TypeScript with React

In this section, we'll work on a very small TS React app that has some functionality already built and add to it. It's a trivia app that uses the [Open Trivia Database](https://opentdb.com/api_config.php) for the dataset.

<section>
### More Exploration!

Open up this [Trivia Repo](https://github.com/turingschool-examples/trivia-typescript), set it up, and explore some TS within React.
</section>

If you're creating a TS React app from scratch, [this doc page](https://create-react-app.dev/docs/adding-typescript/) on starting TS with Create React App is very useful. It's more difficult to add in TS after the fact than to start fresh with TS from the start, but it can be done, of course.

## Next Steps and Resources

Continue learning TypeScript:
* Convert an old React project to TypeScript
* Create a new app from scratch that you're passionate about
* Look at open-source applications using TypeScript to see common patterns

Practice interview questions:
* What is TypeScript, and how does it differ from JavaScript?
* Why would a development team want to use TypeScript?
* What does it mean for TS to infer a type?
* How would you handle defining your own object shapes in TypeScript?
* Describe the use of "generics" in TypeScript and provide an example.
* What is the "any" type in TS, and should you use it?

(ChatGPT is a great resource for obtaining possible interview questions.)

Other resources:
* [TS Docs](https://www.typescriptlang.org/)
* [TS Quick References](https://www.typescriptlang.org/cheatsheets)
* There are tons of "Intro to TS" videos out there on YouTube
