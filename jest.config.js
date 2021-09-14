module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts|tsx)?$': './jest.transform.js',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['lcov', 'json-summary', 'html', 'text', 'text-summary'],
  coverageDirectory: '<rootDir>/test-reports/coverage',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['./src/test-utils/setupTests.ts'],
};
