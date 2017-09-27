---
title: Linting and Code Sanitation
length: 60
tags: linting, code sanitation
module: 2
---

## What is linting?

Linting is the process of running a program that will analyze code for potential errors.

## What are some popular linters?

There are two popular libraries for linting code:

- [JSHint](http://jshint.com/docs/)
- [ESLint](http://eslint.org/)

There is also [JSLint](http://www.jslint.com/), but it'll hurt your feelings.

Each one of these has plugins for your editor. You should install one or both of them.

- [There are lots of editor plugins for JSHint](http://jshint.com/install/).
- [As you might expect, there are also a lot of options for ESLint](http://eslint.org/docs/user-guide/integrations).

### Configuring

JSHint and ESLint use `.jshintrc` and `.eslintrc` files, respectively, to configure their settings.

These are JSON files where you can configure different settings to your taste.

- [JSHint Rules](http://jshint.com/docs/options/)
- [ESLint Rules](http://eslint.org/docs/rules/)

ESLint also has a number of [shared configuration files](https://www.npmjs.com/browse/keyword/eslintconfig) that you can use as the basis of your project.

Here is an example `.jshintrc` file:

```json
{
  "browser": true,
  "jquery": true,
  "node": true,
  "esversion": 6,
  "camelcase": true,
  "eqeqeq": true,
  "indent": 2,
  "latedef": true,
  "maxlen": 100,
  "newcap": true,
  "quotmark": "single",
  "strict": true,
  "undef": true,
  "unused": true,
  "eqnull": true
}
```

Here is an example `.eslintrc` file:

```json
{
  "rules": {
    "quotes": [2, "single", "avoid-escape"],
    "eqeqeq": 0,
    "brace-style": [2, "stroustrup"],
    "eol-last": 0,
    "no-nested-ternary": 1,
    "padded-blocks": [1, "never"],
    "space-after-function-name": [1, "never"],
    "space-before-blocks": [1, "always"],
  }
}
```

#### Your Turn

- Taking a look at examples above, what is one rule that struck you as unfamiliar? Check the docs and see what it does.
- Go through the docs and see if you can find one rule that you feel strongly about and would definitely like to implement in your next project.

### Which one should I use?

It depends and should be something that you discuss during a DTR session at the beginning of a project.

- ESLint allows for custom rules and in Steve's opinion has a lot of power, but takes a good amount of configuration to get up and running.
- JSHint is probably simpler but doesn't have as many knobs to twist.

Honestly, you're probably equally likely to see either one in the real world. Pick whichever one you want and then choose the other one next time. You should try both at different points. If you're suffering from the paradox of choice for your next project, just go with JSHint.

## EditorConfig

There is another interested tool called [EditorConfig](http://editorconfig.org/). Many browsers support it by default, but those that don't out of the box often have plugins that do. Basically, EditorConfig allows a team to define their own settings for spaces and tabs and whatnot. Even if a developer prefers different settings, their editors will automatically match whatever the agreed upon settings are for that project when their working on the code base.

This tool is [very common in the real world](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig).

## Installing Locally

It's not polite to assume that your colleagues have these tools installed globally. Instead, you should make it a `devDependency` of your project and set up an npm script.

```
npm install eslint --save-dev
```

In `package.json` add the following to your `"scripts"` section:

```
"lint": "eslint lib/*.js" // The second part is depedent on how you've structured your project.
```

Now, anyone who has run `npm install` can run the linter using: `npm run lint`.
