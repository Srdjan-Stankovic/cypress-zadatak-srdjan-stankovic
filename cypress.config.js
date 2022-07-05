const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    env: {
      VALID_USER_EMAIL: 'cypress@test.com',
      VALID_USER_PASSWORD: 'Test1234'
    }
  },
});
