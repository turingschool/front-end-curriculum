---
title: React Router v5
length: 3 hours
tags: React, Router
module: 3
---

## Learning Goals:
* Understand and articulate the need for routing
* Be able to confidently implement React Router in a project
* Utilize URL params to build dynamic routes

## Vocab
* `BrowserRouter` A \<Router\> that uses the HTML5 history API to keep your UI in sync with the URL
* `Router` The class that \<BrowserRouter\> is extended from
* `Route` Its most basic responsibility is to render some UI when a location matches the route’s path
* `Link` Links provide declarative, accessible navigation around your application
* `NavLink` A special version of the \<Link\> that will add styling attributes to the rendered element when it matches the current URL.
* `Redirect` Rendering a \<Redirect\> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
* `Switch` Renders the first child \<Route\> or \<Redirect\> that matches the location. \<Switch\> is unique in that it renders a route exclusively (only one route wins).
* `match` A match object contains information about how a \<Route path\> matched the URL.

<section class="checks-for-understanding">
## Prework  

Before the lesson, complete the [prework](https://gist.github.com/letakeane/3ba8fce0958b12cf1a48fe6b4ff2a783){:target='blank'}.
</section>

## React Router

<section class="call-to-action">
### Prework Review
In small groups, discuss the following questions:
1. Why use Router?
2. Describe the high-level process of setting up Router in a project (packages to install, basic component needed)
3. Describe the following components:
- Route
- Redirect
- Link
- NavLink
- Switch
</section>


### Why Routing?

**Routing** refers to keeping a webpage up to date with the current URL, and vice-versa.

Most of the apps you've written so far have been single-page applications. One HTML page whose content is updated through user interactions and JS. These DO NOT use routing.They work fine, but put some limits on the user experience of our applications.

<section class="answer">
### What are some advantages routing can provide?
- Users can use URLs to bookmark pages
- Users can use the back or forward button
- Users can easily share content from a page in the app
</section>


If you have written a multi-page application, you may have wrestled with Webpack configs in order to get all your pages built successfully. Fortunately, routing with React is easier than managing Webpack configuration! We just need to use a library called <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank">React Router</a>.

### The Code

Rather than tell you about how Router works, we'll work through a series of exercises and examples.

We'll be using <a href="https://github.com/turingschool-examples/react-router-v5" target="_blank">this repo</a> to solve a series of challenges listed below.

**Installation Instructions**
```bash
git clone https://github.com/turingschool-examples/react-router-v5
cd react-router-v5
npm i
npm start
```

<section class="note">
### Code Sand Box Template
You're also welcome to use the code sand box template, found <a href="https://codesandbox.io/s/github/turingschool-examples/react-router-v5?file=/src/App/App.js" target="_blank">here</a>.
</section>

The App is not fully put together. It has a series of components that will serve as building blocks of the final component. You won't be building out new components, but you will be editing existing ones.

### Setting up Router

Before we break out into groups, we'll review how to set up Router as a class.

<section class="call-to-action">
### Look through the codebase
Get oriented with the application. Check out all the components, try and write a short summary of what each is doing.
</section>

The `<Home />` component is rendering a welcome message. Right now, nothing but a nav bar is being rendered by the App. Let's use router to render the `<Home />` component as a landing page.

Remember that React Router conditionally renders components based on the current URL. So our goal is to **render the <Home /> component when the user is at the base URL**.

### Getting Started

To use React Router, we need to wrap any components that will use a React-Router-provided-component with a [Router component](https://v5.reactrouter.com/web/guides/primary-components).

We'll use a [Browser Router](https://v5.reactrouter.com/web/api/BrowserRouter) component because our app will be used in the browser. This Router provides access to the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). But we won't worry about those details just yet.

<section class="answer">
### The first step, installing React Router
```bash
npm install react-router-dom@5.3.0
```
</section>

<section class="note">
### Router Versioning

The current version of React Router is version 6. In the installation step above, you installed **version 5**. Version 6 of React Router is very different from version 5, and we are learning version 5 in this lesson.

So whenever you setup React Router in your projects, be sure to use this exact installation command (`npm install react-router-dom@5.3.0`). If you use `npm install react-router-dom` without the `@5.3.0` then version 6 will be installed by default, and that will cause a lot of confusion because React Router will not behave as expected for you.
</section>

<section class="answer">
### Once React Router is installed, import the chosen Router

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));
```
</section>

<section class="answer">
### Finally, add a Route for the `Home` component into your `App` component

```jsx
import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import CreatureDetails from '../Creatures/CreatureDetails';
import { Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <a href="/puppies" className="nav">Puppies</a>
          <a href="/sharks" className="nav">Sharks</a>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route path="/" component={ Home }/>
      </main>
    );
  }
}
```
We picked `/` for the path in the route because it designates that there won't be anything after the URL's domain name. This represents the base URL.  

</section>

## Exercise # 1: Render Puppies

Your goal is click on the word Puppies and see a grid of 9 puppies on the DOM. The page should look something like the picture on the lesson plan. ***While you may change components*** as needed, you shouldn't outright delete content from the page to achieve this.

<section class="call-to-action">
### Take 10 minutes in pairs to get the puppies rendering

#### Hints:
- Use the Creatures component. Formatting and styling is handled for you.
- What additional react-router components should you use? Do any current components need to change?
- How do you pass props into a component rendered by a `<Route />` ?

<section class="answer">
### Solution

```jsx
/ App.js

