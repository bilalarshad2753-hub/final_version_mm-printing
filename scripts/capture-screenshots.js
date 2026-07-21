const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')

const pages = [
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
  { name: 'testimonials', url: 'http://localhost:3000/testimonials' },
]

const viewports = [
  { name: 'iphone-se', width: 375, height: 812 },
  { name: 'iphone-12', width: 390, height: 844 },
  { name: 'pixel-4', width: 412, height: 915 },
]

;(async () => {
  const outDir = path.resolve(__dirname, '..', 'screenshots')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  for (const p of pages) {
    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 })
      const page = await context.newPage()
      console.log(`Capturing ${p.name} @ ${vp.name} (${vp.width}x${vp.height})`)
      try {
        await page.goto(p.url, { waitUntil: 'networkidle' })
        await page.waitForTimeout(500)
        const file = path.join(outDir, `${p.name}-${vp.name}-${vp.width}x${vp.height}.png`)
        await page.screenshot({ path: file, fullPage: true })
        console.log('Saved', file)
      } catch (err) {
        console.error('Failed to capture', p.url, err.message)
      }
      await context.close()
    }
  }
  await browser.close()
  console.log('Done')
})()
