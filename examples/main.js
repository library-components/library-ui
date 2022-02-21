import Vue from 'vue'
import App from './App.vue'
import AsUI from '../src/index'
import router from './router/index'
import DemoBlock from './components/DemoBlock/index.vue'
import '@/assets/iconfont/iconfont.css'

import '~/styles/index.scss'
import '~/examples/demo-styles/index.scss'

import './router-guard'

console.log("AsUI: ", AsUI)
Vue.use(AsUI);
Vue.component("demo-block", DemoBlock)

new Vue({
    el:"#app",
    router,
    render:(h)=>h(App)
})
