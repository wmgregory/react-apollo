module.exports = {
  roots: ['<rootDir>/src/'],

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{tsx?}', '!src/**/*.d.ts', '!src/**/*.mock.ts', '!src/**/*.js'],
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

  snapshotSerializers: ['enzyme-to-json/serializer'],
};
