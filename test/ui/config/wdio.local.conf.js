module.exports = {
  config: {
    sync: true,
    services: ['selenium-standalone', 'devtools'],
    capabilities: [{ browserName: 'chrome' }],
    specs: ['./test/ui/tests/ui.js', './test/ui/tests/getHelp_spec.js'],
  },
};
