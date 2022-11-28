---
title: "New Technologies - Differentiation"
length: 1 hour
tags: node, express, progressive web app, localization
---

## Goals

- Introduce yourself to new, advanced topics for front-end development
- See what interests you enough to learn on your own and incorporate into your cross-pollination project
- Differentiation!

## Topics

* IndexedDB (PWA)
* Background Sync and Push Notifications (PWA)
* Performance
* Localization and Internationalization
* Websockets

### IndexedDB

#### What is it?
An offline database in your browser!

#### When is it used?
If you have intermittent connectivity (offline), and need to store structured data to send to a server at a later time. Typically used in progressive web apps.

#### Resources and Tutorials
* [MDN Reference Docs](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* [MDN Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
* Should probably use [Dexie](http://dexie.org/) to interact with IndexedDB

#### Expectations
* Should be able to store data temporarily in IndexedDB while offline


### Background Sync and Push Notifications

#### What is it?
While not tied together programmatically, they are typically used together. Background sync enables an application to hold onto a job in a queue when offline, and then 
when the app regains connectivity, background sync completes job(s) in the queue - like sending information to a server to save data.

Push notifications are notifications you are used to seeing on your phone or on your desktop when you get a Slack message, for instance.

#### When is it used?
Mainly used for progressive web apps to support intermittent connectivity.

#### Resources and Tutorials
* [Background sync by Google](https://developers.google.com/web/updates/2015/12/background-sync)
* [Short tutorial](https://notes.eellson.com/2018/02/11/chrome-the-background-sync-api-and-exponential-backoff/)

#### Expectations
An app should be able to save a job in a queue while offline and complete the job when the app regains connectivity.

### Performance

#### What is it?
The most ambiguous of the topics. The idea is to make our applications faster, but how do you know where to focus your energy? Half of the battle with performance is 
measuring your apps performance. Learning how to use your developer tools will enable you to focus where you put time into improving performance.

#### When is it used?
Umm...when you want something to be faster.

#### Resources and Tutorials
* [Intro to Performance lesson](http://frontend.turing.edu/lessons/module-4/intro-to-performance.html)
* [Chrome Performance Tools](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)

#### Expectations
Measure performance of the application _before_ and _after_ you make any changes so you have a performance metric to compare to.


### Localization and Internationalization

#### What is it?
We mainly focus our applications for one user group - Americans... Internationalization and localization is all about transforming your application to better 
server international users, whether that is with translation, currency, date, or changes in right-to-left/left-to-right languages. The main takeaway is that 
localization is not just about translation.

#### When is it used?
When you anticipate having users outside of the United States or other language speakers users your app even withing the United States.

#### Resources and Tutorials
* [Localization and Internationalization](http://frontend.turing.edu/lessons/module-4/localization.html)

#### Expectations
Use a internationalization and localization libraries to localize your application for at least one other locale.

### Websockets

#### What is it?
Websockets are a special kind of connection between a client and a server. It uses TCP connections instead of traditional HTTP, which means you can send more information 
efficiently over an internet connection. A websocket is a two-way connection where the client can send information to the server, and the server can send information 
to the client without the client even asking! Think Slack messages or document sharing/editing in Google docs.

#### When is it used?
When an application needs a fast, two-way connection between the client and server, or when multiple connections need to be made between clients and a server (think 
group messages in Slack).

#### Resources and Tutorials
* [Websockets lesson](http://frontend.turing.edu/lessons/module-4/websockets.html)

#### Expectations
Incorporate a websocket connection - you can use websocket libraries such as [socket.io](https://socket.io/).
