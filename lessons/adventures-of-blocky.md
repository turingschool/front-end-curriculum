---
title: Adventures of Blocky (aka MORE Unit Testing in Javascript)
length:
tags: javascript, browser, testing, tdd
---

## Setup

```
git clone https://github.com/turingschool-examples/adventures-of-blocky.git
npm install
npm start
```

## Getting Started

We'll be modifying four files as we complete these exercises:

- `block.js`
- `world.js`
- `block-test.js`
- `world-test.js`

## Phase One: Get the Tests Passing

There are a few dozen tests defined between `block-test.js` and `world-test.js`. Some of them are complete with assertions and a working implementation. Some of them are skipped tests just waiting for an implementation. The rest are empty shells—waiting for you to write some assertions followed by the implementation necessary to get them passing.

Your first job is to get the entire suite passing. There are also some comments in the test suite for additonal tests that you'll need to add.
 
## Phase Two: Blaze Your Own Trail

### Inside Out

There is nothing stopping `shrink()`, `getSkinner()`, or `getShorter()` from allowing the height or width of the block to become negative. Add additional tests and implementation that make sure that this doesn't happen.

### Blocky in the World

Blocks should be able to take a fifth argument: a `world` instance. The implementation might look something like this:

```js
// This is an example and probably not something you should copy verbatim.

function Block(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

// Block prototype methods omitted.
// World code omitted.

var world = new World(100, 100);
var block = new Block(0, 0, 25, 25, world);

// These would be two separate tests.
assert.equal(block.world, world);
```

Conversely, a world should be able to add blocks to itself. This might look something like this:

(Notice that we're using _dependency injection_ to make sure that each block has a reference to a world instead of just hoping that there is a `world` variable somewhere in scope.)

```js
// This is an example and probably not something you should copy verbatim.

World.prototype.addBlock = function (x, y, width, height) {
  // `this` is the current world instance that we're calling this method on.
  // We'll pass it as the fifth argument (see above).
  var block = new Block(x, y, width, height, this);
};
```

### Pushing Against the Edges

Once you've built a connection between blocks and their world, it's time to apply some constraints.

Blocks should be able to move right if they are already along the right-edge of their world. Along the same vein, they shouldn't be able to move if any direction if they are along the corresponding wall.

Blocks also shouldn't be able to grow if their new size would push them over the edges of the world. This is where that `bottomRightCorner()` method you wrote earlier might come in handy.

Consider implementing the following methods:

- `canMoveUp()`
- `canMoveDown()`
- `canMoveLeft()`
- `canMoveRight()`
- `canGetFatter()`
- `canGetSkinnier()`
- `canGrow()`

Next, add additional tests to make sure that if a block can't move or grow in a given direction that it doesn't infact move or grow in that direction. You'll need to add additional tests and logic to the following methods:

- `moveUp()`
- `moveDown()`
- `moveLeft()`
- `moveRight()`
- `getFatter()`
- `getSkinnier()`
- `grow()`

## Extensions

Have an idea for how we can take this further? Open a pull request with your ideas.