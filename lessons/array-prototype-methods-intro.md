---
title: Array Prototype Methods Introduction
length: 120
tags: JavaScript, array, prototype
---

### Learning Goals

In this segment, you'll learn the following:

* How to use the `Array.prototype` `forEach()`, `map()`, `filter()`, `reduce()`, and `sort()` methods.
* How to create DOM nodes using array prototypes.

### Context



### For Loops...

Let's talk about how traditional ``for`` loops work and why they can be dangerous. If we look at the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) documentation, we can see the syntax of a ``for`` loop:

```js
for ([initialization]; [condition]; [final-expression]) {
  statement
}
```

The initialization starts with a counter variable. Typically, this counter starts at zero, but you can specify any number. The condition is an expression evaluated each time the loop finishes executing an iteration. If the condition is true, the loop continues iterating. The final-expression statement is executed at the end of each loop iteration, which is usually used to increment the initialization counter. Usually the increment is by one, or ``i++`` for shorthand.

For example, we can log the counter variable to the console for each iteration, which is the first example on the MDN docs.

```js
for (var i = 0; i < 9; i++) {
   console.log(i);
}
```

The output to the console will look something like:

```
0
1
2
3
4
5
6
7
8
```

Let's follow what happens to ``i`` for each iteration of the ``for`` loop.

| i        | Condition     | What happens for this iteration?             |
| :------: |:-------------:| :-------------------------------------------:|
| 0        | true          | 0 is logged to the console; i increases by 1 |
| 1        | true          | 1 is logged to the console; i increases by 1 |
| 2        | true          | 2 is logged to the console; i increases by 1 |
| 3        | true          | 3 is logged to the console; i increases by 1 |
| 4        | true          | 4 is logged to the console; i increases by 1 |
| 5        | true          | 5 is logged to the console; i increases by 1 |
| 6        | true          | 6 is logged to the console; i increases by 1 |
| 7        | true          | 7 is logged to the console; i increases by 1 |
| 8        | true          | 8 is logged to the console; i increases by 1 |
| 9        | false         | statements in the loop are not executed      |

We can use ``for`` loops to iterate through an array.

```js
var letters = ['a', 'b', 'c'];

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
```

In the example above, we set up an iterator, `i`. As long as `i` is less than the length of the array of letters, we'll keep calling the body of the loop. After we call the body of the loop, we'll increment `i`, which will eventually become greater than the length of the array and the loop will exit.

If we put the above example in our console, then we should see this output:

```
a
b
c
```

### Array.prototype.forEach

One of the first methods we'll explore together is [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FforEach), which iterates over the array and passes each element into a callback function that you provide.

```js
const letters = ['a', 'b', 'c'];

letters.forEach(function (letter) {
  console.log(letter);
});
```

This will log the following output to the console, just like our ``for`` loop example above:

```
a
b
c
```

In the example above, we work through each letter one by one and pass it into an anonymous function that logs each letter to the console. `forEach()` passes three arguments to the callback function: the current element for this iteration, the index of that element, and a full copy of the array that we're iterating through.

```js
const letters = ['a', 'b', 'c'];

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

`forEach()` has a few advantages over using a `for` loop. First, it's quicker to write and easier to read. Secondly, JavaScript has function scope, but not block scope. This means that `number` in our first example is scoped only to our callback function, whereas `i` is accessible outside of the loop body, which is the global scope in this case. The latter could have some unintended consequences.

`forEach()` is the foundation for many of the other methods we'll explore today and you can accomplish much of the same functionality with `forEach()` that other methods specialize in. That said, just because you _can_ use it, it doesn't mean it's the best choice and that you _should_ use it. More on this later.

#### Your turn

Do the things...

### Array.prototype.map

`forEach()` will iterate through each element in an array and pass that element to an anonymous function. It's not uncommon that we find ourselves in a position where we need to transform the contents of an array.

In theory, we could use `forEach()` like this:

```js
const letters = ['a', 'b', 'c'];
const uppercaseLetters = [];

letters.forEach(function (letter) {
  const uppercaseLetter = letter.toUpperCase();
  uppercaseLetters.push(uppercaseLetter);
});

console.log(uppercaseLetters);
```

This will work. The `console.log` statement will log `['A', 'B', 'C']` — we've mapped each element in the array to its uppercase equivalent. However, JavaScript's `Array` provides us with a better way to do this — [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fmap):

```js
const letters = ['a', 'b', 'c'];

const uppercaseLetters = letters.map(function (letter) {
  return letter.toUpperCase();
});

console.log(uppercaseLetters);
```

The example above will give us the same result as the one before it: `['A', 'B', 'C']`. That said, it's about half the length and doesn't involve mutating an existing array.

Like `forEach()`, `map()` accepts an anonymous function that it calls on each element of the array it's called on. `forEach()` returns `undefined` when its finished. `map()`, on the other hand, returns a new array made up of the values returned by the callback function on each iteration.

#### Your turn

Do the things...

### Array.prototype.filter

[`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), like `map()`, returns a new array based on the return value of the callback function you pass it. The mechanics, however, differ slightly.

`filter()` will include an element in the new array if return value is truthy and omit it if the return value is falsy.

What makes a value truthy or falsy? Let's start with the easy ones: `true` is truthy and `false` is falsy. `0`, `null`, `undefined`, `NaN`, and an empty string are all falsy as well. Everything else is truthy.

