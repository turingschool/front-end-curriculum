---
title: Webpack DeMystified
length: 120
tags: node, webpack, npm
module: 2
---

### Game Plan:
  - Part 1:
    - Understand what Webpack is, and why it is useful
  - Part 2:
    - Build a basic Webpack file from scratch
  - Part 3:
    - Realize that Webpack is like your organized but slightly finicky butler taking care of everything for you (as long as you give them the right instructions).

### Part 1: Big Picture

#### The Purpose of Build Tools
Let's say you're building a game in JavaScript and you're new to this whole coding thing. Then let's say that your HTML file looks like this:  

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Webpack Demystified</title>
</head>
<body>
  <h1>Luke, I am your father.</h1>
  <script src="bundle.js"></script>
  <script src="game.js"></script>
  <script src="thing.js"></script>
  <script src="jquery.js"></script>
  <script src="bootstrap.js"></script>
  <script src="other-thing.js"></script>
  <script src="something-else.js"></script>
  <script src="stuff.js"></script>
  <script src="ridiculous.js"></script>
  <script src="ughhhhh.js"></script>
</body>
</html>
```

All of these JS files need to be loaded by your browser in a certain order, after the HTML is ready to go, or maybe before, depending on some details.   

All of the CSS files need to be applied to your HTML, but not until the SASS compiler has done it's job.  

And don't forget about the images or static asset files - those need to be pulled from the CSS files or maybe from the HTML code and stuck in their appropriate places relative to where the browser will render them.  

All of that is a lot of stuff to worry about not only for the developer, but also for the browser. Debugging what went wrong can result in a bad time. Luckily for us, a variety of build tools have been developed that do all of the organizing for us.

Some of the main buzz words of you may have heard tossed around include Gulp, Grunt, or Webpack. These can have various labels like "Package Manager", "Bundler", or "Task Runner". There are quite a few differences between them, but they all share a primary responsibility: **Scan through all of your projects' dependencies, handle any task that needs to be done prior to production, and ship it off in a neat little package that is easy for a browser to digest.**

#### So What is Webpack?
Webpack is a node feature that digs through your asset files, finds any dependencies, and spits out a single JS file that is ready for production.

What sets it apart is that it isn't limited to only handling your JavaScript files, it thinks of everything else like a module as well. With Webpack you have access to "Loaders" which pre-process your assets (like Fonts, SASS, Images, CSS, SVGs etc) and output exactly what your browser needs to know in the smallest package possible.

It also has some really cool features like `webpack-dev-server` which executes Webpack whenever you refresh your browser, or a thing called `hot-module-replacement` which tells your project to keep an eye on any changes, automatically refreshing your browser whenever it detects action.

Big picture, Webpack finds the starter file you've told it to use and crawls through the tree of dependencies in the appropriate order keeping track of dependencies. It then minifies, optimizes, and loads anything it needs to make the browser happy.

#### Webpack In Code

So what does Webpack configuration look like?

At its most basic level, you'll see something like this:

```
module.exports = {
  entry: {
    main: "./index.js",
  },
  output: {
    filename: "main.bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
    ]
  }
}
```

This chunk of code tells Webpack to start at the `entry` point and create a `main` bundle which we define as `index.js`. This is where we will write our code and require any other `.js` files that we need in our project. It will follow the tree of nested files and concatenate/minify/work some webpack magic and `output` one single manageable file with the name of `main.bundle.js` which is what you'll include in `<script>` tags in your `index.html` file.

#### What about the `module: { loaders: ...}` part?

A loader is a per-file processor that deals with individual file types for you in the same way it handles `.js` files. Essentially Webpack thinks of everything in your project like a JavaScript module.

This means that you can tell Webpack to go find any SASS files and turn them into CSS (then also concatenate, minify, and bundle up for production). Or go find any image file and compress it before pushing it up to the browser. Or compile the CoffeeScript that you blacked out while writing into JS before production. And so on.

Think of Loaders like a middle step. This makes it possible for you as a developer to write your code in whatever language makes you happy, then when you're ready to fire up your project Webpack is like "hang on a sec...let me organize all of this for you" and transpiles everything into a neat little bundle that your browser can render.

#### Breaking Down Loaders
Loaders take an array of objects that use regex to specify what file extensions to look for and what loaders are needed to make things happen.

```
module: {
  loaders: [
    {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
    {test: /\.css$/, loaders: ['style', 'css']},
    {test: /\.scss$/, loader: "style!css!sass" },
  ],
}
```

*PRO TIP: Loaders run from right to left! So it will run the "sass" loader first, then the "css" loader, then  the "style" loader and do all the things.*

Now that we have a basic picture of what Webpack IS, let's see it in action.

### Part 2: Code Along

#### Install Some Command Line Tools

We'll need to install some tools both locally and globally so we have access to them everywhere all the time. Let's start with global installation of Webpack itself, the Webpack Dev Server which will let us spin up a local server, and Mocha to kick start our testing suite.

`npm install -g webpack webpack-dev-server mocha`

This will allow us to type `webpack`, `webpack-dev-server`, and `mocha` directly in our terminal whenever we need access to them.

(*PROTIP: To see what modules you have globally installed on your machine, type `npm list -g --depth=0` at any time in your terminal*)

#### Start A Project and Setup Webpack

Next, set up a directory and start tracking changes with git.

`mkdir webpack-demystified`  
`cd webpack-demystified`  
`git init`

Then kick off `npm`.

`npm init`

You'll be guided through the `package.json` setup wizard. Fill in the prompts as you see fit, or hit `enter` to choose the default. (You can also type `npm init --yes` and it will choose all defaults for you). Keep in mind these settings can all be changed later directly in the `package.json` file (and they will be).

Finally, install the dependencies we know we need locally. These will be explained in a bit more detail later.

`npm install --save-dev webpack webpack-dev-server mocha mocha-loader chai`

Before we push to github, we need to make sure we have our `.gitignore` file ready to go. Github doesn't need a boat load of node_modules. Luckily, Node hooks us up with a default file that we can pull down with `curl`.

While in your project directory, copy this into your terminal:

`curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore`

Check it out! We have a `.gitignore`.

Git add. Git commit. Git push.

#### Set Up The File Structure

Next, time to create a file structure to hold our code. Let's create a `lib` and a `test` directory:  

`mkdir lib test`

And get some empty files ready to go:  

`touch lib/index.js test/index.js`

At this point our project directory looks something similar to this:

```
.git
lib/
  index.js
node_modules/
test/
  index.js
.gitignore
package.json
README.md
```

#### Set Up the HTML file

Now we're ready to write some code, but we need to give our project a place to output our `.js` files, in both our application and test suite, respectively.

`touch index.html test.html`

Copy this code into your index.html file:

```
<!-- index.html -->

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Webpack Demystified</title>
</head>
<body>
  <h1>Luke, I am your father.</h1>
  <script src="bundle.js"></script>
</body>
</html>

```

Notice the single `<script>` tag located before the closing `</body>` tag. This is the epicenter of webpack. Any `.js` file we write will be bundled along with any dependencies and sent to production as `bundle.js`.

Next let's set up our `test.html` file.

<!-- test.html -->

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Webpack Demystified Tests</title>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

Currently, the script tag here uses the same bundle file, which is confusing. Soon we will specify a `main` bundle for our `index.html` file, and a `test` bundle for our `test.html` file after this quick demo of Webpack in action.

### Brief Demo: Webpack In Action

Make a new file in your `lib` directory called `alert.js` and export a simple alert function.  

`touch lib/alert.js`

alert.js*
```
module.exports = () => {
  alert('ITS A TRAP!!!!!!!!!')
}
```

Then require said file and call the function in our entry `index.js` file.

*index.js*
```
var newAlert = require('./alert');
newAlert();
```

Now open up index.html

`open index.html`

....buzzkill. No alert. But this shouldn't be a surprise because we haven't actually told Webpack to bundle our stuff yet. Do that now:

`webpack lib/index.js bundle.js`

This tells webpack to use `lib/index.js` as its entry point, and output a file called `bundle.js` which is exactly what we tell our `html` page to look for.

You'll notice we now have a `bundle.js` file in our `lib` folder. Reopen `index.html`. BAM!

Also take a minute to look at the terminal output.

```
$ webpack lib/index.js bundle.js
Hash: 65979c2d78d4ec0e2f84
Version: webpack 1.13.1
Time: 56ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.57 kB       0  [emitted]  main
   [0] ./lib/index.js 47 bytes {0} [built]
   [1] ./lib/alert.js 55 bytes {0} [built]
```

Even though we only told it to look into `index.js`, it's running through all of the dependencies (in this case only `alert.js`) and emitting them into 1 file, `bundle.js`.

#### Time to Automate!

Having to type the Webpack commands every time you want to run your app is a pain in the butt. We can write a configuration file that will run every time we spin up our browser and do all of the things for us.

First lets make a quick change to our `html` files. Since we have both a main production environment and a testing environment, lets specify how Webpack will output our files accordingly.

In `index.html` change the script tag to be `<script src="main.bundle.js"></script>`.

Likewise, in `test.html` change the script tag to `<script src="test.bundle.js"></script>`

Now make our config file:  

`touch webpack.config.js`

In that file, add the following:

```
const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  }
}
```

Let's take a second to talk about what all of this is. We're telling Webpack that we want two separate bundles from different `entry` points. One for our `main` application, and one for our `test` suite (which is why we also needed to change how each of our html files were looking for their appropriately bundled JavaScript).  

The output will then determine whether it started form the main or test entry point, and output the filename accordingly.

The way things are now, we still need to tell Webpack to run using the command `webpack` and then open our `index.html` file. Try it:

`webpack`  
`open index.html`  

Not a HUGE deal, but still kind of a waste of time.

Luckily, there's a sweet deal called `webpack-dev-server` that we mentioned earlier. This will boot up a development server and run our configuration file and reload our changes anytime we refresh our browser. Try it out!

`webpack-dev-server`

Then visit `http://localhost:8080`

