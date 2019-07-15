---
title: Managing Multiple Windows with Electron
module: 4
status: draft
---

## Getting Set Up

[Continuing from the file dialog lesson.](http://frontend.turing.io/lessons/module-4/electron-file-dialogs.html)

## Why Would You Want Multiple Windows?

Discussion!

## Creating Multiple Windows

So, our functionality is great and wonderful, but we still don't have a way to create more than one window. Bummer. Let's add a function called `createWindow()` in `main.js` to do just that.

```js
const windows = new Set()

const createWindow = exports.createWindow = (file) => {
  let newWindow = new BrowserWindow({ show: false });
  windows.add(newWindow)

  newWindow.loadURL(`file://${__dirname}/index.html`);

  newWindow.once('ready-to-show', () => {
    if (file) openFile(newWindow, file)
    newWindow.show();
  });

  newWindow.on('close', (event) => {
    if(newWindow.isDocumentEdited()) {
      const result = dialog.showMessageBox(newWindow, {
        type: 'warning',
        title: 'Quit with Unsaved Changes?',
        message: 'You have unsaved changes. Are you sure you want to quit?',
        buttons: [
          'Quit Anyway',
          'Cancel'
        ],
        defaultId: 0,
        cancelId: 1
      })

      if(result === 0) newWindow.destroy()
    }
  });

  newWindow.on('closed', () => {
    windows.delete(newWindow)
    newWindow = null
  });

  return newWindow
}
```

A lot of things are going on here so let's step through it line by line.

```js
const windows = new Set()
```

This is a new data structure for ES6 which stores unique values. It could be a string, integer, object, function, literally anything except null. If you try to add a duplicate value, the Set will reject it. Think of a Set as a fancy array that protects for uniqueness of each element in the Set.

```js
let newWindow = new BrowserWindow({ show: false });
windows.add(newWindow)
```

Our `createWindow()` function creates a new window and defaults it to not show. Then we add the new window to our windows Set. All of our new windows should be unique so a Set is a great way to store all of our windows.

```js
newWindow.once('ready-to-show', () => {
  if (file) openFile(newWindow, file)
  newWindow.show();
});
```

Once the new window is ready to show, we will call openFile if there is a file to open with the new window. Then we will show the new window.

```js
newWindow.on('close', (event) => {
  if(newWindow.isDocumentEdited()) {
    const result = dialog.showMessageBox(newWindow, {
      type: 'warning',
      title: 'Quit with Unsaved Changes?',
      message: 'You have unsaved changes. Are you sure you want to quit?',
      buttons: [
        'Quit Anyway',
        'Cancel'
      ],
      defaultId: 0,
      cancelId: 1
    })

    if(result === 0) newWindow.destroy()
  }
});

newWindow.on('closed', () => {
  windows.delete(newWindow)
  newWindow = null
});

return newWindow
```

When we close the new window, we will check if we have edited the document (functionality we will add), give a dialog box if they have edited it, and then delete the window from the window Set if it closes. The new window is the return value of createWindow().

Next let's add a New File button in our `index.html`, detect the currentWindow and import `createWindow()` in our `renderer.js` file.

```js
// index.html
<section class="controls">
  <button id="new-file">New File</button>
  <button id="open-file">Open File</button>
  <button id="copy-html">Copy HTML</button>
  <button id="save-file">Save HTML</button>
</section>

// renderer.js
const currentWindow = remote.getCurrentWindow()

const { createWindow, openFile, saveFile } = remote.require('./main');

const $markdownView = $('.raw-markdown')
const $htmlView = $('.rendered-html')
const $newFileButton = $('#new-file')
const $openFileButton = $('#open-file')
const $saveFileButton = $('#save-file')
const $copyHtmlButton = $('#copy-html')
```

Then we can go ahead and create an event listener.

```js
$newFileButton.on('click', () => {
  createWindow();
});
```

Let's also pass the currentWindow to our openFile and saveFile functions.

```js
$openFileButton.on('click', () => {
  openFile(currentWindow)
})

