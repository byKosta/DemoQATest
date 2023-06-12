const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
   e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
  },
  video: false,
   reporter: 'junit',
   reporterOptions: {
        mochaFile: 'reports/test-results-[hash].xml',
  },

});

