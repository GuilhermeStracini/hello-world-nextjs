module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/components$1",
      "^@pages(.*)$": "<rootDir>/pages$1",
      "^@hooks(.*)$": "<rootDir>/hooks$1",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    },
  };