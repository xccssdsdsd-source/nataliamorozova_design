import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'

const url = process.argv[2] || 'http://localhost:3000'
const out = './temporary screenshots'
await mkdir(out, { recursive: true })

const shots = [
  { name: 'mobile-390-pl', w: 390, h: 844, lang: 'pl', full: false },
  { name: 'mobile-390-ru', w: 390, h: 844, lang: 'ru', full: false },
  { name: 'mobile-390-en', w: 390, h: 844, lang: 'en', full: false },
  { name: 'mobile-390-full', w: 390, h: 844, lang: 'pl', full: true },
  { name: 'tablet-768', w: 768, h: 1024, lang: 'pl', full: true },
  { name: 'desktop-1280', w: 1280, h: 900, lang: 'pl', full: true },
  { name: 'desktop-1440-ru', w: 1440, h: 900, lang: 'ru', full: true }
]

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })

for (const s of shots) {
  const page = await browser.newPage()
  await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 1 })
  await page.evaluateOnNewDocument((lang) => {
    localStorage.setItem('lang', lang)
  }, s.lang)
  await page.goto(url, { waitUntil: 'networkidle0' })
  await page.evaluate(() => document.fonts.ready)
  await new Promise(r => setTimeout(r, 600))
  if (s.full) {
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let y = 0
        const step = () => {
          y += window.innerHeight * 0.8
          window.scrollTo(0, y)
          if (y < document.body.scrollHeight) requestAnimationFrame(step)
          else { window.scrollTo(0, 0); setTimeout(resolve, 400) }
        }
        step()
      })
    })
  }
  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth
  }))
  if (overflow.scrollW > overflow.clientW) {
    console.log(`OVERFLOW ${s.name}: ${overflow.scrollW} > ${overflow.clientW}`)
  }
  await page.screenshot({ path: `${out}/${s.name}.png`, fullPage: s.full })
  console.log('ok', s.name)
  await page.close()
}

await browser.close()
