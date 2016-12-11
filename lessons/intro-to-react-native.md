---
title: Introduction to React Native
module: 4
status: draft
---

Welcome to the world of mobile development. React Native is just like the React you know and love for the web, but it complies Javascript to native code (Objective-C, Java) for a specific OS. So you get the performance of native apps while just writing JS! You also get the benefits of reusable components, state management with Redux, and Chrome debugging tools.

Here are some things we already know:

- JavaScript
- React
- Redux
- npm
- `package.json`

What is new is dealing with iOS and Android. For the most part you can write a most of your code that is used by both. But know that there will be differences in some UI components that you use, the process for emulating devices will be different and there will be performance differences between the two (if it runs fast on Android, it should be blazing fast on iOS).

Be aware that there are some drawbacks to using React Native. One is that the Facebook team releases updates every 2 weeks. The code updates consistently and there will be breaking changes in the future. If you have a lot of components to scroll through, a user can gesture fast enough to cause a lag in performance.

That being said, there are huge advantages to using React Native. You can prototype, develop and deploy mobile apps very quickly using just JS that works natively on iOS and Android. You can use hot reload to update your app and instantly see the change without recompiling all of your code. You can also write native code to create custom components or tweak performance and then easily drop them into your React Native code. There are great APIs for animations and gestures to create rich mobile user experiences. All in all React Native is a fantastic way to jump into mobile development and create useful apps that work.

## Your First React Native Application

First let's get our dependencies ready for React Native. Watchman is a tool built by Facebook to watch the file system and reload your code on the mobile emulators:

```js
// From the root directory
brew install watchman
npm i -g react-native-cli
```

Now we are ready to create our first mobile app. We will be building a really simple app that scrolls through a few images and has a couple of UI components that change state. Using the React Native CLI, it's super easy to get your project up and running. We are going to focus to today on just iOS because we don't need to install or sign up for an emulator, xcode provides us with one:

```js
// Create our app
$ react-native init DinoBounce
$ cd DinoBounce
// To run in iOS
$ react-native run-ios
// To run in Android
$ react-native run-android
// If you want to pick a specific device on iOS, set it with the simulator flag
$ react-native run-ios --simulator="iPhone 4s"
// To check all the available devices you can run with iOS, run the below code. Pretty awesome that you can emulate iPhones, Ipads, iWatchs, Apple Tv
$ xcrun simctl list devices
```

### Additional Android setup
[Follow these instructions to get setup on a free Android emulator](http://facebook.github.io/react-native/releases/0.23/docs/android-setup.html#content)

### First Time Around the Block

A React Native app looks very similar to React apps you've seen before. You use render to display information to the user, pass around props and state, and use the lifecycle components to manage state. One of the first differences you will notice is that React Native apps come with two different index.js files:

* index.android.js
* index.ios.js

I'll let you take a wild guess why they exist. Later on I will show you how to write most of your code platform-agnostic and use the index.js files to deal only with platform specific differences. But for now just think of these as the same file.

Another change between normal React and React Native is that instead of using HTML we use mobile components. These are native UI components and can vary depending on the platform. The nice thing is that we still utilize JSX so it really isn't too big a difference. Here's a general mapping of the most common components vs. HTML:

```js
<View /> = <div>
<Text /> = <p><h1><h2><h3><h4><h5><h6>
<TextInput /> = <input type="text">
<TouchableHighlight /> = <button>
<ListView /> = <table>
<Image /> = <img>
```

But this being mobile, we have to be able to respond to user gestures and navigators. Luckily there are components for that too:

```js
<Navigator /> (also <NavigatorIOS />)
<StatusBar />
<Slider />
<ScrollView />
<Picker /> (also <PickerIOS />)
<Modal />
<Switch />
```

You can see that IOS tends to have an ioS specific component (...Android does too on some components) because ioS is no fun and doesn't like you customizing components. You can use <Navigator /> for ioS but if you are building strictly for Apple products using <NavigatorIOS /> leverages native UIKit navigation.

### Let's Talk Styles

When it comes to styling your app, we don't write CSS (although it will look very similar). Instead we create a simple JS StyleSheet object and pass specific properties (subcomponents) of the object into components as the style prop. You can pass multiple style props using an array, with the last style taking precedence. As  Let's take a look how this works in our app:

```js
// First we create a StyleSheet object with three subcomponents, container, header and dinoList.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: 25,
  },
  dinoList: {
    marginBottom: 25,
  },
})
```

Now that we have declared some styles, let's pass them into our React component's as a prop.

```js
render() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Bouncing Dinos!</Text>
      <Text>Scroll Horizontal</Text>
      <Switch
        onValueChange={(value) => this.setState({horizontalIsOn: value})}
        style={{marginBottom: 10}}
        value={this.state.horizontalIsOn} />
      <DinoScroll horizontal={this.state.horizontalIsOn} />
    </View>
  );
}
```

As you can see in our Switch component, we can also declare styles directly. This is helpful when we want to dynamically set style properties such as height or width based on another prop or state value. But what if we want to use multiple style subcomponents? Use an array!

```js
<Text style={[{width: 50},styles.container,styles.header]}>Welcome to Bouncing Dinos!</Text>
```

### Animations coming soon

We will talk about animations tomorrow.

### Let's Talk Debugging
As we all know, we no longer in a browser where we can throw debuggers and console.log()s to our heart's desire. But thankful React Native gives us a couple of tools to make debugging like good old times. First, you can throw a console.error('whatver') in your React Native code and redbox (not the movie rental but an error messaging feature) with throw up a red screen with whatever you put in console.error(). An even better feature is the ability to turn on remote debugging. With your ioS emulator running, click cmd+control+z to pull up the dev tools. Select Debug JS Remotely and a web browser pointed at http://localhost:8081/debugger-ui will open. Open up the console and select the Pause on Exceptions button. Then throw a debugger in your JS and reload the emulator. The debugger should trigger like a normal debugger and you can inspect this.props ...etc.

### A Refresher in the React Component Lifecycle

Just like normal React, we have access to the component lifecycle API. Here is a quick rundown of how each method is utilized for mobile:

#### Mounting Cycle

* constructor(props) -
* componentWillMount() -
* render() -
* componentDidMount()

#### Updating Cycle

* componentWillReceiveProps(nextProps) -
* shouldComponentUpdate(nextProps, nextState) -
* componentWillUpdate(nextProps, nextState)
* render() -
* componentDidUpdate(prevProps, prevState)
