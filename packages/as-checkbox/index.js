import AsCheckbox from './src/component.vue';

AsCheckbox.install = function(Vue) {
  Vue.component(AsCheckbox.name, AsCheckbox);
}
export default AsCheckbox
//备注 js导出组件，里面需要install
