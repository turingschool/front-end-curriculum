---
title: Exercism Setup
length: 0
tags: exercism, setup
---

Exercisms are a great way to get more reps in with a coding language that you're already comfortable with or a great way to learn a new one! Here's how you get setup.

- Visit [exercism.io](http://exercism.io/). Click "Sign Up", and then "with GitHub". Authorize exercism and then accept the terms of service and privacy policy.
- Afterwards you will see a list of languages.  Click "Javascript" because that's what we'll be focusing on in the frontend program! ;)  Then click, "join the Javascript track".
- In the beginning, select "Mentored Mode" so you can get feedback on how you can improve.
- From here, you'll see a list of tests, with the first one being unlocked for you.  Let's do this one together so you get a better understanding of how exercisms work!
- Click the first one, "Hello World", but let's wait a moment before reading the main instructions on the left side.

## Getting Setup On Our End
- First, let's get our computer setup so we can run exercisms locally!
  * On the right side of the "Hello World" exercism, you'll notice a Get Start section with the "Begin walk-through" button.
  * Follow the instructions and pick "Mac".  Then click "Yes" to using the terminal.
  * Let's install Exercism using Homebrew.  Run the command ```brew update && brew install exercism```
  * If all goes well, then click "Yes" to say that you have installed exercism.
- Now let's configure the CLI
  * Type ```exercism configure --token=[your token]``` into the command line.
  * After hitting Enter, you should get a notification that a configuration file has been written.
- Now you're all setup on your computer.  Cheers!  Let's get back to working on that test!

## Hello World Exercism
- Cool, now let's get back to it.  Read through the instructions to see what the purpose of this test is.
- Afterwards, notice on the right side you'll need to download the hello world exercism.  Copy and paste it into your terminal.
  * The command to download is: ```exercism download --exercise=hello-world --track=javascript```
  * From your root directory, type in ```cd Exercism/javascript/hello-world/```
- You'll notice a README and two javascript files.  
  * The hello-world.spec.js is where the test lies.
  * The hello-world.js is where you will solve the problem.
- To run the test, we'll need to install a package globally first.
  * In your terminal, run ```npm install -g jasmine```
  * Finally, run this command in your terminal: ```jasmine hello-world.spec.js```

- Success looks like this in your terminal:
```
F

Failures:

  1) Hello World says hello world with no name
   Message:
     Expected undefined to equal 'Hello, World!'.
   Stacktrace:
     Error: Expected undefined to equal 'Hello, World!'.
    at .<anonymous> (/Users/breethomas/exercism/javascript/hello-world/hello-world.spec.js:7:34)

Finished in 0.01 seconds
1 test, 1 assertion, 1 failure, 0 skipped
```

## Solving the Problem
- Awesome, looks pretty similar to our mythical creatures right?  Let's solve it!
- Open up the hello-world.js file with your code editor and notice they already have a lot of it set up for you.
- Try solving the problem and look below for the solution

```
var HelloWorld = function () {};

HelloWorld.prototype.hello = function () {
  return 'Hello, World!';
};

module.exports = HelloWorld;
```
- Now run the test once more: ```jasmine hello-world.spec.js```
  * If all goes well, you should not have any failed tests.  Cheers you did it!
- Finally, to submit your exercism, run the command ```exercism submit hello-world.js```
  * If you get an error saying, you are "not in a workspace", check to make sure that your Exercism directory that is holding your directories/files has a capital E in the beginning.

- Success looks like this in your terminal:
```    
Your solution has been submitted successfully.
You can complete the exercise and unlock the next core exercise at:

https://exercism.io/my/solutions/356f9f0fdd174d148a20f20add61869e
```


## Summary
Congrats on completing your first exercism!  Wait for your feedback, and then jump on to the next one.  Completing more difficult exercisms will help you flex your Javascript muscles.  Exercisms can also be a great way for you to learn other languages in the future!  Keep up the excellent work!   
