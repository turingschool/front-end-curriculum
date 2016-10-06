---
title: ES6 Generators
---

FOLLOW UP:
  - Promises vs Generators?
  - Why no return value?
  - Generators vs Callback

### What is an ES6 Generator Function?

Let's start with an example of familiar JS syntax.

```
function cheer() {
	console.log('go Pack')
  console.log('go!')
}

cheer()
```

What do you expect the output to be?

```
=> go Pack
=> go!
```

This seems legit.  

Typically, JavaScript functions will run each line of code one after the other in sequential order without stopping until the return statement. Once a function is called it will **"run to completion"** before any other JS code can be run.  

This is because JavaScript is "single-threaded". Meaning only one command/function can be executed at any given time.

Wouldn't it be awesome if I could execute one line, do something else, then execute the next line?

```
function cheer() {
  console.log('go Pack')
  doSomethingImportant()
  console.log('go!')
}

function doSomethingImportant(){
  console.log('getting a snack');
}

cheer()
```

We get:  

```
=> go Pack
=> getting a snack
=> go!
```

Great! Everything happened a little fast, but it did what I wanted it to do.  

What about this:  

```
function cheer() {
  console.log('go Pack')
  doSomethingImportant()
  console.log('go!')
}

function doSomethingImportant(){
  setTimeout(function(){ console.log('getting a snack')}, 1000)
}

cheer()
```

What do you expect to happen here? In a perfect world, I want to see `go Pack`, then I want to see `taking my time`, then `go!`. Instead, the first line doesn't wait for the second line to execute so we get

```
=> go Pack
=> go!
=> getting a snack
```

This is where Generators come in handy.  

A generator is a special kind of function in ES6 that can be paused in the middle, allowing other code to run, and then resumed when needed.

Essentially we are talking about making synchronous code act like asynchronous code, which with the help of generators and Promises is far easier than it used to be.

```
function* doSomething() {
  yield 'hello world'  
  yield 'something else'
}
```

There are a few things to note here. First, generator functions are indicated with an asterisk.  

*Note* The asterisk can be next to either the word `function*` or the function name `*doSomething`.  

Second, the content within the function starts with a `yield expression`. This is what tells the generator to pause.

Once the generator function is called, it will only execute the code up until it encounters the special word `yield`. This tells the generator function to return whatever is to the right of the yield, and then pause after until told to continue.  

After executing the line with the first `yield`, it cannot continue until you tell it to, which is done using a **Generator Iterator**.

### Generator Iterator

Take a look at our first example of a generator function.

```
function* doSomething() {
  yield 'hello world'  
  yield 'other stuff'
}
```

What do you expect to see if you run `doSomething()`?  

What do we actually get?  

```
=> //....radio silence
```

This is because `doSomething()` is no longer a vanilla JS function, it has been transformed by the asterisk into a Generator. Check it out:  

```
function* doSomething() {
  yield 'hello world'  
  yield 'other stuff'
}

function normalFunction() {
  return 'hello world'
}

console.log(doSomething())
console.log(normalFunction())
```

```
=> Generator {}
=> hi
```

Simply calling a generator function (ie: just calling `doSomething()`) doesn't actually execute it's contents, instead it returns a Generator Object. We need additional magic.

Luckily, there's this thing called a **Generator Iterator**. To everyone's surprise, it...iterates...over a generator. Let's see what that actually looks like.   

First off, we need to construct the iterator. This is usually done by first saving your generator function to a variable for easy access.

`let words = doSomething()`  

To command the generator to execute the function and read the next line of code you must use the method `.next()`.

```
function* doSomething() {
  yield 'hello world'
  yield 'HAHAHAH'
}

var words = doSomething()

console.log(words.next())
```

Once again, what do you expect to see?  

The answer is super interesting! You might expect the return value to be `'hello world'`. In fact, the Generator returns a `Generator Object`.

```
=> Object {value: 'hello world', done: false}
```
The object tells us two things.
  1) The return value from the yield expression
  2) A boolean indicating if the function is fully executed.  

In order to get the value, simply chain `.value` onto the call.  

```
console.log(words.next().value)
```

### Practical Use Cases

But when do you actually want to use this type of thing?  

One use case is to iterate over a large function, executing other things on the way without breaking the flow of the function.

```
function *numbers() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

const generator = numbers()
```

If you were to call `generator.next()` 5 times, you would get 5 numbers. Seems legit. But like always, calling a function 5 times to do the same thing defeats the purpose of being a lazy programmer.

```
for(let num of generator){
	console.log(num)
}
```

Or let the data persist.

```
const list = []
for(let num of generator){
  list.push(num)
}
console.log(list)
```

This seems kind of useless..we might as well just make an array. But let's check out an example where instead of simply printing numbers we pop out of our function and o something else.

```
function *numbers() {
  yield 1
  yield 2
  yield* moreNums()
  yield 6
  yield 7
}

function *moreNums() {
  yield 3
  yield 4
  yield 5
}

const generator = numbers()

for (let num of generator ){
  console.log(num)
}
```

