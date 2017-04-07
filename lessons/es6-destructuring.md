---
title: ES6 Destructuring
module: 3
---

**Definition**: Per [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), "Destructuring" allows you to pull out data from arrays and objects into distinct variables with concise syntax.  

For the following problems, use the docs heavily. Solutions to each problem can be found through the link above.  

### Example: Variable Swapping
Given two variables, swap their values in one line of code.

```js
var thing1 = 'apple'
var thing2 = 'banana'

// => thing1 = 'banana'
// => thing2 = 'apple'
```

SOLUTION:
```
[thing1, thing2] = [thing2, thing1]
```

### Assigning New Variable Names to Object Keys
Given an object, in one line, assign variables to the values of the object using different names than the keys already in the object.
```js
const object = {name: 'elvis', title: 'hip swinger'}

// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'
```

### Variable Swapping: Array

What if I want to grab the values of the first and second elements of a given array using variables, and then swap the values of those variables?  

```js
const items = ['apple', 'banana', 'pear']

// Currently, I would get the following returns:
console.log(a) => 'apple'
console.log(b) => 'banana'

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a) => 'banana';
console.log(b) => 'apple';
```

### Object Matching
Given an object, write one line of code that assigns variables to the keys.

```js
const object = {
  user: 'brenna',
  id: 1,
  date: 'monday',
  module: 3
}
```
// console.log(user) => 'brenna'

### Object Matching: Deep Matching
Given an object with nested objects, write one line of code that assigns variables to the keys.

```js
const object = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
}
```

### Parameter Matching
Provided the arguments below, write a function that logs both arguments.

```js
// Array
['hello', 'taylor']

// => 'hello, taylor!'

// Object with keys
const greeting="hello"
const name="taylor"

{greeting, name}

// => 'hello, taylor!'

//Object with key value pairs
{greeting: 'hello', name: 'taylor'}

// => 'hello, taylor!'
```

### Variables and Rest
Assign 2 elements of an array to specific variables, and then assign the remaining values collectively to another variable
```js
['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza']
// console.log(thing1) => 'apple'
// console.log(thing2) => 'banana'
// console.log(others) => ['chocolate, 'pears', 'oats', 'pizza']
```

### Object Variable Assignment Without Declaration
Given a couple declared, empty variables, write a line of code that assigns those variables to values as keys within an object.

```js
let name, title

// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
```

### Array Variable Assignment
Given a set of variables, assign the values in one line.

```js
let firstName, lastName, city, state;
// YOUR CODE HERE

// console.log(firstName) => 'marilyn'
// console.log(lastName) => 'monroe'
// console.log(city) => 'new york'
// console.log(state) => 'new york'
```

### Default Values: Array
Now write the same thing, but set default values, and leave off an assignment on the right side of the statement.

### Default Values: Object
Given an object, assign each value to a variable but "forget" a couple. Use default values to ensure validity.

### Parsing An Array From A Function Return
Given a function that returns an array, use ES6 to parse said array so that each value is accessible directly.
```js
const x = () => {
  return ['hello', 'world']
}

// console.log(greeting) => 'hello'
// console.log(target) => 'world'
```

### Object Destructuring
Given an object, in one line of code pull out the individual keys to be accessible directly.

```js
const object = {name: 'elvis', title: 'hip swinger'}

// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
```


### For Of Iteration
Given a crazy array of objects with nested objects, iterate over it and grab just the artist and the third album title.

```js
const singers = [
  {
    artist: 'Elvis',
    albums: {
      album1: 'this first title for Elvis',
      album2: 'another second title for Elvis'
      album3: 'third title for Elvis'
    }
  },
  {
    artist: 'Cher',
    albums: {
      album1: 'this first title for Cher',
      album2: 'another second title for Cher'
      album3: 'third title for Cher'
    }
  }
]

// 'Artist: Elvis, Third Album: third title for Elvis'
// 'Artist: Cher, Third Album: third title for Cher'
```
