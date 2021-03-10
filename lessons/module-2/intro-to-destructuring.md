---
title: "Intro to Destructuring"
length: 00
tags: Destructuring, syntax
---
## Learning Goals
Implement destructuring on arrays and objects

## Vocabulary
`Destructuring` is a feature introduced with ES6. A feature that enables you to break down a structure, like an array or object, and store its components in variables.

`Array destructuring` is a javascript expression that reduces arrays to smaller atoms where the contents of the array can be easily accessed and referenced by variables.
The reduction may only be to 1 level or to the least level (depending on the depth of the array and how far you want to destructure it). 


## Warm Up
Return to your notebooks and write what do you think these logs will return?
```js
colors = ["Red","Pink","Blue","Black"] //Array to be destructured

var [color1, color2] = colors //Destructuring

console.log(color1)
console.log(color2)
```
 

<section class="answer">
### The Answer <br>
This is what happen in the code above. 
<img class="medium" src="https://github.com/turingschool/front-end-curriculum/blob/f3b5d757b797c33fc08ff93c80c9122f875f2a3a/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array.png" />
</section>

<section class="call-to-action">
### Check It Out
Let’s now see a few techniques to use destructuring efficiently.
Return to your group and discuss the difference between these two examples

 
#### Example 1:   
```js
colors = ["Red","Pink","Blue","Black"] //Array to be destructured

var [,color1,, color2] = colors //Focus on the use of extra commas to skip through elements

console.log(color1)
console.log(color2)
```
#### Example2:
```js
colors = ["","Pink","Blue","Black"] //Array to be destructured

var [color1, ...others] = colors //Focus on the use of ... to assign remaining elements to an array

console.log(color1)
console.log(others)
```
</section>

<section class="answer">
    
### The Answer   
    
Assigning an Array to a variable
    
<img class="medium" src="https://github.com/turingschool/front-end-curriculum/blob/dfec040a99f1673538180127f053d7753b3c9a8e/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array-example1.png"/>   
     
<img class="medium" src="https://github.com/turingschool/front-end-curriculum/blob/f3b5d757b797c33fc08ff93c80c9122f875f2a3a/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-array-example2.png"/> 
    
</section>

## Destructuring Arrays:
#### Example:
Return to your group and work on this example.
    
```js
let bigArr = ["number", 4,5,6]
let [ important, ...secondArr ] = bigArr;
console.log(imporant, secondArr)

```
    
## Destructuring objects:
The right side of the statement contains the Javascript object that we want to split into variables; the left side contains a “pattern” for corresponding properties of the object. This “pattern” is usually a list of variable names.

#### Example :
    
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


<section class="answer">
### The Answer     
<img class="medium" src="https://github.com/turingschool/front-end-curriculum/blob/dfec040a99f1673538180127f053d7753b3c9a8e/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-object.png"/>

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
</section>  

<section class"answer>
The above code destructures the object into variables with a different name than the object property:
</section
##### Assigning to a variable with default:


We can also assign default values to variables whose keys may not exist in the object we want to destructure. This will prevent our variable from having an undefined value being assigned to it. The code below demonstrates this:

```js
    var user = {    // Object we want to destructure
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
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);
```
#### Passing an object as an argument:
What if you want to destructuring an object as an argument?  

```js
  var user = {    // Object we want to destructure
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

What are the 2 ways of destructuring objects?
    
</section>



## Additional Resources
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
