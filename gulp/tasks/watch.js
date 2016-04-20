var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync'),
    sassConfig = require('../config/sass'),
    templatesConfig = require('../config/templates'),
    htmlConfig = require('../config/html'),
    yamlConfig = require('../config/yaml');

gulp.task('watch', ['watchify'], function () {
    watch(sassConfig.lintingSrc, function () {
        gulp.start('sass:inject');
    });

    watch(templatesConfig.src, function() {
        gulp.start('templates');
    });

    watch(htmlConfig.watch, function () {
        gulp.start('inject:reload');
    });

    watch(yamlConfig.src, function () {
        gulpSequence('yaml', function() {
            browserSync.reload();
        });
    });

    // We don't need to watch JS resources because they are watched by watchify.
});
