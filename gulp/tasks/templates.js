/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var gulp = require('gulp'),
    revReplace = require('gulp-rev-replace'),
    browserSync  = require('browser-sync'),
    templatesConfig = require('../config/templates'),
    spritesConfig = require('../config/sass-sprites');

gulp.task('templates', function() {
    var spritesManifestDevelopmentStream = gulp.src(spritesConfig.spritesManifestDevelopmentPath);

    return gulp.src(templatesConfig.src)
        .pipe(revReplace({
            manifest: spritesManifestDevelopmentStream,
            replaceInExtensions: ['.html']
        }))
        .pipe(gulp.dest(templatesConfig.dest))
        .pipe(browserSync.reload({stream: true}));
});
