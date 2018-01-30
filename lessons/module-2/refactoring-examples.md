## Example 1

### Before
```js
if (this.explode === 'no') {
  let playerImage = new Image();

  playerImage.src = 'assets/airplane.png';
  context.drawImage(
    playerImage,
    this.x,
    this.y,
    this.width,
    this.height
  );

} else if (this.explode === 'yes') {
  let playerImage = new Image();

  playerImage.src = 'assets/kapow.png';

  context.drawImage(
    playerImage,
    this.x,
    this.y,
    this.width,
    this.height
  )
}
```

### After
```js
let playerImage = new Image();

if (this.explode === 'no') {
  playerImage.src = 'assets/airplane.png';
  
} else if (this.explode === 'yes') {
  playerImage.src = 'assets/kapow.png';
}

context.drawImage(
  playerImage,
  this.x,
  this.y,
  this.width,
  this.height
);
```

## Example 2

### Before
```js
function togglePlayer(currentToken) {
  if (currentToken.player === "Player One") {
    var placedToken = currentToken.moveDown(currentToken, newArray)

    if (placedToken) {
      newArray.push(placedToken);
      return new Token("Player Two", context, canvas);

    } else {
      return new Token("Player One", context, canvas);
    }

  } else {
    var placedToken = currentToken.moveDown(currentToken, newArray)

    if (placedToken) {
      newArray.push(placedToken);
      return new Token("Player One", context, canvas);

    } else {
      return new Token("Player Two", context, canvas);
    }
  }
}
```

### After
```js
function togglePlayer(currentToken) {
  let placedToken = currentToken.moveDown(currentToken, newArray)
  let playerName = '';
  
  if (placedToken) {
    newArray.push(placedToken);
  }
  
  if (currentToken.player === "Player One") {
    playerName = "Player Two"
      
  } else {
    playerName = "Player One"
  }
    
  return new Token(playerName, context, canvas);
}
```

## Example 3

### Before
```js
var slots = [];
var firstRow = 40;
var secondRow = 40;
var thirdRow = 40;
var fourthRow = 40;
var fifthRow = 40;
var sixthRow = 40;

for (var i = 0; i < 42; i++) {
  if (i < 7) {
    slots.push(new Slot(sixthRow, 550, context, canvas));
    sixthRow += 95;
  } else if (i < 14) {
    slots.push(new Slot(fifthRow, 470,context, canvas));
    fifthRow += 95;
  } else if (i < 21) {
    slots.push(new Slot(fourthRow, 390,context, canvas));
    fourthRow += 95;
  } else if (i < 28) {
    slots.push(new Slot(thirdRow, 310,context, canvas));
    thirdRow += 95;
  } else if (i < 35) {
    slots.push(new Slot(secondRow, 230,context, canvas));
    secondRow += 95;
  } else if (i < 42) {
    slots.push(new Slot(firstRow, 150,context, canvas));
    firstRow += 95;
  }
}
```

### After
```js
function initializeBoard () {
  var col = 40;
  var row = 550;

  for (var i = 0; i < 6; i++) {

    for (var j = 0; j < 7; j++) {
      slots.push(new Slot(col, row, context, canvas));
      col += 95;
     }

    col = 40;
    row -= 80;
  }
}
 
initializeBoard();
```

## Example 4

### Before
```js
requestAnimationFrame(function gameLoop() {
  game.drawBackground();
  game.drawGamePieces();
  game.drawLevel();
  game.toad.collisionDetection(game.autos, game.river);
  game.toad.drawToad(context);
  game.checkForWin();
  game.level.respawnToad ? game.toad.respawnToad() : null;
  game.animate();
  requestAnimationFrame(gameLoop);
}
```

### After
```js
// move all the game animate things into one function
requestAnimationFrame(function gameLoop() {
  game.animate();
  requestAnimationFrame(gameLoop);
}
```

## Example 5

