---
title: "Data Types in JS"
tags: javascript, data types, data structures
module: 2
---

### Learning Goals
* Review and discuss JavaScript fundamentals
* Practice working with functions, primitive, and complex data types

## Vocab

- `Data Type` A type of data, e.g., String, Object, Boolean, etc.
- `Primitives` / `Simple Data Types` Basic data types like String, Boolean, Number
- `Complex Data Types` Data types that are not Primitives. E.g., Objects, Arrays
- `Object` A data structure made up of Keys and Values
- `Key` The name used to refer to a Value in an Object
- `Value` The value referenced by a Key in an Object
- `Array` A list of values
- `Function` A grouping of executable code. Can be manipulated just like any other Object
- `Method` A function that's defined as a property of an object
- `Scope` Where variables are accessible
- `Parameters` The variables a function says it will take in when it runs. Declared inside parens
- `Arguments` The actual variables a function uses when it runs

## What is a Data Type? 

In this lesson we'll talk a bit further about data types in JavaScript. Every language has a concept of included data types, but there are often some differences in how they are handled, what they are called, etc. This can cause some confusion when trying to learn a new language, so we want to make sure we understand them deeply in JavaScript!

<section class="call-to-action">
### Shout 'em Out!
What data types are you familiar with in JavaScript?
</section>

<section class="call-to-action">
### In Your Notebook
How do we know what data type we're working with?
</section>


### Dynamically Typed vs. Statically Typed

Programming languages can fall under two categories, either **dynamically typed** or **statically typed**.  

In a **dynamically typed** language, the interpreter will infer what kind of data type we're working with rather than us having to explicitly define that.  This also means that the data type of a given value can change on you!  (which can be a common source of bugs)  

In contrast, **statically typed** languages expect you to explicitly state what data type you would like a particular value to be.

<section class="answer">
### How might you describe these terms in your own words?  Would JavaScript be considered dynamically typed or statically typed?  

If you discovered that JavaScript is a dynamically typed language, you would be correct!  Declaring variables in JavaScript might look similar to this:

```js
let count = 5;
let fact = true;
```

In contrast, a statically typed language like *Java* would declare these same variables as:

```java
int count = 5
boolean fact = true
```

Where `int` says "This variable must be an integer", `count` is the name of our variable, and `5` is it's value. Now `count` will always represent an integer and we will not be able to change it to a string or other data type later.  Same scenario for the `boolean` on the line below.

How does JavaScript know what data type we're working with? It infers it based on the way we wrote the value. If JavaScript were a person, it might look at this line of code and ask:

* is the value wrapped in quotes? -> no -> it is not a string
* is the value wrapped in hard brackets []? -> no -> it is not an array
* is the value wrapped in curly brackets {} -> no -> it is not an object
* is the value undefined, null, true, or false -> no -> it is not undefined, null or a boolean
* is the value a valid number -> yes -> it must be a number
</section>

### Type Coercion
In addition to having our data types inferred, dynamically typed languages also allow for the data type of a value to change over time. Consider the following code:

<section class="call-to-action">
### Your Turn

Considering the following, what value and data type will *totalCount* be?  (Write down what you think it will be before trying it out)

```js
let counter = 5;
let newCounter = '10';

let totalCount = counter + newCounter;
console.log(totalCount);
```

Let's try another scenario.  Although very similar, we will now use subtraction.  What would the value and data type be for *totalCount* now?

```js
let counter = 5;
let newCounter = '10';

let totalCount = newCounter - counter;
console.log(totalCount);
```
</section>

<!-- Let students look over that code for a bit and give them some guesses to choose from:
	* we would get an error because we're trying to add a number and a string
	* a number 15
	* a string 15
	* a string 510
	* a number 510
-->

What we see happen with this code is called **type coercion**. JavaScript says, "Hmm, you're trying to add a number and a string together here - I'm going to try my best and make an assumption about what you want here!". It then **coerces** the number into a string so that it can concatenate the two strings together more easily. In statically typed languages, we would get an error for trying to do this! But JavaScript is our dear friend that's trying it's best.


<!-- This is usually a good place for a POM. When you return, label the data type columns on the whiteboard:

Simple/Primitives         Complex/objects       
boolean          			objects
undefined        			arrays
null             			functions
numbers
strings
-->

## Simple / Primitive Data Types