Make a change to your alert.js file and refresh your browser.

#### Writing Tests

In `test/index.js`, write a simple test.

```
const assert = require('chai').assert

describe('our test bundle', function () {
  it('should work', function () {
    assert(true)
    })
  })
```

Visit `http://localhost:8080/test.html` (alternatively you can type `mocha` into your terminal, although keep in mind this command will not be accurate if running any tests on the DOM itself.)

Also note that just like in your `lib/index.js` file, you can require other test files within the entry point `test/index.js` file and Webpack will bundle for you. Simply use `require('./other-test-file')` like you would in any other context.  This is important since keeping test files simple and elegant is crucial to writing maintainable code.


#### A few changes to package.json
`package.json` makes it easier to run commands. Let's make a few changes so we can keep shortcut some terminal commands.

```
// package.json
...
"scripts": {
  "start": "webpack-dev-server --hot --inline",
  "build": "webpack",
  "test": "mocha"
},
...
```
This lets us use the commands `npm start` to fire up webpack-dev-server, `npm build` to package everything for production, and `npm test` to execute our testing suite.  

The `--hot --inline` flags tell npm to watch for any changes and reload automatically so we can stop typing stuff into our temrinal.  

#### Back to Loaders

What sets Webpack apart from bundlers like Grunt and Gulp is that it handles other types of files the same way it handles JavaScript files. For example, if we want to use `SASS`, we need something to compile it into regular `CSS`.

