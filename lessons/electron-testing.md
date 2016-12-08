---
title: Testing Electron Apps with Spectron
module: 4
tags: spectron, electron, testing
---

Testing is hard. Spectron makes your life easier for checking all of Electrons APIs. Let's look at some simple tests to get started and then think about test strategies for your projects.

## Adding Spectron

Spectron is built on ChromeDriver and WebDriver.io, which allows you to write unit and integration tests for your Electron app. It has full support for the Electron APIs so it's possible to test multiple windows, FS and async code with promises. You can use Mocha, Chai, Jasmine...whatevs you want. We are going to use Mocha and Chai today with a couple of helper Chai libraries.

```js
$ npm i --save-dev spectron mocha chai chai-jquery chai-as-promised
```

Now let's create a tests directory with a test.js file and update our npm test script:

```js
"test": "mocha tests/test.js"
```

For our test.js file, include the dependencies:

```js
var Application = require('spectron').Application
var expect = require('chai').expect;
var assert = require('chai').assert;
const path = require('path')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

var electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

var appPath = path.join(__dirname, '..');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});
```

For our first round of tests, let's make sure we have an app up and running and it has the correct title and buttons:

```js
describe('App starts and has correct title and buttons', function () {
  var app = null
  beforeEach(function () {
      app = new Application({ path: electronPath, args: [appPath]});
      return app.start();
  });

  afterEach(function () {
      return app.stop();
  });

  it('opens a window', function () {
    return app.client.waitUntilWindowLoaded()
      .getWindowCount().should.eventually.equal(1);
  });

  it('tests the title', function () {
    return app.client.waitUntilWindowLoaded()
      .getTitle().should.eventually.equal('Fire Sale');
  });
  it('tests the Open File button text is not disabled', function () {
    return app.client.waitUntilWindowLoaded().getText('#open-file')
    .then(function (buttonText) {
      assert(buttonText === 'Open File');
    })
  })

  it('tests the Save button text is disabled', function () {
    return app.client.getText('#save-markdown').then(function (buttonText) {
      assert(buttonText === 'Save File')
    })
  })

  it('tests the Open button opens a file dialog', function () {
    return app.client.click('#open-file')
    .then((dialog) => {
      // Dialogs are tricky
      assert.equal(dialog.status, 0)
    })
  })
});
```

### FileBin



### Thinking About Your Project

We could go into the weeds and TDD some more on Fire Sale, but let's take some time and map out what you need to test for your project. Take 10 minutes with your partner and think about how your user will interact with your app and possible edge cases. Use paper and pencil to write out the major features you will test and their edge cases.

### Hot Seat

Let's implement a few of your identified edge cases and create tests for your project.
