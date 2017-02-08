# Git Workflow for Teams
This is a general overview of an effective way to use Git in your team projects.

1. Clone down the repository.
2. Check out a branch Name this branch according to the functionality you are implementing. 
For example, if you’re working on queries for your Url model - you could name your branch url-queries (git checkout -b 'url-queries').
3. Implement the functionality and add and commit your changes along the way. This does NOT mean one commit at the end of your implementation. Each time you get a piece of functionality to work, you should write a meaningful commit message. Note: Your commit messages should be in the imperative, present tense. For example - “Add functionality to find request types by Url” or “Update list_all_requests test to account for edge case”
4. Make sure your changes are added and committed (on your branch).
5. Checkout the master branch (git checkout master)
6. Run git pull origin master to fetch and merge the most recent version of master. This is so that you can get the most up to date version of master on your local machine.
7. Checkout the branch you’ve been working on.
8. Run git merge master. You may run into merge conflicts. Don’t panic! Read the message carefully. It will tell you exactly what files have conflicts. Open those files and decide what code you want to keep.
9. Add and commit the changes (if you had merge conflicts).
10. Now you’re ready to push your branch up to Github and make a Pull Request!
