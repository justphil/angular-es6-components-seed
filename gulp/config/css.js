var config = require('./'),
    sassConfig = require('./sass');

module.exports = {
    productionSrc: sassConfig.dest + '/**/*.css',
    productionDest: config.productionDirectory + '/stylesheets'
};
