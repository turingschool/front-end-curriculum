---
title: Working with IndexedDB
length: 90 mins
tags: javascript, service workers, offline, IndexedDB, web APIs
---

## Goals

By the end of this lesson, you will:

* Know how to persist data locally in IndexedDB
* Understand how service workers interface with IndexedDB

## Persisting Data with IndexedDB
Another piece of the offline puzzle is making application data available. Even if we can provide users with a small subset of data to work with while they're offline, it is a significantly better experience than having none at all. 

There are now several data storage options for the web that give us this ability (LocalStorage, CacheStorage, the libraries that exist on top of them, etc.) Today we'll work with IndexedDB.


## Follow Along
We'll be adding onto the functionality in the markdown previewer application. You can clone the [markdown-previewer](https://github.com/turingschool-examples/markdown-previewer/tree/master) repo and check out the [indexed-db](https://github.com/turingschool-examples/markdown-previewer/tree/indexed-db) branch as your starting point.


## Opening a New Database
The first step to working with IndexedDB, like any data storage API, is to create a new database. Add a new javascript file to handle the database code, and add it as a script tag in `index.html`.

We'll start by creating a couple of constants:

```javascript
const DB_NAME = 'mdFileHistory';
const DB_VERSION = 1;
const DB_STORE_NAME = 'mdFiles';

let db;
```

Here I'm specifying a database name, a version (which can be used to denote that the database needs to be updated), and a store name. Each database can have a set of object stores that hold a list of records. In our case, we're just adding a single object store called `mdFiles`. We're also declaring a `db` variable, which we'll eventually assign to an instance of indexedDB.

In order to create our database, we need to make a request to open a new IndexedDB:

```javascript
let request = indexedDB.open(DB_NAME, DB_VERSION);
```

The concept of a `request` in IndexedDB is slightly different than what you might be familiar with. It's not same as making an Ajax request to an API endpoint, but rather it's more of a database operation. The result of our successful request here will return a new instance of an indexedDB database.

Retrieving this database instance requires us to handle the `onsuccess` event of our `open()` request:

```javascript
request.onsuccess = function(event) {
  console.log("IndexedDB opened successfully");
  db = this.result;
};
```

We can access the database instance through `this.result` in our `onsuccess` handler, and assign it to our `db` variable.

## Creating an Object Store
Now that we have a database to work with, we have to specify how it should be structured. We can do this by creating an object store, (that will contain our list of data), and adding indexes to this store, (that will tell us the keys and properties of our data objects). You can think of object stores as the equivalent of tables in any other database.

When our database first initializes, or any time we change the version number of our database to denote a schema change, an `onupgradeneeded` event will fire. Here we can add a handler to create and structure our object store:

```javascript
request.onupgradeneeded = function(event) {
  let dbResult = event.target.result;

  // check if our database already exists and contains our object store
  if (dbResult.objectStoreNames.contains(DB_STORE_NAME)) {
    // if so, delete it so we can re-create it with our new structure
    dbResult.deleteObjectStore(DB_STORE_NAME);
  }

  // create a new object store
  let store = dbResult.createObjectStore(
    DB_STORE_NAME, { keyPath: 'id', autoIncrement: true }
  );

  // create indices for each of our key property names
  store.createIndex('authorName', 'authorName', { unique: false });
  store.createIndex('fileName', 'fileName', { unique: true });
  store.createIndex('markdownContent', 'markdownContent', { unique: false });
};
```

Here we are doing a couple of things. Within this event, we have access to any object stores that currently exist through `objectStoreNames`. Because this event will fire any time a new database version is detected, it's possible that our object store already exists. If we want to add a new index or change attributes of an existing index, we'll want to clear out the existing store so we can rebuild it appropriately.

Creating a new object store can be done with the `createObjectStore()` method. This method takes in two parameters. The first is the name of the object store you want to create (`mdFiles`, in our case). And the second is an object of options. Here we're specifying that we want a unique property on each of our records called `id` that automatically increments its value any time a new record is added.

We want each of our data objects to have an `authorName`, `fileName`, and `markdownContent` key. The `fileName` key should be unique so we don't accidentally override a previously existing markdown file. Creating these object keys in an IndexedDB database is done with `store.createIndex()`. This method takes in two parameters - the first is the name of the index, and the second is an object of options to describe how the index should behave.

## Adding, Removing and Retrieving Data
Now that we've set up our database and an object store for our markdown files, let's add a function to display our records in the UI. We'll want to update the count in our `counter` span, and add option elements to our select menu for each record.

### Retrieving All Records
In our indexedDB file, add another function to cycle through your database records:

```javascript
function populateDbRecords() {
  // access our object store
  let objectStore = db.transaction(DB_STORE_NAME, 'readwrite').objectStore(DB_STORE_NAME);

  // grab all the unique fileNames in our object
  // store and determine how many records we have
  let fileNameIndex = objectStore.index('fileName');
  let mdFilesCount = fileNameIndex.count();

  // cycle through each record and add an option to our select menu
  objectStore.openCursor().onsuccess = (event) => {
    let cursor = event.target.result;

    if (cursor) {
      let record = cursor.value;
      $('#markdown-records').append(`<option value=${record.id}>${record.fileName}</option>`);
      cursor.continue();
    } else {

      // when we're done iterating over records, add the count
      // and a `change` handler to our select menu for loading
      // each markdown file
      $('.counter').text(mdFilesCount.result);
      $('#markdown-records').change(event => {
        // loadMarkdown()
      });
    }
  }
}
```

