var config = require('./config.js'),
    fs = require('fs-extra'),
    glob = require('glob'),
    path = require('path'),
    moment = require('moment');

glob(config.imageDir + '/**/*', function(err, files) {
  files.forEach(function(file) {
    var filestat = fs.statSync(file);
    if (!filestat.isFile()) return;
    var info = path.parse(file),
        name = info.name,
        datetime;

    if (m = name.match(/^\d{4}-\d{2}-\d{2} \d{2}[\.]\d{2}[\.]\d{2}/)) {
      datetime = moment(m[0], 'YYYY-MM-DD HH.mm.ss').toDate();
      fs.utimesSync(file, datetime, datetime);
      return;
    }

    if (m = name.match(/^\d{6}_\d{6}/)) {
      datetime = moment(m[0], 'YYMMDD_HHmmss').toDate();
      fs.utimesSync(file, datetime, datetime);
      return;
    }
  })
});