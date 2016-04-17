/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    postcss      = require('gulp-postcss'),
    rev          = require('gulp-rev'),
    autoprefixer = require('autoprefixer'),
    browserSync  = require('browser-sync'),
    handleErrors = require('../lib/handleErrors'),
    sassConfig   = require('../config/sass');

gulp.task('sass', ['sass:lint'], function () {
    return gulp.src(sassConfig.entryPoint)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(sassConfig.autoprefixer)]))
        .pipe(rev())
        .on('error', handleErrors)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(sassConfig.dest));
});
