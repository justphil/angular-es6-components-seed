var config = require('./');

module.exports = {
    lintingSrc: config.sourceDirectory + '/**/*.js',
    developmentDest: config.publicDirectory + '/javascripts',
    productionDest: config.productionDirectory + '/javascripts'
};
