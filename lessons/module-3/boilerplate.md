---
title: Building A Boilerplate
tags: node, webpack, npm
module: 2
---

## Initializing Your App

Make a directory for your project. `cd` into that directory, and open it up in your favorite text editor. At this point it should be completely empty. Let's kick things off by setting up the `package.json` file.  

## `package.json`  

To get started, we need to initialize a `package.json` file.  

`npm init`  

This will kick off a series of questions within your terminal to set up your `package.json` file. This file can be manually edited once it has been created, so to skip the setup process simply type `npm init --y` or `npm init --yes`.  

Open up this file in your editor. You'll notice it contains all of the "meta data" about your app. Most importantly, it keeps track of any dependencies the app needs to function properly, as well as commands to run certain scripts. In `Ruby on Rails`, this would be similar to the `gemfile`.  

## Installing Dependencies  

`npm install --save-dev` (or `npm i -D`) will save dependencies to the `devDependencies` collection.
`npm install --save` (or `npm i -S`) will save dependencies to the `dependencies` collection.  

The difference is that `devDependencies` are those that you need in development. `dependencies` are those that are needed for your app to run in general.  

Let's install the preset that will allow our app to transpile the code we write into ES2015 so our browser can read everything safely.

`npm i -D babel-preset-es2015`  

Before we get into Webpack, I want to break down exactly what is happening behind the scenes. As it turns out, Babel (the tool that is ultimately transpiles ES6 to ES5 for our browser) comes with its own CLI tool. This tool allows us to manually transpile files.

## Detour: Babel CLI

Globally install the node module `babel-cli`.

`npm i -g babel-cli`  

To check out how this works, create a file in your project called `app-es6.js`.  In that file, write some ES6 code. Maybe something like `const name="Brenna"`, or a couple arrow functions.


```js
// app-es6.js  

const name = "Elvis";

const hello = () => {
  console.log(`Hello ${name}!`);
}

hello();
```

Then, in your terminal, run `babel app-es6.js`. What do you notice about the output in your terminal?  

Trick question, the answer is nothing. The code that is logged in your console is exactly the same as the code written in `app-es6.js`. This is because we are missing a piece that tells our app to use the preset we just installed.  

This is where that weird `.babelrc` file that you see all the time comes into play. This file simply contains a list of all of the presets that we want our app to run when any file is executed.

`touch .babelrc`  

The `.babelrc` file is written in `JSON` format, and right now we only have one preset we want our app to care about.



```js
// .babelrc  

{
  "presets": ["es2015"]
}
```

Run `babel app-es6.js` again in your terminal and watch the magic happen. Now, you should a different output than what you have in your file. Mine looks like this:  

```
$ babel app-es6.js
"use strict";

var name = "Elvis";

var hello = function hello() {
  console.log("Hello " + name + "!");
};

hello();
```

Sweet! Translation complete. But this isn't very helpful for actually running our code in a browser. We need the code to exist as an ES5-friendly file within our app as well.  

Run the command `babel --help`. This will spit out all of the other commands you can use starting with `babel` to make cool stuff happen. What we want is something to **watch** the **file**(s) we care about, and to then **output** a translated ES5 **file** back into our app. This is similar to what happens when you manually watch for CSS changes to create a new SASS file.

The command we want to make this happen is the following:  

`babel -w app-es6.js -o app-es5.js`  

(See what I did with the bold syntax up there?? It was a HINT!!);

After running this command, you'll see a new file pop up in your app called `app-es5.js` containing our compiled ES6 code. Because you ran the `-w` command, your app will keep an eye on this file in real time. Any time you make changes to `app-es6.js` it will automatically re-transpile it into the `app-es5.js` file. Notice if you make a mistake it will also throw a helpful line error in your console.

Now you would simply need to create your `index.html` page, and reference the `app-es5.js` file in your script tag to have an app up and running and ready for ES6. Feel free to take a second to do this now to verify everything is wired up.  

The problem with this method, is that with multiple JavaScript files you still need to list every single file in your `index.html`, which makes for more HTTP requests, slower load times, confusion in general, and less fun for the user. Enter build tools! We will be focusing on the ever popular build tool Webpack.  

## About Webpack

Webpack is a "module bundler" that treats all of the files in your app as an individual module and bundles everything up in a single file package that your browser can understand and easily digest.  

