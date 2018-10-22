---
title: Build Processes with NPM and Webpack
length: 90
tags: npm, webpack, build processes
module: 2
---

## Build Processes with NPM & Webpack

### Learning Goals

By the end of this lesson, students should be able to:

* Define packages and modules
* Articulate why package managers exist as well how they are helpful to developers

### Warm Up

In your journal, pretend you're asked the following question on a technical interview:

- What is a package or module in NPM? What is the difference?

## NPM

<!-- npmjs.org documentation--> 
<!-- command line tool for npm install and npm init -->

Up until now, you have not had to deal with build processes or worry much about NPM since you've been building out pretty basic applications. From this point forward, you will be seeing a lot of build processes, so it's important that you have a high-level understanding of what is happening behind the scenes.


When need to clarify and build on some of the things that you already know
- Introduce this now because you will see a lot of these build processes going forward... infinite amount of stuff in your repo - lots of things happening behind the scenes

Why do we need all of these things???

Then you can be more comfortable jumping into other codebases that have these types of things


### What is NPM?

* What is a package or module? Why do they exist?
* What is a package manager? Why do they exist?

Per the documention:
* A package is a file or directory that is described by a package.json. This can happen in a bunch of different ways! For more info, see "What is a package?, below.
* A module is any file or directory that can be loaded by Node.js' require(). Again, there are several configurations that allow this to happen. For more info, see "What is a module?", below.

Package/module: a small piece of independent and reusable code that solves a problem for developers. 

Node Package Manager: 


It's hard to come up with definitons for things. We've talked about modular code and we've been working with packages since mod 1

- Small piece of independent and reusable code => definition 

Examples of packages we have installed so far
- mocha
- chai
- eslint
- jquery (version of it that is just a JS fiel that makes it a library; however, you can include this as a package with npm install. This is the packaged version of the jquery library)

 Mocha and chai allowed all of us to test our codebases. Difference between a oacjage and method on a class => packages solve a problem for all developers. A method just solves a problem for the one developer. Package makes it so any dev who wants  to use it to incorporate it into their project.

The number of packages you install will destroy your computer. 

What is NPM? -----> Node Package Manager


#### Turn and Talk
Before we talk about this sccccchtuffff, here are some articles to read based on your assinged numner. Write down anything that seems like a useful piece of information for defining what NPM is. Anything that is confusing and stands out

1. https://medium.freecodecamp.org/javascript-package-managers-101-9afd926add0a (stop when you get to ‘flat vs. nested dependencies’)
2. https://spring.io/understanding/javascript-package-managers (stop when you get to ‘using JS package managers’)
3. https://docs.npmjs.com/getting-started/what-is-npm (stop when you get to ‘where do I start?’)
4. https://www.codecademy.com/articles/what-is-node (stop when you get to “why node”)

- How is this different from GitHub??? => Good question to ask students as part of the turn and talk. (Your code will only serve you whereas npm packages allow for others to use your code)

- Node ecosystem kept the same as the FE dev system
- Gives you the ability to publish your work/access the work of others
- Packages are a little more general - they solve general problems for developers
- Bower allows you to install packages to anything FE 

- Pacakages within NPM are more strictly related to code that you are running on a server or in  your terminal (good segue into the next section)

(Spies - were an additional piece of code tha twe used to adapt the chai paca)


Definition: NPM: A centralized place to publish your work and access the work of others


### Working with NPM
    * Init
    * Installations: —save, —save-dev, —global
    * Examining the package.json file


Code Along portion
```bash
mkdir foo
cd foo
npm init


```

Anatomy of a package json

Fill out the package json file
name - jeopardy
version 1.0.0
desc: this is a jeopardy game
entry point : index.js
test command: mocha test.js
git repo: (url for git repositry)
authors: your name and the other people working on the project
license: ISC

Package jsons track dependencies - but it also allows you to set metadata that describes your project


npm init 
* Install npm packages
create package yourself

The require is what allows to bring in these modules

If someone has a suggestion, they can set up a PR on that person's PR to improve the package


https://docs.npmjs.com/getting-started/installing-npm-packages-globally
https://docs.npmjs.com/cli/install

<!-- 
    Turn and Talk should include:
Installation and the flags that you are using are important to know... Know that you can add commands for whatever you want to run.
 -->

## Servers

In your journal:
- What is an HTTP server?
- What is the difference between client-side and server-side?

Client-side
Code that runs after the webpage is loaded

Server-side
Code that run before a page is loaded
Very specific to fetching files
This more for mod4
Going into a DB and grabbing any application data that is needed to present that data to the user.
Resource identification


HTTP server/webserver
Hypertext transfer protocol
Implementation of that in software

Program that serves information to users that are reqesting it via HTTP 

A server is a computer or a program that handles sending/receiving resources to a client (the client is the browser)

Files are the resources that we need
The server sees what kind of resources exist and then it's sent to the browser for everything that is needed.

* What is a server?
* Benefits of using a server?
    * Allows us to run our app in an environment that behaves more like the real internet
    * Adheres to the same rules and protocols of the internet
* Setup HTTP server with NPM script
* Refactor all of those module.exports to export defaults
* See how you have to stop the server and start it again every time you make a change


REFACTOR MINI GAMETIME TO USE A SERVER

If we are not running a local server - we are not getting a very realistic environment of what our apps will look like on the internet. It is not doing a client/server interaction - it's just grabbing a file off my machine and just opening it up. When we publish/deploy our application, it might 

Pros of using a server
- Know that our app is adhering to the rules of the internet - more realstic envionment
- Take advantage of a lot of server side tools that make development easier.

```bash
npm install http-server --save-dev

```
Add a script called in package json
"start": "http-server"

localhost:8080 or local:host3000

The node server give us this nice syntax for importing/exporting modules 


Could get rid of those extra sript tags


Since you are adhering to HTTP 

## Webpack

* What does web pack do for us? -> https://www.npmjs.com/package/webpack
    * Install web pack, install webpack-cli
    * Create configuration file
    * Install webpack-dev-server
* What is the bundle file?
    * Don’t open it


The pros are all you need to know:

Pros of using webpack
- See any chanes immediately without refreshing (live reloading). Runs behind the scenes and checks/updates
- Allows you to bundle up as many files as you want - you can keep separate files and will bundle them all up into a single file to bundle up your application.

If you have 20 JS files.... it takes a long time to get that info back. This speeds up the process. 1 file means 1 network request from this bundle file in webpack - 


Code along
```bash
npm install webpack --save-dev
npm install -g webpack-cli
```

FE development and repos are 90% config files. 

Show config file

Webpack will likely be set up on whatever job you have. Potentially you are setting up webpack 

Important things
- entry point
index.js is what kicks everything off - base file that incorporates every single file that we possible need in our codebase
- output - this is what is incorporated in the indexhtml file

module - just bundles up our code and ignore the node modules


change start script to dig into node module directory - finds the webacp dev server - this allows for th live reloading. THis is hwy we are using this server instead of the http server that we were using before

build script - tells webpack to bundle up files .... webpack runs that build process, bundles up your files, and that doens't do anything else



### Summary



#### Additional Resources:
Fuzzy/opportunities for extensions:
- lock files
- process
- other package managers exist for slightly different packages

