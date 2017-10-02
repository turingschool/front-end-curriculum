---
title: Intro to Object Oriented Programming
length: 60
tags: javascript, object oriented programming, oop
module: 2
---

## After this lesson you should...
* Have a high-level understanding of what OOP is
* Be able to speak to the benefits of OOP
* Understand inheritance

---

# What is Object Oriented Programming?

###### Here's a definition from [Techtarget](http://searchmicroservices.techtarget.com/definition/object-oriented-programming-OOP):

* _Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic._

###### Here's another definition from [techterms.com](https://techterms.com/definition/oop)

* _OOP (not Oops!) refers to a programming methodology based on objects, instead of just functions and procedures. These objects are organized into classes, which allow individual objects to be group together._

While some languages such as Java, C++ and Ruby are specifically object-oriented languages, javascript is very flexible and has the ability to be functional (partial functions, currying, etc) or object oriented.

### Examples:

<center>

![vehicle example](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-OOP-objects_and_classes.svg/220px-CPT-OOP-objects_and_classes.svg.png)


---


![car example](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CPT-OOP-objects_and_classes_-_attmeth.svg/300px-CPT-OOP-objects_and_classes_-_attmeth.svg.png)


---


![instrument example](https://koenig-media.raywenderlich.com/uploads/2017/05/ObjectOrientedProgramming-graph-2.png)


</center>

# Benefits

* Code reusability
* Encapsulation: values are scoped to the specific object
* Design & Scalability: OOP forces programmers to meticulously plan the project. OOP is also much more maintainable for larger programs
* Maintainable: OOP tends to be easier to modify specific pieces of the code without affecting the larger program

# How do objects work?


![object breakdown](http://www.teachitza.com/delphi/object.gif)

When you're considering creating an object you should look at the `Law of Demeter` or the `Principal of Least Knowledge`. If you're wondering what that is you should probably check it out [here](http://wiki.c2.com/?LawOfDemeter). It can also be summarized by the following:

* Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
* Each unit should only talk to its friends; don't talk to strangers.
* Only talk to your immediate friends.

# Objects and Instances

You want to think of an object like it were a template and an instance of that object is a specific version or type of that original template.


TRY IT: With someone next to you, brainstorm five types of objects and specific instances of that object that are at Turing. For example:

**Type of object**: Cubby

**Specific instances**:

* alter-nate's cubby
* limbo's cubby
* student cubbies

**Type of object**: Refrigerator

**Specific objects**:

* Staff refrigerator
* Staff kegerator
* Mod-specific refrigerators

In the cases above, what we called "type of object" is called a Class, and what we called "specific objects" are called instances.

# Inheritance

is when an object or class is based on another object (prototypal inheritance) or class (class-based inheritance), using the same implementation (inheriting from an object or class: inheriting behavior, programming by difference[1]) or specifying a new implementation to maintain the same behavior (realizing an interface). Such an inherited class is called a subclass of its parent class or super class.

Or, just...

When an object or class is based on another object or class.

So back to the car examples above...Although each new instance of the car class has unique attributes, it may come with one or more shared attributes given from its parent. For example, each instance might come stock with:
* 4 wheels
* Steering wheel
* Seat-belts

### Example:

#### Old Way:

```
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.thing = 'stuff';
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
```

#### New Way:

```
class Product {
  constructor(name, price) {
	  this.name = name;
    this.price = price;
    this.thing = 'stuff'
  }
}

class Food extends Product {
  constructor(name, price) {
    super(name, price)
  }
}

```

# Messages


![message passing](https://www.defit.org/wp-content/uploads/2012/06/message-passing-320x266.jpg)


![message example](https://www3.ntu.edu.sg/home/ehchua/programming/java/images/OOP_Objects.png)


This is how objects interact with each other. Now having one object just simply isn't enough. In real life this process isn't too difficult to understand. If I'm being annoying my wife communicates to me that I am being annoying and that I need to stop. If I'm driving my car and the gas tank light comes on it's pretty apparent that I need to then put gas in the car.

In order for objects to interact with each other they must communicate with messages. Messages are parameters that are essentially passed back and forth from object to object. The messages use parameters to make sure the information is precise. If the receiving object does not have enough information, it will not be able to properly carry out the method

# SRP and Coupling

Objects have expectations. When creating objects, you should always strive to have them know as little as possible or basically follow the SRP ([Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)). The more each object knows essentially the more dependencies that are added. That means that there is a higher likely hood that something will break.

Coupling refers to the level of connectedness between two objects. Objects will need to interact with one another and therefore can create dependencies. A good goal as a programmer is to make objects as independent as possible, meaning they can be tested as stand-alone units and don't have too many dependencies on other objects to perform their respective duties.




# Code Along

Let's build some stuff!

Take a look at the [Flash Cards Project](http://frontend.turing.io/projects/flash-cards.html)

### Set Up:

Make a new directory

```
$ mkdir oop-practice && cd oop-practice
```

Create a few files:
* Card.js
* Guess.js
* Deck.js
* Round.js
* test.js

```
$ touch Card.js Guess.js Deck.js Round.js test.js
```

Create a package.json file 

```
$ npm init
```

You can press enter to skip through all of the questions except for **test command**. For that enter `mocha`

Next, you'll need to install chai in order to run our tests.

```
$ npm i -D chai
```

Lastly, we'll need to write tests in order to determine if our code works correctly. I strongly encourage you to write your own, but if you need, you can paste this into your `test.js` file to get going on creating objects. 

```
const { expect } = require('chai')
const Card = require('./Card.js')
const Guess = require('./Guess.js')
const Deck = require('./Deck.js')
const Round = require('./Round.js')

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card ('What is the capital of Alaska?', 'Juneau')
  })


  it('should exist', () => {
    expect(true)
    expect(card).to.exist
  })

  it('should take a question and answer argument', () => {
    expect(card.question).to.equal('What is the capital of Alaska?')
    expect(card.answer).to.equal('Juneau')
  })

})

describe('Guess', () => {
  let card;

  beforeEach(() => {
    card = new Card ('What is the capital of Alaska?', 'Juneau')
  })

  it('should take in a response and card object as args', () => {
   const guess = new Guess('Juneau', card)

    expect(guess.response).to.equal('Juneau')
    expect(guess.card).to.equal(card)
  })

  it('should provide a positive reponse if guess is correct', () => {
    const guess = new Guess('Juneau', card)

    expect(guess.correct).to.equal(true)
    expect(guess.feedback()).to.equal('Correct!')
  })

  it('should provide feedback if guess is incorrect', () => {
    const guess = new Guess('Grizzley', card)

    expect(guess.correct).to.equal(false)
    expect(guess.feedback()).to.equal('Wrong!')
  })

})

describe('Deck', () => {
  let card1,
      card2,
      card3

  beforeEach(() => {
    card1 = new Card ('What is the capital of Alaska?', 'Juneau')
    card2 = new Card ('What is the capital of Minnesota?', 'St. Paul')
    card3 = new Card ('What is the capital of Colorado?', 'Denver')
  })

  it('should add a new deck of cards as an array', () => {
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)

    expect(deck.cards).to.be.an('array')
    expect(deck.cards.length).to.equal(3)
    expect(deck.cards[0]).to.equal(card1)
  })

  it('should have a count method', () => {
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)

    expect(deck.count()).to.equal(3)
  })
})

describe('Round', () => {
  let card1, card2, card3, cards, deck, round

  beforeEach(() => {
    card1 = new Card ('What is the capital of Alaska?', 'Juneau')
    card2 = new Card ('What is the capital of Minnesota?', 'St. Paul')
    card3 = new Card ('What is the capital of Colorado?', 'Denver')
    cards = [card1, card2, card3]
    deck = new Deck(cards)
    round = new Round(deck)
  })

  it('should take in a new deck', () => {
    expect(round.deck).to.equal(deck)
    expect(round.guesses).to.deep.equal([])
  })

  it('should show current card', () => {
    expect(round.currentCard()).to.equal(card1)

    round.recordGuess('Guess!')

    expect(round.currentCard()).to.equal(card2)
  })

  it('should log guesses', () => {
    const guess = 'Juneau'
    const expectedGuess = new Guess(guess, round.currentCard())

    round.recordGuess(guess)

    expect(round.guesses.length).to.equal(1)

    expect(round.guesses[0]).to.deep.equal(expectedGuess)
    expect(round.guesses[0].correct).to.equal(true)
    expect(round.guesses[0].feedback()).to.equal('Correct!')
  })

  it('should log correct guesses count', () => {
    const guess = 'Juneau'
    const correctThirdGuess = 'Denver'

    round.recordGuess(guess)

    expect(round.numberCorrect).to.equal(1)

    round.recordGuess('wrong guess')

    expect(round.numberCorrect).to.equal(1)

    round.recordGuess(correctThirdGuess)

    expect(round.numberCorrect).to.equal(2)
  })

  it('should provide number correct as percent', () => {
    const guess = 'Juneau'

    round.recordGuess(guess)

    expect(round.percentCorrect()).to.equal('100%')

    round.recordGuess('wrong!')

    expect(round.percentCorrect()).to.equal('50%')
  })
})

```
