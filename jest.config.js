const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  modulePathIgnorePatterns: ['routes/']
};