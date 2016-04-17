/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp         = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build:nonJsAssets', function(cb) {
    gulpSequence('clean', 'sass', ['templates', 'yaml', 'html', 'fonts:bootstrap', 'fonts:hydra', 'images'], cb);
});
