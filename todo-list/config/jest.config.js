module.exports = {
    rootDir: "../",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./config/jest.setup.js"],
    transform: {
      '\\.js$': ['babel-jest', { configFile: './config/.babelrc' }]
    },
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/src/components$1",
      "^@pages(.*)$": "<rootDir>/src/pages$1",
      "^@hooks(.*)$": "<rootDir>/src/hooks$1",
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    testPathIgnorePatterns: ["<rootDir>/cypress/"],
  };