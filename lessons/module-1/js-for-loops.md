---
title: "JS: For Loops"
length: 90
tags: javascript, foundation, arrays, loops
---

## Learning Goals

* Practice writing `for` loops
* Practice iterating through arrays using loops

## Vocabulary

- `Array` Used to store a collection of data items/multiple values under a single variable name
- `Element` A single item stored in an array. An element can be of any data type.
- `Loops` A quick and easy way to do something repeatedly
- `Control Flow` The order in which the computer executes statements in a script. The order of execution can change whenever the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.
- `Bracket Notation` How we access individual elements of an array. Either to express the element, or assign a new element.

## Warm Up

In a repl or in your browser console, create and name an array filled with objects! Some ideas:

- A grocery list
- A list of Hogwarts students
- A list of Batman villains

Or, if you're not feeling creative, you can use this one:

```javascript
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

Now, let's practice getting information out of our array and objects!

<section class="call-to-action">
### Your Turn

In the console:  
- access the first element in your array
- access a value from the second element (an object) in the array
- update a value from the third element in the array
</section>

Now, let's suppose that we need to use information from every single one of our objects. How could we accomplish this?

<section class="call-to-action">
### Turn and Talk

With a partner, discuss the following:

- What's one way to access every element in your array?
- What are some drawbacks you can think of?
</section>

## Loops

There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, for each element in an array, if a conditional returns `true`, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns `false`.

Let's take a look at the structure of the most commonly used type, the `for` loop:

```js
for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

Which looks like this when we implement it in code:

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

- We begin with **initialization**. Where do we want our loop to start? The first statement `var i = 0;` creates a variable that is assigned the value of 0. This variable is commonly named `i`, or `index`, and will act as the counter. It is created the first time the loop is run.  
- The next statement **sets the condition** that tells the loop when to stop running: `i < 10;`. In this case, the condition indicates that the loop will stop when `i` equals 10. The condition may use a variable that is assigned a value.
- Finally, with the statement `i++` we **update the value** of our counter `i`. This adds 1 to the value of `i`. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.

The statement within the curly braces executes each time the loop runs. In this case, we can see we are logging the value of `i` to the console.

### Looping Over Arrays

`for` loops are commonly used to iterate over the items in an array. To do this, we use the property `length` and call it on the variable associated with the array we want to iterate over. This property returns the length of, or number of elements in, an array. Let's see what that looks like in practice:

```js
var fruits = ['apples', 'oranges', 'bananas'];

function listFruits() {
  for (var i = 0; i < fruits.length; i++) {
    console.log("I have some " + fruits[i]);
  }
}

```
You can see that instead of using a hardcoded number, we are using `fruits.length` in our condition. This means we will continue to loop over the array as long as the counter is less than the total number of elements in the array. That's pretty handy!

<section class='note'>
### Iterator Methods

`for` loops are not the only way to loop over an array. When pairing with a mentor you might see some of the following methods:
- `.forEach()`
- `.map()`
- `.find()`
- `.filter()`
- `.reduce()`

These are known as *iterator methods* and they each have their own uses and behaviors. During your time in mod 1, we'd like you to **only** use `for` loops when you need to iterate over an array. This is not to needlessly make your life harder. The main reason for this request is so that the logic that is applied during each step of the loop must be written explicitly by you, instead of letting the architects of those methods do that work for you. Everything in Mod 1 can be completed with your pal `for` loop! You will get plenty of experience with those iterator methods down the line, I promise.
</section>

<section class="call-to-action">

### Solo Practice

#### Medium Heat 🔥🔥: Annoying Zoo Kid

1. Create an array of four animals called `animals`.
2. Create a function called `nameAnimals`.
3. Within your function, create a `for loop` that logs `"Mommy, I want to see [insert animal name here]! Waaah!"`
4. With your array (and - if needed - with your knowledge of parameters), invoke your function to ensure it is working correctly!

#### Spicy 🔥🔥🔥: Pet Paragraph

Use the following code:

```javascript
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
    favoriteTreat: 'tuna',
    human: 'Eric'
  }
];
```

1. Create a function called `getPetNames` that takes one parameter: an array of pet objects.
2. Within your function, create a `for` loop
3. Inside the `for` loop, `console.log` a sentence describing each pet, for example: Leta has a cat named Tilly who eats cheese.

#### Connecting with previous knowledge - Extra Spicy 🔥🔥🔥🔥

1. Use the array of pets above.
2. Declare a function called `logValuesByKey` that takes two parameters: an array, and a key
3. Inside of that function, write a `for` loop that logs the value of the provided key for each object in the array. Hint: Consider which object notation to use.
4. Invoke the  function, passing it the pets array and the key of 'human'.
5. Repeat, but send through a different key.
6. Dang! You just wrote a flexible, powerful, dynamic function. *Very* tite.

**Need a hint?**
Here is some starter code to get you started!
```javascript
  function logValuesByKey(array, key) {
    // insert code here
  }

  logValuesByKey(pets, 'human');
  // expected output: 'Leta', 'Amy', 'Eric'
```

</section>

### Loops and Performance Issues

It's important to be aware of the potential performance problems that loops can cause. When a browser hits JavaScript, it stops executing anything else on the page until it has processed that script. Since loops can be run on arrays or containers of unknown -- and potentially enormous -- size, it's possible for our loop to make a page much, much slower to load.

Additionally, if the condition of your loop never returns `false`, you will get stuck in what's known as an `infinite loop`. This means that your loop will never stop running. Eventually your browser will run out of memory and your script will break.

Here's an example of an infinite loop. Open a new tab in your browser and run this in your console. What happens?

```js
for (var i = 0; i > -1; i++) {
  console.log(i);
}
```

We can see that this condition will never return `false` and we'll be stuck in this loop forever (or at least until our page crashes)! Be mindful of the possibility that you could create infinite loops when leveraging loops in your code. They can happen to the best of us, and knowing what they are is the first step to avoiding and correcting them.

### Additional Practice  

* [Leveled Array Practice](array-practice.html)
* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) lets you experiment more with these concepts.

### Dig Deeper  

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [Seven JS Quirks I Wish I'd Known About](http://developer.telerik.com/featured/seven-javascript-quirks-i-wish-id-known-about/#expdec)  
* [Adequately Good JS](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)  
