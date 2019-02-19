---
title: Introduction to React Native with Expo
module: 4
tags: react native, mobile, expo
---

### Goals

By the end of this lesson, you will:

* Understand the differences between React and React Native
* Know how to bootstrap a React Native application using Expo
* Understand how to use an iOS simulator
* Understand the different native components and how to style them
* Know how to debug React Native with warnings, errors, and Chrome debugger
* Be familiar with when to use the different React lifecycle methods for mobile development

---

Welcome to the world of mobile development. React Native is just like the React you know and love for the web, but it compiles JavaScript to native code (Objective-C, Java) for a specific native OS. So you get the features of native apps while just writing JS! You also get the benefits of reusable components, state management with Redux, and Chrome debugging tools.

Here are some things we already know:

- JavaScript
- React
- Redux
- npm
- `package.json`

What is new is dealing with iOS and Android. For the most part you can write a most of your code that is used by both. But know that there will be differences in some UI components that you use, the process for emulating devices will be different and there will be performance differences between the two (if it runs fast on Android, it should be blazing fast on iOS).

Be aware that there are some drawbacks to using React Native. One is that the Facebook team releases updates every 2 weeks. The code updates consistently and there will be breaking changes in the future. Also, if you have a lot of components to scroll through, a user can gesture fast enough to cause a lag in performance.

That being said, there are huge advantages to using React Native. You can prototype, develop, and deploy mobile apps very quickly using just JS that works natively on iOS and Android. You can use hot-module reload to update your app and instantly see the change without recompiling all of your code. You can also write native code to create custom components or tweak performance and then easily drop them into your React Native code. There are great APIs for animations and gestures to create rich mobile user experiences. All in all, React Native is a fantastic way to jump into mobile development and create useful apps that work across Android and iOS.

## Expo

Getting started with React Native development can require a lot of development
environment configuration, including Xcode and Android studio. For some
applications, this is unavoidable, however for many applications, we can instead
use the Expo framework to bootstrap our React Native applications.

Per the docs: [Expo](https://expo.io/) is a free and open source toolchain 
built around React Native to help you build native iOS and Android projects 
using JavaScript and React.

### Bootstraping our application

### Running the application on a device

To take advantage of Expo, you'll need to download the Expo client app to your
device. There are variants for both [iOS and Android](https://expo.io/tools#client).

