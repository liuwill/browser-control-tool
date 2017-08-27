import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

if (!window._GlobalConfig) {
  window._GlobalConfig = { module: 'index' }
}
const globalConfig = window._GlobalConfig

let workingModule = null
if (globalConfig.module === 'index') {
  workingModule = require('./component/index')
}

workingModule.init.apply(null, globalConfig)
window._GlobalConfig.component = workingModule
