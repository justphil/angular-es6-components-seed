var config = require('./');

module.exports = {
    src: config.sourceDirectory + '/_bootstrap/images/*',
    dest: config.publicDirectory + '/images/'
};
