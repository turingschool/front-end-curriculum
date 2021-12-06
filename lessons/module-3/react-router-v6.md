---
title: React Router v6
length: 3 hours
tags: React, Router
module: 3
---

<section class="note">
### Note

React Router just released the newest version - `version 6`. This lesson has been updated to reflect the changes for v6. If you're looking for the v5 lesson, go [here](https://frontend.turing.edu/lessons/module-3/react-router-v6.html). Interested in upgrading your v5 app to v6? Start [here](https://reactrouter.com/docs/en/v6/upgrading/v5).
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
* `Route` Its most basic responsibility is to render some UI when a location matches the route’s path
* `Routes` A component that wraps your Route components that selects the best path match
* `Outlet` A component that renders the next match in a set of matches. it must exist in the parent component when nesting routes
* `useParams` A hook that allows us to gain access to a Route's params

<section class="checks-for-understanding">
## Prework  

Before the lesson, complete the [prework](https://gist.github.com/kaylagordon/7a6c7fcdf1ab0cd937d009845d8643dc){:target='blank'}.
</section>

<section class="call-to-action">
### Prework Review
In small groups, discuss the following questions via [this Jamboard](https://jamboard.google.com/d/1IEbM9Gi7LLiVBOnx-9L_XjI2lVpi3ik86BtN-_ArNXg/edit?usp=sharing):
1. Why use Router?
2. Describe the high-level process of setting up Router in a project (packages to install, basic component needed)
3. Describe the following components:
- Route
- Routes
- Link
- NavLink
- Outlet
</section>

## Why Routing?

**Routing** refers to keeping a webpage up to date with the current url, and vice-versa.

Most of the apps you've written so far have been single-page applications. One HTML page whose content is updated through user interactions and JS. These DO NOT use routing. They work fine, but put some limits on the user experience of our applications.

Here  are some advantages routing can provide:
- Users can use urls to bookmark pages
- Users can use the back or forward button
- Users can easily share content from a page in the app

If you have written a multi-page application, you may have wrestled with Webpack configs in order to get all your pages built successfully. Fortunately, routing with React is easy! We just need to use a library called <a href="https://reactrouter.com/docs/en/v6" target="_blank">React Router</a>.

**React Router allows us to conditionally render components based on the current url.**

Rather than tell you about how Router works, we'll work through a series of exercises and examples. We'll be using <a href="https://github.com/turingschool-examples/react-router-v6" target="_blank">this repo</a> to solve a series of challenges listed below.

## Set Up

<section class="answer">
### 0. Clone repo & review codebase
```bash
git clone https://github.com/turingschool-examples/react-router-v6
cd react-router-v6
npm i
npm start

# open your text editor
```
The App is not fully put together. It has a series of components that will serve as building blocks of the final component. You won't be building out new components, but you will be editing existing ones. Get oriented with the application. Check out all the components, try and write a short summary of what each is doing.
</section>

## Installing Router

<section class="answer">
### 1. The first step is installing react router
```bash
npm install react-router-dom
```
</section>

<section class="answer">
### 2. Once you have React Router installed, import your chosen Router

To use React Router, we need to wrap any components that will use a React Router-provided-component in some kind of [Router component](https://reacttraining.com/react-router/web/guides/primary-components/routers).

We'll use a [Browser Router](https://reacttraining.com/react-router/web/api/BrowserRouter), since our app will be used in the browser. This Router provides access to the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). But we won't worry about those details just yet.

```jsx
// index.js

import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));
```
</section>

## Rendering the Home component

<section class="answer">
### 3. Now, let's tell React Router what to render at the base URL ('/')

```jsx
// App.js

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  return (
    <main className="App">
      <nav>
        <a href="/puppies" className="nav">Puppies</a>
        <a href="/sharks" className="nav">Sharks</a>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </main>
  );
}

export default App;
```
</section>

<section class="call-to-action">
### Let's explore

1. What happens if you remove the line that starts with `import { Routes...`? What does the error message say?
2. What happens if you remove the `Routes` component? What does the error message say?
</section>

## Rendering the Puppies

<section class="answer">
### 4. First, let's update the links to NavLink components

```jsx
// App.js

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </main>
  );
}

export default App;
```
</section>

<section class="call-to-action">
### Let's explore

1. Change the `<NavLink />` components to `<Link />` components. What happens?
2. When might you choose a `<Link />` over a `<NavLink />`?
</section>

<section class="answer">
### 5. Now, let's tell Router what to do at '/puppies'

```jsx
// App.js

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/puppies" element={<Creatures creatureType='puppies'/>} />
      </Routes>
    </main>
  );
}

export default App;
```
</section>

<section class="call-to-action">
### Let's explore

1. Why doesn't the `<Home />` component render when you're on the `/puppies` path?
2. Does order matter? Try switching the two `<Route />` components. What happens?
3. How do you pass props to components from inside a `<Route />`?
</section>

<section class="answer">
### 6. Let's update the Creatures component so it actually shows puppies

```jsx
// Creatures.js

import './Creatures.css';
import { getCreaturesData } from '../../data/animalData';

const Creatures = ({ creatureType }) => {
  const creatureImages = getCreaturesData(creatureType).map(creature => {
     const { id, image } = creature;
     return <img src={image} key={id} id={id} className="app-img"/>
   });

   return (
     <>
       <h1>{creatureType}!</h1>
       {creatureImages}
     </>
   )
}

export default Creatures;
```
</section>

## Rendering the Sharks

<section class="answer">
### 7. On your own, make the Sharks button render sharks

```jsx
// App.js

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/puppies" element={<Creatures creatureType='puppies'/>} />
        <Route path="/sharks" element={<Creatures creatureType='sharks'/>} />
      </Routes>
    </main>
  );
}

export default App;
```
</section>

<section class="call-to-action">
### Let's explore

Hmmm...two of those `<Route />` components are looking quite similar. I wonder if there is a way to make that more dynamic. Take a minute to consider what would we need in order to turn those two `<Route />` components into one.
</section>

## Dynamic Routing

<section class="answer">
### 8. Let's start by making a dynamic path

```jsx
// App.js

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:animal" element={<Creatures creatureType='puppies'/>} />
      </Routes>
    </main>
  );
}

export default App;
```
</section>

<section class="call-to-action">
### Let's explore

1. In your app, click on the `Sharks` button. What renders to the page? What shows up in the URL? Why?
2. How can we tell the `<Creatures />` component which animal we've selected?

</section>

<section class="answer">
### 9. Let's console.log some stuff:

```jsx
// Creatures.js

import './Creatures.css';
import { getCreaturesData } from '../../data/animalData';
import { useParams } from 'react-router-dom';

const Creatures = ({ creatureType }) => {
  console.log(useParams())

  const creatureImages = getCreaturesData(creatureType).map(creature => {
     const { id, image } = creature;
     return <img src={image} key={id} id={id} className="app-img"/>
   });

   return (
     <>
       <h1>{creatureType}!</h1>
       {creatureImages}
     </>
   )
}

export default Creatures;
```
</section>

<section class="call-to-action">
### Let's explore

1. What console.logged? Where does the key:value pair come from?
2. Click between the `Puppies` and `Sharks` buttons. How is the logged object changing?
3. Manually type something random into the URL, like `localhost:3000/potatoes`. What logs?
</section>

<section class="answer">
### 10. Let's use useParams to render the correct animal

```jsx
// Creatures.js

import './Creatures.css';
import { getCreaturesData } from '../../data/animalData';
import { useParams } from 'react-router-dom';

const Creatures = () => {
  const creatureType = useParams().animal;

  const creatureImages = getCreaturesData(creatureType).map(creature => {
     const { id, image } = creature;
     return <img src={image} key={id} id={id} className="app-img"/>
   });

   return (
     <>
       <h1>{creatureType}!</h1>
       {creatureImages}
     </>
   )
}

export default Creatures;
```
</section>

<section class="answer">
### 11. Notice that Creatures isn't using props anymore. Let's remove those from App.js:

```jsx
// App.js

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:animal" element={<Creatures />} />
      </Routes>
    </main>
  );
}

export default App;
```
</section>

## Rendering the CreatureDetails component


<!--





</section>
---

## Exercise #3: Dynamic Routing

Take a look at the `<CreatureDetails />` Component. It displays all the animal's details on the page.

<section class="call-to-action">
### Your Task is to make a route that will dynamically render a CreatureDetails component for an animal based on its ID.

For example, the URL `/puppies/1` should render a view just for the puppy with an ID of 1 in the dataset, with all of its details (name, bio, etc).

<section class="note">
Hints:
- Use the CreatureDetails component
- What will you need to do to ensure that the URL is updated when you click on a given animal?
- How can you access the type of animal AND ID from the URL?
- How can you find a one animal's data in an array based on its id?
</section>

<section class="answer">
### Solution

It could look something like this (there is not one correct answer!):
```jsx
// CreatureDetails.js

import React from 'react';
import './image-display.css';
import { Link, useParams } from 'react-router-dom';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';

const CreatureDetails = () => {
  const animalType = useParams().animal;
  const currentId = useParams().id;
  const data = animalType === 'puppies' ? puppies : sharks;
  const currentCreature = data.find(creature => {
    return creature.id === parseInt(currentId)
  })

  return (
    <div>
      <Link to={`/${animalType}`} className='back-btn'>◀ back</Link>
      <h1>{currentCreature.name}</h1>
      <img src={currentCreature.image} className='app-img-no-hover'/>
      <p className='creature-bio'>{currentCreature.bio}</p>
    </div>
  )
}

export default CreatureDetails;


// App.js

...
<Route path="/:animal/:id" element={ <CreatureDetails /> }/>
...
```

// Creatures.js

...
  return (
    <Link to={`/${animal}/${id}`}>
      <img src={image} key={id} id={id} className="app-img"/>
    </Link>
  )
...
</section>

Another solution could have included passing the data as props from `App` to `Creatures` and `CreatureDetails`!
</section> -->

## Extra Resources:
- [React Router v6 Docs](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React Router v6 Tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- [A Guide to Upgrading from v5](https://reactrouter.com/docs/en/v6/upgrading/v5)
- It is likely that you'll run into use cases for `Navigate`/`useNavigate`, which helps you force a URL change. [This](https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb) is a helpful resource!
