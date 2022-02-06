import ASCheckbox from './src/ASCheckbox.vue';

ASCheckbox.install = function(Vue) {
    Vue.component(ASCheckbox.name, ASCheckbox);
}
export default ASCheckbox
//备注 js导出组件，里面需要install  
