---
title: This is Confusing
length:
tags: javascript, js, this, keyword
---

## [Slides](https://drive.google.com/open?id=1oF5k17fEaN_I4KIQOdBK-eEaNBf_S0_DrZhFzbPrA2w)

## Introduction

The keyword _this_ in javascript can be confusing. Depending on where it is used it can refer to different things.

While it is confusing, there are several easy rules for understanding and determining what it refers to.

The value of this can only change when a function is executed.

## Rule 1 - Default _this_ refers to the global object

By default _this_ refers to the global object. In a browser, the global object is the window.

```
console.log(this);

function logThis() {
  console.log(this);
}

logThis();
```

## Rule 2 - When calling a function as a method on an object, _this_ refers to that object.

```
var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: function () {
    console.log(this);
  }
}

voyager1.logThis();
```

## Rule 3 - _this_ in function code invoked using the new operator refers to the newly created object.

The _new_ keyword is used with constructor functions to create a new instance of an object.

When the _new_ keyword is used to invoke a function, _this_ inside of the function refers to the new object.

```
function SpaceProbe(title, classification) {
  console.log(this);

  this.title = title;
  this.classification = classification

  console.log(this);
}

var voyager2 = new SpaceProbe('Voyager 2', 'Space Probe');
```

## Rule 4 - When a function is called with either call, apply or bind, _this_ is set to the first argument passed to call, apply or bind

```
function logThis() {
  console.log(this);
}

var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: function () {
    console.log(this);
  }
}

logThis.call(voyager1);
logThis.apply(voyager1);

var logVoyager = logThis.bind(voyager1);

logVoyager();
```

## The difference between `function () {}` and `() => {}`

### function () {}
The value of _this_ is set when the function is executed.

### () => {}
The value of _this_ is set when the function is created.
