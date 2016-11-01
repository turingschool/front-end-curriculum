---
title: Regex Fun Times
length: 60 minutes
module: 3
tags: regular expressions, regex
---

## Goals

By the end of this lesson, you will know/be able to:

* Understand the pros and cons of using a regular expression
* Practice using a regex pattern matcher
* Practice testing and writing a regex matcher in JavaScript

## Whatsa Regex?

A regular expression (usually referred to as a `regex` or `regexp`) is a sequence of characters that make up a search pattern.

![regex](http://i.imgur.com/4W5EHwC.png)

(Attribution: [XKDC](http://xkcd.com/))

`Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems.`

## Understanding a Long Regular Expression

```
/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi
```

Above is a pattern for a simple email matcher. If we copy and paste this regex into a site like [regex101](https://regex101.com/) - we can start to try and figure out what's going on.

### The Base Layer

Let's looks specifically at the set up for this regex pattern.

```
/^$/gi
```

| Character | Description                                             |
|-----------|---------------------------------------------------------|
| `/`       | Indicates the beginning of a Regex pattern      |
| `^`       | Anchor: Indicates that the match must be at the begining of the string     |
| `$`       | Anchor: Indicates that the match must reach to the end of the string     |
| `/`       | Indicates the end of a Regex pattern                    |
| `g`       | Flag: Outside the regex meaning 'global'. That means it will test the pattern against all possible matches in a string. Without this flag, the regex will only test the first match it finds and then stop.     |
| `i`       | Flag: Match is case insensitive.         |

#### Practice

Open [regex101](www.regex101.com)

@TODO: Include test examples with basic strings at end and begining of a regex

### Capturing a Character

```
  ([a-zA-Z]|[0-9])
```

| Character | Description                                             |
|-----------|---------------------------------------------------------|
| `()`      | Specifies the begining of a grouping. For example, `dog|dig` and `d(o|i)g` can both be used to capture `dog` or `dig` strings.        |
| `[]`      | Creates a character class     |
| `-`       | Is a range - therefor...                   |
| `g`       | Flag: Outside the regex meaning 'global'. That means it will test the pattern against all possible matches in a string. Without this flag, the regex will only test the first match it finds and then stop.     |
| `a-z`     | Is any character in the range between a through z         |
|`[a-zA-Z]` | So put together, this character class would match any letter `a` through `z`, case insensitive |
| `[0-9]`   | A character group that would match any character in a range between 0 and 9 |

`|`: is a Boolean 'or'

So all put together, `([a-zA-Z]|[0-9])` matches any letter of number.

### Matching Multiple times

```
  (([a-zA-Z]|[0-9])|([-]|[_]|[.]))+
```

We can now see that this regex pattern nests a capture group within another capture group to find `any letter or number` or `a -, _, or .`

The interesting piece here is the character at the very end: `+`

This is a quantifier which targets the capture group and says 'repeat previous token 1 to infinite times' in your definition of a match.

#### Quantifiers

| Character | Description                                             |
|-----------|---------------------------------------------------------|
| `?`       | May include _zero or one_ occurances of the preceding element    |
| `* `      | May include _zero, one or many_ occurances of the preceding element     |
| `+`       | Must include _one or many_ occurances of the preceding element            |
| `{n}`     | Must match the preceding element _n times_     |
| `{min,}`  | Must match the preceding element _atleast min or more times_         |
| `{min,max}` | Must match the preceding element _atleast min times but not more than max times |
| `{,max}`   | Must match the preceding element _no more that max times_ |

@TODO: Include practice lines including `cats?` matching cat or cats

### Final Breakdown

```
/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi
```

`/^`: Start a Regular Expression at the begining of the string

`(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+`: Match any letter, number or -, _, . one or more times until...

`[@]`: Matching a `@` symbol

`(([a-zA-Z0-9])|([-])){2,63}`: Match any letter, number or `-` 2 to 63 times... [why 63?](http://stackoverflow.com/questions/9238640/how-long-can-a-tld-possibly-be/9239264#9239264)

`[.]`: Match a period

`(([a-zA-Z0-9]){2,63})+`: Match any letter or number 2 to 63 times, one or many times.

`$/`: Anchor this match to the end of the string.

`gi`: And make it a global and case insensitive match

### Discussion

- Does this regex seem like it could be refactored?
- How could we break this regular expression?
- Should we even use this?!
  - [A previously compliant version](http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html)
  - [Relevant Post]( https://davidcel.is/posts/stop-validating-email-addresses-with-regex/)

## Practice: In JavaScript

Regular Expressions are awesome.

They are also really, really, really, really, really easy to get wrong.

Before we go further, I need you, the reader, to repeat the following warning in your head.

```
If you include a regular expression in your code, you MUST also write minimum 3 unit tests. A happy path, as sad path and a bizarre path.
```

I don't care where you're putting the regular expression. 

Seriously. 

```
If you include a regular expression in your code, you MUST also write minimum 3 unit tests.
```

You can say it outloud if you want.

```
If you include a regular expression in your code, you MUST also write minimum 3 unit tests.
```

@TODO: How to Use in JavaScript

## Practice: RegexCrosswords

A regular expression, especially a gnarly one like the email validator above, can be intimidating. The best way to get better at writing regular expression patterns, however, is to practice.

- Open the [Regex Crossword](https://regexcrossword.com/) site
- Play through the first tutorial level
- If you get stuck, copy part of the pattern into [Regex101](https://regex101.com)
- How far can you get in 15 minutes?

## Practice: Regex Golf

XKCD likes to write Regex jokes (and subsequently explain them in a format that is really excellent and informative). Check out this [comic](https://www.explainxkcd.com/wiki/index.php/1313:_Regex_Golf) and explanation.

[Here is an implementation of Regex Golf](http://regex.alf.nu/)

# Resources and Next Steps

[MDN Has an Excellent Guide for JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Beginner & Intermediate Level

- [No but seriously, read this XKCD comic explanation, it's real good](https://www.explainxkcd.com/wiki/index.php/1313:_Regex_Golf)
- [Regex Crosswords](https://regexcrossword.com/)
- [Regex101](https://regex101.com/)
- [Intro to Regular Expressions by Michael Fitzgeral](
http://www.amazon.com/Introducing-Regular-Expressions-ebook/dp/B008K9OGDA/ref=sr_1_2?ie=UTF8&qid=1374171971&sr=8-2&keywords=Regular+Expressions)

## Advanced

- @TODO: Advanced JS resource

- ["Finite State Machines and Regular Expressions" by Eli Bendersky](http://www.gamedev.net/page/resources/_/technical/general-programming/finite-state-machines-and-regular-expressions-r3176)
