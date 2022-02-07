// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

//const { SpecReporter } = require('jasmine-spec-reporter');


const Path = require("path");
exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./e2e/**/*.e2e-spec.ts'],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    const AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  }
};

//jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
