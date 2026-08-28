import puppeteer from 'puppeteer'
import { fileURLToPath, pathToFileURL } from 'url'
import path from 'path'
const dir = path.dirname(fileURLToPath(import.meta.url))
const b = await puppeteer.launch()
const shot = async (file, w, h, out, type, opts={}) => {
  const p = await b.newPage()
  await p.setViewport({ width: w, height: h, deviceScaleFactor: 1 })
  await p.goto(pathToFileURL(path.join(dir, file)).href, { waitUntil: 'networkidle0' })
  await p.evaluate(() => document.fonts.ready)
  await p.screenshot({ path: path.join(dir, '..', out), type, ...opts })
  await p.close()
  console.log(out)
}
await shot('og.html', 1200, 630, 'assets/og-image.jpg', 'jpeg', { quality: 88 })
await shot('icon.html', 512, 512, 'assets/icon-512.png', 'png')
await shot('icon.html', 180, 180, 'assets/apple-touch-icon.png', 'png')
await shot('icon.html', 192, 192, 'assets/icon-192.png', 'png')
await shot('icon.html', 32, 32, 'assets/favicon-32.png', 'png')
await b.close()
