## Simple Steps to Fix a Problematic Commit using Revert & Cherry-Pick

Once you've identified the problematic commit using `git bisect`, you can fix it by reverting the commit and then applying a new fix using cherry-pick. Follow these steps:

1. **Revert the problematic commit**:  
   This creates a new commit that undoes the changes introduced by the problematic commit.  
   ```sh
   git revert <problematic-commit-SHA>
   or in our case:
   git revert a74744f2c262811c392232048e0bd8298aea7307
   ```
2. **Cherry-pick the commit**:
  Now that we've reverted the broken commit, we can reinstate it to modify and fix the issue, maintaining a linear commit history.
  We do that with the following:
  ```sh
  git cherry-pick a74744f2c262811c392232048e0bd8298aea7307 --no-commit
  ```
  This will pull the changes into our working directory, allowing us to modify the changes and commit with the same or a different message.

3. **Stage your changes**:
  Now it's time to commit and push you changes to github as you would normally.
  ```sh
  git add .
  git commit -m "subtraction functionality + test suite with bug fix"
  ```

  To verify the order of commits you'll be pushing, use the following:
  ```sh
  git log --oneline
  ```
  You should see something along the lines of the following at the tip of your branch:
  `fcdd977 (HEAD -> main) subtraction functionality + test suite`
  `483e5c0 Revert "subtraction functionality + test suite"`
  This verifies that the most recent changes will revert the broken commit and has the new commit with the fix for that broken commit