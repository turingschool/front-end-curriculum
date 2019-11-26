---
title: Balancing Act - Week 2
---

## Week 2

During Week 2, Balancing Act will provide you with some extra practice opportunities on concepts you've used a few times and also introduces some that may be brand new! If you look at the Week 2 calendar you'll see that a lesson is scheduled for each of the new concepts.

The structure of the project requirements will be formatted a bit differently from here on out. During Week 1, we reminded you to commit to GitHub and gave a little more step-by-step guidance than you'll have from here on out. That's because you're ready for it. There are also no rubrics anymore since after Week 1 this is not formally evaluated. We recommend you reference the rubrics from your paired and group projects for guidance on what to focus on. Even though this won't be formally evaluated, your instructor can and will check in, and will be happy to provide more formal feedback upon request!

(If you are working on this over Thanksgiving and have clarifying questions about what is required, etc. we will talk about this as a class during Week 2!)

<section class="call-to-action">
## New Transaction

Let's create a small piece of functionality on the New Transaction form.

First, make sure you have the necessary drop-down options:
- **Type of Transaction:** Inflow, Outflow
- **Category:** Groceries, Bills, Fun Money, Paycheck (feel free to add more/modify!)
- **Account From:** Checking, Savings, Amazon Credit, Southwest Credit (these should match the accounts listed on your dashboard)

Now, implement the following user stories:

```
As a user,
- when I complete the new transaction form and click "Log Expense",
- I see a visual confirmation (banner) that my transaction has been logged
- so that I know my information was submitted
```

```
As a user,
- when I complete the new transaction form and click "Log Expense",
- and when I click the small "x" icon on the right side of that banner
- I see the banner disappear
- so that it's out of my way
```

```
As a user,
- when I click the "Log Expense" button without completing one of the required input fields,
- a visual indicator will be provided for any/all input that is missing user information
- so that I know what I need to do in order to continue
```

```
As a user,
- when I click the "Log Expense" button without completing one of the required input fields,
- then fill out the empty input,
- the visual indicator for that give input will disappear
- so that I know I did what was necessary to meet the requirements and continue
```

"Where is this data going?" you may ask. Great question - for now, nowhere. Building these user stories out now _will_ set you up for later work that will ultimately lead to a newly entered transaction appearing on the list of all transactions.

Note that only 2 of the 6 inputs are used for the user stories here. Later in the project, we'll use them all!
</section>

### Comp

You are provided with the comp for the confirmation banner, but **you can choose** how to let the user know that they failed to complete one or more required fields.

<img class="medium" src="../assets/balancing-act/new-transaction-banner.png" alt="New transaction banner">

<section class="call-to-action">
## Implementing Flexbox

Refactor the HTML and CSS of at least one part of your current project to utilize Flexbox. (Notice that this prompt is a little bit of a Choose Your Own Adventure - you can re-do just one piece of layout, or the entire thing! No pressure either way, it's just meant to give you a little more time with Flexbox.)
</section>

<section class="call-to-action">
## Profile Page

Content coming soon
</section>

<!-- Profile page
- have them build out profile page, nav works the same for it.
- name of user - save that in a variable and it should match the banner on dashboard page
- form to add an account. -->

<section class="call-to-action">
## Account or Transaction Class

Content coming soon
</section>