At the end of the day, Webpack and Babel will spit out one single file - typically called `main.js`, or `bundle.js` etc. The name is arbitrary, but what's important to note is that this file is a giant concatenated version of all of the assets that exist in the tree of your app.

When we run the command `npm start`, that's the signal for Webpack to kick into high gear. Depending on how your `package.json` file is structured, this command at its most basic tells Webpack to follow the tree of dependencies within your app and bundle everything together. It then compiles everything into ES5 (because of that `babel-preset-es2015` guy!), and finally fires up a local server `webpack-dev-server` to serve up all of these assets in the correct way.  


### Stuff Webpack Does For You

- Transpiles Code
  - Webpack does all of the work for you to translate languages that make your life easier (like SASS, ES6, TypeScript, CoffeeScript...whatever floats your boat) into the vanilla version that the browser can understand.  
- Offers Plugins
  - Similar to `npm`, developers have noticed the power of Webpack and have written plugins that make other aspects of devving apps easier. There are plugins for EVERYTHING.
- Handles Performance
  - It can optimize images, chunk CSS into sections that should load first vs later, order JavaScript so the important stuff fires first, etc.
- Loaders
  - Let's you include your CSS in your JavaScript files so everything can be bundled together in a modular way.
- `webpack-dev-server`
  - Gives you a local server out of the box so you can run code immediately.  

## Configuring Webpack

Modules you need & why:  
- `webpack`  
  - the webpack module in general  
- `babel-core`  
  - the module that has all of the core Babel functionality  
- `babel-loader`  
  - a loader that communicates with Webpack and Babel  
- `babel-preset-2015`  
    - the preset that specifically transpiles ES6 to ES5  
- `webpack-dev-server`
  - a server to test our app locally through webpack  

If you went down the `Babel Detour` from above, remove all of the files we created so the only file that remains is your `package.json`. If you're starting from scratch, create a new directory and run `npm init --yes`.  

Install the dependencies:  

`npm i -D babel-core babel-loader babel-preset-es2015 webpack webpack-dev-server`  

Then we need a few folders, `app` where our **entry** point and all other **modules** will live, and `build` where the **output** files used to ultimately run the app will live (like `index.html` and `main.js`).

`mkdir app build`  

Notice the words in bold form that last bit. These are the pieces that our next file, the `webpack.config.js` file needs to know about to get setup.

`touch webpack.config.js`  

```js

// webpack.config.js  

module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
}
```

Let's stop for a minute and break down what is happening here. Really all we are ultimately doing with this messy-looking file structure is exporting an object of configuration details. NBD.  

```
entry
```

The first thing we need to know is where Webpack should start bundling up all of our assets which is called the `entry` point. Here, we tell webpack to start in the `/app` directory (note the relative path from where `webpack.config.js` lives). You'll notice that we aren't specifying an `index.js` file. This is because webpack by default looks for an `index.js` file if nothing else is specified.   

```
output
```

Next, we tell it where want our final compiled-concatenated-bundled-ready-to-go JavaScript file to live, which typically is next to our `index.html` file, in this case in the `/build` directory and we want the filename to be `bundle.js`.  

```
modules
```

Then, we list the modules that need to be implemented to handle whatever magic we expect to see. For now, we are simply telling webpack to watch for any JavaScript files (note the `regex` indicating any file that ends in `.js`). When it encounters that type of file, run the `babel-loader` package we installed, and in particular we want to run the `es2015` preset to compile any ES6 to ES5.  

**PROTIP:** The object after `query:` is exactly what we had previously in the `.babelrc` file. This can be written in a few different ways. One of which is in adding this `query:` line in our config file. A second is by adding the preset as a query string immediately following the loader name like so:

```js
loader: 'babel-loader?presets[]=es2015'
```

Third you can create a `.babelrc` file as we did in the Babel Detour section and pop in the following:

```js
// .babelrc
{
  "presets": ["es2015"]
}
```

All three of those methods simply tell Webpack that we want to use a particular preset whenever a file is executed.  

```
devServer
```

Here we set up where we want our development server to live. The `inline` bit allows us to add an inline flag when we start our server to allow it to automatically watch for changes and reload our page. You'll see this part of the configuration in various places, but don't worry too much about that right now we'll talk more on that in a bit.  

```
resolve
```

Lastly, this line tells Webpack to recognize these types of file extensions automatically. This means when we are importing files we can leave off the extensions which makes for faster, cleaner code.

