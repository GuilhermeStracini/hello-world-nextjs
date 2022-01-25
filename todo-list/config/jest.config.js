module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/src/components$1",
      "^@pages(.*)$": "<rootDir>/src/pages$1",
      "^@hooks(.*)$": "<rootDir>/src/hooks$1",
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
  };