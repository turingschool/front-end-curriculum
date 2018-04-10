---
title: JSON and localStorage
length: 60
tags: web apis, storage, persistence
---

### Learning Goals
- Understand the difference between server-side and client-side storage
- Understand and utilize localStorage
- Understand and utilize JSON

### Vocab

- `Client-side Storage` Storage on the client (usually the browser)
- `Server-side storage` Storage on the server
- `localStorage` An implementation of Client-side Storage
- `JSON` (JavaScript Object Notation) is a lightweight data-interchange format.

### Client-side vs. Server-side Storage

Up until this point, the data in our projects has disappeared whenever we refresh our page, which is problematic. It would be nice if we could keep our ideas on the page without having to recreate them every time we want to see our CSS changes. There are two places we could store our data to make that happen.

There are two primary ways of storing data in web applications, which are - server-side and client-side.

**Server-side storage:** On someone else's computer (often times one that is in a data warehouse), in a database. Good for storing sensitive information.

**Client-side storage:** On the user's computer, using a JavaScript API (Most commonly the web storage API). Good for storing less sensitive information (ie. a shopping cart).

**Your turn** With a partner, come up with an analogies for server-side and client-side storage.

### Client-side storage

Browsers provide two main types of immediate storage that is accessible without messing with a database: [`sessionStorage`][ss-mdn] which gets reset whenever your browser session restarts, and [`localStorage`][ls-mdn], which has no specified expiration date. Today we will strictly be talking about `localStorage`.

The web storage API is a secure way your browser can store key value pairs that are unique to each domain. So, if you store some information on a page hosted at `github.com`, then it is not accessible from a page hosted at `twitter.com`. This is for security reasons as well as to guarantee that the pages won't end up with conflicting names and overwriting items in storage from another site. 

### Local Storage 

[`localStorage`][ls-mdn] is a property you can call on the global `window` variable within your browser, just like you can call `document`, that allows you to access a local storage object for persisting data.

`localStorage` supports the following methods:

- `localStorage.setItem();` takes two arguments—a key and value (key must be string)—and stores the given value under the provided key.
- `localStorage.getItem();` gets an item from storage based on the key provided.
- `localStorage.removeItem();` takes a key and removes that key and its associated value from storage.
- `localStorage.clear();` removes all items from storage for that domain.

[ls-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[ss-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[gs-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/globalStorage

## Your Turn

Open up the developer tools on this page and try the following:

1. `localStorage.setItem('storeMePlease', 2);`
2. `localStorage.getItem('storeMePlease');`
3. Refresh the page and try to get the item again.
4. `localStorage.removeItem('storeMePlease');`
5. `localStorage.getItem('storeMePlease');`
6. `localStorage.setItem('anotherThing', 'you look nice today');`
7. `localStorage.getItem('anotherThing');`
8. `localStorage.clear();`
9. `localStorage.setItem('somethingComplicated', { crust: 'deep dish', type: 'veggie' });`
10. `localStorage.getItem('somethingComplicated');`

What are your observations?

### What is JSON?

When we're communicating with servers, we use a transport protocol called HTTP.

HTTP powers the web, but it does have one limitation. All information can only be sent back and forth using strings. Strings are great, but it's not hard to imagine a world where we might want to send slightly more complicated data structures back (e.g. objects and arrays) back and forth between the client and the server.

JSON stands for "JavaScript Object Notation" and is an alternative to [XML](https://gist.github.com/stevekinney/210a7fb9c9b3c0be2e53) as a standard for sending information back and forth over the web. It's a subset of JavaScript's object syntax. **JSON** is a language-independent data format that is easy for humans to read and write and easy for machines to parse and generate.

JSON has the following rules:

- Keys must be double quoted.
- Values must be one of the following types:
    - Strings, double quoted
    - Numbers
    - Booleans
    - Arrays
    - Objects
- Keys can only be properties, not methods  
- Therefore, values cannot be functions  

**JSON is a means of sending data.**

The browser provides a `JSON` object with two methods.

- `JSON.stringify();` turns any JavaScript object into valid JSON.
- `JSON.parse();` turns any valid JSON into a JavaScript object.

### Your Turn

Take the object from the previous exercise that didn't work and refactor it. Don't look below quite yet...

1. You should use `JSON.stringify();` before storing it in `localStorage`.
2. You should use `JSON.parse();` after retrieving it from `localStorage`.

### Complete Workflow in Console

The goal is to take our object, store it in local storage, and then be able to take the object out of local storage and modify the object.

1. `var objectToStore = { crust: 'deep dish', type: 'veggie' };`
2. `var stringifiedObject = JSON.stringify(objectToStore);`
3. `stringifiedObject` (Notice our object has turned into a string!)
4. `localStorage.setItem('somethingComplicated', stringifiedObject);` (Stores the object in local storage)

Now the object is in local storage, and we can retrieve it out of local storage.

5. `var retrievedObject = localStorage.getItem('somethingComplicated');`
6. `retrievedObject` (Notice this is still the stringified version of our object - we need it to be a real object again, not a string)
7. `var parsedObject = JSON.parse(retrievedObject);`
8. `parsedObject` (We are now back to our original object!)

### Storage Events

Whenever you change a value in localStorage, the DOM will fire a `storage` event in every other page currently open on that domain.

Open [this CodePen](http://codepen.io/team/turing/pen/xOYdBG) up in two different windows to see.  

### Dig Deeper
* [JSON Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
* [Mozilla Docs on Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 
* [Google Docs on Storing/Caching Data in Chrome](https://developers.google.com/web/tools/chrome-devtools/manage-data/local-storage)
