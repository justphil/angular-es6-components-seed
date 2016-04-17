/*
 * Copyright (c) 2016 Symantec Corporation.  All Rights Reserved.
 */

var config = require('./');

module.exports = {
  open: false,
  server: {
    baseDir: config.publicDirectory
  },
  files: ['public/**/*.html']
};
