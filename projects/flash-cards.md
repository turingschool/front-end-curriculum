---
layout: page
title: FlashCards
---

In this project, you'll write a flashcard program that is used through the command line. A user will be able to see the questions, take guesses, and see a final score at the end of the round.

In order to build good habits, we've broken the project up into small classes to demonstrate objects that have a single responsibility. As you work through each iteration, use TDD to drive out the desired behavior.

The rubric for this project is included at the bottom of this file.

# Iteration 1: Card Basics

First, we'll need a card object. Use TDD to drive the creation of an object that has this interaction pattern:

```
card = new Card ("What is the capital of Alaska?", "Juneau")
card.question
=> "What is the capital of Alaska?"
card.answer
=> "Juneau"
```

# Iteration 2: Checking Guesses

Users will enter an guess, and we need to know if the guess is correct. Let's use TDD to create this interaction pattern:

```
card = new Card ("What is the capital of Alaska?", "Juneau")
guess = new Guess("Juneau", card)
guess.card
=> Card { answer: "Juneau", question:"What is the capital of Alaska?"}
guess.response
=> "Juneau"
guess.correct
=> true
guess.feedback()
=> "Correct!"
```

```
card = new Card("Which planet is closest to the sun?", "Mercury")
guess = new Guess("Saturn", card)
guess.card
=> # Card {answer: "Mercury", question: "Which planet is closest to the sun?"}
guess.response
=> "Saturn"
guess.correct
=> false
guess.feedback()
=> "Incorrect."
```

# Iteration 3: Storing Cards in a Deck

Let's store the cards in a deck. Use TDD to drive the creation of an object that has this interaction pattern:

```
let card1 = new Card("What is the capital of Alaska?", "Juneau")
let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")
let deck = new Deck([card1, card2, card3])
deck.cards
=> [card1, card2, card3]
deck.count()
=> 3
```

# Iteration 4: The Round

A round will be the object that processes responses and records guesses. Use TDD to drive out this behavior:

```
let card1 = new Card("What is the capital of Alaska?", "Juneau")
let card2 = new Card("Approximately how many miles are in one astronomical unit?", "93,000,000")
let deck  = new Deck([card1, card2])
let round = Round.new(deck)
round.deck
=> #Deck {cards:[...] }
round.guesses
=> []
round.currentCard()
=> Card {answer: "Juneau", question: "What is the capital of Alaska?"}
round.recordGuess("Juneau")
=> Guess {card: Card{answer: "Juneau", question: "What is the capital of Alaska?"}, response: "Juneau">
round.guesses.count
=> 1
round.guesses[0].feedback
=> "Correct!"
round.numberCorrect
=> 1
round.currentCard()
=> Card { answer: "93,000,000", question: "Approximately how many miles are in one astronomical unit?"}
round.recordGuess("2")
=> Guess {card: Card { answer:"93,000,000", question: "Approximately how many miles are in one astronomical unit?"}, response: "2"}
round.guesses.count
=> 2
round.guesses[1].feedback
=> "Incorrect."
round.numberCorrect
=> 1
round.percentCorrect()
=> 50

```

# Iteration 6: Loading Text Files

Right now, we're hardcoding the flashcards into our runner. Wouldn't it be nice to have a whole text file of questions and answers to use?

Let's build an object that will read in a text file and generate cards. Go back to using TDD for this iteration.

Assuming we have a text file `cards.txt` that looks like this:

```
What is 5 + 5?,10
What is yung-jhun's favorite ice cream flavor?,vanilla
What is alter-nate's middle name?,nobody knows
What cardboard cutout lives at Turing?,Pat Whey
```

Then we should be able to do this:

```
const filename = "cards.txt"
let cardsGenerator = CardGenerator.new(filename)
let cards = cardsGenerator.cards

=> [Card { answer: "10", question: "What is 5 + 5?"},
 Card { answer: "vanilla", question: "What is yun-jhuns's favorite animal?"},
 Card { answer: "nobody knows", question: "What is alter-nate's middle name?"},
 Card { answer: "Pat Whey", question: "What cardboard cutout lives at Turing?"}]

```

# Extensions

## Build out a REPL interface

I should be able to run a runner file that will out put this to the CLI

```
Welcome! You're playing with 4 cards.
-------------------------------------------------
This is card number 1 out of 4.
Question: What is 5 + 5?
10
Correct!
This is card number 2 out of 4.
Question: What is Rachel's favorite animal?
panda
Incorrect.
This is card number 3 out of 4.
Question: What is Mike's middle name?
nobody knows
Correct!
This is card number 4 out of 4.
Question: What cardboard cutout lives at Turing?
Justin Bieber
Correct!
****** Game over! ******
You had 3 correct guesses out of 4 for a score of 75%.
```
# Evaluation Rubric

The project will be assessed with the following guidelines:

### 1. Fundamental Javascript & Style

* 4:  Application demonstrates excellent knowledge of Javascript syntax, style, and refactoring.
* 3:  Application shows strong effort towards organization, content, and refactoring.
* 2:  Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.
* 1:  Application generates syntax error or crashes during execution.

### 2. Enumerable & Collections

* 4: Application consistently makes use of the best-choice Enumerable methods
* 3: Application demonstrates comfortable use of appropriate Enumerable methods
* 2: Application demonstrates functional knowledge of Enumerable but only uses the most basic techniques
* 1: Application demonstrates deficiencies with Enumerable and struggles with collections

### 3. Test-Driven Development

* 4: Application is broken into components which are well tested in both isolation and integration using appropriate data.
* 3: Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality.
* 2: Application makes some use of tests, but the coverage is insufficient given projet requirements.
* 1: Application does not demonstrate strong use of TDD.

### 4. Encapsulation / Breaking Logic into Components

* 4: Application is expertly divided into logical components each with a clear, single responsibility.
* 3: Application effectively breaks logical components apart but breaks the principle of SRP.
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear.
* 1: Application logic shows poor decomposition with too much logic mashed together.

### 5. Functional Expectations

* 4: Application fulfills all expectations of iterations 1 - 5 with no bugs, crashes, or missing functionality *as well as* an extensions.
* 3: Application fulfills expectations of iterations 1 - 5 with no bugs, crashes, or missing functionality.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.
