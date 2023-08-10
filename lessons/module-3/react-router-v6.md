---
title: React Router v6
length: 3 hours
tags: React, Router
module: 3
---

<section class="note">
### Note

React Router just released the newest version - `version 6`. This lesson has been updated to reflect the changes for v6. If you're looking for the v5 lesson, go [here](https://frontend.turing.edu/lessons/module-3/react-router-v5.html). Interested in upgrading your v5 app to v6? Start [here](https://reactrouter.com/en/6.11.1/upgrading/v5).
</section>

## Learning Goals:
* Understand and articulate the need for routing
* Be able to confidently implement React Router in a project
* Utilize URL params to build dynamic routes

## Vocab
* `BrowserRouter` A \<Router\> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL
* `Router` is a component provided by React Router.This component is responsible for keeping track of the current location (the URL) and re-rendering your app whenever that location changes.And is shared by all router components (like `<BrowserRouter>`).
* `Link` Links provide declarative, accessible navigation around your application
* `NavLink` A special version of the \<Link\> that will add styling attributes to the rendered element when it matches the current URL.
* `Route` Its most basic responsibility is to render some UI when a location matches the route’s path
* `Routes` A component that wraps your Route components that selects the best path match
* `Outlet` A component that renders the next match in a set of matches. it must exist in the parent component when nesting routes
* `useParams` A hook that allows us to gain access to a Route's params

<section class="checks-for-understanding">
## Prework  

