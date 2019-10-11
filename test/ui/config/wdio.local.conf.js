const video = require('wdio-video-reporter');

module.exports = {
  config: {
    sync: true,
    coloredLogs: true,
    services: ['selenium-standalone', 'devtools'],
    capabilities: [{ browserName: 'chrome' }],
    specs: [
      // './tests/ui/tests/ui.js',
      './test/ui/tests/**.spec.js',
    ],
    maxInstances: 3,
    framework: 'mocha',
    mochaOpts: {
      timeout: 120000,
    },
    reporters: [
      'spec',
      [
        video,
        {
          saveAllVideos: true,
          videoSlowdownMultiplier: 8,
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
