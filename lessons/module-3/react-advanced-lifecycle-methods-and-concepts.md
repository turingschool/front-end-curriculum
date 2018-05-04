---
title: React Additional Lifecycle Methods & Concepts
module: 3
tags: React
---

# LifeCycle Methods: An Interactive Adventure

Later this year (2018), the React team will unveil **async rendering**. Per the [docs](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-core-architecture), this is "a strategy for cooperatively scheduling rendering work by periodically yielding execution to the browser. The upshot is that, with async rendering, apps are more responsive because React avoids blocking the main thread." This is going to play a big part in the future of React. In anticipation of this release, React has begun making some changes that will help prepare us for async rendering. Among those changes are getting rid of some lifecycle methods that are now considered UNSAFE to use and adding a few new lifecycle methods. 

We talked earlier this week about the Birth/Mounting Phase that a class based React component goes through when it is created. Today we are going to spend a little time learing about the other 2 phases of a component's lifecycle. You're going to split up into 5 groups and each group will be given a lifecycle method to research and learn about. You will then teach the rest of the class about your assigned lifecycle method. There are a number of resources at the bottom of this lesson that you can use, but by no means are you limited to just the ones here. 

## Phase 1: Birth/Mounting (see [previous lesson](http://frontend.turing.io/lessons/module-3/react-basic-lifecycle-methods-and-propTypes.html)) 
### constructor()
### componentWillMount() - *will be deprecated with React 17*
This legacy method is now **unsafe** to use and should be replaced with `componentDidMount()`.
### static getDerivedStateFrom Props - *NEW with React 16.3.0*
### render()
### componentDidMount()
 
## Phase 2: Growth/Updating  
### componentWillReceiveProps() - *will be deprecated with React 17*
This legacy method is now **unsafe** to use and should be replaced with `static getDerivedStateFromProps()`.
### static getDerivedStateFromProps - *NEW with React 16.3.0*
Since this method is static, you can't reference `this`. Whatever is returned from the method, that's what will be updated (or null if nothing is needed). This new method will be called on the initial mounting of the component as well as when it's re-rendered.
### shouldComponentUpdate()
### componentWillUpdate() - *will be deprecated with React 17*
This legacy method is now **unsafe** and shouldn't be used going forward.
### getSnapshotBeforeUpdate - *NEW with React 16.3.0*
This method is called right before any DOM mutations are made. If you need to do any calculations that you'd like to use in componentDidUpdate(), you can return those in this method and they will get passed along as the third argument to componentDidUpdate().
### render()
### componentDidUpdate()

## Phase 3: Death/Unmounting  
### componentWillUnmount()

## Error Handling
### componentDidCatch() - *just know this exists*

## Here are some great life-cycle resources for you to check out and reference

- [The React Life Cycle](https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html)
- [Lifecycle Simulators](https://reactarmory.com/guides/lifecycle-simulators)
- [React Lifecycle Docs](https://reactjs.org/docs/react-component.html)
- [Dan Abramov's Twitter chart/convo on modern React lifecycle methods](https://twitter.com/dan_abramov/status/981712092611989509)
- [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

  
