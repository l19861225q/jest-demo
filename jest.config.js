module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/controllers/**'],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },
    "./src/components/": {
      "branches": 40,
      "statements": 40
    },
    "./src/reducers/**/*.js": {
      "statements": 90
    },
    "./src/api/very-important-module.js": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).spec.[jt]s?(x)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
