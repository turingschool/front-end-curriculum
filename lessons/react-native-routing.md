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
The `Navigator` is responsible for rendering and transitioning between different scenes of your application. Depending on your use case, you can choose between using `Navigator`, which is supported in Android and iOS, or using the more specific `NavigatorIOS`, which is only supported on iOS devices, but gives you more advanced navigation options.

In this lesson, we'll use the more generic `Navigator` and learn how to navigate between scenes in a React Native application. 

A scene can be thought of as a page in your standard web app. Scenes are simply components that are ultimately rendered full-screen, and made up of various other components such as Text, Views, Images, etc.

For example, in our Dino App, the cohesive rendering of all the components in our `App.js` file can be considered a scene:

```javascript
<View style={styles.container}>
  <Text style={styles.header}>Welcome to Bouncing Dinos!</Text>
  <Text>Scroll Horizontal</Text>
  <Switch
    onValueChange={(value) => this.setState({horizontalIsOn: value})}
    style={{marginBottom: 10}}
    value={this.state.horizontalIsOn} />
  <DinoScroll horizontal={this.state.horizontalIsOn} />
</View>
```

Let's refactor this to have the `Navigator` take control of rendering this scene for us.

First we need to import the `Navigator` from `react-native`:

```javascript
import { Navigator } from 'react-native';
```

Now we can use the `Navigator` within our render method: 

```javascript
    <Navigator
      initialRoute={{title: 'Welcome to Bouncing Dinos!'}}
      renderScene={(route, navigator) =>
        <View style={styles.container}>
          <Text style={styles.header}>{route.title}</Text>
          <Text>Scroll Horizontal</Text>
          <Switch
            onValueChange={(value) => this.setState({horizontalIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.horizontalIsOn} />
          <DinoScroll 
            style={styles.dinoList}
            horizontal={this.state.horizontalIsOn} />
        </View>
      }
    />
```

A couple of important things to note in this code:

* The `Navigator` can take an `initialRoute` property, where you'll specify any values you want available in the initial scene that's loaded
* The `renderScene` method is where we actually describe what's going to be rendered as a part of the scene
* Within `renderScene`, we can access any properties we specified on the current route using `{route.<propName>}`

Now our navigator is entirely responsible for rendering our application. Of course, we're going to want to be able to render more than just this one scene, so we'll want to break this particular scene out into it's own component. We have a `Home.js` file that stubs in a component where we can put this render code. Let's move our scene into the `render` method in our `Home` component:

```javascript
export class Home extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{route.title}</Text>
        <Text>Scroll Horizontal</Text>
        <Switch
          onValueChange={(value) => this.setState({horizontalIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.horizontalIsOn} />
        <DinoScroll 
          style={styles.dinoList}
          horizontal={this.state.horizontalIsOn} />
      </View>
    )
  }
}
```

Now we can simplify `App.js` quite a bit:

```javascript
export default class App extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Welcome to Bouncing Dinos!' }}
        renderScene={(route, navigator) => {
          return (
            <Home {...route} />
          );
        }}
      />
    );
  }
}
```

If we refresh the app, we'll see we get an error `Can't find variable: route` in `Home.js:20`:

```javascript
  <Text style={styles.header}>{route.title}</Text>
```

Just like in a standard React web app, we are gaining access to dynamic values in our components by passing in props. If we look at our `App.js` file, we can see we're passing in every property of the `route` object to our `Home` component. This means that `route` isn't actually a property on our `Home` component. Rather, we have a `title` property that lives under `this.props`. Let's change that line in our `Home` component to reference the correct title variable:

```javascript
  <Text style={styles.header}>{this.props.title}</Text>
```

## Handling Multiple Scenes
Earlier we said we'd want our navigator to be able to render multiple scenes. We're going to add a scene called `DinoFacts` that displays a list of facts about each type of dinosaur. This component has already been stubbed in for you.

Currently, our navigator is only rendering a `<Home>` scene. In order to make this more flexible and able to handle multiple scenes, we need to do a little refactoring:

```javascript
<Navigator
  initialRoute={{ component: Main, title: 'Welcome to Bouncing Dinos!' }}
  renderScene={(route, navigator) => {
    let RouteComponent = route.component;
    return (
      <RouteComponent {...route} navigator={navigator} />
    )
  }}
/>
```

Here, we've added a `component` prop to our `initialRoute` object that specifies we should be rendering the `Home` component. In our `renderScene` method, we will grab that component value dynamically so that we can render different components for different routes. 

If we compare our `Home.js` and `DinoFacts.js` components, we'll see a little bit of repeat code. Specifically, the container view and the title header are both common elements in these components. We can simplify this by moving those elements directly into the Navigator's `renderScene` method:

```javascript
<Navigator
  initialRoute={{ component: Home, title: 'Welcome to Bouncing Dinos!' }}
  renderScene={(route, navigator) => {
    let RouteComponent = route.component;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{route.title}</Text>
        <RouteComponent {...route} navigator={navigator} />
      </View>
    )
  }}
/>
```

This will ensure that both scenes inherit a common container and header element. Notice we're now also passing in `navigator` as a prop to our `<RouteComponent>`. This will allow us to actually link back and forth to transition between our two scenes.

## Navigating Between Routes

Let's add a link to the `DinoFacts` scene from our `Home` scene. We'll use a `TouchableHighlight` component to serve as our link when a user clicks on it. In `Home.js`, add:

```javascript
<TouchableHighlight onPress={() => {
    this.props.navigator.push({ 
      component: DinoFacts,
      title: 'Dino Facts',
      navigator: this.props.navigator
    });
}}>
  <Text style={styles.navLink}>View Dino Facts</Text>
