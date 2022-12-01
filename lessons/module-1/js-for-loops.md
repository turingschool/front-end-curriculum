---
title: "JS: For Loops"
length: 180
tags: javascript, foundation, arrays, loops
---

## Learning Goals

* Write `for` loop syntax
* Understand and explain the components of a `for` loop and how they can be used in conjunction with arrays

## Vocabulary

- `Array` Used to store a collection of items/multiple values in a single variable
- `Element` A single item stored in an array. An element can be of any data type
- `Loops` A quick way to do something repeatedly
- `Control Flow` The order in which the computer executes statements in a script. The order of execution can change whenever the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops
- `Bracket Notation` How we access individual elements of an array. Either to express the element, or assign a new element

<section class="call-to-action">
## Warm Up

<section class="answer">
### Part 1 - Set Up

In a repl.it, declare a variable that stores an array. Your array should contain 3 or more JavaScript **objects** as its elements, with each object having 3 or more key:value pairs. Some ideas:

- A list of your friends (and their birthdays or hobbies)
- A list of characters from your favorite show or movie, and their best quotes
</section>

<section class="answer">
### Part 2 - Warm Up, Explore
  
A reminder as we start this lesson: remember that it's okay to make a mess. We learn by trying and screwing up and debugging!

Once in your breakout room, trade repl.it links with your partner. This way, you are each exposed to a new array that you will work with during activity. You will each need to fork the repl.it.

- Take a moment to familiarize yourself with the array your partner declared

For each step that follows, make sure to `console.log` the value(s) you are accessing or updating!
- Access the first element in the array
- Access a value from the second element (an object) in the array
- Update a property of the third element in the array (change the value of one of the keys in the object)
- Log a sentence that uses at least 2 properties from the first element in the array

If you finish before your partner, add another object to the array. Log it to the console to make sure it is stored properly.

_💬 Before moving on to Part 3, check in with each other and make sure both partners were able to accomplish the task and know what their code is doing._
</section>
</section>


## Loops

There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, let's take this array:
```js
var pets = [
  {
    name: 'Tilly',
    type: 'cat',
    favoriteTreat: 'cheese',
    human: 'Leta'
  },
  {
    name: 'Sodie',
    type: 'dog',
    favoriteTreat: 'milkbones',
    human: 'Amy'
  },
  {
    name: 'Pumpernickel',
    type: 'cat',
    favoriteTreat: 'kibble',
    human: 'Eric'
  }
];
```
What if we wanted to print the following sentence for each pet:
```js
// Leta's cat, Tilly, loves cheese.
// Amy's dog, Sodie, loves milkbones.
// Eric's cat, Pumpernickel, loves kibble.
```

Let's take a look at the structure of the most commonly used type, the `for` loop:

```js
for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

[Which looks like this](https://repl.it/@turingschool/js-loops#index.js) when we implement it in code:

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

If we break this down, we see that our loop is constructed from the following parts:

- the keyword `for`  
- a set of rules, or conditions `(var i = 0; i < 10; i++ )`   
- opening and closing curly braces which contain our code  
- the code that we want our loop to execute: `console.log(i);`  

Let's dig into the three statements separated by semicolons that make up or our conditions:

1. We begin with **initialization**. Where do we want our loop to start? The first statement `var i = 0;` creates a variable that is assigned the value of 0. This variable is commonly named `i`, or `index`, and will act as the counter. It is created the first time the loop is run.  
2. The next statement **sets the condition** that tells the loop when to stop running: `i < 10;`. In this case, the condition indicates that the loop will stop when `i` equals 10. The condition may use a variable that is assigned a value.
3. Finally, with the statement `i++` we **update the value** of our counter `i`. This adds 1 to the value of `i`. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.

The statement within the curly braces executes each time the loop runs. In this case, we can see we are logging the value of `i` to the console.

## Looping With Arrays

`for` loops are commonly used to take action on every item in an array. To do this, we can use the initializer and condition to tell the loop to perform the action the same number of times for the number of elements in the array. Typically, we set the initializer at 0, and set the _stop_ condition to the `length` of the array. The code in the snippet that follows is also [available in this repl.it](https://repl.it/@turingschool/looping-with-arrays#index.js).

```js
var fruits = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
  console.log("I have some " + fruits[i]);
}
```

The `for` loop is not magically tied to the `fruits` array in the example above. It's important to note that when we want to call a specific fruit, we call the `fruits` array then use bracket notation with the `i` variable to access `fruits[0]`, then `fruits[1]`, then `fruits[2]` - when `i` holds each of those respective values.

<section class="call-to-action">

### Predict & Discover

**First, make a prediction:** What would happen if `fruits.length` was replaced with the Number `8` in the example above?

Now, type out the function above (yes, actually type it! This is a great opportunity for attention to detail and catching your small errors). Replace `8` for `fruits.length`. Run the code and reflect on your prediction.
</section>

Now let's revisit a previous example. 

<section class="call-to-action">

### Revisiting Pets

Spend some time completing the exercises in [this repl](https://replit.com/@kaylaewood/forloopspets#index.js).
</section>

<section class='note'>

### Iterator Methods

`for` loops are not the only way to loop over an array. When pairing with a mentor you might see some of the following methods:

`.forEach()`, `.map()`, `.find()`, `.filter()`, `.reduce()`

These are known as *iterator methods* and they each have their own uses and behaviors. They were all written into the JavaScript language with a `for` loop!

During your time in Mod 1, we'd like you to **only** use `for` loops when you need to iterate over an array. This is not to needlessly make your life harder. The main reason for this request is so that the logic that is applied during each step of the loop must be written explicitly by you, instead of letting the architects of those iterator methods do that work for you. Also, it's not unlikely that in a different language you work in on the job, you won't have such handy methods available. Everything in Mod 1 can be completed with your pal `for` loop! You will get lessons and then extensive practice and experience with the iterator methods in Mods 2-4.
</section>

## Returning a Value

<section class="answer">
### Thinking back to our previous lessons, what do we know about `return`?   

We can only return ONE TIME in a function. Once that `return` occurs, the function ends.
</section>

Let's looks at this code:
```js
var greetings = ['hello', 'hey', 'hi', 'hey there'];

