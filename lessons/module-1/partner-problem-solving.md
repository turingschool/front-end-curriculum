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
- Independently reflect - each partner takes a few minutes to jot down the process, what steps were helpful, what you learned
- Come together and decide on how you can write one short blog post that shares your process, what was helpful/what caused roadblocks, and any advice you'd give someone as they approach problems

## Deliverables

Share the link to your blog post (details about where in your cohort channel). Your blog post should include the code snippet(s) for your solution(s)!

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

Ex:
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
