/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync');

gulp.task('sass:inject', function(cb) {
    gulpSequence('clean:sass', 'sass', 'inject', function() {
        browserSync.reload();
        cb();
    });
});
