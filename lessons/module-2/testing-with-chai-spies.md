---
title: Testing with Chai Spies
tags: TDD, unit testing, mocha, chai, webpack, spies
mod: 2
---

## Goals

By the end of this lesson, you will be able to:

* Determine when it is appropriate to use a test spy
* Run a test using a spy

## Vocab

- `Spy/Spies` - helpers that we use in tests which can assert functions were
  called

## Why Spy with Our Little Eyes?

One of the biggest hurdles with front-end testing, and why it can be so complex, is that your tests are running in a different environment than your app. Your app runs in the **browser**, and your tests run in the **terminal**.

<section class="call-to-action">
### Brainstorm  
- What are some [web APIs](https://developer.mozilla.org/en-US/docs/Web/API) and technologies that our apps rely on in the browser?
- Are these defined/available in the terminal environment? How could you find out?
</section>

This environmental difference means that we can't test functionality that's dependent on the browser. The terminal does not have access to all of the objects and web APIs that we have in the browser, and will therefore not understand things like:

`document.getElementById()`

because it doesn't know what a `document` is. If we look at our `window` object in the console, pretty much anything that exists here that we want to use in our code, the terminal will not know about or understand. So we can run into some problems testing our code when we want to do things like:

* manipulate the DOM
* perform network requests
* manage localStorage data

<section class="call-to-action">
We'll be working with the <a href="https://github.com/turingschool-examples/our-first-tests" target="\__blank"> our firsts tests repo</a>.

- If you still have the repo on your computer, open it and commit your changes, then run:
```
git fetch --all
git checkout spies-begin
```
- If you don't have the repo on your computer, clone it down, then run:
```
git checkout spies-begin
```
</section>


## Practice

Let's look at what would happen if we tried to test a method that leverages `localStorage`.

Let's test for a method `saveDetails`, which we will expect persists information
to `localStorage`

```js
describe('saveDetails', function() {
  it('should save details to localStorage', function() {
    // setup
    var box = new Box(100, 100);

    // execution
    box.saveDetails();

    // expectation
    expect(localStorage.getItem('box')).to.deep.equal({
      width: 100,
      height: 100
    });
  });
});
```

When we first run this test, we're told that the function `saveDetails` is not
defined. That's no problem, we know how to get past that error. However, the
next error we encounter is more challenging.

We'll see in our terminal `ReferenceError: localStorage is not defined`. This 
would be the case even if we changed our expectation to `expect(true).to.equal(true)`, 
because the test is actually failing during the **execution phase** when our 
**application code** is trying to do `localStorage.setItem()`.


## What are our Options?

### Mocking LocalStorage

One option is to recreate our own version of `localStorage`. This might sound daunting at first, but it's actually not all that much code:

```js
global.localStorage = {
  store: {},
  setItem(keyName, value) {
    this.store[keyName] = value;
  },

  getItem(keyName) {
    return this.store[keyName]
  }
}
```

This is common in front-end testing. Just like we mock out data to work with, 
we also sometimes mock out web APIs to bring some of that functionality to 
the terminal. The problem with this is that if anything is wrong with our 
implementation of `localStorage`, our tests might fail even if our 
application code isn't actually broken. Alternatively, our tests could pass,
even though our real code is broken, because our mocked implementation doesn't
match the real implementation.

The other concern is that it shouldn't be our responsibility to 
test code that we didn't write. Someone else implemented
`localStorage`, it's their responsibility to test that it does what it is
supposed to do. Our responsibility is to test that all of our code uses
`localStorage` correctly.

The better option is to leverage spies.


### Spies

Spies are useful for when you want to check that something happened - but you don't necessarily care exactly what it did. **Spies will help you verify calls to methods without actually calling them.**

So in our example, we would want to verify that `localStorage.setItem()` was called, but we don't actually care to test the result of that method running. (We can assume the browser has already tested their implementation of `localStorage`, which means that we don't have to!) We are trusting that as long as we're invoking `localStorage.setItem()`, our browser is going to do it.

