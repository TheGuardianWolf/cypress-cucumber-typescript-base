# Cypress Cucumber Typescript Base

Based off this [example](https://github.com/jmarti-theinit/cypress-cucumber-example).

This testing base includes:

- [Cypress](https://www.cypress.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

The package manager is [pnpm](https://pnpm.io/).

Testing is easy as 1, 2, 3!

1. Write your `.feature` in `cypress/integration`. The language used is [Gherkin](https://cucumber.io/docs/gherkin/reference/).
2. Write your step definitions in a folder with the same naming as your feature
3. Run `pnpm run cypress:open:{yourtestingenv}`

Configure your testing environment with one of the json files in `cypress/config`.

## Problems

As Typescript support from Cypress is still quite new, the `tsconfig.json` is mostly ignored (but needed). We can't use absolute paths. A migration to Webpack is needed to solve this issue, or just wait for developers of Cypress to catch up.
