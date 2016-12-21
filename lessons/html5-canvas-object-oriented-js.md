---
title: Object Oriented JS with HTML5 Canvas
---
# HTML5 Canvas and Object-Oriented JavaScript

Modern browsers include the [HTML5 Canvas API][canvas], which allows us to draw graphics with JavaScript. This tutorial will show us some of the basics.

[canvas]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

## Canvas Basics

This section is not intended to be a full tutorial on the basics of working with Canvas. Rather, just enough to help get started with the API.
We can easily add a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element to our HTML like so:

```html
<canvas id="game" width="400" height="300"></canvas>
```

This will create a `<canvas>` element that is 400 pixels wide and 300 pixels high. Next, we'll need to get hold of a reference to our new Canvas in JavaScript, so we can start to manipulate it using code. The Canvas API supports a number of different _contexts_ for drawing on it; we'll be using the basic two-dimensional context.

```js
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
```

The `canvas` variable holds some important information like the width and the height of the canvas element, but we'll doing all of our drawing with the `context` object.

The `context` gives us a number of methods for drawing on our canvas. We'll start with [`fillRect()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect), which creates a rectangle filled by a color — black by default.

`context.fillRect()` takes four arguments: `x`, `y`, `width`, and `height.`

Let's start by drawing a small, square alien to our canvas. [Starter code has been set up for you at `demos/canvas-blocks`][canvas-blocks]. Clone it down and add the following line in at the bottom of the `script.js` file:

```js
context.fillRect(50, 50, 10, 10);
```

This will draw a 10 pixel by 10 pixel square located 50 pixels from the top-left corner of the canvas. Congratulations, you're a web artist now.

#### Setup
The starter code is a directory with the following files:

##### helper.js
```
function getClickPosition(e) {
  function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
  }

  var parentPosition = getPosition(e.currentTarget);
  var xPosition = e.clientX - parentPosition.x;
  var yPosition = e.clientY - parentPosition.y;

  return { x: xPosition, y: yPosition };
}
```

##### script.js

```js
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
```

##### index.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Canvas Blocks</title>
  <link href="style.css" rel="stylesheet">
</head>
<body>

  <canvas id="game"
          class="game-canvas"
          width="400"
          height="300">
  </canvas>

  <script src="helper.js"></script>
  <script src="script.js"></script>

</body>
</html>
```

##### style.css

```css
.game-canvas {
  border: 1px dashed;
  margin: auto;
  display: block;
}
```

#### Animating Canvas

In modern browsers (most versions of Firefox and Chrome, Internet Explorer 10 and later, Safari 6.0 and later), we have [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame), which is specifically tuned for creating animations in the browser.

According to [MDN][MDNrAF]:

The `window.requestAnimationFrame()` method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.

[MDNrAF]: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

`requestAnimationFrame()` takes a function as an argument, which it calls when the browser is ready to perform the next stage of the animation.

```js
requestAnimationFrame(function () {
  console.log('This will be called when the browser is ready.');
});
```

Ideally, we are probably going to want to animate more than one frame of our animation. We can solve this by using recursion to repeatedly call our rendering function. We can accomplish this by giving our function a name, which will allow us to refer to it later.  Change the `requestAnimationFrame` function to look like the lines below.

```js
var counter = 0;

requestAnimationFrame(function gameLoop() {
  console.log('Count:', counter++);
  requestAnimationFrame(gameLoop);
});
```

So, recursion — the last line of the function above makes another call to `requestAnimationFrame()`, passing itself in as the function to be called again when the browser is ready to render the next frame.

Logging a counter is a whole lot of fun, but let's use `requestAnimationFrame()` to — you know — animate something. Paste the following code into `demos/canvas-blocks`, replacing your previous line:

```js
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var width = 10;
var height = 10;

