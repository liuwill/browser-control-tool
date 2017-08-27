const puppeteer = require('puppeteer')

var assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(done) {
      this.timeout(20000)
      assert.equal(-1, [1,2,3].indexOf(4));

      (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://www.amazon.cn')
        await page.screenshot({path: 'dist/example.png'})

        browser.close()
        done()
      })()
    })
  })
})
