---
title: API’s and a short talk on how the web works
length: 180
tags: javascript
module: 2
---

## Context

On me and my wife’s second date we went to multiple restaurants. The fact that I could afford to take her out on a date was a miracle, and the fact that she actually was going on a second date with me was also a miracle.  Now at the two restaurants we went to the one thing they all had in common was they all provided a waiter.

Now I love cooking as much as the next person, but if I wanted to order something it wouldn’t be appropriate for me to get up from the table, put on an apron, fire up the stove, and start cooking. That’s not how things work.

Typically what you do is talk to your waiter. You can order something, you can cancel an order, if an order comes back incorrectly you can actually edit the order, and at the end of the night you get a check.

Now these are typical interactions. I don’t really have to explain to you how all of this works. Now if we think critically this is how API’s work.  Follow me here haha.

## What is HTTP?

HTTP stands for HyperText Transfer Protocol.  Http is kind of the life blood of the internet. HTTP gives us a number of ways to utilize the web. In fact as a front end developer you’ll be using these request to communicate to APIs.

Before we continue lets define some of these terms:

Web-server: A network application that listens on a port. It processes HTTP requests and responds with appropriate static files

HTTP requests: A form of communication between the client and the Web-server.

Web-client: An application that can speak to a web server
We most commonly know web clients as our browsers: Chrome, Safari, Firefox, Opera (and maybe even IE…)
Others include cURL

## How do I communicate to an API / Server?

Going back to our previous example If I’m sitting a table with my wife and I ask the waiter to gat me a glass of water, he/she will go to the water pitcher, fill up a glass of water, and return with the water for me.

In our example the waiter represents a GET request.

GET: simply means I am requesting something from the server / api I expect a response back.

POST: You are adding information to the server / api

DELETE : You are removing information from the server / api

PUT: You are editing information from the server / api

All of these things work in conjunction with each other. In essence this is what our experience with most technology feels like.  

## Practical application.

As javascript developers we will be developing this interaction. For most of us we will be grabbing data that the Database serves up to us (API) and giving it value. We grab the data via something we like to call AJAX. AJAX stands for Asynchronous Javascript And XML. We utilize javascript to create these web request for us.

Now there are multiple ways to do this. With that being said Let’s go ahead and clone [this repo](https://github.com/turingschool-examples/chat-box).

Now that it’s cloned lets go ahead an NPM install.

Once all the dependencies are installed let’s take a look at our code base.

We have to change one thing inside of our code base.

```
app.post('/messages', (request, response) => {
  const  message = request.body;

  for (let requiredParameter of ['user', 'message']) {
    if (!message[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { user: <String>, message: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  message.id = message.id || Date.now();
  app.locals.messages.push(message);
  response.status(201).send({message: message });
});

```
With that being said lets move over to the second part of this [lesson](http://frontend.turing.io/lessons/introduction-to-ajax.html
