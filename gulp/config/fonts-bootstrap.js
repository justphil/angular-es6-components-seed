var config = require('./');

module.exports = {
    src: config.nodeModulesDirectory + '/bootstrap-sass/assets/fonts/bootstrap/*',
    dest: config.publicDirectory + '/fonts/bootstrap/'
};
