---
title: "React I: the What & the Why"
length: 3 hours
tags: javascript, react
module: 3
---

## Learning Goals

* Understand why we use JS frameworks
* Define what React is and what it does for us
* Explain why we would use a tool like React
* Understand React concepts:
  - the virtual DOM
  - JSX
  - components
  - props
  - state

## Vocab

- `framework` A software framework provides a standard way to build and deploy applications. It is a universal, reusable software environment that provides particular functionality as part of a larger software platform to facilitate development of software applications, products and solutions
- `Virtual DOM` An in-memory object that represents a DOM structure and can be manipulated with JavaScript before updating the real DOM
- `JSX` A mix of JavaScript and XML that facilitates rendering the appropriate HTML Components: standalone, independent parts of an application that are responsible for handling only a single UI element
- `Components` Components are standalone, independent parts of an application that are responsible for handling only a single UI element
- `Props` This is shorthand for properties.  Props is an object that is given from it's parent component down to the child component.  Props should remain immutable
- `State` State holds data that represents the actual state of an application.  State can be changed and mutated through user interactions

## WHAT is React?

People will define React in many different ways, but at its core, React is:

```
A client-side JavaScript framework that allows you to easily and efficiently manipulate the DOM based on application data and how it changes in response to user interaction.
```

Let's break this definition down a little bit.

### What is a framework?

The term framework is often used interchangeably with the term 'library', but they're actually a bit different. Libraries are usually a little bit smaller, and generally serve the purpose of providing us with abstractions over complex code that we would otherwise have to write ourselves. (Think jQuery.) Libraries are usually 'syntactic sugar' over something difficult.

Frameworks, on the other hand, offer us a bit more than just abstractions - they give us a lot more powerful ways to write our code, but at the same time, they prescribe a very strict and specific way for us to organize our code.

We'll see this demonstrated a bit better when we get into the code along, but React gives us a lot of cool features:

* **The Virtual DOM:** an in-memory object that represents a DOM structure and can be manipulated with JavaScript before updating the real DOM
* **JSX:** a mix of JavaScript and [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) (Extensible Markup Language) that facilitates rendering the appropriate HTML
* **Components:** standalone, independent parts of an application that are responsible for handling only a single UI element
* **Props & State:** objects in React where we can store application data and other values that will affect the rendering of our components

We'll go more in-depth into each of these features throughout the lesson, but for now just remember that in order to leverage all of these features, we have to write our code in a very specific way that React understands. This has implications on our directory structure, our separation of concerns, and the way we interact with our application through code.

### What do we mean when we say 'application data'?

Think about all the content you see on a site like Facebook - user profiles, their posts, comments on those posts, etc. All of this is considered application data. One of the core differences between building a web site and building a web app is that web apps have to manage a large amount of data that can be manipulated by its users. For example, Facebook users can add and delete posts, edit comments, change their profile information, etc. A web application has to store and maintain all of this data even as it updates based on user interaction.

React allows us to ensure our application UI is displaying all the correct information at any given time, no matter how frequently it changes.

### How does React make DOM manipulation easy and efficient?

Think about how you've previously interacted with the DOM, without the help of a framework. You maybe used vanilla JavaScript or jQuery to manipulate text or class names based on event listeners applied to certain selectors. Some of you may recognize how much effort goes into each of these DOM manipulations, some of you might think it hasn't been all that bad.

Trust me, it's bad.

Standard methods of DOM manipulation are tedious, slow and brittle. It requires us to manually target elements, it takes a long time for the browser to process DOM manipulations, and the amount of code it requires makes it really fragile. There are too many places where we could go wrong with a simple typo.

React solves all three of these problems by providing us with a Virtual DOM, which helps us reduce the amount of code and time it takes to update our UI. More on this later!

## WHY Do We Use React?

### Facilitates creating fast, interactive applications

React is heavily focused on the interactive UI aspect of an application. While it can help you manage data as well, its main claim to fame is how easily we can create a highly interactive application with a UI that responds quickly to constantly changing data.

