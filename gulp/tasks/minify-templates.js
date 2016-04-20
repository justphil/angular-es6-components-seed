var gulp            = require('gulp'),
    htmlmin         = require('gulp-htmlmin'),
    rev             = require('gulp-rev'),
    templateCache   = require('gulp-angular-templatecache'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),
    revReplace      = require('gulp-rev-replace'),
    filter          = require('gulp-filter'),
    jsConfig        = require('../config/js'),
    templatesConfig = require('../config/templates'),
    htmlConfig      = require('../config/html'),
    spritesConfig   = require('../config/sass-sprites');

gulp.task('minify:templates', function() {
    var spritesManifestProductionStream = gulp.src(spritesConfig.spritesManifestProductionPath);

    return gulp.src(templatesConfig.src)
        .pipe(filter(templatesConfig.optionalTemplatesFilter))
        .pipe(revReplace({
            manifest: spritesManifestProductionStream,
            replaceInExtensions: ['.html']
        }))
        .pipe(htmlmin(htmlConfig.htmlmin))
        .pipe(templateCache(templatesConfig.templateCache))
        .pipe(rev())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsConfig.productionDest));
});
