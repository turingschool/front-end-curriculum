---
title: "Object Literals"
length: 180
tags: javascript, objects, bracket notation, dot notation
module: 2
---

## Learning Goals

By the end of this lesson, you will:

* Understand the difference between dot notation and bracket notation
* Recognize scenarios that require bracket notation
* Be able to access and create key value pairs on complex data types


## Dot vs. Bracket Notation

When working with complex data types, it's important to fully understand how to access and create values so that we can manipulate our datasets as needed. We have two syntaxes that help us here: **dot notation** and **bracket notation**.

**Dot Notation** is used when we literally know the name of the key we want to access or create. e.g.:

```js
var duck = { noise: 'quack' };
duck.noise // returns 'quack'
duck.color = 'yellow'; // adds a key named 'color' to our duck object, with the value 'yellow'
```

This works great in simple scenarios as seen above, but often times we are doing more complex manipulation that requires a bit more flexibility than dot notation gives us. This is where **Bracket Notation** comes into play. When we use bracket notation, JavaScript will evaluate whatever is inside of the brackets before trying to create or access a key. For example:

```js
var animal = 'duck';

var farm = {
    duck: 'quack',
    cow: 'moo',
    sheep: 'baaa'
};

farm[animal] // returns 'quack'
// animal will be evaluated and the interpreter will see
// that it represents a string of 'duck' - so it will then
// look for a key of duck in the farm object
```

The most common use-cases for bracket notation that you'll see in the wild are when using arguments/parameters, variables or iterations. Let's look at a couple of examples!

<!-- Instructor Notes:
    * Go through the following examples in class by typing them out in repls, not just reading them to the class
    * As you start to solve each one, popsicle stick the students to ask them for help with what to do next
    * e.g. "If I want to write a function that takes in an index of a kitten, and I want the function to return
    * the name of my kitten at that index, how might I do that?"
-->

```js
// Accessing Values using bracket notation 
// when our parameter represents a key

let kittens = [
    { name: 'george', age: 3, breed: 'tabby' },
    { name: 'bob', age: 2, breed: 'siamese' },
    { name: 'joe', age: 5, breed: 'orange' }
];

function getKittenName(index) {
  return kittens[index].name;
}

function getKittenDetail(index, detail) {
  return kittens[index][detail]  
}
```

*In the above examples, note that you can chain dot notation after bracket notation, or even bracket after bracket!*


```js
// Creating key/value pairs using bracket notation
// when our parameters represent a key and its value

var experienceLevels = {
  domManipulation: 'advanced beginner',
  html: 'novice',
  css: 'proficient'
};

function addSkill(skill, level) {
  experienceLevels[skill] = level;
}

addSkill('testing', 'expert');
```

*In the above example, note that you cannot create a key without assigning it to a value!*


```js
// Accessing values with bracket notation when iterating

var dog = {
  name: 'Boris',
  age: 3,
  breed: 'Pug'
};

var dogDetails = Object.keys(dog);

console.log('I have a dog and...');

for (var i = 0; i < dogDetails.length; i++) {
  console.log(`His ${dogDetails[i]} is ${dog[dogDetails[i]]});
}
```

*In the above example, note that you can do NESTED bracket notation!*






<!-- Instructor Resources

Level I Prompts
----------------------------------------------------
* Post the link to this repl in their slack channel: https://repl.it/repls/TrustyCarpalCalculator
* Students should FORK the repl and start solving each prompt on their own
* Each prompt should be almost an identical challenge to the exercises shown in class, nothing easier/nothing harder
* As they finish, they should DM you their solutions and take a POM while you review their answers
* If their answers are sound, DM the person back and tell them to move into the vault where they will
  meet Khalid/another instructor and be given another set of more challenging prompts
* A lot of people will start to finish around the same time - grab an extra instructor to help you review
  and don't provide feedback/nitpick on their solutions. Take a very quick glance and if it all looks sound,
  send them onto the second instructor
* When there are 50 minutes left in the lesson time, anyone who has not moved onto the next level of prompts
  should take a 5-minute POM, then come back to the classroom and you will spend the last 45 minutes reviewing 
  the solutions to each prompt as a class. I would use popsicle sticks to call on students to help you solve them
  by telling you what to type
* Answer Key, for your reference: https://repl.it/repls/TerribleBlindDesign


## Level II Prompts, for secondary instructor
----------------------------------------------------
* Secondary instructor should wait in the vault or other instructional area for students who
  complete the level I prompts
* As students join you, DM them the link to the following repl: https://repl.it/repls/ImpressiveImpureApache
* Students should FORK the repl and start solving each prompt on their own
* As the group grows larger, they can begin to talk and help each other out
* Feel free to provide some assistance if students get stuck or need help, but you're mostly
  there just to facilitate rather than lead a lecture/session
* Answer Key, for your reference: https://repl.it/repls/JampackedLatestPortablesoftware

-->
