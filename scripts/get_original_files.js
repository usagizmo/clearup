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
        toname = settings.imageDir + basename,
        birthtime = filestat.birthtime
        m = [], cnt = 0;

    while (fs.existsSync(toname)) {
      if (m = toname.match(/\((\d+)\)\..{3}$/)) {
        cnt = +m[1] + 1;
      } else {
        cnt = 1;
      }
      toname = settings.imageDir + name +' ('+cnt+')' + extname;
    }
    fs.copySync(file, toname);
    fs.utimesSync(toname, birthtime, birthtime);
  })
});