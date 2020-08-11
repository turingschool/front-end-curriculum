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
### Turn and Talk
How do we know what data type we're working with?
</section>


### Dynamic Typing

JavaScript is what we call a **dynamically typed** language. This means that the JavaScript interpreter will infer what kind of data type we're working with rather than us having to explicitly define that. It also means that the data type of a given value can change on you! This is a common source of bugs in JavaScript programs.

This feature of JavaScript is in contrast to **statically typed** languages, where you must explicitly state what data type you would like a particular value to be. For example, in Java, we might declare a variable like so:

```java
int count = 5
```

Where `int` says "This variable must be an integer", `count` is the name of our variable, and `5` is it's value. Now `count` will always represent an integer and we will not be able to change it to a string or other data type later.

Compare this to JavaScript where we might declare the same variable like so:

```js
let count = 5;
```

How does JavaScript know what data type we're working with? It infers it based on the way we wrote the value. If JavaScript were a person, it might look at this line of code and ask:

* is the value wrapped in quotes? -> no -> it is not a string
* is the value wrapped in hard brackets []? -> no -> it is not an array
* is the value wrapped in curly brackets {} -> no -> it is not an object
* is the value undefined, null, true, or false -> no -> it is not undefined, null or a boolean
* it the value a valid number -> yes -> it must be a number

### Type Coercion

In addition to having our data types inferred, dynamically typed languages also allow for the data type of a value to change over time. Consider the following code:

```js
let counter = 5;
let newCounter = '10';

let totalCount = counter + newCounter;
console.log(totalCount); // what value and data type will totalCount be?
```

What we see happen with this code is called **type coercion**. JavaScript says, "Hmm, you're trying to add a number and a string together here - I'm going to try my best and make an assumption about what you want here!". It then **coerces** the number into a string so that it can concatenate the two strings together more easily. In statically typed languages, we would get an error for trying to do this! But JavaScript is our dear friend that's trying it's best.

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

```js
let cow = 'moo';
cow = cow.toUpperCase();
console.log(cow);
```

An important distinction about immutability is that **variables themselves** (e.g. `cow`) are not immutable, but their values are. We can completely reassign `cow` to a new value in order to store the uppercased version.

## Complex Data Types / Objects

## Objects
Objects are a complex data type provided by JavaScript. It is essentially a map between key value pairs. Keys must be strings and values can be any data type. You can think of an object as a collection of related variables.

### Creating Objects
There are several ways to create objects. Most people prefer to use the object literal notation.

`{}`

This is a short and fast way to create a new object.

If we want to access our object later, we need to store it in a variable.

`const dog = {};`

If we had a lot of information we wanted to store about our dog we might be tempted to create a lot of variables.

```js
let dogName = 'Boris';
let dogAge = 3;
let dogBreed = 'Labradoodle';
```

We could store the same information in an object. Objects are the fundamental building block for organizing the information in our application. Objects are made up of properties. A property has two parts a key and a value.


```js
const dog = {
	name: 'Boris',
	age: 3,
	breed: 'Labradoodle'
};
```

#### Your Turn
Take a moment and create an object. Your object should have the following:
  - One of the properties should have a value that is a nested object
  - One property should have a value that is a string

_Some ideas: favorite book, movie, album, game, instrument, sport..._

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
const dog = {};
let property = 'name';

dog[property] = 'Boris';

console.log(dog); // { name: 'Boris' };
```



```js
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

Bracket notation gives us fewer limitations than dot notation. Using bracket notation allows us to set and access keys that have spaces or other characters. Typically you want to avoid doing this but you might on occasion find you have to do it:

```js
const dog = {};
dog['first name'] = 'Antigone';

console.log(dog); // {first name: 'Antigone'}
```

#### Turn and Code
With a partner, complete the following two exercises:

1. Given the following object and variable, access the value `'Apis mellifera'` in the three different ways we discussed (dot notation, bracket string literal, bracket string variable):

```js
const honeybee = {
  scientificName: 'Apis mellifera'
};

const fancyName = 'scientificName';
```


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

```js
// ES6 "fat arrow" style function
const sayHi = () => {
	let greeting = 'Hi!';

	console.log(greeting)
}
```

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
If we want to pass information into a function, we pass in a parameter when we declare/define our function, and we pass in an argument when we invoke/call it.

```js
// this function has a parameter of name
function sayHi (name) {
	let greeting = 'Hi, ' + name + '!';

	console.log(greeting);
}

sayHi('Mabel');  // passing in an argument 'Mabel'
```

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

##### One very important thing to remember!
If we are returning a value out of a function that we wish to use elsewhere in our code, it must be stored in a way that will allow us to reference it later. The easiest way to do this is to capture the value with a variable. In the above example, we are creating a new variable named `mabelGreeting` in which we are storing our newly created greeting (aka the value being returned by invoking `makeGreeting` with an argument of `'Mabel'`).

### Journal
* What are some characteristics of primitive data types?
* What are the complex data types in JS?
* When would you store information in an object vs an array? Why?

### Links & Resources
* [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [Complex Data Types & Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)