### Transactions & Cursors
There are some new terms in this function that we'll want to make sure we're familiar with. The first is `transaction`. When we want `readwrite` access to one of our object stores, we must do it through a transaction. In fact, all changes within an IndexedDB database must be done through transactions. This is to ensure that no two people can be in the middle of a transaction on the same data at the same time, which gives us more peace of mind when it comes to the integrity of our data.

In this example, we use a transaction to gain `readwrite` access to our `mdFiles` object store:

```javascript
let objectStore = db.transaction(DB_STORE_NAME, 'readwrite').objectStore(DB_STORE_NAME);
```

The second term we need to understand is a `cursor`. A cursor is a mechanism for iterating over a particular object store. It keeps track of its position when iterating over the loop, and gives us detailed information about that particular IndexedDB record. You can think of the position as the index when you are iterating over an array, but a cursor gives us a bit more insight into our current context within the database. 

We can cycle through all the data in our `mdFiles` object store by "opening" a new cursor, and handling its success event:

```javascript
objectStore.openCursor().onsuccess = (event) => {
  // do things
};
```

Finally, we'll want to call this function in the `onsuccess` handler of our `open` request:

```javascript
request.onsuccess = function(event) {
  console.log("IndexedDB opened successfully", this);
  db = this.result;
  populateDbRecords();
};
```

### Retrieving a Single Record
We added a `change` handler to our select menu in the previous code, but we're not actually doing anything with it yet. Let's stub in a call to a `loadMarkdown` function that will allow users to see the markdown and HTML for that file when they select it:

```javascript
$('#markdown-records').change(event => {
  // call loadMarkdown, passing in the current ID of
  // our data record as an integer
  loadMarkdown(parseInt(event.currentTarget.value));
});
```

Now, in `app.js`, we can add a `loadMarkdown` function that takes a single ID parameter to retrieve all the details for the existing record:


```javascript
function loadMarkdown(markdownFileId) {
  let mdFiles = db.transaction(DB_STORE_NAME, 'readwrite').objectStore(DB_STORE_NAME);
  let getRecord = mdFiles.get(markdownFileId);

  getRecord.onsuccess = function(event) {
    let mdResult = getRecord.result.markdownContent;
    let mdFileName = getRecord.result.fileName;

    $('#file-name').val(mdFileName)
    $('#live-markdown').val(mdResult);
    updatePreview(mdResult);
  };
}
```

This transaction is a bit simpler than trying to retrieve an entire list of records. We are still opening the same `objectStore` with read/write access, but now we can simply call `mdFiles.get()` to retrieve the specific record we're looking for. By passing in the id of the file to get, (remember we used `id` as our keypath when setting up our object store), we will be given our data object that we can now use to fill in our textareas.


### Adding a New Record
We've set up all the logic we need for displaying our data records, but we haven't actually added any functionality for putting one into the database. We'll use our submit button and service worker to add a record to our newly created object store. In `app.js`, let's send a message to our service worker with the markdown file information we want to store:

```javascript
function enableSubmitButton(event) {
  if (navigator.serviceWorker.controller) {
    $('#submit-markdown').on('click', function() {
      navigator.serviceWorker.controller.postMessage({
        authorName: 'Joe Shmoe',
        mdFileName: $('#file-name').val(),
        mdContent: $('#live-markdown').val()
      });
    });
  }
}
```

In our service worker, we can add an event listener to handle this message:

```javascript
self.addEventListener('message', event => {
  let mdRecordInfo = event.data;
  let openDBRequest = indexedDB.open('mdFileHistory');

  openDBRequest.onsuccess = (event) => {
    console.log('DB opened from service worker');
    
    let db = event.target.result;
    let mdFiles = db.transaction(['mdFiles'], 'readwrite').objectStore('mdFiles');
    let addRecord = mdFiles.add(mdRecordInfo);

    addRecord.onsuccess = (event) => {
      console.log('addRecord request succeeded');    
      self.clients.matchAll().then(clients => 
        clients[0].postMessage({
          'updateRecordCount': true,
          'recordId': event.target.result,
          'fileName': mdFileName
        })
      );
    }
  };
});
```

Once our record is added successfully, we're sending a message back to our application with an object of information that we can use to update our UI. In `app.js`, we can handle this message by adding an event listener to `navigator.serviceWorker`:

```javascript
navigator.serviceWorker.addEventListener('message', message => {
 if (message.data.updateRecordCount) {
  let currentCount = parseInt($('.counter').text());
  $('.counter').text(currentCount + 1);
  $('#markdown-records').append(`<option value=${message.data.recordId}>${message.data.fileName}</option>`);
 }
});
```

Now when we add a new record, we should see our UI automatically update with the latest information.

## Resources

[IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[Using IndexedDB MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)

[assets-cache]: /assets/images/lessons/service-workers/assets-cache.png
[notification]: /assets/images/lessons/service-workers/notification.png
[notification-permissions]: /assets/images/lessons/service-workers/notification-permissions.png
[devtools-service-workers]: /assets/images/lessons/service-workers/devtools-service-workers.png
[no-internet]: /assets/images/lessons/service-workers/no-internet.png
