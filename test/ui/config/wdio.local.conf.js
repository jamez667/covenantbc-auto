const video = require('wdio-video-reporter');

module.exports = {
  config: {
    sync: true,
    coloredLogs: true,
    services: ['selenium-standalone', 'devtools'],
    capabilities: [{ browserName: 'chrome' }],
    specs: [
      // './tests/ui/tests/ui.js',
      './test/ui/tests/getHelp_spec.js',
      './test/ui/tests/socialMediaLinks_spec.js',
    ],
    framework: 'mocha',
    mochaOpts: {
      timeout: 60000,
    },
    reporters: [
      'spec',
      [
        video,
        {
          saveAllVideos: true,
          videoSlowdownMultiplier: 3,
          videoRenderTimeout: 5,
        },
      ],
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
