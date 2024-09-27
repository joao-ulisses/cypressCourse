const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  // require('cypress-mochawesome-reporter/plugin')(on);

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/',
    video: true,
    setupNodeEvents,
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
    specPattern: 'cypress/integration/examples/*.js'
  },
  retries: {
    runMode: 1,
    openMode: 1
  },
});
