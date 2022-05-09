---
title: "Workflow: PRs and GH Communication"
length: 120
tags: workflow, git, github, collaboration, code review
module: 2
---

## Learning Goals

* Recognize what makes a README useful
* File and organize issues with labels and team member assignments
* Review PRs, pull request templates, and how to give professional/actionable feedback through code reviews

### Vocab
* `README` - File that reviews what the repo is used for, instructions for setting up repo, snapshot overview of the repo.
* `Project Board` - Tool used to organize work left to do, in progress, and work that is done for a project.
* `User Story` - Often a user facing story, that describes a piece of functionality in the app using the `Given, When, Then` syntax. `e.g Given I am on the login screen When I enter my username and password And click on login, Then I expect to be redirected to the home page. `

### Warm Up

At Turing, we focus a lot on strongly documenting your projects through READMEs, GH issues, PRs, and other workflows.  But why?  It certainly requires a lot of work and time when we *could* be using that time to write more code.  Let's focus on the **why** in this lesson, starting first with READMEs.

<section class="call-to-action">
#### In Your Journals

1. What is the purpose of READMEs?  How is it beneficial to you as a developer?  Your team?  Employers?
2. Skim through the following examples of READMEs past students have created and note what stands out to you.  What is helpful?  What is missing?  Write down *at least* one thing you would like to do in your next README.

