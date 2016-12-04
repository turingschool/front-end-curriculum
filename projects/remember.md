---
title: remEMBER
tags: ember, localStorage, javascript
---

### Project Goals

Create a notepad-like app in Ember with full CRUD functionality.  

Developers will not have commit rights to the master branch. All changes must be made through pull requests that will be reviewed by instructors and merged into master when approved.

### Requirements to Merge PR

One of the primary goals of this project is to master work flow using small, concise pull requests. Each PR should follow the following guidelines.

* While working on feature A, create a new branch called `feature-a`
* When ready to merge to master, submit a PR for feature A
* There should be no excessive code NOT related to feature A in said PR.  
* Feature A will be merged into master

Often, you'll be waiting for feature-A to be merged in but will want to continue working on feature-B. The process for that looks like this:  

* Feature B depends on the work you did for feature A.
* The PR for feature A has not been merged in, but you want to continue to make progress
* Create a new branch `wip-feature-b`, **branched from `feature-a`**.
* Work on feature B
* Wait for feature A to be merged into master
* Upon successful merge, create a new branch called `feature-b` **branched from master**.
* The `feature-b` branch will now have feature A's code since it was merged into master.
* Use `git cherry-pick <commitSHA>` ([docs](https://git-scm.com/docs/git-cherry-pick)) to pull in **ONLY** the commits you made in `wip-feature-b` that apply to the feature B situation
* Submit a PR for feature B with the `feature-b` branch


### PR Template
(**Note**: This will generate automatically when you open a new PR )

```
## Purpose

_Describe the problem or feature in addition to a link to the issues. Delete any content that doesn't apply._

## Approach

_How does this change address the problem?_

### Learning

_Describe the research stage._

_Links to blog posts, patterns, libraries or add-ons used to solve this problem._

#### Blog Posts

### Open Questions and Pre-Merge TODOs

- [ ] Use Github checklists. When solved, check the box and explain the answer.

### Test coverage

_Briefly describe what tests you have written and why._

### Merge Dependencies and Related Work

_Link to merge dependency issues or PRs._

### Follow-up tasks

- [Issue #2 (Example)](https://github.com/flexyford/pull-request/issues)

### Screenshots

#### Before

#### After
```

### Rubric/Evaluation

Project success will be based primarily on pull-request quality, and secondarily on the level of project completion.

##### Pull Request Quality  

**4** - All pull requests are thoroughly written. All sections of each pull request have been consciously documented, and the amount of code being reviewed in each pull request is explicitly related to the given issue.   
**3** - Most pull requests are thoroughly written. Some sections are missing valuable information, and more than 1 pull request has changes to the code that do not apply to the given issue.   
**2** - Few pull requests have the necessary information to determine what is being reviewed. Submitted code is inconsistent with the target issue, student struggles to separate concerns.   
**1** - No to little effort made to create effective pull requests.   
**0** - What are pull requests.

##### Project Completion

**4** - All issues were successfully closed  
**3** - 10+ Issues were successfully closed  
**2** - 5-10 Issues were successfully closed  
**1** - 5 or fewer issues were closed  
**0** - No attempt was made to complete this project.   
