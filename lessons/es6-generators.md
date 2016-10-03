# ES6 Generator Functions

### What is an ES6 Generator Function?

A generator is a special kind of function in ES6 that can be paused in the middle, allowing other code to run, and then resumed when needed.

Let's start with an example. The following code indicates it's a generator function with the asterisk. The function will only execute the line starting with the yield expression, and will then pause until told to continue.  

```
function *gameday () {
  yield console.log('skol')
  console.log('vikings')
  return 'done'
}

console.log(gameday())
=> 'skol'
// Will not return anything else at this time.
```

### Why is this useful?

Typically, JavaScript functions will run each line of code one after the other in sequential order without stopping until the return statement. Once a function is called it will **"run to completion"** before any other JS code can be run.  

This is because JavaScript is "single-threaded". Meaning only one command/function can be executed at any given time.

Take the following function for example:  

```
function gameday () {
  console.log('skol')
  console.log('vikings')
  return 'done'
}

console.log(gameday())

// This will return:
=> 'skol'
=> 'vikings'
=> 'done'
```

Generators, on the other hand, require an explicit "green light", the word `yield`, to return each line of a function. They are declared using an asterisk next to the word `function`. (Note that the asterisk can go next to either the word `function` or the name of your function, in this case `gameday`)

```
function *gameday() {
  yield console.log('skol')
  yield console.log('vikings')
  return 'done'
}

gameday()

// => 'skol'
// Pauses here.
```

Now, this function cannot continue until you tell it to which is done using a **Generator Iterator**.


### Generator Iterator

So there's this thing called a Generator Iterator. What does it do? Well, it...iterates...over a generator. Let's see what that actually looks like.   

First off, we need to construct the iterator. This is done by saving your function to a variable.  

`let cheer = gameday()`  

This is an *important note*: Simply calling a generator function (like just saying `gameday()` without the `let`) doesn't actually execute it's contents.

To actually execute the generator, use the method `.next()`.  

```
console.log(cheer.next())  // => { value: "skol", done: false }
```

Check it out! We get back an object from each `next()` call. The object has a `value` from the yield expression, and a boolean that indicates if the generator is done.  

Let's finish it out:

```
console.log(cheer.next())  // => { value: "vikings", done: true }
```

What about using `return` in generators?  

Good question! Technically, the return value will be printed out as yield expression similarly to any other line in the function and it will set `done: true`. But sometimes, in for loops for example, the return value is ignored since "done" is set to "true" it no longer cares about any potential yield value.

### Practical Use Cases

But when do you actually want to use this type of thing?  

With the ability to step through a function, you are now able to implement 2-way communication. With normal functions, you can pass in parameters at the beginning, and you get a return value at the end. With generators, you send messages out with each yield, and you can pass messages back in each time you restart the function.

For example:   

```
  function *addStuff () {
    let x = 1 + (yield "value")
    console.log(x)
  }
```

Here, when the script hits the `yield "value"` expression, it will send out the string "value". Then whenever the generator is restarted (which can be any length of time later), a value can be passed back into the function which will be added to 1 and assigned to the `x` variable. Magic!

Check out another use case of pausing to pass in a value mid-function:

```
function yell(words) {
    console.log("yell: " + words + "!!!");
}

function *getWords() {
    yield; // just pause
    yell( yield ); // pause waiting for a parameter to pass into `foo(..)`
}  
```
