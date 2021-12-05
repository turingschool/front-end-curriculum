---
title: React Router v6
length: 3 hours
tags: React, Router
module: 3
---

<section class="note">
### Note

React Router just released the newest version - `version 6`. This lesson has been updated to reflect the changes for v6. If you're looking for the v5 lesson, go [here](https://frontend.turing.edu/lessons/module-3/react-router-v6.html).
</section>

## Learning Goals:
* Understand and articulate the need for routing
* Be able to confidently implement React Router in a project
* Utilize URL params to build dynamic routes

## Vocab
* `BrowserRouter` A \<Router\> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL
* `Router` The class that \<BrowserRouter\> is extended from
* `Link` Links provide declarative, accessible navigation around your application
* `NavLink` A special version of the \<Link\> that will add styling attributes to the rendered element when it matches the current URL.
* `Routes`
* `Route` Its most basic responsibility is to render some UI when a location matches the route’s path
* `useParams`
* `Outlet`
* `Navigation`

<section class="checks-for-understanding">
## Prework  

Before the lesson, complete the [prework](https://gist.github.com/kaylagordon/7a6c7fcdf1ab0cd937d009845d8643dc){:target='blank'}.
</section>

## React Router

<section class="call-to-action">
### Prework Review
In small groups, discuss the following questions:
1. Why use Router?
2. Describe the high-level process of setting up Router in a project (packages to install, basic component needed)
3. Describe the following components:
- Route
- Routes
- Link
- NavLink
- Outlet
</section>

### Why Routing?

**Routing** refers to keeping a webpage up to date with the current url, and vice-versa.

Most of the apps you've written so far have been single-page applications. One HTML page whose content is updated through user interactions and JS. These DO NOT use routing.They work fine, but put some limits on the user experience of our applications.

<section class="answer">
### What are some advantages routing can provide?
- Users can use urls to bookmark pages
- Users can use the back or forward button
- Users can easily share content from a page in the app
</section>

<section class="note">
If you have written a multi-page application, you may have wrestled with Webpack configs in order to get all your pages built successfully.
</section>

Fortunately, routing with React is easy! We just need to use a library called <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">React Router</a>.

> React Router allows us to conditionally render components based on the current url

### The Code

Rather than tell you about how Router works, we'll work through a series of exercises and examples.

We'll be using <a href="https://github.com/turingschool-examples/react-router-v6" target="_blank">this repo</a> to solve a series of challenges listed below.

**Installation Instructions**
```bash
git clone https://github.com/turingschool-examples/react-router-v6
cd react-router-v6
npm i
npm start

# open your text editor
```

The App is not fully put together. It has a series of components that will serve as building blocks of the final component. You won't be building out new components, but you will be editing existing ones.

### Setting up Router

Before we break out into groups, we'll review how to set up Router as a class.

<section class="call-to-action">
### Look through the codebase
Get oriented with the application. Check out all the components, try and write a short summary of what each is doing.
</section>

The `<Home />` component is rendering a welcome message. Right now, nothing but a nav bar is being rendered by the App. Let's use router to render the `<Home />` component as a landing page.

Remember that React Router conditionally renders components based on the current url. So our goal is to **render the <Home /> component when the user is at the base url**.

<section class="call-to-action">
### Setting up Router

To use React Router, we need to wrap any components that will use a React Router-provided-component in some kind of [Router component](https://reacttraining.com/react-router/web/guides/primary-components/routers).

We'll use a [Browser Router](https://reacttraining.com/react-router/web/api/BrowserRouter), since our app will be used in the browser. This Router provides access to the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). But we won't worry about those details just yet.

<section class="answer">
### The first step is installing react router:
```bash
npm install react-router-dom
```
</section>

<section class="answer">
### Once you have React Router installed, import your chosen Router:

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
### Now, add a Route for the `Home` component into your `App`:

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <a href="/puppies" className="nav">Puppies</a>
          <a href="/sharks" className="nav">Sharks</a>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Routes>
          <Route path="/" element={ <Home /> }/>
        </Routes>
      </main>
    );
  }
}

```
We picked `/` for the path in the route because it designates that there won't be anything after the URL's domain name. This represents the base url.  

</section>

<section class="answer">
### Finally, let's update those `a` elements to `NavLink` components:

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Routes, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/puppies" element={ <Creatures name="puppies" data={puppies} /> }/>
          <Route path="/sharks" element={ <Creatures name="sharks" data={sharks} /> }/>
        </Routes>
      </main>
    );
  }
}

```
</section>

<section class="call-to-action">
### Let's break things!

1. What happens if you remove the line that starts with `import { Routes...`? What does the error message say?
2. What happens if you remove the `Routes` component? What does the error message say?
3. Change the `<NavLink />` components to `<Link />` components. What happens?
</section>

</section>


---
## Exercise # 1: Render Puppies

Your goal is click on the word Puppies and see a grid of 9 puppies on the DOM. The page should look something like the picture on the lesson plan. ***While you may change components*** as needed, you shouldn't outright delete content from the page to achieve this.

<section class="call-to-action">
### Take 10 minutes in pairs to get the puppies rendering

