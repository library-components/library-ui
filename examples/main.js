import Vue from 'vue'
import App from './App.vue'
import AsUI from '../src/index'
import router from './router/index'
import DemoBlock from './components/DemoBlock/index.vue'
import '@/assets/iconfont/iconfont.css'

import '~/styles/index.scss'
import '~/examples/demo-styles/index.scss'
import '~/packages/theme-chalk/src/index.scss';
import icon from '~/icon.json';

import './router-guard'

Vue.use(AsUI);
Vue.component("demo-block", DemoBlock)
Vue.prototype.$icon = icon; // Icon 示例文档列表页用

new Vue({
    el:"#app",
    router,
    render:(h)=>h(App)
})
