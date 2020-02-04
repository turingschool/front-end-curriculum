---
title: Arrays and For Loops
length: 90
tags: javascript, foundation, arrays, loops
---

## Learning Goals

In this lesson we'll cover:

* Array literals  
* Adding/changing values to arrays via their indices  
* `for` loops and how to iterate through arrays using loops

## Vocabulary

- `Literal`  A way of declaring a data structure and its values at the same time
- `Array` Used to store a collection of data items/multiple values under a single variable name
- `Element` A single item stored in an array. An element can be of any data type.
- `Loops` A quick and easy way to do something repeatedly
- `Control Flow` The order in which the computer executes statements in a script. The order of execution can change whenever the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.
- `Bracket Notation` How we access individual elements of an array. Either to
  express the element, or assign a new element.

## Warm Up

Each person should have one post-it note available at your table.
- If you have pink, write the name of a pet, as a string. Do not assign it to a variable.
- If you have yellow, write the age of a pet, as a number. Do not assign it to a variable.

[Instructor Resource](https://github.com/turingschool/front-end-keys/blob/master/module-1/lesson-plans/array-loops.md)

## Arrays

An array is a complex data type. Instead of storing just one value, it stores an ordered list of values. Each value is referred to as an `element`. You should consider using an array whenever you are working with a collection of values, or values that are related to one another.

You can put different types of data into an array, and there is not a certain number of elements an array can or should contain:

```js
var arrayName = [element0];
var rainbowColors = ['Red', 'Orange', 'Yellow'];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];
```
You can create an array just like you would any other variable, using the `var` keyword followed by the name of your array. The values are assigned to the array inside a pair of square brackets (`[]`), and each element is comma-separated. The above technique for creating an array is known as an **array literal**. You can also write an array with values on separate lines, like so:

```javascript
var colors = [
  'white',
  'black',
  'pink'
];
```

## Accessing Values in Arrays

Each value in an array is automatically given a number called an index. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the above `colors` example, the following is true:

- color white has an index of 0
- color black has an index of 1
- color pink has an index of 2

You can change values in an array by using their index. Let's walk through it in the console:

```javascript
// Create the array
var colors = ['white', 'black', 'pink'];

// Check the value of colors
colors;

// Update the third value in the array
colors[2] = 'blue';

// Check the value of colors
colors;

// Get the value of the 1st element
colors[0];
```

<section class="call-to-action">
### Your Turn

In the console:  
- create an array of cars
- change the values within the array
- add a new car to the array
- identify the value of the 3rd element of the array
</section>

## Getting Multiple Values from Functions

We learned last week that a single function can only return a single value. There will be times when you want to send a list of values over. We are able to do this by returning an array. Because an array is a complex data type, it has the ability to "wrap up" many values into one value, it doesn't break the rule of "a single function can only return a single value".

```javascript
function combineNames(name1, name2, name3) {
  var names = [name1, name2, name3];
  return names;
}

var listOfNames = combineNames("Luna", "Bey", "Sunny");

listOfNames;
// => ["Luna", "Bey", "Sunny"]

```

# Loops

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

<section class="call-to-action">
### You Do

#### Annoying Zoo Kid

1. Create an array of four animals called `animals`.
2. Create a function called `nameAnimals`.
3. Within your function, create a `for loop` that logs `"Mommy, I want to see [insert animal name here]! Waaa!"`
4. With your array (and potentially knowledge of parameters), invoke your function to ensure it is working correctly!

#### In Too Deep

1. Create an array of numbers called `coolNums`.
2. Create a function called `getSum` that takes one parameter, an array of numbers.
3. Within your function, create a variable called `sum` that starts at 0.
4. Within your function, create a `for loop` that increments AND reassigns the value of the sum variable each iteration.
5. Return the `sum` variable from the function.
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
