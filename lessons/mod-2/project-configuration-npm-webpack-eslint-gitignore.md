---
title: Configuring Your Projects
length: 60 minutes
tags: javascript, webpack, eslint, npm, gitignore
---

# Configuring Your Projects
Adding dependencies, bundling your JavaScript files with Webpack, adding style loaders writing npm scripts, linting your code, preventing files from being added to github ... This lesson will begin to draw back the veil on these mysteries!

---

## NPM basics
[Lesson slides with an exercise](https://docs.google.com/presentation/d/1DLcitTaOS0sOYrooIEa8iD92HWFU-EDHHwRbXCT15-w/edit?usp=sharing)

[NPM documentation](https://docs.npmjs.com/)

#### What is NPM?
**N**ode **P**ackage **M**anager

A **package** is a bit of reusable code!
- usually solves a single problem
- SOMEONE wrote it and shared it
- makes your life easier

You can write your own packages, bundle them up, and publish them (either on the [NPM library](https://www.npmjs.com/) or on GitHub) for other devs to use!

Why do we use packages? Think about your previous projects. You've probably used some packages (jQuery, mocha, chai, moment.js, etc). These packages provide us with additional functionality, or solve a problem so we don't have to. They reduce the bulk of our code. As complicated as node packages can be to understand at first, it is still easier to do than to not use any packages in our projects!

NPM is a **manager**; it includes a set of tools that let you use and control node packages. Using it, you can:
- install packages into your project as dependencies (aka, code that your project _depends_ on)
- create custom scripts to run code
- specify specific packages to use when deploying your app to production
- and more

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

This is pretty ugly to look at. Let's break it down. The package.json is just meta data about our installed packages. It can be helpful to think of the `package.json` as the recipe for our app.

**dependencies (production)**:
We're listing what ingredients we need for the app to run: we need express, and we need version 4.15.3 or any version compatible with 4.15.3.
(You can read up on the what the symbols by the package version numbers mean [here](https://docs.npmjs.com/files/package.json#dependencies), and learn a bit about what the version numbers themselves even mean [here](https://semver.org/).)

To install a package as a production dependency:
`npm install [PACKAGE NAME OR GITHUB URL] --save-prod`
Note: the `--save-prod` flag is optional; the latest version of npm will save any packages installed with npm install under dependencies automatically. It's still a good idea to use the flag when installing.

When you install a package this way, a new key-value pair with that package's information will be added to the `"dependencies"` object for you.

**devDependencies (development)**:
Some of our ingredients won't end up in the cake that users eat, but they're important tools that chefs will need in order to work on our app - like our testing libraries, mocha and chai. The end user of an app will not need to have mocha and chai on their computers, since they will never be running the testing suite of the app. We designate those libraries as `devDependencies` because they are packages that only developers working on the app will use.

To install a package as a development dependency:
`npm install [PACKAGE NAME OR GITHUB URL] --save-dev`
Note: you **must** use the `--save-dev` flag. Otherwise, the dependency will be installed as a production dependency.

When you install a package this way, a new key-value pair with that package's information will be added to the `"devDependencies"` object for you.

**`scripts`**:
Our `package.json` recipe also has instructions. The `scripts` object has a key of `"test"` whose value is `"./node_modules/mocha/bin/mocha --timeout 5000"`.

We're creating a shortcut; we can now run `npm test` in our terminal, and it is equivalent to running `npm run ./node_modules/mocha/bin/mocha --timeout 5000` in the terminal, but obviously much shorter and easier for us.

We're able to create any scripts. One thing to be aware of: scripts named `start` or `test` are so ubiquitous that they can be run in the terminal by simply typing in `npm start` and `npm test`. For **any other script**, however, you must add the keyword `run` into the terminal command.

For example, if you create a script called `deploy`, to run that script in the terminal, you must type `npm run deploy`.

Note: you can always edit the `package.json` file manually! Just go in there and create key value pairs to your heart's content!

Another note: Additional reading about the `package-lock.json` file [here](https://docs.npmjs.com/files/package-lock.json). It is a log of snapshots of your dependency tree. It ensures that a team or production build is using the exact same dependencies, and is also a log that allows you to "time travel" into earlier versions of the dependency tree.

---

## Webpack Basics
[Webpack 'Getting Started' documentation](https://webpack.js.org/guides/getting-started/)

[Webpack intro blog post](https://blog.envylabs.com/getting-started-with-webpack-2-ed2b86c68783)

What is webpack? In the simplest terms, webpack is a compiler that takes multiple JavaScript modules and bundles them up into a single, unified file.

What is the point of something like this? There are a lot of reasons:
- We can split our JS into separate files for organization, readability, and maintainability.
    - Think about your GameTime project and how many different JS files you have - imagine writing all of your code in a single file!
- Webpack works through our dependencies (which, as we just learned, are simply pacakges of JS we've imported into our projects) and adds them into our bundled-up code, exactly where we need it.
- By bundling all of our JS into a single file, the browser only needs to request, wait for, and process through one file.
    - Otherwise, it would have to request every single individual dependency and JS file!
    - Network requests are expensive (they take a long time), which slows down the app and makes for a poor user experience.
- We can even turn our HTML and CSS files into bundle-able JS modules by using loaders, further reducing the number of files the browser has to request and process.

[This](https://webpack.js.org/concepts/) is a great high-level overview of the core concepts of webpack. For now, we're just going to go over a very basic introduction on how to configure webpack.

Here is the `webpack.config.js` file from the [tdd](https://github.com/turingschool-examples/tdd) repo:
```
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: ['babel-polyfill', 'mocha!./test/index.js'],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  }
};
```

Let's focus on the `loaders` key-value pair inside the `module` object. You can read more about loaders [here](https://webpack.js.org/concepts/#loaders).

Loaders transform different non-JS code into valid JS modules so they can be included when webpack bundles everything up into a single file for the browser. Loaders have two parts: an npm module, and adding an object to the `webpack.config.js` file.

Let's walk through how the `css-loader` was added to the react starter kit repo.

1. The css-loader package was installed: `npm install css-loader --save-dev`
    - It also probably required the `style-loader` package to be installed, too.
2. In the `webpack.config.js` file, we added `{ test: /\.css$/, loader: 'style!css' }` to the `loaders` array.

That's it! But what is that object doing?

The regular expression inside the object looks for all files whose extension is `.css` and identifies them as code to be transformed into a JS module, using the style- and css- loader npm packages.

When we run webpack, it transforms the css files into JS modules, which are then bundled together with the rest of our JS into a single file, `bundle.js` (as specified in the `output` section of the `webpack.config.js` file!).

In the HTML of the project, we point our `<script>` tag to `"bundle.js"`, so it references the all-neatly-bundled-up JS file that webpack made for us!

---

## eslint Basics
[eslint 'Getting Started' documentation](https://eslint.org/docs/user-guide/getting-started)

Linting is checking code for consistency and synctactical cleanliness. It can also help us spot things like redundant or extraneous code (e.g. variables we declare but never use, etc). We use [eslint](https://eslint.org/) in our projects.

What are the benefits of consistent code?
- It's easier to read
- It reduces the chances of syntax errors
- A consistent style makes it easier to begin understanding and writing code in an unfamiliar project

To set up eslint, follow these steps:

1. Install eslint:
    - Globally on your machine: `npm install -g eslint`
    - Locally in your repo: `npm install --save-dev eslint`
    - Locally in your repo with babel: `npm install --save-dev babel-eslint`
2. Create an eslint file in your repo: `touch .eslintrc`
3. In that file, add this code:

   ```
   {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
    "es6": true
  },
  // Having a problem with one of these rules? Learn more about it here: https://eslint.org/docs/rules/
  "rules": {
    "eqeqeq": ["error", "always"],
    "getter-return": ["error", { "allowImplicit": true }],
    "indent": ["warn", 2],
    "no-template-curly-in-string": "error",
    "semi": ["error", "always"]
  },
  "globals": {
    "expect": true
  }
}
```
4. In the `scripts` object of the `package.json` file in your repo, add this key-value pair:
    ```
    "eslint": "./node_modules/eslint/bin/eslint.js ./lib/*.js"
    ```
5. To lint your code, in the terminal, run `npm run eslint`.
6. It will output a list of all errors and warnings to be corrected in the code, including the file and line in which the errors are found.

Read up on more linting rules [here](https://eslint.org/docs/rules/), and configuring the eslint file [here](https://eslint.org/docs/user-guide/configuring).

---

## .gitignore Basics
[gitignore documentation](https://git-scm.com/docs/gitignore)

[github documentation on ignoring files](https://help.github.com/articles/ignoring-files/)

Sometimes we don't want to commit files from our repos to git. Fortunately for us, we can create a `.gitignore` file.

1. In your repo, add a `.gitignore` file: `touch .gitignore`
2. In that file, add the filepaths of the directories or files we don't want added to github.

That's it! It's that easy.

Common things to add to your `.gitignore` file are:
- dependencies directories
- log files
- files generated by compilers
- API keys, other sensitive data
    (note: there are better ways to obscure and protect data that will be covered in Mod 4)

An example `.gitignore` file might look like:
```
# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
```

The lines beginning with `#` are simply comments that make it easier to navigate and maintain the `.gitignore` file. Notice that the contents of the file are filepaths. Any file with `/node_modules` in its filepath will not be added, committed, or pushed to github.
