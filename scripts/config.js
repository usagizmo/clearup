var path = require('path');
var config = {};

config.iPhotoLibraryDir = path.join(process.env.HOME, 'Pictures', 'iPhoto Library.photolibrary');
config.masterDir = path.join(config.iPhotoLibraryDir, 'Masters');

config.appDir = path.join(__dirname, '..');
config.imageDir = path.join(config.appDir, 'images');
config.tempDir = path.join(config.appDir, 'temp');

module.exports = config;
