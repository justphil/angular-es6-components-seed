/*
 * Copyright (c) 2016 Symantec Corporation. All Rights Reserved.
 */

var gulp = require('gulp'),
    imagesConfig = require('../config/images');

gulp.task('images', function() {
    return gulp.src(imagesConfig.src)
        .pipe(gulp.dest(imagesConfig.dest));
});
