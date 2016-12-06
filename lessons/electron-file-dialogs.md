---
title: Working with File Dialogs in Electron
module: 4
status: draft
---

Let's take a good hard look at the UI. This is what we're going to implement.

## Getting the Renderer Code Working

Here is the first pass at getting everything up and running.

This is all going to go down in the renderer process:

```js
const marked = require('marked');

const markdownView = document.querySelector('.raw-markdown');
const htmlView = document.querySelector('.rendered-html');

const renderMarkdownToHtml = (markdown) => {
  htmlView.innerHTML = marked(markdown, { sanitize: true });
};

markdownView.addEventListener('keyup', (event) => {
  renderMarkdownToHtml(event.target.value);
});
```

## Triggering a File Dialog

We're going to need to pull in Electron's `dialog` module.

```js
const { app, BrowserWindow, dialog } = require('electron');
```

Let's create a function that goes ahead and shows us the dialog.

```js
const getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog();
  console.log(files);
};
```

Kind of cool, I guess.

Notice that it let's us select multiple files and gives us an array.

Opening multiple files might totally be what you want. But in this case, our application only shows one file at a time. So, it would be a much better user experience to only let the user select one file at a time, right?

```js
const getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog({
    properties: ['openFile']
  });

  console.log(files);
};
```

Hmm, we still get an array no matter what. Okay. Cool. Let's just pull the first one out of the array.

```js
const getFileFromUserSelection = global.getFileFromUserSelection =  () => {
  const files = dialog.showOpenDialog({
    properties: ['openFile']
  });

  const file = file[0];

  console.log(file);
};
```

This is still problematic if the user hits cancel because files will be `undefined`. Frankly, if the user didn't pick a file, I don't see why we'd want to go forward with anything having to do with the file selection process. So, why don't we just excuse ourself from the function early if `files` comes back as a falsey value, eh?

```js
const getFileFromUserSelection = global.getFileFromUserSelection =  () => {
  const files = dialog.showOpenDialog({
    properties: ['openFile']
  });

  if (!files) return;

  const file = file[0];

  console.log(file);
};
```

Let's go ahead and actually read the contents of the file. We'll use `fs.readFileSync` in this case. We'll talk about refactoring it to asynchronous if that's your style in a little bit.

## Making it More Mac-Friendly

`dialog.showOpenDialog()` can take a `BrowserWindow` instance as a first argument. This is totally optional, but it if you provide one, the it will cause the dialog to drop down as a sheet from the title bar of the window.

```js
const getFileFromUserSelection = global.getFileFromUserSelection =  () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile']
  });

  if (!files) return;

  const file = file[0];
  const content = fs.readFileSync(file).toString();

  console.log(content);
};
```

## Scoping the Dialog to Valid Files

There is a serious bummer if we select a file that doesn't take too nicely to `.toString()`. I'm looking at you—literally anything that isn't a text file. We could compile a wonderful series of hacks and conditionals to deal with this situation or we could just not let the user pick files that aren't text files, right?

```js
const fs = require('fs');
```

Luckily for us, `dialog.showOpenDialog()` let's use pass a list of file types we're willing to accept.

**SHOW THE WINDOWS SCREENSHOT HERE**

```js
const getFileFromUserSelection = global.getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['txt'] },
      { name: 'Markdown Files', extensions: ['md', 'markdown'] }
    ]
  });

  if (!files) return;

  const file = file[0];
  const content = fs.readFileSync(file).toString();

  console.log(content);
};
```

This will allow only file with `txt`, `md`, and `markdown` file extensions to be selected. In macOS, invalid file types will be grayed out. In Windows, you'll actually be able to switch between these files.

This will work for now. We can refactor it in a bit.

## Wiring Up the Open File Button

Let's add an event listener to that button in the user interface.

```js
const openFileButton = document.querySelector('#openFile');
```

```js
openFileButton.addEventListener('click', () => {
  alert('You clicked the "Open File" button.');
});
```

### Introducing Interprocess Communication

