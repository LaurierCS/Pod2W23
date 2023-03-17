# ExTracker

## Contribution Guidelines

This document will outline the guidelines and best practices to follow when contribution to this project,
which uses Next.js, MongoDB, and TypeScript.

## Prerequisites

Please ensure that you have the following software installed on your machine:

1. Node.js (LTS or latest stable version)
2. Yarn (latest stable version)
3. Local MongoDB Server
   - Guide to install local MongoDB Server: https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database
4. Git

## Getting Started

1. Clone the project repository `git clone https://github.com/LaurierCS/Pod2.git`
2. Create a new branch for your changes: `git checkout -b <type>/<short-description>`
3. Install dependencies: `yarn install`

## Development Process

1. Please follow this [coding style](#coding-style-guide).
2. Always create a new branch, and follow the [branch naming convention](#branch-naming-convention).
3. Try to use meaningful commit messages that clearly describe your changes.

   > If you are having a hard time writing a summary of your changes, then it might be that you worked on
   > way to many things on one branch.

   - In case there are notes you would like to leave in a commit for future reference,
     you can open the entire commit file with `git commit` and write down your notes after the first line.
     Note: The first line is where the summary should be, and it is displayed in GitHub.

4. Regularly sync your local branch with the upstream `main` branch to ensure that you are working with the latest changes.

## Submitting a Pull Request (PR)

1. In the pull request description, provide a clear explanation of the changes you've made, along with any revelant issue numbers (open issues on GitHub).
2. Assign at least two other contributors to review your changes and give approval.
3. Let the reviewers know by submitting mentioning them on the [PR Reviews Thread](https://discord.com/channels/1079526374211067924/1086419768472518716).
4. Resolve any merge conflicts.
5. Merge pull request if the checklist is satisfied:
   - [x] Reviewed by two or more contributors.
   - [x] No merge conflicts
6. Delete branch if it is not needed anymore.

## Branch Naming Convention

To help organizing the repository and simplifying the process of identifying the purpose of different
branches, we should following the naming convention outline in this section.

Each branch name is divided into two parts:

```
<type>/<name>
```

### Type

The `type` indicates the purpose of the changes made in the branch. It can be one of the following:

1. `feature`: A branch that introduces a new feature or enhancement to the project.
2. `bugfix`: A branch that fixes a bug or an issue in the project.
3. `component`: A branch that focuses on the development or refactoring of a specific component within the project.
4. `page`: A branch that focuses on putting a page together with components from the project.

### Short Description

The `short-description` provides a brief summary of the changes made in the branch. It should be concise, clear,
and written using kebab-case (i.e., words separated by hyphens). The description should convey the purpose of
the branch in a way that is easily understandable by other contributors.

### Examples

Here are some examples of branch names following the above-mentioned convention:

1. `feature/user-authentication`
2. `bugfix/no-redirect-after-login`
3. `component/calendar`
4. `page/dashboard`

## Coding Style Guide

The guidelines convered in this section should help maintain a consistent and clean codebase. By adhering to this
style, you will contribute to a more organized and efficient development process for all team members.

Try to use as little comments as possible. Your code should be the documentation, not the comments. If you find
yourself in a situation where you are using a lot of comments, it might indicating that your code is not clear enough.

### General Naming Convention

1. `camelCase`: Use camel casing for all variable names, where the first letter of each word (except the first word)
   is capitalized.

   Example: `listOfItems`, `expenseData`.

2. `CONSTANT_VARIABLES`: Use all-uppercase letters with underscores separating the words for constant variables.

   Example: `MAX_ATTEMPTS`, `API_BASE_URL`

3. `ClassName`: Use pascal case for class names, where the first letter of each word is capitalized.

   Example: `User`, `ShoppingCart`

4. `ComponentName`: Use pascal case for React component names, similar to class naming.

   Example: `Header`, `LoginForm`

5. `funcName`: Use camel casing for function names, similar to variable names with one exception. Functions should
   have a meaningful prefix.

   Example:

   - Functions that retrieve information: `getUser`
   - Functions that upload / set information: `uploadData`, `setUser`, `setExpense`
   - Other examples: `calculateArea`, `sortExpenses`
