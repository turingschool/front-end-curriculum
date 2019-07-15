---
title: Introduction to AJAX with jQuery
module: 2
---

## Setup and Administrivia

* Clone down [this repository](https://github.com/turingschool-examples/chat-box) and follow the installation instructions.

## In Theory

Let's talk about the following:

- A review about how HTTP even works
- The difference between "normal" HTTP requests and AJAX requests
- A cursory discussion of what it means for code to be _asynchronous_.

## In Practice

In addition to DOM manipulation, jQuery also provides a pleasant abstraction over sending AJAX calls to the server.

```js
$.ajax();
```

This method takes a number of different options.

```js
$.ajax({
  method: 'POST',
  dataType: 'json',
  url: '/api/v1/messages',
  data: JSON.parse({ user: 'Steve', message: 'I am a banana.' }),
  success: function (data) {
    console.log('Message was sent successfully.', data);
  },
  error: function (error) {
    console.error('There was some kind of error.', error);
  }
});
```

Wow, that's a lot. Generally speaking, we don't use this method a lot because there are more convenient methods available to us.

- `$.get()`
- `$.getJSON()`
- `$.post()`

These are just sugar over the big, gnarly method we saw earlier. `$.get()` will always send a `GET` request. `$.post()` will always send a `POST` request.

### Three Different Ways

1. The long way (see above).
2. Callbacks
3. Promises

## Together

All together, we'll implement the ability to post messages to the API.

## Your Turn

With your pair, try the following:

- Get all of the messages from the server and display them on the page.
- Implement the ability to delete a message.
- Implement the ability to update a message.
