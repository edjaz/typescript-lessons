module.exports = {
  name: 'typescript-lessons-lesson1-basic-types',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory:
    '../../../coverage/libs/typescript-lessons/lesson1-basic-types'
};
