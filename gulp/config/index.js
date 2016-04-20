var config = {};

config.sourceDirectory              = './src';
config.publicDirectory              = './dev';
config.productionDirectory          = './dist';
config.nodeModulesDirectory         = './node_modules';
config.tempDir                      = './.tmp';
config.developmentInjectIgnorePath  = config.publicDirectory;
config.productionInjectIgnorePath   = config.productionDirectory;

module.exports = config;
