## Gentle React Intro

- JSX
- Components
- Passing Props

### [JSX](http://buildwithreact.com/tutorial/jsx)

JSX stands for JavaScript and XML. It allows us to write XML in our JavaScript. Luckily for us we have XML tags that correspond with the HTML tags with which we are familiar.
```jsx
function ButtonAndLabel () {
  return (
    <div>
      <label>My Favorite Label</label>
      <button> Click Me </button>
    </div>
  )
}
```

What is awesome is JSX allows us to write JavaScript in our XML. To use JS in our XML we put it in curly braces `{}`.

```jsx
function ButtonAndLabel () {
  return (
    <div>
      <label>My Favorite Number is {2 + 2}</label>
      <button> Click Me </button>
    </div>
  )
}
```

This means we can also use variables in our JSX.

```jsx
function ButtonAndLabel () {
  let myFavoriteNumber = 2 + 2;

  return (
    <div>
      <label>My Favorite Number is { myFavoriteNumber }</label>
      <button> Click Me </button>
    </div>
  )
}
```

### Components

Components are JS constructor functions that compile our JSX and return HTML. In our previous examples we have a ButtonAndLabel component. We can use components in our JSX the same way that we would use HTML.

If I wanted to make four ButtonAndLabel combinations I could by doing the following.

```
function App () {
  return (
    <div>
      <ButtonAndLabel />
      <ButtonAndLabel />
      <ButtonAndLabel />
      <ButtonAndLabel />
    </div>
  )
}
```

### Passing in Properties
Right now all of our buttons and properties are returning the same HTML. As with other JS functions we can pass in properties to modify our output. The first argument passed into Component constructor functions is a props object. We can add properties to this props object to customize our components output.

```jsx
function ButtonAndLabel (props) {
  let myFavoriteNumber = props.number;

  return (
    <div>
      <label>My Favorite Number is { myFavoriteNumber }</label>
      <button> Click Me </button>
    </div>
  )
}
```

Now I can modify my previous four buttons to show different numbers. I pass in props the same way I would add attributes or properties to HTML elements.

```
function App () {
  return (
    <div>
      <ButtonAndLabel number={1} />
      <ButtonAndLabel number={2} />
      <ButtonAndLabel number={3} />
      <ButtonAndLabel number={4} />
    </div>
  )
}
```

This is great, however I have some duplicate code here with all of my ButtonAndLabel components. This is okay for four buttons but it would quickly grow unwieldy if I wanted to display 100 ButtonAndLabel components.

Luckily, I can use JS in my JSX! If I store my numbers in an array, I can map over the array to create as many ButtonAndLabel components as I want.

```
function App () {
  const numbers = [ 1, 2, 3, 4 ];

  return (
    <div>
      { 
        numbers.map( (currentNum) => {
          return <ButtonAndLabel number={ currentNum } />
        } )
      }
    </div>
  )
}
```


### Closing

- JSX is awesome, it lets us mix JavaScript and XML. 
- Components are great because we can create templates for pieces of our XML that we want to reuse. 
- Passing in props lets us modify our components so they don't all look the same.




