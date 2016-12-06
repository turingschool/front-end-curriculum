---
title: Managing Multiple Windows with Electron
module: 4
status: draft
---

So, this functionality is great and wonderful, but we still don't have a way to create more than one window. Bummer.

Let's import `createWindow()` as well.

```js
const { createWindow, openFile } = remote.require('./main');
```

Then we can go ahead and create an event listener.

```js
newFileButton.addEventListener('click', () => {
  createWindow();
});
```

## Setting the Tile of the Window When a File is opened

If I look at any of the windows in my editor right now, I can see what is opened.

I can see that in my poor application. Let's see if we can fix that.

```js
win.setTitle(`${f} - Fire Sale`);
```

```js
const openFile = exports.openFile = (win, file = getFileFromUserSelection(win)) => {
  const content = fs.readFileSync(file).toString();
  win.webContents.send('file-opened', file, content);
  win.setTitle(`${file} - Fire Sale`);
};
```

Yea, I am setting it as a default argument. Deal with it.

## Setting the Represented File

This is a macOS-only trick, but it's still something that Mac users some to expect.

Take a look right next to the file title in my editor? There is a little file icon.

```js
win.setRepresentedFilename(file);
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

Building up that tile makes me feel back, but let's roll with it for now.

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

We deseve a quick win at this point.

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
