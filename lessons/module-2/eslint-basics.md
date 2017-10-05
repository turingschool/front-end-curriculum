# Setting up eslint

create a new file name `.eslintrc` in the root of your directory.

Add the following content
```
{
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
    "es6": true
  },
  // Having a problem with one of these rules? Learn more about it here: https://eslint.org/docs/rules/
  "rules": {
    "eqeqeq": ["error", "always"],
    "getter-return": ["error", { "allowImplicit": true }],
    "indent": ["warn", 2],
    "no-template-curly-in-string": "error",
    "semi": ["error", "always"]
  },
  "globals": {
    "expect": true
  }
}
```

// save eslint globally
`npm i -g eslint`

// install locally
`npm i --save-dev eslint`

// install babel-eslint
`npm i --save-dev babel-eslint`

### Add to package.json
```
"scripts": {
  // ...,
  "eslint": "./node_modules/eslint/bin/eslint.js ./lib/*.js"
},
```
