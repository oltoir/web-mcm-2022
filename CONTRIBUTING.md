# Contributing

## Pull Request Process

1. The name of your branch should explain what you're doing:
   - If you are going to create new component or implement new features for existing component, name your branch `feat/component-name`;
   - If you are going to write styles for component, name your branch `style/component-name`;
   - If you are going to fix bugs in component, name your branch `fix/component-name`;
   - If you are going to increase performance by making some optimizations for component, name your branch `perf/component-name`;
   - If you are going to refactor code in component, name your branch `refactor/component-name`;
   - For other minor changes like changing some text in component, name your branch `chore/component-name`;
2. Don't make changes which are not related to the component written in your branch: if your branch is `feat/header`, changes in your branch must be related to `Header` component. Don't make changes to `Footer` or other components in your `feat/header` branch, create new branch `feat/footer` or `feat/component-name` for this.
3. It is preferable to make your commits as small as possible, remember that you might have more than one commits in one `PR`. For example, if you are creating `Header` component in `feat/header` branch, you can make multiple commits describing each step during implementation:
   `feat(header): create logo component`
   `feat(header): create navbar`
   `style(header): make navbar adaptive`
   `feat(header): implement light/dark modes` and so on. It is better than committing hundreds lines of code in one commit. However, don't forget that commits should be logically chained and meaningful, don't make commits like `feat(header): add some empty lines`, `feat(header): add some console.logs`, `feat(header): remove console.logs from previous commit`, and so on.
4. Don't forget to make pull from remote branch. If you're going to create `PR` to the `dev` branch, run `git pull origin dev --rebase` before pushing your branch. Read more about [git rebase](https://git-scm.com/docs/git-rebase).
5. If you get comments from Project Maintainer related to your `PR`, fix them and push to your branch.
6. Sometimes comments might be minor and there might be no reason to write new commit message. In such cases you can use `git commit --amend --no-edit` and `git push origin branch-name --force`. However, before doing so, please, read about [Rewriting History in GIT](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History).
7. If your changes have `eslint errors`, they will not be committed because of `pre-commit` hook. Keep calm, just fix `eslint errors` in your code and commit your changes.

## IDE's and code editors

1. It is preferable to use `WebStorm` IDE(Integrated Development Environment), because it has most necessary things out-of-the-box and don't need extra configuration.
2. You can also use `VSCode` code editor, but there are list of extensions you should install:

- ESLint
- Prettier
- Auto Close Tag
- Auto Rename Tag
- Auto Import

3. No matter what tool you choose, both of them have `format on save` feature, and you should activate it

- [Activate format on save in VSCode](https://linuxpip.org/vscode-format-on-save/)
- [Activate format on save in WebStorm](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_reformat_code)
