---
title: Partial Functions
module: 2
status: draft
---
# Partial Functions
clone these yung-repos

[partialFunctionPlayground](https://github.com/joshuajhun/partialFunctionsPlayground)

[tetris](https://github.com/joshuajhun/tetris)

#Context


## Why this matters.

Programming is our craft. It is what we do and what we will do as developers and we should hold ourselves to standard. There is a lot of bad code out there (I wrote most of that code). So if we're talking about striving to write good code there are a couple of things for us to consider.

* SRP - Single responsibility principle
* DRY - Do not repeat yourself
* Agnostic - Your code doesn't care about what's being passed through. It will execute.

Historically. If we hold ourselves to this standard we are going to write good, scalable code. Thats the hard part with all of this. If our code (Object Orient Code) is dependent upon something that is going to change it needs to be able to accommodate that change. If we are unable to accommodate that change our code isn't good.

We know the no matter how robust your code is it will break at some point down the line. Ways we can combat this is to have your code be more granular. If it's more granular we know exactly where our code breaks.

## Partial Functions

JavaScript's flexibility allows us to partially use a function which will allow us to essentially dry up our code. The less code we write the less bugs we'll have. This also gives us an opportunity for code to be reused.

let's look at an easy example, You'll implement it, and then we'll look at some code together and refactor it using partial functions!



```

function add(a, b) {
  return a + b;
}

var addTwo = add.bind(null, 2);

addTwo(4); // 6

```

So this is a perfect example for how bind can really help us dry up our code. In the code featured here we are seeing we've referenced the add function and we're using the bind function to pass in the two arguments to it.

We are essentially allowing ourselves to reuse a part of a function. If our code was repetitive this would allow multiple functions to essentially use a part or a piece of a function again.


## Your Turn

Let's take baby steps towards actually making this stuff click!


A function that adds 1 to a number.

A function that subtracts 3 from a number.

A function that doubles a number.

A function that halves a number.


If you're lost here are the answers!

####A function that adds 1 to a number

```
function add(a, b){
  return a + b;
}

var addOne = add.bind(null, 1)

```

####A function that subtracts 3 from a number.

```
function takeAway(a, b){
  return a - b;
}

var minusThree = takeAway.bind(null,3)

minusThree(6)

```

####A function that doubles a number.

```
function doubleNumber(a, b){
  return a * b
}

var doubleMe = doubleNumber.bind(null, 2)

doubleMe(2)

```

#### A function that halves a number.

```
function divide(a, b){
return b / a
}

var halveMe = divide.bind(null,2)

halveMe(6)

```

### Practical Applications

You are going to find repetitive code everywhere. When you see repetitive code it should make us uncomfortable. It should make us want to refactor!

Lets look at an example of code that I've wrote and refactored using partial functions.

```
var util = require('util');
var EventEmitter = require('events');
util.inherits(Block, EventEmitter);

function Block(board, x = 0, y = 0) {
  this.board = board;
  this.x = x;
  this.y = y;
  this.active = true;
};

Block.prototype.inactive = function() {
  return this.active = false;
};

// check the position of the block on the board

Block.prototype.blockIsAtBottomOfBoard = function() {
  return this.y + 1 > this.board.rows;
};

Block.prototype.blockIsAtLeftSideOfBoard = function() {
  return this.x - 1 < this.board.columns;
};

Block.prototype.blockIsAtRightSideOfBoard = function() {
  return this.x + 1 > this.board.columns;
};

//

// can check whether their is a block to the right/left/below

Block.prototype.isThereABlockOnTheRight = function() {
  if (this.board.findBlockOnBoard(this.x + 1, this.y)) { return true }
};

Block.prototype.isThereABlockOnTheLeft = function() {
  if (this.board.findBlockOnBoard(this.x - 1, this.y)) { return true }
};

Block.prototype.isThereABlockBelow = function() {
  if (this.board.findBlockOnBoard(this.x, this.y + 1)) { return true }
};

//

// check whether the block can move left, right, or down on board

Block.prototype.canMoveDown = function() {
  if (this.inactive){ return this.active = false }

  // check conditionals below to confirm falling block moves correctly

  if (this.blockIsAtBottomOfBoard){ return this.inactive }

  if (this.isThereABlockBelow) { return false }
};

Block.prototype.canMoveLeft = function(){

  if (this.inactive) { return this.active = false}

  // check conditionals below to confirm falling block moves correctly

  if (this.blockIsAtLeftSideOfBoard) {return this.inactive}

  if (this.isThereABlockOnTheLeft) { return false }
};

Block.prototype.canMoveRight = function(){

  if (this.inactive) { return this.active = false }

  // check conditionals below to confirm falling block moves correctly

  if (this.blockIsAtRightSideOfBoard) { return this.inactive }

  if (this.isThereABlockOnTheRight) { return false }
};

// move block on board if it meets conditionals

Block.prototype.moveDown = function() {
  if (this.canMoveDown) { this.y++ };
  return this;
};

Block.prototype.moveRight = function() {
  if (this.canMoveRight) { this.x++ };
  return this;
};

Block.prototype.moveLeft = function() {
  if (this.canMoveLeft) { this.x-- };
  return this;
};

module.exports = Block;

```

so as you can see there is a ton of code here that is repeated. One thing I tried to do was write code that was granular. So we do have multiple functions working together which was great for debugging. Because a lot of the code in this program are doing very similar things we can essentially refactor a part of that.


Let's start with something easy and work on refactoring pieces and parts of this code together.

```
Block.prototype.moveDown = function() { if (this.canMoveDown) { this.y++ };
return this;};

Block.prototype.moveRight = function() { if (this.canMoveRight) { this.x++ }; return this;};
Block.prototype.moveLeft = function() { if (this.canMoveLeft) { this.x --}; return this;};

```

so if we look at this code the code is pretty repetitive. Really the only thing that is changing here is the x and the y. Which is our offsets. What would be really cool is if these 3 functions pointed to one function. What would also be great is if we refactor our code our tests don't break.

Right now my test are expecting methods called moveRight(), moveLeft(), and moveDown().

So lets refactor!

### Step 1 pull the MVP!
We need to find a way to isolate the parts and pieces we need for this function to work. So if we're looking at our code the pieces we need are going to be the x and the y. Let's make a function called move and lets just make sure this function receives the x and the y offset.

```

Block.prototype.move = function(xOffset, yOffset){
 // stuffz will go in here 🐼
 // grab the current object's x and add the xOffset to it
 // grab the current object's y and add the yOffset to it
 // return the current object
 }

```

 So now that we have our sudo code written lets look into each piece of code that needs to be implemented.


### Step 2 Finishing the logic.

 first of all if we are going to write code the way we want it, it would be nice to reference our object by calling ```this```. We could pass the object through but if we are going to use bind then it will be a little unnecessary to pass the object through when we can utilize ```this```

 our code should look a little like this.

 ```
 Block.prototype.move = function(xOffset, yOffset){
 	this.x += xOffset
 	this.y += yOffset
 	return this
 }

 ```

### Step 3 have the previous function point to our new one.

If we look at our previous function it looks like this.

```
Block.prototype.moveDown = function() { if (this.canMoveDown) { this.y++ };
return this;};

Block.prototype.moveRight = function() { if (this.canMoveRight) { this.x++ }; return this;};
Block.prototype.moveLeft = function() { if (this.canMoveLeft) { this.x --}; return this;};

```
 so lets look at one of the functions

 if we were to take the ```Block.prototype.moveDown``` function and have it point to move we could do something a little like this

 ```
  if (this.canMoveDown){this.moveDown = this.move.bind(this, 0, +1);}
 ```

 so now if we finish this out our functions should look like this.

 ```
 function Block(board, x = 5, y = 5, color = “#000000”) {

 this.board = board;
 this.active = true;
 this.x = x;
 this.y = y;
 this.height = 1;
 this.width = 1;
 this.color = color;

 if(this.canMoveDown){this.moveDown = this.move.bind(this, 0, +1);}
 if(this.canMoveLeft){this.moveLeft = this.move.bind(this, -1, 0);}
 if(this.canMoveRight){this.moveRight = this.move.bind(this, +1, 0);
 }
}
Block.prototype.move = function (xOffset, yOffset) {
 this.x += xOffset;
 this.y += yOffset;
 return this

 ```

#Lets do one more together.
 lets look at the following code.

 ```
 Block.prototype.blockIsAtBottomOfBoard = function() {
  return this.y + 1 > this.board.rows;
};

Block.prototype.blockIsAtLeftSideOfBoard = function() {
  return this.x - 1 < 0;
};

Block.prototype.blockIsAtRightSideOfBoard = function() {
  return this.x + 1 > this.board.columns;
};

 ```

 We are obviously repeating ourselves here. really the only things changing about these functions are the comparisons and the boards and columns that we are comparing. so lets write a function called ``isAt`` that can take in these parameters for us.

```
Block.prototype.isAt = function(offset, comparison, board){
	//do the things.
}

```

Now we have to pass a comparative statement through and the way we do that is define that stuff as variables.

```
Block.prototype.isAt = function(offset, comparison) {
   // do the things
};

var compareLess = function(a,b) {
  return a < b;
};

var compareGreater = function(a,b) {
  return a > b;
};

```

Now we need to somehow ``bind`` these functions together.

so let's start with the first portion of the code.

```
this.blockIsAtBottomeOfBoard = this.isAt.bind(this.y, +1, compareGreater, this.board.rows)
```

Which means we have to then change our isAt function to accommodate for the things we are binding to this function.

Whats nice about javascript is that there is a way for us to explicitly return a function. It's going to look a little like this.

```
Block.prototype.isAt = function(offset, comparison, board){
	return comparison((this + offset), (board))
}

```

```
  this.blockIsAtBottomOfBoard    = this.isAt.bind(this.y, +1, compareGreater,this.board.rows);
  this.blockIsAtLeftSideOfBoard  = this.isAt.bind(this.x, -1, compareLess, 0);
  this.blockIsAtRightSideOfBoard = this.isAt.bind(this.x, +1, compareGreater,this.board.columns);```
```

```
Block.prototype.isAt = function(offset, comparison,board) {
  return comparison((this + offset),(board));
};

var compareLess = function(a,b) {
  return a < b;
};

var compareGreater = function(a,b) {
  return a > b;
};

```


###your turn

There is a lot of functions that need to be refactored in all of this code. I would like you to apply the ideas we have started here. If you get lost feel free to checkout my `refactored-branch` to walk you through some of the refactoring techniques that I've done. The code that needs to be refactored are as follows!


#### Chunk 1 (medium)
```
Block.prototype.canMoveDown = function() {
  if (this.inactive){ return this.active = false }

  // check conditionals below to confirm falling block moves correctly

  if (this.blockIsAtBottomOfBoard){ return this.inactive }

  if (this.isThereABlockBelow) { return false }
};

Block.prototype.canMoveLeft = function(){

  if (this.inactive) { return this.active = false}

  // check conditionals below to confirm falling block moves correctly

  if (this.blockIsAtLeftSideOfBoard) {return this.inactive}

  if (this.isThereABlockOnTheLeft) { return false }
};

Block.prototype.canMoveRight = function(){

  if (this.inactive) { return this.active = false }

  // check conditionals below to confirm falling block moves correctly

  if (this.blockIsAtRightSideOfBoard) { return this.inactive }

  if (this.isThereABlockOnTheRight) { return false }
};
```
hint:
* maybe look into breaking the function into one piece or part (maybe calling it `canMove`)
* look into passing in the parts of the function that change (bind the function, first argmument is this, second and third arguments are the changing parts.)


#### Chunk 2 (easier)

```
Block.prototype.isThereABlockOnTheRight = function() {
  if (this.board.findBlockOnBoard(this.x + 1, this.y)) { return true }
};

Block.prototype.isThereABlockOnTheLeft = function() {
  if (this.board.findBlockOnBoard(this.x - 1, this.y)) { return true }
};

Block.prototype.isThereABlockBelow = function() {
  if (this.board.findBlockOnBoard(this.x, this.y + 1)) { return true }
};
```

hint:
* the only parts that are changing are the offsets
* look into making one function that will take in the specific offsets
* it looks like it's always returning true.

### Recap

1) Find repetitive code
	- if you find yourself repeating yourself it might be time you refactor your code into partial functions
2) Have your repeated code point to a reusable function
	- Take the pieces you need to make the function work, and delegate those important pieces to another function
4) Make it agnostic as possible.
	- So what your function is taking a bunch of arguments. It's reusable.
