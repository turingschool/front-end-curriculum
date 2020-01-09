# Cross-Pollination Rubric

## Shared Criteria
All team members are responsible for these scores on both repos.

**Agile Process**

* 4: Nothing exists in the code that was not referenced on the board. All cards are precise, and a history of who wrote what code is clear.  Agile Processes (2-3 day sprints, retros, user testing at end of sprint, etc.) are implemented.
* 3: Cards are descriptive and each PR references the scrum card. Each card should only contain a single feature. Team are in the habit of referencing board before, during, and after a work session.
* 2: Teams setup a board and utilize it as a to-do list.
* 1: Team setup a board then abandoned it.

**Git Workflow**

* 4: Regularly holding discussions in PRs, and/or requesting code review from mentor. All team members use git hooks to standardize commit messages and expectations (linter, tests).
* 3: Multiple people on a PR where discussion takes place on at least one PR. Students do not merge their own PRs (if working on project with a teammate on your end). If working solo, students still make PRs. Commit messages are clear, professional, atomic and follow a consistent convention.
* 2: PR templates were used, but no actionable code review took place. Commit messages are clear, professional, and usually atomic.
* 1: No PR template was used. Commits have large unrelated pieces of code and/or have unprofessional messages.


**CI & Deployment**

* 4: App has CI and successfully builds by day 3 and is deployed successfully after every PR merges. Logs should show that failed builds are very quickly addressed.
* 3: App has CI and successfully builds by day 5 of the project, and on due day.
* 2: App has CI and successfully build on the due day.
* 1: App does not have CI setup but does successfully deploy.

**Documentation**

* 4: CI/Deployment badges on all repos OR swagger.ui or something similar for documenting for the endpoints is used.
* 3: All repos have a README with a project description, screenshots (if applicable), endpoint documentation (if applicable), links to production sites, links to associated repos, instructions to setup, contributions to all team members. Clear and consistent markdown format is used.
* 2: A README is present in all repos, but some relevant information is missing (too brief or uninformative) OR all information is present but formatted poorly and difficult to sift through.
* 1: A README is present in all repos, but has minimal-no relevant information.

## Back End Criteria

**Testing**

* 4: Developer satisfies all criteria below in section three. Test coverage is at 90% and above. This coverage includes happy/sad path and a majority of edge cases.
* 3: If you use Rails for your BE, then we expect above 80% test coverage _OR_ If you experiment with a new BE language/framework outside of Rails, then BE test coverage is expected to be at least 25%
* 2: Developer codes and uses test driven development during some iterations. Test coverage must be at 25%(if using Rails) _OR_  If using a new language, tests have been attempted, but less than 25% coverage.
* 1: Developer codes and does not use test driven development for the duration of the project. No specs can be run at any time.

**Stretch Goal**

* 4: Completed both stretch goals successfully
* 3: Completed one stretch goal successfully
* 2: Attempted one stretch goal
* 1: No stretch goals were attempted :cry:

## Front End Criteria
The front-end team members are responsible for meeting these requirements:

**Front-End UI/UX**

* 4: Multiple wireframes describing multiple persona flows. Intentional, cohesive color palette. Multiple rounds of user testing. Create polished, professional design. All criteria listed below.
* 3: Wireframes completed by day 2. At least one persona defined by day 2. Implemented some design inspiration with source cited. Have done at least one round of user testing on a set of features.
* 2: Wireframes were completed after day 2 and utilized after user interface implementation. The application is difficult to use and no design inspiration was integrated.
* 1: Wireframes were created but never used. No user testing done on the user interface. The application is not intuitive to new, inexperienced users.

**Front-End Code Quality & Testing**

* 4: Code is tested at unit and integration levels with all happy and sad paths tested. Test-driven development is utilized and seen through the git commit workflow. Codebase structure would be intuitive to new front-end developers coming onto the team.
* 3: Code is well-tested with unit and integration-level tests with happy and sad paths considered. Code is organized and structured in logical, consistent way, following conventions when applicable. Code is semantic, readability is valued higher than cleverness, demonstrate positive developer empathy. Code has very few places where instructors see opportunities for refactoring.
* 2: Code is sporadically tested at unit and integration levels, and focuses mainly on happy paths. Instructors see many places in code for refactoring. Codebase does not follow conventions of frameworks or libraries used.
* 1: Code has testing tooling setup, but testing is very incomplete and does not describe the features of the application. Code has not been refactored, and the structure is confusing and not intuitive.