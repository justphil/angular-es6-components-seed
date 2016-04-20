var gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

gulp.task('clean', function (cb) {
  del([
      config.publicDirectory,
      config.productionDirectory,
      config.tempDir
  ], { force: true }, cb);
});
