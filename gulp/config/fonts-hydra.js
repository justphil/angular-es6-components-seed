/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./');

module.exports = {
    src: config.sourceDirectory + '/_bootstrap/fonts/*',
    dest: config.publicDirectory + '/fonts/'
};
