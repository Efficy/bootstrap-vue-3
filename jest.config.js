module.exports = {
  testRegex: 'spec.js$',
  moduleFileExtensions: ['js', 'vue', 'ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue3-jest',
  },
  coverageDirectory: './coverage/',
  testEnvironmentOptions: {
    pretendToBeVisual: true,
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/setup.ts'],
  moduleNameMapper: {},
}
