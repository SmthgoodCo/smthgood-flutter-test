exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["./src/featureFiles/*.feature"],

  maxInstances: 1,

  capabilities: [
    {
      project: "SMTGood",
      build: "Webdriverio Android",
      name: "SMTGood-Appium",

      device: "Google Pixel 5",
      os_version: "12.0",
      app: process.env.BROWSERSTACK_BUILD_NAME,
      "browserstack.debug": true,
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  bail: 0,

  waitforTimeout: 60000,

  connectionRetryTimeout: 120000,

  services: ["browserstack"],

  framework: "cucumber",
  cucumberOpts: {
    backtrace: false,
    requireModule: [],
    failAmbiguousDefinitions: false,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [],
    profile: [],
    require: ["./src/stepDefinitions/*.steps.js"],
    snippetSyntax: undefined,
    snippets: true,
    source: true,
    strict: false,
    tagsInTitle: false,
    timeout: 50000,
    retry: 0,
  },

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  afterStep: function (test, scenario, { error, duration, passed }) {
    if (error) {
      browser.takeScreenshot();
    }
  },

  onComplete: function (exitCode, config, capabilities, results) {
    generate({
      jsonDir: "./reports/json",
      reportPath: "./reports/html",
      openReportInBrowser: false,
    });
  },
};
