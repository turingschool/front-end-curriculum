---
title: Complete-Me
---

## What is a trie?

A `trie` is a data structure in computer science. The word `trie` is derived from the word retrieval (as in re-`trie`-val). So catchy 🤓!

Now there are many types of `tries` and one you will hear a lot about is the `binary search trie`. It's like a linked list the only difference is that each `node` has a left and right `node` attached to it.

The benefits of something like a `trie` is that it makes dealing with large sets of data easier to handle.

## What do you mean by data structure?

I'm not the most organized human being as you've noticed. My wife who is pretty amazing is. She has files stored in folders, she has spread sheets, and she knows where everything typically is.

I've always struggled with that. Organizing my things in way that makes grabbing something or finding something easily has kind of been difficult for me.

Sometimes what I tend to do is put all the things in one place. Just because everything that is important is found in a single place doesn't mean it's optimal. If me and my wife were to have a race on retrieve a specific form, or calendar date I'm coming in last place.

We are currently doing things that are similar inside of our programs. We find something that is important and we store it inside of a data structure. In our case that data-structure is an array. In some cases it also can be saved inside of an object. Now as our data set grows it can become more and more difficult to manage that information.

Array's are great but what you will find is that they can get kind of slow because you are only going in a straight line. You can do somethings to optimize the speed of traversing through the array but what you will notice is that because the data set is not organized optimally it can lead to some problems.

You are essentially sorting through information that can typically be ruled out. It feels like keeping all your important documents in one folder instead of sorting it out into a parts or pieces.


Consider the following gif.

![](https://i.gyazo.com/77f415128f0ea9ae46b80a61a127d9dc.gif)

If we structure our data in a way that it becomes easier to access all of a sudden pulling information out of a large set of data becomes a lot easier and performant. We can rule out data that doesn't have to be sifted through or looked at. I can essentially look at one section for the information I need.

## Let's talk about a prefix trie

Whats really great about a prefix trie is that every parent node will typically have a node for every possible answer. So in our case if we're talking about a prefix trie each node can have up to 26 nodes (each for letter in the alphabet). If I was looking to add names to my trie it would look like this.

           [ root ]
            /     \
           .       .
          /         \
         [a]        [e]
        /   \       /  \
      [m . . n]   [m  . z]
       |     |     |    |
      [y]   [n]   [m]  [r]  
       |     |     |   
      [a]   [a]   [a]  
          /  |  \      
        [b . i . l]
         |   |   |
        [e] [k] [i]
         |   |   |
        [l] [a] [s]
         |       |
        [l]     [a]  
         |
        [e]

In our example here we have two parent nodes. `a` and `e` they have children nodes of `m`, `n`, `m`, `z`. And it continues to trickle down.


## Complete me

Everybody uses auto complete.You can love it or you can hate it but ultimately you're going to use it. Sometimes it's helpful and sometimes it's just annoying. In this project you are going to be building a low level version of an auto complete system in javascript.

## Requirements

## Phase 1

The first thing your `trie` should be able to do is take in a word. It should also keep a count of how many words have been inserted.

```
import Trie from "./lib/Trie"

var completion = new Trie()

completion.insert("pizza")

completion.count()
=> 1

completion.insert('apple')

completion.count()
=> 2
```

## Phase 2
Once the words are placed into the `trie` it should be able to offer some suggestions based on a word prefix.

```
completion.suggest("piz")
=> ["pizza"]

completion.insert("pizzeria")

completion.suggest("piz")
=> ["pizza", "pizzeria"]

completion.suggest('a')
=> ["apple"]
```

## Phase 3

Our Trie won't be very useful without a good dataset to populate it. Our computers ship with a special
file containing a list of standard dictionary words.
It lives at `/usr/share/dict/words`

Using the unix utility `wc` (word count), we can see that the file
contains 235886 words:

```
$ cat /usr/share/dict/words | wc -l
=> 235886
```

We are going to load that data set into our trie.

```
const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

const completion = new CompleteMe()

completion.populate(dictionary)

completion.count()
=> 235886

completion.suggest("piz")
=> ["pize", "pizza", "pizzeria", "pizzicato", "pizzle"]
```

## Phase 4

The common gripe about autocomplete systems is that they give us
suggestions that are technically valid but not at all what we wanted.

A solution to this problem is to "train" the completion dictionary
over time based on the user's actual selections. So, if a user
consistently selects "pizza" in response to completions for "pizz",
it probably makes sense to recommend that as their first suggestion.

Your library should support a `select` method
which takes a substring and the selected suggestion. You
will need to record this selection in your trie and use it
to influence future selections to make.

Here's what that interaction model should look like:

```
const CompleteMe = require ("./lib/complete_me")
const text       = "/usr/share/dict/words"

var completion = new CompleteMe

let dictionary = fs.readFileSync(text).toString().trim().split('\n')

completion.populate(dictionary)

completion.suggest("piz")
=> ["pize", "pizza", "pizzeria", "pizzicato", "pizzle", ...]

completion.select(pizzeria")

completion.suggest("piz")
=> ["pizzeria", "pize", "pizza", "pizzicato", "pizzle", ...]

```

## Phase 5

Next week you will create a Weather App that needs an autocomplete feature.
Package your complete-me trie in a node module so that you can import it into
future projects. (Note: don't publish to npm, you can install your package from github)

## Extensions

### Front Facing Application

See if you can implement a front facing application for your `trie`. The user should be able to submit a word and then receive the suggestions on the dom.


## Evaluation Rubric

The project will be assessed with the following rubric:

### 1. Fundamental JavaScript & Style

* 4:  Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring
* 3:  Application shows strong effort towards organization, content, and refactoring
* 2:  Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring
* 1:  Application generates syntax error or crashes during execution


### 2. Test-Driven Development

* 4: Application is broken into components which are well tested in both isolation and integration using appropriate data
* 3: Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality
* 2: Application makes some use of tests, but the coverage is insufficient
* 1: Application does not demonstrate strong use of TDD

### 3. Encapsulation / Breaking Logic into Components

* 4: Application is expertly divided into logical components each with a clear, single responsibility
* 3: Application effectively breaks logical components apart but breaks the principle of SRP
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear
* 1: Application logic shows poor decomposition with too much logic mashed together

### 4. Functional Expectations

* 4: Application meets all requirements, and implements one extension properly.
* 3: Application meets all requirements as laid out per the specification.
* 2: Application runs, but does not work properly, or does not meet specifications.
* 1: Application does not run, crashes on start.

### 5. Code Sanitation

The output from ESLint shows…

* 4 - Zero complaints
* 3 - Five or fewer complaints
* 2 - Six to ten complaints
* 1 - More than ten complaints


## Additional Rescources

Take a moment and read more about Tries:

* [Tries writeup in the DSA Repo](https://github.com/turingschool/data_structures_and_algorithms/tree/master/tries)
* [Tries Wikipedia Article](https://en.wikipedia.org/wiki/Trie)


If you like watching kewl videos:

* [Tries Video](https://www.youtube.com/watch?v=zIjfhVPRZCg)
