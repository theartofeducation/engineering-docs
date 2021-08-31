---
id: new-repo
slug: /source-control/new-repo
title: New Repository

---

## Basic Setup

* Initialize the repository with `git init`
* Create a new repository on github
* Select The Art of Education as the owner
* Select the proper repo privacy
* Set the origin with `git remote add origin git@github.com:theartofeducation/your-repo-here.git`
* create your initial commit and push

## Common Linting Dependencies

* All projects will require common linting dependencies and these are all written in JavaScript
    1. [commitlint](https://github.com/conventional-changelog/commitlint)
    1. [markdownlint](https://github.com/DavidAnson/markdownlint)
    1. [husky](https://github.com/typicode/husky)
* All projects will have a `package.json` for installing these dependencies and scripts to run these tasks as needed.
* All projects will have a github actions workflow for running these tasks i.e. `.github/workflows/linting.yml`

## Branch Rules & Setup

* For develop and main branches
    * Require pull request reviews before merging: Require at least 2 reviews
        * Dismiss stale pull request approvals when new commits are pushed
        * Require review from Code Owners if the repo has / needs a code owner
    * Require status checks to pass before merging
        * Ensure linting and unit tests are required (if applicable)
        * Require branches to be up to date before merging
    * Require signed commits
    * Require linear history
    * Include administrators
