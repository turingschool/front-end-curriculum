---
title: Array Prototype Methods Introduction
length: 180
tags: JavaScript, array, prototype
---

### Learning Goals

- Understand and know when to implement the following arrray prototype methods:

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `reduce()`
- `sort()`

## Vocabulary

- callback function
- element
- value
- index
- iteration
- truthy/falsy

### Context

Sometimes we have a collection of items that we want to use. When we talk about a collection, we usually mean a series of items stored in an array. We could want to change the items in the collection, sort them, add all of the values in the collection, retrieve some items in the collection based on some condition, or many other scenarios.

We could do these things by hand using a `for` loop, which we will introduce below, but we would have to implement our own logic to work with the array. Alternatively, we can use methods that the JavaScript language provides for us. These methods are in a group called array prototype methods. They are called this because Array is a JavaScript object, and there are methods that act on array objects. You'll see how these methods work in this lesson.

### For Loops...

Let's talk about how traditional `for` loops work and why they can be something to stay away from. If we look at the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) documentation, we can see the syntax of a `for` loop:

```js
for ([initialization]; [condition]; [final-expression]) {
  statement
}
```

The initialization starts with a counter variable. Typically, this counter starts at zero, but you can specify any number. The condition is an expression evaluated each time the loop finishes executing an iteration. If the condition is true, the loop continues iterating. The final-expression statement is executed at the end of each loop iteration, which is usually used to increment the initialization counter. Usually the increment is by one, or `i++` for shorthand.

For example, we can log the counter variable to the console for each iteration, which is the first example on the MDN docs.

```js
for (var i = 0; i < 4; i++) {
   console.log(i);
}
```

The output to the console will look something like:

```
0
1
2
3
```

Let's follow what happens to `i` in the `for` loop. Each of the rows in the table can be referred to as an **iteration**, a term we will hear a lot when dealing with arrays and loops.

| i    | Condition     | What happens for each iteration?             |
| :--: |:-------------:| :-------------------------------------------:|
| 0    | (0 < 4) true  | 0 is logged to the console; i increases by 1 |
| 1    | (1 < 4) true  | 1 is logged to the console; i increases by 1 |
| 2    | (2 < 4) true  | 2 is logged to the console; i increases by 1 |
| 3    | (3 < 4) true  | 3 is logged to the console; i increases by 1 |
| 4    | (4 < 4) false | statements in the loop are not executed      |

The previous example didn't deal with an array, so let's use an array with a `for` loop. We can use `for` loops to iterate through an array.

```js
var letters = ['a', 'b', 'c'];

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
```

In the example above, we set up an iterator, `i`. As long as `i` is less than the length of the array of letters, we'll keep calling the body of the loop. After we call the body of the loop, we'll increment `i`, which will eventually become greater than the length of the array and the loop will exit. The `letters.length` part of the loop condition gives us the ability to change the size of the letters array without having to change the condition.

If we put the above example in our console, then we should see this output:

```
a
b
c
```

Notice that the condition is crucial in controlling the flow of our loop. If the condition is never false, then the loop will become an infinite loop and never stop running until we stop it or our computer runs out of memory. This is one delicate part of `for` loops to watch out for.

#### Your Turn

* Using the array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, log only odd numbers to the console.

* Using the array `[{name: "Fido", numLegs: 4}, {name: "Greg", numLegs: 5} ]`, log the dog's name and how many legs it has.

### Array.prototype.forEach

Let's get into the array prototype methods. One of the first methods we'll explore together is [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FforEach), which iterates over the array and passes each element into a callback function that you provide.

```js
var letters = ['a', 'b', 'c'];

letters.forEach(function (letter) {
  console.log(letter);
});
```

This will log the following output to the console, just like our `for` loop example above:

```
a
b
c
```

In the example above, we work through each letter one by one and pass it into an anonymous function that logs each letter to the console. `forEach()` passes three arguments to the callback function: the current element for this iteration, the index of that element, and a full copy of the array that we're iterating through.

```js
var letters = ['a', 'b', 'c'];

letters.forEach(function (letter, index, array) {
  console.log({
    currentValue: letter,
    currentIndex: index,
    fullArray: array
  });
});
```

