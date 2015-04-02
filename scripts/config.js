var path = require('path');
var config = {};

config.iPhotoLibraryDir = process.env.HOME + '/Pictures/iPhoto Library.photolibrary';
config.masterDir = path.join(config.iPhotoLibraryDir, 'Masters');
config.appDir = path.join(__dirname, '..');
config.imageDir = path.join(config.appDir, 'images');

module.exports = config;
