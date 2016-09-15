---
title: Foundations JS - III
tags: js, introduction, foundation, variables
---
### Goals

By the end of this lesson, you will know/be able to:

* 

# Objects
Objects are a collection of key-value pairs. A _key_ is just a _name_ that holds a value. So basically, you know this already. A key-value pair in an object is essentially a variable. That variable is called a _property_ of the object. When we assign a function as the value to one of our keys, we call that function a _method_. Let's look at this:

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

- ```checkOpenspots: function(){ return this.capacity - this.currentStudents; }```

There are several ways to create an object, and the easiset and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var myDumbObjectIsEmpty = {}```

There are two ways to access the properties or methods of an object: 

- _Dot Notation_:
```javascript
 var schoolName = school.name
 var schoolCapacity = school.capacity
```
- _Brackets_: 
```javascript
var schoolName = school['name']
var schoolCapacity = school['capacity']
``` 

Let's goof off in the console a bit:

```javascript
// Create an object in honor of @jhunbug
var myLitObject = {
  coolFactor: "bananas"
}

// 1. Get the value of myLitObject
// 2. Get the value of coolFactor
// 3. Add a new property
// 4. Get the value of that new property, but utilize a different notation from step #2
// 5. Change the value of coolFactor
// 6. Get the value of myLitObject
// 7. Create a method on myLitOjbect that logs "Skateboarding is fun" to the console
// 8. Get the value of myLitObject, confirm that your method is there
```
Great, we feel pretty good about literal notation to create an object. Let's talk about _constructor notation_ to create an object. It's not too hard. Out of the box, javascript gives a function for making blank objects. Javascript also gives us a handy keyword called ```new```. When you put the two together, you can generate blank objects all day!

```javascript
var myLitObject = new Object()
myLitObject
```
And just like before, you can add/change properties and methods on this object, using dot and/or bracket notation just like you did before.

Sometimes, you want to create a bunch of objects that are similar. Object constructors can use a function as a _template_ to spit out little objects that you define. Everytime you call ```new``` on this constructor you get an instance of the object. Let's look at this:

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

What is happening up ^^ there? 
- A function called Restaurant is a template for creating new objects that represent restaurants
- The function has three parameters
- Each parameter sets the _value_ of a _property_ in the object
- Each object created will utilize the same method for checking availability
- The ```this``` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function creates
- Different from an object literal, each statement in a constructor object ends in a semicolon instead of a comma
- Constructor functions begin w/ capital letters, unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. It's a constructor function, and you need the ```new``` keyword to create your various instances of the object. 


### Your Turn (in the console)


