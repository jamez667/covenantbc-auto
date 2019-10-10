module.exports = {
  config: {
    sync: true,
    services: ['docker'],
    capabilities: [{ browserName: 'chrome' }],
    specs: ['./test/ui/tests/ui.js', './test/ui/tests/getHelp_spec.js'],
    dockerOptions: {
      image: 'selenium/standalone-chrome',
      healthCheck: 'http://localhost:4444',
      options: {
        p: ['4444:4444'],
        shmSize: '2g',
      },
    },
  },
};