$saveFileButton.on('click', () => {
  var html = $htmlView.html()
  saveFile(currentWindow, html)
})
```

Let's fire up our app and see if we can open multiple windows. What are some things that suck about the current functionality?

## Setting the Tile of the Window When a File is opened

If I look at any of the windows in my editor right now, I can't see what is opened. Let's see if we can fix that.

```js
const openFile = exports.openFile = (targetWindow) => {
  let files = dialog.showOpenDialog(targetWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Markdown Files', extensions: ['md', 'markdown', 'txt'] }
    ]
  })

  if (!files) { return }

  let file = files[0]
  let content = fs.readFileSync(file).toString()

  targetWindow.webContents.send('file-opened', file, content)
  targetWindow.setTitle(`New Fire Sale`);
}
```

Let's refactor out the file selection into it's own function:

```js
const openFile = exports.openFile = (targetWindow, file = getFileFromUserSelection(targetWindow)) => {
  const content = fs.readFileSync(file).toString();
  win.webContents.send('file-opened', file, content);
  currentWindow.setTitle(`${file} - Fire Sale`);
};
```

Yeah, we're am setting it as a default argument. Deal with it.

## Setting the Represented File

This is a macOS-only trick, but it's still something that Mac users some to expect.

Take a look right next to the file title in my editor? There is a little file icon.

```js
// Below setTitle
targetWindow.setRepresentedFilename(file);
```

## Setting the Document as Edited

We can also set the file as edited. Which will prompt the user if there are unsaved changes as well as provide a visual cue on macOS.

But, how do we know if the document is edited?

The rest of this stuff has all been done whenever the user opens a file. But what about when they edit it?

We can listen for `keyups` right?

```js
markdownView.addEventListener('keyup', (event) => {
  renderMarkdownToHtml(event.target.value);
  currentWindow.setDocumentEdited(true);
});
```

What happens if a user tries to close?

Eh. Well, it's nice to have the visual cue I guess.

```js
// inside createWindow()

