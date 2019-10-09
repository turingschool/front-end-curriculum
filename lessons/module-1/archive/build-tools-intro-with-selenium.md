---
title: Introduction to JavaScript Build Tools with Selenium
length: 120 mins
tags: javascript, webpack, selenium
---

## Goals

By the end of this lesson, you will:

* Have an understanding of what client side build tools are
* Have a basic understanding of what Webpack is and what it does for us

## Vocab

- `Frontend/Client Side Build Tool` A tool that usually does two main things: 1. Take all your files and crunch them into one file 2. Change your code so that you can things using new, shiny features before all those features are implemented in all the browsers
- `Webpack` A frontend build tool. Aside: Webpack is currently the most popular build tool. In the span of about five years or so, three different build tools have come into and gone out of favor. This stuff changes fast, folks!
- `Selenium` A tool that allows programs to control a web browser
- `npm` Node Package Manager is tool that gives you access to a repository of JavaScript libraries. Does the same thing as Homebrew, but for Javascript instead of Mac programs

## Code Along - Setting Up Webpack

We'll walk through actually rebuilding a project and adding Webpack!

## Install Some Command Line Tools

Let's install some command line tools. We'll also use local versions of these packages, but the in order to use global commands, we'll need to install them globally as well.

```bash
npm install -g webpack webpack-dev-server
```

