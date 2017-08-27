export const init = function (globalConfig) {
  const baseName = globalConfig.app['element']
  const baseElement = $(baseName)

  const elementHtml = require('../templates/index.html')
  baseElement.html(elementHtml)

  $(function () {
    console.log("I'm coming")
  })
}

export function getModuleName() {
  return 'index'
}
