Package.describe({
  name: 'mulian:test-helper',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Test helper for SecureLayer.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mulian/meter-test-helper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('test-helper.js','client');

  api.export('TestHelper','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mulian:test-helper');
  api.mainModule('test-helper-tests.js');
});
