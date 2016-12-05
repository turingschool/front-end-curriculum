---
title: Introduction to JavaScript III
tags: js, introduction, functions, objects, loops
---
### Goals

By the end of this lesson, you will know/be able to:

* Understand what a loop is and when to use one
* Declare objects using literal notation
* Understand more advanced usage of functions

# Loops
There are times when we want to repeat the same operation multiple times. Loops allow us to do just that by checking a conditional. If the conditional returns `true`, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns `false`.

Let's take a look at the structure of the most commonly used type, the `for` loop:

```js
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

Which looks like this when we implement it in code:

```js
for (var i = 0; i < 10; i++ ) {
  console.log(i);
}
```

If we break this down, we see that our loop is constructed from the following parts:

- the keyword `for`
- a condition of `(var i = 0; i < 10; i++ )` that is being used as our counter
- opening a closing curly braces which wrap...
- the code that we want our loop to execute: `console.log(i);`

Let's dig into the three statements separated by semicolons that make up or our condition:

- We being with _initialization_. The first statement `var i = 0;` creates a variable that is assigned the value of 0. This variable is commonly named `i`, or `index`, and will act as the counter. It is created the first time the loop is run.
- The next statement _sets the condition_ that tells the loop when to stop running: `i < 10;`. In this case, the condition indicates that the loop will stop when `i` is greater than 10. The condition may use a variable that is assigned a value.
- Finally, with the statement `i++` we _update_ the value of our counter `i`. This adds 1 to the value of `i`. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`.

The statement within the curly braces executes each time the loop runs. In this case, we can see we are logging the value of `i` to the console.

### Looping Over Arrays
`for` loops are commonly used to iterate over the items in a array. To do this, we use the property `length` and call it on the variable associated with the array we want to iterate over. This property returns the length of, or number of elements in, an array. Let's see what that looks like in practice:

```js
var fruitList = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruitList.length; i++) {
  console.log("I have some " + fruitList[i]);
}
```

You can see that instead of using a hardcoded number, we are using `fruitList.length` in our condition. This means we will continue to loop over the array as long as the counter is less than the total number of elements in the array. That's pretty handy!

<!-- ## Types of Loops
We've looked at `for` loops, but there are other types of loops.

#### While Loops
Like `for` loops, a `while` loop checks that a condition is true and executes until that condition is false. Let's take a look at basic structure:

```js
while (condition) {
  statement
}
```

Ok, that looks pretty straightforward. Let's see it in an actual example:

```js
var i = 0;

while (i < 5) {
  console.log(i);
}
``` -->

### Loops and Performance Issues
It's important to be aware of the potential performance problems that loops can cause. When a browser hits Javascript, it stops executing anything else on the page until it has processed that script. Since loops can be run on arrays or containers of unknown size, it's possible for our loop to make a page much, much slower to load. That can be a problem!

Additionally, if the condition of your loop never returns `false`, you will get stuck in what's known as an `infinite loop`. This means that your loop will never stop running. Eventually your browser will run out of memory and your script will break.

Here's an example of an infinite loop. Open a new tab in your browser and run this in your console. What happens?

```js
for(var i = 0; i = true; i++) {
  console.log(i);
}
```

We can see that this condition will never return `false` and we'll be stuck in this loop forever (or at least until our page crashes)! Be mindful of the possibility that you could create infinite loops when leveraging loops in your code. They can happen to the best of us, and knowing what they are is the first step to avoiding and correcting them.

# Objects
Objects are a collection of key-value pairs. A _key_ is just a _name_ that holds a value. That sounds familiar, doesn't it? You know this already, because a key-value pair in an object is essentially a variable. In the context of objects, that variable is called a _property_ of the object. When we assign a function as the value to one of our keys, we call that function a _method_.

Let's look at an example:

```javascript
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
}
```
The ```school``` object has four properties:

- ```name: 'International School of Denver'```
- ```capacity: 250```
- ```languageImmersion: true```
- ```currentStudents: 75```

The ```school``` object has one method:

- ```checkOpenspots: function(){ return this.capacity - this.currentStudents; }```

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var myDumbObjectIsEmpty = {}```

There are two ways to access the properties or methods of an object:

The most common is Dot Notation:

```js
var schoolName = school.name
var schoolCapacity = school.capacity
```

Bracket Notation is less commonly used:

```js
var schoolName = school['name']
var schoolCapacity = school['capacity']
```

Let's goof off in the console a bit. Mandatory fun time!

```javascript
// Create an object in honor of @jhunbug
var myLitObject = {
  coolFactor: "bananas"
}

// 1. Get the value of myLitObject
// 2. Get the value of coolFactor
// 3. Add a new property of your choosing
// 4. Check the value of myLitObject again
// 5. Ask myLit Object for the value of the new property you set, but utilize a different notation than when you asked for the value of coolFactor in step #2
// 6. Change the value of coolFactor
// 7. Get the value of myLitObject
// 8. Create a method on myLitOjbect that logs "Skateboarding is fun" to the console
// 9. Check the value of myLitObject. Do you see your method?
// 10. Use myLitObject to log "Skateboarding is fun"
```

### What is `this`: a 10,000ft Introduction
You may have noticed that we used a familiar word in a strange way in the `checkOpenSpots` method of our `school` object. What the heck is `this`?

`this` is a keyword in Javascript that references its parent object and is dependent on the _context_ of where it is referenced. When it is used in the _global context_, `this` refers to the global objects of `document` or `window`. In the context of an object, `this` refers to and is bound to the object itself.

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement that being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.
