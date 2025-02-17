## Bisect Training - the good, the bad and the regression?

The purpose of this repository is to explore the details around `git bisect`, why it's useful, where it's useful and how to use it to effectively.

`git bisect` is a binary search on a repository commit history, marking commits as `good` or `bad` to indicate whether or not a problem exists on that specific commit. It's particularly useful to identify a specific commit in which a regression/bug/problem was introduced.

## Commands
- `git bisect start` - begins the bisect process.
- `git bisect bad <SHA-value>` - indicates the commit of `<SHA-value>` contains the problem (if no `<SHA-value>` is provided, it will default to your local `HEAD` or the commit which is currently checked out).
- `git bisect good <SHA-value>` - indicates that the commit of `<SHA-value>` does not contain the problem, thereby assuming that the issue must be due to a commit between the `good` and the `bad` commits respectively (if no `<SHA-value>` is provided, it will default to your local `HEAD` or the commit which is currently checked out).

1. **Begin the bisect process**: `git bisect start` This begins the bisect process and we can proceed to mark commits as good and bad respectively.
2. **Mark a `bad` commit**: `git bisect bad <SHA-value>` This tells our bisect process where the regression definitely exists, meaning we know the problem exists at this point.
3. **Mark a `good` commit**: `git bisect good <SHA-value>` This tells our bisect process where the regression definitely isn't present, meaning we know there's no problems at this point in the commit tree.

With our assigned `good` & `bad` commits, we can reasonably assume that the problem was introduced between these 2 points in our history. By going through the bisect process, we can narrow down which specific commit the issue was introduced, marking commits as `good` or `bad` respectively until we can pin-point a specific commit in which the problem began.