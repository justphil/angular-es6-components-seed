var gulp = require('gulp'),
    fontsConfig = require('../config/fonts-bootstrap');

gulp.task('fonts:bootstrap', function() {
    return gulp.src(fontsConfig.src)
        .pipe(gulp.dest(fontsConfig.dest));
});
