## Simple Steps to Use Interactive Rebase

Now that we have identified the problematic commit using `git bisect`, you can use an interactive rebase to fix the issue using the following steps:

1. **Start an interactive rebase**:
  ```sh
  git rebase -i <SHA-of-commit-before-problematic-commit>
  In our case:
  git rebase -i eff9026
  ```
2. **Edit the problematic commit**:
  - In the interactive rebase editor, change the word pick to edit next to the problematic commit.
  - Save and close the editor.
3. **Make the necessary changes**:
  - Git will stop at the problematic commit. 
  - Make changes to fix the issue.
  - Stage the changes:
    ```sh
    git add <file(s)-you-changed>
    In our case: 
    git add spec/add.test.js
    ```
4. **Amend the commit**:
  ```sh
    git commit --amend
  ```
5. **Continue the rebase**:
  ```sh
    git rebase --continue
  ```
6. **Repeat steps 3-5 if there are more commits to edit. Otherwise, the rebase process will complete.**
7. **Once the rebase process has completed, push the fixed commit(s)**
  - You'll need to do `git push -f` as the commit history now differs from what is on github.