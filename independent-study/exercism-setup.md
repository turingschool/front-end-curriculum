---
title: Exercism Setup
length: 0
tags: exercism, setup
---

# Setup [Exercisms](http://exercism.io)
We introduce exercisms later in the module. For now, we're just getting things setup.

- Visit [exercism.io](http://exercism.io/). In the top right corner, click "Log in with Github" and follow the authentication steps.
- In your terminal, install jasmine-node (a javascript testing suite): ```npm install jasmine-node -g```
- In your terminal, using brew, install the exercism CLI: ```brew install exercism```
- Verify that it was installed properly by running: ```exercism --version``` (If there was a problem you will get an error message saying command not found.)
- Go back to your exercism account online, under your profile, in "API Key", you will find a configuration command that you need to type into your terminal. Copy that command and paste it into your terminal.
- In your terminal, navigate to the exercism directory: ```cd exercism```
- Now type ```exercism fetch javascript```
- Now type ```cd javascript```
- Now type ```cd hello-world```
- Now type ```jasmine-node .```
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
- If you get anything else, let an instructor know and we'll come trouble-shoot.
- If you are successful, cd back to your root directory: ```cd ~```
