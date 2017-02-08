---
title: Creating a Menubar Electron App
module: 4
status: draft
---

## Getting Set Up

[Pull down my Tide Tracker app](https://github.com/Alex-Tideman/tide_tracker)

## The Case for a Menubar App

So far we have been creating desktop apps that pop up with a window and a menu item the app drawer. Very Slack-ish. These kinds of apps are great for pulling up in a search or clicking on the icon in the drawer, doing a chunk of work that could vary greatly from each session and then exited out.

What if you wanted an app that was always accessible and instantly appeared on a click, highly focused functionality that can be accomplished quickly and frequently, and also had the ability to run background tasks? It sounds like you want a menubar app.

### Group Discussion
Take a look at your current menubar. What apps are in it? What do they all have in common?

### Getting Started

```js
$ npm i --save menubar
```

Menubar provides us with a high-level abstraction of an Electron menu object. You can provide it with default values such as an icon, index.html file, height, width, and always keep on top. You also get a lot of the same event listeners as the app module in Electron like 'ready', 'after-create-window', 'show', and 'after-close'. However with a bit of hacking, you can use all the features of a BrowserWindow with menubar. I will show you an example of how to do that a little later.

First things first, let's require menubar and create an instance of Menubar.

```js
const Menubar = require('menubar')
const menubar = Menubar({
  width: 400,
  height: 500,
  icon: './images/icon.png'
})
```

Here we are creating a menubar with a default width and height and icon. It will automatically position itself directly below it's icon. Let's create a couple of listeners on the 'ready' and 'after-create-window' events. Note that we want to load our index.html file on the 'after-create-window' because our menubar app shouldn't show until we click on the icon to trigger a window creation.

```js
menubar.on('ready', function () {
  console.log('Application is ready!')
})

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
})
```

### Make Firesale A Menubar Application
Take the next 10 minutes to turn Firesale into a menubar app.

### Hacking a Menubar
