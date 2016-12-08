---
title: Introduction to React Native
module: 4
status: draft
---

An example repository of the completed example can be found [here](https://github.com/turingschool-examples/secret-box).

Welcome to the world of mobile development. React Native is

Here are some things we already know:

- JavaScript
- CommonJS module system (`require` and `module.exports`)
- React
- Redux
- npm
- `package.json`

## Your First React Native Application

First let's get our dependencies ready for React Native. Watchman is a tool built by Facebook to watch the file system and reload your code on the mobile emulators:

```js
// From the root directory
brew install watchman
npm i -g react-native-cli
```

Now we are ready to create our app. Using the React Native CLI, it's super easy to get your project up and running:

```js
react-native init AwesomeProject
cd AwesomeProject
// To run in iOS
react-native run-ios
// To run in Android
react-native run-android
```

### Additional Android setup
[Follow these instructions to get setup on a free Android emulator](http://facebook.github.io/react-native/releases/0.23/docs/android-setup.html#content)

### First Time Around the Block

A React Native app looks very similar to React apps you've seen before. You use render to display information to the user, pass around props and state, and use the lifecycle components to manage state. One of the first differences you will notice is that React Native apps come with two different index.js files:

* index.android.js
* index.ios.js

I'll let you take a wild guess why they exist. Later on I will show you how to write most of your code platform-agnostic and use the index.js files to deal only with platform specific differences. But for now just think of these as the same file.

Another change between normal React and React Native is that instead of using HTML we use mobile components. These are native UI components and can vary depending on the platform. The nice thing is that we still utilize JSX so it really isn't too big a difference. Here's a general mapping of the most common components vs. HTML:

* <View /> = <div>
* <Text /> = <p><h1><h2><h3><h4><h5><h6>
* <TextInput /> = <input type="text">
* <TouchableHighlight /> = <button>
* <ListView /> = <table>
* <Image /> = <img>

But this being mobile, we have to be able to respond to user gestures and navigators. Luckily there are components for that too:

* <Navigator /> (also <NavigatorIOS />)
* <StatusBar />
* <Slider />
* <ScrollView />
* <Picker /> (also <PickerIOS />)
* <Modal />
* <Switch />

You can see that IOS tends to have an ioS specific component (...Android does too on some components) because ioS is no fun and doesn't like you customizing components. You can use <Navigator /> for ioS but if you are building strictly for Apple products using <NavigatorIOS /> leverages native UIKit navigation.

### Let's Talk Styles

No more CSS! Why...

### Let's Talk Animations


### Let's Talk Debugging
As we all know, we no longer in a browser where we can throw debuggers and console.log()s to our heart's desire. But thankful React Native gives us a couple of tools to make debugging like good old times. First, you can throw a console.error('whatver') in your React Native code and redbox (not the movie rental but an error messaging feature) with throw up a red screen with whatever you put in console.error(). An even better feature is the ability to turn on remote debugging. With your ioS emulator running, click cmd+control+z to pull up the dev tools. Select Debug JS Remotely and a web browser pointed at http://localhost:8081/debugger-ui will open. Open up the console and select the Pause on Exceptions button. Then throw a debugger in your JS and reload the emulator. The debugger should trigger like a normal debugger and you can inspect this.props ...etc.
