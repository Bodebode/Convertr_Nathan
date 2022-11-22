const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://angular.realworld.io/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
