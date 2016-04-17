/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./');

module.exports = {
  watch: config.sourceDirectory + '/index.html',
  src: config.sourceDirectory + '/index.html',
  dest: config.publicDirectory,
  htmlmin: {
    collapseWhitespace: true
  }
};