With the ability to step through a function, you are now able to control when your function executes each line of code, as well as implement a kind of 2-way communication.  

With normal functions, you can pass in parameters at the beginning, and you get a return value at the end. With generators, you send messages out with each yield, and you can pass messages back in each time you restart the function.  

For example:   

```
function *adding(){
  const result = 1 + 1
  return 20 + (yield result)
}

const sum = numbers()
```

Think about what you expect to see on the first `sum.next()` call.

```
sum.next()
=> Object { value: 2, done: false}
```

This is because the function will kick off and execute until it encouters the first `yield expression`. At that point it will pause and return anything to the right of that expression, in this case `result`, which is `1+1`, which is `2`.  

Let's do it again. What do you expect?

```
sum.next()
=> Object {value: NaN, done: true}
```

Why did this happen? In this situation, the generator has paused on the `yield expression` and is waiting for input. What input you provide will replace the `(yield result)` chunk of code.

```
sum.next(10)
=> Object{value: 30, done:true}
```

Let's look at another example!

```
function* yellStuff(){
  var firstYell = yield 'AUGHH KELLY CLARKSON'
  var secondYell = yield firstYell + "...HAHAHA!!!"
  return firstYell + "..." + secondYell + "...LOUD NOISES"
}

const shouting = yellStuff()
```

```
console.log(shouting.next())
=> Object {value: "AUGHH KELLY CLARKSON", done: false}
```

So our first execution returns what is to the right of the first `yield expression`, in this case `AUGHH KELLY CLARKSON`. Then it pauses. Because we saved our yield expression to a variable that we reference in our next line, our generator expects an input to replace that value.

If I give it nothing:   

```
console.log(shouting.next())
=> Object {value: "AUGHH KELLY CLARKSON", done: false}

console.log(shouting.next())
=> Obejct {value: 'undefined...HAHAHA!!', done: false}
```

Vs

```
console.log(shouting.next())
=> Object {value: "AUGHH KELLY CLARKSON", done: false}

console.log(shouting.next('OTHER LOUD THINGS'))
=> Obejct {value: 'OTHER LOUD THINGS...HAHAHA!!', done: false}
```

And our last execution needs another input to replace `yield firstYell` statement, and save to the variable `secondYell`.

```
function* yellStuff(){
  var firstYell = yield 'AUGHH KELLY CLARKSON'
  var secondYell = yield firstYell + "...HAHAHA!!!"
  return firstYell + "..." + secondYell + "...LOUD NOISES"
}

const shouting = yellStuff()

console.log(shouting.next())
// Pause and wait for input. Input will replace the entire chunk of code to the right of the first =.
=> Object {value: "AUGHH KELLY CLARKSON", done: false}

console.log(shouting.next('OTHER LOUD THINGS'))
// firstYell = 'OTHER LOUD THINGS'
// yield pauses the function and waits for another input which will replace everything to the right of second `=`
=>Object {value: "OTHER LOUD THINGS...HAHAHA!!!", done: false}

console.log(shouting.next('HAM SANDWICH'))
// secondYell = 'HAM SANDWICH'

=> Object {value: "OTHER LOUD THINGS...HAM SANDWICH...LOUD NOISES", done: true}
```

One final example with asynchronous functions.

```
function* doAllTheThings() {
    //... some code 1
    var val1 = yield task1();
    var val2 = yield task2(val1)
    return val2;
};

function task1(){
	console.log("DOING TASK 1!")
  return 'TASK 1'
}

function task2(words){
  console.log("DOING TASK 2")
  return "TASK 2: " + words
}

var doIt = doAllTheThings()

console.log(doIt.next())
console.log(doIt.next("HAHAHA"))
console.log(doIt.next('FINAL'))
```


### Generators vs Callbacks

Generators help you avoid the callback pyramid of hell. Take the following example:

```
function doAllTheThings(callback) {
  //....
  thing1(function(val) {
    //....
    thing2(val, function(val) {
      //....
      thing3(val, callback);
    });
  });
}
```

This is pretty gross. So what about Promises?

### Generators vs Promises

Promises are great! The code above using Promises would look something like this:

```
function doAllTheThings() {
  return Promise.resolve()
    .then(function() {
        //...
        return thing1(val)
    })
    .then(function(val) {
        //... some code 2
        return thing2(val)
    })
    .then(function(val) {
        //... some code 3
        return thing3(val);
    });
}
```

This is much more readable, but it still requires you to write the function asynchronously and provide callbacks.  

Using Generators that code now looks like this:

```
function* doAllTheThings() {
    //... some code 1
    var val1 = yield task1();
    //... some code 2
    var val2 = yield task2(val1);
    //... some code 3
    var val3 = yield task3(val2);

    return val3;
};

```
### Read

[MDN Docs on Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)  
[The Basics of ES6 Generators](https://davidwalsh.name/es6-generators)
