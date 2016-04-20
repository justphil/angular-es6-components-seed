var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    scss = require('postcss-scss'),
    reporter = require('postcss-reporter'),
    stylelint = require('stylelint'),
    sassConfig = require('../config/sass');

gulp.task('sass:lint', ['sass:sprites'], function() {
    return gulp.src(sassConfig.lintingSrc)
        .pipe(
            postcss(
                [stylelint(), reporter({ clearMessages: true, throwError: false })],
                {syntax: scss}
            )
    );
});
