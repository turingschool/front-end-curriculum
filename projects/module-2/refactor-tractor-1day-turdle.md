# Refactor Tractor - 1 Day Challenge - Turdle

## Why?

## Rules
- no rules - add whatever variables you need, change anything

## Set Up
cloning

## Iteration 0
Play wordle
play Turdle
 - Known bugs:
  - winner
  - stats
look at code base
add console logs
add comments

## Iteration 1 - Winning Game
The functionality for when a user guesses the correct word is incomplete. Currently, the letters turn green and a message logs to the console. Update the codebase so the following happens when a user guesses the correct word:
- A message appears on the screen letting the user know they have won.
- A message appears on the screen letting the user know how many guesses it took them to win.
- The messages disappear after 4 seconds.
- The game board clears of all previous guesses.
- The focus is put back on the top left square of the game board (as it does on page load).
- The key on the left side of the screen resets.
- You should not force a page reload to make this happen.

## Iteration 2 - GET Words
Currently, the words are coming from the `words.js` file. Update the codebase so that you are fetching that data. You should be able to delete `words.js` after this iteration without the user experience being affected. [Here is a link to the backend repo.](https://github.com/turingschool-examples/turdle-api) Follow the instructions closely in the README.

## Iteration 3 - Track Game Stats
Currently, the `stats` page does not show any actual data. Update the codebase so that the following statistics are tracked:
- The total number of games the user has played
- The percentage of games that the user has won (they guessed the correct word within 6 guesses)
- The average number of attempts it has taken the user to win the game  

NOTE: Don't POST yet! At this point, this data does not need to persist between page refreshes. The data only needs to exist within each user session. Meaning, if the user closes the page or refreshes the page, it is totally fine that the data will be lost.

## Iteration 4 - POST Game Stats (spicy)
Now let's impletment a POST so that the game stats persist even when the application is closed or refreshed. Update the codebase so that you are POSTing the game stats and the GETting the stats from the server. You should be able to refresh the app and see the stats persist. [You'll use the same backend repo as iteration 2.](https://github.com/turingschool-examples/turdle-api) Follow the instructions closely in the README.

If you need a refresher on POSTing, review [the POST lesson](https://frontend.turing.edu/lessons/module-2/network-requests-posts.html)!

## Iteration 5 - Choose Your Own Adventure (extension)
You can choose whatever feature you'd like to add to this application. We've listed some idea below, but feel free to think outside of the box here!
- Refactor the codebase to use a `Guess` and `Game` class
- Add some unit testing
- Create a second color scheme and allow the user to toggle between them ([Here's an awesome example](https://www.joshwcomeau.com/) - click the sun icon in the top right corner!)
- Create an easy version of the game where there are no words with double letters (like `pools` or `canal`)
