var gulp        = require('gulp'),
    inject      = require('gulp-inject'),
    config      = require('../config'),
    htmlConfig  = require('../config/html');

gulp.task('inject', function() {
    var target = gulp.src(htmlConfig.watch),
        sources = gulp.src(config.publicDirectory + '/**/*.{js,css}', {read: false});

    return target.pipe(inject(sources, {ignorePath: config.developmentInjectIgnorePath, addRootSlash: false}))
                 .pipe(gulp.dest(config.publicDirectory));
});
