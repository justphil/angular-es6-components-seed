/*
 * Copyright (c) 2016 Symantec Corporation. All Rights Reserved.
 */

var getOriginalKarmaConfig = require('./karma.conf');

// Karma configuration for debugging unit tests
module.exports = function(config) {
    var originalKarmaConfig;
    var configSurrogate = {
        set: function(karmaConfig) {
            originalKarmaConfig = karmaConfig;
        }
    };

    getOriginalKarmaConfig(configSurrogate);

    if (typeof originalKarmaConfig !== 'object') {
        throw new Error('The original karma config hasn\'t been initialized!');
    }

    // set karma's log level to debug
    originalKarmaConfig.logLevel = config.LOG_DEBUG;

    // remove the istanbul call that obfuscate the source code with coverage instrumentation
    originalKarmaConfig.browserify.transform = [
        ['babelify', {presets: ['es2015']}]
    ];

    // don't shut down karma after executing the test cases
    originalKarmaConfig.singleRun = false;

    // remove all browsers because we will connect to the karma server manually
    originalKarmaConfig.browsers = [];

    config.set(originalKarmaConfig);
};
