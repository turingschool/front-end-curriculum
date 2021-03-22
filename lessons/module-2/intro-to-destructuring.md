---
title: "Intro to Destructuring"
length: 120
tags: Destructuring, syntax
---
## Learning Goals
Implement destructuring on arrays and objects

## Vocabulary
`Destructuring` is a feature introduced with ES6. A feature that enables you to break down a structure, like an array or object, and store its components in variables.

`Array destructuring` is a javascript expression that reduces arrays to smaller atoms where the contents of the array can be easily accessed and referenced by variables.
The reduction may only be to 1 level or to the least level (depending on the depth of the array and how far you want to destructure it). 

The `spread operator` is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.


## Warm Up
Return to your notebooks and write what do you think these logs will return?
```js
var colors = ["Red","Pink","Blue","Black"] //Array to be destructured

var [color1, color2] = colors //Destructuring

console.log(color1)
console.log(color2)
```
 

<section class="answer">
### The Answer <br>
 
This is what happen in the code above. 
 ![Destructuring-array](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array.png)
</section>

<section class="call-to-action">
### Check It Out
 
Let’s now see a few techniques to use destructuring efficiently.
Return to your group and discuss the difference between these two examples

 
#### Example 1:   
```js
var colors = ["Red","Pink","Blue","Black"] //Array to be destructured

var [,color1,, color2] = colors //Focus on the use of extra commas to skip through elements

console.log(color1)
console.log(color2)
```
#### Example2:
```js
var colors = ["Red","Pink","Blue","Black"] //Array to be destructured

var [color1, ...others] = colors //Focus on the use of ... to assign remaining elements to an array

console.log(color1)
console.log(others)
```
</section>

<section class="answer">
    
### The Answer   
    
Assigning an Array to a variable

![Destructuring-comp](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array-example1.png)
![Destructuring-comp](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array-example2.png)
     
    
</section>

## Destructuring Arrays:
#### Example:
Return to your notebooks and write what do you think this logs will return?
    
```js
var bigArr = ["number", 4,5,6]
var [ important, ...secondArr ] = bigArr;
console.log(important, secondArr)

```
Why do we use destructuring?
<section class="answer">
 
 Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals. This syntax can be extremely terse, while still exhibiting more clarity than the traditional property access.
 Without destructuring assignment, you might access the first three items in an array like this:
 
 ```js

var first = bigArr[0];
var second = bigArr[1];
var third = bigArr[2];
 ```
</section>
    
## Destructuring objects:
The right side of the statement contains the Javascript object that we want to split into variables; the left side contains a “pattern” for corresponding properties of the object. This “pattern” is usually a list of variable names.

<section class="call-to-action ">
    
##### Assigning to exisitng variables 
        
```js
    var user = {    // Object we want to destructure
        firstname: 'Jon',
        lastname: 'Doe',
        dateofbirth: '1990'
    };

// Destructuring the object into our variables
var { firstname, lastname, dateofbirth } = user;
console.log( firstname, lastname, dateofbirth);

```

</section>


<section class="answer">

### The Answer    

![Destructuring-comp](/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-object.png)

 In a destructuring expression L = R, we take the right value R, and break it down so that the new variables in L can be assigned a value. In the above code, we used the object property shorthand notation.
 ```js
  var { firstname, lastname, dateofbirth } = user;
 ```

  Without this shorthand notation, our code will look like this:
  ```js
  var user = { 
        firstname: firstname,
        lastname: lastname,
        dateofbirth: dateofbirth
    };
  ```
 
</section>

<section class="call to action">
Return to your notebooks and write what do you think the above code will look like in ES5?
</section>


<section class="answer">

### The Answer    

 ```js
 var firstname = user.firstname;
 var lastname = user.lastname;
 console.log(firstname);
 console.log(lastname);
 ```
 
 </section>
 

##### Assigning to new variable names:
<section class="call to action">
    
```js
    var user = {    // Object we want to destructure
        firstname: 'Jon',
        lastname: 'Doe',
        dateofbirth: '1990'
    };

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = user;
console.log( fn, ln, dob);
```
The above code destructures the object into variables with a different name than the object property.
</section>  


##### Assigning to a variable with default:

We can also assign default values to variables whose keys may not exist in the object we want to destructure. This will prevent our variable from having an undefined value being assigned to it. The code below demonstrates this:

```js
var user = {// Object we want to destructure
      firstname: 'Jon',
      lastname: 'Doe',
      dateofbirth: '1990'
};
// Destructuring the object into variables without 
// assigning default values 

var { firstname, lastname, country } = user;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 

var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = user;
console.log("\n After setting default values")
console.log( firstname, lastname, country);
```
#### Passing an object as an argument:
What if you want to destructuring an object as an argument?  

```js
var user = { // Object we want to destructure
      firstname: 'Jon',
      lastname: 'Doe',
      dateofbirth: '1990'
};
function myUser({ firstname, lastname, dateofbirth } = user) {
    console.log(firstname)
    console.log(lastname)
    console.log(dateofbirth)
}
myUser()

```
<section class="checks-for-understanding">
 
### Exit Ticket
What is a way of destructuring an object?
</section>

## Additional Resources

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
