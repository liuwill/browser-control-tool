import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/main.css'
if (!window._GlobalConfig) {
  window._GlobalConfig = { module: 'index' }
}
const globalConfig = window._GlobalConfig
globalConfig.app = {
  element: "#app"
}

let workingModule = null
if (globalConfig.module === 'index') {
  workingModule = require('./component/index')
}

workingModule.init.call(null, globalConfig)
window._GlobalConfig.component = workingModule
