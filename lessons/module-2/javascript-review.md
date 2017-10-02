---
title: JavaScript Review
module: 2
---

## Description
A review of javascript concepts covered in module-1

## Learning Goals

In this lesson we'll cover:

* JavaScript data types
* Variables
* Operators
* Conditionals
* Functions

# Data Types

There are different data types in JavaScript. It's important to understand what type of data you're dealing with as you're writing code, and knowing the types of data are available to you is the first step.

### Basic Data Types

There are five basic data types: boolean, null, undefined, numeric, and string. Let's go over what each of these is.

```javascript
// boolean values
true, false

// represents an intentional absence of a value
null

// a variable that has not been assigned a value is of type undefined
// functions return undefined if no other return value is specified
undefined

// numeric values
-43
65
3.1415

// strings, you can use single or double quotes
"true"
'34'
'JavaScript is great!'
```

`null` [represents the intentional absence of any object value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

`undefined` [A variable that has not been assigned a value is of type undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### Object
Objects are a complex data type provided by JavaScript. It is essentially a map between key value pairs. Keys must be strings and values can be any data type.

```
// US State object example
{
  'name': 'Kentucky',
  'capitol': 'Frankfort',
  'population': 4437000,
  'isAwesome': true
}
```

### Functions
Functions are objects which can be executed.

### Arrays
Arrays are objects where there exists a relationship between any properties which correspond with an integer and the length property. In addition, array object inherit from the Array.prototype which gives them additional helper functions (i.e. push, pop, forEach...).

# Variables in JavaScript

## What is a variable?

A variable is a place to store values. When we write scripts, we need to temporarily store pieces of data. We store that data in variables. "Variable" is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run.

A variable is, at its most simple, a declaration. It's made up of two parts: the variable keyword, `var`, and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
var myVariableName;
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

## Rules for Naming Variables
- Names must begin with a letter, dollar sign, or an underscore. They cannot begin with a number.
- Names can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name.
- You cannot use keywords or reserved words (such as `var` or `for`).
- All variables are case sensitive.
- Use names that describe the kind of information you plan to assign the variable.
- If your variable is made up of more than one word, then use camel case for every word AFTER the first word, which should be lower case (thisIsMyVariableName).

## Variable Values: Assignment

So, we have our variable. Now what? When we first create a variable, its value is undefined because it doesn't have a value yet. This is because we have to set that value! Let's add a value to our `myVariableName` variable:

```javascript
var myVariableName = "Hello, variable!";
```

We've added a couple of things to our variable. Let's go through them:

After our `var` keyword (a special word that the JavaScript interpreter knows is used to create a variable) and our variable name, we have an equals sign, `=`. That's called the _assignment operator_, because we use it to _assign_ a value to our variable declaration.

## Using Variables Together

Now that we know about different data types and have values assigned to both of our variables, let's dive into using them together!

So far, we have:

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
```

Let's make a new variable called "creatureCount" and assign the value as our quantity and our mythicalCreature.

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = quantity + mythicalCreature;
```

Open up the console in your browser, enter these in, and see what you get!
Now change the value of your quantity variable and ask the console for the creatureCount value again.

## Concatenating Variable Values

In the example above, we used a `+` as a string operator to combine the values of two different variables. This is called _concatenation_, which is a series of values linked together.

We can concatenate html tags, text, numbers, and variable values. Let's revisit our example above to concatenate a more readable phrase as the value of our creatureCount variable:

```javascript
var quantity = 3;
var mythicalCreature = " unicorns";
var creatureCount = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
```
This is very useful when we want to append data to our webpage, because it means we can write out an entire HTML tag and concatenate the data from our variable.

# Expressions

An _expression_ evaluates to (results in) a single value. Expressions rely on operators to create this single value. There are 2 types of expressions:

1. Expressions that assign a single value to a variable. They look like this: `var fruit = "apple";`
2. Expressions that use two or more values to return a single value. They look like this: `var adele = "Hello, " + "its me";`

# Operators

Expressions rely on operators to calculate their single value. There are 5 basic types of operators to get you started:

1. [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators) assign a value to a variable. (hint: you've got these down already) `var color = 'magenta';`
2. [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) perform basic math. `var addTwo = 2 + 2;`
3. [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators) combine strings. `var greeting = 'Hello! ' + 'Nice to meet you.';`
4. [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators) compare two values and return a __true__ or __false__. `var buy = 3 > 5; // Value of buy is false`
5. [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators) combines __expressions__ and return a Boolean value of true or false. `var buy = (5 > 3) && (2 < 4);`

# Statements

A script is a series of instructions that a computer can follow one by one. Each individual instruction is known as a statement. Each statement in JavaScript is followed by a semicolon.

Example statements:

```javascript
console.log('BOOM');
alert('POW');
```

# Conditionals

Sometimes we want to perform an action based on some kind of condition. In English, we can say "If this thing is true, then do that." To do this in JavaScript, we can write conditionals to take a certain path in our program.

To use conditionals, we first need to use expressions, operators, and statements.


## Basic Conditional Structure

Let's now look at the basic structure of a conditional:

```javascript
if (expression) {
  statement;
} else {
  statement;
}
```

If the expression evaluates to `true`, then the statement(s) for that condition will run. Otherwise, if the expression is `false`, then the statement(s) will not run at all. The expression will usually contain an operator to make a comparison (that evaluates to true or false).

Some examples of expressions we could use for a conditional are:

* `myNum < 5`
* `userCity === "Denver"`
* `isTired === true`

Now for some real conditional examples.

```javascript
var cookie = "chocolate chip";

if (cookie === "chocolate chip") {
  alert("This cookie is a chocolate chip cookie!");
} else if (cookie === "oatmeal raisin") {
  alert("This is not a cookie :(");
} else {
  alert("I bet you wish you had a chocolate chip cookie");
}
```

```javascript
var hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  console.log('I am groggy.');
} else {
  console.log('I feel fantastic!');
}
```

# Functions
Functions are a way to group statements together to perform a specific task. Functions are reusable blocks of code. To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

## Anatomy of a Function:
```javascript
function myRadFunction() {
  var myFirstStatement = "Assigning a string to a variable called 'myFirstStatement'";
  alert('This is my second statement!');
  console.log(myFirstStatement);
}
```

- You declare a function using the keyword `function`.
- You can name the function anything you want, but it must include a set of parentheses after the name, which can be empty or accept parameters.
- You must follow the name of the function with a set of curly braces, which act as bookends to hold the set of statements you want the function to run when it is called.
- Calling the function is quite easy. Simply type the function name with it's parenthesis and any associated parameters.

## Call a Function:
```javascript
// Calling a function w/out arguments
myRadFunction();

// Calling a function with arguments
myRadFunction(arg1, arg2);
```

When this code is read, `myRadFunction()` is "called", all three statements within the function's body (those curly braces) get run.

## Pass Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_. These are bits of information that you identify with appropriately named labels (you get to decide the notation) inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as means to pass values.

### Parameters vs. Arguments
Its a subtle difference. Basically, when you declare a function, and you stipulate the function will accept some bits of information, those are parameters. Then, when you pass the values of the parameters, those are called arguments. Like this:

```javascript
// parameters named on declaration of function
function myDreamCar(make, model) {
  return "Buy me " + make + " " + model;
}

// arguments "Audi" and "R8" passed into a called function
myDreamCar("Audi", "R8");
```

## Getting A Value from Functions:
Some functions return information to the code that called them. Wait - what? When a function performs a calculation, like 2 + 2, it will return the "answer" of 4, right? Yes, AND, you still have to tell it to do so. Let's work with some return statements in functions with parameters in the console:

```javascript
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function addTwoNumbers(num1, num2) {
  num1 + num2;
}

function addTwoNumbers(num1, num2) {
  console.log('Boom');
  return num1 + num2;
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log('Boom');
}

```

The return statement ends function execution and specifies a value to be returned to the function caller. It looks like this:

```javascript
return [[expression]]
// The expression to return. If omitted, undefined is returned instead.
```

When a `return` statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, undefined is returned instead. The following return statements all break the function execution:

```javascript
return;
return true;
return false;
return x;
return x + y / 3;
```

### Additional Practice

* [JavaScript Playground](http://frontend.turing.io/lessons/module-1/javascript-playground.html) let's you experiment more with these concepts.

# More on Functions

Can't get enough.  

## Part 1: Calling functions inside of other functions
When writing Javascript, you want to do your best to keep your code DRY. That means keeping functions concise and single responsibility. It's not uncommon to do a first pass at solving a problem and end up with a more verbose solution, and then revisit your code to tighten it up. This process of cleaning up your working code is called `refactoring`. When we refactor, one of the things we look for is unnecessary duplication. If we see a line of code being used in multiple places, we can pull it out into its own separate functions of reusable code.

Let's take a crack at refactoring some functions and calling functions within other functions. Below we see two very important functions:

```js
function karateChop() {
  console.log("KARATE CHOP!");
  alert("KAPOW!");
}

function ninjaAttack() {
  alert("KAPOW!");
  console.log("NINJA SURPRISE!");
}
```

We can see that we have some duplication going on between these two functions. We see we have an `alert` that is exactly the same in both functions, which means it is a prime candidate to get pulled into its own function. This will let us reuse this code without retyping it repeatedly (which helps reduce human error and typos), and gives us the flexibility to easily use it in future functions as well. Let's see what that looks like:

```js
function kapow() {
  alert("KAPOW!");
}

function karateChop() {
  console.log("KARATE CHOP!");
  kapow();
}

function ninjaAttack() {
  kapow();
  console.log("NINJA SURPRISE!");
}
```

### Your Turn

## Part 2: Declarations vs Expressions

### Named Functions aka Function Declarations

So far, we've been working with *named functions*. *Named functions* can also be referred to as *function declarations*, or even *normal functions*.  

Through *function declaration*, or *named functions*, ie: `function myNamedFunction()`, we create a function that we intend to call later in our code via the name we gave it.  

This type of function does not require the keyword `var` to kick it off. Even without the keyword `var`, the syntax feels similar to when we were naming/assigning variables: a variable declaration must start with `var`, followed by the name of the variable, and a function declaration must start with `function`, followed by the name of the function.  We can then call this function all over our code by that name property.  

```javascript
// Declare a named function
function myRadFunction(parameter) {
  console.log(parameter);
  alert("All done!");
}

// Call that named function to execute
myRadFunction("Boom");

// You can even call the function INSIDE ITSELF, which is called "recursion".
function myRadFunction(parameter) {
  console.log(parameter)
  if (someCondition) {
    myRadFunction(parameter)
  }
}
```

### Anonymous Functions and Function Expressions

Another type of function is the *anonymous function*, which does not have a name. These are commonly used as arguments to other functions:

```js
setTimeout(function() {
  alert('BOO!')
}, 1000)
```  

They are also commonly referred to as a *function expression* because the function is assigned to a variable, which makes the anonymous function part of a larger `expression`.  

```js
var aliens = function() {
  alert('E.T. PHONE HOME')
};
aliens();
```

Take a moment to recall what an `expression` does in JavaScript. How do you think that applies here?  

Things to think about:  
- Where can expressions be used?
- Can a function return a value?
- Can a function be an expression?  

Recall that anywhere the interpreter expects to find an expression, like when you declare a variable name, we can use an expression that is NOT named as the value. In the context of functions, we call this an *anonymous function*. Remember that an expression simply returns a value, so it makes sense that we should be able to accomplish that with an function.

To reiterate, `function expressions` define a function, but instead of giving the name to the function itself, the function is left anonymous and the name is instead assigned to a variable.  

Let's take a look at a few more examples.

```js
// Instead of declaring a named function, we assign a function to a variable.
var area = function(width, height) {
  return width * height;
};

// We call this function using the variable that we assigned our anonymous function to
area(2, 1)

// We can even assign that function call as the value of another variable. How would we run our 'area' function now?
var size = area(3, 4);
```

Why does this matter? Seems like everyone just wants to make life hard with all these different ways of doing what seems like the same thing. Enter...

### Hoisting

Hoisting is a fancy way of saying that "some things are considered more important" to the interpreter that processes your JavaScript. In other words, certain lines of code are `hoisted` to the top of the containing scope of your code.  

But WTF does that even mean??

Example:

```js
// This named function...
function foo() {
  bar();
  var x = 1;
}

// Will actually be interpreted like this:
function foo() {
  var x;
  bar();
  x = 1;
}
```

A function declaration (ie: `function foo()`) has a higher priority to the interpreter than an anonymous function (ie: `function()`). The interpreter will always look for variables and function declarations _before_ going line-by-line through the rest of the script. This means that a function created by a function declaration gets special treatment, and can be called _before_ it has even been declared.  

But Wait! Don't the examples above show that variables get hoisted? Doesn't that mean that function expressions (ie: `var foo = function()`) would get hoisted too?.

Tricky Question! You'll notice that in the above snippets of code, only the **NAME** of the variable is hoisted, but the value is left behind. The value of that variable is not evaluated until the interpreter reaches the line where that variable is declared. **Function declarations, on the other hand, are treated differently. The entire body of that declaration will be hoisted as well.**    

In other words, this means that when a function is written as an expression, the interpreter won't process it until it gets to that full statement. **This means function expressions do *not* get special treatment, you cannot call the function _before_ the interpreter discovers it.** (As a side note, it also means any preceding code up to that point could potentially alter what goes inside that function.)  

### Your Turn
Take a few minutes with the person in front/behind you to talk through and explain hoisting to each other.

# Variable Scope
Where you declare a variable affects where it can be used within your code. If you declare a variable within a function, it can only be used within that function. This is known as the variable's `scope`. When we talk about variables in regard to their scope, there are two (kind of three) types:

- Local Variables:
  - created _inside_ a function using the var keyword
  - said to have "local scope"
  - cannot be accessed outside the function in which it was declared
  - they are created when the function is run, and removed when it is done
  - if the function runs twice, the variable could have a different value each time
  - if the variable is locally scoped, then two different functions can use the same variable name without a naming conflict

- Global Variables
  - created _outside_ a function
  - can be used anywhere in the script
  - said to have "global scope"
  - stored in memory for as long as the web page is loaded
  - takes up more memory than local variables, as well as introduces more risk of naming conflicts

- Variables sans the keyword `var`
  - ok when used to redefine a variable that has already been declared
  - risky business otherwise

## The Variable Danger Zone

Keep this in mind as you're making new variables:

Variables sans the keyword `var`
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - are bad practice

The good news is all you have to do to avoid this is to always remember to use the `var` keyword when declaring a new variable!

# Objects
Objects are a collection of key-value pairs. A _key_ is just a _name_ that holds a value. That sounds familiar, doesn't it? You're actually used to working with key-value pairs already, because a key-value pair in an object is essentially a variable. In the context of objects, that variable is called a _property_ of the object. When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: value1,
  property2: value2,
  property3: function() {
    return "I'm value3!";
  }
}
```

Which looks like this when we implement it in code:

```javascript
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
}
```
The ```school``` object has four properties:

- ```name: 'International School of Denver'```
- ```capacity: 250```
- ```languageImmersion: true```
- ```currentStudents: 75```

The ```school``` object has one method:

```js
checkOpenspots: function() {
  return this.capacity - this.currentStudents;
}
```

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var myDumbObjectIsEmpty = {}```

There are two ways to access the properties or methods of an object:

The most common is Dot Notation:

```js
var schoolName = school.name
var schoolCapacity = school.capacity
```

Bracket Notation:

```js
var schoolName = school['name']
var schoolCapacity = school['capacity']
```

Typically bracket notation is used when the name of the property is stored in a variable.

```js
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
}

var propertyName = 'name';

console.log(school[propertyName]); // 'International School of Denver

var properties = [ 
	'name', 
	'capacity', 
	'languageImmersion', 
	'currentStudents', 
	'checkOpenSpots' 
];

properties.forEach( prop => {
  console.log( prop );
  // console.log( school[prop] );
});
```

# Objects: Constructor Notation

We feel pretty good about using literal notation to create an object. We know that all we really need is `{}`, but it's a good idea to assign an empty object to a variable to we can actually put things in it.

Now, let's talk about using _constructor notation_ to create an object. It's not too hard. Out of the box, javascript gives a function for making blank objects. Javascript also gives us a handy keyword called ```new```. When you put the two together, you can generate blank objects all day!

```javascript
var myLitObject = new Object()
myLitObject
```
And just like before, you can add/change properties and methods on this object, using dot and/or bracket notation.

## Creating Many Objects

Sometimes, you want to create a bunch of objects that are similar. Object constructors can use a function as a _template_ to spit out little objects that you define. Everytime you call ```new``` on this constructor you get an instance of the object. These are called `constructor functions`, and you can think of them like cookie cutters that produce the same shape of cookie every time you use them. Let's take a look:

```javascript
function Restaurant(name, tables, reservations) {
  this.name = name;
  this.tables = tables;
  this.reservations = reservations;
  this.checkAvailability = function () {
    return this.tables - this.reservations;
  }
}
```

Let's talk about what's going on here:

- A function called `Restaurant` is a template for creating new objects that represent individual "instances" of restaurants  
- The function has three parameters (`name`, `tables`, `reservations`)  
- Each parameter sets the _value_ of a _property_ in the object  
- Each object created will utilize the same method for checking availability  
- The ```this``` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function creates  
- Different from an object literal, each statement in a constructor object ends in a semicolon instead of a comma  
- Constructor functions begin w/ capital letters, unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. Will it still work if you don't use capitals? YES.  

## Prototypes & Inheritance: A First Look
All JavaScript objects **inherit** the properties and methods from their `prototype`.  

In other words, each object has an internal link to another object called its `prototype`. That prototype object has another prototype of its own, and so on and so on until an object is reached with `null` as its prototype. ```null```, by definition, has no prototype, and acts as the final link in this _prototype chain_.  

There is nothing special about a prototype object. There are no special-out-of-the-box methods or magic to a prototype. Let's look:

```javascript
// Let's make a constructor function
function DumbObjectMaker() {}

// Let's ask DumbObjectMaker for the value of it's prototype
function DumbObjectMaker() {}
DumbObjectMaker.prototype
```

As a review,constructors in javascript can be any function and they are responsible for creating new instances - recall that we can throw on some initial properties in our constructor function to give it some information off the bat.

```js
function DumbObjectMaker() {
  this.name = "Elvis"
}
```

Similarly, a `prototype` in javascript can be _any object_ and it is responsible for defining the **behavior** of instances. This behavior is defined by modifying the prototype directly, e.g. by adding functions to it as properties. Creating prototype functions is essentially defining your objects' instance methods.  

Let's look at some code examples.  

```javascript
// Outfit constructor whose only job is to create instances of outfits all day. It takes pants, socks, and shirt parameters, so it can make different outfits all day.
function Outfit(pants, socks, shirt) {
	this.pants = pants;
	this.socks = socks;
	this.shirt = shirt;
}

Outfit.prototype.compliment = function() {
  console.log(`Nice ${this.pants} pants and ${this.socks} and ${this.shirt} shirt!`)
}

// Now we can create instances of an Outfit and use our compliment function to fire off the same behavior for every outfit we create.

var casual = new Outfit('denim', 'cat', 'hanes')
casual.compliment();
```

_Note_: We will get WAY MORE INTO prototype methods and what is happening behind the scenes as we progress through this mod/program. This is not the last time we will talk about these concepts so if prototypes and the word "this" make you feel panicky...thats ok.  

## Which Data Structure?
When deciding on an approach, you must consider how the data will be used. Let's think about a few scenarios:

When the order of objects is important, they should be stored in an array.  
When you want to access objects using their name, they work well as properties of another object.(because you would not need to iterate through all objects like in an array).

#### Objects in an Array

```javascript
var people = [
  {name: 'Mike', age: 65, active: true},
  {name: 'Becca', age: 23, active: false},
  {name: 'Tony', age: 40, active: false},
  {name: 'Penelope', age: 23, active: true}
]
people[1].name
people[3].age
people[2].active
```

#### Objects as Properties

```javascript
var people = {
  Hercules: {age: 65, active: true},
  Aphrodite: {age: 23, active: false},
  Zeus: {age: 40, active: false},
  Magneto: {age: 23, active: true}
}
people.Magneto.age
people.Hercules.active
people.Aphrodite.age
```

# Arrays
An array is a special type of object. Instead of storing just one value, it stores an ordered list of values. You should consider using an array whenever you are working with a collection of values, or values that are related to one another.

You can put different types of data into an array:

```js
var arrayName = [element0, element1, ...];
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
'Blue', 'Indigo', 'Violet'];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];
var myFavoriteThings = ['Broccoli', 1024, 'Sherlock'];
```
You can create an array just like you would any other variable, using the var keyword followed by the name of your array. The values are assigned to the array inside a pair of square brackets ([]), and each individual value is comma-separated. The above technique for creating an array is known as an **array literal**. It is usually the preferred method for creating an array. You can also write an array with values on separate lines, like so:

```javascript
colors = ['white',
          'black',
          'pink']
```

## Accessing Values in Arrays
Each value in an array is automatically given a number called an index. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the above `colors` example, the following is true:

- color white has an index of 0
- color black has an index of 1
- color pink has an index of 2

You can change values in an array by their index. Let's walk through it in the console:

```javascript
// Create the array
var colors = ['white', 'black', 'pink'];

// Check the value of colors
colors;

// Update the third value in the array
colors[2] = 'blue';

// Check the value of colors
colors;

// Get the value of the 1st element
colors[0];
```

### Your Turn (5 min)

In the console:  
- create an array of cars
- change the values within the array
- add a new car to the array
- identify the value of the 3rd element of the array

## Getting Multiple Values from Functions:

Functions can return more than one value using an array. Let's see what this looks like:

```javascript
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
```

### Your Turn (10 min)

Okay, let's pick this apart in the console, step by step, and make sure we understand what's what. In the console, do these things:

```javascript
// Declare the getSize function
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

// Ask the console what "getSize" is
getSize;

// Call the "getSize" function
getSize();

// Why this?
[NaN, NaN];

// Okay, pass getSize some arguments
getSize(5, 3, 2);

// I feel pretty good about this result, but feel free to check the math. ;)
[15, 30];

// Interactive Pop Quiz Time!
var areaOne = getSize(3, 2, 3)[0];
var areaTwo = getSize(3, 2, 3)[1];
var areaThree = getSize(5, 1, 2)[0];
var volumeOne = getSize(2, 2, 2)[1];
var volumeTwo = getSize(1, 8, 7)[0];
```

# Loops
There are times when we want to repeat the same operation multiple times over a set of data. Loops allow us to do just that by running through our data one by one and executing code to accomplish a goal.

For example, for each item in a list (maybe an `array`...) if a conditional returns `true`, a code block will be run and the condition will be checked again. This pattern will be repeated until the conditional returns `false`.

Let's take a look at the structure of the most commonly used type, the `for` loop:

```js
for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

Which looks like this when we implement it in code:

```js
for (var i = 0; i < 10; i++ ) {
  console.log(i);
}
```

If we break this down, we see that our loop is constructed from the following parts:

- the keyword `for`  
- a set of rules, or conditions `(var i = 0; i < 10; i++ )`   
- opening and closing curly braces which contain our code  
- the code that we want our loop to execute: `console.log(i);`  

Let's dig into the three statements separated by semicolons that make up or our conditions:

- We begin with **initialization**. Where do we want our loop to start? The first statement `var i = 0;` creates a variable that is assigned the value of 0. This variable is commonly named `i`, or `index`, and will act as the counter. It is created the first time the loop is run.  
- The next statement **sets the condition** that tells the loop when to stop running: `i < 10;`. In this case, the condition indicates that the loop will stop when `i` equals 10. The condition may use a variable that is assigned a value.
- Finally, with the statement `i++` we **update the value** of our counter `i`. This adds 1 to the value of `i`. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.

The statement within the curly braces executes each time the loop runs. In this case, we can see we are logging the value of `i` to the console.

### Looping Over Arrays
`for` loops are commonly used to iterate over the items in a array. To do this, we use the property `length` and call it on the variable associated with the array we want to iterate over. This property returns the length of, or number of elements in, an array. Let's see what that looks like in practice:

```js
var fruitList = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruitList.length; i++) {
  console.log("I have some " + fruitList[i]);
}
```

You can see that instead of using a hardcoded number, we are using `fruitList.length` in our condition. This means we will continue to loop over the array as long as the counter is less than the total number of elements in the array. That's pretty handy!