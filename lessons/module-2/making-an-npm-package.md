---
title: Building an NPM module
length: 120 min
module: 2
tags: npm, node, package
---

### What is an NPM module

NPM modules are snippets of reusable javascript code which have been packaged up so other developers can easily install and use them.

Let's look at a simple example  
[arr-flatten](https://github.com/jonschlinkert/arr-flatten)

Let's look at a more complex example  
[colors](github.com/Marak/colors.js)


### SemVer
Read about semver and why it is important

Reading

Read this Gold Standard Level blog post by Joanne Daudier

Note: don’t code along, that will come later

Note: don’t worry about things you don’t understand or recognize (i.e. mentions of Travis CI or Coveralls)

Note: as you read, prepare answers to the following discussion points

Reading Discussion Points

What is SemVer?

What is the difference between  
`npm install --save-prod`  
`npm install`  
`npm install -g`   
and  
`npm install --save-dev`?  

Why might it be very important to use the --save-prod and --save-dev flags appropriately for an NPM package?

Having read this blog, what steps might be missing for you to create your own node module and deploy it?

What npm packages do you depend on? Have you ever looked at their source code?

How might the fact that you don’t control the version of the package that your users use affect your workflow?

### Create a NPM Module

We will create a NPM package that generates a random array of numbers.

##### Make a new directory
`mkdir gen-random && cd gen-random`

##### Initialize our npm package
Next we need to describe our package with a package.json file. Because we’re not creating any revolutionary node modules that thousands of developers will use, we should namespace our module to ensure we don’t take up any hot module names (i.e. don’t name it jquery-2)  

`npm init --scope=username`

Follow the instructions in your terminal to complete your `package.json` file. Some things to keep in mind:

* **name:** the default will be `@username/project-name`, you need to change "@username" to be your npm account username (if you do not have a npm account name use your github username)
* **Version:** think about what you read about [Semantic Versioning](http://semver.org/)
* **License:** ISC is fine, [but what is it?](http://semver.org/)

##### Create basic structure of our package

We'll want to add some files:  
 
* A README.md to explain how to set up and use our module
* an index.js file to organize our code
* and a gen-random-numbers.js file to hold our actual code

`touch README.md index.js`  
`mkdir lib && touch lib/gen-random-numbers.js`

copy this code into your gen-random-numbers file  

```js
// lib/gen-random-numbers.js

function generateRandomNumbers( count, maxVal ) {
  const array = [];
  
  for (let i = 0; i < count; i++) {
    array.push(parseInt(Math.random() * maxVal));
  }
  
  return array;
}

module.exports = generateRandomNumbers;
```
If we look in our package.json file we will see that our entry point or main file is our `index.js` file. 

In our index.js file we will import our random number generator and export it. Later we might want to create a random letter generator and export it here as well.

```js
// index.js
const generateRandomNumbers = require('./lib/gen-random-numbers.js');

module.exports = {
  generateRandomNumbers
}
```

### Publish to github
Go to github and create a new repository for your repo. Follow the directions to push up your repo. They should look similar to the following.

`git init`  
`git add .`  
`git commit -m "first commit"`  
`git remote add origin <repository url>`  
`git push -u origin master`

### Using your package
Now that our package is on github we can install it into other projects using `npm install`. 

First lets create a new project using our TDD boilerplate

`git clone https://github.com/turingschool-examples/tdd && cd tdd`

Install package dependencies  
`npm install`  

Install generate random numbers package  
`npm install --save <package github url>`  

Open your test file and add an import for your package  
`import { generateRandomNumbers } from '@<username>/gen-random`

Now lets add a test just to make sure our package is working.

```
it('should generate random numbers', () => {
  let array = generateRandomNumbers(500, 4000);

  expect(array.length).to.equal(500);
})
```
Note: typically you should not write tests for imported packages. The packages should contain there own tests.

### Updating package
Bump an npm version when you add relevant information or code

`npm version <versions> -m "message"`

version: patch, minor, major, prepatch, preminor, premajor, prerelease

if your current version is 1.0.0, the following commands will update the version for you automatically

1.0.0 --> 1.0.1  
`npm version patch -m "Update Documentation"`

1.0.0 --> 1.1.0  
`npm version minor -m "Update Documentation"`

1.0.0 --> 2.0.0
`npm version major -m "Update Documentation"`

#### Updating gen-random

Lets update our package to also have a function to generate arrays of random letters.

- Create generate-random-letters.js file
- Add function to file  

```
function generateRandomLetters (count) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let array = [];
  
  for (let i = 0; i < count; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    
    array.push(letters[letterIndex]);
  }
  
  return array;
}

module.exports = generateRandomLetters;
```

- import into our index.js file
- update our package version
- push to github
- npm update our tdd repo