### Enforces modular code organization

We mentioned a framework enforces a certain structure for your code. The way React requires us to set up our applications and break apart certain logic forces us to write modular applications by default. Modular applications are much more scalable and maintainable, and make future development and iterations easier.

## The Virtual DOM

We mentioned previously that a big benefit of React is how well it can handle DOM manipulations in an easy and efficient way. This is done through the use of a Virtual DOM. A Virtual DOM is a JavaScript object that represents a copy of a DOM structure. This provides us with a huge performance benefit, because accessing and updating a JavaScript object is much faster than accessing the true DOM directly.

React lets us alter this virtual DOM first, then renders the change for us - making the smallest amount of true DOM manipulations possible. React will only render the deltas of what actually needs to be changed, rather than making a massive DOM manipulation to elements on the page that aren't actually changing.

This idea of a Virtual DOM isn't unique to React. It's found in many other client-side frameworks, and can even be implemented with vanilla JavaScript, using DocumentFragments. Take a look at the following codepen:

<iframe src="https://codesandbox.io/embed/tender-napier-eq5e6?fontsize=14" title="DocumentFragments Example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

If you run the jQuery solution to appending all of those elements to the DOM, then run the DocumentFragment solution, you'll see exactly how much of a performance benefit using a Virtual DOM gives us.

## JSX

JSX is a special syntax that allows you to write HTML in your JavaScript, and JavaScript in your HTML. It's technically XML, but you can just think of it as HTML and JavaScript working together to create that Virtual DOM.

JSX syntax takes some getting used to, and it might seem to fly in the face of what you know about "separation of concerns" - but after a bit of practice you'll find it becomes more intuitive. In the early days when we talked about separation of concerns, we thought: split up your HTML (content) from your CSS (presentation) from your interactivity (JavaScript). Now when we think about separating our concerns, we do it in a slightly more semantic, user-centric way. We're not bothered by mashing up our HTML, CSS and JavaScript in a single file, if all of that logic works together to create a single application feature. Our separation of concerns is now much more focused on the concerns of our users, rather than concerns about our file structure. We'll see this demonstrated a bit further later on in this lesson.

First, let's take a look at the JSX syntax:

<iframe src="https://codesandbox.io/embed/jsx-syntax-example-kdw4u?fontsize=14" title="JSX Syntax Example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<section class="call-to-action">
### Turn & Talk

What looks familiar? What looks different?
</section>

You might notice the curly braces around things like `onClick={clickGroceryList}`. These curly braces are allowing us to interpolate JavaScript in our HTML. Think about how you may have used template strings in vanilla JavaScript in the past: we use the `${}` syntax to denote that this particular chunk of the string is a dynamic value that should be evaluated and parsed as a dynamic JavaScript value, rather than plain text. The curly braces in React give us similar functionality. Anywhere in our JSX where we want to tell our application "This is JavaScript, so don't render it character by character like HTML, we can wrap that code in curly braces to signal that.

## Components

Components are reusable pieces of code that represent templates for a particular instance of a UI element. Components can take in parameters that might vary from instance to instance, allowing us to create unique elements with a shared structure and style. The main benefit of components is how modular they are - they can snap or nest together to create complete pages and applications.

If we take a look at a website like Twitter, we can start to flesh out what components might be making up the entire page, and how they're being reused:

![twitter components](/assets/images/lessons/intro-to-react/twitter-components.png)

<section class="call-to-action">
### Your Turn

Pick a web app that you frequently use and try to break it down into components just by looking at it. Which components might be reused on the page? Which components might have components nested within them? Try to think of semantic names for each of the components you identify.
</section>

<section class="note">
### More on the term 'component'

You'll hear the term 'component' used in many different areas of programming, and it might mean slightly different things depending on the context. In React, components have the following characteristics:

* Components are created as JavaScript functions
* They return one, single JSX element (remember, functions can only return one thing!)
</section>

