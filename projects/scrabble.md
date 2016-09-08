---
title: Scrabble
type: assessment
---

## Introduction

In this assessment, you'll be building a Scrabble scorer. You'll do part of the project in preparation and then a second part pairing with an instructor.

## Preparation

### Pre-baked Functionality

In order to have a decent scrabble score tracker, we're going to need score some words. In an effort to save you time, here is a simple JavaScript object that stores the values for each letter.

```js
const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
}
```

In preparation, write the functions below. They should be covered by unit tests.

- `scoreWord()` takes a word and returns the total score of the word.
- `scoreWord('hello')` should return `8`.
- An empty string or any non-string (e.g. `scoreWord('')` or `scoreWord(null)`) should return `0`.
- The function should strip any whitespace before or after the word. `scoreWorld('  hello ')` should be the same as `scoreWord('hello')`.
- Score word should take an optional second argument for the word multiplier. `scoreWord('hello', 2)` should return 16.

## Setup

You should come to the assessment with your project set up with webpack and configured for React and your `scoreWord()` function installed with a passing test suite.

During the assessment, you'll build a UI for the Scrabble scorer based on instructions from an instructor.
