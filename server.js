const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function send(res, statusCode, body, contentType) {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

function resolveRequest(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const absolutePath = path.normalize(path.join(ROOT, requestedPath));

  if (!absolutePath.startsWith(ROOT)) {
    return null;
  }

  return absolutePath;
}

const server = http.createServer((req, res) => {
  const filePath = resolveRequest(req.url || "/");

  if (!filePath) {
    send(res, 403, "Forbidden", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (!error) {
      const ext = path.extname(filePath).toLowerCase();
      send(res, 200, content, MIME_TYPES[ext] || "application/octet-stream");
      return;
    }

    if (error.code === "ENOENT") {
      fs.readFile(path.join(ROOT, "index.html"), (indexError, indexContent) => {
        if (indexError) {
          send(res, 500, "Unable to load application", "text/plain; charset=utf-8");
          return;
        }

        send(res, 200, indexContent, MIME_TYPES[".html"]);
      });
      return;
    }

    send(res, 500, "Server error", "text/plain; charset=utf-8");
  });
});

server.listen(PORT, () => {
  console.log(`Admin dashboard available at http://localhost:${PORT}`);
});
