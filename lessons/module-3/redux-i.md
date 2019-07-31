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

As we dig into the actual functions and objects that make up the Redux store and the methods which access and update it, we'll keep coming back to this analogy. Hopefully, it will help you keep track of what's going on!

## The Redux Loop

Let's jump in!

### Action Creators and Actions

It's often easiest to start understanding the Redux loop by beginning with actions and their creators. From our analogy, this is the part where you put your money and deposit slip in the tube, preparing to send it to the teller.

![Action creator](https://i.imgur.com/KW1rIhI.png)

The Redux store, similar to component state, is simply an object. In order to update that object, we need to provide some information.

We know that, in order to deposit money into our account, the bank teller needs some information:
 - That we are making a deposit (rather than a withdrawal, etc)
 - Our account number, and
 - The amount we're depositing

Our Redux store, similarly, needs information:
 - What change we want to make
 - The information needed in order to make that change

We send that information to our bank teller (in Redux, that's the reducer!) by creating an object. Neat!

![Action object](https://i.imgur.com/EWyHSnc.png)

The object itself is the "action", and the function used to create the action is the "action creator".

```js
// action creator

const depositMoney = (accountNumber, amount) => ({
  type: 'DEPOSIT_MONEY',
  accountNumber,
  amount
})
```

<section class="note">
### Note

There is some ES6 shorthand going on here. You'll notice that the curly braces are after the arrow are wrapped in parentheses. This is because we are implicitly returning an object, rather than opening up a function block.

Additionally, the `accountNumber` and `amount` values are using the ES6 object shorthand. It's the same as if we wrote `accountNumber: accountNumber` - the key and the value are named the same thing, so we are able to simply write it once, and ES6 knows that we intend to create a key called `accountNumber`, with the value being whatever is being passed in as that argument.
</section>

You'll notice that our action creator is named `depositMoney` - our action creators are always named to describe what we're doing to state - in other words, we're describing _the action_ that we're taking! In this case, we're depositing some money into our account.

You'll also notice that the type value is `"DEPOSIT_MONEY"`. It's a convention to make the value of `type` a string that is upcased and separated with underscores. There isn't a formal name for this - but, personally, I like to refer to it as "loud snake case".

This `type` key-value pair is crucial. If we think about our bank teller, they need to know what to do with the information. If you just handed them your account number, an amount, and a wad of cash, they could _maybe_ guess that you are hoping to deposit some money. But maybe you want to transfer it to someone else and you just forgot to include the other person's account number! Or maybe you want that amount removed from your account and added to the wad of cash!

The `type` value tells the bank teller exactly what we want to do.

In Redux terms, the `type` value tells the reducer what we want to do.

But in order to send that action to the teller/Reducer, we have to `dispatch` it - aka stick it in the little tube and then shoot that tube through the bigger vacuum tube!

### Dispatch

This piece can be harder to understand, since - unlike action creators and actions - we don't write it! It's a baked-in function from Redux.

![redux dispatch](https://i.imgur.com/NhNCJ3O.png)

We'll see later how we use `dispatch` to connect a React component to the Redux store. For now, just know:

- `dispatch` is a function given to us by Redux
- It takes in a parameter of an action object
- Oftentimes, we don't pass in an object - we pass in our _action creator_ function, because that function ... returns an object!

Okay. Once `dispatch` takes the action object to the reducer ... what happens next?

### Reducers

Reducers are where the magic happens. These are functions that return pieces of state to us! Put a bunch of reducers together, and they output the Redux store!

![Reducers](https://i.imgur.com/A1QZsvU.png)

Let's take a step back before we get into the details of what our reducer functions do.

Every section or piece of our store will be governed by its own reducer.

In our bank analogy, the bank's store of information could include: data about customers, data about accounts, data about each bank branch, etc. So we would need reducers for each of those pieces of the store: a `customersReducer`, an `accountsReducer`, and a `branchesReducer`.

The `accountsReducer` will return to us the information for that part of the store. You can think of the store as an object (because, somewhere inside Redux, it is!):

```js
{
  customers: [{...},{...},{...},...],
  accounts: [{...},{...},{...},...],
  branches: [{...},{...},{...},...]
}
```

The `accountsReducer` will take in the action object, make the changes that the action tells it to make ("DEPOSIT_MONEY", "WITHDRAW_MONEY", "CLOSE_ACCOUNT", "OPEN_ACCOUNT", etc), and return the updated array!

Okay, let's zoom in again. If you look at the image above, you'll see that we're also passing in a default state parameter. When we actually code out a Redux app, we'll learn how to write a Reducer function.

<section class="note">
### For now, just note that:

Reducers contain `switch` statements. This allows the reducer to determine what to do based on what type of action it has received. If you haven't run across these before, you can read more about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
</section>

It's important to know that, when we write a reducer, we must pass in a default state with an initial/default value (similar to setting our initial state in a plain old React app), because Redux expects it to be there.

<section class="note">
### Note

Whenever one reducer fires, _every_ reducer fires. We have to include the initial value of state so that, the first time a reducer runs, it will always return _something_ rather than returning `undefined`.
</section>

So! Here's the important stuff:

- A reducer is a function
- It takes in state and gives it a default value
- It takes in an action object
- It returns updated data (which is _that_ part of the store's value)

If we run `accountsReducer` and give it the result of our `depositMoney` action creator, we'll get back an array of accounts information, where our account object has been updated to reflect the increase in our balance.

Neat!

As we said earlier, every reducer controls one piece of the store. We package them up together into a single object (known by convention as the `rootReducer`) by using a Redux function called `combineReducers`.

![Root reducer](https://i.imgur.com/29Xkpct.png)

We then use the `rootReducer` to create the Redux store!

### The Store

Stick with me.

![The Redux Store](https://i.imgur.com/qZEBe43.png)

In order to allow our React components to interact with the Redux store:
1. We use a function called `createStore` from Redux to _create the store_
2. `createStore` takes in the `rootReducer` we created
3. `createStore` also optionally takes in a second parameter that connects our app to the Redux Dev Tools in Chrome (which we'll talk about when we actually code out a React-Redux application)
4. We bring in the `Provider` component from the `react-redux` library
5. We give the store to Provider as a property
6. We wrap our outermost component (often `<App />`) in the Provider.
7. Voila! All our components can now be connected to the store if we so choose.

### Connecting a component to the store

So now that we've done allllllll this setup... *WE SO CHOOSE*!!! We can _finally_ connect our components to the store.

![connect](https://i.imgur.com/j5ZY7p2.png)

We do this by writing two functions and passing them in as arguments to a third function provided by `react-redux`.

Let's talk about the two functions that we write:
1. `mapStateToProps`
2. `mapDispatchToProps`

<section class="note">
### Note

We know the word "map" as an array prototype iterator method. This method is actually named this way because it refers to the basic computer science concept of "mapping": looking over one piece of data and adding things to a separate collection of information. You can read more up on "mapping" [here](https://softwareengineering.stackexchange.com/questions/307639/what-does-mapping-mean-in-programming).
</section>

In the case of `mapStateToProps`, we are going to map parts of the global state object to our component props object.

In the case of `mapDispatchToProps`, we are going to create an object full of dispatch functions that take data from our component to the reducers, so that object can be added to our component props object.

Again, we're going to learn how to write these functions when we code out an actual Redux application. For now, it's most important to understand what these functions are _accomplishing_.

<section class="call-to-action">
### Turn & Talk

What are react props? What do they do? How do they work? How do you access them?
</section>

Both our new functions, `mapStateToProps` and `mapDispatchToProps`, return objects. These objects are then merged into the props object. As far as the component knows, it's just receiving information and functions!

We're being ultra sneaky here. We're slipping the relevant parts of the store to our component as props! We're writing functions that allow the component to update the store and baking them inside the props cake so the component can hold the store to shiv-point and force it to make changes!

Okay, so this analogy went a little off the rails.

In a nutshell:

`mapStateToProps` allows the component to *READ* the information in the store. The function takes in an argument of the entire global state tree, and returns an object which cherry picks just the parts of state it wants to show to the component.

`mapDispatchToProps` allows the component to *UPDATE* the information in the store. The function takes in an argument of `dispatch`, and returns an object that sets up functions which send action objects to the reducers.

Where do these functions get the global state tree and `dispatch` from? How do those resulting objects get merged into the component's props object?

The magic happens in a function from `react-redux` called `connect`. This `connect` function takes in both `mapStateToProps` and `mapDispatchToProps` and returns a second function; this second function expects to be invoked with an argument of the component that we're connecting to the store.

<section class="note">
### Note

This sounds confusing, I know - but we'll take a look at what's going on in a bit more depth when we code out a Redux app together. `connect` is a [curried function](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe) (one flavor of [higher order functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)).
</section>

If it's easier to visualize:

```js
// Component.js

export default connect(mapStateToProps, mapDispatchToProps)(Component)
```

This results in Component being able to access and update the store by accessing a props variable, or invoking a props function.

Neat!

## Checks for Understanding

We just took in a lot of information. Let's digest and get some of this settled into our memories.

<section class="call-to-action">
### You Try It

In small groups, act out the Redux cycle. Yep. Act it out. With your actual selves. You can use the analogy of depositing money into a bank account, but as you do it, say the correct Redux terms out loud!
</section>

Was this silly? Absolutely. But hopefully it also settled each piece of Redux in your understanding - at least a little bit. When we code out a Redux application, try to keep this skit and the bank analogy in mind! It will help you remember what each piece is trying to accomplish.

<section class="checks-for-understanding">
### Exit Ticket

Turn to a fresh page in your notebook. Write down the whole Redux loop with as much information as you can!
</section>
