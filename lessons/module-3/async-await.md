---
title: Async Await
length: 2 hours
module: 3
tags: javascript, asynchronous
---

Why shouldn’t or can’t we do something like this? Given that we might expect to console.log() the data from the body of the response…

```js
const response = fetch(someURL);
const data = response.json();
console.log(data);
```

Sometime we want our code to be more synchronous like this, but asynchronous JavaScript doesn’t really work like this…

Bring in `async await`. Await can only be used in a function that has async around it. An async function still returns a promise!

Do some research on async and await. First await, then async. Go through some resources on your own. Then pair up and talk about what you researched.

What did you find about these keywords?

How can we refactor something like this to use async await?

```js
const someData = fetch(someURL)
  .then(response => response.json())
  .then(data => return data)
  .catch(err => console.error(err));
```

```js
const fetchData = async () => {
  const response = await fetch(‘https://api.adviceslip.com/advice’);
  const data = await response.json();
  console.log(data.advice.slip)
};
```

Or utilize the promise returned from the `async` function:

```js
const fetchData = async () => {
  const response = await fetch(‘https://api.adviceslip.com/advice’);
  const data = await response.json();
  return data.advice.slip;
};

fetchData().then(data => console.log(data));
```

What about error handling? Where did the catch go?? `try catch`

```js
const fetchAdvice = async () => {
  try {
    // Path is missing 'd' in 'advice'
    let response = await fetch('https://api.adviceslip.com/avice');
    if(!response.ok) {
      console.log(response.status);
      throw new Error('Weird error');
    }
    let data = await response.json();
    console.log(data.slip.advice);
  }
  catch (e) {
    console.log(e.message);
  }
};

fetchAdvice();
```
