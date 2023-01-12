# CypressAutomationTemplate_API_E2E
1. Download and Install  Node.js & NPM: 
- https://nodejs.org/en/download/
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
After install required software => Follow there step to build project
2. Create folder code
3. Open folder code in Visual Studio Code
4. Open Terminal
5. Create new cypress project:
npm init
{
  "name": "cypressautomationtemplate",
  "version": "1.0.0",
  "description": "CypressCucumberAutomationTemplate",
  "main": "index.js",
  "scripts": {
    "test": "cypress open"
  },
  "keywords": [
    "cypress",
    "cucumber"
  ],
  "author": "Ha Cao",
  "license": "ISC"
}

6. install cypress:
npm install cypress --save-dev

7: start cypress project:
npm run test or npx cypress open

8. Typescript install setup:
npm install --save-dev typescript
create file tsconfig.json:
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}

https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript

9. xpath setup:
https://github.com/cypress-io/cypress/tree/develop/npm/xpath
npm install -D @cypress/xpath --save-dev
Add the code into cypress.config.js: require('@cypress/xpath');
Importance note: add the code  into tsconfig.json:
"types": ["cypress", "node", "@cypress/xpath"]

10. Page oject model setup:
create file Selector as pages
const LoginPage = {
  //elements input here:
  username: "",
  ....
}
export default LoginPage
insert the code into .cy.ts file:
import apiLoginPage from "../pages/apiLoginPage";

11. How to use Fixture file connection, insert the code into .cy.ts file
const apittesingdatajson = require("../../fixtures/apitesting")

ProjectRoot
    |__cypress
    |        |___ fixtures
    |        |___ e2e
    |                |___ pages: PageObject Folder
    |                |___ tests: Test cases folder
    |        |___ reports
    |        |___ screenshots
    |        |___ videos
    |        |___ support
    |__package.json
    |__cypress.config.js
    |__tsconfig.json

12. Install report: https://www.npmjs.com/package/cypress-mochawesome-reporter
npm install mochawesome --save-dev
npm i --save-dev cypress-mochawesome-reporter
npm install mochawesome-merge --save-dev

Details for: Options commands: https://docs.cypress.io/guides/guides/command-line#cypress-run

13. Cucumber setup:
https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
npm install esbuild --save-dev
