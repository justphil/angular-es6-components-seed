/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp             = require('gulp'),
    del              = require('del'),
    browserifyConfig = require('../config/browserify');

gulp.task('clean:js', function () {
    del.sync([browserifyConfig.bundleConfig.developmentDest], { force: true });
});
