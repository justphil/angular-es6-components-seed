var gulp         = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build:nonJsAssets', function(cb) {
    gulpSequence('clean', 'sass', ['templates', 'yaml', 'html', 'fonts:bootstrap', 'images'], cb);
});
