---
title: Setting Up Node.js
---

### What is Node.js?

[Node.js][node] is a way to run JavaScript from the command line on your computer. Prior to Node, the most common way to execute your JavaScript code was in the browser. But sometimes, you don't want to have to set up an HTML page just to try out an idea or run a file. Node makes it easy to execute and evaluate code that you have sitting around in your file system.

There are also a number of things that JavaScript cannot do in the browser. For example, we can't run any of the tools that front-end developers use to build and compile their applications because code in the browser is not allowed to access your file system. While one of the main reasons Node was created was to write web servers, we'll be using it a lot as front-end engineers to build our client-side applications. It makes sense that people who write JavaScript for a living would also write their tools in JavaScript as well.

[node]: http://nodejs.org

### Installing Node

Downloading and install Node.js is relatively easy in OS X.

1. Visit the [Node.js website][node] and click on the button to download the "Current" version of Node.js.
2. The previous step should trigger a package to download to you `~/Downloads` folder. Right-click on package and select "Open" to run the installer.
3. Agree to the terms and follow along with the steps of the installer.

If everything went well, you now have Node.js installed on your computer. You can verify this by typing `node -v` from the command line to see which version of Node you currently have installed on your system. Congratulations. That said, there is a little bit more that we need to do before we can celebrate in earnest.

### Configuring npm

When we installed Node, we were also treated to a second utility called [npm][].

npm is a number of things. First of all, it's an [online repository][npm] that stores a metric ton of useful third-party JavaScript modules that you can use in your code as well as a wide selection of useful tools for building your applications.

[npm]: http://npmjs.org

`npm` is also a command-line tool that helps with download and install these modules from the online repository. We'll also use `npm` to perform common tasks in our applications.

`npm` will work out of the box for small modules that we'll want to use in their code, but it tries to put the command-line tools in `/usr/local/bin/`, which we don't have ability to write to by default in OS X.

We're left with two options, change the permissions on `/usr/local/bin/` or change the folder where `npm` stores global modules (another name for our command line tools). Rather than muck around in the interals of our operating system, let's just create a hidden folder in our home directory.

Run these two commands in your terminal:

```
mkdir ~/.global_node_modules
npm config set prefix=$HOME/.global_node_modules
```

You should now have everything correctly configured to use both Node and npm on your computer. You can and should feel free to celebrate now.
