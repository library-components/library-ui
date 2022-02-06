import ASCarousel from './src/ASCarousel.vue'

ASCarousel.install = function (Vue) {
    Vue.component(ASCarousel.name, ASCarousel);
};

export default ASCarousel;