# Setting up eslint
(Non-React projects)

The following directions can also be found in the docs for ESLint [here](https://eslint.org/docs/user-guide/getting-started)

1. Make sure that you have initialized your directory for npm by changing into that directory and running:

`npm init --yes`

2. Save ESLint as a dev dependency locally:

`npm install eslint --save-dev`

3. Set up a config file:

`./node_modules/.bin/eslint --init`

Follow the prompt for answering the questions about your style, selecting whatever is listed as the default. This will automatically create an `.eslintrc.js` in the root of your directory

Replace whatever is initialized in your eslintrc file with the following:

```js
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": { "sourceType": "module" },
  "rules": {
    "eqeqeq": ["error", "always"],
    "brace-style": "error",
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "curly": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "indent": ["warn", 2],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["warn", 80],
    "new-cap": ["error", { "newIsCap": true }],
    "object-shorthand": ["error", "always"],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
    "space-infix-ops": ["error", { "int32Hint": false }]
  }
}
```

After that, you can run ESLint in your project’s root directory like this:

`./node_modules/.bin/eslint yourfile.js`


### Add to package.json

Additionally, you can also set up a script to run in your package.json so that you're not having to type out the file path every single time.

```
"scripts": {
  // ...,
  "eslint": "./node_modules/eslint/bin/eslint your.file.js"
},
```