const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
