---
title: "Array Prototype Methods: Mutator & Accessor"
length: 180
tags: prototype methods
---

## Learning Goals

* Gain familiarity with other prototype methods (not necessarily JUST array prototypes, some string methods too!)
* Understand the difference between accessor and mutator methods

## Vocab
- `accessor methods` Returns a new value or representation
- `mutator methods` Modifies the original array.

## The Difference between Accessor vs Mutator Prototype Methods
Last week, we spent a good amount of time focusing on "iterator" protoype methods.  Today we'll spend a bit of time gaining familiarity with a few other prototype methods you will commonly use.

**Accessor methods** on arrays are used to retrieve information from the array without modifying its content.  They typically will return a new value or respresentation of the array without modifying the original one.

On the other hand, **mutator methods** are used to alter the content of the array. They change the internal elements or perform some action that alters the array's data.

<section class="note">
### Fun Fact!

You've already been using some accessor and mutator methods since M1!  **Accessor** examples you might have used include `includes`, `slice`, and `join`.  **Mutator** examples would include `pop`, `shift`, `unshift`, `splice`, 
</section>

## New Accessor Methods
* **indexOf()** - It returns the index of the first occurrence of a specified element in the array.
* **join()** - It joins all elements of an array into a single string.
* **every()** - It tests whether all elements in the array pass the provided function.
* **some()** - It tests whether at least one element in the array passes the provided function.

<section class="call-to-action">
### Accessor Method Exercises

#### Dataset:
```js
const students = [
  { id: 1, name: 'Alice', age: 22, grade: 'A' },
  { id: 2, name: 'Bob', age: 20, grade: 'B' },
  { id: 3, name: 'Charlie', age: 21, grade: 'C' },
  { id: 4, name: 'David', age: 23, grade: 'A' }
];

const products = [
  { id: 101, name: 'Laptop', price: 1200 },
  { id: 102, name: 'Smartphone', price: 800 },
  { id: 103, name: 'Headphones', price: 100 },
  { id: 104, name: 'Tablet', price: 300 }
];

const books = [
  { isbn: '978-0-7475-5819-1', title: 'Harry Potter', author: 'J.K. Rowling' },
  { isbn: '978-1-84668-129-0', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { isbn: '978-0-06-112008-4', title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

```

#### Exercises:
* **`indexOf`: Find Student by ID**

Write a function `findStudentById(students, studentId)` that takes an array of `students` and a `studentId` as arguments. The function should use the `indexOf` method to find and return the index of the student with the specified ID. If not found, return -1.

```js
console.log(findStudentById(students, 2)); // Output: 1
console.log(findStudentById(students, 5)); // Output: -1
```

* **`join`: Concatenate Product Names**

Write a function `concatenateProductNames(products)` that takes an array of `products` and uses the `join` method to concatenate the names of all products into a single string. The names should be separated by a comma and space. Return the resulting string.

```js
console.log(concatenateProductNames(products));
// Output: "Laptop, Smartphone, Headphones, Tablet"
```

* **`every`: Check All Books by Harper Lee**

Write a function areAllBooksByHarperLee(booksArray) that takes an array of `books` and uses the `every` method to check if all books in the array are written by Harper Lee. Return `true` if all books are by Harper Lee, otherwise `false`.

```js
console.log(areAllBooksByHarperLee(books)); // Output: false
```

* **`some`: Check for Expensive Products**

Write a function `hasExpensiveProduct(products)` that takes an array of products `products` and uses the `some` method to check if at least one product in the array has a price higher than $1000. Return `true` if there is at least one expensive product, otherwise `false`.


```js
console.log(hasExpensiveProduct(products)); // Output: true
console.log(hasExpensiveProduct(products.slice(0, 2))); // Output: false
```
</section>


## New Mutator Methods
* **split()** - It splits a string into an array of substrings.
* **reverse()** - It reverses an array in place and returns the reference to the same array.
* **sort()** - It sorts the elements of an array in place and returns the reference to the same array, now sorted.

<section class="call-to-action">
### Mutator Method Exercises