<section class="call-to-action">
### Read
[Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

* What are some characteristics of primitive data types?
</section>


### Working with Primitives

Primitive data types are not objects, have no methods, and are immutable. Let's uncover a bit more about these properties of a primitive data type. Consider the following code:

```js
let cow = 'moo';
cow.toUpperCase();
console.log(cow); // what will be logged here?
```

<section class="call-to-action">
### Turn and talk
* On line 2, what kind of syntax are we using? Where have we seen this syntax before?  
* What data type is `toUpperCase`?  
* What will get logged on line 3?  
</section>

This particular code example seems to fly in the face of what we just learned about primitives. We are using dot notation to call a method on our `cow` variable, then uppercasing it with that method. You'll notice, however, that when we log our `cow` on line 3, we still get the lower cased original version of that string. In order to capture that new format, we would need to reassign the `cow` variable to that new representation of the string, like so:

An important distinction about immutability is that **variables themselves** (e.g. `cow`) are not immutable, but their primitive values are. We can completely reassign `cow` to a new value in order to store the uppercased version.

## Complex Data Types / Objects

## Objects
Objects are a complex data type provided by JavaScript. It is essentially a map between key value pairs. Keys must be strings and values can be any data type. You can think of an object as a collection of related variables.

### Creating Objects
Although there are several ways to create objects, most people prefer to use the **object literal notation**. (i.e. `{}`) This is a short and fast way to create a new object.

If we want to access our object later, we need to store it in a variable.

`const dog = {};`

<section class="call-to-action">
### Practice!

What are objects made up of?  <!-- Properties which has two parts, a key and a value. Keys that have a function as a value, are known as methods. -->

If we had a lot of information we wanted to store about our dog we might be tempted to create a lot of variables.

```js
let dogName = 'Boris';
let dogAge = 3;
let dogBreed = 'Labradoodle';
```

How might we store this information in an object literal?  Create a variable that uses object literal notation to store the same data.
</section>

### Adding properties to an object
We can add properties to an object when it is created or we can add properties after an object is created. We can only create a property on an object if we give it a value.

```js
const dog = {
  // property name  | property value
	name: 'Boris'
};

// OR

const dog = {};
dog.name = 'Boris';
```

#### Dot notation vs Bracket Notation

Dot notation is great because the syntax is short and it is easy to read. It should be used whenever you know the exact name of the property you are accessing:

```js
const dog = {};

dog.name = 'Boris';
```

Bracket notation is great if you don't know what the key is _or_ if the key might change:

```js
// Example 1:
const dog = {};
let property = 'name';

dog[property] = 'Boris';

console.log(dog); // { name: 'Boris' };

property = 'breed';

dog[property] = 'Labradoodle';

console.log(dog); // { name: 'Boris', breed: 'Labradoodle' };
```

```js
// Example 2:
const storeItems = [ 'hammer', 'chisel', 'rake' ];
const store = {
	hammer: 5,
	chisel: 3,
	rake: 7
};

let totalCost = 0;

for (let i = 0; i < storeItems.length; i++) {
	let itemName = storeItems[i];
	let itemPrice = store[ itemName ];  // using bracket notation because property is changing

	totalCost += itemPrice;
};

console.log(totalCost);
```

<section class="note">
### Note

Bracket notation gives us fewer limitations than dot notation. Using bracket notation allows us to set and access keys that have spaces or other characters. Typically you want to avoid doing this but you might on occasion find you have to do it:

```js
const dog = {};
dog['first name'] = 'Antigone';

console.log(dog); // {first name: 'Antigone'}
```
</section>

<section class="call-to-action">
### Your Turn (in pairs)

With a partner, complete the following exercise:

Given the following object and variable, access the value `'Apis mellifera'` in the three different ways we discussed (dot notation, bracket string literal, bracket string variable):

```js
const honeybee = {
  scientificName: 'Apis mellifera'
};

const fancyName = 'scientificName';
```
</section>

### Arrays
[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are list-like objects, used for storing a list of related values. If you were making a list of pizza toppings, you might store them in an array like so:

```js
const toppings = ['cheese', 'peppers', 'onions', 'garlic'];
```

Remember we said arrays are actually objects under the hood. Though it might not seem like arrays have a set of key-value pairs like the objects we just discussed, each value in the array actually has a numbered key associated with it that counts from 0. For example, written as an object, the toppings array might look like this:

```js
const toppings = {
	0: 'cheese',
	1: 'peppers',
	2: 'onions',
	3: 'garlic'
};
```

This syntax is a lot more verbose, and the numbered keys don't really give us any useful information **except** where the value exists within the array. This can be important when we want to use some of the built-in helper methods that come with arrays.

### Functions
Functions are objects that contain JS code which can be repeatedly invoked/executed.

A function declaration is declared using the keyword `function` and the following syntax:

```js
function sayHi () {
	let greeting = 'Hi!';
	
	console.log(greeting);
}
```

<section class="answer">
### Write the above function as an ES6 arrow function!  Only look below once you have completed!

```js
// ES6 "fat arrow" style function
const sayHi = () => {
	let greeting = 'Hi!';

	console.log(greeting)
}
```
</section>


#### Function Scope

```js
function sayHi () {
	let greeting = 'Hi!';

	console.log(greeting); // 'Hi!'
}

console.log(greeting); // Reference Error: greeting is not defined
```

Any variables which are created in the function only exist in that function. You do not have access to them outside of the function in which they were declared.

#### Parameters / Arguments

<section class="call-to-action">
### Consider the following

```js
function sayHi (name) {
	let greeting = 'Hi, ' + name + '!';

	console.log(greeting);
}

sayHi('Bob');
```

Is `name` a parameter or argument?  What about `'Bob'`?
</section>

<!-- If we want to pass information into a function, we pass in a parameter when we declare/define our function, and we pass in an argument when we invoke/call it. -->

#### Returning something out of a function
If we want to create something in the function and use it outside of our function's scope, we need to return it out of the function.

```js
function makeGreeting (name) {
	let greeting = 'Hi, ' + name + '!';

	return greeting;
}

let mabelGreeting = makeGreeting('Mabel');

console.log(mabelGreeting);
```

<section class="note">
### Important!

If we are returning a value out of a function that we wish to use elsewhere in our code, it must be stored in a way that will allow us to reference it later. The easiest way to do this is to capture the value with a variable. In the above example, we are creating a new variable named `mabelGreeting` in which we are storing our newly created greeting (aka the value being returned by invoking `makeGreeting` with an argument of `'Mabel'`).
</section>

<section class="checks-for-understanding">
### Checks for Understanding

* What are some characteristics of primitive data types?
* What are the complex data types in JS?
* When would you store information in an object vs an array? Why?
</section>

### Links & Resources
* [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [Complex Data Types & Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)