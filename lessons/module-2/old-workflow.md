---
title: "Workflow: PRs and GH Communication"
length: 120
tags: workflow, git, github, collaboration, code review
module: 2
---

## Learning Goals

* Give professional and actionable feedback through code reviews
* File and organize issues with labels and team member assignments
* Review PRs, pull request templates, and how to give professional/actionable feedback through code reviews

### Warm Up

Take a few minutes to read through your assigned article. We will come back together as a group to discuss what you find. Here are some questions to consider as you read:

- What do you agree with? What do you disagree with?
- What is confusing?
- What stands out?

- [Article 1](https://dbader.org/blog/write-a-great-readme-for-your-github-project)
- [Article 2](https://www.giacomodebidda.com/how-to-write-a-killer-readme/)
- [Article 3](https://thejunkland.com/blog/how-to-write-good-readme.html)
- [Article 4](https://ponyfoo.com/articles/readme-driven-development)

### Writing READMEs at Turing

For your projects at Turing, your goal is to demonstrate to employers that you understand the purpose of a README. Your READMEs should be set up so employers can clone things down and use your application. Other things you might want to highlight would be a small reflection of your work, how you attacked the project, how you collaborated, etc. Remember, the goal is to really showcase your work!

For your time at Turing, your README should have the following flow:

- _Abstract_ A sentence or two describing the project, with a link to the hosted version if applicable
- _Install/Setup instructions_ How someone can clone down the project and run it locally
- _Everything else_ This might include mentioning other contributors, the wireframes and design inspiration used for developing the UI, a reflection of the project as a whole, etc.

*Your abstract and installation/setup instruction should be prioritized since this is the common convention for how READMEs are set up in the wild.*


<section class="call-to-action">
#### Turn and Talk
#### 

Who would you hire from these READMES?


-   [Poker Season Tracker](https://github.com/notmarkmiranda/poker_season_tracker)
-   [Narwhal Assault](https://github.com/Obleo33/game-time)
-   [School Finder](https://github.com/sljohnson32/school-finder)
-   [Flex Sandbox](https://github.com/Mickyfen17/flex-sandbox)
-   [Club Reads](https://github.com/lindsaywparker/club-reads-frontend)
</section>


-------------------------------------------------------------

## Filing Issues

Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. Most projects that you work on will have a tracker of some kind (e.g. Waffle, Trello, Jira, etc.) to organize and share progress and information across the team. These trackers often connect directly to GitHub issues, but offer a more robust UI experience. For today's lesson, we are going to be working with GitHub’s built-in tracker called `Issues` - which has its own section in every repository.

Filing issues is an important part of the workflow process. It allows you to:

 Filing issues is an important part of the workflow process. It allows you to:
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


Be aware, this is just an example of how you may see issues organized in the wild. Many of these are beyond the scope of what you'll see in Mod 2. But the organizational system is a good one to base your own tracking off of (different colors for different categories). 


![Internal Tagging System](/assets/images/lessons/github-issues/labels.png)

Here are the ones that we want you to focus on when working on your project:


##### Priority
These labels are good for filtering issues - showing what makes sense for a person to tackle.
Often you will also see priority levels listed on these labels with `P1` for priority 1, `P2` for priority 2, etc.

- P1 Security vulnerabilities
- P2 Costing the business money
- P3 Not a big deal but may be annoying for users

##### In Progress 
Note whether or not someone is currently working at an issue.
In breakout groups, compare and contrast by sharing your GH issues.

##### Problems
You should have a label for issues that correspond to a bug. You don't have to get much more specific than than 

##### Question / Discussion
Use these for issues that you want feedback or discussion on. If you have questions about a feature, this is a good kind of label to add. 

##### Experience
These labels are good for when you want particular contributors for your project. Is design or UI/UX your area of expertise? Angular? With these labels, people know where they can contribute the most.


##### Improvement / Enhancement
These are the low priority labels; however, these labels are very applicable for the projects you are building at Turing. Because of that, this is something we expect to see in your projects. An example would be `nice-to-have` features that you want to add to your project.

### Assignments


You will manage and track issues on your repo by assigning yourself or other team members via the assignment section in GitHub. Once someone wants to get around to it, you can assign someone to an issue - which will allow you to keep track of who is responsible for getting it done.


![Assigning an issue](/assets/images/lessons/github-issues/assign-issues.png)

### Milestones

Milestones are a helpful way to prioritize and create deadlines for your project. For example, a milestone on one of your projects at Turing might be titled `MVP` (minimum viable product) and would include all the features and functionality that you would need to have completed (by a certain due date) that meet the MVP you've defined. Other possible milestones for your Turing might include `Nice-to-haves`, `Extensions`, or `Post-graduation`.


![Issues Milestones](/assets/images/lessons/github-issues/issues-milestones.png)

#### Closing issues with a PR

You can <a href="https://help.github.com/en/articles/closing-issues-using-keywords" target="\__blank"> close an issue with a PR!</a>

This can help speed up your workflow, decreasing overhead tasks that your or your group members have to complete.

<section class="call-to-action">
#### Turn and Talk 


Working in your project groups, take a look at the the project spec and user stories for you paired project. Go over the issues you've filed so far on your projects. Are they in line with the guidelines above?

If appropriate, add labels, milestones and assignments to any existing issues.


Feel free to file new issues following this structure as well!

### Benefits  

##### Multiple people are responsible for that code that is written.
If `Developer A` submits a bug and then `Developer B` merges it, they are both at fault. PRs can help catch these things before they happen

##### Recording conversations
Code reviews can be one of the main interactions you will have with the people on your team. Conversations can be recorded so that you have one centralized place for discussions.  Be it you, other devs, or your project manager, one can read why certain decisions were made months/years later!

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
@@ -194,48 +164,17 @@ To ensure solid communication, we're going to ask that you follow <a href="https
#### What are the relevant tickets?
#### Screenshots (if appropriate)
#### Questions:
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

*AVERAGE*
* [Bytenik](https://github.com/bytenik/Seq.App.Slack/pull/27)

*BAD*
* [Bootstrap](https://github.com/twbs/bootstrap/issues/3057) (This is actually an issue, not a PR, but the same concepts still apply.)

<section class="checks-for-understanding">
### Summary

Answer the following in your journal:
- What makes a README useful?
- Why should you file issues on your student projects?
- What are some benefits of the PR workflow and the code review process?
</section>
</section>

### Additional Resources
* [Issue Strategies](https://guides.github.com/features/issues/)