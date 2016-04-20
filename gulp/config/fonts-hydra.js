var config = require('./');

module.exports = {
    src: config.sourceDirectory + '/_bootstrap/fonts/*',
    dest: config.publicDirectory + '/fonts/'
};
