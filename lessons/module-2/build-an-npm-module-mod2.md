---
title: Build an NPM Module
length: 120 min
module: 2
tags: npm, node, package
---

## Goals

By the end of this lesson, you will know/be able to:

* Be equipped to break out chunks of code into seperate node modules
* Better understand the pros and cons of node modules
* Push a node module up to NPM 

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

## What is SemVer?

![SemVer](../../assets/images/lessons/build-an-npm-module/semver.png)
<!-- source https://viblo.asia/p/semver-and-tags-version-924lJMMmZPM -->

SemVer stands for Semantic Versioning. With Semantic Versioning a package's version is made up of three numbers seperated by periods. Each number is incremented when different types of changes are made to the package. The first number represents major changes which are not backwards compatible. The second number represents minor updates which are backwards compatible with previous versions. The last number represents patches or bug fixes to your repo. 

<!-- - Why is it _important_ to use the `--save-prod` and `--save-dev` flags appropriately for an NPM package? -->
- If you do not control the version of your package, how might that affect anyone who uses it as a dependancy?

## Set Up a Basic NPM Module

### Classroom Organization
We are going to split up into developers and users.

### DEVELOPER: Sign up for an NPM account

First you need to sign up for an NPM account over at [npmjs.org](https://npmjs.org). Remember the username you use to create an account - you'll need this later!

Also make sure you verify the email address that you sign up with. They will likely send you an email confirmation to verify.


### DEVELOPER: Create a new GitHub Repo

Create a new GitHub repo from the GitHub web UI to host your npm package. Name it sorting-algorithms

Make sure when you create your new GitHub repo you check the box that says 'Initialize this repository with a README', and add a `.gitignore` file. From the dropdown menu of pre-generated `.gitignore` files, choose 'Node'.

Clone this repo down and `cd` into it from your terminal

### Log into NPM

In your terminal type
```
npm login
```

### Create Some Files!

First we need to describe our package with a `package.json` file. Because we're not creating any revolutionary node modules that thousands of developers will use, we should namespace our module to ensure we don't take up any hot module names (i.e. don't name it `jquery-2`). Replace username in the following command with your npm username.

```
$ npm init --scope=npm_username
```

Follow the instructions in your terminal to complete your `package.json` file. Some things to keep in mind:
* **Version:** think about what you read about [Semantic Versioning](http://semver.org/)
* **License:** ISC is fine, [but what is it?](https://opensource.org/licenses/ISC)

Now let's add our project code. Create an index.js file to contain our code (more complex packages may use more than one file)

```
$ touch index.js
```

In your `index.js` file include the following:

```
function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ]
      }
    }
  }
  return array;
}

module.exports = {
  bubbleSort
};
```

Now that we have our functionality in place, add and commit your changes and push them up to github. 

### Add to NPM

We will briefly publish our package to NPM to see how easily it is done.

```
npm publish --access=public
```

Log into your [npm account](https://www.npmjs.com) and see your published module live on the internets! To bring it into another project, all you have to do is `npm install your-module` and require it into any file where you need to use it. Voila! That's it! 

Now unpublish your node module so we're not muddying up npm with a bunch of repetitive modules :). 

```
npm unpublish --force
```

For this to work, make sure you are bundling up your code with `module.exports`.


### USER: Install repo Github

Create a new folder for our test repo and cd into that folder.

`mkdir npm-test-repo && cd npm-test-repo`

Install your package

`npm install [GitHub URL] -S`

Create an index.js file

`touch index.js`

Add the following code to your index.js file

```js
const { bubbleSort } = require('@[username]/sorting-algorithms');

const sorted = bubbleSort([6, 3, 77, 32, 45]);

console.log(sorted);
```

In your terminal, run your index.js file using Node

`Node index.js`


### DEVELOPER: Update your package.json

Lets add a second sorting algorithm to our package.

Update your index.js file to the following:

```
function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ]
      }
    }
  }
  return array;
}

function quickSort (unsortedArray) {
  const left = [];
  const right = [];
  
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  
  const pivot = unsortedArray.pop();

  unsortedArray.forEach( number => {
    if (number < pivot) {
      left.push(number);
      
    } else {
      right.push(number)
    }
  })
  
  return [ ...quickSort(left), pivot, ...quickSort(right) ];
}

module.exports = {
  bubbleSort,
  quickSort
};
```

Add and commit your changes. Then update your version number 

```
npm version minor -m 'Add quickSort algorithm'
```

### USER: Install the Update

`npm install [GitHub URL] -S`

Update your index.js to use our new faster sorting method.

```js
const { quickSort } = require('@[username]/sorting-algorithms');

const sorted = quickSort([6, 3, 77, 32, 45]);

console.log(sorted);
```

## Cheatsheet

Relevant NPM commands

#### `addUser` or `login`

[docs](https://docs.npmjs.com/cli/adduser)

```
 npm adduser
 npm login
```

#### `publish` & `unpublish`

[docs](https://docs.npmjs.com/cli/publish)

```
 cd module-name
 npm publish
 npm unpublish module-name
```

`--access public` or `--access restricted` - flag to set as public

#### `scope`

[docs](https://docs.npmjs.com/misc/scope)

You can specify a scope for an NPM module to prevent naming collisions with other modules

#### `version`

[docs](https://docs.npmjs.com/cli/version)

Bump an npm version when you add relevant information or code

```
  npm version <versions> -m "message"
```

`version`: patch, minor, major, prepatch, preminor, premajor, prerelease

```
  npm version patch -m "Update Documentation"
```

This will bump your version automatically, and prepare to version.

Then:

```
  git push
  npm publish
```

## Outside Resources / Further Reading

- Watch Steve Kinney's [2016 talk](https://www.youtube.com/watch?v=MamP2wIquGQ)
  - And check out [the slides](https://speakerdeck.com/stevekinney/the-ins-and-outs-of-publishing-a-module-to-npm) here
- [NPM docs - How NPM works](https://docs.npmjs.com/how-npm-works/packages)
- [NPM cheatsheet](http://browsenpm.org/help)
- [Certified Modules](https://nodesource.com/blog/hello-certified-modules-the-future-of-trust-in-node-js-dependencies/) - How devs are trying to keep you and NPM itself safe
- [How one programmer broke the internet by deleting a tiny piece of code](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/)

---


## Reading Discussion Point Answers

- SemVer stands for semantic versioning. With Semantic Versioning a package's version is made up of three numbers seperated by periods. e.g. (9.7.0) Each number is incremented when different types of changes are made to the package. The last number 0, represents patches or bug fixes to your repo. The second number (7) represents minor updates which are backwards compatible with previous versions. The first number (9) represents major changes which are not backwards compatible.

- The `--save-dev` flag means that the dependency is only used by developers. The `--save` flag means that this dependency has to be used for the package to work in production. It really matters here. When people include your npm module in their `node_modules` folder, the dev dependencies won't come along for the ride. That's important, because number of lines of code matter for the speed of an application. If you completely omit the `--save` flag, then your npm module won't work when other folks pull it down.

---


--------
## tl;dr
#### In the file you are packaging up into a module:
  1. Use `module.exports` to export the relevant functionality from your files.
  2. Use `require()` with the relative filepath to import the significant functionality into the `index.js` file.
  3. Use `module.exports` to export the functionality from the `index.js` file.
  4. In the `package.json` file, make sure it includes a `"name"` property set to
       `"@yourusername/your-project-name"`
  5. In the `package.json` file, make sure it includes a `"main"` property set to the filepath of your
       `"index.js"`
  6. Add and commit your changes, push up to GitHub.
  
#### In the project you want to use the module in:
  1. Run `npm install [THE URL OF THE MODULE'S GITHUB REPO]` + the appropriate flag
       `--save-prod` or `--save-dev`
  2. In whatever file you wish to use the module in, import it in
       `import [NAME OF MODULE] from '@yourusername/your-project-name'`
         OR
       `const [NAME OF MODULE] = require('@yourusername/your-project-name')`
       _NOTE: if this project will ALSO be turned into a module, use the `module.exports/require` syntax!_
  3. Use your module and bask in the glow of keeping your project lean by importing in functionality!
  
  
#### If you need to update your module:
  1. Update your module!
  2. Update the version number in your `package.json`
  3. Add, commit, and push your changes to GitHub
  4. In the project where you are using your module:
    a) Delete the `package-lock.json` file
    b) Run `npm install [THE URL OF THE MODULE'S GITHUB REPO]` + the appropriate flag
       `--save-prod` or `--save-dev`
    c) Open up the `node_modules`, find the module, and check that the module has been updated
    
