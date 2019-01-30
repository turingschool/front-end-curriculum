---
title: Testing with Chai Spies
tags: TDD, unit testing, mocha, chai, webpack, spies
mod: 2
---

## What is the Issue Here?

_Note:_ We're continuing from the Test Driven Development with Webpack lesson. Commit your changes if you haven't yet.

One of the biggest hurdles you'll have when building frontend applications is keeping your codebase clean and **testable**. Chances are good that you are currently intermixing your DOM Manipulation with code that is handling the state of your classes. However, the classes in your game file should be completely oblivious to the DOM - they should only store state and "broadcast" their changes to the DOM... not handle DOM manipulation directly.

This is because, unfortunately, Mocha and Chai run in an environment outside of your browser. Therefore they do not have the ability to test if changes have been applied to the DOM (the browser page) successfully. We can't test anything happening on the DOM. For instance, if a class method is structured like this:

```js
increaseCount(){
  this.count++
  document.querySelector('#item').innerText('Change to this text please.'); // Some DOM manipulation here
};
```

By running the test that uses this method, Mocha will say that it has no idea what the `document` is, and the test will _fail_... So we want to test this method while still keeping the DOM manipulation functionality a part of the method. How do we do that? 

**By pulling the DOM manipulation functionality out of the method and using a "spy".**

## Let's See Why

Change the original starter kit HTML (`index.html`) to be:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Gametime Starter Kit</title>
  </head>
  <body>
    <h1>Gametime Starter Kit</h1>

    <img src="/images/turing-logo.png" alt="turing logo" height="100px" width="100px">

    <!-- Adding these lines below -->
    <h3>Box Height</h3>
    <p id="box-height-display">This is where the height goes.</p>
  </body>
</html>
```

Let's add some functionality to the `increaseHeight` method in the `Box` class to display the height of the box _on the DOM_ after it is increased:

```js
// Box.js

increaseHeight(val) {
  this.width += val;
  document.querySelector('#box-height-display').innerText = this.width;
};
```

Add some code to our existing JavaScript entry file code to instantiate a box and increase it's height:

```js
// index.js

import Box from './Box.js';

const box = new Box();
box.increaseHeight(100);
```

Start the webpack server, and check to see if it works:

```bash
npm start
```

_But when we run the tests:_

```bash
npm test
```

And we now see the test for the `increaseHeight` method fails...

Now we know we need to fundamentally change the structure of our code in order to continue testing methods that involve DOM manipulation.

## Spies

Since we cannot actually test our DOM manipulation, we are going to use a [`spy`](https://github.com/chaijs/chai-spies) to verify whether our method that displays the score has been called. *Note: Spies will help you verify calls to methods without actually calling them.* This library is included in the Gametime Starter Kit (look in the `devDependencies` section of the `package.json` file).

What is a spy? A spy is a tool that listens for a specific function, `functionA`, to be called in a test. When `functionA` is called in a test, the spy takes over control of `functionA`. The spy runs a "fake" function instead as if `functionA` had actually run.

**Setup**

Let's add a file that will house all of our DOM manipulation function for the whole project:

```bash
touch src/domUpdates.js
```

Refactor the `increaseHeight` method to call a function within the `domUpdates` file:

```js
//Box.js

// At top of file
import domUpdates from './domUpdates.js';

// Add domUpdates function to method
increaseHeight(val) {
  this.height += val;
  domUpdates.displayHeight(this.height);
};
```

Now let's write the `domUpdates` function:

```js
// domUpdates.js

export default {
  displayHeight: function(newHeight) {
    document.querySelector('#box-height-display').innerText = newHeight;
  }

  // You can add more functions just like this as key-value pairs
}
```

Ok, so far we haven't added a spy, but everything should still work the same. Let's verify!

If we run `npm test`, then test should still fail, however. On to the spy!


### Adding the Spy

This is what we need to add to the test file so that we can use spies:

```js
// Box-test.js

import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Box from '../src/Box.js'
import domUpdates from '../src/domUpdates.js';
```

Next, we will take advantage of the `.on()` method from the [Chai-spies](https://github.com/chaijs/chai-spies#user-content-spyon) to spy on the methods that interact with the DOM:

```js
chai.spy.on(domUpdates, 'displayHeight', () => true);

// chai.spy.on([an object that contains the methods to spy on],
//             [a string or array of the method names you want to spy on], 
//             [a callback function with what you intend the spy to return instead of your function, 'displayHeight', actually running]
//            )
```

And lastly, let's update our test for `increaseHeight` to verify that our method of `displayHeight` is actually being called:

```js
it('should have an increment method that will increase the height by a provided value', function() {
  box.increaseHeight(10);

  expect(box.height).to.equal(110);
  expect(domUpdates.displayHeight).to.have.been.called(1);
  expect(domUpdates.displayHeight).to.have.been.called.with(110);
});
```

Run `npm test`.

Finally, we can call that method in the appropriate place and see that our test is passing.

### Recap

Together, let's recap where we started and what we did to get to a passing test.

### Your Turn
Set up the functionality to display the width to the DOM - using your `domUpdates file` to keep this code separate from the state of your app. Be sure to update your testing accordingly.

## Using Spies in Multiple Tests

Stay Tuned. Coming soon...

