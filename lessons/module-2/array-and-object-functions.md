---
title: Array and Object functions
length:
tags: javascript, js, array, object, 
---

## [Slides](https://docs.google.com/presentation/d/1PspIlaLWoHvXLAMARW6nrANhCPj6erLpl2B7AGNiq0o/edit#slide=id.g217b56adb2_0_0)


## Objects

#### Object Review


Objects are key data structures that typically contain related information. This information is stored using key value pairs. The key is a string that describes the information or value it is associated with.

```
const voyager1 = {
  name: 'Voyager 1',
  launchDate: 'Mon Sep 05 1977 00:00:00 GMT-0600 (MDT)',
  speedMPH: 38610 
}
```


#### Object.keys

Object.keys is a function that takes an object as a parameter.

`Object.keys(voyager1);`

It returns an array of all the objects keys.  

It copies all of the objects keys and returns them as an array of strings. We can store the array of keys in a variable.

```
const voyager1 = {
  name: 'Voyager 1',
  launchDate: 'Mon Sep 05 1977 00:00:00 GMT-0600 (MDT)',
  speedMPH: 38610 
}

const voyager1Keys = Object.keys( voyager1 );

console.log( voyager1Keys ); // [ 'name', 'launchDate', 'speedMPH' ];
```

##### Iterating over an Object

The array of object keys can be used to iterate over the object and access the values associated with the keys.

```
const voyager1 = {
  name: 'Voyager 1',
  launchDate: 'Mon Sep 05 1977 00:00:00 GMT-0600 (MDT)',
  speedMPH: 38610 
}

const voyager1Keys = Object.keys( voyager1 );

voyager1Keys.forEach( key => {
  console.log( voyager1[ key ] );
})
```

One thing to note, is that we still need to use the original object `voyager1` to get to the values. The key is a string that we can use to access the value stored inside our object.

#### Object.assign

Sometimes we want to make a copy of an object. It might seem easy to copy an object doing something like the following...

```
const voyager1 = {
  name: 'Voyager 1',
  launchDate: 'Mon Sep 05 1977 00:00:00 GMT-0600 (MDT)',
  speedMPH: 38610 
}

const voyager2 = voyager1;

voyager2.name = 'Voyager 2';

console.log(voyager1.name);  // 'Voyager 2'
```

This happens because when we move objects around and assign them to new variables they are effectively passed by reference. This means that when the object is assigned to a new variable, what is happening is a reference to the object is being assigned to the new variable. So now there are two variables pointing to the same object in memory.

To make an actual copy of the variable we can use the Object assign method. The assign method takes at least two parameters. The first parameter is the new object we want to create. Each additional parameter are objects whose properties we want to copy into the new object.

```
const voyager1 = {
  name: 'Voyager 1',
  launchDate: 'Mon Sep 05 1977 00:00:00 GMT-0600 (MDT)',
  speedMPH: 38610 
}

const voyager2 = Object.assign({}, voyager1);

voyager2.name = 'Voyager 2';

console.log(voyager1.name);  // 'Voyager 1'
console.log(voyager2.name);  // 'Voyager 2'
```

We can pass in as many additional objects as we want into Object.assign and the properties of those objects will be added to the new object.

```
const voyager1 = {
  name: 'Voyager 1',
  launchDate: 'Mon Sep 05 1977 00:00:00 GMT-0600 (MDT)',
  speedMPH: 38610 
}

const engine = {
  engineType: 'Hydrazine Thrusters'
}

const voyager2 = Object.assign({}, voyager1, engine);

console.log(voyager2.name);    // 'Voyager 2'
console.log(voyager2.engine);  // 'Hydrazine Thrusters'
```

## Arrays

#### Array Review

Arrays are specialized objects where the keys are ordered numbers. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
)

Consider the following array.

```
const holiday = [
  'pumpkin', 
  'candy', 
  'costumes'
]
holiday[1] === 'candy'

Object.keys(holiday);  // [ '0', '1', '2' ]
```

We could make a similar object with the following code.
```
const holiday = {
  0: 'pumpkin', 
  1: 'candy', 
  2: 'costumes'
}
holiday[1] === 'candy'

Object.keys(holiday);  // [ '0', '1', '2' ]
```


Arrays also give us a lot of helper methods which make working with arrays easier.

Each of these functions takes a callback function as its first parameter. The callback is executed for each element in the array. The callback receives the following three arguments the current arrayElement, the element's index, and the array

#### Array.prototype.forEach
forEach is the simplest of these functions. It simply executes the callback function for each of the elements in the array. This function does not return anything.

```
let evenNumbers = [2, 4, 6, 8, 10];

numbers.forEach( (number, index, array) => {
  console.log(number);
} )
```

#### Array.prototype.map
map is the same as forEach except that each time the callback is executed, whatever is returned from the callback is added to a new array that map returns. 

```
let evenNumbers = [2, 4, 6, 8, 10];

let oddNumbers = evenNumbers.map( (number, index, array) => {
  return number + 1;
} );

console.log(oddNumbers); // [3, 5, 7, 9, 11]
```

##### _When to Use_
Use array.map when you want a new array with the same length that is also based on your original array.

### Find and Filter
find and filter are different from forEach and map in that the callback passed to them needs to return an expression that evaluates to _true_ or _false_.

#### Array.prototype.find
Find returns the first array element where the callback function returns true.

```
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 3 },
  { name: 'mishu', age: 15 },
];

let mishu = pets.find( (pet) => {
  return pet.name === 'mishu'
} )

console.log(mishu); // { name: 'mishu', age: 15 }
```

##### _When to Use_
When you want to find only one thing in an array.

#### Array.prototype.filter
Filter returns all array elements where the callback function returns true.

```
let pets = [
  { name: 'harvey', age: 1 },
  { name: 'julius', age: 5 },
  { name: 'mishu', age: 15 },
];

let adultPets = pets.find( (pet) => {
  return pet.age > 3;
} )

console.log(adultPets); // [ {name: 'julius', age: 5}, {name: 'mishu', age: 15} ]
```
Filter will return an array with all the elements where the callback returns an expression that evaluates to true.

##### _When to Use_
When you want to make a new array containing a list of filtered items.


#### Array.prototype.reduce
Reduce is great at turning an array into one value. This value could be a number, string, object, or another array. To accomplish this, reduce takes in two parameters. The first is a callback, the second is an accumulator. The accumulator is modified in our callback and eventually is returned from our reduce function.

```
  const numbers = [1, 2, 3, 4, 5];

  // reduce( (accumulator, element, index, array) => {}, initialValue );
  let sum = numbers.reduce( (sum, number) => {
    sum += number;
    
    return sum;
  }, 0 );
```











