module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    'src/components/(.*)$': '<rootDir>/src/components/$1.vue',
    '^vue$': 'vue/dist/vue.common.js',
    'src': '<rootDir>/src',
    'assets': '<rootDir>/src/assets',
    'components': '<rootDir>/src/components'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.*': 'babel-jest',
  }
};
