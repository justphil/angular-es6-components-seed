/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./'),
    jsConfig = require('./js');

module.exports = {
    bundleConfig: {
        entries: config.sourceDirectory + '/_bootstrap/_bootstrap.js',
        developmentDest: jsConfig.developmentDest,
        productionDest: jsConfig.productionDest,
        outputName: 'app.js'
        // list of externally available modules to exclude from the bundle
        //external: ['angular']
    }
};
