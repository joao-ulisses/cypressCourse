const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  env: {
    url: 'https://rahulshettyacademy.com/seleniumPractise/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
