---
title: JS Dojo - Scope
length: 60
tags: javascript, scope
module: 2
---

## Scope Review

#### Exercise 1
```
let number = 10;

function foo () {
  number = 20;
  console.log(number);	// what will log here?
}
console.log(number);		// what will log here?
foo()
console.log(number);		// what will log here?
```

#### Exercise 2
```
let number = 10;

function foo () {
  let number = 20;
  console.log(number);	// what will log here?
}

foo()

console.log(number);		// what will log here?
```


#### Exercise 3
```
let name = 'Spider-Man';

function createScope () {
  let name = 'Doctor Doom';

  if (name === 'Doctor Doom') {
    name = 'Lady Doom';

    if (name === 'Lady Doom') {
      let name = 'Danger';
    }

    console.log(name)
  }

  console.log(name)
}

console.log(name)

createScope();
```

#### Exercise 4
```
let name = 'Spider-Man';

function scopeOne () {
  let name = 'Doctor Doom';

  scopeTwo();

  function scopeTwo () {
    let name = 'Lady Octopus';

    scopeThree();
  }

  function scopeThree () {
    console.log(name);
  }

}

scopeOne()
```
