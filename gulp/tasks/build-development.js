var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
    gulpSequence('build:nonJsAssets', 'browserify:development', cb);
});
