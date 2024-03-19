---
title: Module 2 Review
tags: inheritance, fetch, OOP, arrays, prototypes, scope, context, testing
module: 3
---

## Array Prototypes

You're going to continue working with datasets throughout the rest of your career as a front-end developer (and certainly in mod 3).

Working with this data:

```js
const someNews = [
  {title: 'Artificial Tongue Is Bad News for Counterfeit Whisky',
   intro: 'Counterfeit whisky is a big problem—hence why researchers in Scotland have invented a "tongue" better able to distinguish between fake and authentic bottles than the human equivalent...  ',
   read: true 
  },
  {title: 'When and where to watch the Perseid meteor shower peak tonight',
   intro: 'Stargazers can catch a brilliant sight in the night sky as the annual Perseid meteor shower will reach its peak Monday night into Tuesday. However, it will face bright interference this year from the moon, which is close to being completely full, NASA said...',
   read: false 
  },
  {title: 'Supercomputer Generates Virtual Universes to Study Galaxy Formation',
   intro: 'We’re still not sure exactly how our Milky Way formed. But scientists at the University of Arizona (UA) are one step closer to finding out, thanks to supercomputer simulations...',
   read: false 
  },
  {title: 'Child-sized parrots once roamed New Zealand',
   intro: 'Parrots are popular pets today, and you don’t have to look far on YouTube to find charming videos of tropical birds doing adorable things. They’re fun animals, and their small size makes them appealing to potential owners. Fossils from New Zealand reveal the existence of an ancient parrot that would definitely not have been a good fit for an apartment-dweller...',
   read: true 
  },
  {title: 'Why quitting tech and social media is harder than quitting cigarettes',
   intro: 'Struggling to put that smartphone down? Tech columnist Jennifer Jolly offers some tips and tools you can use to kick the habit...',
   read: true 
  },
  {title: 'How to make your fitness tracker count steps more accurately',
   intro: 'If you’re one of the many people who wears a fitness band or smartwatch to count your steps, you may not be aware of one inescapable fact: they lie. Just because they tell you that you’ve reached your daily goal doesn’t mean that you actually took that many steps...',
   read: false 
  },
  {title: 'BlackRock Fund’s First Big Private-Equity Deal Is a Sign of What’s to Come',
   intro: 'BlackRock Inc. declared its ambitions in private equity with the first deal from a new closely watched fund. The money manager on Sunday said it purchased a stake in Authentic Brands Group, which owns brands including Sports Illustrated, Juicy Couture and Nine West, and controls licensing rights of celebrity brands from Muhammad Ali to Marilyn Monroe...',
   read: false 
  }
];
```

Use array prototype methods to:

* Get all of the news items that have been read - then get all that have _not_ been read
* Create a new array of only the news titles
* Count how many news articles have not been read

## Fetch

HTTP requests are very powerful for retrieving data that you want to use in your applications. Many of your projects will utilize `fetch` to make HTTP requests for data from outside of your own application.

Also, reading documentation is _very_ important as you continue through Turing and into your career.

Get some advice using [this API](https://api.adviceslip.com/). Write a `fetch` call in the browser console (dev tools) and `console.log` some advice.

## Inheritance

React components use inheritance behind the scenes. So it's important to know the mechanics of inheritance.

Create a parent and two child classes that inherit from the parent class. Make sure there are at least one property and method shared in the child class.

## Scope

Of course you will continue to see places where block and functional scope are used.

Create your own scenarios where block and function scope are shown. They can be two separate pieces of code.

## Testing

What are the four phases of testing you saw in module 2? (Maybe you only used three, but that's ok.)

How do you know what to test?

