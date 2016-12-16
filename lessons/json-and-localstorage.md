---
title: JSON and localStorage
length: 60
tags: web apis, storage, persistence
---

[`localStorage`][ls-mdn] allows a web application to store information.  Storage is unique to each domain. So, if you store some information on a page hosted at `github.com`, then it is not accessible from a page hosted at `twitter.com`. This is for security reasons as well as to guarantee that the pages won't end up with conflicting names and overwriting items in storage from another site.

`localStorage` supports the following methods:

- `localStorage.getItem()` gets an item from storage based on the key provided.
- `localStorage.setItem()` takes two arguments—a key and value—and stores the given value under the provided key.
- `localStorage.removeItem()` takes a key and removes that key and its associated value from storage.
- `localStorage.clear()` removes all items from storage for that domain.

[ls-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

## Your Turn

Open up the developer tools on this page and try the following:

1. `localStorage.setItem('storeMePlease', 2)`
2. `localStorage.getItem('storeMePlease')`
3. Refresh the page and try to get the item again.
4. `localStorage.removeItem('storeMePlease')`
5. `localStorage.getItem('storeMePlease')`
6. `localStorage.setItem('anotherThing', 'you look nice today')`
7. `localStorage.getItem('anotherThing')`
8. `localStorage.clear()`
9. `localStorage.setItem('somethingComplicated', { name: 'J Mascis', affiliation: 'Dinosaur Jr.' })`
10. `localStorage.getItem('somethingComplicated')`

What are your observations?

## JSON

When we're communicating with servers, we use a transport protocol called HTTP.

HTTP powers the web, but it does have one limitation. All information can only be sent back and forth using strings. Strings are great, but it's not hard to imagine a world where we might want to send slightly more complicated data structures back (e.g. objects and arrays) back and forth between the client and the server.

JSON stands for "JavaScript Object Notation" and is an alternative to XML as a standard for sending information back and forth over the web. It's a subset of JavaScript's object syntax. All JSON objects are valid JavaScript, but not all JavaScript objects are valid JSON.

JSON has the following rules in addition to the rules governing regular JSON:

- Keys must be double quoted.
- Values must be one of the following types:
    - Strings, double quoted
    - Numbers
    - Booleans
    - Arrays
    - Objects
- Values cannot be functions as JSON is just a way of conveying data.

The browser provides a `JSON` object with two methods.

- `JSON.stringify()` turns any JavaScript object into valid JSON.
- `JSON.parse()` turns any valid JSON into a JavaScript object.

### Your Turn

Take the object from the previous exercise that didn't work and refactor it. Don't look below quite yet...

1. You should use `JSON.stringify()` before storing it in `localStorage`.
2. You should use `JSON.parse()` after retrieving it from `localStorage`.

### Complete Workflow in Console

The goal is to take our object, store it in local storage, and then be able to take the object out of local storage and modify the object.

1. `var objectToStore = { name: 'J Mascis', affiliation: 'Dinosaur Jr.' }`
2. `var stringifiedObject = JSON.stringify(objectToStore)`
3. `stringifiedObject` (Notice our object has turned into a string!)
4. `localStorage.setItem('somethingComplicated', stringifiedObject)` (Stores the object in local storage)

Now the object is in local storage, and we can retrieve it out of local storage.

5. `var retrievedObject = localStorage.getItem('somethingComplicated')`
6. `retrievedObject` (Notice this is still the stringified version of our object - we need it to be a real object again, not a string)
7. `var parsedObject = JSON.parse(retrievedObject)`
8. `parsedObject` (We are now back to our original object!)

### Storage Events

Whenever you change a value in localStorage, the DOM will fire a `storage` event in every other page currently open on that domain.

Open [this CodePen](http://codepen.io/team/turing/pen/xOYdBG) up in two different windows to see.
