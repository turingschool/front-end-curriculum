---
title: Configuring Your Projects
length: 90 minutes
tags: javascript, webpack, eslint, npm, gitignore, config, configuration, configure
---

# Configuring Your Projects

Adding dependencies, bundling your JavaScript files with Webpack, adding style loaders writing npm scripts, linting your code, preventing files from being added to github ... This lesson will begin to draw back the veil on these mysteries!

In this lesson, we will hand-roll the repo that we'll use for our Sorting Suite and Complete Me projects.

## Pre-lesson Homework

1. Create a directory named `TDD`
2. Create a sub-directory called `lib`
3. Create two files: `lib/index.js` and `README.md`
4. Initialize git and push your project to GitHub (hint: you can use [this lesson](http://frontend.turing.io/lessons/module-1/git-and-github-part2.html) from Mod 1)

---

## NPM
[NPM basics: slides with an exercise](https://docs.google.com/presentation/d/1DLcitTaOS0sOYrooIEa8iD92HWFU-EDHHwRbXCT15-w/edit?usp=sharing)

[NPM documentation](https://docs.npmjs.com/)

#### What is NPM?
**N**ode **P**ackage **M**anager

A **package** is a bit of reusable code!
- usually solves a single problem
- SOMEONE wrote it and shared it
- makes your life easier

You can write your own packages, bundle them up, and publish them (either on the [NPM library](https://www.npmjs.com/) or on GitHub) for other devs to use!

Why do we use packages? Think about your previous projects. You've probably used some packages (jQuery, mocha, chai, moment.js, etc).  These packages solve a problem and help us from having to reinvent the wheel. They also reduce the bulk of our code.

NPM is a **manager**; it includes a set of tools that let you use and control node packages. Using it, you can:
- install packages into your project as dependencies (aka, code that your project _depends_ on)
- create custom scripts to run code
- specify specific packages to use when deploying your app to production

You are so far pretty familiar with cloning down a repo, changing into the directory, and running `npm install`. Let's unpack what's happening when you do that!

### package.json
[package.json documentation](https://docs.npmjs.com/files/package.json)

The `package.json` file is created when we initialize npm in a repo (the terminal command is `npm init`). It keeps track of our dependencies, lets us write npm scripts, and is the instruction manual NPM follows when we run `npm install`.

Let's take a look at an example `package.json` file:

```
{
  "name": "Super Rad App Name",
  "version": "1.0.0",
  "description": "It does super rad stuff",
  "main": "index.js",
  "dependencies": {
    "express": "^4.15.3",
    "knex": "^0.13.0",
    "node": "6.11.1",
    "pg": "^6.4.0"
  },
  "devDependencies": {
    "chai": "^4.0.2",
    "mocha": "^3.4.2"
  },
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha --timeout 5000"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/letakeane/SuperRadApp.git"
  },
  "keywords": ["rad", "super"],
  "author": "Leta Keane",
  "license": "ISC"
}
```

Take a minute to look over this. What's familiar? What's confusing?

Let's break this down. The package.json is just meta data about our installed packages. It can be helpful to think of the `package.json` as the recipe for our app.

#### dependencies (production):

We're listing what ingredients we need for the app to run: we need express, and we need version 4.15.3 or any version compatible with 4.15.3.
(You can read up on the what the symbols by the package version numbers mean [here](https://docs.npmjs.com/files/package.json#dependencies), and learn a bit about what the version numbers themselves even mean [here](https://semver.org/).)

To install a package as a production dependency:
`npm install [PACKAGE NAME OR GITHUB URL] --save-prod`
Note: the `--save-prod` flag is optional; the latest version of npm will save any packages installed with npm install under dependencies automatically. It's still a good idea to use the flag when installing.

When you install a package this way, a new key-value pair with that package's information will be added to the `"dependencies"` object for you.

#### devDependencies (development):

Some of our ingredients won't end up in the cake that users eat, but they're important tools that chefs will need in order to work on our app - like our testing libraries, mocha and chai. The end user of an app will not need to have mocha and chai on their computers, since they will never be running the testing suite of the app. We designate those libraries as `devDependencies` because they are packages that only developers working on the app will use.

To install a package as a development dependency:
`npm install [PACKAGE NAME OR GITHUB URL] --save-dev`
Note: you **must** use the `--save-dev` flag. Otherwise, the dependency will be installed as a production dependency.

When you install a package this way, a new key-value pair with that package's information will be added to the `"devDependencies"` object for you.

#### scripts:

Our `package.json` recipe also has instructions. The `scripts` object has a key of `"test"` whose value is `"./node_modules/mocha/bin/mocha --timeout 5000"`.

We're creating a shortcut; we can now run `npm test` in our terminal, and it is equivalent to running `npm run ./node_modules/mocha/bin/mocha --timeout 5000` in the terminal, but obviously much shorter and easier for us.

We're able to create any scripts. One thing to be aware of: scripts named `start` or `test` are so ubiquitous that they can be run in the terminal by simply typing in `npm start` and `npm test`. For **any other script**, however, you must add the keyword `run` into the terminal command.

For example, if you create a script called `deploy`, to run that script in the terminal, you must type `npm run deploy`.

_Note: you can always edit the `package.json` file manually! Just go in there and create key value pairs to your heart's content!_

_Another note: Additional reading about the `package-lock.json` file [here](https://docs.npmjs.com/files/package-lock.json). It is a log of snapshots of your dependency tree. It ensures that a team or production build is using the exact same dependencies, and is also a log that allows you to "time travel" into earlier versions of the dependency tree._

#### Common NPM Commands

#### - `npm init` and optionally `npm init --yes`

 Initializes npm and creates the `package.json` file. If run without the `--yes` flag, it will run you through a dialogue designed to help customize the `package.json` file. The file can always be edited and updated at any point.

#### - `npm install`

 Install package dependancies and devDependencies listed in `package.json`

#### - `npm install [package-name]`

 Install package locally in folder location `node_modules`

#### - `npm install -g [package-name]`

 Install package globally, usually to `/usr/local/lib/node_modules`

#### - `npm install --save [package-name]`

 Install package locally in folder location `node_modules` and update `package.json` dependancies

#### - `npm install --save-dev [package-name]`

 Install package locally in folder location `node_modules` and update `package.json` developer dependancies

#### - `npm start`

 Run start script located in `package.json`

#### - `npm test`

 Run test script located in `package.json`

#### - `npm run [custom script]`

 Run custom script located in `package.json`


### In your TDD repo:

- Run `npm init --yes` to create the `package.json` file.
- Edit the `scripts` portion of the `package.json` file:

    ```
    "test": "./node_modules/mocha/bin/mocha",
    "start": "webpack"
    ```
- Install the following dev dependencies:
  - mocha
  - chai
  - eslint
- Install the following dependencies:
  - webpack
  - style-loader
  - css-loader

---

## Webpack Basics
[Webpack 'Getting Started' documentation](https://webpack.js.org/guides/getting-started/)

[Webpack intro blog post](https://blog.envylabs.com/getting-started-with-webpack-2-ed2b86c68783)

### What is Webpack?

Webpack is a build tool that takes multiple JavaScript modules and bundles them up into a single, unified file.

### Why Do We Like It?

While webpack can be difficult to understand at first, it makes our lives much easier.

- We can organize our code into separate files. This makes it easier to find specific pieces of code and improves maintainability.
    - Think about your GameTime project and how many different JS files you have - imagine writing all of your code in a single file!

- Webpack creates a unique scope for each our files, helping to prevent adding things to the global and naming collisions.

- By bundling all of our JS into a single file, the browser only needs to request, wait for, and process through one file.

    - Otherwise, it would have to request every JS file and individual dependency!

    - Network requests are expensive (they take a long time), which slows down the app and makes for a poor user experience.

- We can even bundle up our HTML and CSS files by using loaders, further reducing the number of files the browser has to request and process.

### Configuring Webpack

[Core Webpack Concepts](https://webpack.js.org/concepts/)

[Configuring Webpack](https://webpack.js.org/configuration/)

Here is the `webpack.config.js` file from the [gametime](https://github.com/turingschool-examples/game-time-starter-kit-FEm1) repo:

```
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};
```

#### devtool
This provides a map of our bundled code, so that when we run into errors it will tell us in the console where the error is in our pre-bundled code.

#### entry
This is where webpack will start bundling up our app. It should be the entry point to your application.

#### output
This defines where where webpack will create your bundled code and what it will name the file.

#### loaders
Let's focus on the `loaders` key-value pair inside the `module` object.

Loaders transform different non-JS code into valid JS modules so they can be included when webpack bundles everything up into a single file for the browser.

Loaders have two parts: an npm module, and a configuration object which is added to the `webpack.config.js` file.

Let's walk through how the `css-loader` was added to the react starter kit repo.

1. Install the style and css loaders
`npm install style-loader css-loader --save-dev`
2. In the `webpack.config.js` file, we add our configuration object

```
{
  test: /\.css$/,
  exclude: /node_modules/,
  loader: 'style-loader!css-loader'
}
```

That's it! But what is that object doing?

The regular expression inside the object looks for all files whose extension is `.css` and identifies them as code to be transformed into a JS, using the style-loader and css-loader npm packages.

When we run webpack, it transforms the css files into JS modules, which are then bundled together with the rest of our JS into a single file, `bundle.js` (as specified in the `output` section of the `webpack.config.js` file!).

You can read more about loaders [here](https://webpack.js.org/concepts/#loaders).

#### Using Our Bundled File

In the HTML of the project, we point our `<script>` tag to `"bundle.js"`, so it references the all-neatly-bundled-up JS file that webpack made for us!

### In your TDD repo:

1. Create a new file: `webpack.config.js`
2. Create a new directory: `test`
3. Create a new file: `test/index-test.js`
4. Paste the following code to the webpack.config.js file:

  ```
  const path = require('path');

  module.exports = {
    devtool: 'inline-source-map',
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
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.css']
    }
  };
  ```
  
5. In the index-test.js file, let's require chai:

  ```
  const chai = require('chai');
  const assert = chai.assert;
  ```
  
6. In the index-test.js file, let's write one test to see that mocha and chai are properly hooked up:

  ```
  describe('test', function() {
    it('should return true', function() {
      assert.equal(true, true);
    });
  });
  ```
  
7. In your terminal, run `npm test`

---

## ESLint Basics
[eslint 'Getting Started' documentation](https://eslint.org/docs/user-guide/getting-started)

Linting is checking code for consistency and synctactical cleanliness. It can also help us spot things like redundant or extraneous code (e.g. variables we declare but never use, etc). We use [eslint](https://eslint.org/) in our projects.

What are the benefits of consistent code?

- It's easier to read
- It reduces the chances of syntax errors
- A consistent style makes it easier to begin understanding and writing code in an unfamiliar project

### In your TDD repo:

1. Create a new file in your repo: `.eslintrc`
2. In that file, add this code:

    ```
    {
      "extends": "eslint:recommended",
      "env": {
        "browser": true,
        "mocha": true,
        "node": true,
        "es6": true
      },
      "parserOptions": {
        "sourceType": "module"
      },
      // Having a problem with one of these rules? Learn more about it here: https://eslint.org/docs/rules/
      "rules": {
        "brace-style": "error",
        "comma-spacing": [
          "warn", {
            "before": false,
            "after": true
          }
        ],
        "curly": "error",
        "eqeqeq": ["error", "always"],
        "getter-return": ["error", { "allowImplicit": true }],

        "indent": ["warn", 2],
        "key-spacing": [
          "error", {
            "beforeColon": false,
            "afterColon": true
          }
        ],
        "keyword-spacing": [
          "error", {
            "before": true,
            "after": true
          }
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "max-len": [
          "error",
          80
        ],
        "new-cap": [
          "error", {
            "newIsCap": true
          }
        ],
        "newline-after-var": [
          "error",
          "always"
        ],
        "no-template-curly-in-string": "error",
        "object-shorthand": [
          "error",
          "always"
        ],
        "semi": ["error", "always"],
        "semi-spacing": [
          "error", {
            "before": false,
            "after": true
          }
        ],
        "space-before-blocks": [
          "error", {
            "functions": "always",
            "keywords": "always",
            "classes": "always"
          }
        ],
        "space-infix-ops": [
          "error", {
            "int32Hint": false
          }
        ]
      },
      "globals": {
        "expect": true
      }
    }
    ```
    
3. In the `scripts` object of the `package.json` file in your repo, add this key-value pair:

    ```
    "eslint": "./node_modules/eslint/bin/eslint.js ./lib/*.js"
    ```
    
4. In the terminal, run `npm run eslint`
  - It will output a list of all errors and warnings to be corrected in the code, including the file and line in which the errors are found.

### Learn More
[Linting Rules](https://eslint.org/docs/rules/)

[Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

---

## .gitignore Basics
[gitignore documentation](https://git-scm.com/docs/gitignore)

[github documentation on ignoring files](https://help.github.com/articles/ignoring-files/)

.gitignore is a file we can add to any git repo. This file contains filepaths and types of files we do not want to add to our git repo.

Common things to add to your `.gitignore` file are:
- dependency directories
- log files
- files generated by compilers
- API keys, other sensitive data
    (note: there are better ways to obscure and protect data that will be covered in Mod 4)

### In your TDD repo:

1. Create a new file: `.gitignore`
2. In that file, add the filepaths of the directories or files we don't want added to github.

That's it!

An example `.gitignore` file might look like:

```
# dependencies
/node_modules

# production
/build

# misc
.DS_Store
.env
APIkey.js

# logs
*.log
```

The lines beginning with `#` are simply comments that make it easier to navigate and maintain the `.gitignore` file. Notice that the contents of the file are filepaths. Any file with `/node_modules` in its filepath will not be added, committed, or pushed to github. If we want to ignore an entire type of file we can use the `*` to indicate all, and then follow it with the file extension we want to ignore.
