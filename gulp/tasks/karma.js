var gulp = require('gulp'),
    karmaTaskConfig = require('../config/karma'),
    KarmaServer = require('karma').Server;

gulp.task('karma', function(cb) {
    var k = new KarmaServer(karmaTaskConfig, cb);
    k.start();
});
