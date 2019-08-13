---
title: Intro to JS - Data Types, Variables, Conditionals
length: 90
tags: javascript, introduction, foundation, variables
---

## Learning Goals

In this lesson we'll cover:

* JavaScript primitive data types
* What a variable is and how to use it
* Adding variables to strings (concatenation and interpolation)
* Operators and how to use them
* Conditionals and when to use them

## Vocabulary

- `Data Type` A kind of data, defined by the values it can hold and the operations that can be done on it
- `Primitive type` A kind of data type. Primitives in Javascript are [string, number, boolean, null, undefined, symbol]
- `Variable` A container for a value. The main building block for all programming
- `Declare` Creating a new variable (distinct from assignment)
- `Assignment` Assigning a value to a variable
- `Concatenation` The binding of multiple strings together using the `+` string operator
- `Interpolation`  - The process of injecting a variable directly into a string.
- `Template literal` - Template literals are string literals that provide an easy way to interpolate a variable or expression into a string.
- `Statement` An executable piece of code
- `Expression` An executable piece of code that resolves to a single value, the result of which may be assigned to a variable.
- `Operator` Symbols that are used to assign, compare, and perform operations
- `Conditional` An expression that evaluates to true or false, or a control flow statement that executes code

## History of JavaScript

Way back in the early days of the web, Brendan Eich created JavaScript. Legend has it that he wrote it in 10 days in 1995 while was was working as an engineer at Netscape. The language was first released with Netscape 2 in 1996. The name 'JavaScript' was a oh-so-clever marketing push to try to pick up on the momentum of Sun Microsystem's popular language Java, but instead it lead to years of confusion about the names of these two mostly unrelated programming languages. If you'd like to learn more about where JS came from, take a look [here](http://speakingjs.com/es5/ch04.html).

## What is JavaScript and Why?

JavaScript was created to make the web more dynamic. It is an object-oriented scripting language made to run inside a host environment like a web browser and provide programatic control over the objects of that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

JavaScript can be _client-side_ and _server-side_, meaning that it can be used to control user-facing interfaces as well as handle the server-side extensions that connect with a database.

It's a highly versatile and flexible language, and has become the most commonly used language of the web.

Now that we know a little bit about JavaScript, let's talk about how to actually use it!

<section class="note">
### The Console

Browsers give developers a set of handy tools, aptly named **Developer Tools**. One such tool is the console, an environment where you can run JavaScript inside the browser. The console is one of the most useful ways to interact with your code from the browser, and we'll be using it to demonstrate and practice concepts today.
</section>

To open the console in Chrome, either:
* Click `View` > `Developer` > `Javascript Console`
* Or use the hotkeys `command + option + j` / `command + option + i`

## Data Types

There are different data types in JavaScript. It's important to understand what type of data you're dealing with as you're writing code, and knowing the types of data are available to you is the first step.

Javascript has six primitive data types:
- `null`
- `undefined`
- Boolean
- Number
- String
- Symbol (new in ECMAScript 6 we do not need to worry about this one)

<section class="call-to-action">
### Data Types Jigsaw

You're going to do some research on one of the 5 data types we are focusing on, then share out with the class. We'll follow this protocol:
- **2 min:** independent research
- **3 min:** table groups discuss findings, ask/answer questions
- **3 min:** table group makes anchor chart to share takeaways
  - Keep in mind: What are possible values? Examples? Does this data type get commonly confused with something else? Why/when would developers use it? Provide an example of it being used in code!
- **30 sec - 1 min:** each table group presents to the class, while not presenting, you are taking notes on what you're learning from other groups
</section>

Without much context of _how_ to use this, this can feel a little abstract. Soon, we'll have a way to use these different data types, and having this vocabulary as a foundation will prove helpful.

## Variables in JavaScript

As we're writing code, there are many times when we want to be able to store a value so that we have the ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common that we need to have access to the same information more than once. A variable lets us do just that!

### What is a variable?

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. "Variable" is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run.

A variable is, at its most simple, a declaration. It's made up of two parts: the variable keyword, `var` (a special word that the JavaScript interpreter knows is used to create a variable), and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
var myVariableName;
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

<section class="call-to-action">
### Console Practice

**Declare** 2 variables, one named "quantity" and one named "name".

Then, **call** each variable by typing out its name, then hitting `return`. What is returned?
</section>

<section class="note">
### Rules for Naming Variables

- Names must begin with a letter, dollar sign, or an underscore. They cannot begin with a number.
- Names can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name.
- You cannot use keywords or reserved words (such as `var` or `for`).
- All variables are case sensitive.
- Use names that describe the kind of information you plan to assign the variable.
- If your variable is made up of more than one word, then use camel case for every word AFTER the first word, which should be lower case ie. `thisIsMyVariableName`.
</section>

### Variables: Assigning Values

Notice when we first create a variable, its value is _undefined_ because it doesn't have a value yet. This is because we have to set a value! Let's add a value to a `excellentHuman` variable:

```javascript
var excellentHuman = "Fred Rogers";
```

Notice after our `var` keyword and our variable name, we have an equals sign, `=`. This is called the _assignment operator_, because we use it to _assign_ a value to our variable declaration.  Without the assignment operator and the variable value, the variable is considered _undefined_.

Let's test these additions in our console!

- Step 1: declare a variable and assign it a value
- Step 2: call the variable

<section class="call-to-action">
### Console Practice

- Declare a new variable, "age", and assign it to a value.
- Declare a new variable, "city", and assign it to a value.
- Call both new variables to confirm they hold the value you believe they do
- What data type did you assign as the value in your "age" and "city" variables?
- Create three more variables, and give them each different data types (Number, String, Boolean)
- Call each variable to confirm it holds the value you believe it does
</section>

### Variables: Re-assigning Values

In the introduction to variables, the lesson said "`Variable` is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run."

At times, you will want to change the value a variable holds. One real-world example is a users age. When a user signs up for the app and provides their birthday and age, they don't expect to have to go back in every year to inform the app they have reached their birthday and turned another year older; they expect the app to "know" that.

Here's the syntax for re-assigning a variable:

```javascript
var age = 31;

age = 32;
```

On the first line, we see the variable declaration and initial assignment. Below, we see `age = 31`. Syntactically, there are many similarities. The main difference is, **we do not use the keyword var**.

### Using Variables Together

Now that we know about different data types and have values assigned to both of our variables, let's dive into using them together!

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = quantity + mythicalCreature;
```

We have a variable called "creatureCount" and assign the value as our quantity and our mythicalCreature. Looking at creatureCount, we'll notice the value is `"3 unicorns"`. The reason this works even though the first value is a number and the second is a string, is a result of **type coercion**. JavaScript is essentially trying to help us by converting the number into a string so that we can combine the two together.

### Adding Variable Values to Strings

There are two different methods to add values to strings.

<section class="call-to-action">
### Partner Teach

Between you and your partner, find out whose birthday comes earlier in the year.
- Birthday earlier in the year partner: Concatenation
- Birthday later in the year partner: Interpolation

Take 3 minutes to read through the section you were assigned to, and implement it in your Dev Tools. When the timer goes off, you and your partner will walk each other through the method you read about.
</section>

#### 1. Concatenation

In the example above, we used a `+` as a string operator to combine the values of two different variables. This is called **concatenation**, which is a series of values linked together.

Here's another example

```javascript
var food = "burrito";
var sentence = "I had a " + food + " for breakfast."
```

In this instance, we're concatenating multiple values including two strings and a variable in order for the sentence to come out as `"I had a burrito for breakfast."`  This can make our string more dynamic depending on what value is in the variable.

#### 2. Interpolation

Another way of adding values to strings is through **template literals**.  Template literals are special strings that allow us to _interpolate_ information. They use back ticks instead of normal quotes and use a combination of a dollar sign followed by curly braces. ie. ``${quantity} ${mythicalCreature}``

We can concatenate or interpolate html tags, text, numbers, and variable values. Let's revisit our example above to create a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = "unicorns";

// using concatenation
var creatureCount = "<p>I have " + quantity + " very fancy " + mythicalCreature + "</p>"

// using a template literal
var creatureCount = `<p>I have ${quantity} very fancy ${mythicalCreature}</p>`
```

This is very useful when we want to append data to our webpage, because it means we can write out an entire HTML tag and add the data from our variable.

One important thing to keep in mind is that template literals are not as widely [supported](https://caniuse.com/#feat=template-literals) as concatenation.

## Operators

Expressions rely on operators to calculate their single value. There are 5 basic types of operators to get you started:

1. [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment) assign a value to a variable. (hint: you've got these down already) `var color = 'magenta';`
2. [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic) perform basic math. `var addTwo = 2 + 2;`
3. [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String) combine strings. `var greeting = 'Hello! ' + 'Nice to meet you.';`
4. [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison) compare two values and return a __true__ or __false__. `var buy = 3 > 5; // Value of buy is false`
5. [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical) combines __expressions__ and return a Boolean value of true or false. `var buy = (5 > 3) && (2 < 4);`

<section class="call-to-action">
  <h3>Your Turn</h3>
  <p>Practice writing out atleast one of each using arithmetic, string, comparison, and logical operators with the person next to you.  Explain what each one is doing and how it is working.</p>
</section>

## Conditionals

Sometimes we want to perform an action based on some kind of condition. In English, we can say "If this thing is true, then do that." In JavaScript, conditionals are written very similary and allow us to take a certain path in our program.

To use conditionals, we first need to use expressions, operators, and statements.
Let's head on over to [repl](https://repl.it) and practice writing them out there!

### Basic Conditional Structure

Let's now look at the basic structure of a conditional:

```javascript
if (expression) {
  statement;
} else {
  statement;
}
```

If the expression evaluates to `true`, then the statement(s) for that condition will run. Otherwise, if the expression is `false`, then the statement(s) will not run at all. The expression will usually contain an operator to make a comparison (that evaluates to true or false).

Some examples of expressions we could use for a conditional are:

* `myNum < 5`
* `userCity === "Denver"`
* `isTired === true`

Now for some real conditional examples.

```javascript
var hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  console.log('I am groggy.');
} else {
  console.log('I feel fantastic!');
}
```

```javascript
var nextLocation = "home";

if (nextLocation === "home") {
  console.log("It's been a long day, let's go home!");
} else if (nextLocation === "work") {
  console.log("Good morning, finding the fastest route to work!");
} else {
  console.log("Finding location.  Found it!  Let's go!");
}
```

<section class="call-to-action">
  <h3>Your Turn (in the console)</h3>
  <p>Write a conditional that logs a different message based on your favorite kind of animal.</p>
</section>

### Summary

1. What are the six primitive data types?
2. How are variables useful and what is an example of one that has a value assigned to it?
3. Write out an example of string concatenation.  Now write that same example using a template literal.
4. Write out the basic structure of an if/else conditional.

### Additional Resources & Practice

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.
