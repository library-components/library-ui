import AsMain from './src/component.vue'

AsMain.install = function (Vue) {
  Vue.component(AsMain.name, AsMain)
}

export default AsMain
