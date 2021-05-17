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
2. Check out to a feature branch (`git checkout -b [feature/branch-name]`)
3. Do work
4. Commit frequently (`git status`, `git diff`, `git add [file-name]`, `git commit -m '[Message]'`)
  * repeat until feature complete
5. Before pushing your branch, make sure you're up to date with the remote main branch
  - `git checkout main`
  - `git pull origin main`
  - `git checkout [feature-branch-name]`
  - `git merge main`
  - If needed, fix conflicts (tells you on command line where to look in editor)
  - Run your code to ensure that everything is working as expected
6. Once you are confident with your code, push it up to the remote repo (`git push origin [feature-branch-name]`)
7. Go to GitHub (browser)
8. Create a pull request
  - Write an informational comment
  - Add all necessary team members as reviewers
9. Once you are confident with your PR, hit the 'submit pull request' button
10. Contact partner to review pull request
11. Partner reviews code and merges pull request
12. Once the new code is merged into the remote main branch, all team members should pull down the changes to their own main branches
- `git checkout main`
- `git pull origin main`
- *If you are currently working on a branch and want to continue on that branch, then run:*
- `git checkout [feature-branch-name]`
- `git merge main`
- Keep coding on that branch.
- *If you are ready to add a new feature:*
- Start back at step 1!