<section class="note">
### Hints:
- Use the Creatures component. Formatting and styling is handled for you.
- What additional react-router components should you use? Do any current components need to change?
- How do you pass props into a component rendered by a `<Route />` ?
</section>

<section class="answer">
### Solution

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Routes, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/puppies" element={ <Creatures name="puppies" data={puppies} /> }/>
        </Routes>
      </main>
    );
  }
}
```
</section>

<section class="call-to-action">
### Let's reflect!

1. Why doesn't the `<Home />` component render when you're on the `/puppies` path?
2. Does order matter? Try switching the two `<Route />` components. What happens?
</section>

</section>

---
## Exercise # 2: Rendering Sharks

<section class="call-to-action">
### Take 6 minutes to independently get the sharks link working as well!

<section class="answer">
### Solution

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Routes, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/puppies" element={ <Creatures name="puppies" data={puppies} /> }/>
          <Route path="/sharks" element={ <Creatures name="sharks" data={sharks} /> }/>
        </Routes>
      </main>
    );
  }
}
```
</section>

<section class="call-to-action">
### Let's think!

Hmmm...two of those `<Route />` components are looking quite similar. I wonder if there is a way to make that more dynamic. Take a minute to consider what would we need in order to turn those two `<Route />` components into one.
</section>

</section>
---

### Route Params

<section class="answer">
### Let's start by making a dynamic path:

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Routes, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/:animal" element={ <Creatures name="puppies" data={puppies} /> }/>
        </Routes>
      </main>
    );
  }
}
```
</section>

<section class="call-to-action">
### Let's reflect!

In your app, click on the `Sharks` button. What renders to the page? What shows up in the URL? Why?
</section>

So now we need the `<Creatures />` component to know which animal we've selected.

<section class="answer">
### First, let's console.log some stuff:

```jsx
// Creatures.js

import React from 'react';
import './image-display.css';
import { useParams } from 'react-router-dom';

const Creatures = ({ data, name}) => {

  console.log(useParams());

  const creatureImages = data.map(creature => {
    const { id, image } = creature;
    return <img src={image} key={id} id={id} className="app-img"/>
  });

  return (
    <>
      <h1>{name}!</h1>
      {creatureImages}
    </>
  )

}

export default Creatures;
```
</section>

<section class="call-to-action">
### Let's explore!

1. What console.logged? Where does the **key:value pair** come from?
2. Click between the `Puppies` and `Sharks` buttons. How is the logged object changing?
3. Manually type something random into the URL, like `localhost:3000/potatoes`. What logs?
</section>

<section class="answer">
### Let's use useParams to render the correct animal:

```jsx
// Creatures.js

import React from 'react';
import './image-display.css';
import { useParams } from 'react-router-dom';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';

const Creatures = () => {
  const data = useParams().animal === 'puppies' ? puppies : sharks;

  const creatureImages = data.map(creature => {
    const { id, image } = creature;
    return <img src={image} key={id} id={id} className="app-img"/>
  });

  return (
    <>
      <h1>{useParams().animal}!</h1>
      {creatureImages}
    </>
  )

}

export default Creatures;
```
</section>

<section class="answer">
### Notice that Creatures isn't use props anymore. Let's remove those from App.js:

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Routes, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/:animal" element={ <Creatures /> }/>
        </Routes>
      </main>
    );
  }
}
```
</section>
---

## Exercise #3: Dynamic Routing

Take a look at the `<CreatureDetails />` Component. It takes in all data for a given creature, and displays it on the page.

<section class="call-to-action">
### Your Task is to make a route that will dynamically render a CreatureDetails component for a puppy based on its ID.

For example, the URL `/puppies/1` should render a view just for the puppy with an ID of 1 in the dataset, with all of its details (name, bio, etc)

<section class="note">
Hints:
- Use the CreatureDetails component
- What will you need to do to ensure that the URL is updated when you click on a given puppy?
- How can you access the id from the URL?
- How can you find a one puppy's data in an array based on its id?
</section>

<section class="answer">
### Solution

It could look something like this:
```jsx
// **Creatures.js**
// ...
return (
  <NavLink to={`/${name}/${id}`}>
    <img src={image} key={id} id={id} className="app-img"/>
  </NavLink>
)
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
- [The Hitchhiker's Guide to React Router - learn Router in 20 minutes](https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-a957c6a5aa18/)
- [The Hitchhiker's Guide to React Router - match, location, history](https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-4b12e369d10/)

### Helpful Articles / Docs:

- [Routing and Form Submission](https://tylermcginnis.com/react-router-programmatically-navigate/)
- [Old lesson plan](https://frontend.turing.io/lessons/module-3/react-router-v4.html)
- [React Router Testing Recipe from RTL](https://testing-library.com/docs/example-react-router)
- [Memory Router docs](https://reacttraining.com/react-router/web/api/MemoryRouter)
- [history package docs](https://github.com/ReactTraining/history)

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

**Read about each of these [here](https://reacttraining.com/react-router/web/api/NavLink)**

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

The [docs](https://reacttraining.com/react-router/web/api/Switch) do a great job of quickly showing what Switch is all about.
</section>
</section>
