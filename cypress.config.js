const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/',
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  retries: {
    runMode: 1,
    openMode: 1
  },
});
