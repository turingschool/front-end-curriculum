---
title: Effective GitHub Collaboration
length: 120
tags: workflow, git, github, collaboration, code review
module: 2
---

## Goals

By the end of this lesson, students should be able to:

* Give professional and actionable feedback through code reviews
* Recognize what makes a README useful
* File and organize issues with labels, that are closed through PRs


-------------------------------------------------------------


## Writing READMEs

A README is often the first thing people will see when they visit an open source project. It's vital that this document provides visitors with the information they need in a clear and efficient manner. Often times, the README determines whether or not people will work with or explore your project further.

#### Research and Talk

Take a few minutes to read through your assigned article. We will come back together as a group to discuss what you find. Here are some questions to consider as you read:

 - What do you agree with? What do you disagree with?
 - What is confusing?
 - What stands out?

* [Article 1](https://dbader.org/blog/write-a-great-readme-for-your-github-project)
* [Article 2](https://www.giacomodebidda.com/how-to-write-a-killer-readme/)
* [Article 3](https://thejunkland.com/blog/how-to-write-good-readme.html)
* [Article 4](https://ponyfoo.com/articles/readme-driven-development)

### Writing READMEs at Turing

For your projects at Turing, your goal is to demonstrate to employers that you understand the purpose of a README. Your READMEs should be set up so employers can clone things down and use your application. Other things you might want to highlight would be a small reflection of your work, how you attacked the project, how you collaborated, etc. Remember, the goal is to really showcase your work!

For your time at Turing, your README should have the following flow:

- _Abstract_ A sentence or two describing the project, with a link to the hosted version if applicable
- _Install/Setup instructions_ How someone can clone down the project and run it locally
- _Everything else_ This might include mentioning other contributors, the wireframes and design inspiration used for developing the UI, a reflection of the project as a whole, etc.

*Your abstract and installation/setup instruction should be prioritized since this is the common convention for how READMEs are set up in the wild.*


<section class="call-to-action">
#### Turn and Talk

Who would you hire from these READMES?

* [Poker Season Tracker](https://github.com/notmarkmiranda/poker_season_tracker) <!-- medium, image is not working, all text... -->
* [Narwhal Assault](https://github.com/Obleo33/game-time)
* [School Finder](https://github.com/sljohnson32/school-finder)
* [Flex Sandbox](https://github.com/Mickyfen17/flex-sandbox)
* [Club Reads](https://github.com/lindsaywparker/club-reads-frontend) <!-- high, text needs some formatting help, but pretty good -->
</section>




-------------------------------------------------------------


## Filing Issues

Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. Most projects that you work on will have a tracker of some kind (e.g. Waffle, Trello, Jira, etc.) to organize and share progress and information across the team. These trackers often connect directly to GitHub issues, but offer a more robust UI experience. For today's lesson, we are going to be working with GitHub’s built-in tracker called `Issues` - which has its own section in every repository.

Filing issues is an important part of the workflow process. It allows you to:

* keep track of what type of work needs to be done
  _common issues include bugs, security vulnerabilities, nice-to-haves_
* how that work should be prioritized
  _setting deadlines_
* who is responsible for that work
  _keep all team members 'in the know' about who is handling what_

In addition to these benefits, having an up-to-date list of issues will also indicate to potential employers that you're aware of what could be improved, and you plan on continuing to maintain the project in the future. Sometimes the code we have hosted on GitHub gets a little old and crusty, and doesn't showcase our current skills the best they could. Issues are a great way to say "I'm aware and I'm working on it!" This is especially important if you think about the projects that you are building now. By the time you exit Turing, projects that you build in Mod 1 or Mod 2 will not adequately showcase your true skill level by the time you finish Mod 4.


### Filing An Issue

The first thing you will do when you create an issue is give it a title:

![Example of a good title](/assets/images/lessons/github-issues/issues-title.png)

This is an example of a good title. Although it is concise, it is still descriptive enough to really hone in on what the issue is.

![Example of a good description](/assets/images/lessons/github-issues/issues-description.png)

This is an example of a good description. Remember, a description should serve as a reminder to yourself about all of the _pertinent_ additional details that you need to know in order to address this issue. Someone coming to your repo should be able to read the issue and understand what is going on from the description - allowing them to jump right in. Conventionally, you will see people write using full sentences, bullet points, or a mixture of both.


### [Issue Strategies](https://guides.github.com/features/issues/)

Additionally, there are other features that will likely use as you're creating, organizing, and tracking your issues:

* labels
* milestones
* assignments

### Labels

Issue tagging with labels are an important part of keeping engineering and product teams aligned and organized across repositories. Below you'll see a great example of an internal tagging system that is currently being used at [Robin](https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/). You'll notice that each category has a different color, which allows other team members to easily filter for what the issue is and who can help out with it.

![Internal Tagging System](/assets/images/lessons/github-issues/labels.png)

Here are the ones that we want you to focus on when working on your project:

##### Platform
These labels are good for filtering issues - showing what makes sense for a person to tackle.

Often you will also see priority levels listed on these labels with `P1` for priority 1, `P2` for priority 2, etc.

- P1 Security vulnerabilities
- P2 Costing the business money
- P3 Not a big deal but may be annoying for users

##### Experience
These labels are good for when you want particular contributers for your project. Is design or UI/UX your area of expertise? Angular? With these labels, people know where they can contribute the most.

##### Improvement
These are the low priority labels; however, these labels are very applicable for the projects you are building at Turing. Because of that, this is something we expect to see in your projects. An example would be `nice-to-have` features that you want to add to your project.


### Assignments

You will manage and track issues on your repo by assigning yourself or other team members via the assignment section in GitHub. Once someone wants to get around to it, you can assign someone to an issue - which will allow you to keep track of who is responsible for getting it done.

![Assigning an issue](/assets/images/lessons/github-issues/assign-issues.png)

### Milestones

Milestones are a helpful way to prioritize and create deadlines for your project. For example, a milestone on one of your projects at Turing might be titled `MVP` (minimum viable product) and would include all the features and functionality that you would need to have completed (by a certain due date) that meet the MVP you've defined. Other possible milestones for your Turing might include `Nice-to-haves`, `Extensions`, or `Post-graduation`.

![Issues Milestones](/assets/images/lessons/github-issues/issues-milestones.png)


<section class="note">
#### Closing issues with a PR

You can <a href="https://help.github.com/en/articles/closing-issues-using-keywords" target="\__blank"> close an issue with a PR!</a>

This can help speed up your workflow, decreasing overhead tasks that your or your group members have to complete.
</section>

<section class="call-to-action">
#### Turn and Talk (15 mins)

Working in your project groups, take a look at the the project spec and user stories for FitLit / Refactor Tractor. Go over the issues you've filed so far on your projects. Are they in line with the guidelines above?

If appropriate, add labels, milestones and assignments to any existing issues.

Feel free to file new issues following this structure as well!
</section>




-------------------------------------------------------------




## Code Review

The code review process, when done well (or even poorly!), can be one of the most enlightening parts of the collaboration process. Not only does it bring technical advancement and insight, but it can also help identify areas for improvement with communication.

### Pull Requests

At first glance, PRs are a way for an engineer to let others know that they've completed a feature. However - they're much more than that. Having a good PR workflow is akin to having an open, accessible forum for discussing proposed features and learning from other developers. Discussion, feedback, and iterations are all tracked in one centralized place.

#### Benefits

##### Multiple people are involved and responsible for that code that is written.
If `Developer A` submits a bug and then `Developer B` merges it, they are both at fault. PRs can help catch these things before they happen

##### Level up your communication skills
Following a PR workflow will improve your communication skills. Sometimes (particularly if you work remotely) code reviews are the main interaction you will have with the people on your team. In general, if you are the person creating a PR you will want to do the following:

  - Summarize the changes that you made.
  - Give the reason **WHY** you made those changes
  - Ask for any insights

It is important as the creator of the PR that you are giving other developers some context of what they are reviewing as well as what they should looking for in the change. Asking for feedback/help is a valuable skill that you should have as a developer.

To ensure solid communication, we're going to ask that you follow <a href="https://quickleft.com/blog/pull-request-templates-make-code-review-easier/" target="\__blank"> this template</a> when making your PRs:

```
#### What's this PR do?
#### Where should the reviewer start?
#### How should this be manually tested?
#### Any background context you want to provide?
#### What are the relevant tickets?
#### Screenshots (if appropriate)
#### Questions:
- Is there a blog post?
- Does the knowledge base need an update?
- Does this add new dependencies which need to be added?

```

Not all of these may always be applicable (and can be noted as such with "N/A"), but it's always good to be standardized and verbose when seeking code review.

##### Improve your technical skills
The PR workflow can be very enlightening on a technical level as well. It is common to hear developers state that they have learned more/ramped up quicker in code reviews than while pairing, reading blog posts, watching videos, etc. When you are creating PRs, it is helpful to know if what you're trying to technically communicate isn't clear. On the flip side of that, reading someone else's code is insightful due to the exposure of code that you haven't written through the review process/asking clarifying questions.

##### ASK QUESTIONS
Asking questions if something doesn't make sense to you is an important skill to have, both here and in the wild.

<section class="call-to-action">
#### Turn and Talk

Take a few minutes to read through [this Twitter thread](https://twitter.com/brittanystoroz/status/1049675860309991425) about the PR process. What are some things you can take away from this based on the experience of others? We will come back together as a group to discuss.
</section>

<!-- Whiteboard student answers

Some bullet points to consider noting:
Be careful of your tone
- include positive comments
- make sure critical feedback is actionable
- framing suggestions as questions

Acknowledge the effort
 - Positive words! Thanks

Keep the code review two-sided rather than dominating it
  Not a list of demands -->

<section class="note">
#### Merge Conflicts

As a reminder, you should NEVER be resolving your merge conflicts in GH's UI.
When getting ready to make a UI:

- Always make sure your local master is up to date with remote
- Merge local master into your local feature branch
- Resolve merge conflicts on your local machine
- Commit the resolved merge
- THEN make the PR if you're ready

</section>



##### Code Review Examples

*GOOD*
* [Pop Motion](https://github.com/Popmotion/popmotion/pull/276) (click ‘show outdated’ links to expand to see the conversations).

<!-- Good! Lots of acknowledgement for the effort with thank yous and compliments, lots of suggestions phrased as questions (though not always!), and a thorough discussion of potential problems -->

*AVERAGE*
* [Bytenik](https://github.com/bytenik/Seq.App.Slack/pull/27)

<!-- Average: Lots of the feedback is just little nitpicks here and there, stylistic things, which are important - but don’t add a ton of learning for either person. Some acknowledgment and thanks for the effort put in. Some really terse/short questions from the reviewer, which could potentially come off as harsh, but balanced out with lots of smiley faces. (Emojis are fair game!) -->

*BAD*
* [Bootstrap](https://github.com/twbs/bootstrap/issues/3057) (This is actually an issue, not a PR, but the same concepts still apply.)

<!-- Bad: Douglas Crockford (a glorified techie) starts the conversation using a lot of aggressive and insulting language which sets the tone for the rest of the comments going forward and allows it to spiral out of control. -->


### Practice Time

Let's practice good code review on some **bad** code. Just for fun.

We're going to dive into the <a href="https://github.com/turingschool/front-end-curriculum" target="\__blank">FE Curriculum repo</a> and take a look at this workflow in action.

<section class="note">
#### Side Note:

Our site is open source! You're always welcome to submit a PR.
</section>


<section class="checks-for-understanding">
### Summary

Answer the following in your journal:

- What makes a README useful?
- Why should you file issues on your student projects?
- What are some benefits of the PR workflow and the code review process?
</section>
