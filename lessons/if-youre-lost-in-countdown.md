---
title: if-youre-lost-in-countdown
length:
tags: javascript, callback, closure,recursion
---
```
function countDown(seconds){
  console.log(seconds);
  seconds--
  if(seconds >= 0){
   setTimeout(countDown,1000, seconds); // we are passing in the seconds as a parameter so that the funtion isn't called immediately
   // if you want to see how that looks like pass in the seconds to countDown like this countDown(seconds) and remove [, seconds]
  }
}

countDown(10)

// a callback is basically a closure. It's a function that is being passed into another function
//whats powerful about this is that our code will run without having to explicityly call a specific funtion
// any function we pass to the callback portion of this function it will fire that.
function countDown(seconds, callback){
  console.log(seconds);
  seconds--
  callback(seconds) // in our case callback is actually handleTime
}
function handleTime(seconds){
  if(seconds >= 0){
  setTimeout(countDown, 1000, seconds, handleTime); //notice that the second parameter is the handleTime function
  }
}


countDown(10, handleTime)
```
