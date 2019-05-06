# JavaScript Fundamentals: Data Types & Structures

### Learning Goals
* Review and discuss JavaScript fundamentals
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
* Imagine you are on a technical interview, and an engineer asks you 'what is a data type?' How would you respond?

<!-- * Consider this [code](https://codepen.io/plovett/pen/vVOGxN?editors=1112). The `log` will return `object`. Why do you think this is? -->
<!-- 
```js
  const pets = ['Pandora', 'Antigone'];
  console.log(typeof pets)
``` -->

## Simple / Primitive Data Types

### Read

[Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

* What are the 6 primitive data types?
* What are 3 characteristics of primitive data types?


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


##### [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
The typeof operator returns a string indicating the type of the operand.

#### Your Turn 
 - Make a variable for every data type and use typeof to see what string is returned.
 - What would be a use case for `typeof` in a program? Turn and talk to the person next to you to discuss why this is operator is useful.

<!-- 
	typeof is very useful for determining if something is a string, number, boolean, object or function
	typeof null === 'object' bug explained http://2ality.com/2013/10/typeof-null.html
-->

---

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
var dogName = 'Boris';
var dogAge = 3;
var dogBreed = 'Labradoodle';
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

<!-- 
	example of production vs development environment, where an environment string is stored in a variable which then determines which api is called, background color... 
-->

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

<!-- 2. Create an object with the following keys:
`book1, book2`...`book199, book200`, whose values are their corresponding number
eg: `{ book1: 1, book2: 2`...`book199: 199, book200: 200 }`
 -->

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

<!-- Array objects inherit from the Array.prototype which gives us access to methods like `push`, `pop`, and `forEach`, which allow us to manipulate and interact with our arrays.

TLDR: arrays are objects (whose keys are numbers that start their count at `0`), which have special methods which make it easier to manipulate and interact with the values in the array.-->
<!-- 
#### Your turn
In the console, take a look at `Array.prototype`. What methods do you recognize? What methods are new to you?

### Destructuring

Similar to objects, we can use destructuring to unpack values from an array (using position) to create distinct variables
 -->
<!-- ```js
const sisters = ['Charlotte', 'Emily', 'Anne'];
let [first, second, third] = sisters;

console.log(second); // 'Emily'
```

**Reassigning values:**

Destructuring also lets you swap values in an array without using a temporary variable.
 -->
<!-- ```js
const list = [1, 2, 3];

// es5
let temp = list[0];
list[0] = list[2];
list[2] = temp;

// es6
[ list[0], list[2] ] = [ list[2], list[0] ];

console.log(list); // [3, 2, 1];
```

The square brackets are just part of the destructuring syntax here.

You can read more about destructuring and the things it can do [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
 -->
<!-- #### Turn and Code

```js
const numbers = [4, 5, 6, [3, 5, 7], 4];
```

Taking turns for each prompt in driver/navigator fashion, complete the following:
Using our `numbers` array, use destructuring assignment to do the following:
  1. Create two variables called `first` and `second` that hold the values from the first two elements of the `numbers` array
  2. Create a variable called `nestedArray` that holds the value of our nested array, `[3, 5, 7]`
  3. Swap the values of `5` and `6` so that the order of our array is such:  `[4, 6, 5, [3, 5, 7], 4]`
 -->
<!--   Answers:
  1. const [first, second] = numbers;
  2. const [,,,nestedArray] = numbers;
  3. [numbers[1], numbers[2]] = [numbers[2], numbers[1]]; -->

---

### Functions
Functions are objects that contain JS code which can be repeatedly invoked/executed.

A function declaration is declared using the keyword `function` and the following syntax:

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

#### Your Turn
- Create a function `add2` that takes in a parameter of `number` and returns the parameter plus 2.
- Add conditional logic within your function to handle for the case that an argument is not passed. In this event, the parameter of `number`should be set to `0` so that the function returns `2` 
- Refactor your function by removing the conditional logic and setting a default value of `0` for the `number` parameter

### Journal
* What are some characteristics of primitive data types?
* What are the complex data types in JS?
* When would you store information in an object vs an array? Why?

### Links & Resources
* [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [Complex Data Types & Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)