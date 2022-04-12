---
title: Refactor Tractor | Turdle (One Day Challenge)
length: 1 day
tags: javascript, css, html, refactor
---

![turdle desktop](/assets/images/projects/turdle/turdle.png)

## Purpose
As a developer, you will most likely spend most of your time working with existing codebases. It'll be rare that you'll be starting a project from scratch like you've been doing at Turing. We'd like to provide some practice for you to get your hands into existing code. Today, you'll fix bugs, add features, refactor, and more! It might seem weird or intimidating at first, but follow the instructions closely and use all the habits and tricks you've learned so far. You can do this!  

## Guidelines
You can change the existing codebase however you see fit to accomplish the tasks ahead of you. Want to add another function? Do it! Need another variable? Make it! Hate the way an existing function is written? Refactor it! Today is all about exploration, so dig in and have fun!   

This is meant to be a solo challenge, so try your best to work through the challenges on your own. If you have questions or get stuck, you can (and SHOULD) use your notes, google, take poms, and DM your instructors. Don't stay stuck on the same thing for too long.  

This is ungraded, so there is no pressure on today and no need to rush. Get as far as you can, but keep the focus on the learning.  


## Set Up
Open up [the starter repo](https://github.com/turingschool-examples/turdle){:target='blank'} and follow the directions in the README. Complete the following iterations in order.

## Iterations
<section class="answer">
### Iteration 0 - Explore
First, if you've never played [Wordle](https://www.nytimes.com/games/wordle/index.html){:target='blank'}, take a couple of minutes to play it. This will help you understand how the general game play of Turdle is meant to work. Note that Wordle is only meant to be played once a day, so you'll only get one round of gameplay. Luckily for you, Turdle can be played as much as you'd like!   

Once you have a good idea of how Wordle works, play a few rounds of Turdle (`open index.html`). Click around the app and find all the functionality that exists so far. You might notice that some things aren't working as expected - for example, nothing happens when you lose and the game stats are missing. That's okay for now - you're going to fix those issues later 🙂  

Now that you've explored the app, it's time to explore the code. Spend some time (at least 15 minutes) exploring the existing codebase. We recommend trying to follow the logic of the gameplay in the code. Adding console.logs is a great way to check the values of variables, parameters, and function outputs. Feel free to add lots of comments to the code to help you remember all that you discover. [Here is a great article about how to digest a new codebase.](https://dev.to/ericweissman/diving-into-a-new-codebase-4b38){:target='blank'}

#### 💡 Helpful Tip

When working on this game, you might find it helpful to know the winning word. With the app open in your browser, you can use the console to print the `winningWord` variable and see what the correct word is.
</section>

<section class="answer">
### Iteration 1 - GET Words
Currently, the words are coming from the `words.js` file. Update the codebase so that you are fetching that data. You should be able to delete `words.js` after this iteration without the user experience being affected. [Here is a link to the backend repo.](https://github.com/turingschool-examples/turdle-api){:target='blank'} Follow the instructions closely in the README.
</section>

<section class="answer">
### Iteration 2 - Game Over
Currently nothing happens when a user loses the game (they do not guess the word by the 6th guess). Update the codebase so the following happens when a player loses:
- A message appears on the screen letting the user know they have lost.
- The message should disappear after 4 seconds.
- The game board clears all previous guesses.
- The focus is put back on the top left square of the game board (as it does on page load).
- The key on the left side of the screen resets so all letters are black.
- A new winning word is created.  

#### ⚠️ Important Note

You should **not** force a page reload to make this happen.

#### 💡 Helpful Tip

Check out the existing code. I bet a lot of the logic needed for this iteration is already there 👀
</section>


<section class="answer">
### Iteration 3 - Track Game Stats
Currently, the `stats` page does not show any actual data. Update the codebase so that the following statistics are tracked:
- The total number of games the user has played
- The percentage of games that the user has won
- The average number of attempts it has taken the user to win the game  

#### ⚠️ Important Note

Don't POST yet! At this point, this data does not need to persist between page refreshes. The data only needs to exist within each user session. Meaning, if the user closes the page or refreshes the page, it is totally fine that the data will be lost.
</section>

<section class="answer">
### Iteration 4 - POST Game Stats (🌶 spicy!)
Now let's impletment a POST so that the game stats persist even when the application is closed or refreshed. Update the codebase so that you are POSTing the game stats and then GETting the stats from the server. You should be able to refresh the app and see the stats persist. [You'll use the same backend repo as iteration 2.](https://github.com/turingschool-examples/turdle-api){:target='blank'} Follow the instructions closely in the README.  

#### 💡 Helpful Tip

You should POST the stats when the game is over (win or lose) and you should GET the game stats when the user clicks on the **stats** button in the nav bar.

If you need a refresher on POSTing, review [the POST lesson](https://frontend.turing.edu/lessons/module-2/network-requests-posts.html){:target='blank'}!
</section>

<section class="answer">
### Iteration 5 - Choose Your Own Adventure (extension)
You can choose whatever feature you'd like to add to this application. We've listed some ideas below, but feel free to think outside of the box here! Think about what you need more practice with, and let that determine your next move.
- Refactor the codebase to use a `Guess` and `Game` class
- Add some unit testing
- Create a second color scheme and allow the user to toggle between them ([Here's an awesome example](https://www.joshwcomeau.com/){:target='blank'} - click the sun icon in the top right corner!)
- Create an easy version of the game where there are no words with double letters (like `pools` or `canal`). Allow the user to choose which version of the game they'd like to play.
</section>