Let's start with a simple example:

```js
const booleans = [true, true, false, true];

const truths = booleans.filter(function (value) {
  return value;
});

console.log(truths); // Logs [true, true, true]
```

As you can see in the example above, `false` is omitted from the resulting array. This works, but it's not very useful. Let's look at something slightly more interesting:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

const oddNumbers = numbers.filter(function (number) {
  return number % 2;
});

console.log(oddNumbers); // Logs [1, 3, 5, 7]
```

For all of the even numbers, `number % 2` returns `0`, which—as we saw earlier—is falsy. As a result, all of the even numbers are omitted from the new array. For all of the odd numbers, `number % 2` returns `1`, which is truthy. As a result, the odd numbers are placed in the new array and ultimately returned by the filter method.

We can also get a little bit more nuanced in how we filter elements in our array. Let's take a look at the following example:

```js
const beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

const livingBeatles = beatles.filter(function (beatle) {
  return beatle.living;
});

const guitarPlayingBeatles = beatles.filter(function (beatle) {
  return beatle.instruments.indexOf('guitar') !== -1;
});
```

#### Your turn

Do the things...

### Array.prototype.reduce

[`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FReduce) is a lot like `map()`, but with one important distinction: it returns one single value as opposed to an array of new values. Consider this example:

```js
const numbers = [1, 2, 3];

const sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log(sum); // Logs 6
```

You might notice that we have a second argument after our anonymous function. In the example above, we passed `0`. The second argument is the starting value of the accumulator (`total` in this case). It doesn't have to be a number. You could pass in an empty array or even an object that you want to work with.

If we wanted to—and we're not sure that we ever would—we could implement `map()` using `reduce()`:

```js
const letters = ['a', 'b', 'c'];

const capitalLetters = letters.reduce(function (newArray, letter) {
  newArray.push(letter.toUpperCase());
  return newArray;
}, []);

console.log(capitalLetter); // Logs ["A", "B", "C"]
```

The second argument that we pass to the `reduce()` method is an empty array, which is then set as the initial value for `newArray`. Next, we push in a capital version of the current letter. [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fpush) returns the current length of the array after the new element has been pushed in, so we have to explicitly return `newArray` to pass it along to the next iteration in our `reduce()`.

#### Your turn

Do the things...

### Array.prototype.sort

[`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) will sort all of the elements in the array. We can invoke it without a callback function.

```js
const numbers = [2, 1, 4, 3];
const letters = ['a', 'd', 'c', 'b'];

const sortedNumbers = numbers.sort();
const sortedLetters = letters.sort();

console.log(sortedNumbers); // Logs [1, 2, 3, 4]
console.log(sortedLetters); // Logs ['a', 'b', 'c', 'd']
```

Without a callback function, `sort()` uses a default sorting algorithm that simply sorts the array items in ascending order. In the examples above, everything works the way we would expect, but there are some surprising peculiarities of the default sorting algorithm. Consider the following example:

```js
const numbers = [1, 7, 3, 10];

const sortedNumbers = numbers.sort();

console.log(sortedNumbers); // Logs [1, 10, 3, 7]
```

Unless you've encountered a similar example in the past, `[1, 10, 3, 7]` is probably not what you were expecting the `sort()` method to return. By default, JavaScript uses lexicographical sorting. You can think of it as alphabetical sorting. 7 may come before 10 numerically, but 10 comes first lexicographically.

So, how do we sort numbers then? `Array.prototype.sort()` also accepts a callback function that it will use to evalute the order of the elements in the new array it returns.

The callback function compares two elements at a time and the `sort()` method rearranges the elements based on a value returned by the callback function.

* If the value returned is `0` then sort leaves both elements in the same place.
* If the value returned is negative, then the first element is placed before the second element.
* If the value returned is positive, then the second element is placed before the first element.

Armed with this new knowledge, let's see if we can sort an array of numbers — umm — numerically.

```js
const numbers = [1, 7, 3, 10];

const sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});

console.log(sortedNumbers); // Logs [1, 3, 7, 10]
```

`1 - 7` results in a negative number, `-6`. As a result the first element, `1` is placed before `7`. However, `7 - 3` is a positive number. So, the first element, `7` is placed _after_ `3`.

We can also use custom sorting functions for more complicated data structures. Let's say we wanted to sort the Beatles by the number of instruments played in descending order. As a bonus, we'll map the sorted array to just collect the names of each Beatle.

```js
const beatles = [
  { name: 'John', instruments: ['guitar', 'bass', 'piano' ] },
  { name: 'Paul', instruments: ['bass', 'guitar', 'piano', 'cowbell'] },
  { name: 'Ringo', instruments: ['drums'] },
  { name: 'George', instruments: ['guitar', 'sitar'] }
];

const sortedBeatles = beatles.sort(function (a, b) {
  return b.instruments.length - a.instruments.length;
}).map(function (beatle) {
  return beatle.name;
});

console.log(sortedBeatles); // Logs ['Paul', 'John', 'George', 'Ringo']
```

#### Your turn

Do the things...

### Additional Resources

[MDN Array Prototypes with AJAX](https://github.com/mdn/advanced-js-fundamentals-ck/tree/gh-pages/tutorials/01-array-prototype-methods) - similar to this lesson but with the addition of AJAX calls.
