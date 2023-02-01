const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uns6ri",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    login_url: '/login',
    products_url: '/products',
  }
});
