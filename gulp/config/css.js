/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./'),
    sassConfig = require('./sass');

module.exports = {
    productionSrc: sassConfig.dest + '/**/*.css',
    productionDest: config.productionDirectory + '/stylesheets'
};
