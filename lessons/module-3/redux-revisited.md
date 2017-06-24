---
title: Redux Revisited
module: 3
tags: react, redux
---

![Redux Flow](/assets/images/lessons/redux-revisited/react-redux-flow.png)

### What even is the store?

Let's meditate on [this code sample][createstore].

[createstore]: http://redux.js.org/docs/api/createStore.html#example

## Some bad things we did (Or, a bit on container versus presentational components)

By "we," I really mean "I"—which because you all just steal my code: "we." Let's look at some of our past mistakes and see how breaking stuff out into containers and presentational components might have been a better choice.

- [That time][application] I decided to handle both rendering and managing state in the Application component in [Taskblaster][].
- [That time][task-list] I took an otherwise reusable list component and gunked it up with too much knowledge about Firebase.

[Taskblaster]: https://github.com/turingschool-examples/taskblaster/
[application]: https://github.com/turingschool-examples/taskblaster/blob/master/lib/components/Application.js#L16-L20
[task-list]: https://github.com/turingschool-examples/taskblaster/blob/master/lib/components/TaskList.js#L18-L31

### We can do better, right?

What if we separated the concerns of figuring out how to get and update state from how we go about displaying our user interface.

**Stop!** Let's spend 10 minutes and read [this article][pvc] and also [this one too][cc].

[pvc]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.s1deylkix
[cc]: https://medium.com/@learnreact/container-components-c0e67432e005#.x431xk8mv

Together, we'll look at [this table](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components).

Some thoughts:

- Maybe it's not wrong to think of containers a bit more like controllers.
- This isn't the right approach all of the time. Recall ["You might not need Redux"][ymnn]. It's all about figuring out where you want to make your trade offs.

[ymnn]: https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.ixq20vlzb

## The interplay between React and Redux

React and Redux are maintained by some of the same people. The repository for [Redux][reduxrepo] is definitely under the the [React][reactorg] organization on Github. But, beyond they're not related. You can definitely use React without Redux and you can also use Redux without React.

We also have a library called [React Redux][]. I'll let you take a lucky guess as to what it does.

React Redux really only gives us two things:

- [`<Provider />`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)
- [`connect`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

The first is necessary to make the former work. `connect` takes care of wiring up a container to the Redux store and subscribe to updates. It effectively is the glue between Redux and React.

Let's look at [this section of a really great article on React and Redux][csst] to get a better sense of what's going on.

[reduxrepo]: https://github.com/reactjs/redux
[reactorg]: https://github.com/reactjs
[React Redux]: https://github.com/reactjs/react-redux
[csst]: https://css-tricks.com/learning-react-redux/#article-header-id-12
