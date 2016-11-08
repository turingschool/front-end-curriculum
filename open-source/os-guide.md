---
title: Open Source Guide
---

Working on an Open Source project seems super intimidating. Here is a comprehensive guide for contributing. Don't let it intimidate you. It's fun, I swear.

## Picking A Project to Work On
- Find a Repo that is primarily written in a language you're comfortable with.
  - Check out [First Timers Only](http://www.firsttimersonly.com) or [24pullrequests.com](http://24pullrequests.com/)
  - Talk to mentors for suggestions
  - Think about tools you already use like the React library
  - Look for developers or companies on Github that you respect
- Avoid 'dead' repos
  - look at [open PRs](https://github.com/exercism/exercism.io/pulls) for the project
    - if a ton unmerged, project may be dead.
  - look at stars for the repo
    - does anyone use this project?
  - last commit date on master
    - is this project dead?
- Look at the open [issues](https://github.com/exercism/exercism.io/issues) for ones you can help with
- Fork the repo
- Timebox trying get the project running locally
  - Keep track of this process
    - your PR contribution may be to add instructions to a CONTRIBUTING.md or README.md file so future developers can get up and running fast.
- Consider commenting on an issue or creating one (don’t claim an issue if you don’t feel  80% confident you’ll complete it) or contact the repo owner directly

## How to Fork the Repo
- Fork the repo by visting it on Github and clicking the "Fork" button. This creates a copy of the repository in your own GitHub account.
- Clone your forked copy of or the repository
- Configure Git to sync your fork with the original repository.
  - Visit the original repo and copy the 'cloneable' html address.
  - `git remote add upstream [URL-FOR-ORIGINAL-REPO]`
- Verify that everything is set up properly by typing `git remote -v`
  - You should then be able to access your fork as 'origin' and the original repo as 'upstream'

## Picking An Issue
- Focus on fixing bugs and refactoring
  - generally better than adding new functionality when you first start contributing to a repo
- Keep your PRs small to start
- Think About:
  - Fixing a bug in an issue
  - Adding unit test coverage
  - Non-Code contributions are always appreciated 
    - Update the README with any set up instructions that you went through that weren't in it already, make spelling and grammar fixes.

![they-love-them](http://i.imgur.com/fKPBrut.png)

## Some Things to Consider
  - Think about if the issue you want to fix requires environmental variables to run that you don’t have. 
  - Avoid introducing new dependencies to a project (i.e. gems, node modules, etc)
  - [Read the contribution rules](https://github.com/exercism/exercism.io/blob/master/CONTRIBUTING.md) for the repo if they have them
  - Don't expect to get your work merged. If that happens, it's a bonus.

## Making the Fix
- Work on a branch that is well named, off of a fork of the repo
- Be conscious and clean with your git commits and squash any commit that says ‘WIP’. 
  - [Squashing Is Important! Here is a walkthrough!](https://ariejan.net/2011/07/05/git-squash-your-latests-commits-into-one/)
- Make sure you follow any contribution rules in the project README
- Run jshint or reek and make sure you didn’t make any syntax errors
  - Hint: look in the `package.json` file if the project has one for a `lint` script, if they have one.

## PRing the Work
- Once work is done, make sure to get the latest master from the original (upstream) repo and merge it into your branch.
   - They may ask you to rebase before you submit a PR, [here is what that means](https://robots.thoughtbot.com/keeping-a-github-fork-updated)
   - Rerun tests and manual QA after bringing in any changes from the upstream repo.
- Consider having a mentor review your work.
- Submit a pull request with your changes.
  - Reference the issue if there is one related.
  - Make sure your pull request comment includes what the change is, why you made it. Give the repo owner any information they need to merge the pull request up front.
  - Consider tagging the mentor you had review your work in the PR so they can leave feedback
- Brace yourself to receive PR comments and suggestions
- Make changes as they are requested
  - make sure newest master is merged into your local branch, rerun tests, manual QA
  - push the changes to your remote branch
  - tag the person who requested the changes to review them.

## Conclusions

Don’t be afraid.

No one should make fun of your code. If they do, they are jerks.

You will likely get feedback and suggestions - or polite rejections if the code doesn’t fit with the repo owner’s style or goals.

Be ready to try many repos and many issues before you find one you can fix and feel confident in PRing.