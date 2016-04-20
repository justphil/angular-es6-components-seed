var gulp                = require('gulp'),
    browserSync         = require('browser-sync'),
    browserSyncConfig   = require('../config/browserSync');

gulp.task('browserSync', function() {
  return browserSync(browserSyncConfig);
});
