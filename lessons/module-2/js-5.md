# JS V

## Data Types Review

## Simple Data Types

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

We could store the same information in an object. Objects are the fundamental building block for organizing the information in our application.

```js
var dog = {
	name: 'Boris',
	age: 3,
	breed: 'Labradoodle'
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

Bracket notation is great you need to store it in a variable.

```js
var dog = {};
var property = 'name'

dog[property] = 'Boris';

console.log(dog); // { name: 'Boris' }
```

Typically you will want to store your key in a variable when you don't know what the key is or if the key might change.

```js
var storeItems = [ 'hammer', 'chisel', 'rake' ]
var store = {
	hammer: 5,
	chisel: 3,
	rake: 7
}

var totalCost = 0;

for (var i = 0; i < storeItems.length; i++) {
	var itemName = storeItems[i];
	var itemPrice = store[ itemName ];  // using bracket notation because property is changing

	totalCost += itemPrice;
}

console.log(totalCost);
```

It can also be used if you have keys with a space in it or that start with a number. Typically you want to avoid doing this but you might on occasion find you have to do it.


#### Accessing object properties
We can also use dot and bracket notation to access or use an objects properties

```js
var dog = {
  scientificName: 'Canis lupus familiaris'  
};

console.log(dog.scientificName);    // Canis lupus familiaris
console.log(dog['scientificName']); // Canis lupus familiaris
```

#### Exercises
Create an object with the following keys:
book1, book2... ...book199, book200

---

### Arrays
Arrays are objects where there exists a relationship between any properties which correspond with an integer and the length property. In addition, array objects inherit from the Array.prototype which gives them additional helper functions (i.e. push, pop, forEach...). 

Basically what this means is that arrays are objects with special methods which make it easier to add and remove properties as well as methods which make it easier to interact with all of it's properties.

### Functions
Functions are objects that contain js code which can be repeatedly invoked / executed.

A keyword `function` function is declared using the following syntax.

```js
function sayHi () {
	var greeting = 'Hi!'
	console.log(greeting)
}
```

#### Function Scope

```js
function sayHi () {
	var greeting = 'Hi!'

	console.log(greeting);
}
```

Any variables which are created in the function only exist in that function. You do not have access to them outside of the function in which they were declared.

#### Parameters / Arguments
If we want to pass information into a function we pass in a parameter to our function when we call it.

```js
// this function has a name argument
function sayHi (name) {
	var greeting = 'Hi! ' + name;

	console.log(greeting);
}

sayHi('Casey');  // passing in a parameter
```

#### Returning something out of a function
If we want create something in the function and return it outside of our function's scope we need to return it out of the function.

```js
// this function has a name argument
function makeGreeting (name) {
	var greeting = 'Hi! ' + name;

	return greeting;
}

var caseyGreeting = makeGreeting('Casey');  // passing in a parameter

console.log(caseyGreeting);
```

##### One very important thing to remember!
When returning something from a function you must give it a new variable to live in. In our above example we are creating a new variable named `caseyGreeting` in which we store our newly created greeting.
