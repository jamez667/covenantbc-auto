module.exports = {
  config: {
    sync: true,
    services: ['selenium-standalone', 'devtools'],
    capabilities: [{ browserName: 'chrome' }],
    specs: [
      // './tests/ui/tests/ui.js',
      './test/ui/tests/getHelp_spec.js',
      './test/ui/tests/socialMediaLinks_spec.js',
    ],
    reporters: [
      'spec',
      [
        'allure',
        {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
        },
      ],
    ],
    logLevel: 'warn',
  },
};
