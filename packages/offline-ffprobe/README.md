# @backendsuraj/offline-ffprobe

A platform-independent, offline-friendly binary installer of **FFprobe** for Node.js projects.

> **FFprobe Version: 8.0.0**


## Why this package?
Most FFmpeg/FFprobe wrappers download the binary at runtime or install time. This fails in strict corporate environments with firewalls or proxies.
This package **bundles the binaries directly**, so `npm install` is all you need.

## Usage

### Standard Node.js
```javascript
import ffprobe from '@backendsuraj/offline-ffprobe';
import { spawn } from 'child_process';

const ffprobePath = ffprobe.path;
spawn(ffprobePath, ['-version'], { stdio: 'inherit' });
```

### With `fluent-ffmpeg`
```javascript
import fluentFfmpeg from 'fluent-ffmpeg';
import ffprobeBinary from '@backendsuraj/offline-ffprobe';

// Manually set the path to the bundled binary
fluentFfmpeg.setFfprobePath(ffprobeBinary.path);

// Use fluent-ffmpeg as usual
fluentFfmpeg('input.mp4').ffprobe((err, data) => {
    console.log(data);
});
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
