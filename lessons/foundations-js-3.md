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

- dot notation:
```javascript
 var schoolName = school.name
 var schoolCapacity = school.capacity
```
- brackets: 
```javascript
var schoolName = school['name']
var schoolCapacity = school['capacity']
```

Let's goof off in the console a bit.