import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Route, NavLink } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route path="/" component={ Home }/>
        <Route path="/puppies" render={() => <Creatures name="puppies" data={puppies} />} />
      </main>
    );
  }
}
```
</section>
</section>

<section class="call-to-action">
### Solo Reflection

Why do you think the `Home` page is rendering at `/puppies`?
</section>

### Render `exact` matches

Check out what happens when you add the [`exact`](https://v5.reactrouter.com/web/api/Route/exact-bool) prop into one of your Routes.

The `exact` prop can be used to make sure that partial matches of a URL don\'t trigger a render.

<section class="note">
### Documentation Versioning

As with the installation step, we need to be mindful about which version of documentation we are looking at. Since we installed **version 5** of React Router, we need to view the documentation for version 5 as well.

[This link](https://v5.reactrouter.com/web/guides/quick-start) will take you to the version 5 React Router documentation. Note the `v5` in the URL.
</section>

### Render Methods

According to the [docs](https://v5.reactrouter.com/web/api/Route/route-render-methods), Routes have three possible methods for rendering a component on match:
- `component`
- `render`
- `children`

We recommend to use `render` or `children` -- they work more efficiently when re-rendering components. We'll take a look at some more benefits they provide after the next exercise.

Here's an example of their syntax:
**Component**

```jsx
<Route path='/unicorns' component={ Unicorns } />
```

**Render**

```jsx
<Route path='/unicorns' render={ () => <Unicorns /> }
```
This also allows you to define and pass specific properties to a component dynamically. For example:

```jsx
<Route path='/ideas/:id' render={({ match }) => {
  const idea = ideas.find(idea => idea.id === parseInt(match.params.id));

  if (!idea) {
    return (<div>This idea does not exist! </div>);  
  }
  return <ListItem match={match} {...idea} />

}} />
```

**Children**
`children` works exactly like `render` except that it gets called whether the path is a match or not.
```jsx
<Route path='/other-unicorns' children={ () => <Unicorns /> } />
```


---
## Exercise # 2: Rendering Sharks

Get the sharks link working as well!


<section class="answer">
### Solution

```jsx
// App.js
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" render={ Home }/>
        <Route exact path="/puppies" render={() => <Creatures name="puppies" data={puppies} />} />
        <Route exact path="/sharks" render={() => <Creatures name="sharks" data={sharks} />} />
      </main>
    );
  }
}
```
</section>
---

### Route Props

Let's take a close look at what happens when a Route renders.

[Route render methods](https://v5.reactrouter.com/web/api/Route/route-render-methods) all provide access to [route props](https://v5.reactrouter.com/web/api/Route/route-props), either automatically to the component they render, or via the callback function that the methods take.

These props include:
- [`history`](https://v5.reactrouter.com/web/api/history)
- [`location`](https://v5.reactrouter.com/web/api/location)
- [`match`](https://v5.reactrouter.com/web/api/match)

```jsx
<Route path='/unicorns' render={ ({ history, location, match }) => <Unicorns /> }
```

history and location are worth looking into on your own, but today we'll focus on `match`.

The `match` gives us information about how and why the application matched. And it allows us to do some pretty cool stuff.

<section class="call-to-action">
### Solo Exploration

Add this to your code:
```jsx
<Route path="/puppies" render={({ match }) => { console.log(match)}} />
```
 - What is logged in the console when you go to the puppies page?
 - Look at the `params` property. What do you see?

Now change the line of code above to this:
```jsx
<Route path="/:animal" render={({ match }) => { console.log(match)}} />
```
- What do you notice about the value for the `params` propery? Where is each piece of that key:value pair coming from?
</section>

#### `match.params`
The `params` property of the match prop gives us an object with key value pairs of dynamic URL parameters, and any strings that match them.

For instance, we could make our routes for animals more dynamic by doing this:

```jsx
<Route
  exact path="/:animal"
  render={({ match }) => {
    const whichAnimal = match.params.animal === 'sharks' ? sharks : puppies
    return <Creatures name={match.params.animal} data={whichAnimal} />
  }}
