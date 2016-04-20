var gulp        = require('gulp'),
    eslint      = require('gulp-eslint'),
    jsConfig    = require('../config/js');

/**
 * This task's purpose is to have a dedicated possibility to lint the JavaScript code without building the SPA.
 * The build task does NOT rely on this task. Instead it uses 'eslintify' as a browserify transform to perform
 * the linting.
 */
gulp.task('js:lint', function() {
    return gulp.src(jsConfig.lintingSrc)
        .pipe(eslint())
        .pipe(eslint.format());
});
