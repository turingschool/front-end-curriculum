---
title: Building Real-Time Applications with WebSockets
length: 120
tags: json, javascript, websockets, jquery, socket.io, node
---

## Learning Goals

* Understand what it means for an application to be "real time."
* Understand the pub/sub model
* Understand how WebSockets work
* Set up a basic Node.js server using Express
* Implement pub/sub in the browser using Socket.io

## Resources

* [right-now][rn] repository  in [turingschool-examples][org]

[org]: https://github.com/turingschool-examples
[rn]: https://github.com/turingschool-examples/right-now

## Warm Up

In your notebook, record your answers to the following questions:

- What does it mean to be _real time_?
- Can we name any applications that are _real time_?
- What's stopping our applications from being real time?

## Review of HTTP Request/Response Cycle

At a high level: the client makes a request to a server, a connection is made with the server, the server interprets the request, forms a response, sends the response back to the client, and closes the connection. [Here is a little more nitty-gritty info](http://celineotter.azurewebsites.net/world-wide-web-http-request-response-cycle/) on the details of a typical request-response cycle. Also, [this article](http://blog.catchpoint.com/2010/09/17/anatomyhttp/).

![HTTP Request-Response Cycle](https://image.slidesharecdn.com/inft132-09303webconcepts-090920164402-phpapp02/95/inft132-093-03-web-concepts-5-728.jpg?cb=1253465082 "HTTP Request-Response Cycle")

[image source](https://www.slideshare.net/mrees/inft132-093-03-web-concepts)

## A Thought Experiment

You are have a brand new job working with a hedge fund, and they need real-time data on stock prices for quick trades. The amount of money that the hedge fund makes is directly related to how good the data of the stock price is, so you want the most up-to-date prices.

Your boss demands for unknown reasons to implement a solution using the traditional _HTTP request/response cycle_ (not sockets).

How would you do this? Sketch out the API you would build to communicate with a stock market server that can tell you the prices in _real time_.

When you're done, think about the downsides of this application. How does the HTTP request/response cycle make this a difficult task to do efficiently? Remember: every request to a server costs money and time.

(**DON'T LOOK BELOW YET** - maybe you'll come up with a cool solution that is actually used.)

## HTTP Versions of "Real Time"

Suppose you want to check the value of some data on a server that changes periodically, but you don't know exactly when it will update. Here are some strategies used today, in the order of decreasing [latency](http://www.webperformancetoday.com/2012/04/02/latency-101-what-is-latency-and-why-is-it-such-a-big-deal/).

* **Polling:** Periodically check for data. For instance, you could send a request to the server for data every two seconds. Why is this a bad idea? Every request to a server costs someone something - if you have access to an API, then you are likely paying for the API per request, and you don't want to send any unnecessary requests if the data isn't actually updating every two second.

* **Long-Polling:** Make a request to the server for data, and hold the connection until there is new data. The benefit is less requests and only when you need them. The disadvantage is that you still have to make a new requests and connections to the server after you receive new data. [Details on downsides of long-polling](https://blog.baasil.io/why-you-shouldnt-use-long-polling-fallbacks-for-websockets-c1fff32a064a).

* **Streaming:** In HTTP version 1.1 (which we still use today), there is an additional header you can add to your request called `Connection: Keep-Alive`. This will open up an indefinite connection between the client and the server, which is close to what we want! It's like long-polling, but the server never signals to the client that the response is complete, thereby leaving the connection open. In the end, you are still using the HTTP protocol to send information. So all of the header information is still sent with each message, which can be kilobytes in size.

[This article](http://websocket.org/quantum.html) has a good explanation of long-polling vs. streaming vs. WebSockets. At the end of the day, anything using the HTTP request/response cycle is always going to be [half-duplex](https://en.wikipedia.org/wiki/Duplex_(telecommunications)), or one-way communication only. Think of a two-way radio where only one person at a time can talk.

## WebSockets!

### Explain WebSockets vs. the HTTP request/response cycle

* A WebSocket is a persistent two-way TCP connection (full-duplex) between the server and the client
* The server can push an event without having to receive a request from the client
* The client can send messages to the server without having to wait for a response
* A handshake initiates the WebSocket connection (really a [TCP connection](http://www.taltech.com/datacollection/articles/a_brief_overview_of_tcp_ip_communications))

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

* In what contexts would you want to consider WebSockets?
  * Chat/instant messaging
  * Real-time analytics
  * Document collaboration
  * Streaming
* WebSockets work best when there is an **event-driven** server on the backend
  * Ruby with [EventMachine][]
  * [Node.js][]
* [Socket.io][] and [Faye][] will fallback to other methods if it can't make a WebSocket connection
  * Some examples include: long-polling, Adobe Flash sockets
* ActionCable

[Socket.io]: http://socket.io/
[Faye]: http://faye.jcoglan.com/
[Node.js]:http://nodejs.org
[EventMachine]: http://rubyeventmachine.com/

## Experiment: Right Now

### Getting Started

[This repository][rn] contains a simple little Express app that servers a static `index.html` page. It also has [Socket.io][] hooked up by default — despite the fact that we're not using it at this moment.

Run `npm install`. Then you can fire up the server with `npm start`.

Let's start with a simple "hello world" implementation.

In our server, add the following code:

```js
// server.js
io.on('connection', (socket) => {
  console.log('Someone has connected.');
});
```

When a connection is made to via WebSocket, you're server will log it to the console. The next step, of course is create a connection via WebSocket, right?

```js
// public/application.js
var socket = io();
```

This function initiates the handshake and makes the connection. The default URL for the socket connection is `/`, which is what we want, so we don't need to pass anything into `io()`.

You should see the following in your terminal after you refresh the page:

```shell
Your server is up and running on Port 3000. Good job!
Someone has connected.
```

We can also let the client celebrate our new connection.

```js
// public/application.js
socket.on('connect', () => {
  console.log('You have connected!'); // This will log to the browser's console, not the terminal
});
```

There are [other built-in events](https://socket.io/docs/client-api/#event-connect) you can listen for other than `'connect'`. One thing that you've probably picked up on is that we have an `io` object on the server as well as the client-side of our application.

So, let's send a message over the wire when a user connects.

```js
// server.js
io.on('connection', (socket) => {
  console.log('Someone has connected.');
  socket.emit('message', { user: 'turingbot', text: 'Hello, world!' });
});
```

Like everything with WebSockets, this is a two-part affair. The server is now emitting a `message` event. We now need to do something when the client receives that event.

```js
// public/application.js
socket.on('message', (message) => {
  console.log('Something came along on the "message" channel:', message);
});
```

Super cool. You did the thing! Let's shoot some stuff over the wire on a regular interval.

```js
// server.js
io.on('connection', (socket) => {
  let interval = setInterval(() => {
    socket.emit('message', { user: 'turingbot', text: 'I am a banana.' });
  }, 1000);

  socket.on('disconnect', () => {
    clearInterval(interval);
  });
});
```

### Your Turn

So, right now, we're pushing data from the server out to the client. That's cool, but it would be nicer if we displayed them onto the page.

Can you write some jQuery to append these messages to the DOM?

### Talking Back to the Server

WebSockets are a two-way street. We can send something back to the server over `socket.send`.

```js
// public/application.js
socket.on('connect', () => {
  console.log('You have connected!');
  socket.send({
    username: 'yournamehere',
    text: 'I did the thing.'
  });
});
```

Let's also write a listener on the server.

```js
// server.js
io.on('connection', (socket) => {

  let interval = setInterval(() => {
    socket.emit('message', {user: 'turingbot', text: 'I am a banana.'});
  }, 1000);

  socket.on('message', (message) => {
    console.log(message);
  });

  socket.on('disconnect', () => {
    clearInterval(interval);
  });
});
```

**Important Note**: We're doing it like this to demonstrate how you would push information from the client to the server using WebSockets. But, keep in mind, that the client has always been able to send requests to the server. It's totally okay to use AJAX in this situation without WebSockets.

### Check Back on WebSockets

Everyone get their pens and paper out again! Now that you've had some experience working with WebSockets, in your notebook, draw out a diagram of the HTTP upgrade request and then the WebSocket connection.

### Your Turn

* Write the functionality on the client that sends something over the `mission` event.
* Write the functionality on the server that listens for the `mission` event and logs it to the console.

Here is a little bit of code to point you in the right direction.

```js
io.on('connection', (socket) => {
  socket.on('eventName', (message) => {
    console.log(message);
  });
});
```

### Adding Some Nuance

So far, we've had one server talking to one client. This has a lot of practical value, but what if we wanted to create add more functionality to our little application? Socket.io has a few other APIs for fine-tuning your application.

```js
// Send to current request socket client
socket.emit('message', {user: 'turingbot', text: 'You can do the thing.'});

// Sending to all clients, include sender
io.sockets.emit('message', {user: 'turingbot', text: 'You can do the thing.'});

// Sending to all clients except sender
socket.broadcast.emit('message', {user: 'turingbot', text: 'You can do the thing.'});
```

You can also start to break your messaging out into different event names. Here's an example.

```js
socket.on('new message', addMessageToPage);
socket.on('new connection', () => { updateStatus('A new user has connected.'); });
socket.on('lost connection', () => { updateStatus('Someone has disconnected.'); });
```

There are also some helpful methods for seeing how many clients are currently connected.

- `io.engine.clientsCount`
- `io.sockets.sockets.length`
- `Object.keys(io.sockets.connected).length`

### Your Turn

* When a user connects. Broadcast a message to all of the other clients connected announcing that someone new has connected.
* When a user disconnects. Broadcast a message to all of the other clients connected announcing that someone new has disconnected.
* When a message comes in from a user. Broadcast it out to all users.

## Pair Project

You're going to build a small chat room (like [this one][ch]) using Socket.io and jQuery.
Users should be able to fill out a little form, which will send their message over the
WebSocket to the server, which will broadcast it out to all of the connected clients.

[ch]: https://fullstack-denver.herokuapp.com/websockets/

### Extension

* Can you take advantage of [node-tweet-stream][nts] to stream tweets to your chatroom?

[nts]: https://www.npmjs.com/package/node-tweet-stream
