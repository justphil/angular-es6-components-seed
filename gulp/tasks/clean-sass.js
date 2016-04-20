var gulp        = require('gulp'),
    del         = require('del'),
    sassConfig  = require('../config/sass'),
    spritesmithConfig = require('../config/sass-sprites');

gulp.task('clean:sass', function (cb) {
    del([sassConfig.dest, spritesmithConfig.tempDir], { force: true }, cb);
});
