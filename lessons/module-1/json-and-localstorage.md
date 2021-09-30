---
title: JSON and localStorage
length: 180
tags: web apis, storage, persistence
---

## Learning Goals

- Understand the difference between server-side and client-side storage
- Understand and utilize localStorage
- Understand and utilize JSON

## Vocabulary

- `Client-side Storage` Storage on the client (usually the browser)
- `Server-side storage` Storage on the server
- `localStorage` An implementation of Client-side Storage
- `JSON` (JavaScript Object Notation) a syntax for serializing objects, arrays, numbers, strings, booleans, and null

<section class="call-to-action">
  <h3>Warm Up</h3>
  - Read through the following section on "Client-side vs. Server-side Storage"
  - Come up with a few examples of when you think data would be stored server-side vs client-side.
  - Come up with an analogy for server-side and client-side storage
</section>

## Client-side vs. Server-side Storage

Up until this point, the data in our projects has disappeared whenever we refresh our page, which is problematic. It would be nice if we could keep our ideas on the page without having to recreate them every time we want to see our DOM changes. There are two places we could store our data to make that happen.

**Server-side storage:** On someone else's computer (often times one that is in a data warehouse), in a database. Good for storing sensitive information.

**Client-side storage:** On the user's computer, using a JavaScript API (Most commonly the web storage API). Good for storing less sensitive information (ie. a shopping cart).

## Client-side Storage

Using the web storage API, browsers provide two main types of immediate storage that is accessible without messing with a database:
- <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"><code>sessionStorage</code></a> - gets reset whenever your browser session restarts
- <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"><code>localStorage</code></a> - has no specified expiration date.

The web storage API is a secure way your browser can store key value pairs that are unique to each domain. So, if you store some information on a page hosted at `github.com`, then it is not accessible from a page hosted at `twitter.com`. This is for security reasons as well as to guarantee that the pages won't end up with conflicting names and overwriting items in storage from another site.

## Local Storage

<a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"><code>localStorage</code></a> is a property you can call on the global `window` variable within your browser, just like you can call `document`, that allows you to access a local storage object for persisting data.

`localStorage` supports the following methods:

- `localStorage.setItem();`  
  - takes 2 arguments — a key and value (key must be string)
  - and stores the given value under the provided key.  
- `localStorage.getItem();`  
  - takes 1 argument - a key (a string)  
  - gets an item from storage based on the key provided.  
- `localStorage.removeItem();`  
  - takes 1 argument - a key (a string)  
  - removes that key and its associated value from storage.  
- `localStorage.clear();`   
  - no arguments  
  - removes all items from storage for that domain.  

[ls-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[ss-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[gs-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Window/globalStorage

<section class="checks-for-understanding">

### Practice

Open up the developer tools on this page and try the following. Make sure to take note of your observations through each step.

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

#### Finished early?
- Experiment storing different types of data. Take note of what gets logged! Is there anything we can't store?
- Is there a way we can use the Dev Tools to see everything that's currently stored in localStorage?
</section>


## What is JSON?

JSON stands for "JavaScript Object Notation" and is a method for representing complex data types as strings. It's useful for localStorage, and it's also used for sending information back and forth over the web. It's a subset of JavaScript's object syntax. **JSON** is a language-independent data format that is easy for humans to read and write and easy for machines to parse and generate.

JSON has the following rules:

- Keys must be double quoted.
- No trailing comma.
- Values must be one of the following types:
    - Strings (double quoted)
    - Numbers
    - Booleans
    - Arrays
    - Objects

**Here's an example of what JSON looks like:**
```
{
  "commonName": "Swiss Cheese Plant",
  "classification": "Monstera",  
  "family": "Araceae",
  "maxHeightInFeet": 30,
  "flower": true,
  "scientificName": "Monstera Deliciosa"
}
```

**Let's put together localStorage and JSON!**

The browser provides a `JSON` object with two methods.

- `JSON.stringify();`  
  - takes 1 argument - a JavaScript object  
  - turns any JavaScript object into a valid JSON string.  
- `JSON.parse();`   
  - takes 1 argument - valid JSON  
  - turns any valid JSON into a usable JavaScript object.  

<section class="checks-for-understanding">

### Your Turn

Take the object from the previous exercise that didn't work and refactor it so that it can be saved and retrieved from Local Storage. Don't look below quite yet...

1. You should use `JSON.stringify();` before storing it in `localStorage`.
2. You should use `JSON.parse();` after retrieving it from `localStorage`.
</section>

<section class="answer">
### Complete Workflow in Console

The goal is to take our object, store it in local storage, and then be able to take the object out of local storage and modify the object.

1. `var pizzaToStore = { crust: 'deep dish', type: 'veggie' };`
2. `var stringifiedPizza = JSON.stringify(pizzaToStore);`
3. `stringifiedPizza` (Notice our object has turned into a string!)
4. `localStorage.setItem('somethingComplicated', stringifiedPizza);` (Stores the object in local storage)

Now the object is in local storage, and we can retrieve it out of local storage.

5. `var retrievedPizza = localStorage.getItem('somethingComplicated');`
6. `retrievedPizza` (Notice this is still the stringified version of our object - we need it to be a real object again, not a string)
7. `var parsedPizza = JSON.parse(retrievedPizza);`
8. `parsedPizza` (We are now back to our original object!)
</section>


<section class="checks-for-understanding">
### Your Turn
  Clone [this repo](https://github.com/turingschool-examples/localstorage-playground) and build out the following functionality with your partner:
- When a user clicks the "Add Contact" button, their name and email should be stored as an object in localStorage
- When a user click the "Display Contact" button, their name and email should be pulled from localStorage, and displayed in the `.display-area` section (NOTE: The HTML structure for this is up to you!)
- BONUS: How could you add and display multiple users instead of just one?
</section>


<section class="call-to-action">
  <h3>Journal Wrap Up</h3>
  - Explain the difference between client-side and server-side storage.
  - Define JSON in your own words.
  - Describe a situation where you would use localStorage instead of server-side storage.
</section>


## Dig Deeper
* [Local Storage Fairy Tale (by Scott Ertmer)](https://docs.google.com/presentation/d/14_08bVkzfqIKXD3UAM1DFrrqlQto8I2v4XBhDza8BAo/edit#slide=id.gbff5b80357_0_19)
* [JSON Mozilla Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
* [JSON Validator](https://jsonlint.com/)
* [Mozilla Docs on Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
