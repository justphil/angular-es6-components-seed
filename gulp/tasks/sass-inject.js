var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync');

gulp.task('sass:inject', function(cb) {
    gulpSequence('clean:sass', 'sass', 'inject', function() {
        browserSync.reload();
        cb();
    });
});
