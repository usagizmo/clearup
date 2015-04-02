var config = require('./config.js'),
    fs = require('fs-extra'),
    glob = require('glob'),
    path = require('path'),
    sizeOf = require('image-size');

if (!fs.existsSync(config.tempDir)) fs.mkdirSync(config.tempDir);

glob(config.imageDir + '/**/*', function(err, files) {
  var sizes = {};
  files.forEach(function(file, i) {
    var filestat = fs.statSync(file);
    if (!filestat.isFile()) return;
    var birthtime = filestat.birthtime,
        size = filestat.size,
        basename = '',
        topath = '';
    if (size in sizes) {
      if (sizes[size].birthtime <= birthtime) {
        basename = path.basename(file);
      } else {
        basename = path.basename(sizes[size]);
      }
      topath = path.join(config.tempDir, basename);
      fs.rename(file, topath);
    } else {
      sizes[size] = {
        file: file,
        birthtime: birthtime
      };
    }
  });
});