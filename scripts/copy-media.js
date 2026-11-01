const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const picDir = path.join(rootDir, 'Picutures');
const vidDir = path.join(rootDir, 'Vidoes');
const clientMediaDir = path.join(rootDir, 'client', 'public', 'media');

if (!fs.existsSync(clientMediaDir)) {
  fs.mkdirSync(clientMediaDir, { recursive: true });
}

console.log('[Media Pipeline] Copying assets non-destructively...');

const manifest = {
  images: [],
  videos: []
};

// Copy Pictures
if (fs.existsSync(picDir)) {
  const picFiles = fs.readdirSync(picDir);
  picFiles.forEach(file => {
    const srcPath = path.join(picDir, file);
    const destPath = path.join(clientMediaDir, file);
    fs.copyFileSync(srcPath, destPath);
    const stat = fs.statSync(srcPath);
    manifest.images.push({
      originalName: file,
      url: `/media/${encodeURIComponent(file)}`,
      size: stat.size
    });
  });
  console.log(`[Media Pipeline] Copied ${picFiles.length} images to ${clientMediaDir}`);
} else {
  console.error('[Media Pipeline] Error: Picutures folder not found at', picDir);
}

// Copy Videos
if (fs.existsSync(vidDir)) {
  const vidFiles = fs.readdirSync(vidDir);
  vidFiles.forEach(file => {
    const srcPath = path.join(vidDir, file);
    const destPath = path.join(clientMediaDir, file);
    fs.copyFileSync(srcPath, destPath);
    const stat = fs.statSync(srcPath);
    manifest.videos.push({
      originalName: file,
      url: `/media/${encodeURIComponent(file)}`,
      size: stat.size
    });
  });
  console.log(`[Media Pipeline] Copied ${vidFiles.length} videos to ${clientMediaDir}`);
} else {
  console.error('[Media Pipeline] Error: Vidoes folder not found at', vidDir);
}

// Write media manifest JSON in client public for runtime asset resolution
fs.writeFileSync(
  path.join(clientMediaDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8'
);

console.log('[Media Pipeline] Media manifest generated at client/public/media/manifest.json');
