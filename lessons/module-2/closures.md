---
title: Closures
tags: javascript, scope, closure, iife, lexical scope
module: 2
---

## Learning Goals

* Describe and speak to lexical scoping in JavaScript
* Understand and implement closures
* Identify scenarios where closures can be useful in code, and use closures to solve specific programming challenges

## Vocab

- `lexical scope` also known as static scope. Lexical scope in JavaScript means that the accessibility of a variable is determined by its location in the source code and the structure of nested functions.
- `closure` a function that has a reference to its outer/lexical environment
- `higher-order function` a function that takes one or more functions as arguments and/or returns a function as its result.

## Some Context

Closures are an important concept in programming that can help developers to create more modular and reusable code. Lexical scoping is a technique that allows a variable to be declared within a specific scope, such as a function, and then used only within that scope and any nested scopes. Closures, on the other hand, allow a function to access and manipulate variables that are declared outside of its own scope.

The use of lexical scoping and closures can lead to more efficient and maintainable code, as well as improved security by preventing unintended access to sensitive data. They are particularly useful in functional programming, where functions are treated as first-class citizens and can be passed as arguments or returned as values. Understanding how lexical scoping and closures work can help design more effective and flexible software solutions.

## Lexical Scope

Though we haven't put a name to it until now, our conversations around scope and the scope chain are directly related to what we call **lexical scoping**.

Lexical scoping means that our scope is **statically** bound, and therefore perfectly predictable upon authoring our code. You can see lexical scope by looking directly at code, as it reads:

```js
function eatSnack() {
  var hunger = 25;

  getHangry();

  function getHangry() {
    console.log('I am sooooooo HANGRY!');
  }
}

eatSnack();
```

In our example above, the lexical scope for our `getHangry` function is the scope (and any variables) that are contained within `eatSnack`.

All inner functions (since functions create new scope) are statically (lexically) bound during the Creation Phase to the parent context in which the inner function was physically defined in the source/program code. Said another way, the getHangry() function is defined inside the definition of the eatSnack() function - because of this, we can't call getHangry() outside of the eatSnack() function. It won't work, because its scope is limited to within the eatSnack() function where it was defined.

## Closures 

[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) are expressions (usually functions) which can work with variables set within a certain context. In other words, a closure is formed when a function is defined inside of another function (one function nested inside of another function). This allows the inner function to access to the outer function's variables via the scope chain. 

Let's build on a definition together. At the most basic level, **a closure is when an inner function is defined inside of another function**.

This is syntactically and factually correct, but it doesn't tell us much about what's significant here. So a more thorough definition might be:  **a closure is when an inner function has access to its outer function's variables**.

Let's look at an example:  
 
```js
function greet() { 
  var firstName = 'Alan';

  function displayName() {
    console.log(firstName);
  }

  displayName();
} 

greet(); 
```
<section class="call-to-action">
### Turn and talk

With a partner, walk through the code execution above.
</section>

<section class="answer">
### How is this code executing? What details did you note?

1.  When we get to the console log for `firstName`, the JS interpreter first looks in its current scope (within `displayName`) for a `firstName` variable that it can grab the value from.
2. It doesn't find it, so it traverses up the scope chain to the parent scope (`greet`) and again looks for a `firstName` variable to reference.
3. It finds it here, with a value of `Alan`, so the log will say `Alan`.
</section>

In other words, functions can define functions; when returning the inner function and it will "remember" scope.

Now let's modify this example a bit. Instead of invoking `displayName` right away within our `greet` function, we'll return it:

```js
function greet() { 
  var firstName = 'Alan'; 

  function displayName() {
    console.log(firstName);
  }

  return displayName;
} 

var createGreeting = greet(); // createGreeting is now a function that can be invoked
createGreeting(); // will run the displayName function and log 'Alan'
```

Now when we invoke `greet`, we get a function back (`displayName`). In many languages, as soon as `greet` is finished running, our `firstName` variable would be completely removed from memory.

In JavaScript this isn't the case. Because there is an inner function here `displayName` -- JavaScript is smart enough to know that this function can still be called (we're going to invoke it with `createGreeting()`) and therefore it still needs access to the `firstName` variable. 

So when we run this code, we'll still get `Alan` to log to our console. In other languages, they would see this `displayName` function in isolation, and when it was invoked, it would say "I don't have a `firstName` variable to reference - it's undefined".

This is why "What is a closure" has become such a big question in JavaScript interviews -- lots of people coming from other languages are really surprised by this different behavior.

So our newer, better definition of a closure could now be: **When an inner function has access to the outer function's variables and can remember the environment in which it was created.** (So not only does our inner function have access to the outer function's variables, but it also remembers their values, even if the outer function has finished executing!)

## Closures for Protecting Variables

This still might not seem like an incredibly useful feature of JavaScript, but there are some more practical use-cases for closures. Before we move on, What we want to point out about this example, in order to better understand closures, is that:

* `firstName` is not available anywhere outside of the `greet` function. We would say that the `greet` function "closes over" this variable
* the inner function, `displayName` can reference (or even modify) the `firstName` variable because it is inside the scope of the outer function `greet`

