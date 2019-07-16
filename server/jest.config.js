module.exports = {
  roots: ['<rootDir>/src/'],

  preset: 'ts-jest',

  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      stringifyContentPathRegex: true,
    },
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(gql|graphql)$': 'jest-transform-graphql',
  },

  setupFilesAfterEnv: ['<rootDir>/config/jest/setupJest.ts'],

  testMatch: ['**/*.(spec|test).{ts,tsx,js}'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/config/', '/dist/'],

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{tsx?}', '!src/**/*.d.ts', '!src/**/*.mock.ts', '!src/**/*.js', '!src/**/*.graphql'],
  coverageReporters: ['clover', 'json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  coveragePathIgnorePatterns: ['/config/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'graphql'],
};
