# JS V

## Data Types Review

## Simple Data Types

```javascript
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

## Complex Data Types / Objects

### Objects
Objects are a complex data type provided by JavaScript. It is essentially a map between key value pairs. Keys must be strings and values can be any data type.

#### Creating Objects
There are several ways to create objects. Most people prefer to use the object literal notation.

`{}`

This is a short and fast way to create a new object.

If we want to access our object later, we need to store it in a variable.

`var dog = {};`

#### Adding properties to an object
We can add properties when it is created or we can add properties after an object is created. We can only create a property on an object if we give it a value

##### Adding a property during creation

```js
var dog = {
  // property name  | property value
     scientificName: 'Canis lupus familiaris'  
};
```

##### Adding a property after creation

###### Dot notation
```js
var dog = {};

dog.scientificName = 'Canis lupus familiaris';
```

Dot notation is great because the syntax is short and it is easy to read. It should be used whenever you know the exact name of the property you are accessing.

###### Bracket Notation 
```js
var dog = {};

dog['scientificName'] = 'Canis lupus familiaris';
```

Bracket notation is great if your key is going to change and you need to store it in a variable.

```js
var dog = {};
var property = 'scientificName'

dog[property] = 'Canis lupus familiaris';

console.log(dog); // { scientificName: 'Canis lupus familiaris' }
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



### Arrays
Arrays are objects where there exists a relationship between any properties which correspond with an integer and the length property. In addition, array object inherit from the Array.prototype which gives them additional helper functions (i.e. push, pop, forEach...).


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

## Variables

## JS Execution

## Pass-By-Value || Pass-By-Reference