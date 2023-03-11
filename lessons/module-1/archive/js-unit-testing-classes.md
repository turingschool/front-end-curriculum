---
title: "JS: Unit Testing Classes"
tags: javascript, testing, tdd, mocha, chai
---

## Learning Goals

* Review structure of a test and importing/exporting files specifically for testing
* Ability to read tests w/ Classes and pass them
* Review some solid habits to build while practicing

<section class="call-to-action">
### Warm Up

In your journal or notebook, reflect on the following:

* What is TDD? What are the benefits of TDD?  
* What is unit testing?  
* What did you learn about testing in general from your JS Fun In The Library solo project?  Best practices? Tips/tricks?
</section>

Let's say we were writing a class, Tweet, that represents the content a user see when they read a tweet. We want to make sure each tweet is labeled with its sender. Here's how that test would look:

```javascript
class Tweet {
// In the spirit of TDD, we haven't yet written the implementation code
}

describe('Tweet', function() {
  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });
});
```

Let's talk a little bit about what's going on here:

* We have a `describe()` block which denotes that we're going to start writing a number of tests about the same function.

```js
describe('Tweet', function() {
  // it('has a sender', function() {
  //   var tweet = new Tweet('@LetaCodes', 'something brilliant');
  //
  //   assert.equal(tweet.sender, '@LetaCodes');
  // });
});
```

* We make a human-readable statement about what we want to test with the `it()` block.

```js
// describe('Tweet', function() {
  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });
// });

```

* We write an _assertion_ about our code. Here, we're asserting that when we pass the string `@LetaCodes` into `Tweet` that the tweet object will have a `sender` property with that value.

```js
// describe('Tweet', function() {
  // it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  // });
// });
```

<section class="note">
Below is the general syntax for assertions for most of the methods available:

```js
  assert.method(actual, expected)
```

You'll notice that our method takes two arguments:

- `actual`: The actual JS code that you want to run from the codebase
- `expected`: The expected output that should be _returned_ based on test requirements

You can learn more about the various methods available on the `assert` object
[here](https://www.chaijs.com/guide/styles/#assert){:target="_blank"}
</section>

## Importing/Exporting Files

As mentioned earlier, tests are typically separate from its implementation code.  In order for this to work properly, we need to be able to export the functionality from one file and import it into the test file.  Let's take a look at an example:

*tweet.js*

```js
class Tweet {

}

module.exports = Tweet;
```

The `module.exports` allows us to export a piece of functionality.  In this instance, we want to export our function (specifically, our class) Tweet, so that is what we assign it.    

*tweet-test.js*

```js
var Tweet = require('./tweet.js'); //  './tweet.js' is the file path to the file we want to import from.

describe('Tweet', function() {
  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });
});
```

By adding `require('./tweet')` to our test file, we are importing that function and assigning it to a variable.  Then we can test it by asserting what value is returned after invoking our imported function!

<section class="call-to-action">
## Let's practice

Enough talk about testing. Let's actually pass some tests to see this in action! We'll do some together and then you'll do some on your own.

Check out [this repository](https://github.com/turingschool-examples/intro-js-testing) to get your hands dirty.
</section>

## The Testing Process

It takes some time to build out solid habits when testing.  Often we'll see some developers run the test without even looking at the test first, or start writing the implementation code before they have even run the test.  Develop these good habits early so you really know what you are testing for and can speak to the process.

1. **Read the test**.  This includes the description, paying attention to what it is asking for, and then what the assertions are.
2. **Run the test**.  It should fail.  Take a look at the error and what it is saying.  Pay attention also to what line the test fails on.
3. Then begin to **write implementation code**.  Going off of what the error says, write the _minimum_ amount of code it is asking for.
4. **Run the test** again.  If it still fails, see if the error has changed.  Is a different line of code failing?  Rinse and repeat until it passes.
5. Then make sure that all of the **previous tests are passing**.  If not, go back and follow steps 1-4.  Otherwise, continue on to the next one.

<section class="checks-for-understanding">
### Wrap Up

In your journal or notebook, reflect on the following:

* What are the benefits to testing your code?
* What is the Red/Green testing workflow? Why do we use this process?
* What is Mocha? What is Chai? Write an example of the code that comes from Chai.
</section>

## Extra Stuff
If your curiosity is piqued - read [this article](https://techcrunch.com/2020/02/04/iowa-caucus-app-disaster/).

- What were the consequences of this app not working as expected?
- What kind of pressure can you imagine the engineering team who built this were under, while developing the app?
- What lessons do you think the company and engineering team learned from this?
