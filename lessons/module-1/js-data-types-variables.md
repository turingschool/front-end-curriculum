---
title: "JS: Data Types & Variables"
length: 90
tags: javascript, introduction, foundation, variables
---

## Welcome to your first official Turing lesson!

Since this is your first mod 1 lesson, let's go over some general classroom expectations:  
- **We prefer cameras ON, if possible.** Being able to see each other helps us build relationships with one another. It also helps us teach you because we can read your facial/body language for cues on how the lesson is landing. That said, we want you to feel comfortable, so we understand if you need to have the camera off. Also, feel free to use a virtual background! Virtual backgrounds are a great way to give you some privacy and show off your personality!  
- **Ask questions. LOTS of questions!** Each instructor will set up their preferred method for questions - whether it’s raising your hand, using the chat, or simply unmuting. It’s less important how you ask the question - we just care that you ask! No developer knows everything. One of the strongest skills a junior developer can bring to their team is their questions. Every single person on the call will learn from the questions you ask. Do it!  
- **We do NOT record lessons.** We find that rewatching old lessons isn’t a great use of your time. If you’re going to be absent, ask a classmate to share their notes and/or record using QuickTime or via the 'Record' feature on Zoom. 
- **We will always turn on Live Captioning.** It’s totally up to you if you want to have the captions ON or OFF! You cannot save the transcript.  

## Learning Goals

* List the primitive data types used in JavaScript
* Create and use variables to store values
* Add variables to strings (concatenation and interpolation)

## Vocabulary

- `Data Type` A kind of data, defined by the values it can hold and the operations that can be done on it
- `Primitive type` A kind of data type. Primitives in Javascript are [string, number, boolean, null, undefined, symbol]. Also know as a `simple` data type
- `Variable` A container for a value. The main building block for all programming
- `Declare` Creating a new variable (distinct from assignment)
- `Assignment` Assigning a value to a variable
- `Concatenation` The binding of multiple strings together using the `+` string operator
- `Interpolation` The process of injecting a variable directly into a string.
- `Template literal` Template literals are string literals that provide an easy way to interpolate a variable or expression into a string.


## What is JavaScript?

JavaScript was created to make the web more dynamic. It is a scripting language made to run inside a host environment - like a web browser! It provides programatic control over the objects in that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

JavaScript can be _client-side_ and _server-side_, meaning that it can be used to control user-facing interfaces (e.g. browsers) as well as handle the server-side extensions that connect with a database.

It's a highly versatile and flexible language, favoring configuration over convention. This means that, when you're working in JavaScript, there are TONS of different ways to accomplish the same task. Sometimes one is better than another, but often there's not One Right Way to do something. JavaScript has become the most commonly used language of the web!

<section class="note">
### The Console

Browsers give developers a set of handy tools, aptly named **Developer Tools**. One such tool is the console, an environment where you can run JavaScript inside the browser. The console is one of the most useful ways to interact with your code from the browser, and we'll be using it to demonstrate and practice concepts today.

To open the console in Chrome, either:
* Or use the hotkeys `command + option + j` or `command + option + i`
* Click `View` > `Developer` > `Javascript Console`
* Right click, `inspect`, `console`
</section>

## Data Types

There are different data types in JavaScript. It's important to understand what type of data you're dealing with as you're writing code, and knowing the types of data are available to you is the first step.

