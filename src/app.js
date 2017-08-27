import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const globalConfig = !window._GlobalConfig ? { module: 'index' } : window._GlobalConfig

let workingModule = null
if(globalConfig.module === 'index'){
  workingModule = require('./component/index')
}

workingModule.init.apply(null, globalConfig)