Example:

```js
import MyComponent from '../components/MyComponent';
```

Ok! Let's continue with building out some of the important features of a real app.  

## Add Some Files

```
touch app/index.js build/index.html
```

```js
// app/index.js

const name = "Elvis";

const hello = () => {
  console.log(`Hello ${name}!`);
}

hello();
```

```html
<!-- build/index.html -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Boilerplate Tutorial</title>
  </head>
  <body>
    <h1>Webpack Magic</h1>
  <script type="text/javascript" src="./bundle.js"></script>
  </body>
</html>
```

Notice here that our `<script>` tags point to a file called `./bundle.js` which doesn't exist yet, but this file name matches what we specified in the output `filename` in `webpack.config.js`. This file will be generated when we fire up our dev server (or run build for production).

## Fire It Up  

Lastly, we need to tell our `package.json` what we want to use to fire up our development server. Add a `start` script within the `"scripts"` section.  

```js
// package.json  

...
"scripts": {
  "start" : "webpack-dev-server",
  "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

Now run `npm start` in your terminal, visit `http://localhost:8080` and pop open the console. Voila! We're up and running.  

## Gitignore

Before we go too much farther, in the event you commit this code to github we should set up a .gitignore file. From the root directory of your app, run this `cURL` command:  

```
curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore
```

## Configuration With React

So far our boilerplate is ready to rock with ES6 in a simple JavaScript/HTML interaction. To continue the setup to get everything ready for React, CSS, and SASS we'll start by adding a react specific babel preset.   

`npm i -D babel-preset-react`  

Since our presets are getting longer than a single reference, let's remove the `query` line in our `webpack.config.js` file and create a `.babelrc` file (if you haven't already).


```js
// .babelrc  

{
  "presets" : ["es2015", "react"]
}
```

Then make a small change to our existing loader to allow for any `.js` OR `.jsx` files to be run through our presets (the `?` in a `regex` denotes that the previous character is optional).  


```js
// webpack.config.js  

// Existing Code ....
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
```

Time to (finally) install React.  

`npm i -S react react-dom`  

To make sure everything is wired up, grab the `index.js` file and plop in a React component.


```js
// app/index.js  

import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return (
    <div>Hello World</div>
  );
}

render(<App />, document.querySelector('.application'));
```

Note that in our `render` function we are referencing an element on the DOM with a class of `.application`. Hop over to your `index.html` file and make sure that element exists.  

Finally, run `npm start`.  

## Helpful Additions

Refreshing the browser every time we make a change to our codebase is no fun. Modify your `"start"` script in `package.json` to allow it to watch for changes and reload automatically:


```js
// package.json

"start": "webpack-dev-server -d --watch",
```

## Adding Style

If your app looks like mine at this point, it's a whole lot of Times New Roman and white space. Just to make sure we have everything ready to go, let's get `CSS` and `SASS` hooked up.  

First, let's modularize our code and create a couple new files and style sheets. Adjust your file structure to look something like this (this may also mean adjusting some of the ways you import your files):

```
/app
  /components
    /Header
      Header.js
      header-style.css
  index.js
  styles.css
/build
  index.html
/node_modules
.babelrc
package.json
webpack.config.js
```

Add a style rule or two into the `styles.css` file, then import that file into `index.js`.

```css
/*styles.css*/

body {
  background: red;
  color: white;
}
```

```js
// index.js

import React from 'react'
import { render } from 'react-dom'
import './styles';

// Existing code below
```

If you fire up your app now, it will blow up. Do it anyway and check out the error message:

```
Uncaught Error: Cannot find module "./styles"
```

Then you see

```
Module parse failed:....You may need an appropriate loader to handle this file type.
```

True! Using the loaders we have installed we've already told Webpack to bundle up our JS, but it doesn't know what to do when it sees CSS INSIDE our JS file. Let's fix this, and wire up SASS while we're at it.  

`npm i -D style-loader css-loader sass-loader node-sass`  


```
webpack.config.js
```

```js
// webpack.config.js  

loaders: [
  {
    test: /\.jsx?/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  { test: /\.css$/, loader: 'style!css' },
  { test: /\.scss$/, loader: 'style!css!sass' },
]
```

You might be asking yourself, why do we need 4(!) loaders just to get some SASS on the page? This is a valid question. Let's talk about it for a minute.  

