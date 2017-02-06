---
title: Bookmarker – A First Electron Application
module: 4
---

## Getting Set Up

Clone down [the repository](https://github.com/turingschool-examples/bookmarker) and install the dependencies.

```
npm install
```

Take participants on a tour of the `package.json`. Take particular note of:

- The `main` entry, which should point to `app/main.js`.
- The `start` script, which should be `electron`.
- The dependencies, which should at the very least include `electron`.

There should be four files in the `app` directory.

- `main.js`
- `renderer.js`
- `index.html`
- `styles-light.css`
- `styles-dark.css`

### Hello World

Let's start by doing the simplest possible thing. In `main.js`:

```js
console.log('Hello world');
```

Seems silly, but it turns out that a few cool things are going on:

- We have an icon in the doc or taskbar.
- We can use the application switcher to get to it.
- On macOS, we can see a menu.

That said, there is not a lot here we couldn't do with any other Node process.

Killing the process from the command line with quit the application.

### Hello World, Again

Electron comes with a set of small modules that we can use to build our applications. They are all keys when we require the Electron library.

```js
const electron = require('electron');

console.log(Object.keys(electron));
```

We can see a short list of the modules that availabe to us in the main process. There are a different set of modules available in renderer processes, with some small overlap between the two.

Show how [the documentation lists the components][docs] in available to each kind of process.

[docs]: http://electron.atom.io/docs/

It would be cool if we could fire up a `BrowserWindow`, right? We'll actually need two modules to make this work.

The `app` module takes care of lifecycle events. Some events include:

- `ready`
- `window-all-closed`
- `before-quit`
- `will-quit`
- `quit`

…and many more. You can hook into stuff like Handoff on macOS, Listen for GPU process crashes, and much more.

We can't create the `BrowserWindow` instance we so desperately want until the application is fully started up and ready to rock.

So, we'll have to wait for the `app` module to fire its `ready` event.

```js
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  console.log('The application is ready.');
});
```

**Your turn**: Just to get our hands dirty real quick, can you create a listener that fires when the application quits?

(Take a quick minute to talk about destructuring.)

Okay, now it's time for the moment we've been waiting for. That sweet, sweet `BrowserWindow`.

```js
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow();
  console.log('The application is ready.');
});
```

This is a little dangerous and has a chance of ending poorly for us. `mainWindow` is defined in the function scope of the function we're handing to the ready event. This function has run to completion, which means `mainWindow` is ripe for garbage collection.

We're better off declaring the variable in the top level scope and then setting it when the browser is ready for it.

```js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  console.log('The application is ready.');
});
```

`BrowserWindow` has [a lot of fun settings](http://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions).

Some useful ones:

- `width`
- `height`
- `x`
- `y`
- `center` (takes a Boolean)

Let's play with some of them for a second.

```js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    maxWidth: 800,
    maxHeight: 600,
    minWidth: 400,
    minHeight: 300,
    titleBarStyle: 'hidden-inset'
  });

  console.log('The application is ready.');
});
```

Okay, now that we've gotten that out of systems, let's keep it simple.

```js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600
  });

  console.log('The application is ready.');
});
```

Our window isn't terribly exciting just yet. Because it doesn't have any content to show.

We can take the window and ask it to load a URL.

```js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600
  });

  mainWindow.loadURL('https://frontendmasters.com');
});
```

Loading remote pages is cool. But there is that flash of white before the page load. That's not the best user experience in the world and we can do better.

```js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    show: false
  });

  mainWindow.loadURL('https://frontendmasters.com');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});
```

Let's start by showing _something_ in `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bookmarker</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style-light.css" rel="stylesheet">
  </head>
  <body>
    <h1>Bookmarker</h1>
  </body>
</html>
```

To render the index.html file, change the URL you load in main.js:

```js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    show: false
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});
```

### Worlds Collide

Let's open up the developer tools an play around for a second.

We have some Node globals:

- `require`
- `process`
- `__dirname`
- `module`

We also have the stuff we're used to in the browser.

- `document`
- `navigator`
- `window` (Node's `global` is aliased to `window`)

```js
const os = require('os');
const fs = require('fs');