This will log the following output to the console:

```js
{currentValue: "a", currentIndex: 0, fullArray: ["a", "b", "c"]}
{currentValue: "b", currentIndex: 1, fullArray: ["a", "b", "c"]}
{currentValue: "c", currentIndex: 2, fullArray: ["a", "b", "c"]}
```

JavaScript allows you to omit arguments without raising an error. You can use this to your advantage by leaving out the index and the full array if you're not using them, which is common and what we did in the first example. However, if you do need either or both the index or the full array, you have access to them.

`forEach()` has a few advantages over using a `for` loop. First, it's quicker to write and easier to read. Secondly, JavaScript has function scope, but not block scope. This means that `letter` in our first example is scoped only to our callback function, whereas `i` is accessible outside of the loop body, which is the global scope in this case. The latter could have some unintended consequences.

`forEach()` is the foundation for many of the other methods we'll explore today and you can accomplish much of the same functionality with `forEach()` that other methods specialize in. That said, just because you _can_ use it, it doesn't mean it's the best choice and that you _should_ use it. More on this later.

One interesting thing to note is that `forEach()` does not return anything. If you have a return statement in your callback function it is likely not doing anything for you. This is different from map which we will look at next.

#### Your Turn

These look familiar...let's compare the structure to what we had before using the `for` loop now with `forEach`.

* Using the array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, log only odd numbers to the console.

* Using the array `[{name: "Fido", numLegs: 4}, {name: "Greg", numLegs: 5} ]`, log the dog's name and how many legs it has.

And one additional:

* If we have two arrays, add the pairwise items in those arrays and log them to the console; `array1 = [1, 2, 3]` and `array2 = [4, 5, 6]`. So we should end up with `5, 7, 9`.

#### Journal

Open your journal and answer the following questions:
- What are the most important/significant ideas or elements of the `forEach()` method?
- Why do stores like `forEach()`?

### Array.prototype.map

`forEach()` will iterate through each element in an array and pass that element to an anonymous function. It's not uncommon that we find ourselves in a position where we need to transform the contents of an array.

In theory, we could use `forEach()` like this:

```js
var letters = ['a', 'b', 'c'];
var uppercaseLetters = [];

letters.forEach(function (letter) {
  var uppercaseLetter = letter.toUpperCase();
  uppercaseLetters.push(uppercaseLetter);
});

console.log(uppercaseLetters);
```

This will work. The `console.log` statement will log `['A', 'B', 'C']` — we've mapped each element in the array to its uppercase equivalent. However, JavaScript's `Array` provides us with a better way to do this — [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fmap):

```js
var letters = ['a', 'b', 'c'];

var uppercaseLetters = letters.map(function (letter) {
  return letter.toUpperCase();
});

console.log(uppercaseLetters);
```

The example above will give us the same result as the one before it: `['A', 'B', 'C']`. That said, it's about half the length and doesn't involve mutating an existing array.

Like `forEach()`, `map()` accepts an anonymous function that it calls on each element of the array it's called on. `forEach()` returns `undefined` when its finished. `map()`, on the other hand, returns a new array made up of the values returned by the callback function on each iteration.

#### Your Turn

* From before, if we have two arrays, add the pairwise items in those arrays and log them to the console; `array1 = [1, 2, 3]` and `array2 = [4, 5, 6]`. This time we should end up with an array `[5, 7, 9]`.

* Using an array of temperature data in Fahrenheit, convert the date to degrees Celsius; `degreesF = [67, 32, 55, 102]`. It should roughly become `[19.44, 0, 12.77, 38.88]`. [Here is the formula](http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm) to convert from Fahrenheit to Celsius.

#### Journal

- What parts of `map()` are similar to `forEach()`? What parts are differents? 
- Why do geneticists use `map()`? 

### Array.prototype.filter

