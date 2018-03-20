---
title: Git Flow
tags: git, github
---

### A Recommended Workflow for Teams 

#### Setting up the repository

1. Initialize a new Git repository (repo) and make initial file structure
2. Create a new repository on GitHub
3. Link your local and GitHub repository (add remote)
4. Push structure to remote repository (on the master branch)
5. Add all team members as collaborators

#### Once the repository is setup, repeat this process

1. start on master
2. `git checkout -b [feature-branch-name]`
3. do work
4. commit (add, commit)
  * repeat until feature complete
5. `git checkout master`
6. `git pull origin master`
7. `git checkout [feature-branch-name]`
8. `git merge master`
9. fix conflicts! (tells you on command line where to look in editor)
10. run tests if applicable
11. `git push origin [feature-branch-name]`
12. go to GitHub! (hub browse)
13. create a pull request (make sure its going to the right place)
14. hit the 'submit pull request' button
15. contact partner to review pull request
16. partner merges pull request
17. `git checkout master`, `git pull origin master`, and repeat the process
