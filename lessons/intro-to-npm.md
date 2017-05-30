---
title: NPM Basics
length:
tags: npm
---

## npm config list
Show install location of Node


## npm install
Install the dependencies in the local node_modules folder.
By default, npm install will install all modules listed as dependencies in package.json.


## npm install [-npm-module]
e.g.
`npm install cows`
Package will be installed locally


## npm install -g [-npm-module]
e.g.
`npm install -g cows`
Package will be installed globally

global packaged typically installed in `/usr/local/lib/node_modules`


## npm install --save
e.g.
`npm install cows --save`
Package will appear in your package.config > dependencies
Good for production js files (e.g. jquery, angular, react…)


## npm install --save-dev
e.g.
`npm install cows --save-dev`
Package will appear in your package.config > devDependencies
Good for development environment tools (e.g. webpack, sass, selenium-webdriver)


## npm start
This runs an arbitrary command specified in the package's "start" property of its "scripts" object. If no "start" property is specified on the "scripts" object, it will run node server.js.


## npm build
This is the plumbing command called by npm link and npm install.


## npm test
This runs a package's "test" script, if one was provided.


## npm run [-script]
Shortcut for npm run-script
runs an arbitrary command from a package's "scripts" object. If no "command" is provided, it will list the available scripts.
