const pa11y = require('pa11y');

pa11y('https://www.covenanthousebc.org' /*, {standard: 'WCAG2AAA'}*/).then(
  (results) => {
    // Do something with the results
    console.log(results);
  },
);