Javascript has six primitive data types:
- Boolean
- `undefined`
- `null`
- Number
- String
- Symbol (new in ECMAScript 6; we won't focus on this in Mod 1)

**Pro Tip**: Remember these with the acronym _BUNNSS_

<section class="call-to-action">
### Data Types Jigsaw

You're going to do some research on one of the 5 data types we are focusing on, then share out with the class. We'll follow this protocol:
- **5 min:** [independent research using MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- **2 min:** group discuss findings, ask/answer questions
- **5 min:** group [makes chart](https://excalidraw.com/) to share takeaways
  - Keep in mind: What are possible values? Examples? Does this data type get commonly confused with something else? Why/when would developers use it? Provide an example of it being used in code!
- **1 min:** each group presents to the class, while not presenting, you are taking notes on what you're learning from other groups

Groups (based on breakout room number):
- 1 + 6: Boolean
- 2 + 7: `undefined`
- 3 + 8: `null`
- 4 + 9: Number
- 5 + 10: String
</section>


## Saving and Naming Information with Variables

As we're writing code, there are many times when we want to be able to store a value so that we have the ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common to need to have access to the same information more than once. A variable allows us to do that!

### What is a variable?

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. "Variable" is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run.

When you declare a variable (similar to declaring a function), you're creating a statement. A variable is made up of two parts: the variable keyword, `var` (a special word that the JavaScript interpreter knows is used to create a variable), and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
var myVariableName;
```

<section class="call-to-action">
### Console Practice

**Declare** 2 variables, one named "quantity" and one named "myName".

Then, **call** each variable by typing out its name, then hitting `return`. What is returned?
</section>

<section class="note">
### Rules for Naming Variables

- Names must begin with a letter, dollar sign, or an underscore. They cannot begin with a number
- Names can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name
- You cannot use keywords or reserved words (such as `var` or `for`)
- All variables are case sensitive
- Use names that describe the kind of information you plan to assign the variable
- If your variable is made up of more than one word, then use [camelCase](https://en.wikipedia.org/wiki/Camel_case) for every word AFTER the first word, which should be lower case i.e., `thisIsMyVariableName`
</section>

### Variables: Assigning Values

Notice when we first create a variable, its value is _undefined_ because it doesn't have a value yet. This is because we have to set a value!

Let's learn how to add a value. Create a `bestTVShow` variable and assign a value to it all at once:

```javascript
var bestTVShow = "Great British Baking Show";
```

- **Step 1**: declare a variable and assign it a value
- **Step 2**: call the variable

<section class="call-to-action">
### Console Practice

- Declare a new variable, `age`, and assign it to a value.
- Declare a new variable, `city`, and assign it to a value.
- Call both new variables to confirm they hold the value you believe they do
- What data type did you assign as the value in your `age` and `city` variables?
- Create three more variables, and give them each different data types (Number, String, Boolean)
- Call each variable to confirm it holds the value you believe it does
</section>

### Variables: Re-assigning Values

`Variable` is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run.

At times, you will want to change the value a variable holds. One real-world example is a users age. When a user signs up for the app and provides their birthday and age, they don't expect to have to go back in every year to inform the app they have reached their birthday and turned another year older; they expect the app to "know" that.

Here's the syntax for re-assigning a variable:

```javascript
var age = 31;

age = 32;
```

On the first line, we see the variable declaration and initial assignment. Below, we see `age = 31`. Syntactically, there are many similarities. The main difference is, **we do not use the keyword var**.

<section class="note">

### Various Variables

JavaScript recognizes a few different types of variables: `var`, `let`, and `const`.  They each behave a little differently, so it's important to understand the differences. If you don't, you might run into some errors.

In your first module, you'll mostly see `var`. It's the ES5 (ECMAScript 5) version of a variable. It's still used in production code to this day, but newer versions of JavaScript gave us `let` and `const`.

As you move through the program, you'll work with `let` and `const` more and more. If you'd like to just stick with `var` for now, that's perfectly fine. If you'd like to use `let` and `const` - go right ahead. Just make sure to [do your research first.](https://codeburst.io/difference-between-var-let-and-const-in-javascript-fbce2fba7b4)
</section>

### Using Variables Together

Now that we know about different data types and have values assigned to both of our variables, let's dive into using them together!

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = quantity + mythicalCreature;
```

We have a variable called "creatureCount" and assign the value as our quantity and our mythicalCreature. Looking at creatureCount, we'll notice the value is `"3 unicorns"`. The reason this works even though the first value is a number and the second is a string, is a result of **type coercion**. JavaScript is essentially trying to help us by converting the number into a string so we can combine the two together.

<section class="note">

### Variables and Data Types

Variables are so flexible and so powerful! If you name them accurately and you have a good grasp of what they contain, they'll be your best friend. However, that's easier said than done when you start your programming journey. A common pitfall we see students struggling with is forgetting what data type is contained in the variable - and how to best interact with that data type.

When you are working with variables, it's always a good idea to take a moment to think about the data type it contains.

</section>

### Adding Variable Values to Strings

There are two different methods to add values to strings.

<section class="call-to-action">
### Partner Teach

Between you and your partner, find out whose birthday comes earlier in the year.
- Birthday earlier in the year partner: Concatenation
- Birthday later in the year partner: Interpolation

Take 3 minutes to read through the section you were assigned to, and implement it in your Dev Tools. Then, you and your partner will walk each other through the method you read about.
</section>

#### 1. Concatenation

In the example above, we used a `+` as a string operator to combine the values of two different variables. This is called **concatenation**, which is a series of values linked together.

We can concatenate HTML tags, text, numbers, and variable values. Let's revisit our example above to create a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = "unicorns";

var creatureCount = "I have " + quantity + " very fancy " + mythicalCreature;
```

In this instance, we're concatenating multiple values including two strings and a variable in order for the sentence to come out as `"I have 3 very fancy unicorns"`.  This can make our string more dynamic depending on what value is in the variable.

#### 2. Interpolation

Another way of adding values to strings is through **template literals**.  Template literals are special strings that allow us to _interpolate_ information. They use back ticks instead of normal quotes and use a combination of a dollar sign followed by curly braces. ie. ``${quantity} ${mythicalCreature}`` Note: The back tick can be found on the key next to the number 1 on your keyboard (it shares a key with ~).

We can interpolate HTML tags, text, numbers, and variable values. Let's revisit our example above to create a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = "unicorns";

var creatureCount = `I have ${quantity} very fancy ${mythicalCreature}`;
```

This is very useful when we want to append data to our webpage, because it means we can write out an entire HTML tag and add the data from our variable.

<section class="call-to-action">
### Concatenation and Interpolation Practice

- Declare a variable `favoriteFood` and assign it to a value.
- Declare a variable `favoriteHobby` and assign it to a value.
- Declare a variable `thingsILike` and assign it to a concatenated string using the two variables above.
- Call `thingsILike` to make sure it holds the value you think it should.
- Reassign `thingsILike` to an interpolated string (template literal) that says a new phrase.
- Call `thingsILike` to make sure it holds the new value.
</section>

### Wrap Up

We've worked through a lot of content - some of which may be new, some is review. Let's take a minute to reflect.

<section class="checks-for-understanding">
### In Your Journal

1. What are the five primitive data types we learned about today?
2. How are variables useful and what is an example of one that has a value assigned to it?
3. Write out an example of string concatenation.  Now write that same example using a template literal.
4. Write down at least one question you have coming out of this lesson.
</section>

### Additional Resources & Practice

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) lets you experiment more with these concepts.