/>
```

and then navigate to either `/puppies` or `/sharks`, we can see that the `<Creatures />` component is rendering the correct data based on the `params` from the URL.

**`params` allows us to define shapes of a URL that will cause a match, then access the data from that URL in our components**.

This can be great for dynamically rendering content based on things in the URL, like an id. Let's do that!

## Exercise #3: Dynamic Routing
---

Take a look at the CreatureDetails Component. It takes in all data for a given creature, and displays it on the page.

<section class="call-to-action">
### Your Task is to make a route that will dynamically render a CreatureDetails component for a puppy based on its ID.

For example, the URL `/puppies/1` should render a view just for the puppy with an ID of 1 in the dataset, with all of its details (name, bio, etc)

#### Hints:
- Use the CreatureDetails component
- What will you need to do to ensure that the URL is updated when you click on a given puppy?
- How can you access the id from the URL?
- How can you find a one puppy's data in an array based on its id?

<section class="answer">
### Solution

It could look something like this:
```jsx
// **Creature.js**
// ...
const Creatures = ({ data, name }) => {
  const creatureImages = data.map(creature => {
    const { id, image } = creature;
    return (
      <NavLink key={id} to={`/${name}/${id}`}>
        <img src={image} alt={name} className="app-img" />
      </NavLink>
    );
  });
// ...
  
// **App.js**
// ...
<Route
  exact path="/puppies/:id"      
  render={({match}) => {
    const creatureToRender = puppies.find(creature => creature.id === parseInt(match.params.id));   
    return <CreatureDetails {...creatureToRender} />
  }}
/>
// ...
```
</section>
</section>



## Extra Resources:

### Tutorials / Guides:

- [React Training's 13 minute overview of React Router](https://www.youtube.com/watch?v=Mf0Fy8iHp8k&feature=youtu.be)
- [A Beginner's Tutorial - 5 Minutes](https://www.freecodecamp.org/news/react-router-in-5-minutes/)
- [Router Cheatsheet](https://www.freecodecamp.org/news/react-router-cheatsheet/)

### Helpful Articles / Docs:

- [Routing and Form Submission](https://tylermcginnis.com/react-router-programmatically-navigate/)

<section class="call-to-action">
### Check out this additional information on some Router Components:

<section class="answer">
### Link

_Provides declarative, accessible navigation around your application._

**Things to know:**

* Link can contain an open and closing tag or be a self-closing tag
* Link takes a `to` attribute as well as an optional `replace` attribute
* `to` tells the app which path to redirect to. This can be a string or an object
* `replace` is a boolean that when `true` will replace the current entry in the history stack instead of adding a new one

```jsx
<Link to='/unicorns' />

<Link to='/unicorns'> Unicorns </Link>
```
</section>
<section class="answer">
### NavLink

_A special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current URL._

It can take the following attributes:

* **activeClassName: string** - defaults to `active`
* activeStyle: object
* exact: bool
* strict: bool
* isActive: func
* location: object

**Read about each of these [here](https://v5.reactrouter.com/web/api/NavLink)**

```jsx
<NavLink to='/about'>About</NavLink>
```
</section>
<section class="answer">
### Redirect

_Rendering a `<Redirect>` will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do._
More of a nice to know for now. This is something that can be used if the user does something wrong. ie. went to a route they don't have permissions to access.

It can take the following attributes:

* **to: string**
* to: object
* push: bool
* from: string

```jsx
<Redirect to='/not/unicorns' />
```
</section>
<section class="answer">
### Switch

_Renders the **first** child `<Route>` or `<Redirect>` that matches the location. `<Switch>` is unique in that it renders a route **exclusively** (only one route wins). In contrast, every `<Route>` that matches the location renders **inclusively** (more than one route can match and render at a time)_

```jsx
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/users/add' component={UserAddPage} />
  <Route path='/users' component={UsersPage} />
  <Redirect to='/' />
</Switch>
```

The [docs](https://v5.reactrouter.com/web/api/Switch) do a great job of quickly showing what Switch is all about.
</section>
</section>
