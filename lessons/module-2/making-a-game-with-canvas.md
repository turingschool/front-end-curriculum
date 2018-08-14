---
title: Making a Game with HTML Canvas
length:
tags: html, api
module: 2
---

### Goals
* Learn the basics drawing using the canvas api
* Creating an animation loop
* Collision detection
* Object Oriented Inheritance

## Introduction to Game Time Starter Kit

### Project Organization

##### index.js
* DOM interaction
* Event Listeners

##### Game.js
* Game setup
* Game status
* What to do when objects collide
* Tracking score
* Event handling

##### GamePiece.js
* Draw
* Movement
* Collision detection

##### Block.js
* Specialized functions

## Canvas API

#### Canvas Coordinate System

The canvas is a grid of pixels. When we use the canvas to draw 2d pictures, each pixel has a x and a y location that describes where it is on the canvas. In the image below four pixels are shaded gray and their addresses are listed with the x-coordinate first followed by the y-coordinate.

<!-- draw (x, y) on the board -->

![Canvas Coordinate System](../../assets/images/lessons/making-a-game-with-canvas/canvas-coordinate-system.gif)

#### Canvas Context
The canvas context is the API which we will use to interact with the canvas. [2d Rendering Context Documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

```js
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
```

#### .fillRect(x, y, width, height)
The `fillRect` method to draw solid rectangles on our canvas. It takes four arguments, 

* **x**: the starting position on the horizontal axis for the rectangle
* **y**: the starting position on the vertical axis for the rectangle
* **width**: the width in pixels of the rectangle 
* **height**: the height in pixels of the rectangle

```js
ctx.fillRect(x, y, width, height);
```

![Rectangle on Grid](../../assets/images/lessons/making-a-game-with-canvas/grid-rectangle.png)

<!-- 
draw coordinates on the board for each point in the picture 
(x, y) -> (3, 3)
(x + width, y) -> (3 + 4, 3)
(x, y + height) -> (3, 3 + 4)
(x + width, y + height) -> (3 + 4, 3 + 4)
-->

#### .fillStyle
The fillStyle property is used to change the color of the filled rectangle we draw using the fillRect method.

```js
ctx.fillStyle = 'green';
```

#### .clearRect(x, y, width, height)
The context clearRect method is used to clear our canvas between animation frames. It takes the same arguments as fillRect. If we want to clear our entire canvase we will want to start at the top left corner of our canvas (x: 0, y: 0) and go to the bottom right corner of our canvas (x: canvasWidth, y: canvasHeight).

```js
// ctx.clearRect(x, y, width, height);
ctx.clearRect(0, 0, canvasWidth, canvasHeight);
```

## Animation
So far we have learned how to draw one a picture on our canvas. This picture is called a frame. To create an animation we need to draw many frames one after another. 

![Frames Per Second](../../assets/images/lessons/making-a-game-with-canvas/fps.jpg)

To create the illusion that all of these frames are connected and represent a moving image we need to create a lot of images and show them one after the other very rapidly. To achieve a believable animation, we need to draw 60 frames per second on our canvas. Modern browsers are constantly updating and repainting the screen we see. Luckily for us, there is a built in method that we can use to run some code when the browser repaints itself which is 60 times per second. 

#### requestAnimationFrame(callback)
requestAnimationFrame takes a callback function as an argument. The callback function will run when the browser repaints itself. If you want to create an animation, the callback function will need to call requestAnimationFrame again to paint the next frame.

```js
// start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // draw this frame
    game.animate();

    // draw next frame
    window.requestAnimationFrame(gameLoop)
}
```

#### speed

## Collision Detection

![Collision Detection](../../assets/images/lessons/making-a-game-with-canvas/collisions_overlap.png)

[Great Blog Post on Collision Detection](https://learnopengl.com/In-Practice/2D-Game/Collisions/Collision-detection)

#### Collision Between Rectangles
There are two common ways to determine if two rectangles are colliding. The first is to determine if one of the first rectangles corners is inside the border of the second rectangle. The second is a little bit less intuitive but easier to implement. It is easier to check if the first rectangle is not inside the second rectangle. If this is the case then they are not colliding, otherwise they are colliding.

If any of the following are true than our first rectangle (r1) is not colliding with our second rectangle (r2).

* r1.x + width < r2.x
* r1.y + height < r2.y
* r1.x > r2.x + width
* r1.y > r2.y + height

It is easier to determine if two blocks are not colliding, after checking those conditions we can invert the result to see if they are colliding.

```js
isCollidingWith(object) {
    return !(
        this.x + this.width < object.x   ||
        this.y + this.height < object.y  ||
        this.x > object.x + object.width || 
        this.y > object.y + object.height
    );
}
```
 

#### Collision With Canvas Boundaries

To determine if our block is inside our canvas, we need to check if any of our rectangle sides are outside our canvas.

![Rectangle on Grid](../../assets/images/lessons/making-a-game-with-canvas/grid-rectangle.png)

If any of the following four statements are true than our rectangle is inside of our canvas.

* x < 0
* x + width > canvas.width
* y < 0
* y + height > canvas.height

```js
isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
        this.x < 0 ||
        this.x + this.width > canvasWidth ||
        this.y < 0 || 
        this.y + this.height > canvasHeight
    )
}
```

## Object Oriented Programming - Inheritance

#### Inheritance
With Object Oriented Programming we organize our code by creating classes. These classes are templates for different objects which we will use in our application. 

Inheritance is when a child class inherits properties and methods from a parent class. When we create a child method we can tell it to inherit from another class using the `extends` and `super` keywords.

#### extends
The `extends` keyword allows to tell a class that it will inherit from another class. In our example below, Block will inherit all the properties and methods of GamePiece. The Block class can add additional properties and methods to all blocks.

```js
class Block extends GamePiece {
}
```

#### super
The super keyword is used to invoke parent class methods. When it is used directly in the child constructor function, it invokes the parent class constructor function.

```js
class Block extends GamePiece {
    constructor(x, y, width, height) {
        // invoke GamePiece constructor method
        super(x, y, width, height);
    }
}
```

It can also be used in other methods to invoke parent class methods.

```js
class Block extends GamePiece {
    constructor(x, y, height, width, color, borderColor) {
        // invoke parent class constructor
        super(x, y, height, width, color);

        this.borderColor = borderColor;
    } 

    draw(ctx) {
        const {x, y, height, width, borderColor } = this;

        // invoke GamePiece draw method
        super.draw(ctx);

        // draw block border
        ctx.strokeStyle = borderColor;
        ctx.strokeRect(x, y, width, height);
    }
}
```

## Event Handling
Our event listeners go in our index.js file. Once an event fires, the event listener can notify the game that an event occured, then the game can determine how it should handle that event. This ensures seperation of concerns, index is only concerned with detecting events, and the game file is only concerned with doing something when an event occurs. This also makes writing tests easier.

```js
// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  game.handleKeyPress(event);
}
```


## Closing
There are a lot of moving pieces when creating a game. This gametime starter kit aims to provide some structure and guidance as you create your game so you can focus on creating objects that interact with each other.