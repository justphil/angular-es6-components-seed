var config = require('./');

var globPattern = '/**/*.tpl.html';

module.exports = {
    globPattern: globPattern,
    optionalTemplatesFilter: ['**/*.tpl.html', '!**/_optional/**/*.tpl.html'],
    src: config.sourceDirectory + globPattern,
    dest: config.publicDirectory + '/templates',
    templateCache: {
        module: 'hydra',
        moduleSystem: 'IIFE',
        root: 'templates/'
    }
};
