var config = require('./');

module.exports = {
    src: config.sourceDirectory + '/_bootstrap/lang/*.yml',
    dest: config.publicDirectory + '/lang'
};
