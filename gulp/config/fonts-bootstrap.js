/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./');

module.exports = {
    src: config.nodeModulesDirectory + '/bootstrap-sass/assets/fonts/bootstrap/*',
    dest: config.publicDirectory + '/fonts/bootstrap/'
};
