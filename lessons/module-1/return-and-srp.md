# Return Statements and SRP

## Learning goals:
* Understand what return statements do
* Understand more about the Single Responsibility Principal
* Utilize return statements to keep functions singly responsible

### Return statements 
Return statements are something we regularly see in functions. Without them, our functions are essentially a series of statements. 
``` js
function addEmUp(x, y) {
  var sum = x + y;
}

addEmUp(2,3)
// output: undefined
```

This function isn't doing a whole lot for us. While it does successfully add up two numbers (we can verify this by putting a `console.log(sum)` statement after `sum` is declared), we can't do anything with the sum. This is why we need return statements.

``` js
function addEmUp(x, y) {
  var sum = x + y;
  return sum;
}

addEmUp(2,3)
// output: 5
```
This little keyword makes our functions way more powerful than they were before. They allow us to output any expression we want from our functions. Now we can assign variables to the outputs of functions:
```js
function addEmUp(x, y) {
  var sum = x + y;
  return sum;
}

var sum1 = addEmUp(2,3)
console.log(sum1)
```
This isn't the only functionality return statements provide for us. When the interpreter hits `return`, the execution of the current function ends.

```js
function letsCount() {
  console.log('one');
  console.log('two');
  return;
  console.log('three');
}

letsCount();

// We'll only see 'one' and 'two' printed to the console. The code execution stops before we reach the third console.log()
```

We can use this to our advantage when trying to stop the execution of a program under certain conditions.

These examples may be familiar, but they become more important when considering how to make our functions adhere to the single responsibility principle. 

### Single Responsibility Principle

The single eesponsibility principle is the first principle of object oriented design. The term was coined by Robert C. Martin, a computer programmer and co-author of the Agile Manifesto. It states that 
> "a class should have only one reason to change."

In other words, each function should have responsibility over one part of a software's functionality, and that responsibilty should be contained by the function.

Programming with the SRP in mind allows the code to be:
* more easily testable 
* more reusable 
* more readable 
* more easily refactorable.

Think about how we write our tests in mythical creatures. Each test checks for a single behavior, and leads us to write methods that are responsible for that behavior. 

SRP encourages development of more modular code, which keeps things cleaner, DRYer, and easier to change around.

### Use case

Think about something like <a href="https://github.com/Kalikoze/Bill-Splitter" target="_blank">Bill Splitter</a>. Our app has a lot of different steps we need to take:

1. Calculate the cost of the tip based off bill and percentage
2. Calculate the total cost of the bill
3. Calculate the shared cost based off the number of diners
4. Add totals to the page

We could use one function to do all of this, but it would be a pain. A better solution is to split up each piece of functionality into a separate function. 

Each of these functions would need to receive arguments in order to calculate their outputs. This would allow us to utilize return statements to link the functions together. 

#### Your turn
Take a look at your work for bill splitter, and see if the code is adhering to SRP. Share with the person to your left. 

#### Your turn
Take some time to look at your Ideabox code, thinking about leveraging return statements to keep it adhering to SRP. Chat with the person to your right about ways to modify your approach.