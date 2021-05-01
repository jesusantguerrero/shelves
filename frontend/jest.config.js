module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!)@testing-library/vue'],
};
