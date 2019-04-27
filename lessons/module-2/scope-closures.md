---
title: Closures
tags: javascript, scope, closure, iife, lexical scope
module: 2
---

## Closures 

 [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) are expressions (usually functions) which can work with variables set within a certain context. In other words, a closure is formed when a function is defined inside of another function (one function nested inside of another function). This allows the inner function to access to the outer function's variables via the scope chain. 

 Here's an example of a closure:  
 
```js
 function init() { 
  var name = 'Turing'; // name is a local variable created by init  
   function displayName() { // displayName() is the inner function, a closure 
    alert(name); // use variable declared in the parent function      
  } 
   displayName();     
} 
 init();  
 ```

 You're probably asking, 'So what?'... which is totally fair. It's hard to see the real value of closures until the nested functionality is returned. 

 Returning the nested functionality allows you to maintain access to the local variables in its associated scope. Unlike what we've mentioned before with garbage collection, the interpreter is smart enough to know that any referenced variables within this returned function should not be garbage-collected.  

 Let's take a look at another example of a closure: 

```js 
1  function makeCounter () {  
2    var count = 0; 
3   
4    return { 
5     add: function () {  
6     count++;  
7    }, 
8    getCount: function () {  
9     return count; 
10   }  
11  };  
12 }  
13  
14 var counter = makeCounter(); 
15  
16 console.log(counter) 
17 console.log(counter.getCount()); // 0  
18 counter.add(); 
19 console.log(counter.getCount()); // 1  
``` 

 In the example above, you'll notice that the value of counter on line 16 prints `{add: ƒ, getCount: ƒ}` - which is what we expect given the return statement in `makeCounter`.   

 _This_ is when closures get interesting - when that inner functionality is returned. You'll notice that when we actually call the methods that are stored in the `counter` object (lines 17-19) we still have access to the variable `count`.  

 Because of the way that our code is written and returned, JavaScript knows not to garbage collect the variable of count. There is no way to mutate or overwrite `count` because it is completely protected within the closure. It's only accessible through the functions provided by the closure itself. Simply put, a closure is the ability of a function to remember the environment in which it was created.  

 You can find some practical uses for closure [here](https://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript).  

#### Your challenge  

Create a function called `createGreeting` that declares a variable called `myName` and an inner function that is returned. When the `yourGreeting` function is called, it should log `'Hello' + <yournamehere>` to the console.    

```js
function createGreeting() { 
  // your code here 
} 
 // var yourGreeting = createGreeting();  
// yourGreeting(); //should log the string of 'Hello' with your name 
```
<!-- 

## IIFE (immediately invoked function expressions)

```js
(function myScope () {
  var functionScopedVariable = "Safety!"
})();

console.log(functionScopedVariable); // undefined
console.log(myScope) // undefined
```

Take a look at the code above. Neither the function-scoped variable `functionScopedVariable`, nor the named function `myScope` are available in the global scope. Why is this? What do you notice about the syntax of this code?

The function `myScope` is wrapped in parentheses, and then a pair of parentheses is added onto the end. We know in Javascript, we invoke a function with those parentheses. This function is being invoked as soon as it is created, which means the function itself is enclosed in function scope and unavailable to the global scope.

**JavaScript Module Pattern:**

We can make use of IIFEs to create modules.

```js
window.myStringModule = (function () {
  var allCapsString = "SAFETY!"

  function setString (newString) {
    allCapsString = newString.toUpperCase();
  }
  
  function getString () {
    return allCapsString;
  }

  return {
    setString: setString,
    getString: getString
  };
})();  
```

Looking at this code, what do you think is happening?

You can read more about the module pattern here:
Read more about the JS Module Pattern:
- [http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
- [https://toddmotto.com/mastering-the-module-pattern/](https://toddmotto.com/mastering-the-module-pattern/) -->



<!-- ADD INFOMATION ON LEXICAL SCOPING TO THIS LESSON -->