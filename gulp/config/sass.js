/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./');

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  lintingSrc: config.sourceDirectory + '/**/*.s+(a|c)ss',
  entryPoint: config.sourceDirectory + '/_bootstrap/stylesheets/main.scss',
  dest: config.publicDirectory + '/stylesheets'
};