requestAnimationFrame(function gameLoop() {
  context.fillRect(x++, y, width, height);
  requestAnimationFrame(gameLoop);
});
```

Hmm. That's not entirely what we were expecting. The previous box isn't cleared between iterations and—as a result—it looks like we are painting a thick black line across the screen. This makes sense — we just keep telling the browser that we'd like another black box please and it obediently fulfills our request. Computers are stupid, so it's our responsibility to provide an instruction to clear the canvas between each rendering.

We do this by drawing a giant clear rectangle over the entire canvas — add the [`clearRect()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect) line seen below into your code and reload it:

```js
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var width = 10;
var height = 10;

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
  context.fillRect(x++, y, width, height);
  requestAnimationFrame(gameLoop);
});
```

Ah, much better. Run, little block, run.

### Your turn

You have been using [demos/canvas-blocks][canvas-blocks] so far, let's keep moving forward. Edit the code you have in `script.js` to complete the following problems:

[canvas-blocks]: https://github.com/stevekinney/advanced-js-fundamentals-ck/tree/gh-pages/demos/canvas-blocks

* Draw a small rectangle to the canvas.
* Use `requestAnimationFrame()` to move the rectangle one pixel down each time it is called.
  * _Extension_: Can you make the block stop when it reaches the end of the canvas? Can you make it turn around and go the other way when it reaches the end of the canvas?
* Can you add four more blocks that behave the same way?

## Object-Oriented Blocks

Drawing one rectangle to the canvas was pretty straightforward. Things start to get hairy however when we want to keep track of multiple little blocks. Maybe you tried to instantiate four variables for each little block? Maybe you just set up separate variables for the `x`? There are probably some other approaches you could have taken involving passing the values through to each new game loop and then setting up five game loops — but we digress.

What if we had 1,000 blocks? This would get out of hand really quickly.

What we need is a way to have each block keep track of its own state and provide some ways to modify that state. Then, we could just ask each block to draw itself and let it handle the all of the implementation details. Whether we have one block or 10,000, we'll just ask each block to draw itself and leave the rest of the work to the individual block.

You might hear a voice in the back of your mind somewhere saying "What if we used object-oriented JavaScript?" Sure, it might have been inspired by the name of this section or even just the sub-heading a few lines up. Regardless, listen to that voice.

What would a block object look like?

Well, we know we'll need the basic properties we had in our last iteration.

```js
function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

// Let's take our new object for a spin, shall we?
var firstBlock = new Block(50, 50, 10, 10);
var secondBlock = new Block(75, 75, 10, 10);

firstBlock.x; // 50
secondBlock.x; // 75
```

That's great; each block can now keep track of it's own state. What else does a block need to do?

* Blocks need to be able to draw themselves to the canvas.
* Blocks need to be adjust their coordinates to their next position.

The `x`, `y`, `width`, and `height` properties are unique and special to each individual block. But what about these other methods? They seem like something that every block should be able to do, but that no block needs to know about specifically.

These two methods are great candidates for being added to `Block.prototype`, an object that all of our individual blocks inherit from and immediately look to when they don't know how to respond to a method call or a request for a property.

Let's add some placeholder methods to `Block.prototype`:

```js
function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Block.prototype.draw = function () {
  console.log('One day, I will be able to draw myself.')
};

Block.prototype.move = function () {
  console.log('One day, I will be able to move myself');
};
```

These two methods don't do much, but they are available to every block object. Let's start by implementing `draw()` first. To do this, we'll take `context.fillRect()` and tell each object to use its own properties to fill in the details.

```js
Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
};
```

When we call `draw()` on an individual block, it doesn't know what the function is, so it looks to `Block.prototype` for an answer. `Block.prototype` hands the individual block its `draw()` method, which the individual block happily goes ahead and calls using itself as `this`.

Recall from the calculator example that if we return `this`, we can chain additional methods after we call `draw()`.

```js
Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};
```

### Your turn

Can you implement `Block.prototype.move`? The method should take the current `y` value and increment it by one. It should return `this`, so that we can chain it.

