
![QA](https://github.com/byKosta/DemoQATest/blob/master/Screenshot_500.png)

## Demo QA

- [Link to Demo QA](https://demoqa.com/)

## Cypress Tests

### Installing Cypress

To set up Cypress for your project, follow these steps:

1. Install Cypress as a development dependency:

    ```bash
    npm install cypress --save-dev
    ```

### Running Cypress

1. Open Cypress with the following command:

    ```bash
    npx cypress open
    ```

   This will open the Cypress Test Runner.

### Allure Integration

#### Installing Allure

To integrate Allure into your Cypress project, follow these steps:

1. Install Allure by following the official documentation for your operating system.

#### Cypress Allure Reporter

1. Install the Cypress Allure Reporter:

    ```bash
    npm install -D cypress-allure-reporter
    ```

#### Updating Cypress configuration file (`cypress.json`)

Update your `cypress.json` file to include the Cypress Allure Reporter:

```json
{
  "reporter": "cypress-allure-reporter"
}

## Sample GitHub Actions Pipeline
## Here is an example GitHub Actions pipeline configuration for running Cypress tests and generating Allure reports:
name: CI/CD

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Install Dependencies
        run: npm install

      - name: Run Cypress Tests
        run: npx cypress run

      - name: Generate Allure Reports
        run: allure generate --clean && allure open


