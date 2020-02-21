---
title: Partner Problem Solving Challenge
length: 120
tags: process, problem solving, algorithms, blog, self-guided
---

## Learning Goals

- Refine your process for solving problems you've never seen before
- Communicate the steps you take to solve a problem

## The Challenge

By the end of this session, you will solve a problem you've never solved before, then write a brief blog post on your experience and learnings.

We recommend you take these steps:
- Select **one** of the challenges listed below
- Pseudo-code and make a plan for how to solve it
- Do any research on the JavaScript tools you'll need to solve it
- Implement the solution in JavaScript
- Finish early? Find *another* way to solve this problem. Discuss the tradeoffs for your various solutions.

Preparing to write your blog post:
- Reflect on the following:
  - What was this experience? How much time did you have? What problem did you tackle? How did you pair with your teammate?
  - What was your process in solving (or not quite yet solving) this problem?
  - What pieces of your process felt helpful? What pieces maybe led you down the wrong path? For anything that led you down a wrong path, did you learn from that?
  - Was there a time you "thought you had it", but realized you didn't? What did you learn from that?
  - What advice do you have for someone (including your future self) when approaching a problem like this?
- Decide where you will post it dev.to, medium, any other platform of your choosing! If you don't want to bother with creating an account somewhere right now, you can write it in markdown in a GitHub gist!
- Use your reflection answers from above to write up a post. It's highly recommended to include your code snippets - from the challenge, to your solution, and potentially some code in between! It could also be great to link the resources or documentation you used along the way.

## Deliverables

Share the link to your blog post (details about where in your cohort channel). 

## Code Challenges to choose from

### Counting Sheep

Write a function that takes an array of Booleans. This function should return a Number that represents the number of times that `true` was present in the array.

Example:
```js
var sheep = [
  true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
];
countSheep(sheep);
// => 17
```

### First String Appearance

Write a function that takes an Array of Booleans and Strings. This function should return a String - the first string that appears in the array that was passed in.

Example:
```js
var variousThings = [
  true, true, true, false,
  true, true, 1, true,
  true, false, true, false,
  true, 'hello', false, true,
  true, true, true, true,
  false, false, 'world', true
];
findFirstString(variousThings);
// => 'hello'
```

If no Strings exist in the array, return the Boolean `false`.

### Lowercase Words

Write a function that takes an Array of Strings, but potentially other data types. This function should return an Array of the same length and they should remain in order. Any strings in the returned array should be all lowercase.

Example:
```js
var colors = ['Red', 'Green'];
lowerCaseStrings(colors);
// => ['red', 'green']
```

Example:
```js
var randomItems = [1, 'Green', 'pink', true];
lowerCaseStrings(randomItems);
// => [1, 'green', 'pink', true]
```

### Reverse Alphabetical Order

Write a function that takes an Array of Strings. This function should return an array of the same strings that were in the original array. However, the returned array should hold the strings in _reverse alphabetical order_.

Example:
```js
var words = ['hi',  'hello', 'carrot', 'world'];
reverseAlphaWords(words);
// => ['world', 'hi', 'hello', 'carrot']
```

### Merging Arrays

Write a function that takes in two Arrays of Numbers. This function should merge the two arrays and return a single array of numbers. The returned array should be sorted from least to greatest.

It's ok to assume that only arrays with at least one number will be passed in.

Example:
```js
nums1 = [1, 2, 3, 4, 5];
nums2 = [6, 7, 8, 9, 10];
mergeArrays(nums1, nums2);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```js
nums3 = [1, 3, 5, 7, 9];
nums4 = [10, 8, 6, 4, 2];
mergeArrays(nums3, nums4);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

The arrays passed in may be sorted in different orders. They may also both store a specific number. Remove duplicated in the returned result.

Example:
```js
nums5 = [1, 3, 5, 7, 9, 11, 12];
nums6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(nums5, nums6);
// => [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
```
