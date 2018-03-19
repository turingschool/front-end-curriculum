---
title: House of Vars
module: 4
---

## Abstract

So far we've been building a lot of projects from scratch. While this is a great way to learn, it doesn't quite prepare you for the horror that is jumping into a pre-existing codebase full of bugs, legacy code and unfamiliar frameworks and libraries. In this project, we'll learn how to navigate and contribute to someone else's codebase by implementing features, refactoring old code, and fixing bugs: all without breaking anything. Be careful what you touch! The slightest change could bring the whole app down.

-----------------------------------------------------------

## Before You Start

Take some time to play around with the application you're going to be working on. Read the documentation and explore the UI. Get familiar with the project from a user perspective before even cloning the repo.

## Things to Think About

Once you're ready to jump into the codebase, pay close attention to the following things:

1. **How was the setup and installation process?** Did you run into any problems or notice any errors or warnings in your terminal? Did you get things set up and running but you weren't sure how you did it? Was the documentation easy to follow or is there room for clarification? Could you submit an issue to improve the documentation for others struggling with the problems you might have run into?
2. **What's unfamiliar?** Is the codebase using different languages and frameworks than you've worked with in the past? Different setup / build tools? Are there coding conventions or stylistic choices you haven't seen before?
3. **How can you contribute to the project?** Are there any obvious bugs or missing features that don't have open issues filed for them? Could you submit an issue with suggesstions for improvements? (Some common areas for improvement include accessibility and responsive design)

Although you're working as a group, everybody should give themselves some alone time with the repo to take notes on the above questions. Comparing notes and sharing your experiences with your group mates afterwards will ensure that no potential issues or improvements fall through the cracks.

-----------------------------------------------------------

## Expectations

### Open-Source Contributions

Each team will be provided with an open-source repo and a short list of suggested issues to resolve. While you will not fail if you're unable to submit a PR that gets merged, we expect you to make a strong effort towards getting a contribution accepted. You do not have to work on the suggested issues and can pick others from the repo as long as they aren't already assigned to someone else. If none of the suggested issues are available or seem too complex to solve, play with the application on all different browsers and devices - try to find new issues to file and fix (common areas for easy fixes are accessibility concerns and UI/UX issues). 

#### Being a Good Human

When requesting to take an issue, first add a comment on the issue that says something along these lines:

*Hi there! I'm a first-time contributor and was hoping to help out with this issue. I noticed nobody was assigned to it, but if there's already a solution in progress I'm happy to try helping out elsewhere. Thanks!*

You are free to begin work on the issue while you wait for a response from someone on the team, but keep in mind they might tell you to stop and switch gears.

If you cannot come up with a solution to submit a pull request by the end of the weekend, you must un-assign yourself from the issue and leave another comment:

*Sorry, but I've had to drop this issue from my to-do list. I won't be able to submit a pull request in a timely manner and don't want to hold up progress. Hopefully someone else will be able to pick this up!*

Throughout this process, make sure you are conforming to any stylistic conventions and contribution guidelines set by the project maintainers. Repos will often have `CONTRIBUTING.md` files that give you guidelines on how to format your commit messages, how to write your pull request descriptions and how to file new issues. Make sure you run any linters and test suites before submitting a pull request.

#### Getting Instructor Review & Approval

Excluding the two comments mentioned above, you must have both instructors review and approve **any other comment or communication** that you make on an issue or pull request. You must also have us review your code changes and your pull request descriptions before submitting.

#### Giving Your Teammates Credit

Because this is a group project, you might be pairing to resolve a single issue. Just because one person is driving, doesn't mean they have to be the only one to get credit for the contribution. If you do submit a pull request, make sure to give your teammates credit! You can update the author on a commit with the following command:

```bash
git config user.name "Your Name, Partner's Name, Partner's Name" 
git config user.email "yourEmail@gmail, partnersEmail@gmail, partnersEmail@gmail"
```

### Presentation

Each group will present the work they accomplished (or didn't accomplish) to the class. Each member should be responsible for one of the following parts of the presentation:

1. **Introduce the project:** Was it an application? A website? A developer tool? How does it work/what does it do? (5 minutes)
2. **What was it like jumping into that codebase?** What was the setup and installation process like? Was the build process familiar or challenging? Did the directory structure make sense? (5 minutes)
3. **What was new and interesting?** Teach us about a new framework, library or tool that you had to use in the project. (5 minutes)
4. **What issues did you resolve?** If you resolved any issues, walk us through your implementation in the codebase and update us on the github activity for your patch. (Was there any conversation in the github issue? Did you submit a pull request yet?) If you were unable to resolve any issues, walk us through the problems you ran into. (5 minutes)

### Blog Posts

Put your presentation into writing. Each person must write their own blog post. You can write about all four sections described in the presentation, or pick a single one to go in-depth on. Regardless of what you choose, each blog post should be about 1,000 words.

-----------------------------------------------------------

## The Repos

### [Open Food Network](https://github.com/openfoodfoundation/openfoodnetwork)

**Potential Issues:**
* [Marked as good for beginners](https://github.com/openfoodfoundation/openfoodnetwork/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)
* [#1806](https://github.com/openfoodfoundation/openfoodnetwork/issues/1806)
* [#1938](https://github.com/openfoodfoundation/openfoodnetwork/issues/1938)
* [#1913](https://github.com/openfoodfoundation/openfoodnetwork/issues/1913)


<!-- ### [WikiEdu Dashboard](https://github.com/WikiEducationFoundation/WikiEduDashboard)

**Potential Issues:**
* [Marked as newcomer friendly](https://github.com/WikiEducationFoundation/WikiEduDashboard/issues?q=is%3Aissue+is%3Aopen+label%3A%22newcomer+friendly%22)
* [#1351](https://github.com/WikiEducationFoundation/WikiEduDashboard/issues/1351)
* [#1510](https://github.com/WikiEducationFoundation/WikiEduDashboard/issues/1510)
* [#1459](https://github.com/WikiEducationFoundation/WikiEduDashboard/issues/1459) -->

### [Denver Startup Week](https://github.com/denverstartupweek/dsw-site)
* [Issues](https://github.com/denverstartupweek/dsw-site/issues)

<!-- ### [Code for Social Good](https://github.com/Code4SocialGood/c4sg-web)

**Potential Issues:**
* [#1733](https://github.com/Code4SocialGood/c4sg-web/issues/1733)
* [#1727](https://github.com/Code4SocialGood/c4sg-web/issues/1727)
 -->

### [Git Point](https://github.com/gitpoint/git-point)

**Potential Issues:**
* [Marked as good for beginners](https://github.com/gitpoint/git-point/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+for+beginners%22)


### [Iodide](https://github.com/iodide-project/iodide)

**Potential Issues:**
* [Marked as Good First Issue](https://github.com/iodide-project/iodide/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)


### [Refined GitHub](https://github.com/sindresorhus/refined-github)

**Potential Issues:**
* [Marked as Good First Issue](https://github.com/sindresorhus/refined-github/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

<!-- ### Other Potential Repos -->
<!-- https://github.com/vuetifyjs/vuetify -->
<!-- https://github.com/wekan/wekan -->
<!-- https://github.com/alphagov/accessible-autocomplete -->

If, as a group, you are all struggling to make progress toward a contribution, you are free to choose another open-source codebase to work with. You all must agree on another codebase as we only want a single presentation per group. A good way to search for additional repos is to search GitHub for open issues with labels like "HTML", "CSS", "UI", "UX", "design", "docs", "enhancement". An example search query can be found [here](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Acss).