* [Poker Season Tracker](https://github.com/notmarkmiranda/poker_season_tracker) <!-- medium, image is not working, all text... -->
* [Narwhal Assault](https://github.com/Obleo33/game-time)
* [School Finder](https://github.com/sljohnson32/school-finder)
* [Flex Sandbox](https://github.com/Mickyfen17/flex-sandbox)
* [Club Reads](https://github.com/lindsaywparker/club-reads-frontend) <!-- high, text needs some formatting help, but pretty good -->
</section>

<section class="note">
### If you finish early!

There are a lot of articles out there with different opinions on what *should* be included in a README.  A lot can depend on the scope of your project and the purpose behind it, but here is [one article](https://thejunkland.com/blog/how-to-write-good-readme.html) that has a pretty good summary.  This article by no means has an exhaustive list of what can be included.
</section>

-------------------------------------------------------------

## Exploring & Filing GH Issues

GH issues are a great way to keep track of tasks, enhancements, and bugs for your projects. Most projects that you work on use some kind of project board (e.g. GH Projects, Trello, Jira, etc.) to organize and share progress and information across the team. These trackers often connect directly to GitHub issues, but offer a more robust UI experience.

Filing issues is an important part of the workflow process. It allows you to:

* Keep track of what type of work needs to be done:
  _common issues include bugs, security vulnerabilities, nice-to-haves_
* How that work should be prioritized:
  _setting deadlines_
* Who is responsible for that work:
  _keep all team members 'in the know' about who is handling what_

<section class="note">
### Keeping your issues up to date!

Having an up-to-date list of issues indicates to potential employers that you're aware of what could be improved, and that you plan on continuing to maintain the project in the future.  Keep this in mind as you continue to build out projects at Turing.  If there are bugs or future features you want to build out, include them as GH issues!
</section>


<section class="call-to-action">
### Your Turn

GH issues are often a great place to start when deciding what to work on, especially after you have setup a project board.  Ideally, you should do this before you even start to code!  Let's get some practice!

1. Open up your current project repo, click on the `Issues` tab, and then click the green `New Issue` button on the right.
2. Think about a feature/bug that needs to be added.  (Think of a specific small piece as opposed to a gigantic feature)
  * Keep the title short and descriptive!
3. Create a user story to determine what should happen.  (Focus on the *What*, *WHY*, and *WHO* and less on the *HOW*)
  * A good structure to follow with this is `As a __, When I visit __, I want to __, so that I can __.`
  * Depending on the feature, you might even include **Happy Path** and **Sad Path** user stories!
4.  Think about any additional information that might be needed.  This can included resources such as helpful links or relevant wireframes.
</section>

<section class="note">
### Where is the Issues tab?

If you don't see an **Issues** tab, it's likely because you haven't enabled it.  To fix this, you can go to the **Settings** tab, and under "Features", check the box for Issues so that the tab will then be available.
</section>

<section class="checks-for-understanding">
### Compare & Contrast

In breakout groups, compare and contrast by sharing your GH issues.

1. Let the other members read through your user story.  The person sharing should *NOT* describe or fill in missing details.
2. While reading through the issue, take notes of what parts are clear and what details are missing.  (Reminder that the issue should not focus on the *HOW*)
3. Share notes and actionable feedback with each other.  Be prepared to share takeways afterwards.
</section>

### Adding Labels To A GH issue

Issue tagging with labels are an important part of keeping engineering and product teams aligned and organized across repositories. Multiple labels can be added to issues and allow for a developer to filter by one/many labels at once.  This not only is helpful for the team but also for project managers to view what is being worked on and where a team is at.

<section class="call-to-action">
### On Your Own

Take a few minutes to skim through [this example](https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/) of an internal tagging system used at *Robin*.  Take note of the categories and use of color coding that can help a team filter issues.

**Follow up:** Add some labels to the issue you were previously working on.   
</section>

<section class="note">
### Note

While some of these labels may not apply exactly to your project, use this as inspiration to create some of your own.  Labels can cover all types of things like priority levels, bugs, enhancements, testing, workflow, or even questions & discussions.
</section>

### Assignments and Linking An Issue To Your Project Board

Assigning a person to an issue and linking an issue to a project board can again help in communication across the team on who is working on what at what time.

<section class="call-to-action">
### Your Turn

* *Assign* yourself to your GH issue. (You should see your name next to the issue)
* Link the issue to your GH project.  (You should now see the issue as a ticket on your project board!)
* **Note:** These can be accessed on the right hand side of the issue near the `Labels` section.
</section>

<section class="note">
### Note:

It's often recommended to only assign yourself to **one** task/issue at a time.  Even if you plan to work on others in the future, stick to one for now.  This helps your team know what you are currently working on.  When you have finished a ticket, you can then assign yourself to another issue.
</section>

-------------------------------------------------------------

## Code Reviews in Pull Requests

The code review process, when done well (or even poorly!), can be one of the most enlightening parts of the collaboration process. Not only does it bring technical advancement and insight, but it can also help identify areas for improvement with communication.

<section class="call-to-action">
### Shout em out!

What are pull requests?  What are their purpose?  Are there any rules that come to mind?
</section>

<section class="answer">
### Benefits Of PRs

##### Multiple people are responsible for that code that is written.
If `Developer A` submits a bug and then `Developer B` merges it, they are both at fault. PRs can help catch these things before they happen

##### Recording conversations
Code reviews can be one of the main interactions you will have with the people on your team. Conversations can be recorded so that you have one centralized place for discussions.  Be it you, other devs, or your project manager, one can read why certain decissions were made months/years later!

##### ASK QUESTIONS
Tying into the above, this is an excellent place to ask questions or point out where things could be refactored *before* things are merged in.
</section>

### Code Review Examples

* **Good:** [Pop Motion](https://github.com/Popmotion/popmotion/pull/276)

* **Average:** [Bytenik](https://github.com/bytenik/Seq.App.Slack/pull/27)

* **Bad:** [Bootstrap](https://github.com/twbs/bootstrap/issues/3057) (This is actually an issue, not a PR, but the same concepts still apply.)

### Pull Requests

<section class="note">
### Pull Request Templates

It is important as the creator of the PR that you are giving other developers some context of what they are reviewing as well as what they should looking for in the change.  In order to standardize what is discussed, [pull request templates](https://docs.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository) were created.  Follow the steps in the link to create one for your project.  Here are some recommended questions to get you started:

```
#### What's this PR do?
#### Where should the reviewer start?
#### How should this be manually tested?
#### Any background context you want to provide?
#### What are the relevant tickets?
#### Screenshots (if appropriate)
#### Questions:
```
</section>

<section class="note">
#### Closing issues with a PR

Circling back to GH issues, you can also <a href="https://help.github.com/en/articles/closing-issues-using-keywords" target="\__blank"> close an issue with a PR!</a>

This can help speed up your workflow, decreasing overhead tasks that your or your group members have to complete.
</section>

<section class="checks-for-understanding">
### Summary

Answer the following in your journal:

- What makes a README useful?
- Why should you file issues on your student projects?
- What are some benefits of the PR workflow and the code review process?
</section>

### Additional Resources
* [Issue Strategies](https://guides.github.com/features/issues/)
* [Beginners Guide to writing a Kickass README](https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
