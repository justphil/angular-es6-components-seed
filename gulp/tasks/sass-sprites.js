var gulp = require('gulp'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    spritesmith = require('gulp.spritesmith'),
    mergeStream = require('merge-stream'),
    spritesConfig = require('../config/sass-sprites');

function getSpritesmithStylesheetFileExtension(spritesmithCssName) {
    if (typeof spritesmithCssName !== 'string' || spritesmithCssName.length === 0) {
        throw new Error('Please provide a valid spritesmithCssName.');
    }

    var cssNameParts = spritesmithCssName.split('.');
    if (cssNameParts.length < 2) {
        throw new Error('Invalid spritesmithCssName: File extension missing!');
    }

    return '.' + cssNameParts[cssNameParts.length - 1];
}


gulp.task('sass:sprites', function() {
    var spriteData = gulp.src(spritesConfig.src).pipe(spritesmith(spritesConfig.spritesmithConfig));
    var imgStream = spriteData.img
        .pipe(rev())
        .pipe(gulp.dest(spritesConfig.developmentDest))
        .pipe(rev.manifest())
        .pipe(gulp.dest(spritesConfig.developmentDest));

    var cssStream = spriteData.css
        .pipe(revReplace({
            manifest: imgStream,
            replaceInExtensions: [getSpritesmithStylesheetFileExtension(spritesConfig.spritesmithConfig.cssName)]
        }))
        .pipe(gulp.dest(spritesConfig.tempDir));

    return mergeStream(imgStream, cssStream);
});
