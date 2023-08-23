import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      "webURL":"https://magento.softwaretestingboard.com/"
    },
    watchForFileChanges:false,
    defaultCommandTimeout: 7000,
    video:false
    // "screenshotsFolder": "./cypress/e2e/src/screenshots",
    //  "videosFolder": "./cypress/e2e/src/videos",
    //specPattern:"cypress/e2e/**/*.spec.js",
    //video:false,
  },
});