## Bringing it All Together

Now, that we've refactored our block implementation to use objects, let's update our drawing function as well.

Let's list out what needs to get done:

* We'll include our new `Block` constructor and methods on `Block.prototpe`.
* We'll create an empty array called, `blocks` to hold all of our individual blocks.
* During each animation frame, we'll iterate through all of the blocks
  * We'll tell them to draw themselves.
  * We'll tell them to update their positions in preparation for the next time we draw them.

After we include our new object constructor and get rid of some of the code that breaks as a result, our code should look something along the lines of this:

```js
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.move = function () {
  this.y++;
  return this;
};

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
});
```

We'll also go ahead and add our array that will eventually hold all of our blocks.

```js
var blocks = [];
```

In each animation frame, we'll iterate through each of the blocks in the `blocks` array and ask them to both `draw()` themselves as well as update their positions.

```js
requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function (block) {
    block.draw().move();
  });
  requestAnimationFrame(gameLoop);
});
```

To make sure it works, we'll add two blocks to the `blocks` array and watch them drop.

```js
blocks.push(new Block(50, 50, 10, 10));
blocks.push(new Block(100, 50, 10, 10));
```

Go ahead and open your page and watch the blocks fall to their demise. Here is a sample of what your code in `script.js` might look like, in case you're having any problems.

```js
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.move = function () {
  this.y++;
  return this;
};

var blocks = [];

blocks.push(new Block(50, 50, 10, 10));
blocks.push(new Block(100, 50, 10, 10));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function (block) { block.draw().move(); });
  requestAnimationFrame(gameLoop);
});
```

### One Step Further: Responding to Click Events

It would be nice to not have to hard code in each and every block. What if we could create a new block whenever the user clicked on the canvas? We'll be diving deeper into events later, but let's get a taste for how they work.

If a DOM event happens and no one is listening, did it really happen? Yes. DOM events happen all of the time, but most of the time we haven't asked the browser to do anything when an event is fired. We can respond to events by adding a listener to a given element.

```js
canvas.addEventListener('click', function (event) {
  console.log('You clicked me!');
});
```

The first argument specifies what kind of events we're listening for. The second argument, the anonymous function in the example above, defined what we would like to happen when the browser hears that event.

There is a little bit of trickery in determining where a mouse click actually happened and we care about that information. So a little function has been provided for you in `helpers.js` called `getClickPosition()` that will give you the `x` and `y` coordinates of the mouse click on your canvas.

```js
canvas.addEventListener('click', function (event) {
  console.log('You clicked me!', getClickPosition(event));
});
```

Let's adjust the code above to add a new block at the coordinates of the mouse click whenever the user clicks the on the canvas. The code will look something like this.

```js
canvas.addEventListener('click', function (event) {
  var click = getClickPosition(event);
  blocks.push(new Block(click.x, click.y, 10, 10));
});
```

### Your turn

Can you add some additional functionality to our little experiment? (we'll hesitate to call it a game just yet.) Here is some inspiration:

* Can you move blocks back up to the top of the canvas whenever they fall off the bottom of the canvas? (Hint: you can use negative coordinates to place them above the top of the canvas so that it looks more natural.)
* Can you tell the blocks to rest on the bottom of the canvas instead of continuing to fall into oblivion?
* Can you have the blocks stack on top of each other after they've fallen?
* Can you listen for other events like [keydown][], [keyup][], [mouseover][], [mousemove][], or [dblclick][].

[keydown]: https://developer.mozilla.org/en-US/docs/Web/Events/keydown
[keyup]: https://developer.mozilla.org/en-US/docs/Web/Events/keyup
[dblclick]: https://developer.mozilla.org/en-US/docs/Web/Events/dblclick
[mousemove]: https://developer.mozilla.org/en-US/docs/Web/Events/mousemove
[mouseover]: https://developer.mozilla.org/en-US/docs/Web/Events/mouseover