[`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), like `map()`, returns a new array based on the return value of the callback function you pass it. The mechanics, however, differ slightly.

`filter()` will only add an element to the new array if the callback function returns a truthy value. If the callback function returns a falsy value it will be omitted.

What makes a value truthy or falsy? Let's start with the easy ones: `true` is truthy and `false` is falsy. `0`, `null`, `undefined`, `NaN`, and an empty string are all falsy as well. Everything else is truthy.

Let's start with a simple example:

```js
var booleans = [true, true, false, true];

var truths = booleans.filter(function (value) {
  return value;
});

console.log(truths); // Logs [true, true, true]
```

As you can see in the example above, `false` is omitted from the resulting array. This works, but it's not very useful. Let's look at something slightly more interesting:

```js
var numbers = [1, 2, 3, 4, 5, 6, 7];

var oddNumbers = numbers.filter(function (number) {
  return number % 2;
});

console.log(oddNumbers); // Logs [1, 3, 5, 7]
```

For all of the even numbers, `number % 2` returns `0`, which—as we saw earlier—is falsy. As a result, all of the even numbers are omitted from the new array. For all of the odd numbers, `number % 2` returns `1`, which is truthy. As a result, the odd numbers are placed in the new array and ultimately returned by the filter method.

We can also get a little bit more nuanced in how we filter elements in our array. Let's take a look at the following example:

```js
var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

var livingBeatles = beatles.filter(function (beatle) {
  return beatle.living;
});

var guitarPlayingBeatles = beatles.filter(function (beatle) {
  return beatle.instruments.indexOf('guitar') !== -1;
});
```

#### Your Turn

* From the array `[34, 2, 55, 75, -1, 100]`, return an array with only numbers greater that 50.

* Filter on the array to return objects that are not thirsty: `[{name: "Martha", thirsty: true}, {name: "Pam", thirsty: false}, {name: "Roberta", thirsty: true}]`.

#### Journal

- How could you put `filter()` into practice on one of your current projects?
- Why does `filter()` make such a good private investigator? 

### Array.prototype.find

[`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), is very similar to filter.  It is different in that it returns the first element in the array that satisfies the testing function. In the event that you are testing truthy vs falsy values like the example below, `find()` will return `undefined` if there are no truthy values found.

```js
var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

var aLivingBeatle = beatles.find(function (beatle) {
  return beatle.living;
});
```

One key difference between `filter()` and `find()` is the fact that the `filter()` method will run through the end of the array wheras `find()` will stop once it comes across the first element that satisfies the testing function.

Another thing to note is that this method is not supported by any version of Internet Explorer. However, this method is supported by Edge.

#### Your Turn

```js
var dogs = [
  { name: 'Pandora', size: 'small', toys: ['ball', 'squeaky bone'] },
  { name: 'Antigone', size: 'medium', toys: ['ball', 'cowbell'] },
  { name: 'Elmer', toys: size: 'medium', ['frisbee', 'ball', 'cowbell' ] }
];
```

* Return the dog named Elmer. Store what is returned in the variable `DavidsDog`.
* Return the dog who is medium in size. Store what is returned in the variable `firstMediumDog`.

#### Journal

- Expain the difference between `filter` and `find` in your own words.

### Array.prototype.reduce

[`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FReduce) is a lot like `map()`, but with one important distinction: it returns one single value as opposed to an array of new values. Consider this example:

```js
var numbers = [1, 2, 3];

var sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log(sum); // Logs 6
```

You might notice that we have a second argument after our anonymous function. In the example above, we passed `0`. The second argument is the starting value of the accumulator (`total` in this case). It doesn't have to be a number. You could pass in an empty array or even an object that you want to work with.

If we wanted to — and we're not sure that we ever would — we could implement `map()` using `reduce()`:

```js
var letters = ['a', 'b', 'c'];

var capitalLetters = letters.reduce(function (newArray, letter) {
  newArray.push(letter.toUpperCase());
  return newArray;
}, []);

console.log(capitalLetters); // Logs ["A", "B", "C"]
```

The second argument that we pass to the `reduce()` method is an empty array, which is then set as the initial value for `newArray`. Next, we push in a capital version of the current letter. [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fpush) returns the current length of the array after the new element has been pushed in, so we have to explicitly return `newArray` to pass it along to the next iteration in our `reduce()`.

#### Your Turn

* For the shopping cart array `[{item: "shoes", price: 79.99}, {item: "gloves", price: 29.75}, {item: "pants", price: 39.99}]`, add the items to get the total cost of the shopping cart (should be equal to 149.73).

* Say we have created an array of arrays `[["gears", 20], ["diameter", 26], ["height", 19.5]]`. What we really want is a single object with these as key-value pairs: `{gears: 20, diameter: 26, height: 19.5}`.

### Journal

- When should you use reduce?
- Why wouldn’t `reduce()` talk to the junior dev?


### Array.prototype.sort

[`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) will sort all of the elements in the array. We can invoke it without a callback function.