#### Dataset:
```js
const sentences = [
  'This is the first sentence.',
  'The second sentence is here.',
  'And here is the third one.'
];

const movies = [
  { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
  { title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 },
  { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
  { title: 'Inception', director: 'Christopher Nolan', year: 2010 }
];

const cities = [
  { name: 'New York', population: 8398748, country: 'United States' },
  { name: 'Tokyo', population: 37393000, country: 'Japan' },
  { name: 'London', population: 8908081, country: 'United Kingdom' },
  { name: 'Mumbai', population: 12478447, country: 'India' }
];
```

* **`split`: Split Sentences into Words**

Write a function `splitSentencesIntoWords(sentences)` that takes an array of `sentences` and uses the `split` method to split each sentence into an array of words. Return an array of arrays, where each inner array contains the words of a sentence.

```js
console.log(splitSentencesIntoWords(sentences));
// Output: [['This', 'is', 'the', 'first', 'sentence.'], ['The', 'second', 'sentence', 'is', 'here.'], ['And', 'here', 'is', 'the', 'third', 'one.']]
```

* **`reverse`: Reverse Movies**

Write a function `reverseMovies(movies)` that takes an array of sorted `movies` by their year and uses the `reverse` method to reverse the order of movies. Return a new array of movies where they are listed from newest to oldest.

```js
console.log(reverseStudents(students));
// Output: [
//   { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
//   { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
//   { title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 },
//   { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }
// ];
```

* **`sort`: Sort Cities by Population**

Write a function `sortCitiesByPopulation(cities)` that takes an array of `cities` and uses the `sort` method to sort the cities based on their population in descending order. Return a new array of sorted cities.

```js
console.log(sortCitiesByPopulation(cities));
// Output: [
//   { name: 'Tokyo', population: 37393000, country: 'Japan' },
//   { name: 'Mumbai', population: 12478447, country: 'India' },
//   { name: 'New York', population: 8398748, country: 'United States' },
//   { name: 'London', population: 8908081, country: 'United Kingdom' }
// ]
```
</section>

<section class="answer">
### A Note about `sort()`

Without a callback function, `sort()` uses a default sorting algorithm that simply sorts the array items in ascending order. However, there are some surprising peculiarities of the default sorting algorithm.

**In the examples below, `sort()` works as expected:**

```js
var numbers = [2, 1, 4, 3];
var letters = ['a', 'd', 'c', 'b'];

var sortedNumbers = numbers.sort();
var sortedLetters = letters.sort();

console.log(sortedNumbers); // Logs [1, 2, 3, 4]
console.log(sortedLetters); // Logs ['a', 'b', 'c', 'd']
```

**However in this example, something different happens!**

```js
var numbers = [1, 7, 3, 10];

var sortedNumbers = numbers.sort();

console.log(sortedNumbers); // Logs [1, 10, 3, 7]
```

This might seem strange at first, but by default, JavaScript uses `lexicographical sorting`. You can think of it as alphabetical sorting. 7 may come before 10 numerically, but 10 comes first lexicographically.

So, how do we sort numbers then? `Array.prototype.sort()` also accepts a callback function that it will use to evaluate the order of the elements in the new array it returns.

The callback function compares two elements at a time and the `sort()` method rearranges the elements based on a value returned by the callback function.

* If the value returned is `0` then sort leaves both elements in the same place.
* If the value returned is negative, then the first element is placed before the second element.
* If the value returned is positive, then the second element is placed before the first element.

**Armed with this new knowledge, let's see if we can sort an array of numbers *numerically*.**

```js
var numbers = [1, 7, 3, 10];

var sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});

console.log(sortedNumbers); // Logs [1, 3, 7, 10]
```

***The main takeaway here*** is that by returning `a - b` in the callback of sort, the array will be sorted from least to greatest.  If you return `b - a`, the array will be sorted from greatest to least.
</section>


<section class="checks-for-understanding">
### Checks for Understanding

For each method answer the following:
* Short sentence on what it does or why you would use it
* Does it mutate the original array? Yes or no
* What does it take in?
* What does it return?
</section>