const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(js)",
    "**/?(*.)+(spec|test).+(js)"
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
};