### Before
```js
function evalInput(event) {
  if (event.keyCode === 37) {
    game.toad.moveToad('left', canvas);

  } else if (event.keyCode === 38) {
    game.toad.moveToad('up', canvas);

  } else if (event.keyCode === 39) {
    game.toad.moveToad('right', canvas);

  } else if (event.keyCode === 40) {
    game.toad.moveToad('down', canvas);

  } else if (event.keyCode === 72) {
    game.winLevel();
  }
}
```

### After
```js
const keyboard = {
  37: function () {
    game.toad.moveToad('left', canvas);
  },
  38: function () {
    game.toad.moveToad('up', canvas);
  },
  39: function () {
    game.toad.moveToad('right', canvas);
  },
  40: function () {
    game.toad.moveToad('down', canvas);
  },
  72: function () {
    game.winLevel();
  },
}

function evalInput(event) {
  if ( keyboard[event] ) {
    keyboard[event]()
  }
}

```

## Example 6

<!-- This one could be refactored more and also probably in a different way -->

### Before
```
switch (level) {
  case 1:
    autos = this.buildRoadRow(Tractor, 614.5, 1, 2, 8, 2, 4, 'black');
    autos = autos.concat(this.buildRoadRow(SlowCar, 564.5, 1, -1, 4, 4, 4, 'black'))
    autos = autos.concat(this.buildRoadRow(FastCar, 514.5, 1, 3, 3, 4, 1, 'black'));
    autos = autos.concat(this.buildRoadRow(Semi, 464.5, 2, -3, 3, 5, 3, 'black'));
    break;

  case 2:
    autos = this.buildRoadRow(Tractor, 614.5, 1, 2, 4, 4, 4, 'black');
    autos = autos.concat(this.buildRoadRow(SlowCar, 564.5, 1, -1, 4, 4, 4, 'black'))
    autos = autos.concat(this.buildRoadRow(FastCar, 514.5, 1, 3, 3, 4, 1, 'black'));
    autos = autos.concat(this.buildRoadRow(Semi, 464.5, 2, -3, 3, 5, 3, 'black'));
    break;

  case 3:
    autos = this.buildRoadRow(Tractor, 614.5, 1, 3, 4, 4, 4, 'black');
    autos = autos.concat(this.buildRoadRow(SlowCar, 564.5, 1, -1, 4, 4, 4, 'black'))
    autos = autos.concat(this.buildRoadRow(FastCar, 514.5, 1, 15, 3, 2, 1, 'black'));
    autos = autos.concat(this.buildRoadRow(Semi, 464.5, 2, -3, 3, 5, 3, 'black'));
    break;
}
```

After

```
let autoParams = {
  1: [
    [ Auto, 614.5, 1, 2, 8, 2, 4, 'black', tractorImg  ],
    [ Auto, 564.5, 1, -1, 4, 4, 4, 'black', slowCarImg ],
    [ Auto, 514.5, 1, 3, 3, 4, 1, 'black', fastCarImg  ],
    [ Auto, 464.5, 2, -3, 3, 5, 3, 'black', semiImg    ],
  ],
  2: [
    [ Auto, 614.5, 1, 2, 4, 4, 4, 'black', tractorImg  ],
    [ Auto, 564.5, 1, -1, 4, 4, 4, 'black', slowCarImg ],
    [ Auto, 514.5, 1, 3, 3, 4, 1, 'black', fastCarImg  ],
    [ Auto, 464.5, 2, -3, 3, 5, 3, 'black', semiImg    ],
  ],
  3: [
    [ Auto, 614.5, 1, 3, 4, 4, 4, 'black', tractorImg  ],
    [ Auto, 564.5, 1, -1, 4, 4, 4, 'black', slowCarImg ],
    [ Auto, 514.5, 1, 15, 3, 2, 1, 'black', fastCarImg ],
    [ Auto, 464.5, 2, -3, 3, 5, 3, 'black', semiImg    ],
  ]
};

let params = autoParams[this.currentLevel]

for (var i = 0; i < params.length; i++) {
  let nextRow = this.buildRoadRow(...params[i]);
  
  autos = [ ...autos, ...nextRow ];
}

```

