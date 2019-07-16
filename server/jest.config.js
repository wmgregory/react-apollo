module.exports = {
  roots: ['<rootDir>/src/'],
  globals: {
    __TS_CONFIG__: {
      target: 'es2015',
      module: 'commonjs',
      moduleResolution: 'node',
    },
    'ts-jest': {
      tsConfigFile: 'tsconfig.spec.json',
    },
    __TRANSFORM_HTML__: true,
  },
  testMatch: ['**/*.(spec|test).{ts,tsx,js}'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setupJest.ts',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/config/', '/dist/'],
  collectCoverage: false,
  // coverageThreshold: {
  //   global: {
  //     branches: 75,
  //     functions: 75,
  //     lines: 75,
  //     statements: 75
  //   }
  // },
  coverageReporters: ['lcov', 'html'],
  collectCoverageFrom: ['src/**/*.{ts}', '!src/**/*.d.ts', '!src/**/*.mock.ts', '!src/**/*.js', '!src/**/*.graphql'],
  coveragePathIgnorePatterns: ['/config/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'graphql'],
};