So all we really want to test is that something was called. We want to **spy** on localStorage, and make sure that its `setItem` method was called.

A spy will listen for a specific function, `localStorage.setItem`, to be called in a test. When it is called, the spy takes over control of `localStorage.setItem`. The spy runs a “fake” function instead, as if `localStorage.setItem` had actually run.

To do this, we're going to add another `devDependency` to our `package.json` file:

```bash
npm install chai-spies --save-dev
```

To our test file, we'll require in our new dependency and configure `chai` to use it, by adding the following near the top of the file:

```js
const spies = require('chai-spies');
chai.use(spies);
```

Now instead of mocking out all the functionality of `localStorage`, we can mock
it to an empty object that we'll spy on. Remember, `localStorage` doesn't exist
in the terminal, so we're going to have to put something in place for it,
otherwise we'll just keep encountering that reference error.

```js
global.localStorage = {};
```

<section class="call-to-action">
Checkout the following documentation on [chai.spy.on](https://github.com/chaijs/chai-spies#spyon) for more details about how to call it.
</section>

```js
chai.spy.on(localStorage, ['setItem', 'getItem'], () => {});
```

1. `chai.spy.on()` is a method that let's us define what we want to spy on
2. the **first** argument is the object we want to spy on
3. the **second** argument is an array of any methods we want to override with a spy (or a single string if we're only spying on one method)
4. the **third** argument is an optional replacement for how those methods should behave/what they should do

So what we're doing with this code is saying: "I know that `localStorage` works as it should, because the browser engineers have already tested it. All I want to verify is that I'm actually invoking `localStorage.setItem()`. I am going to replace the default behavior of `localStorage.setItem()` with a spy so that I can assert it was called without having to worry about what's happening under the hood."

You might be wondering where exactly we should put that mocking/spying code in
our test suite. This is a perfect place for a `beforeEach`. We can set this up
inside our `saveDetails` describe block.

Let's see how this changes the assertion logic of our test:

```js
describe('saveDetails', function() {
  before(function() {
    global.localStorage = {}
    chai.spy.on(localStorage, ['setItem', 'getItem'], () => {})
  })

  it('should save details to localStorage', function() {
    // setup
    var box = new Box(100, 100);

    // execution
    box.saveDetails();

    // expectation
    expect(localStorage.setItem).to.have.been.called(1);
    expect(localStorage.setItem).to.have.been.called.with('box', JSON.stringify({ width: 100, height: 100 }));
});
```

We have two assertions here:
1. verifies that `localStorage.setItem` was called one time
2. verifies that it was called with accurate arguments


Now that our test isn't erroring out on us, we can actually go ahead and
implement our method. Go ahead and add this implementation, and see if the test
passes now.

```js
saveDetails() {
  localStorage.setItem('box', JSON.stringify({
    height: this.height,
    width: this.width
  }));
}
```

Huzzah! The test passes! This might make you uncomfortable. You might be saying
"But how do I know that my data was properly set in `localStorage`?" It boils down
to trust. If you're verifying that `localStorage` gets called with the correct
arguments, we can trust that someone else already tested that `localStorage`
will store that data correctly.


<section class="checks-for-understanding">
### Check for Understanding

In your journal, write about the other web APIs and libraries 
you'll be using in your projects. Where might spies help you? What will be your strategy?
</section>

## Wrap Up

In your journals, let's reflect on what we just learned. Look back at the code we used to create our spies, and write down:

- Why are each of the 3 arguments passed into `chai.spy.on` necessary?
- What does each one "do"?

Finally, spend some time thinking about your current project.

- What pieces of functionality is code you DID NOT CREATE (like localStorage and its setter/getter methods)?
- How would you write the spies for those pieces?
- What questions do you still have?
- What might you do to find answers to your questions? (Who would you talk with, what documentation would you research?)
