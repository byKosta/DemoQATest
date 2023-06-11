const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  reporter: 'junit',
  reporterOptions: {
        mochaFile: 'reports/test-results-[hash].xml',
  }
  
});
