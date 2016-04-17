/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var istanbul = require('browserify-istanbul'),
    isparta = require('isparta'),
    gulpMainConfig = require('./gulp/config');

// Karma configuration for unit tests
module.exports = function (config) {
    var srcDir = gulpMainConfig.sourceDirectory.substr(2);

    var karmaConfig = {

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine-jquery', 'jasmine', 'browserify'],


        // list of files / patterns to load in the browser
        files: [
            // PhantomJS v1.X doesn't support Function.prototype.bind. So, we need a polyfill for that.
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            srcDir + '/_bootstrap/_bootstrap.js', // our SPA code
            srcDir + '/**/*.spec.js', // our unit tests
            srcDir + '/**/*.html' // our templates (for unit testing directives)
        ],


        // list of files to exclude
        exclude: [
            srcDir + '/index.html'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'junit', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        preprocessors: {},

        ngHtml2JsPreprocessor: {
            stripPrefix: srcDir + '/',
            prependPrefix: 'templates/',
            moduleName: 'ng'
        },

        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: [
                ['babelify', {presets: ['es2015']}],

                // We use istanbul programmatically due to a Karma coverage issue in conjunction with Browserify.
                // See https://github.com/karma-runner/karma-coverage/issues/157 for details.
                istanbul({
                    instrumenter: isparta,
                    ignore: ['**/*.spec.js', '**/vendor/**/*.js', '**/bower_npm_integrations/**/*.js'],
                    defaultIgnore: true // node_modules will be ignored by default
                })
            ]
        },

        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    dir: '.tmp/reports/coverage/html/'
                },
                {
                    type: 'lcovonly',
                    dir: '.tmp/reports/coverage/',
                    subdir: 'lcov/'
                }
            ],
            watermarks: {
                statements: [65, 85],
                functions:  [65, 85],
                branches:   [65, 85],
                lines:      [65, 85]
            }
        },

        junitReporter: {
            outputDir: 'target/surefire-reports/'
        }
    };

    karmaConfig.preprocessors[srcDir + '/**/*.html'] = 'ng-html2js';
    karmaConfig.preprocessors[srcDir + '/**/*.js'] = 'browserify';

    /**
     * Although the specified pattern doesn't match any files
     * we need this line to make IntelliJ's Karma coverage integration work.
     * If there'll be more time we have to investigate further why this lines works...
     */
    karmaConfig.preprocessors[srcDir + '/this path does not care/*.js'] = 'coverage';

    config.set(karmaConfig);
};
