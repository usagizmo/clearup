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

    if (!(m = name.match(/^\d{4}-\d{2}-\d{2} \d{2}[\.]\d{2}[\.]\d{2}$/))) return;

    datetime = moment(m[0], 'YYYY-MM-DD HH.mm.ss').toDate();
    fs.utimesSync(file, datetime, datetime);
  })
});