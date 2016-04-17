/*
 * Copyright (c) 2016 Symantec Corporation. All Rights Reserved.
 */

var config = require('./');

module.exports = {
    src: config.sourceDirectory + '/_bootstrap/images/*',
    dest: config.publicDirectory + '/images/'
};
