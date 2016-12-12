---
title: React Native Routing & Navigation
length: 1 hour
tags: react, react native, routing, navigation
---

### Goals

By the end of this lesson, you will:
* Be able to define and navigate to multiple scenes in a React Native application
* Understand how to declare routes for your React Native application
* Be familiar with the Navigator API and its upcoming, experimental features

## The Navigator
The `Navigator` is responsible for transitioning users between different scenes of your application. Depending on your use case, you can choose between using `Navigator`, which is supported in Android and iOS, or using the more specific `NavigatorIOS`, which is only supported on iOS devices, but gives you more advanced navigation options.

In this lesson, we'll use the more generic `Navigator` and learn how to navigate between scenes in a React Native application. 

## Defining Routes
Each page, or "scene", in your application must be defined by a route. Similar to your standard React applications using React Router, you'll want to define a set of routes for your app to recognize.

With React Native, defining a route requires any unique properties you'd like to set on that particular route, as well as a `renderScene` property that defines how render it.

## Creating a Navigation Bar

## NavigatorExperimental


## Resources
- [Navigator API](https://facebook.github.io/react-native/docs/navigator.html)
- [Navigation Guide](https://facebook.github.io/react-native/docs/navigation.html)