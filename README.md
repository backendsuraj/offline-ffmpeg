# Offline FFmpeg & FFprobe for Node.js

This repository contains the source code for the `@backendsuraj/offline-ffmpeg` and `@backendsuraj/offline-ffprobe` NPM packages.

## Overview
> **Bundled Binary Version: 8.0.0**

These packages are specifically designed for **corporate and offline environments** where external downloads during `npm install` are blocked or unreliable. Unlike other installers that download binaries at runtime, these packages bundle the static binaries directly, ensuring a reliable and immutable installation.

## Supported Architectures
- **Platform**: Windows, Linux
- **Architecture**: x64 (AMD64) only
- **MacOS**: Support coming soon

## Binary Source & License
The bundled binaries are built by [BtbN/FFmpeg-Builds](https://github.com/BtbN/FFmpeg-Builds/releases).
- **Version**: 8.0.0
- **License**: GPL 3.0

## Packages

| Package | Description |
| :--- | :--- |
| **`@backendsuraj/offline-ffmpeg`** | Main installer for FFmpeg. Automatically resolves the correct binary. |
| **`@backendsuraj/offline-ffprobe`** | Main installer for FFprobe. Automatically resolves the correct binary. |

## Usage

### Installation
```bash
npm install @backendsuraj/offline-ffmpeg @backendsuraj/offline-ffprobe
```

### Using FFmpeg
```javascript
import ffmpeg from '@backendsuraj/offline-ffmpeg';
// Prints absolute path to the binary
console.log(ffmpeg.path);

// Example with child_process
import { spawn } from 'child_process';
spawn(ffmpeg.path, ['-version'], { stdio: 'inherit' });
```

### Using FFprobe
```javascript
import ffprobe from '@backendsuraj/offline-ffprobe';
// Prints absolute path to the binary
console.log(ffprobe.path);

// Example with child_process
import { spawn } from 'child_process';
spawn(ffprobe.path, ['-version'], { stdio: 'inherit' });
```

## Contributing
Please refer to the `packages/` directory for individual package source code.

**Note**: This repository uses **Git LFS** for storing binaries. Please ensure you have Git LFS installed before cloning.
