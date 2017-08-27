export const init = function (globalConfig, globalUtils) {
  const baseName = globalConfig.app['element']
  const baseElement = $(baseName)

  const elementHtml = require('../templates/index.html')
  baseElement.html(elementHtml)

  $(baseElement).on('click', '*[v-action-click="onHandleClick"]', function () {
    console.log("Click!")
    globalUtils.capturePageScreenShot()
  })

  $(function () {
    console.log("I'm coming")
  })
}

export function getModuleName() {
  return 'index'
}
