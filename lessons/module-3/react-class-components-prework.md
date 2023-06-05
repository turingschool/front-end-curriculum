---
title: Class Component Prework - Classes in JavaScript
module: 3
---

## Learning Goals

By the end of this lesson, you will be able to:

* explain what a class is
* define classes using the `class` keyword
* create object instances
* call methods on object instances

## Vocabulary
- `this` - a keyword with a value that changes depending on the context in which it's used
- `class` - a special function which functionas as a template for creating objects
- `object instance` - objects that were created from a class and contain the data and functionality defined in that class
- `inheritance` - a mechanism which derives a class from another class; one class can inherit properties and functionality from a parent class

## Warm Up

Answer the following questions. Look at the answers below only after answering on your own: 
- What do you know about methods on objects? 
- What do you know about the `this` keyword? 

Then, complete [this replit](https://replit.com/@frontend-instructors/Class-Component-Prework-M3#index.js) to review key concepts about object methods and `this`.

<section class="answer">

### Here's how your answers might look. Don't look until you're done!
- What do you know about methods on objects? 

  - Objects can have all kinds of properties, such as a function. This function would be called a method. 
  - You can call functions on objects using dot notation. This is known as calling a method. 
  - You can create them in several ways, such as: 
    ```js
    const obj = {
      methodName: function() {
        // Method implementation
      }
    };
    
    // OR

    const obj = {
      methodName() {
        // Method implementation
      }
    };

    // OR

    const obj = {
      methodName: () => {
        // Method implementation
      }
    };    

    // ETC
    ```
- What do you know about the `this` keyword? 
  - By default, this refers to the global object (or in the browser, the window).
  - this within function code invoked using the new operator refers to the new instance of that object.
  - When executing a function as a method on an object, this refers to that object.

  Replit answers: 

  ```js
  // 1.
  animal.makeSound('Bark!');

  // 2. 
  // no answer since this is open ended.

  // 3. 
  // It should return 5, since 20-15 is 5. 
  // this.capacity is 20
  // this.attendeeCount is 15
  // this refers the object 'networkingEvent'
  ```
</section>


## Classes

Classes serve as object factories that allow us to create multiple objects of the same type, which are commonly referred to as object instances. In other words, a class is a an object template. 

The syntax for defining a class is as follows: 

```js
class NameOfClass {
  constructor() {
    // define properties here
  }
  // define methods here
}
```

```js
class User {
  constructor() {
    name = 'Bill',
    age = 32,
    email = 'bill@gmail.com',
  }

  updateAge() {
    this.age = this.age++;
  }
}
```

Please note the use of the `class` keyword and the function `constructor`. The `constructor` function is a special function that gets called when an object instance is created. Its job is to create the same properties on the new object instances we create with our class.

Next, let's take a look at how to create an object using a class - or 'create an instance' of a class. 

```js
const newObjectInstance = new NameOfClass();

const bill = new User();
```

## Making objects dynamic
The constructor function can accept arguments, which allows the class to have dynamic properties. For example: 

```js
class User {
  constructor(name, age, email) {
    name = name,
    age = age,
    email = email
  }
}
```

Now, we can make multiple users and give them all their own names, ages, and emails.

```js
const jenny = new User('Jenny', 24, 'frogperson@aol.com');
const bill = new User('Bill', 33, 'bill@gmail.com');
const alfred = new User('Alfred', 56, 'al888@hotmail.com');
```

## Practice

```js
class User {
  constructor(name, age, email) {
    name = name,
    age = age,
    email = email
  }

  updateAge() {
    this.age = this.age++;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}
```

Before writing any code, answer the following question.
- Why do we use the `this` keyword in the methods `updateAge` and `updateEmail`? (Feel free to do some research to help you answer this question.)

Write the following code in a replit, the devtools console, or somewhere else comfortable. Once you're done, feel free to reference the answers below. 

- Based on the class definition above, create a new instance of a user. 
- Using what you already know about objects and methods, utilize the object instance you just created and update the user's age.
- Using what you already know about objects and methods, utilize the object instance you just created and update the user's email address. 

Tip: use console logs to check that everything is working as you expect. 

<section class="answer">

### A solution _might_ look something like: 

```js
const henrietta = new User('Henrietta', 40, 'h@gmail.com');

henrietta.updateAge();
henrietta.updateEmail('newemail@gmail.com');
```
</section>

## More Practice

Define a class of your own choice. Make sure it has some properties and at least one method. 

To test it out, instantiate the class (make an object instance). 

## Inheritance

Sometimes, you'll have several classes that are very similar. They may have the same properties or the same functionality. We should work to DRY up our classes, just like we do with any other code. Consider the following class definitions: 

```js
class Animal {
  constructor(type, species, weight) {
    type = type,
    species = species,
    weight = weight,
  }

  makeSound(sound) {
    console.log(sound);
  }
}
```

```js
class Dog {
  constructor(weight, breed) {
    type = 'Mammal',
    species = 'Canine',
    weight = weight,
    breed = breed,
  }

  bark() {
    console.log('woof!');
  }
}
```

- What are all the similarities you see between these two classes? 
- How does a 'dog' relate to the category of 'animal' in real life? 

<section class="answer">

### Possible answers to the above questions: 

Some similarities between the two classes are: 

- similar properties: type, species, weight
- similar method: both the method makeSound and bark are doing the same thing.

A dog is a type of animal in real life. A dog could be considered a subcategory of the animal category.
</section>

This is a perfect time to implement inheritance. Instead of repeating ourselves so much, we can make the Dog class _inherit_ the properties it needs from the Animal class. Then, we could even make more classes that inherit from Animal, such as Cat or Llama. 

We can make a class inherit from a parent class by using the `extends` keyword. We can then call the constructor of the parent class, which will give the Dog class access to the Animal's properties and methods by calling the `super` function. 

```js
class Animal {
  constructor(type, species, weight) {
    this.type = type;
    this.species = species;
    this.weight = weight;
  }

  makeSound(sound) {
    console.log(sound);
  }
}

class Dog extends Animal {
  constructor(type, species, weight, breed) {
    super(type, species, weight);
    this.breed = breed;
  }
}

const fido = new Dog('Mammal', 'Canine', 10, 'Yorkshire Terrier');
fido.makeSound('Woof!');

```

<section class="note">
### Fun Fact

OOP, or Object Oriented Programming, is a programming paradigm based on classes and objects. In JS, you would utilize classes if you wrote your code in an OOP style. 

We've been primarily working in a more functional programming paradigm throughout this program. 

If you're interested in learning more, please research the differences between functional and object oriented programming. 
</section>

<section class="checks-for-understanding">

### Checks for Understanding 

* What is a class?
* How do you define a class in code?
* How do you create an object instance using a class?
* How do you call a method on an object instance?
</section>

### Resources: 
  - [Classes: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - [Class Practice](https://github.com/turingschool/dogs-and-dog-parks)
  - [More Class Practice](https://github.com/turingschool/wills-lunchbox)
  - [OOP vs Functional](https://careerfoundry.com/en/blog/web-development/functional-programming-vs-oop/)