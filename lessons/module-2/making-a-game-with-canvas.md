## Making a Game with Canvas

The canvas element was introduced with HTML5. It gives us a bitmap which we can use to draw and interact with a grid of pixels. Interaction with it is done through a context. There are a few contexts provided, 2d and 3d...?

We will use the 2d context to create our games. 

The first step is to create a canvas element in our HTML. Make sure to give it width and height properties.

```html
<canvas id="game" width="600" height="600" />
```

Now that we have canvas element we can grab it with our JS.

```js
const canvas = document.getElementById('game');

// get our 2d context
const ctx = canvas.getContext('2d');
```

We can use our context (ctx) to interact with our canvas.

### ctx.fillRect( x, y, w, h )

Our context has a `fillRect` method which will draw a rectangle at a position we specify with a width and a height. It takes four arguments

- x: the position on the x-axis where we want to start drawing our rectangle
- y: the position on the y-axis where we want to start drawing our rectangle
- w: the width of our rectangle (in pixels)
- y: the height of our rectangle (in pixels)

If we want to draw a rectangle at position 50, 50, with a width and height of 10 we could do the following
`ctx.fillRect( 50, 50, 10, 10 )`

##### Exercises: 

- Change the values passed into fillRect so that our rectangle is painted in the bottom right corner of the canvas.

- Change the color of the rectangle to blue

### ctx.fillStyle
The default color of our context is black (`#000000`). The context has a fillStyle property which we can set to any color we want.
e.g.

```js
ctx.fillStyle = '#FF0000';
```

This will change the color of everything we draw next to red.

## Animation
So far, we have learned how to draw a rectangle to our canvas and how to change the color of that rectangle.

Now we want to get our rectangle moving.

### window.requestAnimationFrame(callbackFn)

The window has a method called requestAnimationFrame. This method takes a callback function as an argument. The next times the window repaints the view, it will execute the callback function. The window repaints the view about 60 times a second.

We can create a gameLoop function that will animate one frame of our game. By continously passing our game function to requestAnimationFrame we can animate our game.

```js
function gameLoop () {
    // do game stuff
    
    // animate the next frame of our game
    requestAnimationFrame( gameLoop );
}
```

