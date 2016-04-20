var transformTools = require('browserify-transform-tools');
var optionalFile = 'src/_optional/_optional.js';

module.exports = transformTools.makeStringTransform('hydra-optional-remover', {}, function (content, opts, done) {
    if (opts.file.length >= optionalFile.length && opts.file.substr(optionalFile.length * -1) === optionalFile) {
        content = 'export default {OPTIONAL_COMPONENTS: [], OPTIONAL_ROUTES: []};\n';
    }

    done(null, content);
});