Before the lesson, complete the [prework](https://gist.github.com/niksseif/284877066bc6a7ce6290031980cb4a6a){:target='blank'}.
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
<section class="answer">
### Here  are some advantages routing can provide:
- Users can use urls to bookmark pages.
- Users can use the back or forward button.
- Users can easily share content from a page in the app.
</section>

If you have written a multi-page application, you may have wrestled with Webpack configs in order to get all your pages built successfully. Fortunately, routing with React is easy! We just need to use a library called <a href="https://reactrouter.com/en/main/start/overview" target="_blank">React Router</a>.

**React Router allows us to conditionally render components based on the current url.**

Rather than tell you about how Router works, we'll work through a series of exercises and examples. We'll be using <a href="https://github.com/turingschool-examples/react-router-v6" target="_blank">this repo</a> to solve a series of challenges listed below.

## Installation Instructions
### 0. Clone repo & review codebase

```bash
git clone https://github.com/turingschool-examples/react-router-v6
cd react-router-v6
npm i
npm start

```
The App is not fully put together. It has a series of components that will serve as building blocks of the final component. You won't be building out new components, but you will be editing existing ones. Get oriented with the application. Check out all the components, try and write a short summary of what each is doing.



## Installing Router

### 1. The first step is installing react router
```bash
npm install react-router-dom
```

### 2. Once you have React Router installed, import your chosen Router

To use React Router, we need to wrap any components that will use a React Router-provided-component in some kind of [Router component](https://reactrouter.com/en/main/router-components/router).
We'll use a [Browser Router](https://reactrouter.com/en/main/router-components/browser-router), since our app will be used in the browser. This Router provides access to the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). But we won't worry about those details just yet.

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

```

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
<section class="call-to-action">
### Let's explore

1. What happens if you remove the line that starts with `import { Routes...`? What does the error message say?
2. What happens if you remove the `Routes` component? What does the error message say?
</section>
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

<section class="call-to-action">
### Let's explore

1. Change the `<NavLink />` components to `<Link />` components. What happens?
2. When might you choose a `<Link />` over a `<NavLink />`?
</section>

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

<section class="call-to-action">
### Let's explore

1. Why doesn't the `<Home />` component render when you're on the `/puppies` path?
2. Does order matter? Try switching the two `<Route />` components. What happens?
3. How do you pass props to components from inside a `<Route />`?
</section>

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

<section class="call-to-action">
### Let's explore

Hmmm...two of those `<Route />` components are looking quite similar. I wonder if there is a way to make that more dynamic. Take a minute to consider what would we need in order to turn those two `<Route />` components into one.
</section>

</section>

## Dynamic Routing
In this exercise, we'll explore two ways to achieve dynamic routing in order to obtain an animal and its ID from the route: first, we'll use the `Outlet`, and then we'll show you how to implement a dynamic route without using an outlet.
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

<section class="call-to-action">
### Let's explore

1. In your app, click on the `Sharks` button. What renders to the page? What shows up in the URL? Why?
2. How can we tell the `<Creatures />` component which animal we've selected?

</section>

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

<section class="call-to-action">
### Let's explore

1. What console.logged? Where does the key:value pair come from?
2. Click between the `Puppies` and `Sharks` buttons. How is the logged object changing?
3. Manually type something random into the URL, like `localhost:3000/potatoes`. What logs?
</section>

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

<section class="answer">
### 12. Let's make the images link to our new URL

```jsx
// Creatures.js

import './Creatures.css';
import { getCreaturesData } from '../../data/animalData';
import { useParams, Link } from 'react-router-dom';

const Creatures = () => {
  const creatureType = useParams().animal;

  const creatureImages = getCreaturesData(creatureType).map(creature => {
    const { id, image } = creature;
    return (
      <Link to={`/${creatureType}/${id}`}>
        <img src={image} key={id} id={id} className="app-img"/>
      </Link>
     )
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

<section class="call-to-action">
### Let's explore

1. What happens when you click on a shark or puppy image? Does the URL change? What appears on the page?
2. Why did we use a `<Link />` and not a `<NavLink />`?
</section>

</section>

<section class="answer">
### 13. Let's tell Router what to do with this new path

```jsx
// App.js

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';
import CreatureDetails from '../CreatureDetails/CreatureDetails';

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
        <Route path="/:animal" element={<Creatures />}>
          <Route path=":id" element={<CreatureDetails />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
```

<section class="call-to-action">
### Let's explore

1. Why did we nest the routes?
2. Why don't I have a '/' in front of ":id"? (Note: You can include the '/', if you also include the rest of the path. Meaning, you could do `:/id` OR `/:animal/:id`)
3. Is it working? Is CreatureDetails rendering to the page?
</section>

</section>

<section class="answer">
### 14. One more step to getting CreatureDetails to appear

```jsx
// Creatures.js

import './Creatures.css';
import { getCreaturesData } from '../../data/animalData';
import { useParams, Link, Outlet } from 'react-router-dom';

const Creatures = () => {
  const creatureType = useParams().animal;

  const creatureImages = getCreaturesData(creatureType).map(creature => {
    const { id, image } = creature;
    return (
      <Link to={`/${creatureType}/${id}`}>
        <img src={image} key={id} id={id} className="app-img"/>
      </Link>
     )
   });

   return (
     <>
       <h1>{creatureType}!</h1>
       <Outlet />
       {creatureImages}
     </>
   )
}

export default Creatures;
```
<section class="call-to-action">
### Let's explore

1. Try moving the `<Outlet />` component around. Does it's placement matter?
2. Why is the `<Creatures />` component still showing?
3. What would you have to change if you didn't want the `<Creatures />` component to render at this path?
</section>
***Why Use the `Outlet`*** ?  
The Outlet component serves as a placeholder for rendering nested route content within a parent component. It's a fundamental tool that allows you to seamlessly integrate child components' content into a parent's layout while maintaining UI coherence.

***Real-World Analogy: Twitter Inbox*** <br/>
Imagine a scenario similar to the Twitter inbox. When you access your inbox, you see a list of message previews on the left side of the screen, but the right side remains blank until you select a specific conversation. This structure is where the Outlet comes into play.
</section>

<section class="answer">
### 15. Now let's make CreatureDetails show the animal's info (hint: look at animalData.js!)

```jsx
// CreatureDetails.js

import './CreatureDetails.css';
import { useParams } from 'react-router-dom';
import { getCreatureDetails } from '../../data/animalData';

const CreatureDetails = () => {
  const creatureType = useParams().animal;
  const creatureId = useParams().id;

  const creatureStats = getCreatureDetails(creatureType, creatureId);

  return (
    <div>
      <h1>{creatureStats.name}</h1>
      <img src={creatureStats.image} className='app-img-no-hover'/>
      <p className='creature-bio'>{creatureStats.bio}</p>
    </div>
  )
}

export default CreatureDetails;
```
</section>

Now that you know how to use Outlet, let's explore other ways we can achieve dynamic routing without it.
We are going to remove our nested route and define a new separate route for `/:animal/:id` which is not directly nested within the first route `/`. Each route has it's own component. 
You would use this approach when you have distinct pages or components that should be displayed separately based on the URL. 
<section class="answer">

```jsx
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';
import CreatureDetails from '../CreatureDetails/CreatureDetails';

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
        <Route path="/:animal/:id" element={<Creatures />}>
      </Routes>
    </main>
  );
}

export default App;

```
Now it's time to remove `Outlet` from our `Creature.js` file since we don't have nested routes and we don't need `Outlet` anymore
</section>

<section class="call-to-action">
### Final Reflections

1. Why use Router?
2. Describe the following:
- `Route`
- `Routes`
- `Link`
- `NavLink`
- `Outlet`
- `useParams`
</section>

## Extra Resources:
- [React Router v6 Docs](https://reactrouter.com/en/main/start/overview)
- [React Router v6 Tutorial](https://reactrouter.com/en/main/start/tutorial)
- It is likely that you'll run into use cases for `Navigate`/`useNavigate`, which helps you force a URL change. [This](https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb) is a helpful resource!
