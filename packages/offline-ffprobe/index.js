const os = require('os');
const path = require('path');
const fs = require('fs');

const platform = os.platform();
const arch = os.arch();

if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
    console.error(`Unsupported platform: ${platform}`);
    process.exit(1);
}

if (platform === 'darwin') {
    console.error('MacOS support coming soon.');
    process.exit(1);
}

const packageName = `@backendsuraj/offline-ffprobe-${platform}-${arch}`;

if (!require('./package.json').optionalDependencies[packageName]) {
    throw `Unsupported platform/architecture: ${platform}-${arch}`;
}

const binaryName = platform === 'win32' ? 'ffprobe.exe' : 'ffprobe';

// verify-file implementation
const verifyFile = (file) => {
    try {
        const stats = fs.statSync(file);
        return stats.isFile() && stats.size > 0;
    } catch (e) {
        return false;
    }
};

// Strategy 1: npm3 (flat dependencies) - sibling of this package
const npm3Path = path.resolve(__dirname, '..', `offline-ffprobe-${platform}-${arch}`);

// Strategy 2: npm2 (nested dependencies) - inside this package's node_modules
const npm2Path = path.resolve(__dirname, 'node_modules', '@backendsuraj', `offline-ffprobe-${platform}-${arch}`);

// Strategy 3: Top level node_modules (handle docker/monorepo edge cases)
const topLevelPath = path.resolve(__dirname.substring(0, __dirname.indexOf('node_modules')), 'node_modules', '@backendsuraj', `offline-ffprobe-${platform}-${arch}`);

const npm3Binary = path.join(npm3Path, 'bin', binaryName);
const npm2Binary = path.join(npm2Path, 'bin', binaryName);
const topLevelBinary = path.join(topLevelPath, 'bin', binaryName);

const npm3Package = path.join(npm3Path, 'package.json');
const npm2Package = path.join(npm2Path, 'package.json');
const topLevelPackage = path.join(topLevelPath, 'package.json');

let ffprobePath;
let packageJson;

if (verifyFile(npm3Binary)) {
    ffprobePath = npm3Binary;
    packageJson = require(npm3Package);
} else if (verifyFile(npm2Binary)) {
    ffprobePath = npm2Binary;
    packageJson = require(npm2Package);
} else if (verifyFile(topLevelBinary)) {
    ffprobePath = topLevelBinary;
    packageJson = require(topLevelPackage);
} else {
    throw `Could not find ffprobe executable, tried:
 - ${npm3Binary}
 - ${npm2Binary}
 - ${topLevelBinary}`;
}

exports.path = ffprobePath;
exports.version = packageJson.version;