```js
var numbers = [2, 1, 4, 3];
var letters = ['a', 'd', 'c', 'b'];

var sortedNumbers = numbers.sort();
var sortedLetters = letters.sort();

console.log(sortedNumbers); // Logs [1, 2, 3, 4]
console.log(sortedLetters); // Logs ['a', 'b', 'c', 'd']
```

Without a callback function, `sort()` uses a default sorting algorithm that simply sorts the array items in ascending order. In the examples above, everything works the way we would expect, but there are some surprising peculiarities of the default sorting algorithm. Consider the following example:

```js
var numbers = [1, 7, 3, 10];

var sortedNumbers = numbers.sort();

console.log(sortedNumbers); // Logs [1, 10, 3, 7]
```

Unless you've encountered a similar example in the past, `[1, 10, 3, 7]` is probably not what you were expecting the `sort()` method to return. By default, JavaScript uses lexicographical sorting. You can think of it as alphabetical sorting. 7 may come before 10 numerically, but 10 comes first lexicographically.

So, how do we sort numbers then? `Array.prototype.sort()` also accepts a callback function that it will use to evaluate the order of the elements in the new array it returns.

The callback function compares two elements at a time and the `sort()` method rearranges the elements based on a value returned by the callback function.

* If the value returned is `0` then sort leaves both elements in the same place.
* If the value returned is negative, then the first element is placed before the second element.
* If the value returned is positive, then the second element is placed before the first element.

Armed with this new knowledge, let's see if we can sort an array of numbers — umm — numerically.

```js
var numbers = [1, 7, 3, 10];

var sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});

console.log(sortedNumbers); // Logs [1, 3, 7, 10]
```

`1 - 7` results in a negative number, `-6`. As a result the first element, `1` is placed before `7`. However, `7 - 3` is a positive number. So, the first element, `7` is placed _after_ `3`.

We can also use custom sorting functions for more complicated data structures. Let's say we wanted to sort the Beatles by the number of instruments played in descending order. As a bonus, we'll map the sorted array to just collect the names of each Beatle.

```js
var beatles = [
  { name: 'John', instruments: ['guitar', 'bass', 'piano' ] },
  { name: 'Paul', instruments: ['bass', 'guitar', 'piano', 'cowbell'] },
  { name: 'Ringo', instruments: ['drums'] },
  { name: 'George', instruments: ['guitar', 'sitar'] }
];

var sortedBeatles = beatles.sort(function (a, b) {
  return b.instruments.length - a.instruments.length;
}).map(function (beatle) {
  return beatle.name;
});

console.log(sortedBeatles); // Logs ['Paul', 'John', 'George', 'Ringo']
```

#### Your Turn

* Sort the numbers in the array in descending order: `[2, 56, 5, 8, 1, 100]`.

* Sort the words in alphabetical order according to the second letter in the word: `["couch", "blender", "island", "cereal", "chair"]`.

### Journal

- What is unique about `sort()` when compared to the other methods we've discussed?
- Why is `sort()` so bad at math?

### Additional Resources

* All jokes courtesy of Patrick McLaughlin, FE-1711 @Patrick McLaughlin 
* [MDN Array Prototypes with AJAX](https://github.com/mdn/advanced-js-fundamentals-ck/tree/gh-pages/tutorials/01-array-prototype-methods) - similar to this lesson but with the addition of AJAX calls and DOM manipulation.
* [Array Prototype Methods documentation by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype) - for a full list of array methods given to you by default in JavaScript.