function sayAllTheGreetings() {
  for (var i = 0; i < greetings.length; i++) {
    return greetings[i];
  }
}
```

<section class="answer">
### What would you expect `sayAllTheGreetings` to return? Why?

The function will return `'hello'` and then the function will end.
</section>

Okay...does this mean we can never return something out of a for loop? **No!** It just means we need to be careful to ensure that our function is working the way we expect it to. Let's look at a couple more examples in [this repl](https://replit.com/@kaylaewood/forloopsreturns#index.js).






<section class="call-to-action">

## Solo Practice

Join the breakout room associated with the problem you are _currently_ working on. This is meant to mainly be done independently (no one should be screen sharing or "leading" anything), but we want you to have a source of support/place to ask questions if needed.

### Mild Heat ⚡️: Annoying Zoo Kid 1

1. Declare a variable that stores an array of four animals called `animals`.
1. Write a `for loop` that logs `"Mommy, I want to see [insert animal name here]! Waaah!"`

### Medium Heat 🔥: Annoying Zoo Kid 2

1. Declare a variable that stores an array of four animals called `animals`.
1. Declare a function called `nameAnimals`.
1. Within your function, create a `for loop` that logs `"Mommy, I want to see [insert animal name here]! Waaah!"`
1. Invoke your function to ensure it is working correctly. Nothing should log to the console if you don't invoke the function.

### Spicy 🔥🔥: User Sentences

Use the following array:

```javascript
var users = [
  {
    id: 127238,
    firstName: "Matthew",
    handle: "@matthewph",
    lastLoggedIn: 1611937890083,
    followerCount: 723,
    recentPost: "This is the first time I've checked the internet since last March."
  }, {
    id: 728912,
    firstName: "Tanisha",
    handle: "@tdavey",
    lastLoggedIn: 1611937937749,
    followerCount: 2319,
    recentPost: "Wear a mask people, it's not over."
  }, {
    id: 409126,
    firstName: "Megan",
    handle: "@meg36",
    lastLoggedIn: 1611937973534,
    followerCount: 212,
    recentPost: "OMG Gametime AHHHH!!!!!!"
  }
];
```

1. Declare a function called `showUserInfo`
1. Within your function, write a `for` loop
1. Inside the `for` loop, `console.log` a sentence using at least 2 of the values in the objects

### Extra Spicy 🔥🔥🔥: Some User Info

Use the array of users above
1. Declare a function called `showImportantPosts` that takes one parameter: a number
1. Check if each user has a follower count above the number that was passed in. If a user has a high enough follower count, `console.log` their recent post. If a user doesn't have a high enough follower count, don't log their recent post
1. Invoke the function multiple times, with various numbers for the parameter to ensure it's working as expected
</section>

<section class="answer">

### Solo Practice Solutions

- [Solution:](https://repl.it/@turingschool/mild-solution#index.js) Mild Heat ⚡️: Annoying Zoo Kid 1
- [Solution:](https://repl.it/@turingschool/medium-solution#index.js) Medium Heat 🔥: Annoying Zoo Kid 2
- [Solution:](https://repl.it/@turingschool/spicy-heat#index.js) Spicy 🔥🔥: User Sentences
- [Solution:](https://repl.it/@turingschool/extra-spicy-heat#index.js) Extra Spicy 🔥🔥🔥: Some User Info

</section>

<section class='note'>

### Loops and Performance Issues

It's important to be aware of the potential performance problems that loops can cause. When a browser hits JavaScript, it stops executing anything else on the page until it has processed that script. Since loops can be run on arrays or containers of unknown -- and potentially enormous -- size, it's possible for our loop to make a page much, much slower to load.

Additionally, if the condition of your loop never returns `false`, you will get stuck in what's known as an `infinite loop`. This means that your loop will never stop running. Eventually your browser will run out of memory and your script will break.

Here's an example of an infinite loop. Open a new tab in your browser and run this in your console. Observe what happens.

```js
for (var i = 0; i > -1; i++) {
  console.log(i);
}
```

We can see that this condition will never return `false` and we'll be stuck in this loop forever (or at least until our page crashes)! Be mindful of the possibility that you could create infinite loops when leveraging loops in your code. They can happen to the best of us, and knowing what they are is the first step to avoiding and correcting them.
</section>

<section class="call-to-action">

## Final Practice

You'll complete this section with a partner!

Pick one of the 4 options linked below as a code challenge. Write a solution and make sure you and your partner both have a full understanding of the solution before moving on. If you finish early, try another!

- [YELLING](https://repl.it/@turingschool/yelling-1#index.js) 🔥
- [Walking Backwards](https://repl.it/@turingschool/backwards-1#index.js) 🔥
- [Cacti](https://repl.it/@turingschool/cacti-1) 🔥🔥
- [School Supplies](https://repl.it/@turingschool/school-supplies-1#index.js) 🔥🔥

</section>

### Additional Practice (Optional)

* [Leveled Array Practice](array-practice.html)
* [JavaScript Playground](http://frontend.turing.edu/lessons/module-1/javascript-playground.html) lets you experiment more with these concepts.

### More Resources

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [Seven JS Quirks I Wish I'd Known About](http://developer.telerik.com/featured/seven-javascript-quirks-i-wish-id-known-about/#expdec)  
* [Adequately Good JS](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)  
