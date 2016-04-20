var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync');

gulp.task('inject:reload', function(cb) {
    gulpSequence('inject', function() {
        browserSync.reload();
        cb();
    });
});