</TouchableHighlight>
```

### navigator.push()
In the `onPress` method, we are calling `push` on our navigator prop. This is how you add a new route to your application that a user can navigate to. Notice that the `push` method takes an object with all of the route properties we want available in our component. Again, we're passing in the actual component to be rendered, a title, and the navigator object.

Now if we refresh our app and click on our new link, we can see our app navigate to the DinoFacts route. Let's add a link to navigate back to the home page from DinoFacts. In `DinoFacts.js`, add another `TouchableHighlight` component:


```javascript
<TouchableHighlight onPress={() => this.props.navigator.pop()}>
  <Text style={styles.navLink}>Back</Text>
</TouchableHighlight>
```

### navigator.pop()
Here we're using `navigator.pop()`. This `pop` method tells our app to go to the last route prior to navigating. In our case, this will take us back to the home page.

By default, the transition between routes uses a swipe effect. This can be configured in your navigator with `configureScene`:

```javascript
configureScene={(route, routeStack) =>
  Navigator.SceneConfigs.FloatFromBottom} 
```

## Working with Route Stacks
These navigator methods, `push` and `pop` are similar to the ones you're familiar with when working with Arrays. In the context of a navigator, the "array" we're working with is actually an array of routes. Routes are simply objects containing the properties that help display each scene. The two routes in our application so far could be written as:

```javascript
const routes = [
  { component: Home, title: 'Welcome to Bouncing Dinos!' },
  { component: DinoFacts, title: 'Dino Facts!' }
];
```

When you already know what routes you'll have and what data they'll contain, you can create an array just like this and specify an `initialRouteStack` in your Navigator component. Let's try this out in `DinoFacts.js`. We're going to have an array of routes, one for each dinosaur, that contains it's name, diet, and size. In `DinoFacts.js`, add:

```javascript
const routes = [
  { dinoName: 'allasaur', diet: 'carnivore', size: '28 feet, 2.3 tons' },
  { dinoName: 'pterodactyl', diet: 'carnivore', size: '20 feet, 2 tons' },
  { dinoName: 'stegosaurus', diet: 'herbivore', size: '30 feet, 5 tons' },
  { dinoName: 't-rex', diet: 'carnivore', size: '42 feet, 7 tons' },
];
```

We'll also add a new `Navigator` component that will handle rendering these particular routes:

```javascript
<Navigator
  style={styles.navContainer}
  initialRoute={routes[0]}
  initialRouteStack={routes}
  renderScene={(route, navigator) => {
    return (
      <View style={styles.dinoFacts}>
        <Text>Diet: {route.diet}</Text>
        <Text>Size: {route.size}</Text>
      </View>
    );
  }}
```

Notice we are setting the `initialRoute` to `routes[0]`. This will make sure our navigator renders the information for Allasaur first. We have a new property here called `initialRouteStack`, which we've set equal to our entire array of routes. Finally, in `renderScene`, we're displaying the facts about each dinosaur.

But we're missing a couple of things. For starters, we're not rendering the name of the dinosaur. Additionally, we need a way to navigate between each of the dinos. Let's add a NavigationBar that will provide us with both of these things.

## Creating a Navigation Bar
The `Navigator` component has a built-in `NavigationBar` that we can hook into. Add the following to your Navigator:

```javascript
navigationBar={
  <Navigator.NavigationBar
    routeMapper={{
      LeftButton: (route, navigator, index) => { 
        return (
          <Text style={styles.prevButton}>Prev</Text>
        );
      },

      RightButton: (route, navigator, index) => {
        return (
          <Text style={styles.nextButton}>Next</Text>
        );
      },

      Title: (route, navigator, index) => { 
        return (
          <Text style={styles.dinoHeader}>{route.dinoName}</Text>
        );
      },
    }}
    style={styles.navBar}
  />
}
``` 

This is a lot of code, but essentially what it's doing is telling the Navigator that we have a `NavigationBar` component with a `LeftButton`, a `Title`, and a `RightButton`. Each of these are methods that give us access to the current route, the navigator we are using, and the index of our route in the stack. If we take a look at our app now, it renders appropriately, but doesn't actually do anything when we click the Previous/Next buttons. Using the `push` and `pop` methods we just learned about, let's cycle through the routes when each button is clicked.

```javascript
<TouchableHighlight onPress={() => navigator.pop()}>
  <Text style={styles.prevButton}>Prev</Text>
</TouchableHighlight>

<TouchableHighlight onPress={() => navigator.push(routes[index + 1])}>
  <Text style={styles.nextButton}>Next</Text>
</TouchableHighlight>
```

While this NavigationBar is a built-in feature for the Navigator, obviously there are various libraries that built on top of it because that's what we do. You may see differing implementations of this same component in the wild, depending on what libraries are being used, but this is the bare bones code that provides the foundation for a navigation bar.

## NavigatorExperimental
As with everything we learn, it winds up being deprecated about an hour after we master it. The beta version of the Navigator is available as a component under `NavigatorExperimental`. It takes a pretty different approach to routing and transitions, so take note if you are browsing for examples which version of `Navigator` is being used.

## Resources
- [Navigator API](https://facebook.github.io/react-native/docs/navigator.html)
- [Navigation Guide](https://facebook.github.io/react-native/docs/navigation.html)