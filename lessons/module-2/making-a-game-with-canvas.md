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
DOM interaction
Event Listeners

##### Game.js
Game setup
Game status
What to do when objects collide
Tracking score...
Event handling

##### GamePiece.js
Draw
Movement
Collision detection

##### Block.js
Specialized functions

## Canvas API

#### Canvas Coordinate System

The canvas is a grid of pixels. When we use the canvas to draw 2d pictures, each pixel has a x and a y location that determines where it is on the canvas. In the image below four pixels are shaded gray and their addresses are listed with the x-coordinate first followed by the y-coordinate.

![Canvas Coordinate System](../../assets/images/lessons/making-a-game-with-canvas/canvas-coordinate-system.gif)

#### Canvas Context
The canvas context is the API which we will use to interact with the canvas.

```
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
```

#### .fillRect(x, y, width, height)
We can use the context `fillRect` method to draw solid rectangles on our canvas. It takes four arguments, 

* **x**: the starting position on the horizontal axis for the rectangle
* **y**: the starting position on the vertical axis for the rectangle
* **width**: the width in pixels of the rectangle 
* **height**: the height in pixels of the rectangle

```
ctx.fillRect(x, y, width, height);
```

#### .fillStyle
The context fillStyle property is used to change the color of the filled rectangle we draw.

```
ctx.fillStyle = 'green';
```

#### .clearRect(x, y, width, height)
The context clearRect method is used to clear our canvas between animation frames. It takes the same arguments as fillRect.

```
ctx.clearRect(x, y, width, height);
```

## Animation Loop

#### requestAnimationFrame(callback)
#### speed

## Collision Detection

![Collision Detection](../../assets/images/lessons/making-a-game-with-canvas/collisions_overlap.png)


[Great Blog Post on Collision Detection](https://learnopengl.com/In-Practice/2D-Game/Collisions/Collision-detection)

#### Collision Between Rectangles
#### Collision With Boundaries

## Object Oriented Programming - Inheritance

#### extends
#### super


