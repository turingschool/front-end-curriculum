# Truthy vs Falsy

## Learning Goals

* Determine when values will evaluate to true or Falsy
* Identify "falsy" values
* Implement default values using the logical OR operators

## Truthy vs. Falsy Values
As you've started to learn more about JS, you may have encountered someone using the terms `truthy` and `falsy`. However, you may not have exactly known what they are talking about!

So, let's clear things up a bit...

- `Truthy` - something which evaluates to TRUE
- `Falsy` - something which evaluates to FALSE

But, if it was so clear cut, we would just say something is `true` or `false` - so why is there this distinction? Well, the easiest way to sort things out is to start with what values are `falsy`...

The following 6 values can be considered `falsy` -

* `undefined`
* `null`
* `NaN`
* `" "` - empty string
* `false`

So if the value you are working with is **NOT** one of these values, we can pretty safely assume that they will evaluate to `true` and can be considered `truthy`.


## Operators Review

We can use what we know about `truthy` and `falsy` values when we are utilizing logical operators in JS. Please review the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) before reflecting on the following questions.

* What does the `&&` operator do?

* What does the `||` operator do?

* What does the `!` operator do?
