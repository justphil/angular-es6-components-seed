var config = require('./');

var spritesConfig = {
    src: config.sourceDirectory + '/_bootstrap/sprite-images/*.png',
    tempDir: config.tempDir + '/spritesmith',
    developmentDest: config.publicDirectory + '/images',
    productionDest: config.productionDirectory + '/images',
    spritesmithConfig: {
        imgName: 'sprites.png',
        cssName: 'sprites.scss',
        imgPath: '../images/sprites.png',
        padding: 5
    }
};

spritesConfig.spritesManifestDevelopmentPath = spritesConfig.developmentDest + '/rev-manifest.json';
spritesConfig.spritesManifestProductionPath = spritesConfig.productionDest + '/rev-manifest.json';

module.exports = spritesConfig;
