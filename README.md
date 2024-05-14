
![QA](https://github.com/byKosta/DemoQATest/blob/master/Screenshot_500.png)

# DemoQA is a website that offers various demonstration examples and educational materials for testing web applications. It provides a wide range of interactive examples allowing users to explore the basic features and capabilities of various web development technologies such as HTML, CSS, JavaScript, React, and many others. Additionally, DemoQA offers code samples and instructions to help users better understand and master different aspects of web development. This resource is a valuable tool for both beginner developers looking to learn and experienced professionals seeking to expand their knowledge and improve their skills.

- [Link to Demo QA](https://demoqa.com/)

Getting Started with Cypress:
Cypress is an advanced end-to-end testing framework designed for modern web applications. To embark on your journey with Cypress, follow these elegant steps:

# 1. Install Node.js:
Ensure you have the latest version of Node.js installed. Head over to the official Node.js website and download the installation package.
https://nodejs.org/en/download/current

# 2. Set Up Your Project:
Create a new project or navigate to your existing one. Open your terminal and traverse to your project directory:
```bash
cd path/to/your/project
```
# 3. Initialize Your Project:
Initialize your project with npm, generating a package.json file containing essential project details:
https://www.cypress.io/
```bash
npm init -y
```
# 4. Cypress Installation:
Install Cypress using npm, employing the following command:
```bash
npm install cypress --save-dev
```
# 5. Launch Cypress:
After successful installation, launch Cypress by executing:
```bash
npx cypress open
```
This command opens the Cypress Test Runner interface, providing an intuitive platform to create, execute, and monitor your tests.

### Allure Integration

#### Installing Allure
https://allurereport.org/docs/gettingstarted-installation/

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

