---
title: Nested Promises Workshop
tags: promises, asynchronous, Promise.all()
module: 3
---

### Setup

Clone down the [nested-promises](https://github.com/turingschool-examples/nested-promises) repo and start it up.

**Nested Promises API**
```bash
git clone https://github.com/turingschool-examples/nested-promises.git
cd nested-promises
npm i
npm start
```

Now that you got a local server running,  create another directory for the front-end.  Here are the commands:

```bash
npx create-react-app nested-promises-practice
cd nested-promises-practice
npm start
```

Once you've got it set up, paste the following code into your `App.js` file.

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    // Write your fetch code here
  }

  render() {
    return (
      <div className="App">
        <h1>Nested Promises Practice</h1>
      </div>
    )
  }
}

export default App;
```

### Practicing Nested Fetch Requests

We're going to get some practice dealing with nested fetch requests and how we can run multiple fetches to retrieve the data that we need.  *Fetch* requests will typically happen in the `componentDidMount` method.  This is a lifecycle method that we'll cover more in the following days, but it essentially fires after the first render.  This is perfect so that we can display something, and then fetch our data afterwards.  For this exercise, we are going to fetch some data about RTD's schedules.  We want to get the lines available and the locations that they stop at.  Run this fetch in your `componentDidMount`

```js
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/rtd-schedules')
      .then(res => res.json())
      .then(schedules => console.log(schedules))
  }
```

Go back to your App and check your console, and you should get an object with more urls:

```js
{ 
  buses: 'http://localhost:3001/api/v1/buses',
  rails: 'http://localhost:3001/api/v1/light-rails',
  skyRides: 'http://localhost:3001/api/v1/sky-rides'
}
```

Bummer, this isn't quite what we are looking for.  We are going to have to do another fetch request in order to retrieve our data.  Let's do one together and get the rails data.  Create an `apiCalls` file inside of your src directory:

```bash
touch src/apiCalls.js
```

Because it looks like we might have to do a number of fetch calls, I typically like to break out my fetch functions into a separate file.  This will also make the process of testing our fetch calls much easier as well!

So let's write a function that takes the rails url as an argument, and returns the data back.  Let's write the following function in our `apiCalls.js`

```js
export const getRails = rails => {
  fetch(rails)
    .then(res => res.json())
    .then(rails => console.log(rails))
}
```

Then lets import and invoke it inside of the `App` component:

```js
import React, { Component } from 'react';
import { getRails } from './apiCalls';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/rtd-schedules')
      .then(res => res.json())
      .then(schedules => {
        const { rails } = schedules;
        const railLines = getRails(rails);
      });
  }
```

You will get another object with yet again even more nested fetch requests.  Let's look at the data below:

```js
{
  results: [
    {
      line: 'A',
      name: 'Union Station to Denver Airport Station',
      schedule: 'http://localhost:3001/api/light-rail/A'
    },
    {
      line: 'B',
      name: 'Union Station to Westminster',
      schedule: 'http://localhost:3001/api/light-rail/B'
    },
    // etc...
  ]
}
```

We're getting closer though.  Now we know the lines and names of each light rail but we still don't have the schedule of stops for each rail line.  We're going to have to find a way to iterate through this array, and fetch each nested url.  `map` could be a useful array prototype method since we need to return an array of the same length but with the full data.  As we iterate through, we'll need to run a fetch for each schedule.  Let's create one more function that will do another fetch for this.  Look at the code below closely:

```js
export const getRails = rails => {
  return fetch(rails)
    .then(res => res.json())
    .then(rails => {
      const railData = rails.results.map(rail => {
        getSchedule(rail.schedule);
      })
    })
}

const getSchedule = schedule => {
  fetch(schedule)
    .then(res => res.json())
    .then(stops => console.log(stops))
}
```

Now we have access to the array of stops each light rail goes through.  Nice, we're almost there.  Let's make a couple of edits:

```js
export const getRails = rails => {
  return fetch(rails)
    .then(res => res.json())
    .then(rails => {
      const railData = rails.results.map(rail => {
        const { line, name, schedule } = rail;
        return getSchedule(schedule)
          .then(railStops => ({ line, name, railStops }))
      });
      console.log(railData)
    });
}

const getSchedule = schedule => {
  return fetch(schedule)
    .then(res => res.json())
    .then(stops => stops.stops)
}
```

Because we are returning a `Promise` from *getRailSchedule*, *getRailSchedule* becomes asynchronous meaning we can use `.then()` in our *getRails* function to then return an object with the values we need.  What you will soon notice though is that if you console.log your `railData`, it is an array of Promises!  How do we resolve an array of Promises?  Let's write it together:

```js
export const getRails = rails => {
  return fetch(rails)
    .then(res => res.json())
    .then(rails => {
      const railData = rails.results.map(rail => {
        const { line, name, schedule } = rail;
        return getSchedule(schedule)
          .then(railStops => ({ line, name, railStops }))
      });
      return Promise.all(railData);
    })
}
```

Awesome, we are now using `Promise.all` in order to return **one** single Promise object that resolves when all of the promises inside of the array have resolved.  We can now go back to our app and log what our `railLines` are:

```js
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/rtd-schedules')
      .then(res => res.json())
      .then(schedules => {
        const { rails } = schedules;
        const railLines = getRails(rails).then(data => console.log(data))
      });
  }
```

Hooray!  That was a lot of work but we finally got an array of objects including the line, name, and schedule of stops! 

<section class="call-to-action">
### Your Turn

This is going to take practice, but it's okay.  We still have a couple of more endpoints to still practice on in this exercise (as well as in your projects).  Continue to work on getting the data for the `bus` and `skyride` schedules!
</section>