This will install the [Webpack](http://webpack.github.io/) command line tools globally -- hence the `-g` flag -- on your file system.

You'll be able to run these tools with the `webpack` and `webpack-dev-server` commands, respectively.

## Creating and Existing Project

First, create a directory for your project:

```bash
mkdir webpack-walkthrough
cd webpack-walkthrough
git init
```

Create an HTML and JavaScript file:

```bash
touch index.html
touch index.js
```

In the `index.html` file, we have a bare structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack Walkthrough</title>
  </head>
  <body>
    <h1>Change This Title</h1>

    <button type="button">Change!</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
```

The `index.js` file has:

```javascript
var h1 = $('h1');
var button = $('button');

button.on('click', function(){
  h1.text('Changed! Wowowow');
});
```

Let's test to make sure it works! Sure enough, when you click the button, the h1 text changes. Now let's take this project and move it into Webpack.

Imagine if you wanted to separate your JavaScript code into five different files to keep things organized. You would have to include five different script tags in your HTML file. That's not concise, and it's certainly difficult to manage as things continue to scale. That's where Webpack comes in! Webpack has a clever way to combine multiple JavaScript files into one source file.

## Creating your first Webpack project: Setting Up npm

At this point, we have a very simple project. Let's initialize `npm` and then install some dependencies.

First, create your project with:

```bash
npm init
```

You'll be guided through a command-line setup "wizard", prompting you for some info on your project such as its:

* Name
* Author
* Version
* Description
* License, etc.

For most of these items you can use the default option by pressing `Enter`.

Finally, install our library dependencies with `npm install` and the dependency names:

```
npm install --save webpack webpack-dev-server
```

We installed a few dependencies:

* [Webpack](http://webpack.github.io/)
* [Webpack Development Server](http://webpack.github.io/docs/webpack-dev-server.html)

### Recommended: sane `.gitignore` defaults

First, let's go ahead and make our `.gitignore` file:

```bash
touch .gitignore
```

* [NPM](https://www.npmjs.com/) vs. [Bundler](http://bundler.io/) dependency storage
* Git strategy -- keeping diffs meaningful and project churn low
* Git problems caused by versioning dependencies or other frequently
  changing files

For these reasons, it's often helpful to start with a `.gitignore` file which includes "sane defaults" for NPM projects. One example is provided on github, and we can easily include it in our newly created project by pulling the file down with `curl`:

```bash
curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore
```

### Adding a README.md

We'll also want to add a README.md documentation file.

```bash
touch README.md
```

As we continue along in the coding process, we should leave breadcrumbs for ourselves in this file.

Here's a good start for our README.md:

```md
# Webpack Walkthrough

To install the dependencies:

npm install
```

## Filling out the Project

Next, let's create an empty entry file and folder for our future code:

```bash
mkdir lib
touch lib/index.js
```

## Setting Up Our HTML

We mentioned earlier that Webpack let's us use one `script` element to include all of our JavaScript code. So what do we put in our HTML? The `index.html` file at the root of our project provides the entry point to our application. We have to add a specific `script` element that Webpack recognizes.

Below is what the `index.html` file should look like. Remove the existing `script` elements and replace with the one below:

__index.html__

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack Walkthrough</title>
  </head>
  <body>
    <h1>Change This Title</h1>

    <button type="button">Change!</button>

    <script src="main.bundle.js"></script>
  </body>
</html>
```

The important part is the third line from the bottom:

```html
<script src="main.bundle.js"></script>
```

This is the line that loads up your bundle. Notice that we only have to load a single JS file. This is one of the major benefits of Webpack (or another frontend build tool) -- it will package all of our JS files and their dependencies into a single bundle that we can load.

Since the `index.html` file is the entry point for our application, we're loading in the "main" bundle.

Note that these pages won't work yet, since the bundle has not yet been built.

The entry point for the JavaScript is the `lib/index.js` file. We need to move our code from the root `index.js` file into this entry point file so Webpack knows where to look for our JavaScript code first.

Here is what the `lib/index.js` file should look like:

__lib/index.js__

```javascript
var h1 = $('h1');
var button = $('button');

button.on('click', function(){
  h1.text('Changed! Wowowow');
});
```

Now that the root-level `index.js` file is empty, we can remove that file:

```bash
rm index.js
```

Our directory structure should look like this:

```bash
lib/
  index.js
node_modules/
.gitignore
package.json
README.md
```

## Setting Up Webpack

[Webpack](https://webpack.github.io/) is a module bundler.

We installed it earlier, but we need to add a configuration file:

```
touch webpack.config.js
```

In that file, add the following contents:

```js
var path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  }
}
```

In the above configuration, we're telling Webpack that we'd like it to build the main application.

We can build the file once with `webpack` or we can set up a development server that will reload our changes with `webpack-dev-server`.

Let's fire up `webpack-dev-server` and head over to `http://localhost:8080/`.

__Note:__ Having trouble? If `webpack-dev-server` throws an error like `webpack-dev-server: command not found`, try adding `"start": "webpack-dev-server"` in the "scripts" section of your package.json file. Now run `npm start`. This should allow us to run the command specified in the package's `"start"` property of its `"scripts"` object -- in this case, `webpack-dev-server`. In other words, it lets us to run `webpack-dev-server`!

What happened? Our code is broken! When you click the button, nothing happens to the h1. If we open up the console, we can see a hint as to why: `Uncaught ReferenceError: $ is not defined`. You have probably seen this before.

When we removed the script element in our HTML file that required jQuery, our project no longer has a reference the the jQuery library. So we have to include it using Webpack. In the terminal, if the server is still running, press `control + c` (this stops the server), and then run the command:

```bash
npm install jquery --save
```

Then, in the `lib/index.js` file, we need to require the `$` selector from the jQuery package. Add a line to the top of the file so the whole `lib/index.js` file looks like this:

```javascript
var $ = require("jquery");

var h1 = $('h1');
var button = $('button');

button.on('click', function(){
  h1.text('Changed! Wowowow');
});
```

Now start up the server again using the command `webpack-dev-server`, and head over to `http://localhost:8080/`. Click the button, and you should see the h1 change! Now we have Webpack all setup!

## Our First Selenium Test

If you haven't already, go through the lesson on Selenium testing so your computer is setup with the correct drivers: http://frontend.turing.io/lessons/module-1/selenium-testing

We have to install the selenium webdriver dependency using the command:

```bash
npm install --save selenium-webdriver
```

Let's create a new test file and a `test` directory at the root level with a file called `change-heading-test.js`.

In `test/change-heading-test.js`, let's write our first test:

```javascript
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

searchTest(driver_chr);

function searchTest(driver) {
  driver.get('http://localhost:8080/');

  driver.findElement(By.tagName('button')).click();

  driver.sleep(3000).then(function() {

    driver.findElement(By.tagName('h1')).then(function(h1) {
      h1.getText().then(function(text){
        if(text === 'Changed! Wowowow') {
          console.log('Test passed');
        } else {
          console.log('Test failed');
        }
      })
    })
  });

  driver.quit();
}
```
To run the tests, we have to make sure the server is running. Otherwise, our page won't really exist. So in one pane of your terminal, run the server with:

```bash
webpack-dev-server
```

Then open another pane, navigate to the root of your project folder, and run the test command:

```bash
node test/change-heading-test.js
```

We have a passing test!

<!-- ## Things to Keep in Mind

* Requiring files is path-relative to the file you are requiring _from_ (i.e. if you want to require a file in your project root into `lib/index.js`, you'll need to step up one directory level to access it) -->
