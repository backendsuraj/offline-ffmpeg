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
    console.error('offline-ffmpeg only supports linux and win32 systems');
    process.exit(1);
}

var packageName = 'offline-ffmpeg-' + platform + '-' + arch;
var binaryName = platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg';

var ffmpegPath = path.resolve(__dirname, 'node_modules', '@backendsuraj', packageName, 'bin', binaryName);

if (!fs.existsSync(ffmpegPath)) {
    ffmpegPath = path.resolve(__dirname, '..', packageName, 'bin', binaryName);
}

if (!fs.existsSync(ffmpegPath)) {
    ffmpegPath = path.resolve(__dirname, '..', '..', packageName, 'bin', binaryName);
}

exports.path = ffmpegPath;
exports.version = '8.0.2';
