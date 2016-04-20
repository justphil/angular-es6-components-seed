/*
 Browserify Task
 ---------------
 Bundle JavaScript-ish files with Browserify and use Babel as transform!

 This task is set up to generate multiple separate bundles, from
 different sources, and to use Watchify when run from the default task.
 */

var gulp                    = require('gulp'),
    rev                     = require('gulp-rev'),
    sourcemaps              = require('gulp-sourcemaps'),
    gulpSequence            = require('gulp-sequence'),
    inject                  = require('gulp-inject'),
    gulpFilter              = require('gulp-filter'),
    ngAnnotate              = require('gulp-ng-annotate'),
    uglify                  = require('gulp-uglify'),
    order                   = require('gulp-order'),
    browserify              = require('browserify'),
    watchify                = require('watchify'),
    eslint                  = require('eslintify'),
    babel                   = require('babelify'),
    browserSync             = require('browser-sync'),
    mergeStream             = require('merge-stream'),
    source                  = require('vinyl-source-stream'),
    buffer                  = require('vinyl-buffer'),
    _                       = require('lodash'),
    bundleLogger            = require('../lib/bundleLogger'),
    handleErrors            = require('../lib/handleErrors'),
    hydraOptionalRemover    = require('../lib/hydraOptionalRemover'),
    config                  = require('../config'),
    htmlConfig              = require('../config/html'),
    jsConfig                = require('../config/js'),
    browserifyConfig        = require('../config/browserify');

function bundle(browserifyInstance, bundleConfig, devMode) {
    // log when bundling starts
    bundleLogger.start(bundleConfig.outputName);

    var jsFilter = gulpFilter('*.js');
    var htmlTarget = gulp.src(htmlConfig.watch);
    var templateCacheAssets = gulp.src(jsConfig.productionDest + '/**/templates*.js', {read: false});

    var cssAssets;
    if (devMode) {
        cssAssets = gulp.src(config.publicDirectory + '/**/*.css', {read: false});
    } else {
        cssAssets = gulp.src(config.productionDirectory + '/**/*.css', {read: false});
    }

    var browserifyResult = browserifyInstance
        .bundle()
        // Report compile errors appropriately.
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream compatible with gulp. Specify the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        .pipe(rev())
        // load source map from Browserify file
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(ngAnnotate());

    if (!devMode) {
        browserifyResult = browserifyResult.pipe(uglify());
    }

    // write source map file
    browserifyResult = browserifyResult.pipe(sourcemaps.write('./'));

    if (devMode) {
        browserifyResult = browserifyResult.pipe(gulp.dest(bundleConfig.developmentDest));
    } else {
        browserifyResult = browserifyResult.pipe(gulp.dest(bundleConfig.productionDest));
    }

    browserifyResult = browserifyResult.pipe(jsFilter);

    var injectables = mergeStream(cssAssets, browserifyResult, templateCacheAssets).pipe(order([
        '*app*.js',
        '*templates*.js'
    ]));

    var ignorePath;
    if (devMode) {
        ignorePath = config.developmentInjectIgnorePath;
        if (ignorePath.substr(0, 2) === './') {
            ignorePath = ignorePath.substr(2);
        }

        htmlTarget = htmlTarget.pipe(inject(injectables, {ignorePath: ignorePath, addRootSlash: false}))
                                .pipe(gulp.dest(config.publicDirectory));
    } else {
        ignorePath = config.productionInjectIgnorePath;
        if (ignorePath.substr(0, 2) === './') {
            ignorePath = ignorePath.substr(2);
        }

        htmlTarget = htmlTarget.pipe(inject(injectables, {ignorePath: ignorePath, addRootSlash: false}))
                                .pipe(gulp.dest(config.productionDirectory));
    }

    htmlTarget.pipe(browserSync.reload({
        stream: true
    }));

    return htmlTarget;
}

function browserifyBundle(bundleConfig, devMode, watchMode) {
    if (devMode) {
        // Set debug option (due to source maps)
        _.extend(bundleConfig, {debug: true});
    }

    if (watchMode) {
        // Add watchify args
        _.extend(bundleConfig, watchify.args);
    }

    var browserifyInstance = browserify(bundleConfig);

    if (!devMode) {
        // remove optional components in production build
        browserifyInstance = browserifyInstance.transform(hydraOptionalRemover);
    }

    browserifyInstance = browserifyInstance
        .transform(eslint, {continuous: true}) // enable continuous to prevent JS linting errors from breaking the build
        .transform(babel, {presets: ['es2015']});

    if (watchMode) {
        // Wrap with watchify and rebundle on changes
        browserifyInstance = watchify(browserifyInstance);
        browserifyInstance.on('update', function() {
            gulpSequence('clean:js', function() {
                return bundle(browserifyInstance, bundleConfig, devMode);
            });
        });
        bundleLogger.watch(bundleConfig.outputName);
    }

    if (!devMode) {
        // Sort out shared dependencies.
        // browserifyInstance.require exposes modules externally
        if (bundleConfig.require) {
            browserifyInstance.require(bundleConfig.require);
        }
        // browserifyInstance.external excludes modules from the bundle, and expects
        // they'll be available externally
        if (bundleConfig.external) {
            browserifyInstance.external(bundleConfig.external);
        }
    }

    return bundle(browserifyInstance, bundleConfig, devMode);
}

function browserifyTask(devMode, watchMode) {
    return browserifyBundle(browserifyConfig.bundleConfig, devMode, watchMode);
}

gulp.task('browserify:development', function() {
    return browserifyTask(true, false);
});

gulp.task('browserify:production', function() {
    return browserifyTask(false, false);
});

// Export the browserify task such that we can call it directly in our watch task (with devMode set to true)
module.exports = browserifyTask;
