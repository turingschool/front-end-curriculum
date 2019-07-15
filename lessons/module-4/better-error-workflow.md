---
title: Better Error Workflow
length: 15 mins
module: 4
tags: workflow
---

## The Problem

Let’s a specific example of this migrations file, from the Express with Knex lesson.

```javascript
module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/secrets',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/secrets_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
};
```

Multiple projects teams got hung up on errors related to this sample code. 

The reason is not that the code is bad, but because many students took the code as is and didn’t try to understand it line by line.

We observed that when students got an error, they went straight to Google - however most errors resulting from taking this code directly aren’t something you can solve by searching because they are related specifically to the code and not common errors.

In order to resolve most errors caused by this code, you need to understand what this example code is actually doing.

You would need to understand that this code is setting up database behavior per environment. 

So if you could no longer run your tests, you would need to understand that this line of code `connection:'postgres://localhost/secret`' says you should use a postgresql database named `secrets` and that this line of code `connection:'postgres://localhost/secrets_test` defines a different database to be used for the testing environment.

Similarly, to be able to migrate data, you would need to understand that this line of code:

``
     seeds: {
      directory: './db/seeds/dev'
    },
```

specifies the location of a file that is used to seed the database. So in order to seed the database, you need to have a file in that location.

## The Solution

To improve our workflow with an error, we need to work on improving the following skills:

#### Developing a theory of why something might be giving an error before researching 

#### Knowing when to leave Google and to start reading documentation.

On the job, these two skills will be the difference from being frustrated often or feeling self sufficient.

## Workflow

We would like to suggest that you work on trying to the following work flow on the next error that stumps you.

#### Theory First

Sit back and come up with a theory on where the error is coming from in the code and what it might be caused by.

Test your theory on the where & why 

Start by looking at the unstaged code diff to see what code you changed. Note: committing every time you get something working makes this much easier to do.

You could try systematically commenting out code to narrow down which code causes the error. 

#### Working from Theory: Understand the Code

Once you have isolated where you think the error is coming from ask yourself if you fully understand the code in that area

If it’s code related to a library or specific technology like Knex, Node, etc, pull up the documentation.

Make sure you understand, within reason, what the technology and the code you are using to interface with it is trying to do.

#### Working from a Theory: Rule Out Known Issues

If you suspect that the issue is not from your code, but might be a known issue with a library - do a quick Google search on the error code.

It’s important to Google **after you already have some kind of theory** to avoid rabbit holes

Skim the top results **before** clicking any links

Look over **two to three** links max to see if the error is a known issue or outside of your control.

Try a few of the solutions from your research to test and verify if they seem to be the problem.

If the solutions you try do not fix the problem or get you close **revert those changes immediately** to avoid causing other bugs.

#### Working from a Theory: Try Things Out

If you have some strong theories: test them out

Implement a change, see what that changes, and repeat.

Be careful to revert changes you make as you go, so you don’t accidently add more bugs that will obscure the original cause of the error.

#### Still Stumped: Ask for Help

Once you have done that level of debugging, if you still don’t have the answer - **now is the time to ask for help**. 

The debugging process above should dramatically improve the asking for help process because instead of saying:


> I got this error and here is a link to my repo - any ideas?

You can instead say something like: 

> I am getting this error

> Here is the specific code that I introduced which caused the error

> My theory on why this is happening is _x_ based on _y_

> I have tried the following things already

## Wrap Up

As you continue developing, you will develop a feeling for which debugging approach you should take and when. You'll become an 'error whisperer'. But before that happens, taking an approach like the one above will dramatically cut down the amount of time you spend on getting past errors.