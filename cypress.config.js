const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: false,
    specPattern: "e2e/**/*.cy.js",
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
  viewportHeight: 720,
  viewportWidth: 1280
});

