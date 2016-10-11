---
title: Random Numbers
---

### Generating Random Numbers
 
 JavaScript has a fun function called `Math.random()`. It will generate some crazy decimal between 0 and 1. That's cool, but what if we want to get a number between 1 and 3?
 
 Elementary! Multiply it by three!
 
 Hmm… That's still not getting us all the way there. Here are a few numbers that I generated.
 
 -- 0.983854177263559
 -- 1.2686074516508812
 -- 2.8046332459732235
 -- 2.249551404129546
 -- 2.573826382472637
 -- 2.224357980788116
 -- 1.2507436439851465
 -- 1.9703391399107906
 -- 2.48614382491825
 
 They are between 0 and just under 3. We need to add one and then round down. `Math.floor()` will round the number down.
 
 ```js
 Math.floor(2.48614382491825) === 2; // true!
 ```
 
 So, what happens if we do `Math.floor(Math.random() * 3 + 1)`?
 
 -- 2
 -- 3
 -- 1
 -- 2
 -- 3
 -- 1
 -- 3
 -- 2
 
 We did it! 🎉

 More here: [MDN Docs Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)