---
title: Redux Saga
tags: React, Redux, Sagas
---

### What Is Redux-Saga

Redux-Saga is a library that makes performing in-between events easier in a React/Redux application. Similar to `redux-thunk`, a `redux-saga` gets added to your Redux store when it is created. When you first create your store, the `applyMiddlware()` function gets called. You then pass that function an array of pieces of middelware.

### Setting Up Redux-Saga

Let's kick things off by running `create-react-app redux-saga-workshop`.

Then, `cd` into your directory and let's add some additional libraries.

`yarn install redux react-redux redux-saga`. 
