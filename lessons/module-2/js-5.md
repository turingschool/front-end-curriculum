# JS V

## Data Types Review

## Simple Data Types

### Bool
### Number
### String

## Complex Data Types / Objects

### Objects

#### Creating Objects
There are several ways to create objects. Most people prefer to use the object literal notation.

`{}`

This is a short and fast way to create a new object.

If we want to access our object later, we need to store it in a variable.

`var dog = {};`

#### Adding properties to an object
We can add properties when it is created or we can add properties after an object is created. We can only create a property on an object if we give it a value

##### Adding a property during creation

```js
var dog = {
  // property name  | property value
     scientificName: 'Canis lupus familiaris'  
};
```

##### Adding a property after creation

###### Dot notation
```
var dog = {};

dog.scientificName = 'Canis lupus familiaris';
```

Dot notation is great because the syntax is short and it is easy to read. It should be used whenever you know the exact name of the property you are accessing.

###### Bracket Notation 
```
var dog = {};

dog['scientificName'] = 'Canis lupus familiaris';
```



#### Accessing object properties
We can also use dot and bracket notation to access or use an objects properties

```
var dog = {
  scientificName: 'Canis lupus familiaris'  
};

console.log(dog.scientificName);    // Canis lupus familiaris
console.log(dog['scientificName']); // Canis lupus familiaris
```
#### Exercises
Create an object with the following keys:
book1, book2... ...book199, book200



### Arrays
### Functions

#### Function Scope

#### Returning something out of a function

## Variables

## JS Execution