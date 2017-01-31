---
title: TDD
---

## Test Driven Development


clone dis --> https://github.com/joshuajhun/tdd
### Context

`TDD` isn't a huge part of the javascript culture. In other languages like `ruby` testing is a vital part of what developers do. Testing provides a level of truth for us to lean on when we venture into the unknown of developing some sort of feature or deliverable.

### What are unit tests?

From a molecular level a unit test is taking a specific object and checking if each cell is in working order. That if I "poke", "challenge" or "inspect" a certain piece or part of the function it is in fact working correctly. Our goal is that our tests are thorough, stable, and check that everything about our function is working correctly.

### Why do people hate testing?

For most humans going to the dentist isn't the most amazing experience in the world. It's painful and you typically have to take off work to fit in time to actually get it done.

Testing can feel like a drag. A lot of times people tend to think that testing slows down productivity, it's difficult to maintain, and it's time consuming.

Testing our application gives us a source of truth to lean on when we dive into the unknown of development. Ultimately tests don't really insure anything for us. What it does do is build confidence in our solution, it helps build a greater knowledge of our code base, and it helps us catch future and current bugs.

The more code we write the more bugs there are. There really is no way around it. If you build it they will come (the bugs that is haha). If this is in fact how the process works then the only way we can combat this is to write clean code and to test our code.

### What is TDD?

You might have heard this phrase multiple times during your time here at turing. What does it mean and why is it important. Before we discuss this I would like you take the next 5 mins and discuss with the person next to you following questions and then we will go over what we talked about.

```
a) What is TDD?
b) Have you used it before?
c) What do you think is the benefit of using this method?
```

#### But really what is it?

`TDD` stands for test driven development. It is a mindset you take while programming. It's the idea that you're letting your test drive your development. That the errors you get in the console will essentially guide you to where you need to go. As budding developers you should start be excited when you see errors because that is the code telling you it needs something specific.

Most of our development has been "Code now test later". Though that works I don't think that is the best approach to building out our functions and our applications. See writing code is hard but writing testable code is even harder.

When you write testable code it typically means that your code is doing smaller, bite sized, modular actions. The moment something is doing to much we begin to notice that testing a specific outcome becomes really difficult. A good function is something that takes an input and gives you a testable output.

Functions that are tested well typically means that we've designed our code well, we can refactor, and it communicates the story of the code effectively.

#### Is there such thing as Dream Driven Development?

Dream Driven Development is another name for TDD. It typically mean's you are writing and constructing your code in way where you make your desired expectation known (via a tests), your run the test, and then make your code accommodate that test. The idea is that we are building small pieces and parts of our application at a time. We then lean on our tests to give us confidence about us getting the correct solution .
