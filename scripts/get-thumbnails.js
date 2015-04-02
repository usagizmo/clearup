var config = require('./config.js'),
    fs = require('fs-extra'),
    glob = require('glob'),
    path = require('path'),
    sizeOf = require('image-size');

if (!fs.existsSync(config.tempDir)) fs.mkdirSync(config.tempDir);

glob(config.imageDir + '/**/*', function(err, files) {
  files.forEach(function(file, i) {
    var filestat = fs.statSync(file),
        info = path.parse(file),
        extname = path.parse(file).ext;
    if (!filestat.isFile() || !(extname === '.jpg' || extname === '.JPG')) return;
    var basename = info.base;
    try {
      var dimensions = sizeOf(file);

      if (basename.indexOf('thumb_') === 0 ||
          dimensions.width === 360 ||
          dimensions.height === 360) {

        var topath = path.join(config.tempDir, basename);
        fs.rename(file, topath);
        console.log(i + ': ' + file);
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  });
});