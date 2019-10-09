module.exports = {
  config: {
    services: ['selenium-standalone', 'devtools'],
    capabilities: [{ browserName: 'chrome' }],
    specs: [
      './test/e2e/tests/smoke.js',
    ],
  },
};