There are a few ways to communicate between the main process and any of the renderer processes.

We're going to start by taking a look at the `remote` module.

The `remote` module makes it easy to phone home to the main process. As a result, it's only available in the renderer processes. The cool part is that is has access to everything that the main process has access to. When you use a method on the `remote` module, you are effecting calling it in the main process—even if the code itself is in the renderer process.

It's a little confusing a first, but I promise you that we'll get the hang of it in short order.

Let's play around with it in the developer tools.

- `remote.getGlobal` will get anythig attatched to the global object in the main process.
- `remote.require` will get access to any module in the main process.

We could do something like this:

```js
const getFileFromUserSelection = global.getFileFromUserSelection = () => {
  // ...
};
```

```js
openFileButton.addEventListener('click', () => {
  remote.getGlobal('getFileFromUserSelection')();
});
```

This is kind of icky because if we had many files in the main process, it would global amongst all of them. We could just use `module.exports` and then give `remote.require` a shot though right?

```js
const { getFileFromUserSelection } = remote.require('./main');
```

```js
openFileButton.addEventListener('click', () => {
  getFileFromUserSelection();
});
```

Now that we have the button wired up, we can stop this tomfoolery where we were triggering it at the very beginning.

```js
app.on('ready', () => {
  mainWindow = new BrowserWindow();

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  getFileFromUserSelection();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
```

## Sending Content From the Main Process to a Renderer Process

So, we know how to reach from the renderer process over to the main process, but how do we send information from the main process to a particular renderer process.

We kind of glossed over it, but we kind of did this when we told the `BrowserWindow` instance to load a particular url.

All `BrowserWindow` instances have a reference to that window's `webContents`. Some of the methods on the window are just aliases to ones on the `webContents`. (`loadURL` is a prime example of this.)

Let's spit apart our method for a moment. We'll say that the process of showing a dialog and selecting a file is different than the process of opening it.

```js
const getFileFromUserSelection = exports.getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['txt'] },
      { name: 'Markdown Files', extensions: ['md', 'markdown'] }
    ]
  });

  if (!files) return;

  openFile(files[0]);
};
```

```js
const openFile = (file) => {
  const content = fs.readFileSync(file).toString();
  mainWindow.webContents.send('file-opened', file, content);
};
```

`file-opened` is arbitrary. You could name it "sandwich." All that matters is that we're going to set up a listener on the other end.

```js
const { ipcRenderer, remote } = require('electron');
```

```js
ipcRenderer.on('file-opened', (event, file, content) => {
  markdownView.value = content;
  renderMarkdownToHtml(content);
});
```

## Flipping the Script on Opening Files

This was a fine road to travel down, but we can do a bit better by inverting the order.

There are other ways that a user could open a file that we haven't implemented yet:

- They could select it from the list of recent documents
- They could drag it into the application
- They could select it from the file system
- It could be loaded from a previous session

What if we refactored this approach so that we had a generalized `openFile()` function that—in the event that it didn't know what file to open—we could go ahead and prompt the user to give us a little bit of insight?

We'll start by having the `getFileFromUserSelection` return the file instead of immediately opening it.

```js
const getFileFromUserSelection = exports.getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['txt'] },
      { name: 'Markdown Files', extensions: ['md', 'markdown'] }
    ]
  });

  if (!files) return;

  return files[0];
};
```

If `openFile()` is ever called without a file, then we'll go and get one. Let's also make sure to export it, so that we can include it in our renderer process.

```js
const openFile = exports.openFile = (file) => {
  const f = file || getFileFromUserSelection();
  const content = fs.readFileSync(f).toString();
  mainWindow.webContents.send('file-opened', file, content);
};
```

While we're at it, let's just get rid of that `getFileFromUserSelection()` that fires when the `app` process is ready.

```js
app.on('ready', () => {
  mainWindow = new BrowserWindow();

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
```

The last bit of business we need to take care of is to update our button to use `openFile()` instead of `getFileFromUserSelection()`
