---
title: Working with File Dialogs in Electron
module: 4
status: draft
---

## Getting Set Up

[Continuing from the multiple windows lesson.](http://frontend.turing.io/lessons/electron-multiple-windows.html) 

## Adding Menu Items

Having a button for opening and saving files is pretty neat, but it's not the pattern we're used to in desktop applications. Typically, desktop applications have a "File" menu "Open" and "Save" items. Up to this point, Electron has given us some sensible defaults for menu items. (Fire up your application and check out the menu bar if haven't already.)

Let's go and pull in Electron's `Menu` module.

```js
const Menu = electron.Menu;
```

Unfortunately, Electron's default menu is a "take it or leave it" affair. The moment that we want to add our own custom functionality to the menu, we must first invent the universe. Electron _does_ however give us the ability to create a simple data structure and have it build the menu from a template.

```js
var menu = Menu.buildFromTemplate(template);
```

Once we have a menu object, we can override the default menu that Electron gave us when the `app` fires it's `ready` event.

```js
app.on('ready', function () {
  var menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});
```

Now, this won't work because we don't have a `template` object just yet. Because we have to recreate all of the default functionality, it's going to get a little verbose. I encourage you to copy and paste what follows and we'll discuss it together.

```js
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click() { openFile(); }
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click() { saveFile(); }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      },
    ]
  }
];

if (process.platform == 'darwin') {
  var name = app.getName();
  template.unshift({
    label: name,
    submenu: [
      {
        label: 'About ' + name,
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: 'Services',
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        label: 'Hide ' + name,
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Alt+H',
        role: 'hideothers'
      },
      {
        label: 'Show All',
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() { app.quit(); }
      },
    ]
  });
}
```

Welcome back! Let's take a closer look some of the moving pieces in the large chunk of code above. The template is an array of menu items. In this case, we have "File" and "Edit"—each with their own submenus. Under "File," we have two menu items: "Save" and "Open." When clicked, they fire `openFile` and `saveFile` respectively. We're also assigning each an "accelerator" (also know as a shortcut or hot key).

In the "Edit" menu, we have some of the familiar commands: undo, redo, copy, cut, paste, select all. We probably don't want to reinvent the wheel. It would be great if each would do their normal thing. Electron allows us to define their "role," which will trigger the native OS behavior.

```js
{
  label: 'Copy',
  accelerator: 'CmdOrCtrl+C',
  role: 'copy'
}
```

You might also notice that we're defining the accelerator as "CmdOrCtrl+C". Electron will make the right choice on our behalf when it compiles for OS X, Windows, and/or Linux.

Application for OS X have an additional menu with the application's name and some common OS-specific menu items. We only want to add this menu if our Electron application is running in OS X.

```js
if (process.platform == 'darwin') { … }
```

[Darwin][] is the UNIX foundation that OS X is built on. The `process.platform` is baked into Node and returns 'darwin', 'freebsd', 'linux', 'sunos' or 'win32' depending on the platform it's being run from.

[Darwin]: https://en.wikipedia.org/wiki/Darwin_(operating_system)

We'll use `unshift` to push it onto the front of the array. OS X will stubbornly continue to use "Electron" as the application title. In order to override this, we'll have to adjust the `plist` file that Electron generates when it builds the file. This is the same process we'll use for a custom application icon.

## Electron's `shell` Module

We have a little bit of a bug in our application. If we have a link in our Markdown file and we click it, it will load inside of application which kind of ruins the illusion that we're building a native application. Even worse: we don't have a back button. So, we can't return to our regularly-schedule application. Luckily, Electron's `shell` module allows us to access the OS's ability to open files as well as expose their location in the file system.

In `renderer.js`, let's bring in Electron's `shell` module:

```js
const shell = electron.shell;
```

Now, we'll listen for link clicks and ask them politely to open in a new window instead of stepping over our little application.

```js
$(document).on('click', 'a[href^="http"]', function (event) {
  event.preventDefault();
  shell.openExternal(this.href);
});
```

## Appending to the Recent Documents Menu

Operating systems keep a record of recent files. We want our application to hook into this functionality. Doing this is fairly, simple. In our `openFile` function, we'll add the following:

```js
app.addRecentDocument(file);
```

![Recent Documents](images/03-recent-documents.png)

As you can see, adding files to the list of recent documents is easy. What we haven't done is set up our application to open any of those files in the recent documents list when they're selected.

Whenever we select a file from the list of recent documents, `app` fires an `open-file` event. We can listen for this event, read the file, and then send it to the renderer process.

```js
app.on('open-file', function (event, file) {
  var content = fs.readFileSync(file).toString();
  mainWindow.webContents.send('file-opened', file, content);
});
```

## Accessing the Outside World

As we've seen with the recent documents list, one of the really cool things about Electron is that we can interact with the operating system around us. Let's add two more features to Firesale.

- A "Show in File System" button that will ask the operating system to show us where the markdown file is located on in either the Finder or Windows Explorer.
- A "Open in Default Editor" button that will open the current file in whatever application has designated as the default application for Markdown files.

To get started, we'll have to add these two buttons to the page. We'll update our controls section as follows:

```html
<section class="controls">
  <button id="open-file">Open File</button>
  <button id="copy-html">Copy HTML</button>
  <button id="save-file">Save HTML</button>
  <button id="show-in-file-system" disabled="true">Show in File System</button>
  <button id="open-in-default-editor" disabled="true">Open in Default Editor</button>
</section>
```

The final two buttons are the new buttons. The first three should be familiar from before. We've disabled them, because there is no active file when the application starts up. When the user opens a file, we'll have the main process inform the renderer process, which will then enable these buttons.

We'll also store a reference to each of them in `renderer.js`.

```js
const $showInFileSystemButton = $('#show-in-file-system');
const $openInDefaultEditorButton = $('#open-in-default-editor');
```

As we discussed earlier, Electron's `shell` module [provides functionality to both the main and renderer processes that aides with desktop integration][shell].

[shell]: http://electron.atom.io/docs/v0.36.8/api/shell/

### Activating the Buttons

Earlier we set up our main process to send the name of the file and its contents to the renderer process whenever it opened a new file. Let's go ahead and create a top-level variable to store the current file that's open so that we can reference it later.

In `renderer.js`:

```js
var currentFile = null;
```

We will assign the click events to the new buttons:

```js
$showInFileSystemButton.on('click', () => {
	shell.showItemInFolder(currentFile);
});

$openInDefaultEditorButton.on('click', () => {
	shell.openItem(currentFile);
});
```

We'll also modify our `file-opened` event listener to update `currentFile` and enable the buttons.

```js
ipc.on('file-opened', function (event, file, content) {
  currentFile = file;

  $showInFileSystemButton.attr('disabled', false);
  $openInDefaultEditorButton.attr('disabled', false);

  $markdownView.text(content);
  renderMarkdownToHtml(content);
});
```

Yea, that's actually it. Don't take my word for it. Verify that it works for yourself.
