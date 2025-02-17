## Bisect Training - the good, the bad and the regression?

The purpose of this repository is to explore the details around `git bisect`, why it's useful, where it's useful and how to use it to effectively.

`git bisect` is a binary search on a repository commit history, marking commits as `good` or `bad` to indicate whether or not a problem exists on that specific commit. It's particularly useful to identify a specific commit in which a regression/bug/problem was introduced.

## Commands
- `git bisect start` - begins the bisect process.
- `git bisect bad <SHA-value>` - indicates the commit of `<SHA-value>` contains the problem (if no `<SHA-value>` is provided, it will default to your local `HEAD` or the commit which is currently checked out).
- `git bisect good <SHA-value>` - indicates that the commit of `<SHA-value>` does not contain the problem, thereby assuming that the issue must be due to a commit between the `good` and the `bad` commits respectively (if no `<SHA-value>` is provided, it will default to your local `HEAD` or the commit which is currently checked out).
- `git bisect reset` - Ends the bisect process and returns to the `HEAD` commit.

1. **Begin the bisect process**: `git bisect start` This begins the bisect process and we can proceed to mark commits as good and bad respectively.
2. **Mark a `bad` commit**: `git bisect bad <SHA-value>` This tells our bisect process where the regression definitely exists, meaning we know the problem exists at this point.
3. **Mark a `good` commit**: `git bisect good <SHA-value>` This tells our bisect process where the regression definitely isn't present, meaning we know there's no problems at this point in the commit tree.

With our assigned `good` & `bad` commits, we can reasonably assume that the problem was introduced between these 2 points in our history. By going through the bisect process, we can narrow down which specific commit the issue was introduced, marking commits as `good` or `bad` respectively until we can pin-point a specific commit in which the problem began.

## Clone and setup this repository locally
1. `git clone https://github.com/AdamHardieAC/bisect-rebase-exercise.git` - Clone the repository
2. `cd bisect-rebase-exercise` - Switch to the repository working directory.
3. `nvm use` - Use the projects version of node
4. `npm i` - Install the project dependencies
5. `npm run test` - Run the tests to verify the code is running as expected. One of the tests should fail at this point but the rest should run correctly.

## Simple Steps to Use `git bisect`
By following the below commands, we should be able to determine which commit the bug was introduced.

1. **Start the bisect process**:
   ```sh
   git bisect start
   ```
2. **Mark the current commit as bad**:
   ```sh
   git bisect bad
   ```
3. **Mark a known good commit**:
  - For simplicity sake, the most recent good commit is: eff9026
   ```sh
   git bisect good eff9026
   ```
4. **Git will now checkout a commit in the middle. Test this commit**:
  - Test the commit with `npm run test`.
  - If the commit is bad (e.g. the test fails), mark it as bad:
    ```sh
    git bisect bad
    ```
  - If the commit is good (e.g. the test passes), mark it as good:
    ```sh
    git bisect good
    ```
5. **Repeat step 4 until Git narrows down the exact commit that introduced the issue.**
  When the bad commit is found, you should see something like the following:
    ```sh
    a74744f2c262811c392232048e0bd8298aea7307 is the first bad commit
    commit a74744f2c262811c392232048e0bd8298aea7307
    Author: AdamHardieAC <adam.hardie@arnoldclark.com>
    Date:   Mon Feb 17 16:06:36 2025 +0000

        subtraction functionality + test suite

    spec/add.test.js        |  2 +-
    spec/subtract.test.js   | 21 +++++++++++++++++++++
    src/modules/subtract.js |  4 ++++
    3 files changed, 26 insertions(+), 1 deletion(-)
    create mode 100644 spec/subtract.test.js
    create mode 100644 src/modules/subtract.js
    ```
6. **Once the bad commit is found, take note of the commit SHA value and end the bisect process, we'll continue with using rebase to amend the problematic commit**:
   ```sh
   git bisect reset
   ```

## Prerequisites
  ### Node
  Download installer [here](https://nodejs.org/en/download) and go through the installation steps to install node locally.

  ### Installing NVM
  Download installer for windows [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.zip), extract the nvm-setup.exe file, open the file and go through the installation steps to install NVM locally or run `brew install nvm` on mac. If there is a prompt to allow NVM to control the current version of Node on the system, click yes.