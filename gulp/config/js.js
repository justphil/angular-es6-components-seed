/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./');

module.exports = {
    lintingSrc: config.sourceDirectory + '/**/*.js',
    developmentDest: config.publicDirectory + '/javascripts',
    productionDest: config.productionDirectory + '/javascripts'
};
