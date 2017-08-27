var globalUtils = {}
const { desktopCapturer } = require('electron')
const puppeteer = require('puppeteer')

globalUtils.captureDesktopScreenShot = function () {

}

globalUtils.capturePageScreenShot = function (url, savePath) {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.amazon.cn')
    await page.screenshot({path: 'dist/example.png'})

    browser.close()
  })()
}

globalUtils.openNewPage = function () {

}

window && (window.globalUtils = globalUtils)
global && (global.globalUtils = globalUtils)
