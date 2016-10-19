---
title: Firebase-Primer
length:
tags: firebase
---

# Introduction to Firebase.

### What is Firebase?

Firebase is real time database which provides an API that allows developers to store and sync data across multiple clients. It allows us to import a full back-end into our front end application.  It gives us some really cool things like OAuth, Web-Sockets, and a Real-Time database.

Up to this point we’ve really been working with building out our front-end of our applications. The only real interactions we’ve had with a back-end is consuming data from an API which is great. As front-end engineers you’ll be interacting typically with the back-end to some sort of capacity. What firebase does for us is essentially give us a back-end built out that we can leverage ourselves.

### History

Firebase originally started off as a real time chat application called Envolve that allowed users to chat with each-other in real time. Andrew Lee and James Taplin (founders) realize that developers were using the application for other purposes. Thus Firebase was born. It was later acquired by Google in October 2014.

### The Why

As front-end engineers It’s super easy to bypass some of things backend developers create. Ultimately I do believe that we need to be aware of how these tools work. Things like OAuth, Websockets, and interacting with the Database are going to be expected of you when you are in the field. My job is to prepare you for those interactions. Let’s talk a little bit about what some of these terms are and what they mean.


### What is Oauth?

OAuth (Open Authorization)  allows notifying a resource provider (e.g. Facebook) that the resource owner (e.g. you) grants permission to a third-party (e.g. a Facebook Application) access to their information (e.g. the list of your friends).
This is important for us because within firebase we have the ability to choose in which way we’d like our Application to authorize users.

### Real-Time Database
The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our iOS, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.
This allows for real-time updates and makes our applications pretty fast

### Your Turn.

Look through these resources before tomorrow. Please have the tutorial finished by end of today. We will be going through an implementation of Grudge-Box with Firebase.

During the work time please look into the following resources.

- [Getting Started with Firebase on the Web](https://www.youtube.com/watch?v=k1D0_wFlXgo)

- [Getting Started with Firebase Storage on the Web](https://www.youtube.com/watch?v=SpxHVrpfGgU&index=13&list=PLl-K7zZEsYLnJVX_0zbKytptZGugPIbJR)

- [Getting Started with Firebase Hosting on the Web](https://www.youtube.com/watch?v=meofoNuK3vo&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX&index=11)

- [Getting started with Firebase Auth on the Web](https://www.youtube.com/watch?v=-OKrloDzGpU&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX&index=8)

Complete the following tutorial:

- [Build a Real Time Chat Application](https://codelabs.developers.google.com/codelabs/firebase-web/index.html?index=..%2F..%2Findex#0)
