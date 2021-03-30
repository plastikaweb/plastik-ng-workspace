module.exports = {
  name: 'philosophers',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/philosophers',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
