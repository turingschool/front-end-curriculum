---
title: Refactoring Guidelines
length:
tags: javascript, js, array, object, 
---

Look over code and get a feel for the organization of the entire project.

Start at the root index.js and move through it's dependencies.

You might find it useful to draw a dependancy tree of the files and how they relate to each other.

After you have a general idea of how the project is organized, start at the root index.js and go through the code again. This time write comments where you see potential areas for improvement.


## Things we are looking for...

- Code in the wrong place, stuff that should be done in a different class / file.
- Repetitive code that should be functions
- long if/else statements that could be moved to a map/config
- long if/else statements that could be moved into a loop
- hardcoded strings/numbers that can be moved into variables


After every change you make, run your tests and run the program to make sure everything still works.