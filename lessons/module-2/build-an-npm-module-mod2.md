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

## Reading

[Read this Gold Standard Level blog post by Joanne Daudier](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738)

Note: don't code along, that will come later

Note: don't worry about things you don't understand or recognize (i.e. mentions of Travis CI or Coveralls)

Note: as you read, prepare answers to the following discussion points

### Reading Discussion Points

- What is SemVer

- What is the difference between `npm install --save-prod` `npm install` `npm install -g` and `npm install --save-dev`
  - Why might it be _very important_ to use the `--save-prod` and `--save-dev` flags appropriately for an NPM package?

- Having read this blog, what steps might be missing for you to create your own node module and deploy it?

- What npm packages do you depend on? Have you ever looked at their source code?

- How might the fact that you don't control the version of the package that your users use affect your workflow?



## Cheatsheet

Relevant NPM commands

#### `link`

[docs](https://docs.npmjs.com/cli/link)

If you have a local directory containing an npm package, you can link this package locally. 

```
cd module-name
npm link
```

When you want to use a local linked package, you can do so with link

```
 mkdir newapp/
 cd newapp/
 npm link module-name
```

To unlink a package from an application:

```
cd newapp/
npm unlink module-name
```

To unlink a package from your system:

```
 cd module-name
 npm unlink
 ```

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

---


## Reading Discussion Point Answers

- SemVer stands for semantic versioning
- The `--save-dev` flag means that the dependency is only used by developers. The `--save` flag means that this dependency has to be used for the package to work in production. It really matters here. When people include your npm module in their `node_modules` folder, the dev dependencies won't come along for the ride. That's important, because number of lines of code matter for the speed of an application. If you completely omit the `--save` flag, then your npm module won't work when other folks pull it down.

---
<div id="do"></div>

## Set Up a Basic NPM Module

### Sign up for an NPM account

First you need to sign up for an NPM account over at [npmjs.org](https://npmjs.org). Remember the username you use to create an account - you'll need this later!

Also make sure you verify the email address that you sign up with. They will likely send you an email confirmation to verify.

### Create a new GitHub Repo

Create a new GitHub repo from the GitHub web UI to host your npm package. You can name it whatever you'd like. (Something like `fake-package` is just fine.) 

Make sure when you create your new GitHub repo you check the box that says 'Initialize this repository with a README', and add a `.gitignore` file. From the dropdown menu of pre-generated `.gitignore` files, choose 'Node'.

### Create the Package Directory

Create a new directory named after your new fancy node module (**USE lowercase and hyphens ONLY!**). It would make sense if it was named the same thing as your newly created GitHub repo. 

```
$ mkdir name-of-module
$ cd name-of-module
```

Next, you'll initialize this directory as a git repo:

```
$ git init
$ git remote add origin <github url>
```

Now let's add some files: 
* an index.js file to contain our code (more complex packages may use more than one file)
* A test folder with a test.js file in it

```
$ mkdir test
$ touch index.js test/test.js
```

Next we need to describe our package with a `package.json` file. Because we're not creating any revolutionary node modules that thousands of developers will use, we should namespace our module to ensure we don't take up any hot module names (i.e. don't name it `jquery-2`)

```
$ npm init --scope=username
```

Follow the instructions in your terminal to complete your `package.json` file. Some things to keep in mind:
* **Version:** think about what you read about [Semantic Versioning](http://semver.org/)
* **License:** ISC is fine, [but what is it?](http://semver.org/)

One more thing before we write the code for our module, we need to bring in `mocha` for testing and set up our test file:

```
$ npm i mocha -D
$ npm i chai -D
```

Fun facts!

`-D` is the same as `--save-dev`  
`-S` is the same as `--save`


In your `test.js` file include the following:

```
const chai = require('chai');
const expect = chai.expect;
```

In your `index.js` file include the following:

```
const bubbleSort = (array) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ]
      }
    }
  }
  return array;
};

module.exports = {
  bubbleSort
};
```

#### STOP!
**If** we were going to publish this, we'd do ...

  ```
  npm publish --access=public
  ```

  Log into your [npm account](https://www.npmjs.com) and see your published module live on the internets! To bring it into another project, all you have to do is `npm install your-module` and require it into any file where you need to use it. Voila! That's it! 

  Now unpublish your node module so we're not muddying up npm with a bunch of repetitive modules :). 

  ```
  npm unpublish --force
  ```

**But instead, we're going to do this:**

#### There's Another Way!

You can actually import modules/packaged code from GitHub repos. It's as easy as typing:

```
npm install [GitHub URL] -S
```

and then requiring a specific module in your js file as you would with any other module.

For this to work, make sure you are still bundling up your code with that `module.exports`.

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
    
