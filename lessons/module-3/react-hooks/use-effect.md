---
title: React Hooks - useEffect
length: 2 hours
tags: React, Hooks, useEffect
module: 3
---

## Learning Goals
* Identify use-cases for the useEffect hook
* Be able to fine-tune when the useEffect hook runs

## What is useEffect?

So far in React, we've leveraged the `useState` hook to manage our application data. Another common hook that you'll want to get comfortable with is `useEffect`. This hook allows you to perform some logic during certain phases of the **component lifecycle**. We'll first demonstrate how and when `useEffect` runs, and then we'll dig into the syntax before demonstrating some real world use-cases.

### The Component Lifecycle

Every component you create goes through several phases of existing:

* **Mounting:** the component is being assessed, created and rendered on the DOM
* **Updating:** any time we update state values that are used in our JSX, the component updates itself and re-renders reflecting those changes on the DOM
* **Unmounting:** the component is completely removed from the DOM, usually in response to some sort of user interaction or change in state


Let's look at an example of how `useEffect` lets us tap into these different phases of a component.

<iframe
     src="https://codesandbox.io/embed/sharp-wilbur-l0zli?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="sharp-wilbur-l0zli"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

If you open up the console in this CodeSandbox, you should see a single console.log from our call to `useEffect`. **What lifecycle phase has our component gone through?**

Let's add onto this example by updating our score state and see how `useEffect` runs each time our component is updated:

`<button onClick={() => setScore(score + 1)}>Add Point</button>`

Now, any time we click our button, our count is updated and we see the console.log from our `useEffect` call on each click. This is representative of our component going through update phases on each click:

* our component has a value in state that is rendered to the DOM
* the value in state gets updated
* the component is re-rendered to reflect that change


### Syntax

Before we move on, let's make sure we understand the syntax.

<section class="call-to-action">
### In Your Notebook

* Where does `useEffect` come from? We did not define it ourselves. What is our first step in making sure we can use it?
* What data type is `useEffect`?
* What argument does `useEffect` take in? What data type is it?
</section>

<section class="answer">
### The Answer  

`useEffect` is a function that we get for free when we import it from React. It takes in a function as an argument - this will fire any time React kicks off a call to `useEffect` (During the mounting, updating, unmounting phases)
</section>


### Why?

Up to this point, it's probably pretty difficult to see the practical use-case for this particular hook. But think about the fact that it runs **once** during the **mounting** phase of a component, the earliest phase of a component's lifespan.

<section class="call-to-action">
### Turn and Talk

What is an example of some application logic that you'd want to kick off as soon as possible? How would your component depend on this logic?
</section>

<section class="answer">
### The Answer  

One common use of `useEffect` you'll see is kicking off a fetch request to retrieve data that your application depends on in order to render appropriately.
</section>

Let's update our example to see the benefit of `useEffect` running during the mount phase of a component. Imagine you've played this game in the past and a record of all your prior high score is kept at [http://fe-apps.herokuapp.com/api/v1/numbers/32](http://fe-apps.herokuapp.com/api/v1/numbers/32). We want to fetch that high score and display it on the DOM. We might do that fetch request in our `useEffect` hook, like so:


```js
const [highScore, setHighScore] = useState(null); // add a new state item for the high score

useEffect(() => {
	fetch("https://fe-apps.herokuapp.com/api/v1/numbers/32") // fetch and set the high score in state
	  .then(response => response.json())
	  .then(results => {
	  	console.log(results);
	  	setHighScore(results.topScore)
	  })
	  .catch(error => console.log(error));
});

<h2>Previous High Score: {highScore}</h2> // add the high score to our JSX return
```

With this logic in place, our fetch request gets kicked off as soon as possible and updates our high score in state so that the component can re-render with that information in place, which is great! But keep an eye on the console while you click the 'Add Point' button. What do you notice? Is this the behavior that we want?

### Fine-Tuning useEffect Behavior

You may have noticed that our fetch request gets kicked off over and over again when we click our 'Add Point' button. This is because `useEffect` runs during every update phase for our component. We only want our fetch to run once during the mount phase, and never again after that.

In order to fine-tune when `useEffect` actually fires, we can give it a second argument called a **dependency array**, like so:

```js
useEffect(() => {
	// do some logic here, like a fetch request
}, []) // add an array as our second argument
```

The dependency array is just a plain old JavaScript array. Any values we put in that array would tell React 'run useEffect during the update phase if and only if one of these values changes'. We'll see an example of this later, but for now, let's just use an empty array as our second argument. React will follow the same logic here: *run useEffect during the update phase if and only if any of the values in this array change*. Because there are no values in the array for React to watch, it will never fire off `useEffect` during an update phase because nothing in the array has changed (it's empty!)

After updating your code to include the dependency array, click on the 'Add Point' button and notice the fetch call does not get fired in response.











* useEffect takes in a function
* every time the component is rendered or re-rendered, useEffect is called
* console.log inside of useEffect
* clean up after render has happened
* second argument - array, values.password - only the values that have changed that you want to call useEffect - dependency array - all values your effect depends on
* shallow comparison of the values?
* componentDidMount/componentWillUnmount
* often see it with an empty array as the second argument because you only want it to run once for your first render (initial fetch/GET)
* return a function to add cleanup logic (what kind of cleanup logic?)
* good place to add and remove event listeners

* you can have more than 1 useEffect and they will fire off in ourder 

## Additional Resources

https://www.youtube.com/watch?v=j1ZRyw7OtZs
https://michalzalecki.com/versatility-and-use-cases-of-react-use-effect-hook/