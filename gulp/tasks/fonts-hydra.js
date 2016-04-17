/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp = require('gulp'),
    fontsHydraConfig = require('../config/fonts-hydra');

gulp.task('fonts:hydra', function() {
    return gulp.src(fontsHydraConfig.src)
        .pipe(gulp.dest(fontsHydraConfig.dest));
});