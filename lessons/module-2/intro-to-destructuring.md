---
title: "Intro to Destructuring"
tags: Destructuring, syntax
module: 2
---

## Learning Goals

* Implement destructuring on arrays and objects

## Vocabulary
- `Destructuring` is a feature introduced with ES6. A feature that enables you to break down a structure, like an array or object, and store its components in variables.

- `Array destructuring` is a javascript expression that reduces arrays to smaller atoms where the contents of the array can be easily accessed and referenced by variables.  The reduction may only be to 1 level or to the least level (depending on the depth of the array and how far you want to destructure it). 

- `Object destructuring` is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and convenient way.  Even better, object destructuring can extract multiple properties in a single statement, can access properties from nested objects, and can set a default value if the property doesn't exist.

The `spread operator` is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.

### Starting with Array Destructuring

<section class="call-to-action">
## Warm Up

In your notebooks write what do you think these logs will return?

```js
const colors = ["Red","Pink","Blue","Black"] //Array to be destructured

const [color1, color2] = colors //Destructuring

console.log(color1)
console.log(color2)
```
</section>
 

<section class="answer">
### The Answer <br>
 
This is what happen in the code above. 
 ![Destructuring-array](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array.png)
</section>

<section class="call-to-action">
### A few more scenarios
 
Let’s now see a few techniques to use array destructuring efficiently.
In breakout groups, predict what the `console.logs` with give, run it, and then discuss the difference between these two examples.

#### Example 1:   
```js
const colors = ["Red","Pink","Blue","Black"] //Array to be destructured

const [,color1,, color2] = colors //Focus on the use of extra commas to skip through elements

console.log(color1)
console.log(color2)
```
#### Example2:
```js
const colors = ["Red","Pink","Blue","Black"] //Array to be destructured

const [color1, ...others] = colors //Focus on the use of ... to assign remaining elements to an array

console.log(color1)
console.log(others)
```
</section>

<section class="answer">
### The Answer   

**Assigning an Array to a variable**

![Destructuring-comp](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array-example1.png)
![Destructuring-comp](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array-example2.png)
</section>

## Why do we use destructuring?
Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals. This syntax can offer more clarity than the traditional way of accessing values by their index.

Without destructuring assignment, you might access the first three items in an array like this: 
 ```js
const first = bigArr[0];
const second = bigArr[1];
const third = bigArr[2];
 ```

<section class="call-to-action">
### Review
Return to your notebooks and write what do you think this logs will return?
    
```js
const bigArr = ["number", 4,5,6]
const [ important, ...secondArr ] = bigArr;
console.log(important, secondArr)
```
</section>

## Object Destructuring
The right side of the statement contains the Javascript object that we want to split into variables; the left side contains a “pattern” for corresponding properties of the object. This “pattern” is usually a list of variable names.

<section class="call-to-action ">
### Warm Up

In breakout rooms, write what you think will be logged?
        
```js
const user = { // Object we want to destructure
  firstName: 'Jon',
  lastName: 'Doe',
  dateOfBirth: '1990'
};

// Destructuring the object into our variables
const { firstName, lastName, dateOfBirth } = user;
console.log( firstName, lastName, dateOfBirth);
```

After running it, write what do you think the above code would look like in ES5?
</section>


<section class="answer">
### Breaking This Down Further    

![Destructuring-comp](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-object.png)

In a destructuring expression L = R, we take the right value R, and break it down so that the new variables in L can be assigned a value. The variable names on the left side must match the property names on the right.

In ES5, this would look like:
 ```js
const firstName = user.firstName;
const lastName = user.lastName;
console.log(firstName);
console.log(lastName);
 ```
</section>

## Assigning to a variable with default:

We can also assign default values to variables whose keys may not exist in the object we want to destructure. This will prevent our variable from having an undefined value being assigned to it. The code below demonstrates this:

```js
const user = {// Object we want to destructure
  firstName: 'Jon',
  lastName: 'Doe',
  dateOfBirth: '1990'
};
// Destructuring the object into variables without 
// assigning default values 

let { firstName, lastName, country } = user;
console.log("Without setting default values")
console.log( firstName, lastName, country);

// Destructuring the object into variables by 
// assigning default values 

let { firstName = 'default firstName', 
  lastName = 'default lastName', 
  country = 'default country' } = user;
console.log("After setting default values")
console.log( firstName, lastName, country);
```
## Passing an object as an argument:
What if you want to destructuring an object as an argument?  

```js
const user = { // Object we want to destructure
  firstName: 'Jon',
  lastName: 'Doe',
  dateOfBirth: '1990'
};

const logUser = ({ firstName, lastName, dateOfBirth }) => {
  console.log(firstName)
  console.log(lastName)
  console.log(dateOfBirth)
}

logUser(user)
```

<section class="checks-for-understanding">
 
### Exit Ticket
- How do we destructuring an object?
- How do we destructuring an object?
- How do we use spread operator?
</section>

## Additional Resources

* [MDN: Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [MDN: Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
