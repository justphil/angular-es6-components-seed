var gulp           = require('gulp'),
    browserifyTask = require('./browserify');

gulp.task('watchify', function() {
    // start browserify task with devMode and watchMode set to true
    return browserifyTask(true, true);
});
