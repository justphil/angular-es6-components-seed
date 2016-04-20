var gulp         = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('default', function(cb) {
    gulpSequence('build:nonJsAssets', 'watch', 'browserSync', cb);
});
