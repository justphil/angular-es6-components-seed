/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    cssConfig = require('../config/css');

gulp.task('minify:css', function() {
    return gulp.src(cssConfig.productionSrc)
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssConfig.productionDest));
});
