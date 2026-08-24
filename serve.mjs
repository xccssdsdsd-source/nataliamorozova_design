import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const root = process.cwd()
const port = Number(process.env.PORT || 3100)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
}

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0])
  const rel = normalize(url === '/' ? '/index.html' : url).replace(/^([/\\])+/, '')
  const file = join(root, rel)
  if (!file.startsWith(root)) { res.writeHead(403).end(); return }
  try {
    const buf = await readFile(file)
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' })
    res.end(buf)
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' }).end('404')
  }
}).listen(port, () => console.log('http://localhost:' + port))
