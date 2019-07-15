---
layout: page
---

-------------
### Assigning New Variable Names to Object Keys

```js
const object = {name: 'elvis', title: 'hip swinger'}

// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'

=> var {name: person, title: job} = object
```

--------------
### Variable Swapping: Array

```js
const items = ['apple', 'banana', 'pear']

// Currently, I would get the following returns:
console.log(a) => 'apple'
console.log(b) => 'banana'

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a) => 'banana';
console.log(b) => 'apple';

=> var [a, b] = items
var [a, b] = [b, a]
```

---------------
### Object Matching

```js
const object = {
  user: 'brenna',
  id: 1,
  date: 'monday',
  module: 3
}

=> var { user, id, date, module } = object;
```

----------------
### Object Matching: Deep Matching

```js
const object = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
}

=> var { user, address, address: { city, state }, id } = object1
```

________________
### Parameter Matching   

```js
// Array
['hello', 'taylor']
// => 'hello, taylor!'

=> function sayStuff1(array) {
  var [greeting, name] = array
  console.log(`${greeting}, ${name}!`)
}

// Object with keys
const greeting="hello"
const name="taylor"
{greeting, name}
// => 'hello, taylor!'

=> function sayStuff2(object) {
  var {greeting, name} = object
  console.log(`${word}, ${name}!`)
}

//Object with key value pairs
{greeting: 'hello', name: 'taylor'}
// => 'hello, taylor!'

=> function sayStuff3(object) {
  var {greeting, name} = object
  console.log(`${word}, ${name}!`)
}
```

-----------------
### Variables and Rest

```
['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza']
// console.log(thing1) => 'apple'
// console.log(thing2) => 'banana'
// console.log(others) => ['chocolate, 'pears', 'oats', 'pizza']

=> var [a, b, ...others] = array
```

-----------------
### Object Variable Assignment Without Declaration

```js
var name, title

// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'

=> ({name, title} = {name: 'elvis', title: 'hip swinger'})
```

-----------------
### Array Variable Assignment

```js
var firstName, lastName, city, state;

// console.log(firstName) => 'marilyn'
// console.log(lastName) => 'monroe'
// console.log(city) => 'new york'
// console.log(state) => 'new york'

var [firstName, whatever, city, state] = ['marilyn', 'monroe', 'new york', 'new york']
```

------------------
### Default Values: Array

```js
=> var [firstName="george", lastName="jetson", city="minnesota", state="california"] = ['marilyn', 'monroe', 'new york']
```
------------------
### Default Values: Object

```js
var {a = "hello", b = "goodbye" } = {a: 5}
```
------------------
### Parsing An Array From A Function Return

```js
var x = () => {
  return ['hello', 'world']
}

// console.log(greeting) => 'hello'
// console.log(target) => 'world'

=> var [greeting, target] = x()
```

------------------
### Object Destructuring

```js
var object = {name: 'elvis', title: 'hip swinger'}

// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
```


------------------
### For Of Iteration

```js
var singers = [
  {
    artist: 'Elvis',
    albums: {
      album1: 'this first title for Elvis',
      album2: 'another second title for Elvis',
      album3: 'third title for Elvis'
    }
  },
  {
    artist: 'Cher',
    albums: {
      album1: 'this first title for Cher',
      album2: 'another second title for Cher',
      album3: 'third title for Cher'
    }
  }
]

// 'Artist: Elvis, Third Album: third title for Elvis'
// 'Artist: Cher, Third Album: third title for Cher'

// Think of it like:
// var { artist: art, albums: {album3: alb}} = singers

for (var { artist: art, albums: { album3: alb } } of singers) {
  console.log('Artist: ' + art + ', Third Album: ' + alb )
}
```
