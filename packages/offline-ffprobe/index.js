var os = require('os');
var path = require('path');
var fs = require('fs');

var platform = os.platform();
var arch = os.arch();

if (platform === 'darwin') {
    console.error('MacOS support coming soon.');
    process.exit(1);
}

if (platform !== 'linux' && platform !== 'win32') {
    console.error('Unsupported platform: ' + platform);
    console.error('offline-ffprobe only supports linux and win32 systems');
    process.exit(1);
}

var packageName = 'offline-ffprobe-' + platform + '-' + arch;
var binaryName = platform === 'win32' ? 'ffprobe.exe' : 'ffprobe';

var ffprobePath = path.resolve(__dirname, 'node_modules', '@backendsuraj', packageName, 'bin', binaryName);

if (!fs.existsSync(ffprobePath)) {
    ffprobePath = path.resolve(__dirname, '..', packageName, 'bin', binaryName);
}

if (!fs.existsSync(ffprobePath)) {
    ffprobePath = path.resolve(__dirname, '..', '..', packageName, 'bin', binaryName);
}

exports.path = ffprobePath;
exports.version = '8.0.1';
