var gulp = require('gulp'),
    yaml = require('gulp-yaml'),
    yamlConfig = require('../config/yaml');

gulp.task('yaml', function() {
    return gulp.src(yamlConfig.src)
        .pipe(yaml())
        .pipe(gulp.dest(yamlConfig.dest));
});
