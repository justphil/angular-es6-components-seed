/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = {};

config.sourceDirectory              = './src';
config.publicDirectory              = '../hydra_console_ui_server/src/main/webapp';
config.productionDirectory          = '../hydra_console_ui_server/src/main/webapp';
config.nodeModulesDirectory         = './node_modules';
config.tempDir                      = './.tmp';
config.developmentInjectIgnorePath  = config.publicDirectory;
config.productionInjectIgnorePath   = config.productionDirectory;

module.exports = config;