const files = fs.readdirSync(os.homedir());

files.forEach(name => {
  const file = document.createElement('li');
  file.textContent = name;
  document.body.appendChild(file);
});
```

We could use `<script>` tags in the HTML. Or we could simply require the renderer file from here. I prefer this method because we get all of the advantages of modules being wrapped in closures.

```html
<script>require('./renderer.js');</script>
```

## Basic Functionality

Let's also update the content a bit for what we'll need to get this form up and running.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bookmarker</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="styles-light.css" rel="stylesheet">
  </head>
  <body>
    <div class="message"></div>

    <form class="new-link-form">
      <label class="new-link-form--url--label" for="new-link-url">New Bookmark URL</label>
      <input type="url" class="new-link-form--url" id="new-link-url" placeholder="URL" required>
      <input type="submit" class="new-link-form--submit" value="Submit" disabled>
    </form>

    <section class="links"></section>

    <section class="controls">
      <button class="controls--clear-storage">Clear Storage</button>
    </section>

    <script>require('./renderer.js');</script>
  </body>
</html>
```

We're going to be working with these elements a bit, so let's store them in some variables for quick reference.

Chromium's Content Module doesn't provide helpful validity popups, like those in Chrome, but they will work under the hood.

Here we will only activate the button if it's a valid URL. In a perfect world, we could display a better URI for telling them why the URL isn't valid, but let's stick with this for now.

```js
const { shell } = require('electron');

const newLinkUrl = document.querySelector('.new-link-form--url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');
const errorMessage = document.querySelector('.message');
const linkTemplate = document.querySelector('#link-template');
const linksSection = document.querySelector('.links');
const clearStorageButton = document.querySelector('.controls--clear-storage');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});
```

Now is also a good time to add a small helper function to clear out the contents of the URL field. In a perfect world, we’ll call this whenever we’ve successfully stored the link.

```js
const clearInput = () => {
  newLinkUrl.value = '';
};
```

### Getting the Page (Or, "Look Mom! No CORS")

```js
newLinkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = newLinkUrl.value;

  fetch(url)
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(error => {
      errorMessage.textContent = `There was an error fetching "${url}."`
    });
});
```

### Parsing the Response and Finding the title

```js
const parser = new DOMParser();
const parseResponse = (text) => parser.parseFromString(text, 'text/html');
const findTitle = (nodes) => nodes.querySelector('title').innerText;
```

We'll parse the response and find the title when it comes in.

```js
fetch(url)
  .then(response => response.text())
  .then(parseResponse)
  .then(findTitle)
  .then(response => console.log(response))
  .catch(error => {
    console.error(error);
    errorMessage.textContent = `There was an error fetching "${url}."`
  });
```

### Rendering the Links to the Page

Let's use the `<template>` to define what the individual links we're adding to the page are. `<template>` has no support in IE, but we're shipping a modern version of Chrome, so we don't particularly care.

```html
<template id="link-template">
  <article class="link">
    <h3 class="link--title"></h3>
    <p><a href="#" class="link--url"></a></p>
  </article>
</template>
```

Now we can use that template each time we need to add a new one to the page.

```js
const addToPage = ({ title, url }) => {
  const newLink = linkTemplate.content.cloneNode(true);
  const titleElement = newLink.querySelector('.link--title');
  const urlElement =  newLink.querySelector('.link--url')

  titleElement.textContent = title;
  urlElement.href = url;
  urlElement.textContent = url;

  linksSection.appendChild(newLink);
  return { title, url };
};
```

Let's add it to the page.

```js
fetch(url)
  .then(response => response.text())
  .then(parseResponse)
  .then(findTitle)
  .then(title => { title, url })
  .then(addToPage)
  .then(clearInput)
  .catch(error => {
    console.error(error);
    errorMessage.textContent = `There was an error fetching "${url}."`
  });
```

### Persisting the Links to LocalStorage

Electron applications can write to the file system, but we'll stick with `localStorage` in this first example.