Webpack does this for us with the use of *loaders*. There are TONS of different loaders for everything under the sun. Check out the complete list [here](https://webpack.github.io/docs/list-of-loaders.html).

First lets get SASS into our node project to begin with.
`npm install --save-dev node-sass`  

Next step is to download and install the dependencies of the Webpack loader(s) you want to use.

`npm install --save-dev style-loader css-loader sass-loader`

Wait, I thought we just needed a SASS loader. What's all the other stuff for?

If you visit the loader documentation ([Sass Loader](https://github.com/jtangelder/sass-loader)) , you'll see the exact command you need to include in your config file.

Then pop into `webpack.config.js` and tell it to apply these loaders anytime it sees a `.scss` file extension. Your file should now look like this:

```
// webpack.config.js

const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  }
}
```

**PRO TIP:** Webpack loaders run from right to left. So the last line of the loaders array says "Yo, Webpack, when you see a `.scss` file extension, run the `sass` loader, then run the `css` loader, then run the `style` loader".  

In other words, Webpack needs to know that it's dealing with SASS, then it needs to transpile it and bundle it as a CSS file, and then stick those styles into the html page in a STYLE tag. Let's see this in action.  

`touch lib/styles.scss`

Add some SASS

```
/* lib/styles.scss */

$primary-text-color: #F00;

body {
  color: $primary-text-color
}
```

Require this file in your `index.js`

Restart your server and check it out.

#### Babel and ES6

##### Install and Configure Babel

With all of the new ES6 functionality, we need to make sure everything is compatible. Webpack and do this for us by compiling our ES6 into ES5 with a Babel-Loader.

`npm install --save-dev babel-loader babel-core`

Then add it into your loaders module in `webpack.config.js`. Your entire file should look like this:

```
// webpack.config.js

const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
}
```
Note that we exclude `node_modules` here. We want Webpack to process all of OUR `.js` files, but *not* the ones we didn't write ourselves.

As an added bonus, we can tell Webpack to figure out file extensions for us. If you haven't already, make sure to add this at the end of your config file:

```
resolve: {
  extensions: ['', '.js', '.json', '.scss', 'css']
}
```

This allows us to be generic when requiring files. We can say `require('./styles')` instead of `require('./styles.scss')` because the `.scss` extension is part of the list Webpack is looking for.

##### Enable Babel

Great! You've configured Babel but you haven't made it actually _do_ anything. Create a `.babelrc` config in your project root and enable some plugins.

To start, you can use the the latest preset, which enables transforms for ES2015+:

`npm install --save-dev babel-preset-latest`

In order to enable the preset you have to define it in your `.babelrc` file, like this:

```
// .babelrc

{
  "presets": ["latest"]
}
```

##### Further Reading

Beyond this basic Webpack configuration, there are countless ways to use Webpack to your advantage. For further reading some of the additional tricks for later use include:  
[Tree Shaking](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.rlpftvy03): Letting Webpack scan your code for anything unused or superfluous before it packages everything up for production.  
[Code Splitting](https://webpack.github.io/docs/code-splitting.html): Loading only the code needed when you need it, not your entire app.  
[Chunks](http://survivejs.com/webpack/advanced-techniques/understanding-chunks/): Sections of code that are organized to maximize performance. (ie: Test chunks vs Production chunks, we don't necessarily need to run the test chunks every time we load our app in the browser)

### Additional Resources
[Webpack Documentation](https://webpack.github.io/docs/)  
[Awesome Webpack Blog Post](http://code.tutsplus.com/series/introduction-to-webpack--cms-983)  
[Comparing Browserify/Grunt/Gulp/Webpack](https://npmcompare.com/compare/browserify,grunt,gulp,webpack)  
[Another Webpack Tutorial](http://survivejs.com/webpack/developing-with-webpack/getting-started/)  
