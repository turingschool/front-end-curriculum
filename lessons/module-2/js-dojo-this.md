---
title: JS Dojo - this
length: 120
tags: javascript, this
module: 2
---

## Keyword _this_

#### Exercise 1
```
// this exercise #1
var name = 'Spider-Man';

var hoodlum1 = {
  name: 'Doctor Octopus',
  secret: {
    name: 'Otto Octavius',
    getName: function () {
      return this.name;
    }
  }
};

var getNameFun = hoodlum1.secret.getName;

console.log(getNameFun());                   // ????
console.log(hoodlum1.secret.getName());      // ????
```

#### Exercise 2
```
var name = 'Spider-Man';

var hoodlum1 = {
  name: 'Doctor Octopus',
  secret: {
    name: 'Otto Octavius',
    getName: () => {
      return this.name;
    }
  }
};

console.log(hoodlum1.secret.getName());      // ????
```

#### Exercise 3
```
var name = 'Spider-Man';

function Hoodlum (name, alterEgo) {
  this.name = name;
  this.secret = {
    name: alterEgo,
    getName: function () {
      return this.name;
    }
  }
}

var hoodlum1 = new Hoodlum('Doctor Octopus', 'Otto Octavius');

console.log(hoodlum1.name);
console.log(hoodlum1.secret.name);
console.log(hoodlum1.secret.getName());
```

#### Exercise 4
```
var name = 'Spider-Man';

function Hoodlum (name, alterEgo) {
  this.name = name;
  this.secret = {
    name: alterEgo,
    getName: () => {
      return this.name;
    }
  }
}

var hoodlum1 = new Hoodlum('Doctor Octopus', 'Otto Octavius');

console.log(hoodlum1.name);
console.log(hoodlum1.secret.name);
console.log(hoodlum1.secret.getName());
```

#### Exercise 5
```
function Block () {
  this.x = 10;
}
Block.prototype.handleKey = function(event) {
  var keyCode = event.keyCode;

  var keyboard = {
    37: function () {
      console.log('Left');
      this.x--;
      console.log(this)
    }
  }

  // if key is in keyboard, execute keys function
  if (keyboard[ keyCode ]) {
    keyboard[ keyCode ]();
  }
}

function setUpGame() {
  var block = new Block();
  document.addEventListener('keydown', block.handleKey);
}

setUpGame();
```