```js
const storeLink = ({ title, url }) => {
  localStorage.setItem(title, url);
  return { title, url };
};
```

Let's add more to our chain of events.

```js
fetch(url)
  .then(response => response.text())
  .then(parseResponse)
  .then(findTitle)
  .then(title => { title, url })
  .then(addToPage)
  .then(storeLink)
  .then(clearInput)
  .catch(error => {
    console.error(error);
    errorMessage.textContent = `There was an error fetching "${url}."`
  });
```

When the page boots, pull all of the links out of `localStorage`.

```js
window.addEventListener('load', () => {
  for (let title of Object.keys(localStorage)) {
    addToPage({ title, url: localStorage.getItem(title) });
  }
});
```

### Clearing LocalStorage

We're likely to make some mistakes so, let's add an event listener to that button to clear out the list.

```js
clearStorageButton.addEventListener('click', () => {
  localStorage.clear();
  linksSection.innerHTML = '';
});
```

### Opening in the Default Browser Instead of Electron

By default, links open in our app because our app thinks it's a browser. Maybe we want this to navigate around the internal state of our application, but right now, we definitely don't want this behavior.

```js
const { shell } = require('electron');

linksSection.addEventListener('click', (event) => {
  if (event.target.href) {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});
```

So now we should be able to store URLS, restart the app and have any saved URLs show up and have the ability to clear out all URLS to start fresh. This is what my renderer.js looks like:

```js
const { shell } = require('electron');

const newLinkUrl = document.querySelector('.new-link-form--url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');
const errorMessage = document.querySelector('.message');
const linkTemplate = document.querySelector('#link-template');
const linksSection = document.querySelector('.links');
const clearStorageButton = document.querySelector('.controls--clear-storage');

const parser = new DOMParser();
const parseResponse = (text) => parser.parseFromString(text, 'text/html');
const findTitle = (nodes) => nodes.querySelector('title').innerText;

window.addEventListener('load', () => {
  for (let title of Object.keys(localStorage)) {
    addToPage({ title, url: localStorage.getItem(title) });
  }
});

clearStorageButton.addEventListener('click', () => {
  localStorage.clear();
  linksSection.innerHTML = '';
});

const addToPage = ({ title, url }) => {
  const newLink = linkTemplate.content.cloneNode(true);
  const titleElement = newLink.querySelector('.link--title');
  const urlElement =  newLink.querySelector('.link--url')

  titleElement.textContent = title;
  urlElement.href = url;
  urlElement.textContent = url;

  linksSection.appendChild(newLink);
  return { title, url };
};

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

newLinkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = newLinkUrl.value;

  fetch(url)
    .then(response => response.text())
    .then(parseResponse)
    .then(findTitle)
    .then(title => ({ title, url }))
    .then(addToPage)
    .then(storeLink)
    .then(clearInput)
    .catch(error => {
      console.error(error);
      errorMessage.textContent = `There was an error fetching "${url}."`
    });
});

linksSection.addEventListener('click', (event) => {
  if (event.target.href) {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});

const storeLink = ({ title, url }) => {
  localStorage.setItem(title, url);
  return { title, url };
};

const clearInput = () => {
  newLinkUrl.value = '';
};
```

### Devtron

We can install Devtron, an officially supported set of tools. If you open up the dev tools (Opt+Command+I) in your Electron app, you now have access Devtron. Take a few minutes to see what is can show you.

```js
require('devtron').install();
```

### Dark Mode

Let's pull in the `remote` module and then grab access to the main process's modules.

```js
const { shell, remote } = require('electron');
const { systemPreferences } = remote;
```

When the page loads. We'll query if macOS is in dark mode and if so, we'll swap style sheets. To turn on dark mode on your mac, go to Preferences -> General -> Use dark menu bar and Dock. Fire up your app and voi-la!

```js
window.addEventListener('load', () => {
  for (let title of Object.keys(localStorage)) {
    addToPage({ title, url: localStorage.getItem(title) });
  }
  if (systemPreferences.isDarkMode()) {
    document.querySelector('link').href = 'styles-dark.css';
  }
});
```
