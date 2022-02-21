import ASToast from './src/ASToast.vue';

ASToast.install = function(Vue) {
    Vue.component(ASToast.name, ASToast)
}

export default ASToast;
