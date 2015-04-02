var config = require('./config.js'),
    fs = require('fs-extra'),
    glob = require('glob'),
    path = require('path');

glob(config.masterDir + '/**/*', function(err, files) {
  files.forEach(function(file) {
    var filestat = fs.statSync(file);
    if (!filestat.isFile()) return;
    var info = path.parse(file),
        basename = info.base,
        name = info.name,
        extname = info.ext,
        topath = path.join(config.imageDir, basename),
        birthtime = filestat.birthtime
        m = [], cnt = 0;

    while (fs.existsSync(topath)) {
      if (m = topath.match(/\((\d+)\)\..{3}$/)) {
        cnt = +m[1] + 1;
      } else {
        cnt = 1;
      }
      topath = path.join(config.imageDir, name +' ('+cnt+')' + extname);
    }
    fs.copySync(file, topath);
    fs.utimesSync(topath, birthtime, birthtime);
  })
});