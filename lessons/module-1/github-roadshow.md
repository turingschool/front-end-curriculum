---
title: GitHub Roadshow - Collaboration Using GitHub
length: 120
tags: git, github, pairing
---

## Setup

* One person makes a new directory
* git init
* Make a repo on GitHub
* Add the remote to the local repo
* Make a code addition locally, add it to staging, commit it, and push it up to GitHub
* Add partner as collaborator on GitHub
* Partner clones the repo

## Collaborate

### Work on Master

* Person A adds content on master, commits, and pushes changes to GitHub
* Note the differences between partners local repos (Person B does not have the changes locally)
* Person B pulls down from GitHub, now master matches on both partner's local versions

### Bad Practice

* Person A makes changes and pushes to GitHub
* Person B makes changes and tries to push to GitHub, but they do not have most recent version of master
* Person B needs to pull from master
* Person B can now push up to master
* Person A syncs changes that Person B just pushed up

### Work on a Branch

* Person A creates a branch
* Develop on that branch, commit, and push up the branch
* Create a PR
* Person B reviews and merges PR
* Still need to sync master for both people locally

### Resolve Merge Conflict

* Person A creates a branch
* Person B makes changes on master and pushes up changes (without PR)
* Person A makes changes to a file on the same line(s), pushes changes, creates a PR (PR should have merge conflicts)
* Person A pulls down, resolves merge conflicts and pushes up branch again
* Person B merges PR

### Communication in PR

* Person A adds changes on a branch, makes a PR (mentions Person B in PR)
* Person B goes and comments on a specific line of file
* Person A fixes that line and pushes up the branch again
* Person B checks PR again and merges
* Both people sync master locally
