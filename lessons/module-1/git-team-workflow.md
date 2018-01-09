---
title: Git Flow
length: 0
tags: git, github
---

### A Recommended Workflow for Teams 

1. Start on master
2. git checkout -b <branch_name> (this creates a new branch and checks out to that same branch)
3. do work
4. commit (add, commit)
5. git checkout master
6. git pull origin master
7. git checkout <branch_name>
8. git merge master
9. fix conflicts! (tells you on command line where to look in editor)
10. run tests if applicable
11. git push origin <branch_name>
12. go to GitHub! (hub browse)
13. create a pull request(make sure its going to the right place)
14. hit the 'submit pull request' button
15. contact partner to review pull request
16. partner merges pull request
17. git checkout master, git pull origin master, and repeat the process
