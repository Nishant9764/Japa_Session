const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;
const IMG_DIR = path.join(ROOT, 'NRJD_Pics');

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
};

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);

  // API: list images
  if (url === '/api/images') {
    try {
      const files = fs.readdirSync(IMG_DIR)
        .filter(f => /\.(jpe?g|png)$/i.test(f))
        .sort();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(files));
    } catch (e) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('[]');
    }
    return;
  }

  // Serve static files
  let filePath = path.join(ROOT, url === '/' ? 'index.html' : url);
  filePath = path.normalize(filePath);

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(500);
        res.end('Server Error');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🔔 Japa Session Tool running at http://localhost:${PORT}`);
  console.log(`   Images folder: ${IMG_DIR}`);
});