First of all, loaders run from right to left. I like to think of them like CSS style rules - the most specific are on the right, where the more basic are on the left.  

If you look at the last loader we added, we are saying "Hey Webpack, grab the `sass-loader` and figure out what this SASS stuff is and compile it into CSS, then with your `css-loader` run through the css tree structure and put everything in order, then with the `style-loader` grab a `<style>` tag and pop it onto the DOM for me".   

The `sass-loader` and `css-loader` don't actually DO anything with the code itself - they just organize it and make sure it's in a readable format for the browser. The `style-loader` is the tool that actually puts the code onto the DOM.

Now add `'.css'` and `'.scss'` file extensions to the `resolve` line to save work for our future selves.  

Just to confirm both CSS and SASS are up and running, change the file extension to `styles.scss` and add some variables in there.  

Next, get the header up and running to use it's own mini style sheet.


```js
// components/Header/Header.js

import React from 'react';
import './header-style';

const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
    </div>
  );
}

export default Header;
```

Throw whatever style choices you want into the `header-style.css` file and watch the magic happen. (If you're not seeing any magic - make sure you've added the `<Header />` component to the `index.js` file.)  

## Testing

No app is safe without a test suite. For this boilerplate, for this boilerplate we'll be using Mocha, Chai, Enzyme, and Sinon (just in case).  

First things first, let's add a few lines of code to our `webpack.config.js` file.


```js
// webpack.config.js


// Other stuff happening above here
externals: {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
},
```

These lines simply help Enzyme navigate around our app more easily...which means we need to install Enzyme and a whole bunch of helpful tools to make things go smoothly.  

`npm i -D mocha chai jsdom sinon enzyme react-addons-test-utils css-modules-require-hook`

Finally, when we're ready to run the command `npm test` we need to make sure a few initial configuration settings happen first. This makes sure our testing tools are creating a realistic browser environment using `jsdom`. To do this, we will set up a helper file that gets fired up every time we run our test suite.

```
mkdir helpers
touch helpers/test-setup.js
```


```js
// helpers/test-setup.js  

require('babel-register')();

// HELP MOCHA HANDLE CSS MODULES

var hook = require('css-modules-require-hook')
var sass = require('node-sass')

hook({
  extensions: [ '.scss', '.css' ],
  generateScopedName: '[local]___[hash:base64:5]',
  preprocessCss: ( data, file ) => sass.renderSync({ file }).css
});

// SETUP JSDOM BUSINESS

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
```

Cool! Don't worry about what all that is doing at this time. All we need to know is that it jumps through a loophole to deal with importing modular style sheets, and also redefines the browser window to use `jsdom` instead which allows our testing libraries to crawl around and do their job(s).

Let's update our `package.json` script to tell our test command what to do when we run `npm test`:

```js
"scripts": {
  "start": "webpack-dev-server -d --watch",
  "test": "mocha -w --compilers js:babel-core/register --require helpers/test-setup.js app/**/*.spec.js"
},
```

This brings us to writing our first test.

```
touch app/components/Header/header.spec.js
```

```js
// header.spec.js


import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Header from './Header';

describe('<Header/>', function () {
  it('should display a single h1 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
```

Run `npm test`. That green check mark feels so good.  

Just to come full circle, let's implement `Sinon` so we know it works.  

Create a new Button component and add it to your Header component.

```
mkdir app/components/Button
touch app/components/Button/Button.js
```  

```js
// components/Header/Header.js  

import React from 'react';
import './header-style';

import Button from '../Button/Button';

const logStuff = () => {
  console.log("clicked!");
}

const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <Button handleClick={() => logStuff()} />
    </div>
  );
}

export default Header;
```

```js
// components/Button/Button.js

import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Click Me</button>
  );
}

export default Button;
```

Then write a new test in your spec file to trigger this new function.

```js
// components/Header/Header.spec.js

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import Header from './Header';
import Button from '../Button/Button';

describe('<Header/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should trigger our logStuff function', () => {
    const logStuff = sinon.spy()
    const wrapper = mount(<Button handleClick={logStuff} />);
    wrapper.simulate('click');
    expect(logStuff.calledOnce).to.equal(true);
  });
});
```

And you're off! 

## Resources  
- [6 Things You Should Know About Babel 6](http://jamesknelson.com/the-six-things-you-need-to-know-about-babel-6/)  
- [Setting Up Testing in React](https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha)
