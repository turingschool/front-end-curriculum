---
title: Git Flow
tags: git, github
---

### A Recommended Workflow for Teams

#### Setting up the repository

1. Initialize a new Git repository (repo) and make initial file structure on your local machine
2. Make initial commit (`git add [file-name]`, `git commit -m 'Initial commit'`)
2. Create a new repository on GitHub
3. Link your local and GitHub repository (add remote)
4. Push structure to remote repository (push to the main branch)
5. Add all team members as collaborators
6. All team members should clone the repo to their local machines (don't fork!)

#### General Workflow:
1. Start on main branch
  - `git checkout main`)
2. Checkout to a feature branch
  - `git checkout -b [feature/branch-name]`
3. Do work
4. Commit frequently
  - `git status`
  - `git diff`
  - `git add [file-name]`
  - `git commit -m '[Message]'`)
  - Repeat until feature is complete
5. Before pushing your branch, make sure you're up to date with the remote main branch
  - `git checkout main`
  - `git pull origin main`
  - `git checkout [feature-branch-name]`
  - `git merge main`
  - If needed, fix merge conflicts (tells you on command line where to look in editor)
  - Important! Run your code (open up your app) and ensure that everything is working as expected
6. Once you are confident with your code, push it up to the remote repo
  - `git push origin [feature-branch-name]`
7. Go to GitHub in your browser
8. Create a pull request
  - Write an informational comment
  - Add all necessary team members as reviewers
9. Once you are confident with your PR, hit the 'Submit Pull Request' button
10. Contact partner to review pull request
11. Partner reviews code, adds comments, and merges pull request
  - Or, you can 'Request Changes' and wait for you partner to push up new code before merging
12. Once the new code is merged into the remote main branch, all team members should pull down the changes to their own main branches
- `git checkout main`
- `git pull origin main`
- *If you are currently working on a branch and want to continue on that branch, then run:*
  - `git checkout [feature-branch-name]`
  - `git merge main`
  - Keep coding on that branch.
- *If you are ready to add a new feature:*
  - Start back at step 1!

#### Short and Sweet Version:
- Make sure your main branch is updated with the remote main branch
- Checkout to a branch when coding
- Push up your branch when it's complete
- Partner merges your branch into main
- Repeat

#### Advanced: Want a more thorough code review?
When your teammate asks for a code review, you can review the code in GH, but that makes it hard to actually run and test the code. To get the code to your local machine, go through these steps:
- After the PR is opened by your partner, run `git fetch` on your machine. This will give you access to all of the remote branches.
- Run `git checkout [name-of-partner's-branch]` and you should now have the code from the branch that your partner is trying to merge into main
- Test the code locally (open the app, look through code)
- Then leave the code review in GH as normal!
