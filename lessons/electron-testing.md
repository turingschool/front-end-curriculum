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
const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = require('chai').expect;
const assert = require('chai').assert;
const path = require('path');

const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
const appPath = path.join(__dirname, '..');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});
```

For our first round of tests, let's make sure we have an app up and running and it has the correct title and buttons. We'll want to use a `before` and `after` hook to do some setup and teardown of our application:

```js
describe('App starts and has correct title and buttons', function () {
  let app;

  before(function () {
      app = new Application({ 
        path: electronPath
      });
      return app.start();
  });

  after(function (done) {
      done();
      return app.stop();
  });

});
```

Because much of the code we need to simulate in our tests will be asynchronous, our assertions will leverage the `chai-as-promised` library to tell our test runner that an expected value 'should eventually equal' another.

```js
  it('opens a window', function () {
    return app.client.waitUntilWindowLoaded().getWindowCount()
            .should.eventually.equal(1);
  });

  it('tests the title', function () {
    return app.client.waitUntilWindowLoaded().getTitle()
            .should.eventually.equal('Fire Sale');
  });

  it('tests the Open File button text exists', function() {
    return app.client.getText('#open-file')
            .should.eventually.equal('Open File');
  });

  it('tests the Save button text exists', function () {
    return app.client.getText('#save-markdown')
            .should.eventually.equal('Save Markdown');
  });
```

Without using the chai as promised syntax, the value of these calls would actually return as pending promises. Because we don't want to check a pending promise, we can use `should.eventually.equal` to tell our test runner to wait until the promise has resolved and test the value that's returned from it rather than the promise itself.

## Mocking Electron Modules
These tests are pretty simple so far, and slightly tied to the DOM. Our more valuable tests will actually require interacting with Electron Modules (in our case, the `dialog` module). This is tricky because there's currently no way to simulate interactions with these kinds of modules. For example, if we want to test that clicking the Open File button loads the markdown/HTML for the file we select, we can't actually simulate selecting a file because we don't have access to interact with the dialog box to select a file.

To get around this hurdle, we have to mock out our own dialog module specifically for our test environment. There are a couple of ways to do this, but none are completely ideal. Let's take a look at one solution where we create our own mock dialog.

### Adding Fixture Files
In your `tests` directory, create a folder called `fixture-files`. This is where we'll store some fake markdown files that we can simulate selections and interactions on for testing purposes. Add a single, simple markdown file to this folder. We will test the value of this file when we assert our open file dialog is working:

```markdown
# hi
```


### Mocking the Dialog Module
Create a file in your `tests` directory called `mocks.js`. Here we will actually override the dialog module that runs in our tests. Let's start with overriding the `showOpenDialog` method. We'll have this method simply return our fixture file that we just created. This will allow us to pretend that the user selected this file when they click 'Open File' from our application.

```js
const path = require('path')
const fixtureFile = path.join(__dirname, 'fixture-files/hi.md');

module.exports = function(dialog) {
  dialog.showOpenDialog = () => {
    return [fixtureFile];
  };
};
```

Take a look at these [lines](https://github.com/Alex-Tideman/firesale-demo/blob/after_menu_lesson/lib/main.js#L54-L59) in our Electron App where we leverage `showOpenDialog`. In it's default behavior, the method would return a selected file constrained to the options we pass it. So in our mock, all we want to do is return a file of our hard-coded choosing.


### Using the Mock in a Test Environment
Here's where things get a little messy. We have to pollute our `lib/main.js` entry point file a little bit to conditionally use our mock dialog module if we are running in a testing environment. Let's first import our mocks:

```js
const mock = require('../tests/mocks');
```

And then we'll go all the way down to the bottom of our file and tuck this snippet away:

```javascript
if (process.env.SPECTRON) {
  mock(dialog);
}
```

This will tell the main process of our electron app to use the mock if we are in a 'SPECTRON' environment.

So how do we actually run our app in a SPECTRON environment? Let's go back to our test file, setup a path to our mocks, and edit our setup in the `before` hook a bit:

```js
let electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
let appPath = path.join(__dirname, '..');
let mocksPath = path.join(__dirname, 'mocks.js');
```

```js
before(function () {
    app = new Application({ 
      path: electronPath,
      env: { SPECTRON: true },
      args: [appPath, '-r', mocksPath]
    });
    return app.start();
});
```

You can see we're specifying an `env` property with `SPECTRON` set to true. This will change the `process.env` variable in our main process and allow us to signify we're running in a testing environment.

The `args` property is a little difficult to understand here, but essentially it is allowing our app to preload our mocks with our app. This is what make it possible for us to store our mocks in another file and use them conditionally in our main process without having to stub them out directly in our main process. The breakdown of this args property is as follows:

1. `appPath` - path of your main.js file
2. `-r` - the require statement to preload your files with `-r` i.e `electron main.js -r test/mocks.js` should work in your console if you have electron installed globally
3. `mocksPath` - path to your mocks/overrides

### Testing with a Mock
The test we want to write here wants to ensure that when a user chooses to open a file, our application takes the selected file and loads the appropriate content into our markdown area:

```js
it('tests the Open button opens a file dialog', function (done) {
  app.client.click('#open-file').then((dialog) => { 
    return app.client.getText('.raw-markdown').then(text => {
      text.should.equal('# hi');
      done();
    })
  }).catch((error) => {
    done(error);
  });
});
```

This allows us to bypass actually opening a dialog module, since we don't want to test that dialog itself, and skip straight to testing the interaction after a user has selected a file. Though we might want a test that checks if a dialog box actually opens, this is a more important piece of functionality to test and is worth the trade-off for mocking the module.


## Other Approaches & Tools for Testing
When it comes to testing electron modules, mocking them out on our own is likely the most flexible option for the use cases we'll have for now. There is a library called [electron-test-utils](https://github.com/MarshallOfSound/electron-test-utils) that has started to provide support for mocking these modules and greatly reduces the boilerplate needed for mocks. It currently only supports a handful of APIs, but it could be worth looking into depending on what use-cases you have in testing your application.

The electron-test-utils library works best with another one called [electron-mocha](https://github.com/jprichardson/electron-mocha). This is very similar to plain mocha (you'd replace your mocha call with electron-mocha in your test script), it just gives you further access to Electron's APIs.

One down-side to using a library like electron-test-utils is that you may have to refactor the code you've already written in your main process. For example, in order to use the `dialog` mock they provide, we'd have to update our code to specify a callback function when we retrieve a selected file. This can add complexity to our apps simply for the sake of testing, which is often not worth it.

### Resources

* [Spectron](https://github.com/electron/spectron)
* [Electron Test Utils](https://github.com/MarshallOfSound/electron-test-utils)
* [Electron Mocha](https://github.com/jprichardson/electron-mocha)