### Component Example

Look back to the Twitter page where we identified several components. A component we might write to create a 'Tweet' section of the page might look like this:


```js
// Tweet.js

const Tweet = () => (
  <div>
    <h4>Bob Loblaw</h4>
    <img src="bob-loblaw-profile-photo.jpg" alt="Bob Loblaw" />
    <p>Lorem ipsum dolor set amet consequetar adipscing nullum vestibulum</p>
  </div>
);

export default Tweet;
```

* We have an arrow function assigned to a variable called `Tweet`. We give our component functions names that identify or describe what sort of UI template we're creating
* We are implicitly returning a chunk of JSX (Wrapping the JSX in parens allows us to write many lines of JSX and return them all together as one unit. Without them, we would have to put all of our JSX on a single line.)
* We are exporting the Tweet function at the end of our file. Common convention is to create a single component in each file, and to name that file according to the component name.

This component would work great if we only wanted to display a single Tweet on the page, as the Tweet content is hard-coded directly into the JSX. As it stands now, we wouldn't be able to re-use this component to display every Tweet. Next we will refactor this component using **props** to make it more dynamic.

<section class="call-to-action">
### Turn and Talk

Without knowing much React, or what props are, how do you think we would refactor the above component to be more dynamic? Think back to your vanilla JavaScript skills. 
</section>


<section class="note">
### ES6 Class Components

As you do your own research and learning on React, you will likely come across documentation where components are written as ES6 classes. (The above component might be written like [this](https://codesandbox.io/s/amazing-sinoussi-pczu7), for example.) This was the go-to pattern for creating React components in the past. While this syntax still works (try it out!), it is currently being phased out in favor of the functional style shown above.
</section>


## Props & State

While React is focused heavily on the UI/visual layer of applications, it does allow for some data management through props and state.

### Props

We mentioned that components are *reusable* pieces of code, that allow us to create unique instances of certain UI elements. In our above example, we would like to be able to re-use our `Tweet` component for any tweet - which we can do by passing props into the component.

**Props allow us to pass information from parent components to child components.** We can pass strings, numbers, booleans, arrays, objects, functions, pretty much any piece of data we want access to in our child component. We can name them whatever we'd like, as long as we're consistent and semantic with the names that we choose.

When we pass props down to a child component, it comes through as a simple JavaScript object with key value pairs. Let's expand our example to demonstrate.

#### Twitter Timeline App

<iframe
     src="https://codesandbox.io/embed/new-sky-qu1tp?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="new-sky-qu1tp"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

<section class="call-to-action">
### Your Turn

Imagine if we have 50 Tweets to be displayed.  That is going to make our code look messy if we have to write the Tweet component 50 times.  How could we refactor this using an array of data and the `.map()` array prototype method?
</section>

### State

**State** is slightly different than **props**: state holds data that represents the current state of our application. State can be changed and mutated through user interactions, whereas props should remain immutable.

We used props to make our Tweet component more dynamic, allowing each Tweet to display their own unique content. Nobody is changing the content of a Tweet (props are immutable), but the amount of replies, likes, and retweets for that particular Tweet will change in response to user interaction (users will click the reply/like/retweet buttons, increasing the count). This makes that data a good candidate for putting in state.


#### Read Further

Understanding the difference between props and state can be tricky. Read through the top three answers on this [stackoverflow question](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react), and go through any links or resources provided in the answers. Just because one answer has the most upvotes, doesn't mean it's going to be the one that makes everything click for you. Take your time reading through the explanations here. (Keep in mind that some of the responses may show the ES6 class style of creating React components. Don't let this throw you off, it is just a syntactical difference!)

<section class="checks-for-understanding">
### Checks for Understanding

* How does React improve the process of manipulating the DOM?
* What is a component?
* What is the difference between props and state?
</section>

## Further Reading & Resources
* [ReactJS Docs](https://reactjs.org/)
* [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Props vs. State](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react)
