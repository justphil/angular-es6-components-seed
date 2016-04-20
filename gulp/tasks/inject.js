var gulp        = require('gulp'),
    inject      = require('gulp-inject'),
    config      = require('../config'),
    htmlConfig  = require('../config/html');

gulp.task('inject', function() {
    var target = gulp.src(htmlConfig.watch),
        sources = gulp.src(config.publicDirectory + '/**/*.{js,css}', {read: false});

    var ignorePath = config.developmentInjectIgnorePath;
    if (ignorePath.substr(0, 2) === './') {
        ignorePath = ignorePath.substr(2);
    }

    return target.pipe(inject(sources, {ignorePath: ignorePath, addRootSlash: false}))
                 .pipe(gulp.dest(config.publicDirectory));
});
