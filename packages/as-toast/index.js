import ASToast from './src/ASToast.vue';

ASToast.intall = function(Vue) {
    Vue.component(ASToast.name, ASToast)
}

export default ASToast;