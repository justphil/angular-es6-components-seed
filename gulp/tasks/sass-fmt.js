var gulp = require('gulp'),
    cssfmt = require('gulp-cssfmt'),
    config = require('../config/'),
    sassConfig = require('../config/sass');

gulp.task('sass:fmt', function () {
    return gulp.src(sassConfig.lintingSrc)
        .pipe(cssfmt())
        .pipe(gulp.dest(config.sourceDirectory));
});
