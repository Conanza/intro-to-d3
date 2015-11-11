// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-10-29 using
// generator-karma 1.0.0

module.exports = function (config) {
  config.set({
    // enable/disable watching file and executing tests whenever any file changes
    autoWatch: true,

    colors: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // list of files / patterns to exclude
    exclude: [
      'app/index.jade'
    ],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/d3/d3.js',
      'bower_components/nvd3/build/nv.d3.js',
      'bower_components/angular-nvd3/dist/angular-nvd3.js',
      'app/**/*.js',
      'app/**/*.jade'
    ],

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // level of logging
    // possible values:
    //  LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Which plugins to enable
    // plugins: [
    //   'karma-jasmine',
    //   'karma-phantomjs-launcher',
    //   'karma-chrome-launcher',
    //   'karma-ng-jade2js-preprocessor'
    // ],

    // web server port
    port: 9999,

    preprocessors: {
      'app/**/*.jade': ['ng-jade2js']
    },

    proxies: {},

    reporters: ['progress'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // URL root prevent conflicts with the site root
    urlRoot: '_karma_'
  });
};
