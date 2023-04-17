---
title: "JS: Dot and Bracket Notation"
length: 60
tags: javascript, foundation, arrays, objects, bracket, dot, notation
---

## Learning Goals

* Use dot and bracket notation to access objects
* Compare expressions in dot and bracket notation and identify equivalent expressions
* Determine appropriate use cases for each notation
* Apply our knowledge of each notation to gain a deeper understanding about a familiar concept


## Vocabulary

- `Object` An unordered collection of related data in the form of key value pairs. JavaScript provides two notations for accessing object properties...
- `Dot Notation` A property in an object is accessed by giving the object’s name, followed by a period, followed by the property name (Example: `user.name`)
- `Bracket Notation` The object name is followed by a set of square brackets, with the property name specified inside the brackets via either a string (Example: `user['name']`) or a variable (Example: `user[name]`)  

<section class="call-to-action">
### Warm Up

Watch the first 7 minutes of [this video](https://www.youtube.com/watch?v=DJ0deyVQZPw) about dot and bracket notation.
<!-- This video is from Pam Lovett, covering bracket and dot notation and dives into details around using strings and or variables in bracket notation  -->

* Independently, complete the exercise found on [this repl](https://repl.it/@kaylaewood/bracketVsDotTryIt1#main.js).
* When you finish, use the zoom chat to **DM** me your answer to this question: *Which of the following expressions is equivalent to `car.brand`?*  
A. `car[brand]`  
B. `car['brand']`  
</section>


## Equivalent Expressions
Objects are a key piece of working with JavaScript. In order for objects to be helpful for us, we have to be able to access the information inside of the objects. To do this, we can use **dot notation** or **bracket notation**.

### Here are some examples of **dot notation**:  
  `house.address`  
  `student.gradeLevel`  
  `school.classroom.teacher`  

### Here are equivalent expressions in **bracket notation**:  
  `house[‘address’]`  
  `student[‘gradeLevel’]`  
  `school[‘classroom’][‘teacher’]`  

<section class="checks-for-understanding">
### Stop and Think

* What differences do you notice in the way each notation is written?
</section>

<section class="note">
### Key Point #1

You can write equivalent expressions using dot and bracket notation. For example: `object.property` is equivalent to `object['property']`.
</section>

## Chaining

As you have seen in a couple of examples today, you can chain multiple properties onto an expression in order to dig in deeper on an object. Let’s take this object, for example:

```js
  var user = {
    email: 'jonathan@email.com',
    name: 'Jonathan',
    contactInfo: {
      phone: 123456789,
      address: {
        street: '1234 Main Street',
        city: 'Denver',
        state: 'CO',
        zip: 80206
      }
    }
  }
```
If we wanted to access this user’s zip code using **dot notation**, we could write:  
`user.contactInfo.address.zip`

In order to access their zip using **bracket notation**, we would write:  
`user[‘contactInfo’][‘address’][‘zip’]`

You can also mix and match! We could write something like this and it would work:  
`user.contactInfo[‘address’].zip`

Notice how each block is formatted:  
  `user`      `.contactInfo`       `[‘address’]`      `.zip`

<section class="call-to-action">
### Paired Practice

* In a breakout room, complete the exercises found on [this repl](https://replit.com/@hfaerber/bracketVsDotTryIt2#index.js).
* When you finish, discuss this question with your partner: *In your opinion, which notation is easier to read and write?*
* Be prepared to discuss as a whole group after. Write down any questions that pop up along the way so we can discuss as a group!
</section>

<section class="note">
### Key Point #2

Whenever it is possible, we will default to using dot notation.
</section>

## Bracket Notation & Variables

Dot notation only works if you have access to the exact property name. Dot notation interprets the expression literally. Meaning, it will look for the actual property that is passed in. Let’s take, for example, [this code block](https://repl.it/@kaylaewood/bracketVsDotlesson1):

```js
  var phrases = {
    greeting: 'hello',
    departing: 'goodbye'
  }

  var lookupField = 'greeting';
```

If we ran the  command below, we would get undefined. This is because the JavaScript interpreter is looking for a property that is literally called “lookupField” and it does not exist:
```js
  console.log(phrases.lookupField);
  //output: undefined
```

The same would happen in this case:
```js
  console.log(phrases['lookupField']);
  //output: undefined
```

We can use bracket notation in our favor, by passing in the variable, like the example below. In this case, the interpreter will evaluate whats between the brackets, register `lookupField` as a variable and then pass in it’s value of `‘greeting’` to get the output of `‘hello’`:
```js
  console.log(phrases[lookupField]);
  //output: ‘hello’
```

If we reassigned the value of lookupField and then ran the same command as above, we’d get a new output:
```js
  lookupField = 'departing';

  console.log(phrases[lookupField]);
  //output: 'goodbye'
```

Remember: a variable represents some other value, and that value could be reassigned/change over time.  This means dot notation is not an option when using a variable to represent the object's key we are trying to access because to use dot notation, we must be able to type out the exact letter-by-letter name the key. Bracket notation gives us the ability to use variables to access values in an object. This is especially helpful with the value of the variable changes.  

<section class="note">
### Key Point #3

We must use bracket notation whenever we are accessing an object's property using a *variable* or when the property's key is a *number* or includes a *symbol* or is *two words with a space*.
</section>

Take a moment to read through this code:
```js
function checkForFood(restaurant, food) {
  if (restaurant.menus[food.type].includes(food)) {
    return `Yes, we're serving ${food} today!`;
  }
  return `Sorry, we aren't serving ${food} today.`
}

var foodItem = {
  name: "Quiche",
  price: "6.49",
  type: "lunch"
};

var restaurant = {
  name: 'Butcher Block Cafe',
  menus: {
    breakfast: ['Quiche', 'Egg and Sausage Sandwhich', 'Corn Beef Hash'],
    lunch: ['Ham and Swiss', 'Chicken Fried Steak', 'Cheeseburger'],
    dinner: ['T Bone Steak', 'Spagetti and Meatballs']
  }
}

checkForFood(restaurant, foodItem)
```

What will be returned from the `checkForFood` function? 


## Applying What We've learned

Even if these concepts are new to you, you've actually been putting them into practice for awhile now! Let's take a deeper look into something familiar to you: **for loops**.

<section class="call-to-action">
### Paired Practice

* In a breakout room, complete the exercises found on [this repl](https://replit.com/@hfaerber/bracketVsDotTryIt4#index.js).
* Be prepared to discuss as a whole group after. Write down any questions that pop up along the way so we can discuss as a group!
</section>

<section class="note">  
### Key Point #4

When we use dot notation, the JS interpreter looks in the object for a key that is an exact letter-by-letter literal match to whatever comes after the dot.  
When we use bracket notation, the JS interpreter *evaluates* everything between the brackets, *then* looks in the object for a key that matches whatever the code between the brackets evaluated to.  
</section>  

<section class="call-to-action">  
### Paired Practice

* In a breakout room, complete the exercises found on [this repl](https://replit.com/@hfaerber/Bracket-vs-Dot-Notation-Review-Sample-Lesson#index.js).
* Be prepared to discuss as a whole group after. Write down any questions that pop up along the way so we can discuss as a group!
</section>

<section class="checks-for-understanding">
### Reflect

In your notebook, answer the following questions:
* How does the JavaScript interpreter handle dot and bracket notation differently?
* When should you use dot notation? Bracket notation?
* What is a limitation of using dot notation? How does bracket notation address this?
</section>

<section class="call-to-action">
### Homework (Optional and Spicy!)  
* Complete the code challenges found on [this repl](https://repl.it/@kaylaewood/bracketVsDotHomework). These are tough! Do what you can. Stuck? Look [here](https://repl.it/@kaylaewood/bracketVsDotHomeworkAnswers#main.js).
* Answer the questions found in the JavaScript section of [this codepen](https://codepen.io/kaylaewood/pen/wvGrQxV?editors=1010).
</section>
