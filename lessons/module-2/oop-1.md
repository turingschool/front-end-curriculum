---
title: Intro to Object Oriented Programming
length: 60
tags: javascript, objects, constructors, this, oop
module: 2
---

## Learning Goals

By the end of this lesson, you will be able to:

* Understand how classes are functioning under the hood 
* Understand how `this` operates when working with instances created via the `new` operator

## Vocab

- `Object` A data structure of key value pairs that groups related data and behavior
- `Constructor function` A special function used to define and initialize multiple objects
- `this` refers to the current *context* (or owner) of the code being executed

---

<!-- 
### Journal Warm Up

* Describe all of the things that you know about objects at this point
* Create an object based on this sentence: This school is a non-profit, in a basement, that opens at 9 and closes at 5.
``` -->

## Objects

Since Object-oriented programming structures your code around objects, we are going to review what an object is in the context of OOP.

An **object** is a data structure that allows us to group related information and behaviors into key-value pairs. Let's take a look at the following example:

```js
let instructor = {
  name: 'Pam',
  module: 2,
  traits: ['funny', 'smart'],
  teachLesson: function(topic, duration) {
    let lessonDuration = duration;

    if (lessonDuration > 3) {
      return `This lesson is too long, I'm not teaching that.`;
    } else {
      return `Gunna teach you all real good about ${topic}`;
    }
  },
  gradeProject: function(student, project){
    `${student} got an A on ${project}!`;
  }
}
```

Based on this object, we can say: "Our instructor is funny and smart and can teach lessons and grade projects."   

 Let's think back to our primary education, and highlight the parts of speech in this sentence. 

 * **noun:** instructor 
* **adjectives:** funny, smart  
* **verbs:** teach, grade 

 If we map this back to JavaScript, we can assume:  

 * **noun:** the name of our object (or properties on our object that are not methods)  
* **adjectives:** the values of our properties (sometimes these will not actually be adjectives, but the idea here is that the values of our properties are descriptors for our object) 
* **verbs:** the methods on our object  

 #### Turn and Code 

 Remembering these vocabulary rules will help you with creating semantic naming conventions for your objects and their properties. This will also help you with structuring your programs around objects when we dive further into object-orienting programming

### Your Turn

Take the following sentence and create an object based off of it:  

`The chair has a padded cushion and four legs with wheels that allow it to move from room to room.`


# Constructor Notation

### Creating Many Objects

Let's go back to the instructor object we created earlier - say we're building an application for Turing that provides profiles for all the instructors on staff. We'd have to create about 20 different instructor objects that all have the same properties and methods, but whose values each vary. (e.g. each instructor has a different name). This could be really repetitive and exhausting to build out individually.

Object constructors can use a function as a _template_ create similar objects. Everytime you call ```new``` on this constructor you get an instance of that constructor. These are called `constructor functions`, and you can think of them like cookie cutters that produce the same shape of cookie every time you use them. Let's take a look:

```javascript
function Instructor(name, module, traits) {
  this.name = name;
  this.module = module;
  this.traits = traits;
}
```

Let's talk about what's going on here:

- A function called `Instructor` is a template for automatically creating new objects that represent individual "instances" of instructors  
- Therefore, every time the function is invoked, it creates a new instance (object of a certain type) of an `Instructor`
- The function has three parameters (`name`, `module`, `traits`)  
- Each parameter sets the _value_ of a _property_ in the object  
- The `this` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function automatically creates and returns to us
- Constructor functions begin w/ capital letters (PascalCase), unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. Will it still work if you don't use capitals? YES.  

### Your Turn

With a partner:

* Make a constructor function and use it to make two new objects.
* Come up with an analogy for constructor functions.

## Prototypes & Inheritance: A First Look

All JavaScript objects **inherit** the properties and methods from their `prototype`.  

In other words, each object has an internal link to another object named `prototype`. 

There is nothing special about a prototype object. There are no special-out-of-the-box methods or magic to a prototype. Let's look:

```javascript
// Let's make a constructor function
function Student() {}

// Let's ask Student for the value of it's prototype
Student.prototype;
```

Let's add some initial properties in our constructor function so every `Student` object has a name:

```javascript
function Student(name) {
  this.name = name;
}
```

Similarly, a `prototype` in javascript can be _any object_ and it is responsible for defining the **behavior** of instances. This behavior is defined by modifying the prototype directly, e.g. by adding methods to the prototype object. Creating prototype functions is essentially defining your objects' instance methods.  

Let's look at some code examples.  

```javascript
// Student constructor whose only job is to create instances of students. It has the parameters of name ad program to differentiate instances.

function Student(name, program) {
  this.name = name;
  this.program = program;
}

Student.prototype.study = function() {
  console.log(`Can\'t hang out today, gang - have to study hard for my ${this.program} assessment!`);
}

// Now we can create multiple instances of an Student and each one will have access to our `study` method

var student = new Student('Leta', 'FE')
student.bake();
var student2 = newStudent('Mike', 'BE');
student2.bake(); 
```

## Revisiting `this`
The keyword `this` is commonly used inside functions and objects. It always refers to one object, usually the object in which the function operates. In our Instructor constructor function, `this` refers to the instructor object that is being created for us automatically when the function runs. Let's look at this with an abbreviated version of our Instructor constructor:

### Rule 1 - _this_ in function code invoked using the new operator refers to the new instance of that object.

When we use the new keyword to call our function as a constructor, a few things happen behind the scenes:

1. `this` is set to a new empty object
2. The prototype property of the constructor function (Unicorn.prototype in the example below) is set as the prototype of the new object, which was set to `this` in the first step
3. The body of our function runs
4. Our new object, `this`, is returned from the constructor

```javascript
function Instructor(name, module, traits) {
  // new empty object will log
  console.log(this);

  this.name = name;
  this.module = module;
  this.traits = traits;

  //object with added properties will log
  console.log(this)
}
```

<!-- #### Closing

Using your journal, take a few minutes to answer the following:

- Why would you make use of a constructor function?
 -->