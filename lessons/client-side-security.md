---
title: Intro to Client-Side Security
length: 90
module: 4
tags: client-side, javascript, security
---

## Goals

By the end of this lesson, you will know/be able to:

* Speak to the reasons why client-side JavaScript is vulnerable from a security standpoint
* Understand the flow of validating data across the client-side, server-side and database level

The lesson is not meant to be a comprehensive overview of every security technique out there - but should give you the foundation to be able to recognize a security code smell and research better implementations.

## What Are We Talking About When We Talk About Security?

Sadly, the world is full of people exploiting code vulnerabilities for fun and profit.

#### Theft of Proprietary Code

  A developer creates a game that sweeps the nation. Within a week, dozens versions of that game with suspiciously similar interfaces (but slightly different graphics) start showing up all over the internet.

#### Theft of Data

  A developer creates an application that uses AWS API secrets and keys. Overnight, someone finds the key and uses the developers account to spin up a bill for $6,000 worth of usage.

  A user has private photos stored on a website/service through a process that is on autosync. They have an interface where they can see those photos, but only choose to share certain photos with the world. Someone figures out the endpoint that was being used to share the private photos, fakes approval, and takes some deeply personal photos that the user uploaded unintentionally and makes them public

  A website has many users sign up with an email and password. Someone gets access to the database and is able to pull out all user passwords. Many of the websites users use the same password for things like their bank account.

#### Falsifying Information

  A trusted news organization is hacked and for a brief moment, their social media says that there has been an attack on the President. It is corrected in minutes, but the Dow plunges as a result.

  Control systems of a major factory are accessible with password and username. Someone creates a false login page, meant to look exactly like the employee page redirects users visiting the main page to that site. Within hours, there is an unscheduled shutdown of the furnaces, causing major damage.

### Your Turn

In groups of three, pick one of the following articles to read:

- [Scenario 1](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight)
- [Scenario 2](https://www.theguardian.com/business/2013/apr/23/ap-tweet-hack-wall-street-freefall)
- Scenario 3 [Small Example](http://www.html5gamedevs.com/topic/26341-have-your-games-been-stolen-check-here/) & [Large Example](https://arstechnica.com/gaming/2016/06/what-drove-one-half-life-2-super-fan-to-hack-into-valves-servers/)
- [Scenario 4](http://www.bbc.com/news/technology-30575104)
- [Scendario 5](https://petapixel.com/2014/07/31/cautionary-tale-bug-dropbox-permanently-deleted-8000-photos/)
- Scenario 6 [Watch (pertinant part at 0:45](https://www.youtube.com/watch?v=-hxX_Q5CnaA) & [Read](http://www.businessinsider.com/when-amazon-launched-a-bug-allowed-users-to-get-paid-by-the-company-2011-10)
- Scenario 7 [Example 1](http://www.theregister.co.uk/2011/05/06/syria_fake_certificate_facebook_attack/) & [Example 2](https://arstechnica.com/security/2015/04/meet-great-cannon-the-man-in-the-middle-weapon-china-used-on-github/)
- Scenario 8 [Example 1](https://www.7xter.com/2015/03/how-i-exposed-your-private-photos.html) & [Example 2](https://www.7xter.com/2015/02/how-i-hacked-your-facebook-photos.html)

**Read**
  - Read the scenario you pick
  - Do additional research, time permitting, into the event or events.

**Small Group Discussion**

Discuss the following questions:

- Quickly summarize what happened
- What is your theory on what specifically went wrong?
  - Was this a code issue? A human error? Both?
  - What technology was being used?
- What methods were suggested in the reading to prevent this from happening?
- What other similar issues have you heard of happening?

**Share Out**

- Pick one hero from your group to share what you found

![image of hacked road sign which says 'godzilla attack!'](/assets/images/lessons/client-side-security/godzilla.jpg)

## Why is Client-Side JavaScript Particularly Vulnerable?

It is, for all intents and purposes, impossible to obfuscate or hide JavaScript running in a browser.

Read [this article](http://www.htmlgoodies.com/beyond/article.php/3875651/Web-Developer-Class-How-to-Hide-your-Source-Code.htm) for more context on how hard it is to obfuscate client-side JavaScript.

The client, however, handles all of the interactions between your users and your software. So how do you make sure data coming in from a user is actually valid? How do you protect sensitive data as it travels through your application?

## The Data Validation Waterfall

### Client-Side Validation

  **Best Practice**

  Should be visual, simple validations to give user quick feedback.

  **Tech Recommendations:**

  Use things like [HTML5 input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) and [pattern attributes](https://webdesign.tutsplus.com/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145).

  **Dangers**

  Never depend on a client-side validation working. UI can be abused, and sometimes the user is not even using the browser (think curl or using postman).

  The mission critical validation should happen on a server.

  Avoid having heavy validation on the client-side when you don't need it to prevent mismatch in validation rules across your server and client. The less rules you have on the client, the less places you have to change code when you change your validations.

  Keep all your validations in one place - do NOT sprinkle them throughout your components/JS view related files.

### Server-Side Validation

  **Everything is Suspect**

  Assume all data coming in from the UI is suspect and have server level validations cross check this information.

  This is also helps you protect your business logic. Since all client-side code can be viewed, if you hide the business logic in the server, you can protect it from theft.

  **Use Environment Variables**

  Store your credentials and secrets in a file separate from the code that gets committed to Github or equivalent. Use environment variables: [the logic](https://12factor.net/config)

  On heroku: [Use the CLI](https://devcenter.heroku.com/articles/config-vars#setting-up-config-vars-for-a-deployed-application) or [the interface](https://devcenter.heroku.com/articles/config-vars)

  [On Amazon EC2](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).

  But wait, you might be asking, I just pushed my Firebase credentials up to Github? Am I good? Well, check out the 'web' portion of the [Firebase Launch Checklist](https://firebase.google.com/support/guides/launch-checklist).

  **HTTP vs HTTPS**

  HTTP is HyperText Transfer Protocol while HTTPS is HyperText Transfer Protocol Secure.

  All communications sent over HTTP connections are in 'plain text' and can be read by anyone who can interrupt the communication.

  HTTPS, however, usses Secure Sockets Layer (SSL) to transmit information. In order to make an HTTPS connection to a webpage, your website needs an 'SSL certificate'. When this is received, the browser and your website begin a 'SSL handshake', generate secrets and establish a secure connection.

  If you use services like Firebase and Heroku, these things are handled for you. But it gets tricker when you want to use a custom domain.

  [Let's Encrypt](https://letsencrypt.org/how-it-works/) is your friend.

  **Authentication & Web Tokens**

  You got to play around with JWTs yesterday, but here is a [quick intro to jwt](https://jwt.io/introduction/).

  Basically, modern authentication of users depends on handshakes and encryption. Consider this a handwave.

  **Same-Origin Policy & Cross-Origin Resource Sharing**

  The [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) permits `permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin.`

  This worked great at preventing malicious scripts for a while - but now many of use server REST APIs from different origins and this became a problem that we started solving with hacks. Many of said hacks were unsecure.

  [CORS](https://enable-cors.org/) enables you to safely overwrite and relax these rules for specific whitelisted domains.

### Database Validations

  **Best Practice**

  Never fully trust your developers. Before data can be stored in the database, do some base level data validation. And never store plain text passwords in your database.

  **Tech Recommendations:**

  Any major database will include methods and constraints to validate data quickly prior to storage.

  It's beyond the scope of this lesson to get into them specifically - but know that there are simple ways to do things like 'hey database, refuse to accept `null` values in this column of the table'.

  [Postgresql](http://nathanmlong.com/2016/01/protect-your-data-with-postgresql-constraints/)

  [Firebase](https://firebase.google.com/docs/reference/security/database/)

  **Dangers**

  Never store plain text data in your database

  Read this [fun whitepaper](http://www.bailis.org/papers/feral-sigmod2015.pdf)

![image of bug in a game](https://i.kinja-img.com/gawker-media/image/upload/s--2GheXUYU--/c_fit,fl_progressive,q_80,w_636/g7xvvnrysshrszatkuxm.jpg)

## 'In Summation'

When we talk about security, you will notice that Googling becomes harder and harder. Securing websites is something we all deal with, right? Why, then, is it so hard to get a straight answer on what I should do?

One theory: it's really, really, very, very hard to understand fully.

Developers who specialize in security are few and far between. They get paid a lot of money. They also have a lot of responsibility.

Let these larger points drive the way you approach security in the applications that you build.

#### Always Follow Best Practices by Default

If 3 out of 4 senior developers say something is a bad idea, not saying you shouldn't do it, but you're going to need to spend a whole lot of time researching why you should.

Things like CORS and JWTs came about because many developers came across the same problem many times and aggregated their best practices. That should be how you undertake breaking a best practice

#### Don't Ever Roll Your Own Authentication

This isn't really a general rule, but it's such a common mistake that developers make.

There will come a time when you think you can do a better job than Auth0 or OmniAuth or etc, etc, etc.

Don't do it. Trust me. It's above your paygrade.

#### The Pull Request Process ( when done correctly ) Protects Us

If more than one person reviews code before it is merged, it means:
    - The chances of a bug being introduced are lower
    - If a bug is introduced, the number of people familiar with the code who can fix it is higher
    - An honest mistake won't get one developer in hot water, since the team approved the work
