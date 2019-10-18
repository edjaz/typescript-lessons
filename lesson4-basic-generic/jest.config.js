module.exports = {
  name: 'typescript-lessons-lesson4-basic-generic',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory:
    '../../../coverage/libs/typescript-lessons/lesson4-basic-generic'
};