newWindow.on('close', (event) => {
  if (newWindow.isDocumentEdited()) {
    event.preventDefault();
    const result = dialog.showMessageBox(newWindow, {
      type: 'warning',
      title: 'Quit with Unsaved Changes?',
      message: 'Your changes will be lost permanently if you do not save.',
      buttons: [
        'Quit Anyway',
        'Cancel',
      ],
      cancelId: 1,
      defaultId: 0
    });

    if (result === 0) newWindow.destroy();
  }
});
```

### Moving the Logic to the Renderer Process

We have a new problem. If we edit a document and then change it back, we're still in the same position.

Visual Studio Code keeps me in an edited state, but many other applications will take away the decoration.

In order to tell whether or not a file has changed, we'll likely need to keep track of the original content.

It turns out we'll also need this when we activate the "Revert" button. Also, we're going to need to activate the "Revert" and "Save" buttons.

In the renderer process:

```js
let filePath = null;
let originalContent = '';
```

Just believe me that we'll want to have the `filePath` variable for now. Imagine we're eventually going to want to save files somewhere or something if that helps you trust me more.

And now in the "keyup" event listener.

```js
markdownView.addEventListener('keyup', (event) => {
  const content = event.target.value;
  renderMarkdownToHtml(content);
  currentWindow.setDocumentEdited(content !== originalContent);
});
```

Looks good, right?

But, what if we open up another document?

Let's fix this when the renderer process gets wind of a new file being opened.

```js
ipcRenderer.on('file-opened', (event, file, content) => {
  originalContent = content;
  markdownView.value = content;
  renderMarkdownToHtml(content);
});
```

Almost there. There is still a tiny bug when we open a new file and haven't made a change to it _after_ another change as been made.

```js
ipcRenderer.on('file-opened', (event, file, content) => {
  originalContent = content;
  markdownView.value = content;
  renderMarkdownToHtml(content);
  currentWindow.setDocumentEdited(false);
});
```

If we just loaded a fresh file, we don't want to show it as edited, right?

### Providing Additional Visual Cues

What if we wanted to put a little note for our Windows and Linux friends about the file being edited?

We could change the title.

Since, we're doing this the renderer process, maybe it makes sense to move all of window title setting into the renderer process.

Let's duplicate the functionality, then refactor, and then we'll take it out of the main process.

(This may seem a bit silly, but we're laying the ground work for some other fun stuff.)

```js
const updateEditedState = (isEdited) => {
  currentWindow.setDocumentEdited(isEdited);

  let title = 'Fire Sale';
  if (filePath) title = `${filePath} - ${title}`;
  if (isEdited) title = `${title} (Edited)`;
  currentWindow.setTitle(title);
};
```

Building up that tile makes me feel bad, but let's roll with it for now.

```js
markdownView.addEventListener('keyup', (event) => {
  const content = event.target.value;
  renderMarkdownToHtml(content);
  updateEditedState(content !== originalContent);
});
```

```js
ipcRenderer.on('file-opened', (event, file, content) => {
  filePath = file;
  originalContent = content;

  updateEditedState(false);

  markdownView.value = content;
  renderMarkdownToHtml(content);
});
```

We can also now remove the title from being set when open the file in the main process since we're doing it here anyway.

```js
const openFile = exports.openFile = (win, file = getFileFromUserSelection(win)) => {
  const content = fs.readFileSync(file).toString();
  win.webContents.send('file-opened', file, content);
  win.setRepresentedFilename(file);
};
```

### Getting the Revert and Save Buttons Enabled

We deserve a quick win at this point.

```js
saveMarkdownButton.disabled = !isEdited;
revertButton.disabled = !isEdited;
```

While we're at it, let's get the revert button working, because it's a quick win.

```js
revertButton.addEventListener('click', () => {
  markdownView.value = originalContent;
  renderMarkdownToHtml(originalContent);
  updateEditedState(false);
});
```

If you hate your coworkers, you could also trigger a "keyup" event, I suppose.

```js
markdownView.dispatchEvent(new KeyboardEvent('keyup'));
```

### Appending to Recently Opened Files

In `openFile()`:

```js
app.addRecentDocument(file);
```

This will add them to the list, but it won't let you open any from the list.

Electron fires a very special "open-file" event that we can listen for in the main process.

But, we have to make a very important decision about the behavior of our application. Do we have it replace the contents of some other window? A new tab maybe? Or should it spawn a fresh window.

Let's go for the last option.

In order to do that, we'll have to modify `createWindow()` to optionally take a file path as an argument and go ahead and open the file when the window is ready to go. This is the functionality we prepared for earlier.



```js
app.on('will-finish-launching', () => {
  app.on('open-file', (event, file) => {
    event.preventDefault();
    createWindow(file);
  });
});
```

```js
const createWindow = exports.createWindow = (file) => {
  let newWindow = new BrowserWindow({ show: false });
  windows.add(newWindow);

  newWindow.loadURL(`file://${__dirname}/index.html`);

  newWindow.once('ready-to-show', () => {
    if (file) openFile(newWindow, file);
    newWindow.show();
  });

  newWindow.on('close', (event) => {
    if (newWindow.isDocumentEdited()) {
      const result = dialog.showMessageBox(newWindow, {
        type: 'warning',
        title: 'Quit with Unsaved Changes?',
        message: 'Your changes will be lost permanently if you do not save.',
        buttons: [
          'Quit Anyway',
          'Cancel',
        ],
        cancelId: 1,
        defaultId: 0
      });

      if (result === 0) newWindow.destroy();
    }
  });

  newWindow.on('closed', () => {
    windows.delete(newWindow);
    newWindow = null;
  });

  return newWindow;
};
```
