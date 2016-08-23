---
title: Bird Feeder 1.0
---

## setup

Do this now:

- Install the [Heroku Toolbelt](https://toolbelt.heroku.com).
- Fork [this repository][chat-box], clone it, and run `npm install`.

## Introduction

Today, you'll be building a small chat application. (I know, I know.) Just to keep things fresh, let's make believe that it's a simple microblogging application (i.e. Twitter).

This time around, we'll be using AJAX to synchronize our messages with the server. Luckily, some nice person built you a server and did all of the necessary build tool setup for you.

You'll need to fork [this project][chat-box] to enjoy the fruits of this lovely person's labor.

[chat-box]: https://github.com/turingschool-examples/chat-box-webpack

## Some Tasting Notes

- `npm start` will spin up both the server and webpack thanks to a nifty tool called [concurrently][], which allows you to spin up multiple processes in a single tab.
- Both JSHint and ESLint have been setup and configured for your enjoyment.
- All of the code you need to write lives in the `lib` directory.
- The markup lives in `views/index.html`, if you need/want to change that.
- Sass has been setup for you and you can edit the styling in `lib/style.scss`—although that's probably not the best use of your time and attention during this session.

## Your Mission

- Get all of the messages from the server and display them on the page.
- Implement the ability to delete a message.
- Implement the ability to update a message.
- Properly display the error message to the user if one exists.
- Show a loading message while waiting for the server to respond.

[concurrently]: https://www.npmjs.com/package/concurrently
