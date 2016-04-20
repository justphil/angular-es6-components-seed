var config = require('./');

module.exports = {
  open: false,
  server: {
    baseDir: config.publicDirectory
  },
  files: ['public/**/*.html']
};
