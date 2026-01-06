# @backendsuraj/offline-ffmpeg

A platform-independent, offline-friendly binary installer of **FFmpeg** for Node.js projects.

> **FFmpeg Version: 8.0.0**


## Why this package?
Most FFmpeg wrappers download the binary at runtime or install time. This fails in strict corporate environments with firewalls or proxies.
This package **bundles the binaries directly**, so `npm install` is all you need.

## Usage

### Standard Node.js
```javascript
import ffmpeg from '@backendsuraj/offline-ffmpeg';
import { spawn } from 'child_process';

const ffmpegPath = ffmpeg.path;
spawn(ffmpegPath, ['-version'], { stdio: 'inherit' });
```

### With `fluent-ffmpeg`
```javascript
import fluentFfmpeg from 'fluent-ffmpeg';
import ffmpegBinary from '@backendsuraj/offline-ffmpeg';

// Manually set the path to the bundled binary
fluentFfmpeg.setFfmpegPath(ffmpegBinary.path);

// Use fluent-ffmpeg as usual
fluentFfmpeg('input.mp4').save('output.mp3');
```

## Binary Details
- **Source**: [BtbN/FFmpeg-Builds](https://github.com/BtbN/FFmpeg-Builds/releases)
- **Version**: 8.0.0
- **License**: LGPL 3.0

## Supported Platforms
| OS | Architecture | Status |
| :--- | :--- | :--- |
| **Windows** | x64 | ✅ Supported |
| **Linux** | x64 | ✅ Supported |
| **MacOS** | Any | ⏳ Coming Soon |
