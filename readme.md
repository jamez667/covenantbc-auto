## What is this repo for?

Contains scripts used to run test automation on the website 

## How to use it?

### UI Test
After installing the package using `yarn install`, run the tests using `npm run ui`.

The tests includes: 
- Form validation in donate page
- Help and social media button in home page
- Search function
- Email subscription validation

The report will come out after the tests run.

### Accessibility Test
After running through the setup step(s) below to install dependencies, run the tests using `npm run accessibility`.

The tests includes:
- Recommendations on site improvements to facilitate accessibility based on the WCAGAA standard

## What's inside?

### Scripts

#### `start`
Used by heroku to start web server that hosts test results.

#### `build`
Is executed while deployment. It runs lints and tests.

## Development

### Requirements

1. nodejs
1. yarn

### Setup

1. yarn install

[test report](https://covenant-bc-test-automation.herokuapp.com/)
