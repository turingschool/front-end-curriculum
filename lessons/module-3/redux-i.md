---
title: "Redux I: the WHY and WHAT"
length: 90
tags: React, JavaScript, Redux
module: 3
---

## Learning Goals

* Understand the difficulties in scaling up and maintaining a large React application
* Gain a high level understanding of why a tool like Redux is useful
* Understand the main pieces of Redux
  - The store (global state)
  - Actions/action creators
  - Reducers
* Be able to diagram the functions/objects that create, update, and access the store, and the functions/objects that connect a React component to the store

## Vocabulary

- Redux - a library that allows JavaScript apps to manage application state
- action - an object containing a type and a payload, used to tell the reducer how to update the store
- action creator - a function that takes in a payload and creates an action object
- reducer - a function that takes in the initial state and an action, and which returns that specific part of the global store
- `combineReducers` - a function from Redux that allows us to put together all our reducers into a single object (often called the rootReducer)
- store/global state - an object; think of it as a mega state that is accessed and updated with its own functions (similar to how React state is updated with `setState`)
- `createStore` - a function from Redux that uses the rootReducer to create the store
- `dispatch` - a function from Redux that sends an action object to its reducer (which updates the store)
- Provider - a component from `react-redux` that wraps our App component and allows each child component to be connected to the store
- mapStateToProps - a function we create that takes in the global state object and returns an object to be added to a component as part of its props object; it allows the component to access the data in the store
- mapDispatchToProps - a function we create that takes in  `dispatch` and returns an object to be added to a component as part of its props object; it allows the component to update the data in the store
- `connect` - a function from `react-redux` that allows us to connect a component to the store by adding items from the store to our component props, as well as adding `dispatch` to our component props
 - container - what we call a component that has been connected to the store

## WHY Redux?

So far, our React applications have been fairly small. Take a look at the following diagram. The yellow boxes are components. The blue dots represent component state. The blue lines represent props.

![symbolic diagram of a small React app](https://i.imgur.com/MzlHk5K.png)

<section class="call-to-action">
### In Your Notebook

Draw out a symbolic representation of a recent React app you've built! Mark which components have state, and draw lines connecting them to represent props being passed.
</section>

Managing state in an application this size is fairly straightforward. If we think of IdeaBox, we can remember that we created a function called `deleteIdea` in the `App` component, because `App`'s state held onto our list of Ideas. We passed the `deleteIdea` function down to our `IdeasContainer` component. Now, that component didn't itself invoke that function. Instead, it passed the function to each of the `IdeaCard` components that it created.

That's a bit of a mouthful, even though it's just one function.

As React apps scale up, imagine how much harder it becomes to keep track of data, state, and props!

![symbolic diagram of a larger React app](https://i.imgur.com/V8jmKtf.png)

Passing multiple props through multiple components, just to pass them to other components, to pass them to _other_ components .... It becomes altogether too easy to lose track of data, and your apps become very hard to maintain!

But imagine if, instead of having our application data spread out through our applications, we could store all of it in one place?

![symbolic diagram of a larger React app with Redux](https://i.imgur.com/EWuZOo3.png)

This is what Redux does. It gives us the ability to create an application-wide store of data. Any component can directly access and update the store!

<section class="note">
### Note

We will still have local component state in our React/Redux applications. For example, forms will still need a way to store data before they are submitted!
</section>

## So WHAT is Redux exactly?

Redux can be a little tricky to understand if you start out by staring at code. So let's start with considering a tangible system that will maybe be more familiar to you: a bank.

### ✨ Analogy time! ✨

Picture yourself at the drive-through teller window at a bank. You've got some money to deposit! But how can you get the money INTO your account?

![Person holds money. Bank teller is confused.](https://i.imgur.com/BWty7j8.png)

You need some way to get the money to the teller!

![Tube appears between two people](https://i.imgur.com/nhGcYbm.png)

But even with this tube, there's more information you have to include with your money! The teller needs to know what to do with it. Are you donating it to the teller's personal vacation fund? Are you depositing it? How much of it is being deposited? Into whose account?? What if the teller adds it to your worst enemy's account?! Are you bribing the teller to withdraw a bunch of money from your boss's account? WHO KNOWS?! You gotta help the teller out by filling out a deposit slip along with your money.

![Closeup of a deposit slip with info about the account and amount](https://i.imgur.com/t8eBK7B.png)

Once you've made sure to include the necessary information, you have to put all of it into the small tube which goes into the bigger vacuum tube. If you didn't, the teller would just get a bunch of little shreds of paper. Sad.

![Person puts money into tube to send to the teller](https://i.imgur.com/EZyrGPI.png)

When the teller receives the small tube, they'll see that you are trying to DEPOSIT $100 into your account. They take care of that and update your account for you.

![Teller updates account](https://i.imgur.com/S450Fs4.png)

Woohoo!

The next time you check your balance, you'll see that your information has been updated.

![Person sees updated bank balance](https://i.imgur.com/ehJuwTW.png)

Niiiiiiiice.

### Okay but what does this have to do with Redux?

Let's demystify this analogy a bit.

| Bank | Redux |
| --- | --- |
| You | Component |
| You putting stuff in small tube | Action creator |
| Deposit slip & money | Action object (type & payload) |
| Small tube shooting through big tube | Dispatch |
| Teller | Reducer |
| Computer with all bank accounts info | Store |
| Your bank account | A specific piece of state in the store |



<!-- CALL TO ACTION -->
<section class="call-to-action">
### In Your Notebook

What would you expect to be logged when we get to line 10? Why?
</section>

<!-- Note -->
<section class="note">
### Note

This hoisting behavior adds some complexity to the JavaScript language, and is important to understand thoroughly in order to anticipate the values of your variables at any given time.
</section>

<!-- CFU -->
<section class="checks-for-understanding">
### Exit Ticket

What are 3 easy and actionable accessibility steps you can take in all of your projects from here on out?
</section>
