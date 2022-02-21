import AsToast from './src/component.vue';

AsToast.install = function(Vue) {
  Vue.component(AsToast.name, AsToast)
}

export default AsToast;
