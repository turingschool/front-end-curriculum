# JavaScript Fundamentals: Data Types & Structures

### Learning Goals
* Review and discuss JavaScript fundamentals: functions and data types
* Practice working with functions, primitive, and complex data types

## Vocab

- `Data Type` A kind of data, e.g., String, Object, Boolean, etc.
- `Primitives` / `Simple Data Types` Basic data types like String, Boolean, Number
- `Complex Data Types` Data types that are not Primitives. E.g., Objects, Arrays
- `Object` A data structure made up of Keys and Values
- `Key` The name used to refer to a Value in an Object
- `Value` The value referenced by a Key in an Object
- `Array` A list of values
- `Function` A grouping of executable code. Can be manipulated just like any other Object
- `Method` A function that's defined as a property of an object
- `Scope` / `Context` Where variables and functions are accessible
- `Parameters` The variables a function says it will take in when it runs. Declared inside parens
- `Arguments` The actual variables a function uses when it runs
- `Prototype` An object that allows a one object to inherit methods and properties from another

### Journal Warm Up

* Explain a function to a five year old
* What might be an example of why you would use an array?
* What are the most important/signifant things someone should know about objects?
* Consider this [code](https://codepen.io/plovett/pen/vVOGxN?editors=1112). The `log` will return `object`. Why do you think this is?

```js
  var pets = ['Pandora', 'Antigone'];
  console.log(typeof pets)
```

## Simple / Primitive Data Types

```js
// boolean values
true, false

// null value - represents an intentional absence of a value
null

// a variable that has not been assigned a value is of type undefined
// functions return undefined if no other return value is specified
undefined

// numeric values can be positive or negative and integers or floating point numbers
-43
65
3.1415

// strings, a list of characters sorrounded by single or double quotes
"true"
'34'
'JavaScript is great!'
```
#### [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
The typeof operator returns a string indicating the type of the operand.

Exercise: 
Make a variable for every data type and use typeof to see what string is returned.

<!-- 
	typeof is very useful for determining if something is a string, number, boolean, object or function
	typeof null === 'object' bug explained http://2ality.com/2013/10/typeof-null.html
-->

---

## Complex Data Types / Objects

### Objects
Objects are a complex data type provided by JavaScript. It is essentially a map between key value pairs. Keys must be strings and values can be any data type. You can think of an object as a collection of related variables.

#### Creating Objects
There are several ways to create objects. Most people prefer to use the object literal notation.

`{}`

This is a short and fast way to create a new object.

If we want to access our object later, we need to store it in a variable.

`var dog = {};`

If we had a lot of information we wanted to store about our dog we might be tempted to create a lot of variables.

```js
var dogName = 'Boris';
var dogAge = 3;
var dogBreed = 'Labradoodle';
```

We could store the same information in an object. Objects are the fundamental building block for organizing the information in our application. Objects are made up of properties. A property has two parts a key and a value.


```js
var dog = {
	name: 'Boris',
	age: 3,
	breed: 'Labradoodle'
};
```

#### Create An Object
Take a moment and create an object. Make one of the properties have a value which is another object. Object ideas: favorite book, movie, album, game, instrument, sport...

```
// example
var book = {
  title: 'Moby Dick',
  author: {
    name: 'Herman Melville',
    born: '01 August 1819'
  }
}
```

#### Adding properties to an object
We can add properties when it is created or we can add properties after an object is created. We can only create a property on an object if we give it a value

##### Adding a property during creation

```js
var dog = {
  // property name  | property value
	name: 'Boris'
};
```

##### Adding a property after creation

###### Dot notation
```js
var dog = {};

dog.name = 'Boris';
```

Dot notation is great because the syntax is short and it is easy to read. It should be used whenever you know the exact name of the property you are accessing.

###### Bracket Notation 
```js
var dog = {};

dog['name'] = 'Boris';
```

Bracket notation is great if you are storing the property name in a variable.

```js
var dog = {};
var property = 'name'

dog[property] = 'Boris';

console.log(dog); // { name: 'Boris' }
```

Typically you will want to store your key in a variable when you don't know what the key is or if the key might change.
<!-- 
	example of production vs development environment, where an environment string is stored in a variable which then determines which api is called, background color... 
-->

```js
var storeItems = [ 'hammer', 'chisel', 'rake' ];
var store = {
	hammer: 5,
	chisel: 3,
	rake: 7
};

var totalCost = 0;

for (var i = 0; i < storeItems.length; i++) {
	var itemName = storeItems[i];
	var itemPrice = store[ itemName ];  // using bracket notation because property is changing

	totalCost += itemPrice;
};

console.log(totalCost);
```

It can also be used if you have a key with a space/other character in it or that starts with a number. Typically you want to avoid doing this but you might on occasion find you have to do it.

#### Add Properties To Your Object
Add three properties to the object you made using each of the three methods discussed; dot notation, bracket string literal, bracket string variable

#### Accessing object properties
We can also use dot and bracket notation to access or use an object's properties.

```js
var dog = {
  scientificName: 'Canis lupus familiaris'  
};

console.log(dog.scientificName);    // 'Canis lupus familiaris'
console.log(dog['scientificName']); // 'Canis lupus familiaris'
```

#### Exercises
Create an object with the following keys:
`book1, book2`...`book199, book200`, whose values are their corresponding number
eg: `{ book1: 1, book2: 2`...`book199: 199, book200: 200 }`

Given the following object and variable, access the value `'Apis mellifera'` in three different ways:

```js
var honeybee = {
  scientificName: 'Apis mellifera'
};

var fancyName = 'scientificName';
```

---

### Arrays
[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are list-like objects, used for storing a list of related values. If you were making a list of pizza toppings, you might store them in an array like so:


```js
var toppings = ['cheese', 'peppers', 'onions', 'garlic'];
```

Remember we said arrays are actually objects under the hood. Though it might not seem like arrays have a set of key-value pairs like the objects we just discussed, each value in the array actually has a numbered key associated with it that counts from 0. For example, written as an object, the toppings array might look like this:

```js
var toppings = {
	0: 'cheese',
	1: 'peppers',
	2: 'onions',
	3: 'garlic'
};
```

This syntax is a lot more verbose, and the numbered keys don't really give us any useful information **except** where the value exists within the array. This can be important when we want to use some of the built-in helper methods that come with arrays.

Array objects inherit from the Array.prototype which gives us access to methods like `push`, `pop`, and `forEach`, which allow us to manipulate and interact with our arrays.

<!--TLDR: arrays are objects (whose keys are numbers that start their count at `0`), which have special methods which make it easier to manipulate and interact with the values in the array.-->


#### Exercise
In the console, take a look at `Array.prototype`. What methods do you recognize? What methods are new to you?

---

### Functions
Functions are objects that contain js code which can be repeatedly invoked / executed.

A keyword `function` function is declared using the following syntax.

```js
function sayHi () {
	var greeting = 'Hi!';
	
	console.log(greeting);
}
```

#### Function Scope

```js
function sayHi () {
	var greeting = 'Hi!';

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
	var greeting = 'Hi, ' + name + '!';

	console.log(greeting);
}

sayHi('Mabel');  // passing in an argument 'Mabel'
```

#### Returning something out of a function
If we want to create something in the function and use it outside of our function's scope, we need to return it out of the function.

```js
function makeGreeting (name) {
	var greeting = 'Hi, ' + name + '!';

	return greeting;
}

var mabelGreeting = makeGreeting('Mabel');

console.log(mabelGreeting);
```

##### One very important thing to remember!
If we are returning a value out of a function that we wish to use elsewhere in our code, it must be stored in a way that will allow us to reference it later. The easiest way to do this is to capture the value with a variable. In the above example, we are creating a new variable named `mabelGreeting` in which we are storing our newly created greeting (aka the value being returned by invoking `makeGreeting` with an argument of `'Mabel'`).

#### Turn and talk: 
- What happens to code when it is not in a function?
- How is this different from when code is in a function?

#### Exercises
Create a function `add2` that takes in a parameter of `number` and returns the parameter plus 2.

### Journal
* What are some characteristics of primitive data types?
* What is typeof?
* What's the difference between null and undefined?
* When should you store information in an object?
* When should you store information in an array?

### Links & Resources
* [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [Complex Data Types & Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)