So one use-case for closures is to **protect variables from any sort of outside manipulation (we're not talking about security here)**. Other languages often have some really nice way of implementing private or protected variables, but JavaScript doesn't. So if this is something we want to achieve, we would use a closure.


<section class="call-to-action">
### Practice

Take the following example:
```js
function analyzeGrades() {
  // We keep these variables private inside this closure
  let privateGrades = [93, 95, 88, 0, 55, 91];
  
  return {
    changeGrades() {
      privateGrades = privateGrades.map(grade => {
        return grade + 5;
      });
    },
    
    viewGrades() {
      return privateGrades;
    }
  }
};
  
console.log(privateGrades)
console.log(analyzeGrades)
console.log(analyzeGrades())

let instructor = analyzeGrades();
instructor.changeGrades(); // What is this doing here?
console.log(instructor.viewGrades());
```

1. First predict what each `console.log` will output.
2. Then add a new function, `addGrade`, to this closure that updates our `privateGrades` variable, adding a new grade to the array.
</section>

Our most thorough definition of a closure is now **when an inner function has access to the outer function's variables and can remember the environment in which it was created. The outer function's variables are protected by the closure and can only be manipulated by code defined within that function.**

In the previous example, you'll notice we could still technically change those grades and snoop on them if we wanted to. This is why we say JavaScript doesn't have a true fashion for creating private variables. As developers, we can hide a variable declaration inside a function in order to imply that no one should be fussing with that variable - but we can still gain access to that value. So closures aren't really going to help if you have truly sensitive data that nobody should be able to see.

<section class="answer">
### Practice in small groups
Consider the following situation. I want to create function that helps manage rent prices, but keeps the actual rent amount private through closure. 

```js
const rentPrice = (initialRent) => {
  // your code goes here
}

var rent = rentPrice(8000);
  
// Update data using private methods 
console.log(rent.getRent()); // returns 8000
console.log(rent.incRent(2000));
console.log(rent.decRent(1500));
console.log(rent.decRent(1000)); 
console.log(rent.incRent(2000)); 
console.log(rent.getRent()); // returns 9500
```
***Hint:*** `rentPrice` should return a series of functions for updating our confidental rent. Take note of the dot notation used to invoked these private methods. 

</section>

## Closures for drying up code
Consider this when looking at the next example: closures can 'partially apply' functions in order to 'lock in' arguments to make more reusable functions:

```js
const calculateTaxes = (taxRate) => {
  return (income) => {
    return income * taxRate
  }
}

const taxRateFor2020 = calculateTaxes(0.24)
const taxRateFor2021 = calculateTaxes(0.27)
console.log(taxRateFor2020(60000));
console.log(taxRateFor2020(85000));
console.log(taxRateFor2021(95000));
console.log(taxRateFor2021(100000));
```

In this code, `calculateTaxes()` is a **higher-order function** that takes a taxRate parameter and returns a ***new*** function that takes an income parameter and calculates the tax owed for that income at the given taxRate.

The returned function is a closure, meaning it has access to the taxRate parameter from the outer function even after the outer function has returned. This allows us to "dry up" our code by avoiding duplication of tax calculation logic.

In the subsequent lines of code, we call `calculateTaxes()` twice, once with a taxRate of `0.24` to create a function `taxRateFor2020`, and once with a taxRate of `0.27` to create a function `taxRateFor2021`. We then call each of these functions with different income values to calculate the tax owed.

Using closures in this way allows us to create reusable functions for calculating taxes at different rates, without having to repeat the same logic for each rate. It also allows us to easily calculate taxes for different incomes without having to pass the `taxRate` parameter every time we call the function.

<section class="call-to-action">
### Practice

Consider the following code:
```js
function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  increment();
  increment();
  increment();
}

counter(); // Output: 1 2 3
```

We're using a closure here, which is great! However, when we run our counter function, it only counts to three everytime. Update this function to return a function that allows us to create many counters that keep track of their count separately. 

<section class="answer">
### Potential Solution

```js
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter = createCounter();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

const counter2 = createCounter();

counter2(); // Output: 1
```
</section>
***Extra Spicy:*** Include the private methods `incrementCounter`, `decrementCounter` and `getCounterValue` within the closure.

</section>

<section class="call-to-action">
### On your own

Make a function that creates a random number generator, and stores the values of the minimum random numbers and maximum random numbers generated between invokations. 
</section>

## Conclusion

 Closures are functions that capture and remember the environment in which they were created, and can be used to create private variables and **memoize** functions. Implementation of closures can result in efficient, modular, and maintainable code, and avoid common pitfalls such as global namespace pollution, code duplication, and side effects. While implementation of closures is **NOT** expected in your projects moving forward, they will become even more relevant when working with React functional components in the future.

<section class="checks-for-understanding">
### Checks for Understanding 

- What is lexical scope?
- What is a closure and how can it be helpful?
- What is an example of a scenario where closures could be useful in code?
- Can you think of an example in your current or recent project where a closure would have been useful?
- What is the difference between a closure and a higher-order function?
</section>

### Additional Resources
* [practical uses for closures](https://medium.com/@dis_is_patrick/practical-uses-for-closures-c65640ae7304){:target="\__blank"}
* [closures in depth](https://javascript.plainenglish.io/heres-that-resource-on-javascript-closures-you-were-looking-for-95e82b8108f2){:target="\__blank"}
* [memoization](https://www.geeksforgeeks.org/javascript-memoization/){:target="\__blank"}
* [simple closures analogy](https://blog.codeanalogies.com/2018/10/19/javascript-closures-explained-by-mailing-a-package/){:target="\__blank"}
