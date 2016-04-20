var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build:production', function(cb) {
    gulpSequence('build:nonJsAssets', 'minify:templates', 'minify:css', 'browserify:production', 'karma', cb);
});
