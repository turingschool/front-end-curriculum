# Return Statements and SRP

## Learning goals:
* Understand what return statements do
* Understand more about the Single Responsibilty Principal
* Utilize return statements to keep functions singlely responsible

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
This example may seem a little redundant; we've been writing and reading functions with return statements for over three weeks at this point. While the basics of 

### Single Responsibilty Principle

### Use cases 
* Getting out of a loop under a certain condition 

* Break out a larger function into its singlely responsible pieces 

* Add another big function for them to practice breaking things apaprt with 

